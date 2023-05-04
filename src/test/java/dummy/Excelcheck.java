package dummy;

import utilities.ExcelFileUtility;

public class Excelcheck 
{
	public static void main(String[] args) throws Exception
	{
		ExcelFileUtility obj=new ExcelFileUtility();
		obj.openExcelFile("E:\\Test-case-template-xls.xls");
		obj.openSheet("Test Case Template Example");
		System.out.println(obj.getRowsCount());
		System.out.println(obj.getColumnscount(0));
		System.out.println(obj.getCellValue(3,3));
		obj.createResultColumn(8);
		obj.setCellValue(3,4,"31-12-2022");
		obj.saveAndCloseExcel();
	}
}
