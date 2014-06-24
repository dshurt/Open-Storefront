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

package edu.usu.sdl.openstorefront.web.rest.model;

import edu.usu.sdl.openstorefront.doc.ConsumeField;
import edu.usu.sdl.openstorefront.doc.ParamTypeDescription;
import java.util.Date;
import javax.validation.constraints.NotNull;

/**
 *
 * @author dshurtleff
 */
public class UserWatchView
{
	@NotNull
	@ParamTypeDescription("NUMBER")
	private long watchId;
	
	@NotNull
	@ParamTypeDescription("NUMBER")		
	private Date lastUpdateDts;
	
	@NotNull
	@ParamTypeDescription("NUMBER")
	private Date lastViewDts;
	
	@NotNull
	@ParamTypeDescription("NUMBER")			
	private Date createDts;
	
	@NotNull
	@ParamTypeDescription("TEXT")			
	private String componentName;
	
	@NotNull
	@ConsumeField
	@ParamTypeDescription("NUMBER")
	private long componentId;

	@NotNull
	@ConsumeField
	@ParamTypeDescription("BOOLEAN (true | false)")			
	private boolean notifyFlag;
	
	public UserWatchView()
	{
	}

	public long getWatchId()
	{
		return watchId;
	}

	public void setWatchId(long watchId)
	{
		this.watchId = watchId;
	}

	public Date getLastUpdateDts()
	{
		return lastUpdateDts;
	}

	public void setLastUpdateDts(Date lastUpdateDts)
	{
		this.lastUpdateDts = lastUpdateDts;
	}

	public Date getLastViewDts()
	{
		return lastViewDts;
	}

	public void setLastViewDts(Date lastViewDts)
	{
		this.lastViewDts = lastViewDts;
	}

	public Date getCreateDts()
	{
		return createDts;
	}

	public void setCreateDts(Date createDts)
	{
		this.createDts = createDts;
	}

	public String getComponentName()
	{
		return componentName;
	}

	public void setComponentName(String componentName)
	{
		this.componentName = componentName;
	}

	public long getComponentId()
	{
		return componentId;
	}

	public void setComponentId(long componentId)
	{
		this.componentId = componentId;
	}

	public boolean getNotifyFlag()
	{
		return notifyFlag;
	}

	public void setNotifyFlag(boolean notifyFlag)
	{
		this.notifyFlag = notifyFlag;
	}
	
}
