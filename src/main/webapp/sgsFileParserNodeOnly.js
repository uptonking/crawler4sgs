var FileAPI = require('file-api')
var FileReader = require('filereader');
var fs = require('fs');

var Zlib = require('./js/node-zlib');
var aesjs = require('./js/aes');

// 读取并解密配置文件
readLocalEncryptedSGS();

function readLocalEncryptedSGS() {

    // 原加密文件.sgs所在的文件夹
    var encryptedSGSFolder = "./sgszip/encrypted-sgs";
    var files = fs.readdirSync(encryptedSGSFolder);
    // console.log(path instanceof Array) // true

    var i = 1;
    files.forEach(function (ele, index) {
        // 若在外层创建，只会生成一个文件
        var reader = new FileReader();
        var File = FileAPI.File;

        /// skip dir
        if (fs.statSync(encryptedSGSFolder + "/" + ele).isDirectory()) {
            return;
        }

        // console.log("file: " + (i++) + ", " + ele);

        reader.readAsArrayBuffer(new File(encryptedSGSFolder + "/" + ele));

        reader.onload = function (e) {
            //此时是arraybuffer类型
            var buffer = e.target.result;
            // console.log(buffer)

            var decryptedJsonObj = parseEncryptedConfigFile(buffer);

            // 解密后生成的新文件
            var newFile = "./sgszip/decrypted-json/" + ele.replace('.sgs', '.json');
            // console.log(newFile);

            fs.writeFile(newFile, JSON.stringify(decryptedJsonObj), function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log(newFile + " was saved!");
            })
        }

    })

}


function parseEncryptedConfigFile(content) {

    var aesUtils = new AESUtils();

    var decryptedFile = aesUtils.AesOfb(content);

    var unzipedFile = Zlib.gunzipSync(decryptedFile);

    // 是二进制数组，Uint8Array
    // console.log(unzipedFile)


    var jsonObj = JSON.parse(unzipedFile);

    return jsonObj;
}

function AESUtils() {

    var t = new Uint8Array([70, 114, 69, 107, 85, 80, 55, 120, 97, 78, 63, 38, 114, 101, 81, 61, 106, 69, 102, 114, 97, 116, 104, 101, 119, 53, 101, 71, 53, 81, 69, 99]),
        e = new Uint8Array([115, 101, 66, 55, 36, 70, 53, 83, 35, 117, 102, 97, 109, 85, 109, 65]),
        n = new Uint8Array([115, 101, 66, 55, 36, 70, 53, 83, 35, 117, 102, 97, 109, 85, 109, 65]);

    this.encryptCounter = new aesjs.Counter(e);
    this.decryptCounter = new aesjs.Counter(n);
    this.encrypt = new aesjs.ModeOfOperation.ctr(t, this.encryptCounter);
    this.decrypt = new aesjs.ModeOfOperation.ctr(t, this.decryptCounter);
    this.jofb = undefined;

}

AESUtils.prototype.AesEncrypt = function (t) {
    if (this.encrypt) {
        return this.encrypt.encrypt(new Uint8Array(t))
    }
    return null
}
AESUtils.prototype.AesDecrypt = function (t) {
    if (this.decrypt) {
        return this.decrypt.decrypt(new Uint8Array(t))
    }
    return null
}
AESUtils.prototype.InitOfb = function () {
    var t = [20, 51, 69, 107, 85, 94, 55, 120, 97, 78, 63, 45, 114, 101, 81, 61],
        e = new Float32Array([137, 101, 62, 55, 36, 70, 86, 69, 35, 117, 67, 33, 109, 85, 97, 225]);
    this.jofb = new aesjs.ModeOfOperation.ofb(t, e)
}

AESUtils.prototype.AesOfb = function (t) {

    // console.log('调用AesOfb');
    // console.log(jofb);

    if (this.jofb === undefined || this.jofb === null) {
        this.InitOfb();
    }

    return this.jofb.decrypt(new Uint8Array(t))
}


