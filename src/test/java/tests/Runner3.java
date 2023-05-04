package tests;
import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

//Re-testing(run previously failed scenarios only)
@CucumberOptions(
		features={"@target/realtestfailedres.txt"},
		glue={"gluecode"},
		monochrome=true,
		plugin={"pretty","html:target/retestres","rerun:target/retestfailedres.txt"}
		)
public class Runner3 extends AbstractTestNGCucumberTests
{
}











