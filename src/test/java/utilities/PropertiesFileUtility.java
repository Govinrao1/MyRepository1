package utilities;

import java.io.FileInputStream;
import java.util.Properties;

public class PropertiesFileUtility
{
	public static String getValueInPropertiesFile(String propertyname) throws Exception
	{
		//Every project is having only one "config.properties" file by default
		String pfpath=System.getProperty("user.dir")
									+"\\src\\test\\resources\\properties\\config.properties";
		FileInputStream fi=new FileInputStream(pfpath);
		Properties p=new Properties();
		p.load(fi);
		String value=p.getProperty(propertyname);
		fi.close();
		return(value);
	}
}











