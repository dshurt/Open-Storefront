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

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 *
 * @author dshurtleff
 */
public class Asset
{
	private long id;
	private String guid;
	private String name;
	private String shortDescription;
	private String description;
	private String owner;
	private String type;
	private AssetStats stats = new AssetStats();
	private String primaryLicense;
	private String operationStatus;
	private List<AssetCategory> categories = new ArrayList<>();
	private String conformanceState;
	private Date releaseDate;
	private Date postDate;
	private Date updateDate;
	private List<AssetFeature> features = new ArrayList<>();
	private List<AssetTaxonomy> taxonomies = new ArrayList<>();
	private String postedBy;
	private boolean evaluated;
	private boolean tested;
	private boolean integrated;
	private List<AssetTag> assetTags = new ArrayList<>();
	private String assetIcon;
	private List<AssetComponent>  componentOf = new ArrayList<>();
	private List<AssetComponent>  subComponents = new ArrayList<>();
	private List<AssetComponent>  relatedAssets = new ArrayList<>();

	public Asset()
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

	public String getGuid()
	{
		return guid;
	}

	public void setGuid(String guid)
	{
		this.guid = guid;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getShortDescription()
	{
		return shortDescription;
	}

	public void setShortDescription(String shortDescription)
	{
		this.shortDescription = shortDescription;
	}

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public AssetStats getStats()
	{
		return stats;
	}

	public void setStats(AssetStats stats)
	{
		this.stats = stats;
	}

	public String getPrimaryLicense()
	{
		return primaryLicense;
	}

	public void setPrimaryLicense(String primaryLicense)
	{
		this.primaryLicense = primaryLicense;
	}

	public String getOperationStatus()
	{
		return operationStatus;
	}

	public void setOperationStatus(String operationStatus)
	{
		this.operationStatus = operationStatus;
	}

	public List<AssetCategory> getCategories()
	{
		return categories;
	}

	public void setCategories(List<AssetCategory> categories)
	{
		this.categories = categories;
	}

	public String getConformanceState()
	{
		return conformanceState;
	}

	public void setConformanceState(String conformanceState)
	{
		this.conformanceState = conformanceState;
	}

	public Date getReleaseDate()
	{
		return releaseDate;
	}

	public void setReleaseDate(Date releaseDate)
	{
		this.releaseDate = releaseDate;
	}

	public Date getPostDate()
	{
		return postDate;
	}

	public void setPostDate(Date postDate)
	{
		this.postDate = postDate;
	}

	public Date getUpdateDate()
	{
		return updateDate;
	}

	public void setUpdateDate(Date updateDate)
	{
		this.updateDate = updateDate;
	}

	public List<AssetFeature> getFeatures()
	{
		return features;
	}

	public void setFeatures(List<AssetFeature> features)
	{
		this.features = features;
	}

	public List<AssetTaxonomy> getTaxonomies()
	{
		return taxonomies;
	}

	public void setTaxonomies(List<AssetTaxonomy> taxonomies)
	{
		this.taxonomies = taxonomies;
	}

	public String getPostedBy()
	{
		return postedBy;
	}

	public void setPostedBy(String postedBy)
	{
		this.postedBy = postedBy;
	}

	public boolean isEvaluated()
	{
		return evaluated;
	}

	public void setEvaluated(boolean evaluated)
	{
		this.evaluated = evaluated;
	}

	public boolean isTested()
	{
		return tested;
	}

	public void setTested(boolean tested)
	{
		this.tested = tested;
	}

	public boolean isIntegrated()
	{
		return integrated;
	}

	public void setIntegrated(boolean integrated)
	{
		this.integrated = integrated;
	}

	public List<AssetTag> getAssetTags()
	{
		return assetTags;
	}

	public void setAssetTags(List<AssetTag> assetTags)
	{
		this.assetTags = assetTags;
	}

	public String getAssetIcon()
	{
		return assetIcon;
	}

	public void setAssetIcon(String assetIcon)
	{
		this.assetIcon = assetIcon;
	}

	public List<AssetComponent> getComponentOf()
	{
		return componentOf;
	}

	public void setComponentOf(List<AssetComponent> componentOf)
	{
		this.componentOf = componentOf;
	}

	public List<AssetComponent> getSubComponents()
	{
		return subComponents;
	}

	public void setSubComponents(List<AssetComponent> subComponents)
	{
		this.subComponents = subComponents;
	}

	public List<AssetComponent> getRelatedAssets()
	{
		return relatedAssets;
	}

	public void setRelatedAssets(List<AssetComponent> relatedAssets)
	{
		this.relatedAssets = relatedAssets;
	}

	public String getOwner()
	{
		return owner;
	}

	public void setOwner(String owner)
	{
		this.owner = owner;
	}
	
	
	
}
