package utilities;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;

public class TextFileUtility
{
	public static int getCountOfLinesInTextFile(String filepath) throws Exception
	{
		//Access existing text file or CSV file, which consists of test data
		File f=new File(filepath);
		FileReader fr=new FileReader(f);
		BufferedReader br=new BufferedReader(fr);
		int count=0;
		while(br.readLine()!=null)
		{
			count++;
		}
		br.close();
		fr.close();
		return(count);
	}
	//There is a chance of multiple text files with test data in a project
	public static String[] getValueInTextFile(String filepath,int linenumber) throws Exception
	{
		//Access existing text file or CSV file, which consists of test data
		File f=new File(filepath);
		FileReader fr=new FileReader(f);
		BufferedReader br=new BufferedReader(fr);
		//move up to a line which is the before line for required in sequential text file 
		for(int i=1;i<linenumber;i++)
		{
			br.readLine();
		}
		//Read required line
		String temp=br.readLine();
		String output[]=temp.split(",");
		br.close();
		fr.close();
		return(output);
	}
}











