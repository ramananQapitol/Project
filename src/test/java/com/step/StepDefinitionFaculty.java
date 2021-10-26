package com.step;



import java.util.concurrent.TimeUnit;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.pom.LoginPom;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;



public class StepDefinitionFaculty{
	
	WebDriver driver;
	
   
	@Given("Faculty is on the Learnwise Login Page")
	public void facultyIsOnTheLearnwiseLoginPage() {
		
		WebDriverManager.firefoxdriver().setup();
		driver = new FirefoxDriver();

		driver.get("https://learnwise.wfglobal.org/");
		
		driver.manage().window().maximize();
	
		driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
	}
	@When("Faculty should enter valid {string}")
	public void facultyShouldEnterValid(String string) {
		
		LoginPom.username(driver).sendKeys(string);
	}

	@Then("Faculty should verify success message")
	public void facultyShouldVerifySuccessMessage() {
		String Expectedtest ="PLATFORM FEATURES";
		String actualtext = driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/div/div/h1")).getText();
		System.out.println(actualtext);
	Assert.assertTrue("get accept", Expectedtest.equals(actualtext));driver.quit();
	}
	@When("Faculty should enter invalid {string}")
	public void facultyShouldEnterInvalid(String string) {
	  LoginPom.username(driver).sendKeys(string);  
	}

	@Then("Faculty should verify its enter success message")
	public void facultyShouldVerifyItsEnterSuccessMessage() {
		String Expectedtest ="PLATFORM FEATURES";
		String actualtext = driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/div/div/h1")).getText();
		System.out.println(actualtext);
	Assert.assertTrue("get accept", Expectedtest.equals(actualtext));driver.quit();
	    
	}
	@When("Faculty should click next Button")
	public void facultyShouldClickNextButton() {
	    LoginPom.nextBtn(driver).click();
	}

	@Then("Faculty should enter the invalid password{string}")
	public void facultyShouldEnterTheInvalidPassword(String string) {
	    LoginPom.facultyPassword(driver).click();
	}

	@Then("Faculty should verify its  success message")
	public void facultyShouldVerifyItsSuccessMessage() {
		String Expectedtest ="PLATFORM FEATURES";
		String actualtext = driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/div/div/h1")).getText();
		System.out.println(actualtext);
	Assert.assertTrue("get accept", Expectedtest.equals(actualtext));driver.quit();
	}
	@Then("Faculty should click the Sign in Button")
	public void facultyShouldClickTheSignInButton() {
	   LoginPom.facultySigninButton(driver).click();
	}
	@When("Faculty should enter an valid email{string}")
	public void facultyShouldEnterAnValidEmail(String string) {
	    LoginPom.username(driver).sendKeys(string);
	}

	@When("Faculty click the next Button")
	public void facultyClickTheNextButton() {
	    LoginPom.nextBtn(driver).click();
	}

	@Then("Faculty click the forgot password{string}")
	public void facultyClickTheForgotPassword(String string) {
	    LoginPom.facultyforgotPAss(driver).click();
	}

	@Then("Faculty should verify its successfully click")
	public void facultyShouldVerifyItsSuccessfullyClick() {
		String Expectedtest ="PLATFORM FEATURES";
		String actualtext = driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/div/div/h1")).getText();
		System.out.println(actualtext);
	Assert.assertTrue("get accept", Expectedtest.equals(actualtext));driver.quit();
	}
	@Then("Faculty enter the password{string}")
	public void facultyEnterThePassword(String string) {
	    LoginPom.facultyPassword(driver).sendKeys(string);
	}

	@Then("Faculty click on signin button")
	public void facultyClickOnSigninButton() {
	    LoginPom.facultySigninButton(driver).click();;
	}
	@Then("click on dashboard Button")
	public void clickOnDashboardButton() {
		LoginPom.dashboardButton(driver).click();
	}

	@Then("Faculty should verify  dashboard successfully click")
	public void facultyShouldVerifyDashboardSuccessfullyClick() {
		driver.quit();
	}

	@Then("Faculty should click on index Button")
	public void facultyShouldClickOnIndexButton() {
	    LoginPom.indexButton(driver).click();
	}

	@Then("Faculty should verify index successfully click")
	public void facultyShouldVerifyIndexSuccessfullyClick() {
	    driver.quit();
	}
	@Then("Faculty should click on Resume Button")
	public void facultyShouldClickOnResumeButton() {
	    LoginPom.resumeButton(driver).click();
	}

	@Then("Faculty should verify resume successfully click")
	public void facultyShouldVerifyResumeSuccessfullyClick() {
	    driver.quit();
	}
	@Then("Faculty should click on course plan Button")
	public void facultyShouldClickOnCoursePlanButton() {
	    LoginPom.coursePlan(driver).click();
	}

	@Then("Faculty should verify course plan successfully click")
	public void facultyShouldVerifyCoursePlanSuccessfullyClick() {
	    driver.quit();
	}





	
	  
}