package com.insight.javaBoilerplate.testCases;

import com.insight.javaBoilerplate.pageObjects.LoginPage;
import com.insight.javaBoilerplate.utilities.Data;
import com.microsoft.playwright.Browser;
import org.testng.annotations.Test;

public class LoginTest extends BaseTest{
    @Test
    public void loginTest() throws InterruptedException {
        Browser browser = getBrowser(Data.CHROME);
        navigate(browser, Data.URL);

        LoginPage loginPage = new LoginPage(page);
        loginPage.click(loginPage.getAbTesting());
        Thread.sleep(1000);
        page.goBack();
        Thread.sleep(1000);
        loginPage.click(loginPage.getAddRemoveElement());
        Thread.sleep(1000);
        page.goBack();
        Thread.sleep(1000);
        loginPage.click(loginPage.getBasicAuth());
        Thread.sleep(1000);
        page.goBack();
        Thread.sleep(1000);
    }
}
