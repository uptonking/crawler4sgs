# crawler4sgs

## overview  

1. use `SGSCrawlerMain.java ` to download `xxx.sgs` conf file

2. use `sgsFileParserNodeOnly.js` to convert `xxx.sgs` to json

3. use `sgsJson2xlsx.js` to convert json to excel 

### SGSCrawlerMain.java  
entrance into downloading res file from url

### sgsFileParserNodeOnly.js  
decrypt and unzip `xxx.sgs` conf file to json

### sgsJson2xlsx.js
convert json to .xlsx

### webapp/newsgs-src/
source code file from
 `http://web.sanguosha.com/newsgs/pc/index.php`   
 `https://web.sanguosha.com/10/pc/index.php`  

### faq

- 源码中的.sgs，.atlas, .sk文件分别是什么
    - .sgs是先压缩后加密生成的文件，需要先解密再解压
    - .atlas
        - 可能是
        - https://web.sanguosha.com/10/pc/res/assets/window/gameActivity.atlas
    - .sk
        - 可能是动画特效文件
        - https://web.sanguosha.com/10/pc/res/assets/animate/generalSkin/skinActivityGetedEffect.sk