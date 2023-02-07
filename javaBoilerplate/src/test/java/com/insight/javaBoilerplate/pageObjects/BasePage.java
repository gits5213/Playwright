package com.insight.javaBoilerplate.pageObjects;

import com.microsoft.playwright.Page;

public class BasePage {

    public static Page page;

    public BasePage(Page page){
        this.page = page;
    }
    public void click(String locator){
        page.click(locator);
    }
    public void fill(String locator, String value){
        page.fill(locator, value);
    }
    public void mouseHover(String locator){
        page.hover(locator);

    }


}
