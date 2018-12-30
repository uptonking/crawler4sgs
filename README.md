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
source code file from `http://web.sanguosha.com/newsgs/pc/index.php`