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

import utilities.WebSiteUtility;


public class ComposePage
{
	//Properties for locating elements
	private RemoteWebDriver driver;
	private FluentWait<RemoteWebDriver> wait;
			
	@FindBy(how=How.XPATH,using="//*[text()='Compose']")
	private WebElement comp;
			
	@FindBy(how=How.NAME,using="to")
	private WebElement toaddress;
			
	@FindBy(how=How.NAME,using="subjectbox")
	private WebElement subject;
	
	@FindBy(how=How.XPATH,using="//div[@aria-label='Message Body']")
	private WebElement body;
	
	@FindBy(how=How.XPATH,using="//input[@name='Filedata' and @type='file']")
	private WebElement attach;
	
	@FindBy(how=How.XPATH,using="//*[contains(@aria-label,'Uploading attachment:')]")
	private WebElement uploading;
	
	@FindBy(how=How.XPATH,using="//*[contains(@aria-label,'Attachment:')]")
	private WebElement uploaded;
			
	@FindBy(how=How.XPATH,using="//*[text()='Send']")
	private WebElement send;
	
	@FindBy(how=How.XPATH,using="//*[contains(text(),'Message sent')]")
	private WebElement outputmsg;
	
	//Constructor method for connecting to runner classes
	public ComposePage(RemoteWebDriver driver, FluentWait<RemoteWebDriver> wait)
	{
		AjaxElementLocatorFactory af=new AjaxElementLocatorFactory(driver,50);
		PageFactory.initElements(af,this);
		this.driver=driver;
		this.wait=wait;
	}
			
	//Operational methods to operate elements
	public void clickCompose()
	{
		wait.until(ExpectedConditions.visibilityOf(comp)).click();
	}
	
	public void fillTo(String x)
	{
		wait.until(ExpectedConditions.visibilityOf(toaddress)).sendKeys(x);
	}
	
	public void fillSubject(String x)
	{
		wait.until(ExpectedConditions.visibilityOf(subject)).sendKeys(x);
	}
	
	public void fillBody(String x)
	{
		wait.until(ExpectedConditions.visibilityOf(body)).sendKeys(x);
	}
	
	public void attachment(String filepath) throws Exception
	{
		//for hidden element, presenceOfElementLocated() method can take "By" as argument
		WebSiteUtility ws=new WebSiteUtility();
		By b=ws.getByFromWebElement(attach);
		wait.until(ExpectedConditions.presenceOfElementLocated(b)).sendKeys(filepath);
		//for visible element, visibilityOf() method can take "WebElenment" as argument
		try
		{
			//If attached file size is big, status bar will be generated
			wait.until(ExpectedConditions.visibilityOf(uploading));
			wait.until(ExpectedConditions.visibilityOf(uploaded));
		}
		catch(TimeoutException ex)
		{
			//May be attached file size is very small, so status bar is not generated
			wait.until(ExpectedConditions.visibilityOf(uploaded));
		}
	}
	
	public void clickSend()
	{
		wait.until(ExpectedConditions.elementToBeClickable(send)).click();
	}
	
	public String getOutputMessage()
	{
		try
		{
			wait.until(ExpectedConditions.visibilityOf(outputmsg));
			return(outputmsg.getText());
		}
		catch(TimeoutException ex)
		{
			return("Sorry, Mail has not been sent");
		}
	}
}

