var JSZip = require('jszip');
var JSZipUtils = require('jszip-utils');
var FileSaver = require('file-saver');
var Zlib = require('./js/node-zlib');
var aesjs = require('./js/aes');

var zip = new JSZip();

// console.log(Zlib);
// console.log(aesjs);

/**
 * 通用的下载文件内容到本地文件的方法
 *
 * @param content 文件内容
 * @param filename 保存到的文件名
 */
function saveContentToLocal(content, filename) {
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';

    // 字符内容转变成blob地址
    var blob = new Blob([content]);

    eleLink.href = URL.createObjectURL(blob);

    // 通过代码触发点击
    document.body.appendChild(eleLink);
    eleLink.click();

    // 然后移除
    document.body.removeChild(eleLink);
}


function uploadButLocalRead(event) {
    console.log('点击了上传按钮')
    console.log(event.target.files)
    var f = event.target.files[0];

    var reader = new FileReader();
    reader.readAsArrayBuffer(f);
    reader.onload = function (e) {
        //此时是arraybuffer类型
        var buffer = e.target.result;
        console.log(buffer)

        var decryptedJsonObj = parseEncryptedConfigFile(buffer);
        saveContentToLocal(JSON.stringify(decryptedJsonObj), f.name.replace(".sgs",".json"));
    }
}


// 给input元素添加onchange监听器
document.getElementById("upFileSGS").addEventListener('change', uploadButLocalRead);



/// 在浏览器创建zip，下载到本地
// zip.file("hello.txt", "Hello World\n")
// zip.generateAsync({ type: "blob" })
//     .then(function(content) {
//         // see FileSaver.js
//         console.log("inside generateAsync() ")
//         FileSaver.saveAs(content, "example.zip");
//     });

/// 在浏览器读取url代表的zip文件，
// var zipFileUrl = 'example.zip';
// var zipFileUrl = 'sgszip/sgsGame.sgs';
// var zipFileUrl = 'ClientConfig.sgs';
// JSZipUtils.getBinaryContent(zipFileUrl, function (err, zipData) {
//     if (err) {
//         throw err; // or handle the error
//     }
//
//     var fileData = [];
//
//     JSZip.loadAsync(zipData).then(function (zip) {
//
//         for (var fileName in zip.files) {
//
//             console.log('====');
//             console.log(fileName);
//
//             // 文件内容
//             // var data = zip.file(fileName).async("string");
//             var data = zip.file(fileName).async("arraybuffer");
//
//             fileData.push(data);
//         }
//
//         console.log(fileData)
//     });
//
//
// });

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

    console.log('调用AesOfb');
    // console.log(jofb);

    if (this.jofb == undefined || this.jofb == null) {
        this.InitOfb();
    }

    return this.jofb.decrypt(new Uint8Array(t))
}


function parseEncryptedConfigFile(content) {

    var aesUtils = new AESUtils();

    var decryptedFile = aesUtils.AesOfb(content);

    // var unzipedFile = new Zlib.gunzipSync(decryptedFile);
    var unzipedFile = Zlib.gunzipSync(decryptedFile);

    // 是二进制数组，Uint8Array
    // console.log(unzipedFile)

    // var decompressedFile = unzipedFile.decompress();

    // var byteArray = new ByteArray;
    // byteArray.writeArrayBuffer(decompressedFile.buffer);

    // var bytes = byteArray.readUTFBytes();


    var jsonObj = JSON.parse(unzipedFile);

    console.log(jsonObj);

    return jsonObj;

    // saveContentToLocal(JSON.stringify(confJsonObj), 'c.json');
    // return '';
}


// AESUtilsBAK = function() {

//     function t() {}

//     return t.prototype.Init = function() {
//             var t = new Uint8Array([70, 114, 69, 107, 85, 80, 55, 120, 97, 78, 63, 38, 114, 101, 81, 61, 106, 69, 102, 114, 97, 116, 104, 101, 119, 53, 101, 71, 53, 81, 69, 99]),
//                 e = new Uint8Array([115, 101, 66, 55, 36, 70, 53, 83, 35, 117, 102, 97, 109, 85, 109, 65]),
//                 n = new Uint8Array([115, 101, 66, 55, 36, 70, 53, 83, 35, 117, 102, 97, 109, 85, 109, 65]);
//             this.encryptCounter = new aesjs.Counter(e),
//                 this.decryptCounter = new aesjs.Counter(n),
//                 this.encrypt = new aesjs.ModeOfOperation.ctr(t, this.encryptCounter),
//                 this.decrypt = new aesjs.ModeOfOperation.ctr(t, this.decryptCounter)
//         },

//         t.prototype.AesEncrypt = function(t) {
//             if (this.encrypt) {
//                 return this.encrypt.encrypt(new Uint8Array(t))
//             }
//             return null
//         },

//         t.prototype.AesDecrypt = function(t) {
//             if (this.decrypt) {
//                 return this.decrypt.decrypt(new Uint8Array(t))
//             }
//             return null
//         },

//         t.prototype.InitOfb = function() {
//             var t = [20, 51, 69, 107, 85, 94, 55, 120, 97, 78, 63, 45, 114, 101, 81, 61],
//                 e = new Float32Array([137, 101, 62, 55, 36, 70, 86, 69, 35, 117, 67, 33, 109, 85, 97, 225]);
//             this.jofb = new aesjs.ModeOfOperation.ofb(t, e)
//         },

//         t.prototype.AesOfb = function(t) {
//             return this.jofb || this.InitOfb(), this.jofb.decrypt(new Uint8Array(t))
//         }, t
// }

/// 所有配置的base
// ConfigerBase = function() {

//     function t(t) {
//         this.configName = "", this.configName = t
//     }

//     return t.prototype.ParseConfig = function(t) {

//         if (t || console.log("配置解析出错：" + this.configName), t instanceof ArrayBuffer) {

//             this.aesUtils || (this.aesUtils = new AESUtils);

//             // 配置文件 解密 解压缩
//             var e = this.aesUtils.AesOfb(t),
//                 n = new Zlib.Gunzip(e),
//                 i = n.decompress(),
//                 o = new ByteArray;
//             o.endian = Laya.Byte.LITTLE_ENDIAN, o.writeArrayBuffer(i.buffer), o.pos = 0;
//             var r = o.readUTFBytes(o.length);
//             try {
//                 t = JSON.parse(r)
//             } catch (t) {
//                 console.log("json解析出错:" + this.configName, t)
//             }
//         }
//         return t
//     }, t.prototype.toString = function() {
//         return this.configName
//     }, t
// }