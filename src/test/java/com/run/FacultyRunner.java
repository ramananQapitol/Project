package com.run;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features= {"Features/loginstudent.feature"},glue= {"com.step"},

tags= {"@tag46"},
monochrome=true,dryRun=false,snippets = SnippetType.CAMELCASE,
plugin = {"pretty","html:test-output"})



public class FacultyRunner {
	

}


//import org.junit.runner.RunWith;
//
//import cucumber.api.CucumberOptions;
//import cucumber.api.SnippetType;
//import cucumber.api.junit.Cucumber;
//@RunWith(Cucumber.class)
//@CucumberOptions(features= {"Features/loginfaculty.feature"},glue= {"com.step"},
//tags= {"@tag1"},monochrome=true,dryRun=false,snippets = SnippetType.CAMELCASE,
//plugin = {"pretty","html:test-output"})
//
//public class FacultyRunner {
//}
//@tags1,@tags3,@tags3,@tags4,@tags5,@tags6,@tags7,@tags8,@tags9,@tags10,
//@tag1,@tag2,@tag3,@tag4,@tag5,@tag6,@tag7,@tag8,@tag9,@tag10,@tag11,@tag12,@tag13,@tag14,@tag15,@tag16,@tag17,@tag18,@tag19,@tag20, @tag21,@tag22,@tag23,@tag24,@tag25,@tag26,@tag27,@tag28,@tag29@tag30,@tag31,@tag32,@tag33,@tag34,@tag35,@tag36,@tag37,@tag38,@tag3