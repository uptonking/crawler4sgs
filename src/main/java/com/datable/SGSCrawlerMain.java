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


    public static void main(String[] args) throws IOException {

        String newsgsUrlPrefix = "http://web.sanguosha.com/newsgs/pc/";
        String newsgsConfigPrefix = newsgsUrlPrefix + "res/";

        List<String> urlToDownloadList = new ArrayList<>();

        /// 3个最基本的配置文件
//        String sgsVersionPath = "version.json?v=1.7";
//        String defaultResJsonPath = "res/default.res.json";
//        String clientConfigPath = "res/config/ClientConfig.sgs";
//        urlToDownloadList.add(newsgsUrlPrefix + sgsVersionPath);
//        urlToDownloadList.add(newsgsUrlPrefix + defaultResJsonPath);
//        urlToDownloadList.add(newsgsUrlPrefix + clientConfigPath);


        /// 默认配置文件
        String defaultResFolder = "/home/yaoo/Documents/temp201x/newsgs/";
        String defaultJsonFilePath = defaultResFolder + "default.res.json";

        // 获取所有配置文件的url
        List<String> confFileList = JsonConfParser.getConfFileListFromDefaultJson(defaultJsonFilePath);

        String downloadToFolder = "/home/yaoo/Documents/temp201x/newsgs/encrypted/";

        for (int i = 0, fileCount = confFileList.size(); i < fileCount; i++) {

            String curUrl = confFileList.get(i);

            curUrl = newsgsConfigPrefix + curUrl.substring(1, curUrl.length() - 1);

            String filename = StrUtil.getFilenameFromUrl(curUrl);

            DataSource.saveUrlToLocalFile(curUrl, filename, downloadToFolder);
        }

    }
}
