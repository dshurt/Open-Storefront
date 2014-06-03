package edu.usu.sdl.opencatalog.web.test;

import edu.usu.sdl.opencatalog.api.OpenCatalogService;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Test 
 * @author dshurtleff
 */
public abstract class BaseTestCase
{
	private static final Logger log = Logger.getLogger(BaseTestCase.class.getName());

	protected boolean success;
	protected StringBuilder failureReason = new StringBuilder();
	protected StringBuilder results = new StringBuilder();
	protected final OpenCatalogService service;

	public BaseTestCase(OpenCatalogService service)
	{
		this.service = service;
	}
		
	public abstract String description();	
	
	public void runTest(){
		try
		{
			runInternalTest();
			if (failureReason.length() == 0)
			{
				success = true;
			}
		}
		catch (Exception e)
		{
			log.log(Level.SEVERE, "Test " + description() +" Fail Trace: ",e);
			failureReason.append(e);
		}
	}
	protected abstract void runInternalTest();
	
	public boolean isSuccess()
	{
		return success;
	}

	public void setSuccess(boolean success)
	{
		this.success = success;
	}

	public StringBuilder getFailureReason()
	{
		return failureReason;
	}

	public void setFailureReason(StringBuilder failureReason)
	{
		this.failureReason = failureReason;
	}

	public StringBuilder getResults()
	{
		return results;
	}

	public void setResults(StringBuilder results)
	{
		this.results = results;
	}
	
}
