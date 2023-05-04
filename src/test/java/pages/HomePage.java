package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.RemoteWebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;

import utilities.TextboxUtility;

public class HomePage
{
	//Properties for locating elements
	private RemoteWebDriver driver;
	private FluentWait<RemoteWebDriver> wait;
	private TextboxUtility tbobj;
	
	@FindBy(name="identifier")
	private WebElement uid;
	
	@FindBy(xpath="//*[text()='Next']/parent::button")
	private WebElement uidnext;
	
	@FindBy(xpath="//div[contains(text(),'Enter an email')]")
	private WebElement blankuiderr;
	
	@FindBy(xpath="//div[text()=\"Couldn't find your Google Account\" or text()='Enter a valid email or phone number']")
	private WebElement invaliduiderr;
	
	//Constructor method for connecting to runner classes
	public HomePage(RemoteWebDriver driver, FluentWait<RemoteWebDriver> wait)
	{
		AjaxElementLocatorFactory af=new AjaxElementLocatorFactory(driver,50);
		PageFactory.initElements(af,this);
		this.tbobj=new TextboxUtility();
		this.driver=driver;
		this.wait=wait;
	}
	
	//Operational methods to operate and observe elements
	public void uidFill(String x)
	{
		wait.until(ExpectedConditions.visibilityOf(uid));
		tbobj.fillTextbox(uid,x);
	}
	
	public void uidNextClick()
	{
		wait.until(ExpectedConditions.elementToBeClickable(uidnext)).click();
	}
	
	public boolean isBlankuidError()
	{
		try
		{
			wait.until(ExpectedConditions.visibilityOf(blankuiderr));
			return(true);
		}
		catch(TimeoutException ex)
		{
			return(false);
		}
	}
	
	public boolean isInvaliduidError()
	{
		try
		{
			wait.until(ExpectedConditions.visibilityOf(invaliduiderr));
			return(true);
		}
		catch(TimeoutException ex)
		{
			return(false);
		}
	}
	
	public boolean isPasswordDisplayed()
	{
		try
		{
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("password")));
			return(true);
		}
		catch(TimeoutException ex)
		{
			return(false);
		}
	}
}



