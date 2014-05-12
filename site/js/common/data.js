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
var MOCKDATA = {};

MOCKDATA.assets = {
  assets:[  
    {
      id: 1,
      guid: '88fg7-7776-FH',
      name: 'NetBeans',     
      description: 'NetBeans IDE is FREE, open source, and has a worldwide community of users and developers. ',
      owner: 'Oracle',
      type: 'TOOLS',
      stats: {
         averageRating: 3,
         numberRatings: 10,
         comments: 1,
         views: 10
      },
      primaryLicense: 'GPLV2w/ Excpetions',
      operationStatus: 'Released/Operational',
      categories: [   
        {
          code: 'SOFTLIB',
          desc: 'Software Libraries'
        },
        {
          code: 'DATAM',
          desc: 'Data Management'
        }       
      ],
      conformanceState: 'Level 3',
      releasedDate: '03/27/2013',
      postDate: '02/26/2014',        
      updateDate: '02/26/2014',
      features: [
        {
          code: 'MULITLANG',
          desc: 'Multiple Language Suppot '
        },
        {
          code: 'PROJECTM',
          desc: 'Project Management'
        },
        {
          code: 'CODEEDIT',
          desc: 'Smart Code Editing'
        },
        {
          code: 'MULTIPLATFORM',
          desc: 'Desktop, mobile and web applications'
        }        
      ],
      taxonomies: [
        {
          code: 'CONSRCH',
          arch: 'DI2E-Svc-V4',
          desc: '2.3.1.1 Content Search'
        },
        {
          code: 'WEBVIZ',
          arch: 'DI2E-Svc-V4',
          desc: '2.2.3 Web Visualization'         
        }
      ],
      postedBy: 'Net Beans',
      evaluated: true,
      tested: true,
      integrated: true,
      tags: [
        {
          code: 'IDE',
          desc: 'IDE'
        },
        {
          code: 'JAVA',
          desc: ' Java'
        },
        {
          code: 'TOOL',
          desc: 'Development Tool'
        },
        {
          code: 'APP',
          desc: ' Application'
        }        
      ],
      assetIcon: 'image/pastel/cog.png',
      metaData: [        
      ],
      componentOf: [
        {
          assetId: 3,
          name: 'IDE'
        }    
      ],
      subComponents: [
        {
          assetId: 5,
          name: 'NetBean RPC Platform'
        }
      ],      
      relatedAssets: [
        {
          assetId: 2,
          name: 'Eclipse IDE'          
        }
      ] 
    }
  ]  
};

MOCKDATA.resources = {
  
};

MOCKDATA.feedback = {
  
};

MOCKDATA.assetDetails = {
    details: [
      {
        name: 'Resource Type',
        value: 'Widget'                
      },
      {
        name: 'Metadata Date',
        value: 'Present'                
      },
      {
        name: 'Metadata Created Date',
        value: 'May 18, 2013'                
      },
      {
        name: 'Metadata Updated Date',
        value: 'Jan 16, 2014'                
      },
      {
        name: 'Reference Date(s)',
        value: '5 Minute'                
      },
      {
        name: 'Access Level',
        value: 'WWW, SIPR, JSWIC'                
      },
      {
        name: 'ITAR Export Approved',
        value: 'No'                
      },  
      {
        name: 'C&A',
        value: 'Avaliable',
        url: ''
      }         
    ]
};

MOCKDATA.conformanceDetails = {
  conformance: [
    {
      id: 1,
      assetId: 1,
      level: 1,
      name: "Evaluated",
      docUrl: '',
      icon: ''
    }
  ]
};

MOCKDATA.userProfile = {
  users: [
    {
      username: 'John.Tester',
      firstname: 'John',
      lastname: 'Tester',
      email: 'john.tester@test.com',
      type: 'Developer',
      createDate: ' 01/01/2014'      
    }
  ]
};

MOCKDATA.userWatches = {
    watches: [
      {
        username: 'John.Tester',
        assetId: 1,
        assetUpdateDate: '03/01/2014',
        lastViewDate: '02/25/2014'
      },
      {
        username: 'John.Tester',
        assetId: 2,
        assetUpdateDate: '02/01/2014',
        lastViewDate: '02/02/2014'
      },
      {
        username: 'John.Tester',
        assetId: 3,
        assetUpdateDate: '07/01/2013',
        lastViewDate: '01/1/2014'
      }      
    ]
};




