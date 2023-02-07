package com.insight.javaBoilerplate.pageObjects;

import com.microsoft.playwright.Page;

public class LoginPage extends BasePage{
    public LoginPage(Page page) {
        super(page);
    }

    String abTesting = "a[href='/abtest']";
    String addRemoveElement = "a[href='/add_remove_elements/']";
    String BasicAuth = "a[href='/basic_auth']";

    public String getAbTesting() {
        return abTesting;
    }

    public String getAddRemoveElement() {
        return addRemoveElement;
    }

    public String getBasicAuth() {
        return BasicAuth;
    }
}
