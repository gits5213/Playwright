Architecture: Selenium uses the WebDriver API to interact between web browsers and browser drivers. It operates by translating test cases into JSON and sending them to the browsers, which then execute the commands and send an HTTP response back.
Architecture: Playwright uses a WebSocket connection rather than the WebDriver API and HTTP. This stays open for the duration of the test, so everything is sent on one connection. This is one reason why Playwright’s execution speeds tend to be faster.

## Setup Allure result 
```
Pre-configure
- Folow the instruction from the website - https://docs.qameta.io/allure/#_testng
- Set up POM File  
```
```
- Navigate to the URL - https://repo.maven.apache.org/maven2/io/qameta/allure/allure-commandline/
- Click on the download latest version like: 2.20.1
- Download zip file 
- Extract it
- Set up environment variable upto bin folder
```

```
- Open up the terminal 
- > allure --version (version should be available)
- > allure serve allure-result (Result will open on the browser) 
```

## Run/Execute the test suite
```
- On the test case click run play button or right click on the class file and click on run test
- Right click on the testNG.xml file and clcik on run test
- open up the terminal and type > mvn clean test
```

## Generate result
- Open terminal 
- Allure serve test-result
