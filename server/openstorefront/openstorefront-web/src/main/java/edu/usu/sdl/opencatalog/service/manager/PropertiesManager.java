/*
 * Copyright 2014 Space Dynamics Laboratory - Utah State University Research Foundation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package edu.usu.sdl.opencatalog.service.manager;

import edu.usu.sdl.opencatalog.exception.OpenCatalogRuntimeException;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.Properties;
import java.util.concurrent.locks.ReentrantLock;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *  Provide single access to system properties 
 * @author dshurtleff
 */
public class PropertiesManager
{
	private static final Logger log = Logger.getLogger(PropertiesManager.class.getName());
	
	public static final String KEY_USE_REST_PROXY = "service.rest.proxy";
	
	private static Properties properties;
	private static final String PROPERTIES_FILENAME = System.getProperty("opencatalog.properties.file", System.getProperty("jboss.server.config.dir") + "/opencatalog.properties");
	
	public static String getValue(String key)
	{
		return getProperties().getProperty(key);
	}
	
	public static String getValue(String key, String defaultValue)
	{
		return getProperties().getProperty(key, defaultValue);
	}
	
	public static void setProperty(String key, String value)
	{
		getProperties().setProperty(value, value);
		saveProperties();
	}
	
	private static Properties getProperties()
	{
		if (properties == null)
		{
			loadProperties();
		}
		return properties;
	}
	
	private static void loadProperties()
	{
		ReentrantLock lock = new ReentrantLock();
		lock.lock();		
		try
		{
			if (Paths.get(PROPERTIES_FILENAME).toFile().createNewFile())
			{
				log.log(Level.WARNING, "Open Catalog properties file was missing from location a new file was created.  Location: {0}", PROPERTIES_FILENAME);
			}
			try (BufferedInputStream bin = new BufferedInputStream(new FileInputStream(PROPERTIES_FILENAME)))
			{
				properties = new Properties();
				properties.load(bin);
			}
			catch (IOException e)
			{
				throw new OpenCatalogRuntimeException(e);
			}
		}
		catch (IOException e)
		{
			throw new OpenCatalogRuntimeException(e);
		}		
		finally
		{
			lock.unlock();
		}
	}
	
	private static void saveProperties()
	{
		ReentrantLock lock = new ReentrantLock();
		lock.lock();		
		try (BufferedOutputStream bout = new BufferedOutputStream(new FileOutputStream(PROPERTIES_FILENAME)))
		{
			properties.store(bout, "Opencatalog Properties");
		}
		catch (IOException e)
		{
			throw new OpenCatalogRuntimeException(e);
		}
		finally
		{
			lock.unlock();
		}
	}
	
}
