package edu.usu.sdl.opencatalog.web.test;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author dshurtleff
 */
public class TestSuiteModel
{
	private String name;
	private List<BaseTestCase> tests = new ArrayList<>();

	public String getName()
	{
		return name;
	}

	public String statString()
	{
		StringBuilder sb = new StringBuilder();
		int successCount = 0;
		for (BaseTestCase test : tests)
		{
			if (test.isSuccess())
			{
				successCount++;
			}
		}		
		sb.append("Total: ").append(tests.size()).append(" ");
		sb.append("Success: <span style='font-weight:bold;color: green'>").append(successCount).append("</span> ");
		sb.append("Fail: <span style='font-weight:bold;color: red'>").append(tests.size() - successCount).append("</span>  ");
				
		return sb.toString();
	}
	
	public void runAllTests()
	{
		for (BaseTestCase test : tests)
		{
			test.runTest();
		}
	}
	
	public void setName(String name)
	{
		this.name = name;
	}

	public List<BaseTestCase> getTests()
	{
		return tests;
	}

	public void setTests(List<BaseTestCase> tests)
	{
		this.tests = tests;
	}
		
}
