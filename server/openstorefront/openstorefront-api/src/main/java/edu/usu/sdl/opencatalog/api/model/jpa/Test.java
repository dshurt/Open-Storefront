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
package edu.usu.sdl.opencatalog.api.model.jpa;

import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Cacheable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author dshurtleff
 */
@Cacheable
@Entity
@Table(name = "test", catalog = "opencat", schema = "")
@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class Test
	extends LookupEntity
{

	private static final long serialVersionUID = 1L;
	
	@Id
	@Basic(optional = false)
	@NotNull
	@Size(min = 1, max = 20)
	@Column(name = "code", nullable = false, length = 20)
	private String code;
	
	@Basic(optional = false)
	@NotNull
	@Size(min = 1, max = 255)
	@Column(name = "description", nullable = false, length = 255)
	private String description;

	@Basic(optional = false)
	@NotNull
	@Column(name = "active_status", nullable = false)
	protected String activeStatus;
	
	@Basic(optional = false)
	@NotNull
	@Size(min = 1, max = 80)
	@Column(name = "create_user", nullable = false, length = 80)
	protected String createUser;
	
	@Basic(optional = false)
	@NotNull
	@Column(name = "create_dts", nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	protected Date createDts;
	
	@Basic(optional = false)
	@NotNull
	@Size(min = 1, max = 80)
	@Column(name = "update_user", nullable = false, length = 80)
	protected String updateUser;
	
	@Basic(optional = false)
	@NotNull
	@Column(name = "update_dts", nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	protected Date updateDts;	
	
	public Test()
	{
	}

	@Override
	public String getCode()
	{
		return code;
	}

	public void setCode(String code)
	{
		this.code = code;
	}

	@Override
	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}
	
	public String getActiveStatus()
	{
		return activeStatus;
	}

	@Override
	public void setActiveStatus(String activeStatus)
	{
		this.activeStatus = activeStatus;
	}

	public String getCreateUser()
	{
		return createUser;
	}

	public void setCreateUser(String createUser)
	{
		this.createUser = createUser;
	}

	public Date getCreateDts()
	{
		return createDts;
	}

	public void setCreateDts(Date createDts)
	{
		this.createDts = createDts;
	}

	public String getUpdateUser()
	{
		return updateUser;
	}

	public void setUpdateUser(String updateUser)
	{
		this.updateUser = updateUser;
	}

	public Date getUpdateDts()
	{
		return updateDts;
	}

	public void setUpdateDts(Date updateDts)
	{
		this.updateDts = updateDts;
	}	
	
	@Override
	public int hashCode()
	{
		int hash = 0;
		hash += (code != null ? code.hashCode() : 0);
		return hash;
	}

	@Override
	public boolean equals(Object object)
	{
		// TODO: Warning - this method won't work in the case the id fields are not set
		if (!(object instanceof Test))
		{
			return false;
		}
		Test other = (Test) object;
		if ((this.code == null && other.code != null) || (this.code != null && !this.code.equals(other.code)))
		{
			return false;
		}
		return true;
	}

	@Override
	public String toString()
	{
		return "edu.usu.sdl.opencatalog.api.model.jpa.Test[ code=" + code + " ]";
	}

}
