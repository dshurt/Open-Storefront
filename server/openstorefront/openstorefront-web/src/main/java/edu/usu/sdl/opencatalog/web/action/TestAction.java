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

package edu.usu.sdl.opencatalog.web.action;

import com.fasterxml.jackson.core.type.TypeReference;
import edu.usu.sdl.opencatalog.api.model.jpa.Test;
import edu.usu.sdl.opencatalog.web.tool.Asset;
import edu.usu.sdl.opencatalog.web.tool.AssetCategory;
import edu.usu.sdl.opencatalog.web.tool.OldAsset;
import edu.usu.sdl.opencatalog.web.viewmodel.LookupModel;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import net.sourceforge.stripes.action.DefaultHandler;
import net.sourceforge.stripes.action.HandlesEvent;
import net.sourceforge.stripes.action.Resolution;
import org.apache.commons.lang3.StringUtils;

/**
 *
 * @author dshurtleff
 */
public class TestAction
	extends BaseAction
{
	
	@DefaultHandler
	public Resolution checkSetup()
	{
		List<String> data = Arrays.asList("Hello", "Test", "Apple");
		data = data.stream().filter(item->item.startsWith("A")).collect(Collectors.toList());
		return streamResults(data);
	}
	
	@HandlesEvent("TestList")
	public Resolution testList()
	{
		List<LookupModel> lookups = new ArrayList<>();
				
		List<Test> test = service.findLookup(Test.class);
		test.forEach(t -> {
			LookupModel lookup = new LookupModel();
			lookup.setCode(t.getCode());
			lookup.setDescription(t.getDescription());			
			lookups.add(lookup);
		});
		return streamResults(lookups);
	}
	
	@HandlesEvent("ConvertData")
	public Resolution convertData() throws IOException
	{
		List<OldAsset> assets = objectMapper.readValue(new File("C:\\development\\storefront\\source\\old_data\\assets.json"), new TypeReference<List<OldAsset>>() {});
		
		List<Asset> newAssets = new ArrayList<>();
		assets.forEach(oldAsset -> {
			
			Asset asset = new Asset();
			
			asset.setId(oldAsset.getId());
			asset.setName(oldAsset.getTitle());
			asset.setDescription(oldAsset.getDescription());
			asset.setOwner(oldAsset.getOrganization());
			
			asset.setShortDescription(oldAsset.getDescription().substring(0, oldAsset.getDescription().indexOf(".")));
			asset.getStats().setAverageRating(oldAsset.getAvgRate());
			asset.getStats().setComments(oldAsset.getTotalComments());
			asset.getStats().setNumberRatings(oldAsset.getTotalVotes());
			
			Map<String, String> typeMap = new HashMap<>();
			typeMap.put("4", "WIDGET");
			typeMap.put("9", "APPS");			
			typeMap.put("10", "REFDOCS");
			typeMap.put("18", "SOFTLIB");
			
			String type = "TOOLS";
			String foundType = typeMap.get("" + oldAsset.getTypes().getId());
			if (StringUtils.isNotBlank(foundType))
			{
				type = foundType;
			}
			
			asset.setType(type);
			asset.setConformanceState(oldAsset.getState().getTitle());
			
			oldAsset.getCategories().forEach(cat ->{
				AssetCategory category = new AssetCategory();
				category.setDesc(cat.getTitle());				
				asset.getCategories().add(category);
			});			
			
			newAssets.add(asset);
		});
				
		return streamResults(newAssets);
	}
	
}
