package dummy;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import utilities.TextboxUtility;
import utilities.WebSiteUtility;

public class TBCheck 
{
	public static void main(String[] args) throws Exception
	{
		WebSiteUtility wsobj=new WebSiteUtility();
		TextboxUtility tbobj=new TextboxUtility();
		RemoteWebDriver driver=wsobj.openBrowser("chrome");
		wsobj.launchSite(driver, "DEV");
		WebElement e=driver.findElement(By.name("identifier"));
		if(tbobj.isTextboxDisplayedInPage(e))
		{
			System.out.println("Displayed");
			if(tbobj.isTextboxEnabledInPage(e))
			{
				System.out.println("Enabled");
				tbobj.clearTextboxContent(e);
				tbobj.fillTextbox(e,"abdulkalam");
			}
		}
		//wsobj.closeSite(driver);
	}
}
