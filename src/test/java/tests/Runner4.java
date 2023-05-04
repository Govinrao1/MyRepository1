package tests;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

//add @regressiontest tag to required scenarios or scenario outlines in feature files manually, 
//which are passed previously but related to failed scenarios.
//Regression testing
@CucumberOptions(
		features={"src\\test\\resources\\features"},
		glue={"gluecode"},
		tags="@regressiontest",
		monochrome=true,
		plugin={"pretty","html:target/regressiontestres",
				                            "rerun:target/failedregressionres.txt"}
		)
public class Runner4 extends AbstractTestNGCucumberTests
{
}











