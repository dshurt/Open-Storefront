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

package edu.usu.sdl.opencatalog.web.tool;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 *
 * @author dshurtleff
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class OldAsset
	implements Serializable
{
	private long id;
	private int totalComments;
	private OldAssetState state;
	private String author;
	private BigDecimal avgRate;
	private String organization;
	private String title;
	private Date releaseDate;
	private String description;
	private int totalVotes;
	private String approvalStatus;
	private OldAssetType types;
	private List<OldAssetMetaData> customFields = new ArrayList<>();
	private List<OldAssetCategory> categories = new ArrayList<>();
	private String uuid;
	
	public OldAsset()
	{
	}

	public long getId()
	{
		return id;
	}

	public void setId(long id)
	{
		this.id = id;
	}

	public int getTotalComments()
	{
		return totalComments;
	}

	public void setTotalComments(int totalComments)
	{
		this.totalComments = totalComments;
	}

	public OldAssetState getState()
	{
		return state;
	}

	public void setState(OldAssetState state)
	{
		this.state = state;
	}

	public String getAuthor()
	{
		return author;
	}

	public void setAuthor(String author)
	{
		this.author = author;
	}

	public BigDecimal getAvgRate()
	{
		return avgRate;
	}

	public void setAvgRate(BigDecimal avgRate)
	{
		this.avgRate = avgRate;
	}

	public String getOrganization()
	{
		return organization;
	}

	public void setOrganization(String organization)
	{
		this.organization = organization;
	}

	public String getTitle()
	{
		return title;
	}

	public void setTitle(String title)
	{
		this.title = title;
	}

	public Date getReleaseDate()
	{
		return releaseDate;
	}

	public void setReleaseDate(Date releaseDate)
	{
		this.releaseDate = releaseDate;
	}

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public int getTotalVotes()
	{
		return totalVotes;
	}

	public void setTotalVotes(int totalVotes)
	{
		this.totalVotes = totalVotes;
	}

	public String getApprovalStatus()
	{
		return approvalStatus;
	}

	public void setApprovalStatus(String approvalStatus)
	{
		this.approvalStatus = approvalStatus;
	}

	public OldAssetType getTypes()
	{
		return types;
	}

	public void setTypes(OldAssetType types)
	{
		this.types = types;
	}

	public List<OldAssetMetaData> getCustomFields()
	{
		return customFields;
	}

	public void setCustomFields(List<OldAssetMetaData> customFields)
	{
		this.customFields = customFields;
	}

	public List<OldAssetCategory> getCategories()
	{
		return categories;
	}

	public void setCategories(List<OldAssetCategory> categories)
	{
		this.categories = categories;
	}

	public String getUuid()
	{
		return uuid;
	}

	public void setUuid(String uuid)
	{
		this.uuid = uuid;
	}
	
	
	
	
	
}
