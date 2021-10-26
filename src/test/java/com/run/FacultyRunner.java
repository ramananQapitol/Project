package com.run;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features= {"Features"},glue= {"com.step"},
tags= {"@tags1"},monochrome=true,dryRun=false,snippets = SnippetType.CAMELCASE,
plugin = {"pretty","html:test-output"})


public class FacultyRunner {

}
