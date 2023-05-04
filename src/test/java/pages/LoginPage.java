package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;

public class LoginPage
{
	//Properties for locating elements
	private RemoteWebDriver driver;
	private FluentWait<RemoteWebDriver> wait;
		
	@FindBy(how=How.NAME,using="password")
	private WebElement pwd;
		
	@FindBy(how=How.XPATH,using="//*[text()='Next']/parent::button")
	private WebElement pwdnext;
		
	@FindBy(how=How.XPATH,using="//*[text()='Enter a password']")
	private WebElement blankpwderr;
		
	@FindBy(how=How.XPATH,using=
	 "//*[contains(text(),'Wrong password') or contains(text(),'Your password was changed')]")
	private WebElement invalidpwderr;
		
	//Constructor method for connecting to runner classes
	public LoginPage(RemoteWebDriver driver, FluentWait<RemoteWebDriver> wait)
	{
		AjaxElementLocatorFactory af=new AjaxElementLocatorFactory(driver,50);
		PageFactory.initElements(af,this);
		this.driver=driver;
		this.wait=wait;
	}
		
	//Operational methods to operate elements
	public void pwdfill(String x)
	{
		wait.until(ExpectedConditions.visibilityOf(pwd)).sendKeys(x);
	}
		
	public void pwdnextclick()
	{
		wait.until(ExpectedConditions.elementToBeClickable(pwdnext)).click();
	}
	
	public boolean isBlankpwdError()
	{
		try
		{
			wait.until(ExpectedConditions.visibilityOf(blankpwderr));
			return(true);
		}
		catch(TimeoutException ex)
		{
			return(false);
		}
	}
	
	public boolean isInvalidpwdError()
	{
		try
		{
			wait.until(ExpectedConditions.visibilityOf(invalidpwderr));
			return(true);
		}
		catch(TimeoutException ex)
		{
			return(false);
		}
	}
	
	public boolean isComposeDisplayed()
	{
		try
		{
			wait.until(ExpectedConditions.visibilityOfElementLocated(
					                            By.xpath("//div[text()='Compose']")));
			return(true);
		}
		catch(TimeoutException ex)
		{
			return(false);
		}
	}
}

