package com.pom;

import java.util.concurrent.TimeUnit;

import org.apache.commons.compress.utils.IOUtils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;
import utilities.log;

public class LoginPom {

	 WebDriver driver;
	static log logger = new log();
	public static final Logger Log =  LogManager.getLogger(log.class);
	
	
		
		public static WebElement username(WebDriver driver) {
			logger.info("username");
			return driver.findElement(By.id("input_0"));
		}
		public static WebElement nextBtn(WebDriver driver) {
			logger.info("next button clicked");
			return driver.findElement(By.xpath("/html/body/div[3]/div/div/div[1]/header/div/div/div[2]/div/div/div/div[2]/form/button"));
		
		}
		
                 public static WebElement facultyforgotPAss(WebDriver driver) {
                	 logger.info("faculty forgot password clicked");
                 return driver.findElement(By.xpath("/html/body/div[3]/div/div/div[1]/header/div/div/div[2]/div/div/div/div[2]/div[2]"));
                 }

                 public static WebElement facultyPassword(WebDriver driver) {
                	 logger.info("facultyPassword");
                 return driver.findElement(By.id("password"));
                 }
                 
                 public static WebElement facultySigninButton(WebDriver driver) {
                	 logger.info("next button clicked");
                     return driver.findElement(By.xpath("/html/body/div[3]/div/div/div[1]/header/div/div/div[2]/div/div/div/div[2]/form/button"));
                     }
                 
                 public static WebElement dashboardButton(WebDriver driver) {
             		logger.info("dashboardbutton");
                     return driver.findElement(By.xpath("/html/body/div[2]/div/div/nav/div/div/div[3]/div/div/div/div[1]/div/ul[1]/li[1]/a"));
                     }
                 
                 
                 public static WebElement indexButton(WebDriver driver) {
                	 logger.info("index button");
             		
                     return driver.findElement(By.xpath("/html/body/div[4]/div[2]/div[1]/div/div[1]/div/div[1]/div[2]"));
                     } 
             //    /html/body/div[4]/div[2]/div[1]/div/div[1]/div/div[2]/div[3]/div[1]/a/div
                 public static WebElement resumeButton(WebDriver driver) {
               		logger.info("resume button");
                     return driver.findElement(By.xpath(" /html/body/div[4]/div[2]/div[1]/div/div[1]/div/div[2]/div[3]/div[1]/a/div"));
                     } 
                 public static WebElement coursePlan(WebDriver driver) {
                	 logger.info("course plan");
             		
                     return driver.findElement(By.xpath(" /html/body/div[4]/div[2]/div[1]/div/div[1]/div/div[2]/div[3]/div[2]/a/div"));
                     } 
                 ///html/body/div[4]/div[2]/div[1]/div/div[2]/div/div[1]

public static WebElement otherCourses(WebDriver driver) {
logger.info("other courses");
	
return driver.findElement(By.xpath(" /html/body/div[4]/div[2]/div[1]/div/div[2]/div/div[1]/div[5]/a/div"));
} 

public static WebElement courses(WebDriver driver) {
	logger.info("courses");
	return driver.findElement(By.xpath("//a[@title='Courses']"));
}
public static WebElement signin(WebDriver driver) {
	logger.info("signin");
	return driver.findElement(By.xpath("//button[@type='submit']"));
}

}
