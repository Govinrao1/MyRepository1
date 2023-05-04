package gluecode;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.OutputType;
import org.testng.Assert;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.ComposePage;
import pages.HomePage;
import pages.LoginPage;
import pages.LogoutPage;

public class StepDefs1
{
	//Declare object to Shared class(which consists of all required classes objects)
	public Shared sh; 
	
	//Constructor method can get "Shared" class object as argument from PICOcontainer
	public StepDefs1(Shared sh)
	{
		this.sh=sh;
	}
	
	//Operational methods or Step definitions with cucumber-java annotations
	@Given("launch site using {string} in {string} environment")
	public void method2(String bn, String env) throws Exception
	{
		//open browser
		sh.driver=sh.su.openBrowser(bn);
		sh.wait=sh.su.defineWait(sh.driver);
		sh.hp=new HomePage(sh.driver,sh.wait);
		sh.lp=new LoginPage(sh.driver,sh.wait);
		sh.cp=new ComposePage(sh.driver,sh.wait);
		sh.lop=new LogoutPage(sh.driver,sh.wait);	
		//Launch site by using url in properties file
		sh.su.launchSite(sh.driver,env);
	}
	
	@Then("title should be {string}")
	public void method3(String expected) throws Exception
	{
		String actual=sh.driver.getTitle();
		if(expected.equals(actual))
		{
			sh.s.log("Gmail title test pased");
			Assert.assertTrue(true); //TestNG
		}
		else
		{
			byte[] b=sh.driver.getScreenshotAs(OutputType.BYTES); //SWD
			sh.s.attach(b,"image/png","Gmail title test failed");  //cucumber-java
			Assert.assertTrue(false); //TestNG
		}
	}
	
	@And("quit site")
	@When("close site")
	public void method4()
	{
		sh.su.closeSite(sh.driver);
	}
	
	@When("enter userid as {string}")
	public void method5(String uid)
	{
		sh.hp.uidFill(uid);
	}
	
	@And("click userid next button") 
	public void method6() throws Exception
	{
		sh.hp.uidNextClick();
		Thread.sleep(5000); //wait for outcome
	}
	
	@Then("^validate outcome related to given userid criteria like \"(.*)\"$")
	public void method7(String c)
	{
		try
		{
			if(c.equals("blank") && sh.hp.isBlankuidError())
			{
				sh.s.log("Blank uid test was passed");
			}
			else if(c.equals("invalid") && sh.hp.isInvaliduidError())
			{
				sh.s.log("Invalid uid test was passed");
			}
			else if(c.equals("valid") && sh.hp.isPasswordDisplayed())
			{
				sh.s.log("Valid uid test was passed");
			}
			else
			{
				byte[] b=sh.driver.getScreenshotAs(OutputType.BYTES);
				sh.s.attach(b,"png","Gmail UID test failed");
				Assert.assertTrue(false);
			}
		}
		catch(Exception ex)
		{
			byte[] b=sh.driver.getScreenshotAs(OutputType.BYTES);
			sh.s.attach(b,"png",ex.getMessage());
			Assert.assertTrue(false);
		}
	}
	
	@And("^enter password as \"(.*)\"$")
	public void method8(String p)
	{
		sh.lp.pwdfill(p);
	}
	
	@And("click password next button")
	public void method9() throws Exception
	{
		sh.lp.pwdnextclick();
		Thread.sleep(5000); //wait for outcome
	}
	
	@Then("^validate outcome related to given password criteria like \"(.*)\"$")
	public void method10(String c)
	{
		try
		{
			if(c.equals("blank") && sh.lp.isBlankpwdError())
			{
				sh.s.log("Blank pwd test was passed");
			}
			else if(c.equals("invalid") && sh.lp.isInvalidpwdError())
			{
				sh.s.log("Invalid pwd test was passed");
			}
			else if(c.equals("valid") && sh.lp.isComposeDisplayed())
			{
				sh.s.log("Valid pwd test was passed");
			}
			else
			{
				byte[] b=sh.driver.getScreenshotAs(OutputType.BYTES);
				sh.s.attach(b,"image/png","Gmail PWD test failed");
				Assert.assertTrue(false);
			}
		}
		catch(Exception ex)
		{
			byte[] b=sh.driver.getScreenshotAs(OutputType.BYTES);
			sh.s.attach(b,"image/png",ex.getMessage());
			Assert.assertTrue(false);
		}
	}
	
	@And("send mail and test")
	public void method11(DataTable dt) throws Exception
	{
		List<Map<String, String>> l=dt.asMaps();
		for(int i=0;i<l.size();i++) 
		{
			sh.cp.clickCompose();
			sh.cp.fillTo(l.get(i).get("to"));
			sh.cp.fillSubject(l.get(i).get("subject"));
			sh.cp.fillBody(l.get(i).get("body"));
			sh.cp.attachment(l.get(i).get("attachment"));
			sh.cp.clickSend();
			//compose testing
			String msg=sh.cp.getOutputMessage();
			if(!msg.contains("Sorry")) //not contains Sorry
			{
				sh.s.log("Compose test passed and we got "+msg);
				Assert.assertTrue(true); //optional
			}
			else
			{
				byte[] b=sh.driver.getScreenshotAs(OutputType.BYTES);
				sh.s.attach(b,"image/png","Mail compose test failed");
				Assert.assertTrue(false);
			}	
		}
	}
	
	@When("do logout")
	public void method12() throws Exception
	{
		sh.lop.clickProfilePic();
		sh.lop.clickSignOut();
	} 
	
	@Then("cookies should be loaded")
	public void method15()
	{
	    if(sh.driver.manage().getCookies().size()>0)
	    {
	    	sh.s.log("Cookies were loaded");
	    	Assert.assertTrue(true);
	    }
	    else
	    {
	    	sh.s.log("No Cookies were loaded");
	    	Assert.assertTrue(false);
	    }  
	}
}