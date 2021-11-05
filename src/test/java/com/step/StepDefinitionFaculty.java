package com.step;



import java.util.concurrent.TimeUnit;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.pom.LoginPom;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import utilities.log;



public class StepDefinitionFaculty{
	
	WebDriver driver;
	log Logger =new log();
	
   
	@Given("Faculty is on the Learnwise Login Page")
	public void facultyIsOnTheLearnwiseLoginPage() {
		
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
      
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
	public void facultyClickOnSigninButton() throws InterruptedException {
	    LoginPom.facultySigninButton(driver).click();
	    
	}
	@Then("click on dashboard Button")
	public void clickOnDashboardButton() throws InterruptedException {
		LoginPom.dashboardButton(driver).click();
		Thread.sleep(5000);
	}

	@Then("Faculty should verify  dashboard successfully click")
	public void facultyShouldVerifyDashboardSuccessfullyClick() throws InterruptedException {
		driver.quit();
		Thread.sleep(5000);
	}

	@Then("Faculty should click on index Button")
	public void facultyShouldClickOnIndexButton() throws InterruptedException {
	    LoginPom.indexButton(driver).click();
	    
	    
	}

	@Then("Faculty should verify index successfully click")
	public void facultyShouldVerifyIndexSuccessfullyClick() throws InterruptedException {
	    driver.quit();
	    Thread.sleep(5000);
	}
	@Then("Faculty should click on Resume Button")
	public void facultyShouldClickOnResumeButton() throws InterruptedException {
	    LoginPom.resumeButton(driver).click();
	    Thread.sleep(5000);
	}

	@Then("Faculty should verify resume successfully click")
	public void facultyShouldVerifyResumeSuccessfullyClick() throws InterruptedException {
	    driver.quit();
	    Thread.sleep(5000);
	}
	@Then("Faculty should click on course plan Button")
	public void facultyShouldClickOnCoursePlanButton() throws InterruptedException {
	    LoginPom.coursePlan(driver).click();
	    Thread.sleep(10000);
	}

	@Then("Faculty should verify course plan successfully click")
	public void facultyShouldVerifyCoursePlanSuccessfullyClick() {
	    driver.quit();
	}
	@Then("Faculty should click on other course Button")
	public void facultyShouldClickOnOtherCourseButton() {
	    LoginPom.otherCourses(driver).click();
	}

	@Then("Faculty should verify other course  successfully click")
	public void facultyShouldVerifyOtherCourseSuccessfullyClick() {
	   driver.quit();
	}
	//tag12
//	@Given("Faculty is on  Login Page")
//	public void facultyIsOnLoginPage() {
//	    WebDriverManager.firefoxdriver().setup();
//		driver=new FirefoxDriver();
//		driver.get("https://learnwise.wfglobal.org");
//		driver.manage().window().maximize();
//		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//		LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//		LoginPom.nextBtn(driver).click();
//		LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//		LoginPom.signin(driver).click();


	@Given("Faculty is on  Login Page")
	public void facultyIsOnLoginPage() {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.get("https://learnwise.wfglobal.org");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	    
	}
	
	@And("Faculty enter the username{string}")
	public void facultyEnterTheUsername(String string) {
		 
			LoginPom.username(driver).sendKeys(string);
	   
	}

	@Then("click the next button and enter password{string}")
	public void clickTheNextButtonAndEnterPassword(String string) {
		LoginPom.nextBtn(driver).click();
		LoginPom.facultyPassword(driver).sendKeys(string);
		LoginPom.signin(driver).click();
	}
	
	@When("User should click on course")
	public void userShouldClickOnCourse() throws Exception {
		LoginPom.courses(driver).click();
		Thread.sleep(2000);

	}



	@Then("User should start the course")
	public void userShouldStartTheCourse() {
		driver.quit();
		System.out.println("Clicking On Course Module");
	}
	//======================

	//	 Click on create Batch and view details
	//	Tag13

//	@Given("User should be in couRse")
//	public void userShouldBeInCouRse() throws InterruptedException {
//		WebDriverManager.firefoxdriver().setup();
//		driver=new FirefoxDriver();
//		driver.get("https://learnwise.wfglobal.org");
//		driver.manage().window().maximize();
//		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//		LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//		LoginPom.nextBtn(driver).click();
//		LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//		LoginPom.signin(driver).click();
//		Thread.sleep(10000);
//	}

	@When("User should click on courses")
	public void userShouldClickOnCourses() throws Exception {
		
		LoginPom.courses(driver).click();
		Thread.sleep(5000);
	driver.findElement(By.xpath("//span[contains(text(),' Foundational Course in Entrepreneurship V3 ')]//following::span[2]")).click();
		driver.findElement(By.xpath("//span[contains(text(),'CREATE NEW BATCH')]")).click();
		Thread.sleep(2000);
	}

	@Then("User should able to Create A Batch")
	public void userShouldAbleToCreateABatch() {
		driver.quit();
		System.out.println("Clicking On Create Batch");


	}
	//=====================
//	//	Tag14
//	@Given("Be in course page")
//	public void beInCoursePage() throws InterruptedException {
//		WebDriverManager.firefoxdriver().setup();
//		driver=new FirefoxDriver();
//		driver.get("https://learnwise.wfglobal.org/");
//		driver.manage().window().maximize();
//		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//		LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//		LoginPom.nextBtn(driver).click();
//		LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//		LoginPom.signin(driver).click();
//		Thread.sleep(10000);
//	}

	@When("click on create batch")
	public void clickOnCreateBatch() throws Exception {
		LoginPom.courses(driver).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("//span[contains(text(),' Foundational Course in Entrepreneurship V3 ')]//following::span[2]")).click();
		driver.findElement(By.xpath("//span[contains(text(),'CREATE NEW BATCH')]")).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("//input[@id='input_0']")).sendKeys("Batch111");
		driver.findElement(By.xpath("//input[@id='input_1']")).sendKeys("12");
		Thread.sleep(5000);
		driver.findElement(By.xpath("//input[@id='input_1']//following::button[1]")).click();
//		driver.findElement(By.xpath("//*[@id=\"md-4-month-2021-11-5\"]/span")).click();
//		Thread.sleep(3000);
//		driver.findElement(By.xpath("//*[@id=\"accordiongroup-146-9998-panel\"]/div/div/div/form/div[2]/div[4]/div/button/span")).click();
//		Thread.sleep(3000);
	}

	@Then("Enter details to create batch")
	public void enterDetailsToCreateBatch() {
		driver.quit();
		System.out.println("Creating A Batch");
	}

	//	==============================
	//	Tag15

//	@Given("User should be in home page on course")
//	public void userShouldBeInHomePageOnCourse() throws InterruptedException {
//		WebDriverManager.firefoxdriver().setup();
//		driver=new FirefoxDriver();
//		driver.get("https://learnwise.wfglobal.org/");
//		driver.manage().window().maximize();
//		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//		LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//		LoginPom.nextBtn(driver).click();
//		LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//		LoginPom.signin(driver).click();
//		Thread.sleep(10000);
//	}

	@When("User should click Create BATCH")
	public void userShouldClickCreateBATCH() throws Exception {
		LoginPom.courses(driver).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("//span[contains(text(),' Foundational Course in Entrepreneurship V3 ')]//following::span[2]")).click();
		driver.findElement(By.xpath("//span[contains(text(),'COPY BATCH')]")).click();
		Thread.sleep(3000);
	}

	@Then("Click on copy batch")
	public void clickOnCopyBatch() {
		driver.quit();
		System.out.println("Clicking On Copy Batch");
	}

	//	=========================
	//	Tag16
//	@Given("User should be in course page")
//	public void userShouldBeInCoursePage() throws InterruptedException {
//		WebDriverManager.firefoxdriver().setup();
//		driver=new FirefoxDriver();
//		driver.get("https://learnwise.wfglobal.org/");
//		driver.manage().window().maximize();
//		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//		LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//		LoginPom.nextBtn(driver).click();
//		LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//		LoginPom.signin(driver).click();
//		Thread.sleep(5000);
//	}

	@When("User should click Copy BATCH")
	public void userShouldClickCopyBATCH() throws Exception {
		LoginPom.courses(driver).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("//span[contains(text(),' Foundational Course in Entrepreneurship V3 ')]//following::span[2]")).click();
		driver.findElement(By.xpath("//span[contains(text(),'COPY BATCH')]")).click();
		driver.findElement(By.xpath("//input[@id='input_0']")).sendKeys("Batch200");
		Thread.sleep(2000);

	}

	@Then("Enter Batch deTails")
	public void enterBatchDeTails() {
		driver.quit();
		System.out.println("Entering batch details");
	}

	//	Tag17
//	@Given("User should be in coursepage")
//	public void userShouldBeInCoursepage() throws InterruptedException {
//		WebDriverManager.firefoxdriver().setup();
//		driver=new FirefoxDriver();
//		driver.get("https://learnwise.wfglobal.org/");
//		driver.manage().window().maximize();
//		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//		LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//		LoginPom.nextBtn(driver).click();
//		LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//		LoginPom.signin(driver).click();
//		Thread.sleep(10000);
//	}

	@When("User should click on Start course")
	public void userShouldClickOnStartCourse() throws Exception {
		LoginPom.courses(driver).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("//span[contains(text(),' Foundational Course in Entrepreneurship V3 ')]//following::span[1]")).click();
		driver.findElement(By.xpath("//button[contains(text(),'Ok')]")).click();
		driver.findElement(By.xpath("//button[contains(text(),'Preparation mode')]")).click();
		Thread.sleep(3000);
	}

	@Then("User should see coursedetails")
	public void userShouldSeeCoursedetails() {
		driver.quit();
		System.out.println("Faculty should see Course details");

	}

	//Tag18
//	@Given("User should be in course details page")
//	public void userShouldBeInCourseDetailsPage() throws InterruptedException {
//		WebDriverManager.firefoxdriver().setup();
//		driver=new FirefoxDriver();
//		driver.get("https://learnwise.wfglobal.org/");
//		driver.manage().window().maximize();
//		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//		LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//		LoginPom.nextBtn(driver).click();
//		LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//		LoginPom.signin(driver).click();
//		Thread.sleep(10000);
//	}

	@When("User should see the batch names in dropdown options")
	public void userShouldSeeTheBatchNamesInDropdownOptions() throws Exception {
		LoginPom.courses(driver).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("//span[contains(text(),' Foundational Course in Entrepreneurship V3 ')]//following::span[1]")).click();
		driver.findElement(By.xpath("//button[contains(text(),'Ok')]")).click();
		driver.findElement(By.xpath("//button[contains(text(),'Preparation mode')]")).click();
		driver.findElement(By.xpath("//select[@id='user-batch-switch']")).click();
		driver.findElement(By.xpath("//option[contains(text(),'FCV3_Shyamalima Testing')]")).click();
		driver.findElement(By.xpath("//button[contains(text(),'Ok')]")).click();
		Thread.sleep(2000);


	}

	@Then("User should select other batch")
	public void userShouldSelectOtherBatch() {
		driver.quit();
		System.out.println("Faculty should create another batch");
	}
	//Tag19
//	@Given("Faculty should be in courses details")
//	public void facultyShouldBeInCoursesDetails() throws InterruptedException {
//		WebDriverManager.firefoxdriver().setup();
//		driver=new FirefoxDriver();
//		driver.get("https://learnwise.wfglobal.org/");
//		driver.manage().window().maximize();
//		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//		LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//		LoginPom.nextBtn(driver).click();
//		LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//		LoginPom.signin(driver).click();
//		Thread.sleep(10000);
//	}

	@When("click on mock test")
	public void clickOnMockTest() throws Exception {
		LoginPom.courses(driver).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("//span[contains(text(),' Foundational Course in Entrepreneurship V3 ')]//following::span[1]")).click();
		driver.findElement(By.xpath("//button[contains(text(),'Ok')]")).click();
		driver.findElement(By.xpath("//button[contains(text(),'Preparation mode')]")).click();


		JavascriptExecutor js=(JavascriptExecutor)driver;

		WebElement MockTest=driver.findElement(By.xpath("//span[contains(text(),'Mock Test')]"));
		js.executeScript("arguments[0].scrollIntoView();",MockTest);
		driver.findElement(By.xpath("//span[contains(text(),'Mock Test')]")).click();
		Thread.sleep(3000);

	}

	@Then("click on play button")
	public void clickOnPlayButton() throws Exception {
		driver.findElement(By.xpath("//span[@class='course_start_greter']")).click();
		Thread.sleep(3000); 
		driver.quit();
		System.out.println("Clicking On Mock Test");
	}

	//Tag20
//	@Given("Faculty should be in Quizzes page")
//	public void facultyShouldBeInQuizzesPage() throws InterruptedException {
//		WebDriverManager.firefoxdriver().setup();
//		driver=new FirefoxDriver();
//		driver.get("https://learnwise.wfglobal.org/");
//		driver.manage().window().maximize();
//		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//		LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//		LoginPom.nextBtn(driver).click();
//		LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//		LoginPom.signin(driver).click();
//		Thread.sleep(10000);
//	}

	@When("Faculty should click on quizzes")
	public void facultyShouldClickOnQuizzes() throws Exception {
		LoginPom.courses(driver).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("//span[contains(text(),' Foundational Course in Entrepreneurship V3 ')]//following::span[1]")).click();
		driver.findElement(By.xpath("//button[contains(text(),'Ok')]")).click();
		driver.findElement(By.xpath("//button[contains(text(),'Preparation mode')]")).click();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//a[contains(text(),'Quizzes')]")).click();

	}

	@Then("Faculty should able see the quizzes")
	public void facultyShouldAbleSeeTheQuizzes() throws InterruptedException {
		driver.quit();
		Thread.sleep(3000);
	}
	//Tag21
//		@Given("Faculty should be in Quizzespage")
//		public void facultyShouldBeInQuizzespage() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should click Quizzes")
		public void facultyShouldClickQuizzes() throws Exception {
			LoginPom.courses(driver).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//span[contains(text(),' Foundational Course in Entrepreneurship V3 ')]//following::span[1]")).click();
			driver.findElement(By.xpath("//button[contains(text(),'Ok')]")).click();
			driver.findElement(By.xpath("//button[contains(text(),'Preparation mode')]")).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//a[contains(text(),'Quizzes')]")).click();
		}

		@Then("Faculty should click on take quizzes")
		public void facultyShouldClickOnTakeQuizzes() throws InterruptedException {
			driver.findElement(By.xpath("//span[contains(text(),'Quizzes')]//following::div[9]")).click();
			driver.quit();
			
			System.out.println("Faculty should click on take quizzes");
			Thread.sleep(3000);
		}


		//Tag22
//		@Given("Faculty should be in Quizz page")
//		public void facultyShouldBeInQuizzPage() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should should take Quizz")
		public void facultyShouldShouldTakeQuizz() throws Exception {
			LoginPom.courses(driver).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//span[contains(text(),' Foundational Course in Entrepreneurship V3 ')]//following::span[1]")).click();
			driver.findElement(By.xpath("//button[contains(text(),'Ok')]")).click();
			driver.findElement(By.xpath("//button[contains(text(),'Preparation mode')]")).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//a[contains(text(),'Quizzes')]")).click();
		}

		@Then("Faculty should click on view quizz Results")
		public void facultyShouldClickOnViewQuizzResults() throws Exception {
			driver.findElement(By.xpath("//span[contains(text(),'Quizzes')]//following::a[2]")).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//span[contains(text(),'FC-ENG-L1-Quiz  - Quiz Results')]//following::td[8]")).click();
			driver.quit();
			System.out.println("Faculty should click on view quizz Results");
			Thread.sleep(3000);
		}
		

		//Tag23
//		@Given("Faculty  dhould bein Quizzes")
//		public void facultyDhouldBeinQuizzes() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should see th Practice Venture")
		public void facultyShouldSeeThPracticeVenture() throws InterruptedException {
			LoginPom.courses(driver).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//span[contains(text(),' Foundational Course in Entrepreneurship V3 ')]//following::span[1]")).click();
			driver.findElement(By.xpath("//button[contains(text(),'Ok')]")).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//button[contains(text(),'Preparation mode')]")).click();
			Thread.sleep(3000);
		}

		@Then("Faculty should click on Practice Venture")
		public void facultyShouldClickOnPracticeVenture() throws Exception {
			Thread.sleep(2000);
			driver.findElement(By.xpath("//a[@title='Practice Venture']")).click();
			driver.quit();
			System.out.println("Faculty should click on Practice Venture");
			Thread.sleep(3000);
		}

		//	Tag24
//		@Given("Faculty is in Quizzes")
//		public void facultyIsInQuizzes() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should see th PV Milestones")
		public void facultyShouldSeeThPVMilestones() throws InterruptedException {
			LoginPom.courses(driver).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//span[contains(text(),' Foundational Course in Entrepreneurship V3 ')]//following::span[1]")).click();
			driver.findElement(By.xpath("//button[contains(text(),'Ok')]")).click();
			driver.findElement(By.xpath("//button[contains(text(),'Preparation mode')]")).click();
		}

		@Then("Faculty should click on PV Milestones")
		public void facultyShouldClickOnPVMilestones() {
			driver.findElement(By.xpath("//a[@title='Practice Venture']//following::a[1]")).click();
			driver.quit();
			System.out.println("Faculty should click on PV Milestones");
		}


		//Tag25
//		@Given("Faculty should attempt Quizz")
//		public void facultyShouldAttemptQuizz() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should take quizz")
		public void facultyShouldTakeQuizz() throws Exception {
			LoginPom.courses(driver).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//span[contains(text(),' Foundational Course in Entrepreneurship V3 ')]//following::span[1]")).click();
			driver.findElement(By.xpath("//button[contains(text(),'Ok')]")).click();
			driver.findElement(By.xpath("//button[contains(text(),'Preparation mode')]")).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//a[contains(text(),'Quizzes')]")).click();
			driver.findElement(By.xpath("//span[contains(text(),'Quizzes')]//following::div[9]")).click();
			driver.findElement(By.xpath("//input[@id='button_submit']")).click();
		}

		@Then("Faculty should click on submit")
		public void facultyShouldClickOnSubmit() {
			driver.findElement(By.xpath("//button[contains(text(),'Yes')]")).click();
			driver.quit();
			System.out.println("Faculty should click on submit");
		}
		//=======================
		//	Tag26
//		@Given("Faculty should attempt Quizz again")
//		public void facultyShouldAttemptQuizzAgain() throws Exception {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should take quizz again")
		public void facultyShouldTakeQuizzAgain() throws Exception {
			LoginPom.courses(driver).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//span[contains(text(),' Foundational Course in Entrepreneurship V3 ')]//following::span[1]")).click();
			driver.findElement(By.xpath("//button[contains(text(),'Ok')]")).click();
			driver.findElement(By.xpath("//button[contains(text(),'Preparation mode')]")).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//a[contains(text(),'Quizzes')]")).click();
			driver.findElement(By.xpath("//span[contains(text(),'Quizzes')]//following::div[9]")).click();

		}

		@Then("Faculty should Re-attempt quizz")
		public void facultyShouldReAttemptQuizz() {
			driver.findElement(By.xpath("//input[@id='edit-tries-0']")).click();
			driver.findElement(By.xpath("//input[@id='button_submit']")).click();
			driver.quit();
			System.out.println("Faculty should Re-attempt quizz");
		}
		//===========================

		//Tag27
//		@Given("Faculty should login To thePage")
//		public void facultyShouldLoginToThePage() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should see the report module")
		public void facultyShouldSeeTheReportModule() throws Exception {
			LoginPom.courses(driver).click();
			Thread.sleep(2000);
			driver.findElement(By.xpath("//span[contains(text(),' Foundational Course in Entrepreneurship V3 ')]//following::span[1]")).click();
			driver.findElement(By.xpath("//button[contains(text(),'Ok')]")).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//button[contains(text(),'Preparation mode')]")).click();


		}

		
		@Then("Faculty should click on Report Module")
		public void facultyShouldClickOnReportModule() throws Exception {
			driver.findElement(By.xpath("//a[contains(text(),'Reports')]")).click();

			Thread.sleep(3000);
			driver.quit();
			System.out.println("Faculty should click on Report Module");

		}


		//Tag28
//		@Given("Faculty should login")
//		public void facultyShouldLogin() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should see the Notification icon")
		public void facultyShouldSeeTheNotificationIcon() throws InterruptedException {
			driver.findElement(By.xpath("//a[@class='notification-icon-red']")).click();
			Thread.sleep(3000);
		}

		@Then("Faculty should click onNotification icon")
		public void facultyShouldClickOnNotificationIcon() {
			driver.quit();
			System.out.println("Faculty should click onNotification icon");
		}




		//	====================
		//Tag29
//		@Given("Faculty is in Quizzes Module")
//		public void facultyIsInQuizzesModule() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should see th Faculty Notes")
		public void facultyShouldSeeThFacultyNotes() throws InterruptedException {
			LoginPom.courses(driver).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//span[contains(text(),' Foundational Course in Entrepreneurship V3 ')]//following::span[1]")).click();
			driver.findElement(By.xpath("//button[contains(text(),'Ok')]")).click();
			Thread.sleep(2000);
			driver.findElement(By.xpath("//button[contains(text(),'Preparation mode')]")).click();
		}

		@Then("Faculty should click on Faculty Notes")
		public void facultyShouldClickOnFacultyNotes() throws Exception {
			driver.findElement(By.xpath("//a[@title='Faculty Notes']")).click();
			Thread.sleep(2000);
			driver.quit();
			System.out.println("Faculty should click on Faculty Notes");


		}
		//Tag30
//		@Given("Faculty should be in QuizzesModule")
//		public void facultyShouldBeInQuizzesModule() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should see the lessons")
		public void facultyShouldSeeTheLessons() throws Exception {
			LoginPom.courses(driver).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//span[contains(text(),' Foundational Course in Entrepreneurship V3 ')]//following::span[1]")).click();
			driver.findElement(By.xpath("//button[contains(text(),'Ok')]")).click();
			Thread.sleep(10000);
			driver.findElement(By.xpath("//button[contains(text(),'Preparation mode')]")).click();
			driver.findElement(By.xpath("//a[@title='Faculty Notes']")).click();
			Thread.sleep(2000);
		}

		@Then("Faculty should click on lessons")
		public void facultyShouldClickOnLessons() {

			driver.findElement(By.xpath("//div[contains(text(),' FAC Cheat Sheet: Case Study ')]")).click();
			driver.quit();
			System.out.println("Faculty should click on lessons");
		}

		//tag31
		@Given("Faculty should be inCoursE")
//		public void facultyShouldBeInCoursE() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should click on START COURSe")
		public void facultyShouldClickOnSTARTCOURSe() throws InterruptedException {
			LoginPom.courses(driver).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//span[contains(text(),' Foundational Course in Entrepreneurship V3 ')]//following::span[1]")).click();
			driver.findElement(By.xpath("//button[contains(text(),'Ok')]")).click();
		}

		@Then("Faculty should click on teaching")
		public void facultyShouldClickOnTeaching() throws Exception {
			driver.findElement(By.xpath("//button[contains(text(),'Teaching mode')]")).click();
			Thread.sleep(2000);
			driver.quit();
			System.out.println("Faculty should click on teaching");
		}

		//Tag32
//		@Given("Faculty is inCoursE")
//		public void facultyIsInCoursE() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should see the Manage Batches")
		public void facultyShouldSeeTheManageBatches() throws InterruptedException {
			driver.findElement(By.xpath("//a[contains(text(),'MANAGE BATCHES')]")).click();
			Thread.sleep(4000);
		}

		@Then("Faculty should click on Manage Batches")
		public void facultyShouldClickOnManageBatches() {

			driver.quit();
			System.out.println("Faculty should click on Manage Batches");
		}

		//	Tag33
//		@Given("Faculty Should Be inCoursEPage")
//		public void facultyShouldBeInCoursEPage() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			//		driver.manage().timeouts().pageLoadTimeout(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should see the edit symbol Manage Batches")
		public void facultyShouldSeeTheEditSymbolManageBatches() throws Exception {
			driver.findElement(By.xpath("//a[contains(text(),'MANAGE BATCHES')]")).click();
			driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
            driver.findElement(By.xpath("/html/body/div[3]/div/div/div/div[1]/md-content/ul/div/li[1]/div/md-card/md-card-actions"));
            
		}

		@Then("Faculty should click onedit symbol Manage Batches")
		public void facultyShouldClickOneditSymbolManageBatches() {
			System.out.println("Faculty should click onedit symbol Manage Batches");
			driver.quit();
		}

		//	Tag34
//		@Given("Faculty is inCoursEPage")
//		public void facultyIsInCoursEPage() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should see the Chat box")
		public void facultyShouldSeeTheChatBox() throws InterruptedException {
			driver.findElement(By.xpath("//a[contains(text(),'MANAGE BATCHES')]")).click();
			driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);		
			
			driver.quit();
		}

		@Then("Faculty should click on Chat box")
		public void facultyShouldClickOnChatBox() {
			System.out.println("Faculty should click on Chat box");
			driver.quit();
		}

		//	tag35
//		@Given("Faculty is ManageBATches")
//		public void facultyIsManageBATches() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should see the Manage Students")
		public void facultyShouldSeeTheManageStudents() throws InterruptedException {
			WebDriverWait wait = new WebDriverWait(driver, 100);
			wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'MANAGE BATCHES')]"))).click();

			driver.findElement(By.xpath("//a[contains(text(),'MANAGE BATCHES')]")).click();
		
			driver.findElement(By.xpath(" //span[contains(text(),'Active Batches')]//following::div[12]")).click();
		}

		@Then("Faculty should click on Manage Students")
		public void facultyShouldClickOnManageStudents() {
			
			driver.quit();
		}

		//	tag36
//		@Given("Facultyis in CoursE page")
//		public void facultyisInCoursEPage() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should see the Run lessons")
		public void facultyShouldSeeTheRunLessons() throws InterruptedException {
			driver.findElement(By.xpath("//a[contains(text(),'MANAGE BATCHES')]")).click();
			
			driver.findElement(By.xpath("//span[contains(text(),'Active Batches')]//following::div[6]")).click();
		}

		@Then("Faculty should click on Run lessons")
		public void facultyShouldClickOnRunLessons() {
			System.out.println("Faculty should click on Run lessons");
			driver.quit();
		}

		//	Tag37
//		@Given("Faculty view CoursE pages")
//		public void facultyViewCoursEPages() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should see the No Upcoming Module")
		public void facultyShouldSeeTheNoUpcomingModule() throws Exception {
			driver.findElement(By.xpath("//a[contains(text(),'MANAGE BATCHES')]")).click();
			
			driver.findElement(By.xpath("//span[contains(text(),'Active Batches')]//following::div[10]")).click();
		}

		@Then("Faculty should click on No Upcoming Module")
		public void facultyShouldClickOnNoUpcomingModule() {
			System.out.println("Faculty should click on Run lessons");
			driver.quit();
		}
		//	tag38
//		@Given("Faculty should be in active batches \\(Manage Batches) page")
//		public void facultyShouldBeInActiveBatchesManageBatchesPage() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//
//		}

		@When("Faculty should see the Close Batch")
		public void facultyShouldSeeTheCloseBatch() throws Exception {
			WebDriverWait wait = new WebDriverWait(driver, 10000);
			wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[contains(text(),'MANAGE BATCHES')]")));
		
			driver.findElement(By.xpath("//a[contains(text(),'MANAGE BATCHES')]")).click();
			wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[contains(text(),'Active Batches')]//following::div[13]")));
			
			driver.findElement(By.xpath(" //span[contains(text(),'Active Batches')]//following::div[13]")).click();
			
			driver.findElement(By.xpath("//button[@type='submit']")).click();
		}

		@Then("Faculty should click on Close Batch")
		public void facultyShouldClickOnCloseBatch() {
		
			System.out.println("Faculty should click on Close Batch");
			driver.quit();
		}

		//	tag39
//		@Given("Faculty should be in active batches")
//		public void facultyShouldBeInActiveBatches() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should see the ReOpen batch")
		public void facultyShouldSeeTheReOpenBatch() {
			JavascriptExecutor js=(JavascriptExecutor)driver;

			WebElement ReOpen=driver.findElement(By.xpath("//body/div[3]/div[1]/div[1]/div[1]/div[2]/md-content[1]/div[1]/div[1]/div[1]/md-content[1]/ul[1]/div[1]/li[17]/div[1]/md-card[1]/md-card-actions[1]/button[1]/span[1]\n"
					+ ""));
			js.executeScript("arguments[0].scrollIntoView();",ReOpen);
			driver.findElement(By.xpath(" //body/div[3]/div[1]/div[1]/div[1]/div[2]/md-content[1]/div[1]/div[1]/div[1]/md-content[1]/ul[1]/div[1]/li[17]/div[1]/md-card[1]/md-card-actions[1]/button[1]/span[1]\n"
					+ "")).click();
			driver.findElement(By.xpath("//span[contains(text(),'Yes')]")).click();
		}

		@Then("Faculty should click on ReOpen batch")
		public void facultyShouldClickOnReOpenBatch() {
			System.out.println("Faculty should click on ReOpen batch");
			driver.quit();
		}

		//	tag40
//		@Given("Faculty should be in ACtiveBatches")
//		public void facultyShouldBeInACtiveBatches() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should see chatIcon")
		public void facultyShouldSeeChatIcon() throws Exception {
			driver.findElement(By.xpath("//a[contains(text(),'MANAGE BATCHES')]")).click();
			Thread.sleep(9000);
			driver.findElement(By.xpath("//span[contains(text(),'Active Batches')]//following::i[4]")).click();
			driver.findElement(By.xpath("//div[@id='chat_textarea']")).sendKeys("welcome all");
			Thread.sleep(1000);
			driver.findElement(By.xpath("//i[@class='material-icons']")).click();
		}

		@Then("Faculty should click on  chat icon and share his thoughts")
		public void facultyShouldClickOnChatIconAndShareHisThoughts() {
			System.out.println("Faculty should click on  chat icon and share his thoughts");
			driver.quit();
		}
		//	@tag41
//		@Given("Faculty is in ActiveBatches page")
//		public void facultyIsInActiveBatchesPage() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should see the CHatBox")
		public void facultyShouldSeeTheCHatBox() throws Exception {
			driver.findElement(By.xpath("//a[contains(text(),'MANAGE BATCHES')]")).click();
			Thread.sleep(100000);
			driver.findElement(By.xpath("//span[contains(text(),'Active Batches')]//following::i[4]")).click();
			Thread.sleep(5000);
			driver.findElement(By.xpath("/html/body/div[3]/div/div/div/div[1]/md-content/ul/div/li[1]/div/md-card/md-card-content/div[2]/span")).sendKeys("welcome all");
			driver.findElement(By.xpath("//i[@class='material-icons']")).click();
		}

		@Then("Faculty should click on send")
		public void facultyShouldClickOnSend() {
			System.out.println("Faculty should click on send");
			driver.quit();
		}

		//	Tag42
//		@Given("Faculty should view quizz")
//		public void facultyShouldViewQuizz() throws InterruptedException {
//			WebDriverManager.firefoxdriver().setup();
//			driver=new FirefoxDriver();
//			driver.get("https://learnwise.wfglobal.org/");
//			driver.manage().window().maximize();
//			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//			LoginPom.username(driver).sendKeys("qapital.faculty@yopmail.com");
//			LoginPom.nextBtn(driver).click();
//			LoginPom.facultyPassword(driver).sendKeys("Pass@123");
//			LoginPom.signin(driver).click();
//			Thread.sleep(10000);
//		}

		@When("Faculty should see the Save and continue")
		public void facultyShouldSeeTheSaveAndContinue() throws Exception {
			LoginPom.courses(driver).click();
			Thread.sleep(5000);
			
			driver.findElement(By.xpath("//span[contains(text(),' Foundational Course in Entrepreneurship V3 ')]//following::span[1]")).click();
			driver.findElement(By.xpath("//button[contains(text(),'Ok')]")).click();
			driver.findElement(By.xpath("//button[contains(text(),'Preparation mode')]")).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//a[contains(text(),'Quizzes')]")).click();
		}

		@Then("Faculty should click save and submit")
		public void facultyShouldClickSaveAndSubmit() throws InterruptedException {
			driver.findElement(By.xpath("//span[contains(text(),'Quizzes')]//following::div[9]")).click();
			driver.findElement(By.xpath("//input[@id='edit-submit']")).click();
			driver.findElement(By.xpath("//*[@id=\"button_submit\"]")).click();
			driver.findElement(By.xpath("/html/body/div[9]/div[3]/div/button[1]")).click();
			System.out.println("save and submit");
			driver.quit();
		}






	
	  
}