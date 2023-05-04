package gluecode;

import org.openqa.selenium.OutputType;
import org.testng.Assert;

import io.cucumber.java.en.And;
import pages.ComposePage;
import utilities.TextFileUtility;

public class StepDefs2
{
	//Declare object to shared class
	public Shared sh;
	
	//Constructor method
	public StepDefs2(Shared sh)
	{
		this.sh=sh;
	}
	
	//Operational methods of class with cucumber-java annotations
	
	
	@And("send mail and test by taking data from {string}")
	public void method13(String fp) throws Exception
	{
		//Open text file in read mode
		fp=System.getProperty("user.dir")+"\\"+fp;
		int n=TextFileUtility.getCountOfLinesInTextFile(fp);
		//Create page class object
		sh.cp=new ComposePage(sh.driver,sh.wait);
		//Do data driven
		for(int i=1;i<=n;i++)
		{
			String[] values=TextFileUtility.getValueInTextFile(fp,i);
			sh.cp.clickCompose();
			sh.cp.fillTo(values[0]);
			sh.cp.fillSubject(values[1]);
			sh.cp.fillBody(values[2]);
			sh.cp.attachment(values[3]);
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
}





