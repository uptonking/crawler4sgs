package com.datable.common;

import org.junit.Test;
import org.junit.Before;
import org.junit.After;

import static junit.framework.TestCase.assertEquals;

/**
 * StrUtil Tester.
 *
 * @author <Authors name>
 * @version 1.0
 * @since <pre>Dec 23, 2018</pre>
 */
public class StrUtilTest {

    private String url1 = "http://web.sanguosha.com/newsgs/pc/res/assets/runtime/general/maxBig/630601.png";
    private String url2 = "http://web.sanguosha.com/newsgs/pc/res/assets/runtime/general/big/static/100101.png?param1=a&p2=b";

    @Before
    public void before() throws Exception {
    }

    @After
    public void after() throws Exception {
    }

    /**
     * Method: getFilenameFromUrl(String url)
     */
    @Test
    public void testGetFilenameFromUrl() throws Exception {

        String fname4url1 = StrUtil.getFilenameFromUrl(url1);
        String fname4url2 = StrUtil.getFilenameFromUrl(url2);

        assertEquals( "630601.png",fname4url1);
        assertEquals( "100101.png",fname4url2);

    }


} 
