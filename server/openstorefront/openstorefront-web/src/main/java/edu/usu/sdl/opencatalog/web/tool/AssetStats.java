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

import java.math.BigDecimal;

/**
 *
 * @author dshurtleff
 */
public class AssetStats
{
	private BigDecimal averageRating;
	private int numberRatings;
	private int comments;
	private int views;

	public AssetStats()
	{
	}

	public BigDecimal getAverageRating()
	{
		return averageRating;
	}

	public void setAverageRating(BigDecimal averageRating)
	{
		this.averageRating = averageRating;
	}

	public int getNumberRatings()
	{
		return numberRatings;
	}

	public void setNumberRatings(int numberRatings)
	{
		this.numberRatings = numberRatings;
	}

	public int getComments()
	{
		return comments;
	}

	public void setComments(int comments)
	{
		this.comments = comments;
	}

	public int getViews()
	{
		return views;
	}

	public void setViews(int views)
	{
		this.views = views;
	}
	
	
	
	
}
