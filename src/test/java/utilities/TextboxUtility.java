package utilities;

import org.openqa.selenium.WebElement;

public class TextboxUtility
{
	public boolean isTextboxDisplayedInPage(WebElement e)
	{
		if(e.isDisplayed())
		{
			return(true);
		}
		else
		{
			return(false);
		}
	}
	public boolean isTextboxEnabledInPage(WebElement e)
	{
		if(e.isEnabled())
		{
			return(true);
		}
		else
		{
			return(false);
		}
	}
	public void clearTextboxContent(WebElement e)
	{
		e.clear();
	}
	public void fillTextbox(WebElement e,String data)
	{
		e.sendKeys(data);
	}
	public String getTextboxContent(WebElement e)
	{
		if(e.getText().equals(null))
		{
			return(e.getAttribute("value"));
		}
		else
		{
			return(e.getText());
		}
	}
	public String getTextboxDOMAttribute(WebElement e,String attribute)
	{
		if(e.getDomAttribute(attribute).equals(null))
		{
			return(e.getDomProperty(attribute));
		}
		else
		{
			return(e.getDomAttribute(attribute));
		}
	}
	public String getTextboxCSSAttribute(WebElement e,String attribute)
	{
		return(e.getCssValue(attribute));
	}
}
