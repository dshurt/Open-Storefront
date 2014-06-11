package edu.usu.sdl.openstorefront.web.action.test;

import edu.usu.sdl.openstorefront.service.api.OpenStorefrontService;
import edu.usu.sdl.openstorefront.util.ServiceProxy;
import edu.usu.sdl.openstorefront.web.action.BaseAction;
import edu.usu.sdl.openstorefront.web.test.BaseTestCase;
import edu.usu.sdl.openstorefront.web.test.TestSuiteModel;
import net.sourceforge.stripes.action.Resolution;
import net.sourceforge.stripes.action.StreamingResolution;


/**
 * This base class of Service Container tests
 * @author dshurtleff
 */
public abstract class BaseTestAction
	extends BaseAction
{
	private boolean summary;
	private boolean useRest;
	private String user;
		
	protected OpenStorefrontService testServiceProxy()
	{
		return ServiceProxy.getServiceProxy();
	}
		
	protected Resolution sendReport (TestSuiteModel testSuiteModel)
	{
		StringBuilder output = new StringBuilder();
		if  (summary)
		{
			for (BaseTestCase test : testSuiteModel.getTests())
			{
				String passed = "<span style='color: green'> PASSED </span>";
				if (test.isSuccess() == false)
				{
					passed = "<span style='color: red'> FAILED </span>";
				}
				
				output.append("Test: <b>").append(test.description()).append("</b>...").append(passed).append(" <br>");
			}			
		}
		else
		{		
			output.append("<h2>").append(testSuiteModel.getName()).append("</h2>");
			output.append("<hr>");

			for (BaseTestCase test : testSuiteModel.getTests())
			{
				if (test.isSuccess())
				{
					output.append("<img src='../images/icon/accept.png' /> ");
				}
				else
				{
					output.append("<img src='../images/icon/cross.png' /> ");
				}
				output.append("Test: <b>").append(test.description()).append("</b><br>");

				//results or failure
				output.append("<div style='font-size: 9px; color: grey; border: 1px solid grey;'>Output: <br><br>");
				if (test.isSuccess())
				{
					output.append(test.getResults());
				}
				else
				{
					output.append(test.getFailureReason());
				}			
				output.append("</div>").append("<br>");
			}

			output.append("<br><br>").append(testSuiteModel.statString()).append("<br>");		
			output.append("<hr>");
		}
		
		return new StreamingResolution("text/html", output.toString());
	}

	public boolean getSummary()
	{
		return summary;
	}

	public void setSummary(boolean summary)
	{
		this.summary = summary;
	}

	public boolean isUseRest()
	{
		return useRest;
	}

	public void setUseRest(boolean useRest)
	{
		this.useRest = useRest;
	}

	public String getUser()
	{
		return user;
	}

	public void setUser(String user)
	{
		this.user = user;
	}
	
}
