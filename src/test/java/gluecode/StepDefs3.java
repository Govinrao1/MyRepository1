package gluecode;

import org.openqa.selenium.OutputType;
import org.testng.Assert;

import io.cucumber.java.en.And;

public class StepDefs3 
{
	//Declare object to Page shared class
	public Shared sh;
	
	//Constructor method
	public StepDefs3(Shared sh)
	{
		this.sh=sh;
	}
	
	//Operational methods of class with cucumber-java annotations
	@And("send mail and test by using excel data {string}")
	public void method14(String fp) throws Exception
	{
		fp=System.getProperty("user.dir")+"\\"+fp;
		//open excel file in read and write mode
		sh.eu.openExcelFile(fp);
		try //To close Excel file safely when any exception will be raised
		{
			sh.eu.openSheet("Sheet1");
			int nour=sh.eu.getRowsCount();
			int nouc=sh.eu.getColumnscount(0);
			sh.eu.createResultColumn(nouc);
			for(int i=1;i<nour;i++) //skip 1st row(index=0)
			{
				sh.cp.clickCompose();
				sh.cp.fillTo(sh.eu.getCellValue(i,0));
				sh.cp.fillSubject(sh.eu.getCellValue(i,1));
				sh.cp.fillBody(sh.eu.getCellValue(i,2));
				sh.cp.attachment(sh.eu.getCellValue(i,3));
				sh.cp.clickSend();
				//compose testing
				String msg=sh.cp.getOutputMessage();
				if(!msg.contains("Sorry")) //not contains Sorry
				{
					sh.s.log("Compose test passed and we got "+msg);
					sh.eu.setCellValue(i,nouc,"Compose test passed and we got "+msg);
					Assert.assertTrue(true); //optional
				}
				else
				{
					byte[] b=sh.driver.getScreenshotAs(OutputType.BYTES);
					sh.s.attach(b,"image/png","Mail compose test failed");
					sh.eu.setCellValue(i,nouc,"Mail compose test failed");
					Assert.assertTrue(false);
				}	
			}
		}
		catch(Exception ex)
		{
			sh.s.log(ex.getMessage());
		}
		//Save and close excel file
		sh.eu.saveAndCloseExcel();
	}
}





