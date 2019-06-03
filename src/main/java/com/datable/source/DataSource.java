package com.datable.source;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

/**
 * 三国杀数据源管理
 */
public class DataSource {


    /**
     * 下载url对应的文件
     *
     * @param urlStr   完整url
     * @param fileName 保存到本地的文件名
     * @param savePath 保存路径，以/结尾
     */
    public static void saveUrlToLocalFile(String urlStr, String fileName, String savePath) throws IOException {

        URL url = new URL(urlStr);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        //设置超时间为3秒
        conn.setConnectTimeout(3 * 1000);
        //防止屏蔽程序抓取而返回403错误
        conn.setRequestProperty("User-Agent", "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt)");

        //得到输入流
        InputStream inputStream = conn.getInputStream();

        //获取数组
        byte[] getData = readInputStream(inputStream);

        //文件保存位置
        File saveDir = new File(savePath);
        if (!saveDir.exists()) {
            saveDir.mkdir();
        }

        File file = new File(saveDir + File.separator + fileName);

        FileOutputStream fos = new FileOutputStream(file);

        fos.write(getData);

        if (fos != null) {
            fos.close();
        }
        if (inputStream != null) {
            inputStream.close();
        }

        System.out.println("info:" + url + " download success");
    }


    /**
     * 从输入流中获取字节数组
     */
    private static byte[] readInputStream(InputStream inputStream) throws IOException {

        byte[] buffer = new byte[1024];

        int len = 0;

        ByteArrayOutputStream bos = new ByteArrayOutputStream();

        while ((len = inputStream.read(buffer)) != -1) {
            bos.write(buffer, 0, len);
        }
        bos.close();

        return bos.toByteArray();
    }

    public static void main(String[] args) {

        String urlToGet = "http://web.sanguosha.com/newsgs/pc/res/assets/runtime/general/maxBig/630601.png";

        try {
            saveUrlToLocalFile(urlToGet, "wangyi_huahao.png", "/home/yaoo/Downloads/");
        } catch (Exception e) {
            // TODO: handle exception
        }
    }


}
