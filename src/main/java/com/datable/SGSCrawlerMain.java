package com.datable;

import com.datable.common.StrUtil;
import com.datable.extract.JsonConfParser;
import com.datable.source.DataSource;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * 提取武将描述、皮肤信息的入口
 */
public class SGSCrawlerMain {

    private static String newsgsUrlPrefix = "http://web.sanguosha.com/10/pc";
    private static String newsgsConfigPrefix = newsgsUrlPrefix + "/res";

    public static void main(String[] args) throws IOException {

        // 下载3个最基本的配置文件
//        downloadConfigEntrySGS();

        // 下载武将、皮肤、秀的各种配置文件
        downloadConfigSGS();

    }

    private static void downloadConfigEntrySGS() {

        List<String> urlToDownloadList = new ArrayList<>();

//        String sgsVersionPath = "/version.json?v=1.7";
        String sgsVersionPath = "/version.json?v=2019052302";
        String defaultResJsonPath = "/res/default.res.json";
        String clientConfigPath = "/res/config/ClientConfig.sgs";
        urlToDownloadList.add(newsgsUrlPrefix + sgsVersionPath);
        urlToDownloadList.add(newsgsUrlPrefix + defaultResJsonPath);
        urlToDownloadList.add(newsgsUrlPrefix + clientConfigPath);

        String downloadToFolder = "/home/yaoo/Documents/3kingdoms/newsgs2019/";

        for (int i = 0, fileCount = urlToDownloadList.size(); i < fileCount; i++) {

            String curUrl = urlToDownloadList.get(i);

            String filename = StrUtil.getFilenameFromUrl(curUrl);

            try {
                DataSource.saveUrlToLocalFile(curUrl, filename, downloadToFolder);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

    }

    private static void downloadConfigSGS() {
        /// 默认配置文件
        String defaultResFolder = "/home/yaoo/Documents/3kingdoms/newsgs2019/";
        String defaultJsonFilePath = defaultResFolder + "default.res.json";

        // 获取所有配置文件的url
        List<String> confFileList = JsonConfParser.getConfFileListFromDefaultJson(defaultJsonFilePath);

        String downloadToFolder = "/home/yaoo/Documents/3kingdoms/newsgs2019/encrypted-sgs/";

        for (int i = 0, fileCount = confFileList.size(); i < fileCount; i++) {

            String curUrl = confFileList.get(i);

            curUrl = newsgsConfigPrefix + "/" + curUrl.substring(1, curUrl.length() - 1);

            String filename = StrUtil.getFilenameFromUrl(curUrl);

            try {
                DataSource.saveUrlToLocalFile(curUrl, filename, downloadToFolder);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

//    public static void downloadUrlToLocal(String downloadToFolder,List<String> urlList){
//        for (int i = 0, fileCount = urlList.size(); i < fileCount; i++) {
//
//            String curUrl = urlList.get(i);
//
//            curUrl = newsgsConfigPrefix + curUrl.substring(1, curUrl.length() - 1);
//
//            String filename = StrUtil.getFilenameFromUrl(curUrl);
//
//            DataSource.saveUrlToLocalFile(curUrl, filename, downloadToFolder);
//        }
//    }

}
