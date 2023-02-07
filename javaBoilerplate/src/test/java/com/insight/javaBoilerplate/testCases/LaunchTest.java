package com.insight.javaBoilerplate.testCases;

import com.microsoft.playwright.*;
import org.testng.annotations.Test;

import java.awt.*;
import java.nio.file.Paths;

public class LaunchTest
{
    @Test
    public void playwrightTest()
    {

        Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();
        double width = screenSize.getWidth();
        double height = screenSize.getHeight();

        Playwright playwright = Playwright.create();
        //.setSlowMo(50));
         Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(false));
        //Without private mode
        // BrowserContext browserContext = playwright.chromium().launchPersistentContext(Paths.get(""), new BrowserType.LaunchPersistentContextOptions().setHeadless(false));
        // Set browser executable path
        // Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(false).setExecutablePath(Paths.get("chrome.exe/msedge.exe/firefox.exe")));
        // Browser set edge
        // Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setChannel("msedge").setHeadless(false));
        // Chrome
        // Browser browser = playwright.firefox().launch(new BrowserType.LaunchOptions().setHeadless(false));
        // Firefox
        // Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setChannel("chrome").setHeadless(false));
        // Maximizing Browser
        // BrowserContext browserContext = browser.newContext(new Browser.NewContextOptions().setViewportSize((int)width, (int)height));

        // Simple way to maximize
//        ArrayList<String> argument = new ArrayList<>();
//        argument.add("--start-maximized");
//        Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setChannel("chrome").setHeadless(false).setArgs(argument));
//        BrowserContext browserContext = browser.newContext(new Browser.NewContextOptions().setViewportSize(null));

        Page page = browser.newPage();
            page.navigate("https://reqres.in/");
            System.out.println(page.title());

            page.close();
            playwright.close();

    }

}
