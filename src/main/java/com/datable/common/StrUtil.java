package com.datable.common;

public class StrUtil {

    /**
     * 从url中获取文件名
     *
     * @param url 资源地址
     * @return 文件名
     */
    public static String getFilenameFromUrl(String url) {

        if (url == null || url.length() < 1) {
//            throw new RuntimeException("input url cannot be empty.")
        }

        String resultStr = url.substring(url.lastIndexOf('/') + 1);

        if (resultStr.contains("?")) {
            resultStr = resultStr.split("\\?")[0];
        }

        return resultStr;
    }


}
