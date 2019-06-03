package com.datable.extract;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class JsonConfParser {

    public static ObjectMapper objectMapper = new ObjectMapper();

    /**
     * 从default.res.json文件中提取其他配置文件的名称
     * 去掉了图片url
     * 只保留了json文件
     *
     * @param defaultJsonFile 全路径
     * @return list
     */
    public static List<String> getConfFileListFromDefaultJson(String defaultJsonFile) {
        List<String> result = new ArrayList<>(512);

        JsonNode node = null;
        try {
            node = objectMapper.readTree(new File(defaultJsonFile));
        } catch (IOException e) {
            e.printStackTrace();
        }

        JsonNode resourcesNode = node.get("resources");

        for (int i = 0, resCount = resourcesNode.size(); i < resCount; i++) {
            String curFilename = resourcesNode.get(i).get("url").toString();

            if (curFilename.endsWith("json\"")) {
                if (curFilename.startsWith("\"config")) {

//                result.add(curFilename.replace("\\.json", "\\.sgs"));
                    curFilename = curFilename.replace("json", "sgs");
                }
                result.add(curFilename);
            }
        }


        return result;
    }

}
