package com.insight.javaBoilerplate.testCases;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeSuite;

public class BaseTest {

    private Playwright playwright;
    public Browser browser;
    public Page page;

    @BeforeClass
    public void setUp(){
        System.out.println("Log file configuration goes here");
        System.out.println("Database configuration goes here");
    }

    public Browser getBrowser(String browserName) {
    playwright = Playwright.create();
        switch (browserName) {
            case "chrome":
                return playwright.chromium().launch(new BrowserType.LaunchOptions().setChannel("chrome").setHeadless(false));
            case "headless":
                return playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(false));
            case "firefox":
                return playwright.firefox().launch(new BrowserType.LaunchOptions().setChannel("firefox").setHeadless(false));
            case "webkit":
                return playwright.webkit().launch(new BrowserType.LaunchOptions().setHeadless(false));
            default:
                throw new IllegalArgumentException();
        }
    }
    public void navigate(Browser browser, String url){
        this.browser = browser;
        page = this.browser.newPage();
        page.navigate(url);
    }
    @AfterMethod
    public void quit(){
        browser.close();
        page.close();
        playwright.close();
    }

}
