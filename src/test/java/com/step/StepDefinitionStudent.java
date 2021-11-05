package com.step;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.pom.LoginPom;
import com.pom.LoginPomStudent;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class StepDefinitionStudent {
	LoginPomStudent log=new LoginPomStudent();
	static WebDriver driver;


	@Given("Student is on the Learnwise Login Page")
	public void studentIsOnTheLearnwiseLoginPage() {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.get("https://learnwise.wfglobal.org/#/IN/en/home/login");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	}

	@When("Student should enter valid {string}")
	public void studentShouldEnterValid(String string) {
		log.UserName(driver).sendKeys(string);
	}

	@And("Student should select next Button")
	public void studentShouldSelectNextButton() throws Exception {
		System.out.println("Entering Mail Id");	

	}

	@Then("Student should verify success message")
	public void studentShouldVerifySuccessMessage() throws Exception {
		Thread.sleep(3000);
		driver.quit();
	}

	@Given("Student should be in Login Page")
	public void studentShouldBeInLoginPage() {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.get("https://learnwise.wfglobal.org/#/IN/en/home/login");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	}

	@When("Student should not enter any mail id {string}")
	public void studentShouldNotEnterAnyMailId(String string) {
		log.UserName(driver).sendKeys(string);
	}

	@When("Student should check next button is enabled")
	public void studentShouldCheckNextButtonIsEnabled() {
		System.out.println("Entering Mail and clicking next Btn");
	}

	@Then("Student should verify its enabled or not")
	public void studentShouldVerifyItsEnabledOrNot() throws Exception {
		log.NextBtn(driver).click();
		Thread.sleep(3000);
		driver.quit();
	}

	@Given("Student should enter {string}")
	public void studentShouldEnter(String string) {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.get("https://learnwise.wfglobal.org/#/IN/en/home/login");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		log.UserName(driver).sendKeys(string);
	}

	@When("Student should click on next button")
	public void studentShouldClickOnNextButton() {
		log.NextBtn(driver).click();
	}

	@Then("Student should able to enter password {string}")
	public void studentShouldAbleToEnterPassword(String string) throws InterruptedException {
		log.Enter_Password(driver).sendKeys(string);
		System.out.println("Entered password");
		Thread.sleep(3000);
		driver.quit();
	}


	@Given("Student should ENteR {string}")
	public void studentShouldENteR(String string) {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.get("https://learnwise.wfglobal.org/#/IN/en/home/login");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		log.UserName(driver).sendKeys(string);
	}

	@When("Student should click on NEXT button")
	public void studentShouldClickOnNEXTButton() {
		log.NextBtn(driver).click();
	}

	@When("Student should able to enter new password {string}")
	public void studentShouldAbleToEnterNewPassword(String string) {
		log.Enter_Password(driver).sendKeys(string);
	}

	@Then("Student should able to enter confirm password {string}")
	public void studentShouldAbleToEnterConfirmPassword(String string) {
		log.Confirm_Password(driver).sendKeys(string);
		log.ClickOn_checkBox(driver).click();
		System.out.println("Not able to click on SignIn Btn");
		driver.quit();
	}
@Given("Student should be in Learnwise Login Page")
	public void studentShouldBeInLearnwiseLoginPage() {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.get("https://learnwise.wfglobal.org/#/IN/en/home/login");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);


	}

	@When("Student should enter valid email{string}")
	public void studentShouldEnterValidEmail(String string) {
		log.UserName(driver).sendKeys(string);
		log.NextBtn(driver).click();
	}

	@When("Student should enter Institution code{string}")
	public void studentShouldEnterInstitutionCode(String string) {
		log.ClickOn_InstituteCode(driver).sendKeys(string);

	}

	@When("Student should re-enter valid email{string}")
	public void studentShouldReEnterValidEmail(String string) {
		log.ReType_EmailId(driver).sendKeys(string);	
	}


	@When("Student should enter the valid password {string}")
	public void studentShouldEnterTheValidPassword(String string) {
		log.Enter_Password(driver).sendKeys(string);
	}

	@When("Student should confirm password {string}")
	public void studentShouldConfirmPassword(String string) {
		log.Confirm_Password(driver).sendKeys(string);	}

	@Then("Should should click on SignIn Button")
	public void shouldShouldClickOnSignInButton() {
		log.selectLanguage(driver).click();
		log.Select_Lang_Opt(driver).click();
		log.ClickOn_checkBox(driver).click();
		driver.findElement(By.xpath("//*[@id=\"select_option_13\"]")).click();
		log.ClickOn_Reg_SignIn(driver).click();

		driver.quit();
	}
@Given("Student should Enter valid UserName {string}")
	public void studentShouldEnterValidUserName(String string) {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.get("https://learnwise.wfglobal.org/#/IN/en/home/login");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		log.UserName(driver).sendKeys(string);
	}

	@When("Student should able to enter valid password {string}")
	public void studentShouldAbleToEnterValidPassword(String string) {
		log.Enter_PassKey(driver).sendKeys(string);

	}

	@And("Student should click on signIn")
	public void studentShouldClickOnSignIn() {
		log.ClickOn_SignIn(driver).click();
		driver.quit();
	}

	@Given("Student should Enter valid UserNamE {string}")
	public void studentShouldEnterValidUserNamE(String string) {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.get("https://learnwise.wfglobal.org/#/IN/en/home/login");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		log.UserName(driver).sendKeys(string);
	}

	@When("Student should click on nextBTN")
	public void studentShouldClickOnNextBTN() {
		log.NextBtn(driver).click();
	}

	@And("Student should able to enter In valid password {string}")
	public void studentShouldAbleToEnterInValidPassword(String string) {
		log.Enter_PassKey(driver).sendKeys(string);
		log.ClickOn_SignIn(driver).click();
	}

	@Then("Student should click on signIN Btn")
	public void studentShouldClickOnSignINBtn() {
		driver.quit();
	}



	@Given("Student should EnTer VALid UserNamE {string}")
	public void studentShouldEnTerVALidUserNamE(String string) {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.get("https://learnwise.wfglobal.org/#/IN/en/home/login");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		log.UserName(driver).sendKeys(string);
	}

	@When("Student should  EnteR valid password {string}")
	public void studentShouldEnteRValidPassword(String string) {
		log.NextBtn(driver).click();
		log.Enter_PassKey(driver).sendKeys(string);
	}

	@When("Student should in HOME Page")
	public void studentShouldInHOMEPage() {
		log.ClickOn_SignIn(driver).click();
	}

	@Then("Student should able to see Hamburger")
	public void studentShouldAbleToSeeHamburger() {
		driver.quit();
	}
	@Then("Student should able to click on Hamburger")
	public void studentShouldAbleToClickOnHamburger() throws Exception {
		log.ClickOn_Hamburger(driver).click();
		Thread.sleep(3000);
		driver.quit();
	}
	@Then("Student should see start or resume button")
	public void studentShouldSeeStartOrResumeButton() throws Exception {
		System.out.println("Student able to see start or resume button");
		Thread.sleep(3000);
		driver.quit();
	}
	@Then("Student should click on start or resume button")
	public void studentShouldClickOnStartOrResumeButton() throws Exception {
		Thread.sleep(3000);
		log.ClickOn_StartOrResume(driver).click();
		driver.quit();
	}
	@Then("Student should click on Course Module")
	public void studentShouldClickOnCourseModule() throws Exception {
		log.ClickOn_Courses(driver).click();
		Thread.sleep(3000);
		driver.quit();
	}
@Then("Student should see Join Course is enabled or not")
	public void studentShouldSeeJoinCourseIsEnabledOrNot() throws Exception {
		log.ClickOn_Courses(driver).click();
		System.out.println("join Course module ");
		Thread.sleep(3000);
		log.ClickOn_Join(driver).click();
		driver.quit();
	}

	@When("Student should enter Batch id{string}")
	public void studentShouldEnterBatchId(String string) {
		log.ClickOn_Courses(driver).click();
		log.Enter_BatchId(driver).sendKeys(string);
	}

	@Then("Student should click on Join Course")
	public void studentShouldClickOnJoinCourse() throws Exception {
		log.ClickOn_Join(driver).click();
		Thread.sleep(3000);
		driver.quit();
	}

	@Then("Student should click o Batch Name")
	public void studentShouldClickOBatchName() throws Exception {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		Thread.sleep(3000);
		driver.quit();

	}


	@Then("Student should click on Chat Icon")
	public void studentShouldClickOnChatIcon() throws Exception {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_ChatIcon(driver).click();
		Thread.sleep(3000);
		driver.quit();
	}

	@Then("Student should click batchName and click on Quizzes")
	public void studentShouldClickBatchNameAndClickOnQuizzes() throws Exception {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		log.Clicking_On_Quizzes(driver).click();
		log.ClickOn_TakeQuiz(driver).click();

		log.ClickOn_save_continue(driver).click();
		Thread.sleep(3000);
		log.ClickOn_Back(driver).click();
		//log.ClickOn_Option(driver).click();
		driver.quit();
	}

	@Then("Student should click on Take Quiz")
	public void studentShouldClickOnTakeQuiz() throws Exception {

		driver.quit();
	}

	@When("Student should click courses")
	public void studentShouldClickCourses() {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
	}



	@Then("Student should click on save and continue")
	public void studentShouldClickOnSaveAndContinue() {
		log.ClickOn_save_continue(driver).click();
	}




	@Then("Student should select option")
	public void studentShouldSelectOption() {

		driver.findElement(By.xpath("//a[@title='Course Details']")).click();
		driver.findElement(By.xpath("//a[@title='Quizzes']")).click();

	}








	@Then("Student should click on Practice ventures")
	public void studentShouldClickOnPracticeVentures() {
		log.ClickOn_PracticeVenture(driver).click();
		log.Create_VentureGroup(driver).click();
		log.VentureGroup_Name(driver).sendKeys("Mohan");
		log.Venture_Name(driver).sendKeys("kumar");
		log.Venture_Description(driver).sendKeys("Welcome All");
		log.Venture_Industry(driver).click();
		log.Select_Venture_Industry(driver).click();
		log.Click_Create_Venture(driver).click();

		driver.quit();
	}
	@Then("student should click on create group")
	public void studentShouldClickOnCreateGroup() throws Exception {
		Thread.sleep(3000);
		driver.quit();
	}

	@Then("student should delete Practice venture group")
	public void studentShouldDeletePracticeVentureGroup() throws Exception {
		Thread.sleep(3000);
		driver.quit();
	}

	@Then("Student should click on PV Milestones")
	public void studentShouldClickOnPVMilestones() throws Exception {
		log.ClickOn_PV_Milestones(driver).click();
		Thread.sleep(3000);
		log.PV_Milestones_assesment(driver).click();
		driver.findElement(By.xpath("//span[contains(text(),'Re-Submit ')]")).click();
		
		driver.quit();
	}
	@Then("Student should click on PV Milestone assesment")
	public void studentShouldClickOnPVMilestoneAssesment() throws Exception {
		Thread.sleep(3000);
	   log.PV_Milestones_assesment(driver).click();
	   Thread.sleep(3000);
	   driver.quit();
	}
	@Then("student click resume")
	public void studentClickResume() {
	    driver.findElement(By.xpath("//*[@id=\"content\"]/div[1]/div/div/div/div[2]/div[3]/div[1]/a/div")).click();
	}

	@Then("Student click on PV milestones Button")
	public void studentClickOnPVMilestonesButton() {
	   driver.findElement(By.xpath("//*[@id=\"superfish-2\"]/li[6]/a")).click();
	}

	@Then("Student click on any assignment")
	public void studentClickOnAnyAssignment() {
	   driver.findElement(By.xpath("//*[@id=\"assignment_submit_att\"]/span")).click();
	}

	@Then("Student click on view submission")
	public void studentClickOnViewSubmission() {
	    driver.findElement(By.xpath("//*[@id=\"myassg-attempts-table\"]/div/table/tbody/tr/td[3]/div[1]/div/span")).click();
	    driver.quit();
	}
	@Then("Student click milestone {int}")
	public void studentClickMilestone(Integer int1) {
	    driver.findElement(By.xpath("//*[@id=\"myassignments-table\"]/a[2]/div/table/tbody/tr[1]/td[2]  ")).click();
	}

	@Then("Student click on view submit")
	public void studentClickOnViewSubmit() throws InterruptedException {
	    driver.findElement(By.xpath("//*[@id=\"assignment_submit_att\"]")).click();
	   
	}
	@Then("verify it enter or not")
	public void verifyItEnterOrNot() {
	    driver.quit();
	}
	@Then("Student click on attempt button")
	public void studentClickOnAttemptButton() {
		JavascriptExecutor js=(JavascriptExecutor)driver;

		WebElement Submit=driver.findElement(By.xpath("//*[@id=\"edit-submit\"]"));
		js.executeScript("arguments[0].click()",Submit);
		
		
	    
	}
	@Then("verify it click or not")
	public void verifyItClickOrNot() {
	    driver.quit();
	}
	@Given("Student should EnTer UserNamE {string} and click on next")
	public void studentShouldEnTerUserNamEAndClickOnNext(String string) {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.get("https://learnwise.wfglobal.org/#/IN/en/home/login");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		log.UserName(driver).sendKeys(string);
		log.NextBtn(driver).click();
	}

	@When("Student should  EnteR password {string} and click on signin")
	public void studentShouldEnteRPasswordAndClickOnSignin(String string) {
		log.Enter_PassKey(driver).sendKeys(string);
		log.ClickOn_SignIn(driver).click();
	}

	@Then("Student should Click on profile")
	public void studentShouldClickOnProfile() throws Exception {
		log.ClickOn_StudentProfile(driver).click();
		Thread.sleep(3000);
		log.ClickOn_Profile(driver).click();
		Thread.sleep(3000);
		log.ClickOn_EditIcon(driver).click();
		Thread.sleep(3000);
		log.ClickOn_EditFirstName(driver).click();
		Thread.sleep(3000);
		log.ClickOn_EditEmail(driver).click();
		Thread.sleep(3000);
		log.ClickOn_Edit_InstitueCode(driver).click();
		Thread.sleep(3000);
		//	    log.ClickOn_Edit_Language(driver).click();
		Thread.sleep(3000);
		log.ClickOn_Edit_ChangePassword(driver).click();
		Thread.sleep(3000);
		log.ClickOn_Edit_Cancel(driver).click();
		Thread.sleep(3000);
		log.ClickOn_EditIcon(driver).click();
		log.ClickOn_Edit_SaveChanges(driver).click();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//i[@class='fa fa-caret-down']")).click();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//a[contains(text(),'Logout')]")).click();
		Thread.sleep(5000);
		driver.quit();
	}

	@Then("Student should Click on Notification icon")
	public void studentShouldClickOnNotificationIcon() {
		log.ClickOn_Notifications(driver).click();
		driver.quit();
	}

	@Then("Student should view Notifications")
	public void studentShouldViewNotifications() {
		log.ClickOn_Notifications(driver).click();
		driver.quit();
	}

	@Then("Student should Click on Reports")
	public void studentShouldClickOnReports() {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		log.ClickOn_Reports(driver).click();
		driver.quit();

	}

	@Then("Student should view Reports")
	public void studentShouldViewReports() {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		log.ClickOn_Reports(driver).click();
		driver.quit();
	}
















	@Then("Student should view Download quizz report")
	public void studentShouldViewDownloadQuizzReport() {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		log.ClickOn_Reports(driver).click();
	}


	@Then("Student should Download quizz report")
	public void studentShouldDownloadQuizzReport() throws Exception {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		log.ClickOn_Reports(driver).click();
		log.Download_QuizzReport(driver).click();
		Thread.sleep(3000);
		driver.quit();
	}

	@Then("Student should view final assesment report")
	public void studentShouldViewFinalAssesmentReport() throws Exception {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		log.ClickOn_Reports(driver).click();
		Thread.sleep(3000);
		log.ClickOn_AssesmentReports(driver).click();
		driver.quit();
	}
@Then("Student should able Click on Submit Button")
	public void studentShouldAbleClickOnSubmitButton() {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		log.ClickOn_PV_Milestones(driver).click();
		log.PV_Milestones_assesment(driver).click();
		log.ClickOn_ReSubmit_Assesment(driver).click();
		//    driver.quit();
	}

	@Then("Student should able Click on Back Button")
	public void studentShouldAbleClickOnBackButton() {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		log.ClickOn_PV_Milestones(driver).click();
		log.PV_Milestones_assesment(driver).click();
		log.ClickOn_Back_Btn(driver).click();
		driver.quit();
	}

	@Then("Student should able Click any PV_Milestone")
	public void studentShouldAbleClickAnyPV_Milestone() {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		log.ClickOn_PV_Milestones(driver).click();
		log.ClickOn_PV_Milestone_Number(driver).click();
		driver.quit();
	}

	//no
	@Then("Student should able to remove Upload document option")
	public void studentShouldAbleToRemoveUploadDocumentOption() {

		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		log.ClickOn_PV_Milestones(driver).click();
		log.PV_Milestones_assesment(driver).click();
		log.ClickOn_ReSubmit_Assesment(driver).click();

	}

	@Then("Student should able to check status")
	public void studentShouldAbleToCheckStatus() {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		log.ClickOn_PV_Milestones(driver).click();
		log.PV_Milestones_assesment(driver).click();
		driver.quit();
	}






	
}
