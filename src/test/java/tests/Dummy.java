package tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import utilities.PropertiesFileUtility;
import utilities.WebSiteUtility;

public class Dummy
{
	public static void main(String[] args) throws Exception
	{
		WebSiteUtility w=new WebSiteUtility();
		RemoteWebDriver driver=w.openBrowser("chrome");
		w.launchSite(driver,"DEV");
		WebElement e=driver.findElement(By.cssSelector("input[name=identifier]"));
		String p[]=e.toString().split("->");
	    String q[]=p[1].split(":");
	    String locatortype=q[0].trim();
	    String locatorvalue=q[1].substring(0,q[1].length()-1).trim();
	    System.out.println(locatortype);
	    System.out.println(locatorvalue);
		

	}
}
