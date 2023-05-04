package gluecode;

import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.FluentWait;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import pages.ComposePage;
import pages.HomePage;
import pages.LoginPage;
import pages.LogoutPage;
import pages.MailsPage;
import utilities.ExcelFileUtility;
import utilities.WebSiteUtility;

public class Shared
{
	//Global objects related to all required classes
	//No object required for classes which have static methods only
	public RemoteWebDriver driver; //SWD class
	public FluentWait<RemoteWebDriver> wait; //SWD class
	public Scenario s; //cucumber jar class to create HTML/JSON/XML/Text report for scenarios
	public WebSiteUtility su; //Utilities class
	public ExcelFileUtility eu; //Utilities class
	public HomePage hp; //Page class
	public LoginPage lp; //Page class
	public ComposePage cp; //Page class
	public MailsPage mp; //Page class
	public LogoutPage lop; //Page class
		
	//method to be executed before for every "Scenario:" or "Scenario Outline:" iterations
	@Before(order=1)
	public void method1(Scenario s) throws Exception
	{
		//define driver and wait objects with null by default
		driver=null;
		wait=null;
		//Create objects to Utility classes
		su=new WebSiteUtility();
		eu=new ExcelFileUtility();
		//Create "Scenario" class object to work for current "Scenario:" or "Scenario Outline:"
		this.s=s;
		s.log("\""+s.getName()+"\" execution started");
	}
	
	//method to be executed after every "Scenario:" or "Scenario Outline:" iteration execution
	@After
	public void method2(Scenario s)
	{
		this.s=s;
		s.log("\""+s.getName()+"\" execution completed and result is "+s.getStatus().name());
	}
}

