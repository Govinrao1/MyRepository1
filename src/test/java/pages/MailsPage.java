package pages;

import java.io.File;
import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import org.openqa.selenium.support.ui.FluentWait;

public class MailsPage
{
	//Locators as properties
	private RemoteWebDriver driver;
	private FluentWait<RemoteWebDriver> wait;
	
	@FindBy(how=How.XPATH,using="(//table[@role='grid'])[2]/tbody")
	public WebElement wtbody;
	
	//Constructor method for connecting to runner classes
	public MailsPage(RemoteWebDriver driver,FluentWait<RemoteWebDriver> wait)
	{
		this.driver=driver;
		this.wait=wait;
		AjaxElementLocatorFactory af=new AjaxElementLocatorFactory(driver,5);
		PageFactory.initElements(af,this);
	}
	
	//operations and observations as methods
	public int getRowCount()
	{
		int value=wtbody.findElements(By.xpath("child::tr")).size();
		return(value);
	}
	
	public int getColumnCount(int rownum)
	{
		int value=wtbody.findElements(By.xpath("child::tr["+rownum+"]/td")).size();
		return(value);
	}
	
	public String getCellValue(int rownum, int colnum)
	{
		WebElement temp=wtbody.findElement(By.xpath("child::tr["+rownum+"]/td["+colnum+"]"));
		String value=(String) driver.executeScript("return(arguments[0].textContent);",temp);
		return(value);
	}
	
	public List<WebElement> getCellChilds(int rownum, int colnum, String tagname)
	{
		List<WebElement> eles=wtbody.findElements(By.xpath(
			                              "child::tr["+rownum+"]/td["+colnum+"]/"+tagname));
		return(eles);
	}
	
	public void copyTableToExcel() throws Exception
	{
		SimpleDateFormat sf=new SimpleDateFormat("dd-MMM-yyyy-hh-mm-ss");
		Date dt=new Date();
		//Create a new excel file with a sheet
		File f=new File(
				System.getProperty("user.dir")+"\\target\\table"+sf.format(dt)+".xlsx");
		FileOutputStream fo=new FileOutputStream(f);
		XSSFWorkbook wb=new XSSFWorkbook(); //"HSSFWorkbook" for new ".xls" file
		Sheet sh=wb.createSheet("Mysheet");
		//Copy web table body(multiple rows with multiple columns)
		//In Web Table XPATHs, index starts with 1
		//In excel file, rows and columns index starts with 0
		int rc=getRowCount(); //from Web Table
		for(int i=1;i<=rc;i++)
		{
			Row nr=sh.createRow(i-1); //in excel file
			int cc=getColumnCount(i); //from Web Table
			for(int j=1;j<=cc;j++)
			{
				String output=getCellValue(i,j); //from web table
				nr.createCell(j-1).setCellValue(output); //in excel file
				sh.autoSizeColumn(j-1); //auto fit in excel file
			}
		}
		//Save and close
		wb.write(fo);
		wb.close();
		fo.close();
	}
}
