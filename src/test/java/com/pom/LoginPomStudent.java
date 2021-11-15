package com.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import utilities.log;

public class LoginPomStudent {
	WebDriver driver;
	static log logger = new log();



	public static WebElement UserName(WebDriver driver) {
		logger.info("entering username");
		return driver.findElement(By.id("input_0"));	
	}
	public static WebElement NextBtn(WebDriver driver) {
		return driver.findElement(By.xpath("//button[@type='submit']"));

	}
	public static WebElement Password(WebDriver driver) {
		return driver.findElement(By.xpath("//*[@id=\"input_4\"]"));
	}
	public static WebElement Enter_Password(WebDriver driver) {
		return driver.findElement(By.xpath("//input[@id='input_4']"));
	}
	public static WebElement Confirm_Password(WebDriver driver) {
		return driver.findElement(By.xpath("//input[@id='input_5']"));
	}
	public static WebElement ClickOn_checkBox(WebDriver driver) {
		return driver.findElement(By.xpath("//div[@class='md-container md-ink-ripple']"));
	}
	public static WebElement ClickOn_Reg_SignIn(WebDriver driver) {
		return driver.findElement(By.xpath("/html/body/div[3]/div/div/div[1]/header/div/div/div[2]/div/div/div/div[2]/form/button"));
	}
public static WebElement Enter_PassKey(WebDriver driver) {
		return driver.findElement(By.xpath("//input[@id='password']"));
	}


	public static WebElement ClickOn_SignIn(WebDriver driver) {
		return driver.findElement(By.xpath("//span[contains(text(),'SIGN IN')]"));
	}
public static WebElement ClickOn_InstituteCode(WebDriver driver) {
		return driver.findElement(By.xpath("//input[@id='input_2']"));
	}
	public static WebElement ReType_EmailId(WebDriver driver) {
		return driver.findElement(By.xpath("//input[@id='input_3']"));
	}
	
	public static WebElement selectLanguage(WebDriver driver) {

		return driver.findElement(By.id("select_6"));

	}
	public static WebElement Select_Lang_Opt(WebDriver driver) {
		return driver.findElement(By.xpath("//*[@id=\"select_option_13\"]"));
	}
	public static WebElement ClickOn_Hamburger(WebDriver driver) {
		return driver.findElement(By.xpath("//div[@class='faculty_course_menu']"));
	}
	public static WebElement ClickOn_StartOrResume(WebDriver driver) {
		return driver.findElement(By.xpath("//div[@class='faculty_activities_title']//following::a"));
	}
	public static WebElement ClickOn_Courses(WebDriver driver) {
		return driver.findElement(By.xpath("//a[@title='Courses']"));
	}
	public static WebElement ClickOn_Join(WebDriver driver) {
		return driver.findElement(By.xpath("//span[contains(text(),'JOIN')]"));
	}
public static WebElement Enter_BatchId(WebDriver driver) {
		return driver.findElement(By.xpath("//input[@id='batchUniqueID']"));
	}
	public static WebElement Clicking_On_BatchName(WebDriver driver) {
		return driver.findElement(By.xpath("//span[contains(text(),'batch098')]"));
	}
	public static WebElement Clicking_On_ChatIcon(WebDriver driver) {
		return driver.findElement(By.xpath("//span[contains(text(),'batch098')]//following::i[3]"));
	}
	public static WebElement Clicking_On_Quizzes(WebDriver driver) {
		return driver.findElement(By.xpath("//a[@title='Quizzes']"));
	}
	public static WebElement ClickOn_TakeQuiz(WebDriver driver) {
		return driver.findElement(By.xpath("//span[contains(text(),'Quizzes')]//following::div[41]"));
	}
	public static WebElement ClickOn_PracticeVenture(WebDriver driver) {
		return driver.findElement(By.xpath("//a[contains(text(),'Quizzes')]//following::li[1]"));
	}
	public static WebElement ClickOn_save_continue(WebDriver driver) {
		return driver.findElement(By.xpath("//input[@id='edit-submit']"));
	}
	public static WebElement ClickOn_Option(WebDriver driver) {
		return driver.findElement(By.xpath("//a[contains(text(),'FC_ENG_L4-SET 1')]//following::input[4]"));
	}
	public static WebElement Create_VentureGroup(WebDriver driver) {
		return driver.findElement(By.xpath("//div[contains(text(),'Select a group to join or add a new group')]//following::div[8]"));
	}
	public static WebElement VentureGroup_Name(WebDriver driver) {
		return driver.findElement(By.xpath("//input[@id='input_4']"));
	}
	public static WebElement Venture_Name(WebDriver driver) {
		return driver.findElement(By.xpath("//input[@id='input_5']"));
	}
	public static WebElement Venture_Description(WebDriver driver) {
		return driver.findElement(By.xpath("//textarea[@id='input_6']"));
	}
	public static WebElement Venture_Industry(WebDriver driver) {
		return driver.findElement(By.xpath("//md-select[@id='pvIndustry']"));
	}
	public static WebElement Select_Venture_Industry(WebDriver driver) {
		return driver.findElement(By.xpath("//md-option[@id='select_option_9']"));
	}
	public static WebElement Click_Create_Venture(WebDriver driver) {
		return driver.findElement(By.xpath("//span[contains(text(),'CREATE')]"));
	}
	
	public static WebElement ClickOn_Back(WebDriver driver) {
		return driver.findElement(By.xpath("//input[@id='edit-back']"));
	}
	public static WebElement ClickOn_PV_Milestones(WebDriver driver) {
		return driver.findElement(By.xpath("//a[@title='PV Milestones']"));
	}
	public static WebElement PV_Milestones_assesment(WebDriver driver) {
		return driver.findElement(By.xpath("//*[@id=\"assignment_submit_att\"]"));
	}
	public static WebElement ClickOn_Profile(WebDriver driver) {
		return driver.findElement(By.xpath("//li[contains(text(),' Profile')]"));
	}
	public static WebElement ClickOn_StudentProfile(WebDriver driver) {
		return driver.findElement(By.xpath("//span[contains(text(),'student')]"));
	}
	
	public static WebElement ClickOn_EditIcon(WebDriver driver) {
		return driver.findElement(By.xpath("//span[contains(text(),'Profile Details')]//following::img[1]"));
	}
	
	public static WebElement ClickOn_EditFirstName(WebDriver driver) {
		return driver.findElement(By.xpath("//input[@id='input_4']"));
	}
	public static WebElement ClickOn_EditEmail(WebDriver driver) {
		return driver.findElement(By.xpath("//input[@id='input_5']"));
	}
	public static WebElement ClickOn_Edit_InstitueCode(WebDriver driver) {
		return driver.findElement(By.xpath("//input[@id='input_7']"));
	}
	public static WebElement ClickOn_Edit_Language(WebDriver driver) {
		return driver.findElement(By.xpath("//*[@id=\\\"select_value_label_0\\\"]/span[1]"));
	}
	public static WebElement ClickOn_Edit_ChangePassword(WebDriver driver) {
		return driver.findElement(By.xpath("//div[@class='md-container md-ink-ripple']"));
	}
	
	public static WebElement ClickOn_Edit_Cancel(WebDriver driver) {
		return driver.findElement(By.xpath("//span[contains(text(),'CANCEL')]"));
	}
public static WebElement ClickOn_Edit_SaveChanges(WebDriver driver) {
		return driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/div/form/div[2]/div[2]/button/span"));
	}

	public static WebElement ClickOn_Notifications(WebDriver driver) {
		return driver.findElement(By.xpath("//a[@class='notification-icon-red']"));
	}
	
	public static WebElement ClickOn_Reports(WebDriver driver) {
		return driver.findElement(By.xpath("//a[contains(text(),'Reports')]"));
	}
	public static WebElement Download_QuizzReport(WebDriver driver) {
		return driver.findElement(By.xpath("//span[contains(text(),'Reports')]//following::img[1]"));
	}
	public static WebElement ClickOn_AssesmentReports(WebDriver driver) {
		return driver.findElement(By.xpath("//*[@id=\"student_finalassessment_report\"]/thead/tr/td[1]"));
	}
	public static WebElement Download_AssesmentReports(WebDriver driver) {
		return driver.findElement(By.xpath("//*[@id=\"content\"]/div[1]/div/div[2]/div[7]/img"));
	}
	public static WebElement ClickOnDelete_venturegroup(WebDriver driver) {
		return driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/div[2]/div[7]/div/div[3]/div/span/i"));
	}
	public static WebElement ClickOn_yesToDelete_venturegroup(WebDriver driver) {
		return driver.findElement(By.xpath("//*[@id=\"dialogContent_30\"]/div/form/md-dialog-actions/button[2]/span"));
	}
	public static WebElement ClickOn_ReSubmit_Assesment(WebDriver driver) {
		return driver.findElement(By.xpath("//span[contains(text(),'Re-Submit')]"));
	}
	public static WebElement ClickOn_Back_Btn(WebDriver driver) {
		return driver.findElement(By.xpath("//a[contains(text(),'Back')]"));
	}

	public static WebElement ClickOn_PV_Milestone_Number(WebDriver driver) {
		return driver.findElement(By.xpath("//span[contains(text(),'PV Milestones')]//following::td[2]"));
	}
	

}
