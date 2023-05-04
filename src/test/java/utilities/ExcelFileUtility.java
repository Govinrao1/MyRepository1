package utilities;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;

//To access existing Excel file
public class ExcelFileUtility 
{
	//Properties
	private File f;
	private FileInputStream fi;
	private Workbook wb;
	private Sheet sht;
	private FileOutputStream fo;
	
	//Constructor method 
	public ExcelFileUtility() 
	{
		f=null;
		fi=null;
		wb=null;
		fo=null;
		sht=null;
	}
	
	//Operational methods
	public void openExcelFile(String filepath) throws Exception
	{
		f=new File(filepath);
		fi=new FileInputStream(f);
		wb=WorkbookFactory.create(fi);
		fo=new FileOutputStream(f);
	}
	public void openSheet(String sheetname)
	{
		sht=wb.getSheet(sheetname);
	}
	
	public int getRowsCount()
	{
		int nour=sht.getPhysicalNumberOfRows();
		return(nour);
	}
	
	public int getColumnscount(int rowindex)
	{
		int nouc=sht.getRow(rowindex).getLastCellNum(); 
		return(nouc);
	}
	
	public void createResultColumn(int colindex)
	{
		SimpleDateFormat sf=new SimpleDateFormat("dd-MMM-yyyy-hh-mm-ss");
		Date dt=new Date();
		//create results column in first row by default
		sht.getRow(0).createCell(colindex).setCellValue(sf.format(dt)); 
		sht.autoSizeColumn(colindex); //auto-fit
	}
	
	public String getCellValue(int rowindex, int colindex)
	{
		DataFormatter df=new DataFormatter();
		String value=df.formatCellValue(sht.getRow(rowindex).getCell(colindex));
		return(value);
	}
	
	public void setCellValue(int rowindex, int colindex, String value)
	{
		try
		{
			//If row is used row
			sht.getRow(rowindex).createCell(colindex).setCellValue(value);
			sht.autoSizeColumn(colindex); 
		}
		catch(NullPointerException ex)
		{
			//If row is unused or using first time
			sht.createRow(rowindex).createCell(colindex).setCellValue(value);
			sht.autoSizeColumn(colindex); 
		}
	}
	
	public void saveAndCloseExcel() throws Exception
	{
		wb.write(fo); //save
		wb.close();
		fo.close();
		fi.close();
	}

}
