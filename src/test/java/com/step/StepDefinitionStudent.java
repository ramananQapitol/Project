package com.step;

import java.util.Random;
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
		System.out.println("Entering Mail Id");

	}




	@Then("Student should verify Next Button is enabled or not")
	public void studentShouldVerifyNextButtonIsEnabledOrNot() {
		WebElement NXT_Btn= driver.findElement(By.xpath("//button[@type='submit']"));
		if(NXT_Btn.isEnabled()) {
			log.NextBtn(driver).click();
			driver.quit();
		}
		else {
			driver.quit();
		}

	}

	@Then("Student should click Next Button")
	public void studentShouldClickNextButton() {
		log.NextBtn(driver).click();
	}
	@When("Student should EnteR valid password {string}")
	public void studentShouldEnteRValidPassword(String string) {
		log.NextBtn(driver).click();
		log.Enter_PassKey(driver).sendKeys(string);
	}




	@Then("student is able to create to the new venture group without providing the mandatory details")
	public void studentIsAbleToCreateToTheNewVentureGroupWithoutProvidingTheMandatoryDetails() {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		log.ClickOn_PracticeVenture(driver).click();
		log.Create_VentureGroup(driver).click();


		WebElement Create_Btn= driver.findElement(By.xpath("//div[contains(text(),'Select a group to join or add a new group')]//following::div[8]"));
		if(Create_Btn.isEnabled()) {
			log.Click_Create_Venture(driver).click();
			driver.quit();
		}
		
	}

	@Then("student is able to change the batch  name while creating the Venture group.")
	public void studentIsAbleToChangeTheBatchNameWhileCreatingTheVentureGroup() {

		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		log.ClickOn_PracticeVenture(driver).click();
		log.Create_VentureGroup(driver).click();


	}
	//===================================================================


	@When("Student should not enter any mail id {string}")
	public void studentShouldNotEnterAnyMailId(String string) {
		log.UserName(driver).sendKeys(string);
	}

	@When("Student should check next button is enabled")
	public void studentShouldCheckNextButtonIsEnabled() {
		System.out.println("Entering Mail and clicking next Btn");
	}






	@When("Student should click on next button")
	public void studentShouldClickOnNextButton() {
		log.NextBtn(driver).click();
	}

	@Then("Student should able to enter password {string}")
	public void studentShouldAbleToEnterPassword(String string) throws InterruptedException {
		log.Enter_Password(driver).sendKeys(string);
		System.out.println("Entered password");
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

	}


	@When("Student should able to enter valid password {string}")
	public void studentShouldAbleToEnterValidPassword(String string) {
		log.Enter_PassKey(driver).sendKeys(string);

	}
@And("Student should click on signIn")
	public void studentShouldClickOnSignIn() {
		log.ClickOn_SignIn(driver).click();
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
		System.out.println("Student should click on signIN Btn");
	}





	@When("Student should in HOME Page")
	public void studentShouldInHOMEPage() {
		log.ClickOn_SignIn(driver).click();
	}

	@Then("Student should able to see Hamburger")
	public void studentShouldAbleToSeeHamburger() throws InterruptedException {
		Thread.sleep(1000);
	}
	@Then("Student should able to click on Hamburger")
	public void studentShouldAbleToClickOnHamburger() throws Exception {
		log.ClickOn_Hamburger(driver).click();
	}
	@Then("Student should see start or resume button")
	public void studentShouldSeeStartOrResumeButton() throws Exception {
		System.out.println("Student able to see start or resume button");

	}
	@Then("Student should click on start or resume button")
	public void studentShouldClickOnStartOrResumeButton() throws Exception {
		Thread.sleep(3000);
		log.ClickOn_StartOrResume(driver).click();
	}
	@Then("Student should click on Course Module")
	public void studentShouldClickOnCourseModule() throws Exception {
		log.ClickOn_Courses(driver).click();
	}


	@When("Student should enter Batch id{string}")
	public void studentShouldEnterBatchId(String string) {
		log.ClickOn_Courses(driver).click();
		log.Enter_BatchId(driver).sendKeys(string);
	}

	@Then("Student should click on Join Course")
	public void studentShouldClickOnJoinCourse() throws Exception {
		log.ClickOn_Join(driver).click();
	}

	@Then("Student should click o Batch Name")
	public void studentShouldClickOBatchName() throws Exception {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();

	}


	@Then("Student should click on Chat Icon")
	public void studentShouldClickOnChatIcon() throws Exception {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_ChatIcon(driver).click();
		Thread.sleep(3000);
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
	}
@Then("Student should click on Take Quiz")
	public void studentShouldClickOnTakeQuiz() throws Exception {
		System.out.println("Student should click on Take Quiz");
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

	}
	@Then("student should click on create group")
	public void studentShouldClickOnCreateGroup() throws Exception {
		Thread.sleep(1000);
		driver.findElement(By.xpath("//div[contains(text(),'Group Name')]//following::span[1]")).click();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//span[contains(text(),'Yes')]")).click();
		
	}
	

	@Then("student should delete Practice venture group")
	public void studentShouldDeletePracticeVentureGroup() throws Exception {
		Thread.sleep(1000);
	}

	@Then("Student should click on PV Milestones")
	public void studentShouldClickOnPVMilestones() throws Exception {
		log.ClickOn_PV_Milestones(driver).click();
		Thread.sleep(3000);
		log.PV_Milestones_assesment(driver).click();
		driver.findElement(By.xpath("//span[contains(text(),'Re-Submit ')]")).click();

	}
	@Then("Student should click on PV Milestone assesment")
	public void studentShouldClickOnPVMilestoneAssesment() throws Exception {
		Thread.sleep(3000);
		log.PV_Milestones_assesment(driver).click();
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
	public void verifyItEnterOrNot() throws InterruptedException {
		Thread.sleep(1000);
	}
	@Then("Student click on attempt button")
	public void studentClickOnAttemptButton() {
		JavascriptExecutor js=(JavascriptExecutor)driver;

		WebElement Submit=driver.findElement(By.xpath("//*[@id=\"edit-submit\"]"));
		js.executeScript("arguments[0].click()",Submit);



	}
@Then("verify it click or not")
	public void verifyItClickOrNot() {
		System.out.println("verify it click or not");
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
	}

	@Then("Student should Click on Notification icon")
	public void studentShouldClickOnNotificationIcon() {
		log.ClickOn_Notifications(driver).click();
		driver.quit();
	}

	@Then("Student should view Notifications")
	public void studentShouldViewNotifications() {
		log.ClickOn_Notifications(driver).click();
	}

	@Then("Student should Click on Reports")
	public void studentShouldClickOnReports() {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		log.ClickOn_Reports(driver).click();

	}

	@Then("Student should view Reports")
	public void studentShouldViewReports() {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		log.ClickOn_Reports(driver).click();
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
	}

	@Then("Student should view final assesment report")
	public void studentShouldViewFinalAssesmentReport() throws Exception {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		log.ClickOn_Reports(driver).click();
		Thread.sleep(3000);
		log.ClickOn_AssesmentReports(driver).click();
	}
	@Then("Student should able Click on Submit Button")
	public void studentShouldAbleClickOnSubmitButton() {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		log.ClickOn_PV_Milestones(driver).click();
		log.PV_Milestones_assesment(driver).click();
		log.ClickOn_ReSubmit_Assesment(driver).click();
	}

	@Then("Student should able Click on Back Button")
	public void studentShouldAbleClickOnBackButton() {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		log.ClickOn_PV_Milestones(driver).click();
		log.PV_Milestones_assesment(driver).click();
		log.ClickOn_Back_Btn(driver).click();
	}

	@Then("Student should able Click any PV_Milestone")
	public void studentShouldAbleClickAnyPV_Milestone() {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		log.ClickOn_PV_Milestones(driver).click();
		log.ClickOn_PV_Milestone_Number(driver).click();
	}
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
	}
@Then("Student should Click on Quizzes")
	public void studentShouldClickOnQuizzes() {
		log.ClickOn_Courses(driver).click();
		log.Clicking_On_BatchName(driver).click();
		log.Clicking_On_Quizzes(driver).click();
	}
@Then("Student should see Join Course is enabled or not")
	public void studentShouldSeeJoinCourseIsEnabledOrNot() throws Exception {
		log.ClickOn_Courses(driver).click();
		System.out.println("join Course module ");
		Thread.sleep(3000);
		WebElement Join_Btn=driver.findElement(By.xpath("//span[contains(text(),'JOIN')]"));

		if(Join_Btn.isEnabled()) {
			log.ClickOn_Join(driver).click();
			driver.quit();
		}
		else {
			driver.quit();
		}

	}

	@Then("Student should able to click on No Button or not.")
	public void studentShouldAbleToClickOnNoButtonOrNot() throws InterruptedException {
		log.ClickOn_Courses(driver).click();

	}

	@Then("Student should close the browser")
	public void studentShouldCloseTheBrowser() throws InterruptedException {
		Thread.sleep(5000);
		driver.quit();
	}

	
	//tag1
	@Given("Student Should Enter Valid User Name {string}")
	public void studentShouldEnterValidUserName1(String string) {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.get("https://learnwise.wfglobal.org/#/IN/en/home/login");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	driver.findElement(By.xpath("//input[@id='input_0']")).sendKeys(string);
	}

	@When("Student should click on next Button")
	public void studentShouldClickOnNextButton1() {
		driver.findElement(By.xpath("//button[@type='submit']")).click();

	}

	@Then("Student should enter the valid Password {string}")
	public void studentShouldEnterTheValidPassword1(String string) {
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys(string);
		//driver.findElement(By.xpath("//button[@type='submit']")).click();

	}

	@Then("Student should click on the signin Button")
	public void studentShouldClickOnTheSigninButton() {

		driver.findElement(By.xpath("//button[@type='submit']")).click();
	 //driver.quit();	
	}


	//tag2
	@Then("Student should click on resume\\/start button")
	public void studentShouldClickOnResumeStartButton() {

		driver.findElement(By.xpath("//div[@class=\"faculty_activities_title\"] //following::div[13]")).click();
		//driver.quit();

	}
	//tag3
	@Then("click on pvmilestones tab")
	public void clickOnPvmilestonesTab() {
		driver.findElement(By.xpath("//a[@title=\"PV Milestones\"]")).click();
	}


	//tag4
	@Then("click on pvmilestones tab and check whether the student is able to view the assignments.")
	public void clickOnPvmilestonesTabAndCheckWhetherTheStudentIsAbleToViewTheAssignments() {
		driver.findElement(By.xpath("//a[@title=\"PV Milestones\"]")).click();

	}
	//tag5
	@Then("clik on view details button")
	public void clikOnViewDetailsButton() {
		driver.findElement(By.xpath("//div [@id='assignment_submit_att' and @nid='45544812' ]\n")).click();

	}
	//tag6
	@Then("click on viewsubmission  button in the selected pv milestone assignment.")
	public void clickOnViewsubmissionButtonInTheSelectedPvMilestoneAssignment() {

		driver.findElement(By.xpath("//span[contains(text(),'View Submission ')]")).click();
//		driver.quit();
	}
@Then("click on resubmit button.")
	public void clickOnResubmitButton() {
		driver.findElement(By.xpath("//*[@id=\"myassg-attempts-table\"]/div/table/tbody/tr/td[3]/div[2]/div"));
//		//.sendKeys("/home/qq382/Desktop.txt");
//	}
driver.quit();
}
@Then("Student should create Practice venture group")
public void studentShouldCreatePracticeVentureGroup() {
    log.ClickOn_PracticeVenture(driver).click();
	log.Create_VentureGroup(driver).click();
	log.VentureGroup_Name(driver).sendKeys("Mohan");
	log.Venture_Name(driver).sendKeys("kumar");
	log.Venture_Description(driver).sendKeys("Welcome All");
	log.Venture_Industry(driver).click();
	log.Select_Venture_Industry(driver).click();
	log.Click_Create_Venture(driver).click();
}



@Then("Student should edit Batch Id")
public void studentShouldEditBatchId() throws InterruptedException {
	Thread.sleep(5000);
	
	driver.findElement(By.xpath("//img[@class='edit_icon']")).click();
	driver.findElement(By.xpath("//input[@id='input_32']")).sendKeys("1");
	driver.findElement(By.xpath("//span[contains(text(),'Yes')]")).click();
	driver.findElement(By.xpath("//span[contains(text(),'SAVE CHANGES')]")).click();
	Thread.sleep(1000);
	driver.findElement(By.xpath("//div[contains(text(),'Group Name')]//following::span[1]")).click();
	Thread.sleep(3000);
	driver.findElement(By.xpath("//span[contains(text(),'Yes')]")).click();
}
@And("student should click on submit")
public void student_should_click_on_submit() {
	driver.findElement(By.xpath("//span[contains(text(),'Submit')]")).click();
}
@And("student should click on close icon")
public void student_should_click_on_close_icon() {
	driver.findElement(By.xpath("//span[@class='ui-button-icon ui-icon ui-icon-closethick']")).click();;
}

@And("student should click on back button")
public void student_should_click_on_back_button() {
	driver.findElement(By.xpath("//*[@id=\"assg-attempt-display-content\"]/a")).click();;
}
@And("student should click on mile stone")
public void student_should_click_on_mile_stone() {
	driver.findElement(By.xpath("//*[@id=\"myassignments-table\"]/a[1]/div/table/tbody/tr[1]/td[2]")).click();;
}

@Then("student should close the browers")
public void student_should_close_the_browers() {
    driver.quit();
}
@When("Student should Enter institute code")
public void student_should_Enter_institute_code() {
	driver.findElement(By.xpath("//*[@id=\"input_2\"]")).sendKeys("QAPI5260");
}

@When("Student should Enter re enter mail id")
public void student_should_Enter_re_enter_mail_id() {
	driver.findElement(By.xpath("//*[@id=\"input_3\"]")).sendKeys("student1214@yopmail.com");
}
@When("Student should Enter new Password")
public void student_should_Enter_new_Password() {
	driver.findElement(By.xpath("//*[@id=\"input_4\"]")).sendKeys("pass");
}
@When("Student should Enter random confirm password {string}")
public void student_should_Enter_random_confirm_password(String string) {
	driver.findElement(By.xpath("//*[@id=\"input_5\"]")).sendKeys("123");
}

@When("Student should select landuage")
public void student_should_select_landuage() {
	driver.findElement(By.xpath("//md-select[@name=\"language\"]")).click();
	driver.findElement(By.xpath("//*[@id=\"select_option_13\"]")).click();
}

@When("Student should  click on check box")
public void student_should_click_on_check_box() {
	driver.findElement(By.xpath("/html/body/div[3]/div/div/div[1]/header/div/div/div[2]/div/div/div/div[2]/form/div/md-checkbox/div[1]")).click();
}

@When("Student should  click on sign in")
public void Student_should_click_on_sign_in() {
    driver.findElement(By.xpath("//button[@type='submit']")).click();
}
@Then("student should click on cancel group")
public void studentShouldClickOnCancelGroup() throws InterruptedException {
	 log.ClickOn_PracticeVenture(driver).click();
		log.Create_VentureGroup(driver).click();
		log.VentureGroup_Name(driver).sendKeys("Mohan");
		log.Venture_Name(driver).sendKeys("kumar");
		log.Venture_Description(driver).sendKeys("Welcome All");
		log.Venture_Industry(driver).click();
		log.Select_Venture_Industry(driver).click();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//span[contains(text(),'CANCEL')]")).click();
}


@Then("student should click create group")
public void studentShouldClickCreateGroup() throws InterruptedException {
 log.ClickOn_PracticeVenture(driver).click();
	log.Create_VentureGroup(driver).click();
	log.VentureGroup_Name(driver).sendKeys("Mohan");
	log.Venture_Name(driver).sendKeys("kumar");
	log.Venture_Description(driver).sendKeys("Welcome All");
	
	
	WebElement Create_Btn= driver.findElement(By.xpath("//div[contains(text(),'Select a group to join or add a new group')]//following::div[8]"));
	if(Create_Btn.isEnabled()) {
		log.Click_Create_Venture(driver).click();
		driver.quit();
	}
	else {
		Thread.sleep(3000);
		driver.quit();
	}
}
	@When("student should login with Random Mail Id and should verify that mail")
	public void studentShouldLoginWithRandomMailIdAndShouldVerifyThatMail() throws InterruptedException {
		WebElement Email=log.UserName(driver);
		Email.click();


		Random randomGenerator = new Random();
		int randomInt = randomGenerator.nextInt(1000);
		Email.sendKeys("Student"+ randomInt +"S@yopmail.com");
		String NewMail= Email.getAttribute("value");
		System.out.println(NewMail);

		log.NextBtn(driver).click();  
		log.ClickOn_InstituteCode(driver).sendKeys("FCV16529");

		log.ReType_EmailId(driver).sendKeys(NewMail);
		log.Enter_Password(driver).sendKeys("pass");
		log.Confirm_Password(driver).sendKeys("pass");
		
		Thread.sleep(3000);
		
		log.Click_On_DropDown_To_seeLanguage_Options(driver).click();

		log.SelectLanguage_Option_Registration(driver).click();



		log.ClickOn_checkBox(driver).click();

		log.Accept_To_SignIn(driver).click();
		log.ClickOn_SignIn(driver).click();

		
		
		driver.get("https://yopmail.com/en/");
		log.YOP_Login(driver).sendKeys(NewMail);
		log.VerifyYOP_Mail(driver).click();

		
		
		
		Thread.sleep(3000);

		driver.switchTo().frame("ifmail");
		WebElement element = log.Verify_YopMailId(driver);
		element.click();

	}
	@Then("Student should click Resume Button")
	public void studentShouldClickResumeButton() throws InterruptedException {
		log.ClickOn_StartOrResume(driver).click();
		Thread.sleep(2000);
	}

	@Then("Student should click on Practice venture tab")
	public void studentShouldClickOnPracticeVentureTab() throws InterruptedException {
		log.ClickOn_PracticeVenture(driver).click();
		Thread.sleep(2000);
		
	}

	@Then("Student should click on create_group")
	public void studentShouldClickOnCreate_group() throws InterruptedException {
		log.Create_VentureGroup(driver).click();
		Thread.sleep(2000);
	}

	@Then("Student should fill mandatory fields and click on create")
	public void studentShouldFillMandatoryFieldsAndClickOnCreate() throws InterruptedException {
		log.VentureGroup_Name(driver).sendKeys("Gb");
		Thread.sleep(1000);
		log.Venture_Name(driver).sendKeys("Mohan");
		Thread.sleep(1000);
		log.Venture_Description(driver).sendKeys("Welcome");
		Thread.sleep(1000);
		log.Venture_Industry(driver).click();
		Thread.sleep(1000);
		log.Select_Venture_Industry(driver).click();
		Thread.sleep(1000);
		log.Click_Create_Venture(driver).click();
		Thread.sleep(1000);
	}

	@Then("Student should logout from his profile")
	public void studentShouldLogoutFromHisProfile() throws InterruptedException {
		Thread.sleep(2000);
		log.Click_Profile_forLogOutOption(driver).click();
		Thread.sleep(3000);
		log.Click_StudentProfile_forLogOut(driver).click();
		Thread.sleep(1000);
		

	}
@Then("Student should click on Join_group")
	public void studentShouldClickOnJoin_group() {
		log.Click_JoinGroup(driver).click();		
	}
	@Then("Student should select group name")
	public void studentShouldSelectGroupName() throws InterruptedException {
				
		log.Click_DropDown_SelectJoinGroup(driver).click();
		Thread.sleep(1000);
		log.Select_Join_GroupName(driver).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//span[text()='JOIN']")).click();
		Thread.sleep(1000);
	}


@Then("Student should click View venture members")
public void studentShouldClickViewVentureMembers() throws InterruptedException {
	
	log.View_VentureMembers(driver).click();
   Thread.sleep(1000);
}

@Then("Student should delete the venture")
public void studentShouldDeleteTheVenture() throws InterruptedException {
	
	 log.Delete_VentureMember(driver).click();
	 Thread.sleep(1000);

	 	 log.ClickOn_yesToDelete_venturegroup(driver).click();
	 Thread.sleep(1000);
	 log.Delete_VentureMemberGroup(driver).click();
	 
	 Thread.sleep(1000);
	 log.Click_ToDelete_VentureMemberGroup(driver).click();
	

}
@Then("Student should logout from that profile")
public void studentShouldLogoutFromThatProfile() throws InterruptedException {
	Thread.sleep(3000);
	driver.findElement(By.xpath("//i[@class='fa fa-caret-down']")).click();
	Thread.sleep(2000);
	driver.findElement(By.xpath("//a[text()='Logout']")).click();
	Thread.sleep(1000);
}




	}



