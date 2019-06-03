# note-js

- FileReader  
FileReader.readAsText()可以轻易地处理一个300k的日志文件，但当日志文件有1G、甚至2G那么大，浏览器就会崩溃。
这是因为readAsText()会一下子把目标文件加载至内存，导致内存超出上限。
所以如果Web应用常常需要处理大文件时，我们应该使用FileReader.readAsArrayBuffer()来一块一块读取文件。

- Object.keys()   
Object.keys only returns enumerable own keys.   
Try Object.getOwnPropertyNames.

- 类型判断
```
var color1 = new String("green");
color1 instanceof String; // returns true
var color2 = "coral";
color2 instanceof String; // returns false (color2 is not a String object)
```
  
