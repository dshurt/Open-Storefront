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

package edu.usu.sdl.opencatalog.web.action.test;

import edu.usu.sdl.opencatalog.api.model.jpa.Test;
import edu.usu.sdl.opencatalog.web.test.BaseTestCase;
import edu.usu.sdl.opencatalog.web.test.TestSuiteModel;
import java.util.List;
import net.sourceforge.stripes.action.HandlesEvent;
import net.sourceforge.stripes.action.Resolution;

/**
 *  Lookup Service Test
 * @author dshurtleff
 */
public class LookupServiceTest
	extends BaseTestAction
{
	
	@HandlesEvent("Find")
	public Resolution findTest()
	{
		TestSuiteModel testSuiteModel = new TestSuiteModel();
		testSuiteModel.setName("Lookup  Service Tests");
		
		testSuiteModel.getTests().add(new BaseTestCase(testServiceProxy())
		{
			@Override
			public String description()
			{
				return "Find Test";
			}

			@Override
			protected void runInternalTest()
			{
				results.append("Active").append("<br>");
				List<Test> testActiveRecords = testServiceProxy().findLookup(Test.class);
				testActiveRecords.stream().forEach(record -> {
					results.append(String.join("-", record.getCode(), record.getDescription())).append("<br>");
				});
				results.append("Check All").append("<br>");
				List<Test> testInActiveRecords = testServiceProxy().findLookup(Test.class, true);
				if (testInActiveRecords.size() == testActiveRecords.size())
				{
					failureReason.append("All return the same count and active.");
				}
				else
				{
					results.append("Pass").append("<br>");
					success = true;
				}
			}
		});
		
		testSuiteModel.runAllTests();		
		return sendReport(testSuiteModel);	
	}
	
}
