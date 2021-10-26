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


	
	  
}