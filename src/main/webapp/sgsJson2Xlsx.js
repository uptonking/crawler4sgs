var fs = require('fs');
var XLSX = require('xlsx');

// var buf = fs.readFileSync("sheetjs.xlsx");
// var wb = XLSX.read(buf, {type:'buffer'});

// var workbook = XLSX.readFile('f');

readJsonAndConvertToXlsx();

function readJsonAndConvertToXlsx() {

    // 原加密文件所在的文件夹
//    var jsonDir = "./sgszip/decrypted-json";
    var jsonDir = "/home/yaoo/Documents/3kingdoms/newsgs2019/decrypted-json";
    var files = fs.readdirSync(jsonDir);
    // console.log(path instanceof Array) // true
    // console.log(files);

    files.forEach(function (ele, index) {

        var filePath = jsonDir + "/" + ele;
        // console.log('==== ', filePath);

        /// skip dir
        if (fs.statSync(filePath).isDirectory()) {
            return;
        }

        var f = fs.readFileSync(filePath, 'utf8');
        // console.log(f.substr(0, 120));

        var jsonObj = JSON.parse(f);
        // console.log(jsonObj);

        // 获取当前json对象的可枚举属性
        var propsArr = Object.keys(jsonObj);
        // 用来生成worksheet的数组
        var arr4xlsx;
        // 数组在json中对应的属性名，用来生成worksheet
        var pNeed = '';

        // console.log(propsArr.length);

        /// 处理多个属性的情况，源文件是基于模板生成的，其中有3个固定属性
        if (propsArr.length > 0) {
            propsArr.splice(propsArr.indexOf('Tool'), 1);
            propsArr.splice(propsArr.indexOf('Version'), 1);
            propsArr.splice(propsArr.indexOf('DoNotUseThis'), 1);

            // console.log('==== get arr from top');

            // 暂时先取第一个
            pNeed = propsArr[0];

            /// 寻找值为数组的属性名
            var i = 0;
            while ((!jsonObj[pNeed] instanceof Array) && i < propsArr.length) {
                pNeed = propsArr[++i];
            }

            if (!jsonObj[pNeed] instanceof Array) {
                console.log('当前json对象的属性不是数组，请检查是否选错了属性');
                console.log(JSON.stringify(jsonObj).substring(0, 120));
            }
        }

        /// 处理嵌套对象的情况，源文件不是基于模板生成的
        if (propsArr.length === 0) {

            propsArr = Object.getOwnPropertyNames(jsonObj);

            // console.log('==== get arr from nested obj');
            pNeed = propsArr[0];

            // console.log('pNeed', pNeed);
            // console.log(jsonObj[propsArr[0]]);
            // console.log(jsonObj[pNeed] instanceof Array);

            /// 寻找值为数组的属性名
            while (!(jsonObj[pNeed] instanceof Array)) {
                jsonObj = jsonObj[pNeed];
                propsArr = Object.getOwnPropertyNames(jsonObj);
                pNeed = propsArr[0];
                if (typeof jsonObj[pNeed] === 'string' && propsArr.length > 1) {
                    pNeed = propsArr[1];
                }

                // console.log(pNeed)
                // console.log(jsonObj[pNeed] instanceof Array);
            }

        }

        arr4xlsx = jsonObj[pNeed];

        // console.log(arr4xlsx);

        var sheetConf = {skipHeader: false,};
        var ws = XLSX.utils.json_to_sheet(arr4xlsx, sheetConf);

        // console.log(ws);

        var workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, ws, "Sheet1");

        var newFile = "/home/yaoo/Documents/3kingdoms/newsgs2019/decrypted-json/xlsx/" + ele.replace('.json', '.xlsx');

        // XLSX.writeFile(workbook, newFile);
        // console.log(workbook)

        // var writeConf = {bookType: 'xlsx', bookSST: false, type: 'binary',};
        var writeConf = {bookType: 'xlsx', bookSST: false, type: 'buffer',};
        var buffer = XLSX.write(workbook, writeConf);

        // // 生成excel文件
        // fs.writeFile(newFile, buffer, {encoding: 'binary'}, function (err) {
        fs.writeFile(newFile, buffer, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log(newFile + " was saved!");
        });

    });

}