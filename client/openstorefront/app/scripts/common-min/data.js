/* 
* Copyright 2014 Space Dynamics Laboratory - Utah State University Research Foundation.
*
* Licensed under the Apache License, Version 2.0 (the 'License');
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an 'AS IS' BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* jshint indent:false */


var MOCKDATA = {};
MOCKDATA.resources = {

};

MOCKDATA.feedback = {

};
MOCKDATA.componentState = [
   //
  {
    'id': 1,
    'state':'ssss',
    'desc':'DI2E Candidate'
  }
   //  
  ];
MOCKDATA.externalDepend = [
  //
  {
    'name': 'WebLogic server',
    'desc':'Optional deployment container'
  },
  {
    'name': 'JBoss 7.1',
    'desc':'Optional deployment container'
  },
  {
    'name': 'Tomcat',
    'desc':'Optional deployment container'
  },
  {
    'name': 'JOGL',
    'desc':'Supplied within JView source code'
  }
  //  
  ];
MOCKDATA.pointsContact = [
   //
  {
    'position': 'Program POC',
    'name': 'Jason Kahn',
    'email': 'jason.m.kahn@intelink.gov'
  },
  {
    'position': 'Technical POC',
    'name': 'Ian Nelson',
    'email': 'ian.l.nelson@intelink.gov'
  },
  {
    'position': 'DI2E Asset Coordinator',
    'name': 'Kimberly Holladay',
    'email': 'Kimberly.Holladay@volant-associates.com'
  }
   //
  ];
MOCKDATA.componentEvalProgressBar = [
  //
  {
    'class1': 'barborder',
    'type': 'success',
    'level': '0',
    'currvalue': 27.2737
  },
  {
    'class1': 'barborder',
    'type': 'success',
    'level': '1',
    'currvalue': 36.3636
  },
  {
    'class1': 'barborder',
    'type': 'info',
    'level': '2',
    'currvalue': 9.0909
  },
  {
    'class1': 'bar-transparent',
    'type': 'success',
    'level': '3',
    'currvalue': 27.2727
  }
  //
  ];
MOCKDATA.componentEvalProgressBarDates = [
  //
  {
    'class1': 'barborder2',
    'type': 'success',
    'timedays': 27.2737,
    'currdate': '6/1'
  },
  {
    'class1': 'barborder2',
    'type': 'success',
    'timedays': 36.3636,
    'currdate': '6/15'
  },
  {
    'class1': 'barborder2',
    'type': 'info',
    'timedays': 9.0909,
    'currdate': '7/1'
  },
  {
    'class1': 'bar-transparentdate',
    'type': 'success',
    'timedays': 27.2727,
    'currdate': '8/1'
  }
  //
  ];
MOCKDATA.componentSummary = [
  //
  {
    'versions': '1.7.1',
    'evaluationdate': '3/14/2014',
    'componenttype': 'Redeployed Capability, API/Library',
    'agency': 'AFRL JView Team',
    'di2emarketplace': 'https://storefront.di2e.net/marketplace/serviceItem/show/24'
  }
  //
  ];
MOCKDATA.componentVitals = [
  //
  {
    'name': 'SupportedOS',
    'desc': 'Same as Java 1.5+'
  },
  {
    'name': 'VM Support',
    'desc': 'yes'
  },
  {
    'name': 'License',
    'desc': 'JView license (CAC Card Required)'
  },
  {
    'name': 'SvcV-4 Alignment',
    'desc': '2.2.1.2 Widget Framework'
  },
  {
    'name': 'JCA Alignment',
    'desc': '6.2.3.8 Enterprise Application Software'
  },
  {
    'name': 'JCSFL Alignment',
    'desc': '8.9.5 Integrate Enterprise Applications'
  }
  //
  ];
MOCKDATA.localAssetArtifacts = [
  //
  {
    'name': 'Home page',
    'desc':'https://extranet.rl.af.mil/jview/'
  },
  {
    'name': 'Wiki',
    'desc':'https://software.forge.mil/sf/wiki/do/viewPage/projects.jview/wiki/HomePage'
  },
  {
    'name': 'Binaries',
    'desc':'You must build this from the source code'
  },
  {
    'name': 'Source',
    'desc':'https://software.forge.mil/sf/go/proj1195'
  },
  {
    'name': 'Issue Tracking',
    'desc':'https://software.forge.mil/sf/go/proj1195'
  },
  {
    'name': 'Documentation',
    'desc':'See full evaluation report'
  },
  {
    'name': 'Training',
    'desc':'none'}
  //
  ];
MOCKDATA.scoreTable = [
  //
  {
    'name': 'Discoverable',
    'ranking': 2,
    'icon': 'whatever'
  },
  {
    'name': 'Accessible',
    'ranking': 2,
    'icon': 'whatever'
  },
  {
    'name': 'Documentation',
    'ranking': 3,
    'icon': 'whatever'
  },
  {
    'name': 'Deployable',
    'ranking': 4,
    'icon': 'whatever'
  },
  {
    'name': 'Usable',
    'ranking': 5,
    'icon': 'whatever'
  },
  {
    'name': 'Error Handling',
    'ranking': 2,
    'icon': 'whatever'
  },
  {
    'name': 'Integrable',
    'ranking': 4,
    'icon': 'whatever'
  },
  {
    'name': 'I/O Validation',
    'ranking': 2,
    'icon': 'whatever'
  },
  {
    'name': 'Testing',
    'ranking': 2,
    'icon': 'whatever'
  },
  {
    'name': 'Monitoring',
    'ranking': 1,
    'icon': 'whatever'
  },
  {
    'name': 'Performance',
    'ranking': 3,
    'icon': 'whatever'
  },
  {
    'name': 'Scalability',
    'ranking': 2,
    'icon': 'whatever'
  },
  {
    'name': 'Security',
    'ranking': 3,
    'icon': 'whatever'
  },
  {
    'name': 'Maintainability / Upgradability',
    'ranking': 2,
    'icon': 'whatever'
  },
  {
    'name': 'Community and Outreach',
    'ranking': 1,
    'icon': 'whatever'
  },
  {
    'name': 'Change Management',
    'ranking': 2,
    'icon': 'whatever'
  },
  {
    'name': 'CA',
    'ranking': 1,
    'icon': 'whatever'
  },
  {
    'name': 'Licensing',
    'ranking': 2,
    'icon': 'whatever'
  },
  {
    'name': 'Roadmap',
    'ranking': 1,
    'icon': 'whatever'
  },
  {
    'name': 'Willingness',
    'ranking': 2,
    'icon': 'whatever'
  },
  {
    'name': 'Architecture Alignment',
    'ranking': 3,
    'icon': 'whatever'
  }
  //  
  ];
MOCKDATA.tagsList = [
  //
  'Application',
  'Data Transformation',
  'Data Validation',
  'Development Tool',
  'Enterprise Services',
  'IDE',
  'Image Search',
  'Image Mapping',
  'Java',
  'Planning and Direction',
  'Reference Document',
  'Reference Documentation',
  'Software Libraries',
  'Software Library',
  'Visualization',
  'Widget',
  'Widgets',
  '#architecture',
  '#developement',
  '#maps',
  '#pluggable',
  '#trending',
  '#webdesign'
//
];

MOCKDATA.hotTopics = {
  //
  'list': []
//
};

MOCKDATA.prosConsList = {
  'pros':[
    //
    'Well tested',
    'Active Development',
    'Reliable',
    'Open Source',
    'Compact',
    'Well Tested'
  //
  ],
  'cons':[
    //
    'Poorly Tested',
    'Security Concerns',
    'Difficult Installation',
    'Poor Documentation',
    'Bulky',
    'Legacy system'
  //
  ]
};

MOCKDATA.watches = [
{
  'id': 72,
  'watched': true
},
{
  'id': 1,
  'watched': true
},
{
  'id': 45,
  'watched': true
},
{
  'id': 99,
  'watched': false
},
{
  'id': 66,
  'watched': true
},
{
  'id': 52,
  'watched': true
},
{
  'id': 4,
  'watched': true
}
];

MOCKDATA.filters = [];

MOCKDATA.filters.push({
  'name': 'Types',
  'key': 'type',
  'src': 'images/icon/pastel/application-double.png',
  'icon': 'fa fa-files-o',
  'collection': [
  {
    'code': 'APPS',
    'type': 'Applications',
    'desc': 'Redeployable, Middleware',
    'longDesc': 'Redeployable, Middleware. This is the landing page for Applications. <br/><br/> We have extended this description in order to test this modal. Descriptions can be many different lengths. Here we are trying to test how well content is handled when it is over a few sentances. <br/><br/> Now we will provide you with some filler text: Lorem ipsum dolor sit amet, vis no officiis voluptatibus, nusquam appareat accusata cu has. Usu cu ceteros vivendo fabellas, nec cu oporteat salutatus constituam, at habeo vivendo efficiendi per. Ut cum suas dissentiunt. Omnis diceret nonumes ea eum.',
    'checked': false
  },
  {
    'code': 'ENTERPRISE',
    'type': 'Enterprise Services',
    'desc': 'Soap, REST, ...',
    'longDesc': 'Soap, REST, .... This is the landing page for Enterprise Services. <br/><br/> We have extended this description in order to test this modal. Descriptions can be many different lengths. Here we are trying to test how well content is handled when it is over a few sentances. <br/><br/> Now we will provide you with some filler text: Lorem ipsum dolor sit amet, vis no officiis voluptatibus, nusquam appareat accusata cu has. Usu cu ceteros vivendo fabellas, nec cu oporteat salutatus constituam, at habeo vivendo efficiendi per. Ut cum suas dissentiunt. Omnis diceret nonumes ea eum.',
    'checked': false
  },
  {
    'code': 'REFDOCS',
    'type': 'Reference Documents',
    'desc': 'Standards, Specifications, and APIs',
    'longDesc': 'Standards, Specifications, and APIs. This is the landing page for Reference Documents. <br/><br/> We have extended this description in order to test this modal. Descriptions can be many different lengths. Here we are trying to test how well content is handled when it is over a few sentances. <br/><br/> Now we will provide you with some filler text: Lorem ipsum dolor sit amet, vis no officiis voluptatibus, nusquam appareat accusata cu has. Usu cu ceteros vivendo fabellas, nec cu oporteat salutatus constituam, at habeo vivendo efficiendi per. Ut cum suas dissentiunt. Omnis diceret nonumes ea eum.',
    'checked': false
  },
  {
    'code': 'SOFTLIB',
    'type': 'Software Libraries',
    'desc': 'javascript, java, .net, python',
    'longDesc': 'javascript, java, .net, python. This is the landing page for Software Libraries. <br/><br/> We have extended this description in order to test this modal. Descriptions can be many different lengths. Here we are trying to test how well content is handled when it is over a few sentances. <br/><br/> Now we will provide you with some filler text: Lorem ipsum dolor sit amet, vis no officiis voluptatibus, nusquam appareat accusata cu has. Usu cu ceteros vivendo fabellas, nec cu oporteat salutatus constituam, at habeo vivendo efficiendi per. Ut cum suas dissentiunt. Omnis diceret nonumes ea eum.',
    'checked': false
  },
  {
    'code': 'TOOLS',
    'type': 'Tools',
    'desc': 'Test scripts, Development Tools',
    'longDesc': 'Test scripts, Development Tools. This is the landing page for Tools. <br/><br/> We have extended this description in order to test this modal. Descriptions can be many different lengths. Here we are trying to test how well content is handled when it is over a few sentances. <br/><br/> Now we will provide you with some filler text: Lorem ipsum dolor sit amet, vis no officiis voluptatibus, nusquam appareat accusata cu has. Usu cu ceteros vivendo fabellas, nec cu oporteat salutatus constituam, at habeo vivendo efficiendi per. Ut cum suas dissentiunt. Omnis diceret nonumes ea eum.',
    'checked': false
  },
  {
    'code': 'WIDGET',
    'type': 'Widgets',
    'desc': 'Ozone widgets',
    'longDesc': 'Ozone widgets. This is the landing page for Widgets. <br/><br/> We have extended this description in order to test this modal. Descriptions can be many different lengths. Here we are trying to test how well content is handled when it is over a few sentances. <br/><br/> Now we will provide you with some filler text: Lorem ipsum dolor sit amet, vis no officiis voluptatibus, nusquam appareat accusata cu has. Usu cu ceteros vivendo fabellas, nec cu oporteat salutatus constituam, at habeo vivendo efficiendi per. Ut cum suas dissentiunt. Omnis diceret nonumes ea eum.',
    'checked': false
  }
  ]
});

MOCKDATA.filters.push({
  'name': 'Categories',
  'key': 'categories',
  'src': 'images/icon/pastel/table-multiple.png',
  'icon': 'fa fa-list-alt',
  'collection': [
  {
    'code': 'VISUAL',
    'type': 'Visualization',
    'desc': 'Presentation, Interactivity',
    'longDesc': 'Data visualization is not only a way to present your data, but a way to explore and understand your data.. This is the landing page for Visualization. <br/><br/> We have extended this description in order to test this modal. Descriptions can be many different lengths. Here we are trying to test how well content is handled when it is over a few sentances. <br/><br/> Now we will provide you with some filler text: Lorem ipsum dolor sit amet, vis no officiis voluptatibus, nusquam appareat accusata cu has. Usu cu ceteros vivendo fabellas, nec cu oporteat salutatus constituam, at habeo vivendo efficiendi per. Ut cum suas dissentiunt. Omnis diceret nonumes ea eum.',
    'checked': false
  },
  {
    'code': 'IDAM',
    'type': 'idAM',
    'desc': 'Identity and Access Management (IdAM) Development and Sustainment Support',
    'longDesc': 'Identity and Access Management (IdAM) Development and Sustainment Support <br/><br/> We have extended this description in order to test this modal. Descriptions can be many different lengths. Here we are trying to test how well content is handled when it is over a few sentances. <br/><br/> Now we will provide you with some filler text: Lorem ipsum dolor sit amet, vis no officiis voluptatibus, nusquam appareat accusata cu has. Usu cu ceteros vivendo fabellas, nec cu oporteat salutatus constituam, at habeo vivendo efficiendi per. Ut cum suas dissentiunt. Omnis diceret nonumes ea eum.',
    'checked': false,
    'landing': 'views/temp/landingpage.html'
  },
  {
    'code': 'DATAM',
    'type': 'Data Management',
    'desc': 'Software management, Relational, Object Oriented',
    'longDesc': 'Software, typically proprietary products or open-source projects, with a primary purpose of data management. Database management system software could be considered a related category, though those will typically exist for the purpose of managing a database in a particular structure (i.e. relational, object-oriented). This is the landing page for Data Management. <br/><br/> We have extended this description in order to test this modal. Descriptions can be many different lengths. Here we are trying to test how well content is handled when it is over a few sentances. <br/><br/> Now we will provide you with some filler text: Lorem ipsum dolor sit amet, vis no officiis voluptatibus, nusquam appareat accusata cu has. Usu cu ceteros vivendo fabellas, nec cu oporteat salutatus constituam, at habeo vivendo efficiendi per. Ut cum suas dissentiunt. Omnis diceret nonumes ea eum.',
    'checked': false
  },
  {
    'code': 'COLLECT',
    'type': 'Collection',
    'desc': 'Software Collections',
    'longDesc': 'Open Sourced, GOS, Etc... This is the landing page for Collaboration. <br/><br/> We have extended this description in order to test this modal. Descriptions can be many different lengths. Here we are trying to test how well content is handled when it is over a few sentances. <br/><br/> Now we will provide you with some filler text: Lorem ipsum dolor sit amet, vis no officiis voluptatibus, nusquam appareat accusata cu has. Usu cu ceteros vivendo fabellas, nec cu oporteat salutatus constituam, at habeo vivendo efficiendi per. Ut cum suas dissentiunt. Omnis diceret nonumes ea eum.',
    'checked': false
  },
  {
    'code': 'COLLAB',
    'type': 'Collaboration',
    'desc': 'Computer Supported Cooperative Works',
    'longDesc': 'Collaborative software or groupware is an application software designed to help people involved in a common task to achieve goals. One of the earliest definitions of collaborative software is intentional group processes plus software to support them. This is the landing page for Collection. <br/><br/> We have extended this description in order to test this modal. Descriptions can be many different lengths. Here we are trying to test how well content is handled when it is over a few sentances. <br/><br/> Now we will provide you with some filler text: Lorem ipsum dolor sit amet, vis no officiis voluptatibus, nusquam appareat accusata cu has. Usu cu ceteros vivendo fabellas, nec cu oporteat salutatus constituam, at habeo vivendo efficiendi per. Ut cum suas dissentiunt. Omnis diceret nonumes ea eum.',
    'checked': false
  },
  {
    'code': 'SECM',
    'type': 'Security Management',
    'desc': 'Incident Management, Computer-aided security',
    'longDesc': 'Specific software and hardware solutions for incident management, guard tour, guard scheduling, computer-aided dispatch, electronic post orders and trend reporting/analysis. This is the landing page for Security Management. <br/><br/> We have extended this description in order to test this modal. Descriptions can be many different lengths. Here we are trying to test how well content is handled when it is over a few sentances. <br/><br/> Now we will provide you with some filler text: Lorem ipsum dolor sit amet, vis no officiis voluptatibus, nusquam appareat accusata cu has. Usu cu ceteros vivendo fabellas, nec cu oporteat salutatus constituam, at habeo vivendo efficiendi per. Ut cum suas dissentiunt. Omnis diceret nonumes ea eum.',
    'checked': false
  },
  {
    'code': 'PLAN',
    'type': 'Planning and Direction',
    'desc': 'Redeployable, Middleware',
    'longDesc': 'Redeployable, Middleware. This is the landing page for Planning and Direction. <br/><br/> We have extended this description in order to test this modal. Descriptions can be many different lengths. Here we are trying to test how well content is handled when it is over a few sentances. <br/><br/> Now we will provide you with some filler text: Lorem ipsum dolor sit amet, vis no officiis voluptatibus, nusquam appareat accusata cu has. Usu cu ceteros vivendo fabellas, nec cu oporteat salutatus constituam, at habeo vivendo efficiendi per. Ut cum suas dissentiunt. Omnis diceret nonumes ea eum.',
    'checked': false
  }
  ]
});

MOCKDATA.filters.push({
  'name': 'Evaluation Levels',
  'key': 'evaluationLevel',
  'src': 'images/icon/pastel/cog.png',
  'icon': 'fa fa-edit',
  'collection': [
  {
    'code': 'STATENA',
    'type': 'No Evaluation Planned',
    'displayType': 'No Evaluation',
    'desc': 'Results not applicable to evaluation',
    'longDesc': 'No evaluations have been planned for these results. This is the landing page for No Evaluation. <br/><br/> We have extended this description in order to test this modal. Descriptions can be many different lengths. Here we are trying to test how well content is handled when it is over a few sentances. <br/><br/> Now we will provide you with some filler text: Lorem ipsum dolor sit amet, vis no officiis voluptatibus, nusquam appareat accusata cu has. Usu cu ceteros vivendo fabellas, nec cu oporteat salutatus constituam, at habeo vivendo efficiendi per. Ut cum suas dissentiunt. Omnis diceret nonumes ea eum.',
    'checked': false
  },
  {
    'code': 'STATE0',
    'type': 'Level 0 - Not Assessed',
    'displayType': 'Not Assessed',
    'desc': 'Available for Reuse/Not Evaluated',
    'longDesc': 'Asset is added to the Storefront for reuse or consumption. Asset has not been evaluated for Enterprise readiness or Conformance. Asset is will enter DI2E Clearinghouse Process to be assessed for potential reuse. Asset has completed the Component Prep and Analysis phase',
    'checked': false
  },
  {
    'code': 'STATE1',
    'type': 'Level 1 - Checklist Complete',
    'displayType': 'Checklist Complete',
    'desc': 'Initial Reuse Analysis',
    'longDesc': 'Inspection portion of DI2E Framework Evaluation Checklist complete. These questions focus mainly on the reuse potential (Visible, Accessible, and Understandable) by analysis of the information provided. This level does not represent the pass or fail, the Consumer must read the Evaluation Report.',
    'checked': false
  },
  {
    'code': 'STATE2',
    'type': 'Level 2 - DI2E Tested',
    'displayType': 'DI2E Tested',
    'desc': 'Integration and Test',
    'longDesc': 'Integration and Test portion of the DI2E Framework Evaluation Checklist complete.  These questions focus on the interoperability and ease of reuse, and will normally include an I&T plan. This level does not indicate a pass or fail of the conformance test. Consumer will read the Test Report linked in the storefront entry for program functionality.',
    'checked': false
  },
  {
    'code': 'STATE3',
    'type': 'Level 3 - DI2E Framework Conformant',
    'displayType': 'DI2E Conformant',
    'desc': 'DI2E Framework Reference Implementation',
    'longDesc': 'Asset has been determined to be reusable and interoperable, appropriately documented, and conformant to applicable DI2E Framework specifications and standards and is integrated into the DI2E Reference Ecosystem.',
    'checked': false,
    'landing': 'views/temp/landingpage2.html'
  }
  ]
});

MOCKDATA.filters.push({
  'name': 'Component State',
  'key': 'conformanceState',
  'src': 'images/icon/pastel/cog.png',
  'icon': 'fa fa-gear',
  'collection': [
  {
    'code': 'NE',
    'type': 'Not Evaluated',
    'displayType': 'Not Evaluated',
    'desc': 'Evaluation has not started',
    'longDesc': 'No evaluations have been initialized for these results. This is the landing page for Not Evaluated. <br/><br/> We have extended this description in order to test this modal. Descriptions can be many different lengths. Here we are trying to test how well content is handled when it is over a few sentances. <br/><br/> Now we will provide you with some filler text: Lorem ipsum dolor sit amet, vis no officiis voluptatibus, nusquam appareat accusata cu has. Usu cu ceteros vivendo fabellas, nec cu oporteat salutatus constituam, at habeo vivendo efficiendi per. Ut cum suas dissentiunt. Omnis diceret nonumes ea eum.',
    'checked': true
  },
  {
    'code': 'CAN',
    'type': 'DI2E Candidate',
    'displayType': 'DI2E Candidate',
    'desc': 'Potential reuse candidate',
    'longDesc': 'Component is considered as a potential reuse candidate but has not completed the DI2E Framework Evaluation Process.',
    'checked': true
  },
  {
    'code': 'COM',
    'type': 'DI2E Component',
    'displayType': 'DI2E Component',
    'desc': 'Reusable and Interoperable.',
    'longDesc': 'Component has been through the DI2E Evaluation Process and determined to be reusable and interoperable.',
    'checked': true
  },
  {
    'code': 'NR',
    'type': 'Not DI2E Reusable',
    'displayType': 'Not DI2E Reusable',
    'desc': 'Not reusable or interoperable',
    'longDesc': 'Component was evaluated and determined to not support reusability, is not interoperable, or does not conform to DI2E standards and specifications.',
    'checked': false
  },
  {
    'code': 'OBS',
    'type': 'Obsolete',
    'displayType': 'Obsolete',
    'desc': 'Retired, superseded, or not reusable by DI2E',
    'longDesc': 'Component has been retired, superseded, or is generally considered not reusable by DI2E',
    'checked': false,
  }
  ]
});


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
    name: 'Evaluated',
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
    'username': 'John.Tester',
    'assetId': 1,
    'assetUpdateDate': '03/01/2014',
    'lastViewDate': '02/25/2014'
  },
  {
    'username': 'John.Tester',
    'assetId': 3,
    'assetUpdateDate': '07/01/2013',
    'lastViewDate': '01/1/2014'
  }
  ]
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////




MOCKDATA.assets = {
  assets:[
  {
    'id': 1,
    'guid': '88fg7-7776-FH',
    'name': 'NetBeans',
    'description': 'NetBeans IDE is FREE, open source, and has a worldwide community of users and developers. ',
    'owner': 'Oracle',
    'type': [
    {
      'code': 'TOOLS'
    }
    ],
    'stats': {
      'averageRating': 3,
      'numberRatings': 10,
      'comments': 1,
      'views': 10
    },
    'primaryLicense': 'GPLV2w/ Excpetions',
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'SOFTLIB',
      'desc': 'Software Libraries'
    },
    {
      'code': 'DATAM',
      'desc': 'Data Management'
    }
    ],
    'conformanceState': [
    {
      'code': 'COM'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATE3'
    }
    ],
    'releasedDate': '03/27/2013',
    'postDate': '02/26/2014',
    'updateDate': '02/26/2014',
    'features': [
    {
      'code': 'MULITLANG',
      'desc': 'Multiple Language Suppot '
    },
    {
      'code': 'PROJECTM',
      'desc': 'Project Management'
    },
    {
      'code': 'CODEEDIT',
      'desc': 'Smart Code Editing'
    },
    {
      'code': 'MULTIPLATFORM',
      'desc': 'Desktop, mobile and web applications'
    }
    ],
    'taxonomies': [
    {
      'code': 'CONSRCH',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.3.1.1 Content Search'
    },
    {
      'code': 'WEBVIZ',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.2.3 Web Visualization'
    }
    ],
    'postedBy': 'Net Beans',
    'evaluated': true,
    'tested': true,
    'integrated': true,
    'assetTags': [
    {
      'code': 'IDE',
      'desc': 'IDE',
      'text': 'IDE'
    },
    {
      'code': 'JAVA',
      'desc': 'Java',
      'text': 'Java'
    },
    {
      'code': 'TOOL',
      'desc': 'Development Tool',
      'text': 'Development Tool'
    },
    {
      'code': 'APP',
      'desc': 'Application',
      'text': 'Application'
    }
    ],
    'assetIcon': 'image/pastel/cog.png',
    'metaData': [
    ],
    'componentOf': [
    {
      'assetId': 3,
      'name': 'IDE'
    }
    ],
    'subComponents': [
    {
      'assetId': 5,
      'name': 'NetBean RPC Platform'
    }
    ],
    'relatedAssets': [
    {
      'assetId': 2,
      'name': 'Eclipse IDE'
    }
    ]
  },
  {

    'id': 71,
    'guid': 'BA234D54-955F-2A7E-65A8-997712E46FD2',
    'name': 'Bandit OZONE Widget',
    'description': 'Vehicula aliquet libero Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum. Mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus..',
    'owner': 'Semper Rutrum Fusce LLP',
    'type': [
    {
      'code': 'WIDGET'
    }
    ],
    'stats': {
      'averageRating': 3,
      'numberRatings': 10,
      'comments': 1,
      'views': 10
    },
    'primaryLicense': 'GOTS',
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'VISUAL',
      'desc': 'Visualization'
    },
    {
      'code': 'DATAM',
      'desc': 'Data Management'
    }
    ],
    'conformanceState': [
    {
      'code': 'COM'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATE3'
    }
    ],
    'releasedDate': '03/27/2013',
    'postDate': '02/26/2014',
    'updateDate': '02/26/2014',
    'features': [
    {
      'code': 'CWMAPI1.1',
      'desc': 'CMAPI V1.1 Compliant'
    },
    {
      'code': 'CDRC1',
      'desc': 'CDR Search 1.0 Compliant '
    },
    {
      'code': 'Bandit',
      'desc': 'Search Bandit Database'
    },
    {
      'code': 'IMGVIEW',
      'desc': 'View and Enhance Imagery'
    }
    ],
    'taxonomies': [
    {
      'code': 'CONSRCH',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.3.1.1 Content Search'
    },
    {
      'code': 'WEBVIZ',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.2.3 Web Visualization'
    }
    ],
    'postedBy': 'DAVID MARCHANT',
    'evaluated': true,
    'tested': true,
    'integrated': true,
    'assetTags': [
    {
      'code': 'IMGSRCH',
      'desc': 'Image Search',
      'text': 'Image Search'
    },
    {
      'code': 'VIZ',
      'desc': 'Visualization',
      'text': 'Visualization'
    },
    {
      'code': 'IMGMAP',
      'desc': 'Image Mapping',
      'text': 'Image Mapping'
    },
    {
      'code': 'WIG',
      'desc': 'Widget',
      'text': 'Widget'
    }
    ],
    'assetIcon': 'image/wess_logo.png',
    'componentOf': [
    {
      'assetId': 3,
      'name': 'Bandit Software Suite'
    }
    ],
    'subComponents': [
    {
      'assetId': 5,
      'name': 'Bandit WebServer'
    }
    ],
    'relatedAssets': [
    {
      'assetId': 2,
      'name': 'Extensible Mapping Platform'
    },
    {
      'assetId': 6,
      'name': 'JC2CUI Common 2D Map API Widget'
    },
    {
      'assetId': 7,
      'name': 'Vega 3D Map Widget'
    }
    ]
  },
  {
    'id': 57,
    'guid': '842CB1FF-EC13-70BA-7755-E8E89FB68D42',
    'name': 'Risus Developers Cookbook',
    'description': 'Non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna. Scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse',
    'owner': 'Eu Metus Company',
    'type': [
    {
      'code': 'REFDOCS'
    }
    ],
    'stats': {
      'averageRating': 3,
      'numberRatings': 3,
      'comments': 0,
      'views': 52
    },
    'primaryLicense': null,
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'PLAN',
      'desc': 'Planning and Direction'
    }
    ],
    'conformanceState': [
    {
      'code': 'NE'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATENA'
    }
    ],
    'releasedDate': '08/18/2012',
    'postDate': '02/26/2014',
    'updateDate': '02/26/2014',
    'features': [
    {
      'code': null,
      'desc': 'Reference Document - Breakdown of Risus Framework Components'
    }
    ],
    'taxonomies': [
    {
      'code': 'DATTRANS',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.4 Data Transformation'
    }
    ],
    'postedBy': 'JONATHAN LAW',
    'evaluated': false,
    'tested': false,
    'integrated': false,
    'assetTags': [
    {
      'code': 'REF',
      'desc': 'Reference Document',
      'text': 'Reference Document'
    }
    ],
    'assetIcon': null,
    'componentOf': [],
    'subComponents': [],
    'relatedAssets': [
    {
      'assetId': 72,
      'name': 'Risus Software Library'
    },
    {
      'assetId': 11,
      'name': 'Accumsan App'
    }
    ]
  },
  {
    'id': 72,
    'guid': '324D7C4A-D726-AE19-1EB0-9CDCACF07232',
    'name': 'Risus Software Library',
    'description': 'Facilisi Sed neque Sed eget lacus Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non',
    'owner': 'Eu Metus Company',
    'type': [
    {
      'code': 'SOFTLIB'
    }
    ],
    'stats': {
      'averageRating': 4,
      'numberRatings': 23,
      'comments': 1,
      'views': 152
    },
    'primaryLicense': 'GOTS',
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'COLLECT',
      'desc': 'Collection'
    },
    {
      'code': 'DATAM',
      'desc': 'Data Management'
    }
    ],
    'conformanceState': [
    {
      'code': 'NR'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATE1'
    }
    ],
    'releasedDate': '01/05/2011',
    'postDate': '02/26/2014',
    'updateDate': '02/26/2014',
    'features': [
    {
      'code': 'CDRC1',
      'desc': 'CDR Search 1.0 Compliant'
    },
    {
      'code': null,
      'desc': 'Integrates with OZONE Widget Framework'
    },
    {
      'code': null,
      'desc': 'Additional Documentation available'
    }
    ],
    'taxonomies': [
    {
      'code': 'DATTRANS',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.4 Data Transformation'
    }
    ],
    'postedBy': 'JONATHAN LAW',
    'evaluated': false,
    'tested': false,
    'integrated': false,
    'assetTags': [
    {
      'code': 'IMGSRCH',
      'desc': 'Image Search',
      'text': 'Image Search'
    },
    {
      'code': 'DATAT',
      'desc': 'Data Transformation',
      'text': 'Data Transformation'
    },
    {
      'code': 'SOFTLIB',
      'desc': 'Software Library',
      'text': 'Software Library'
    }],
    'assetIcon': null,
    'componentOf': [],
    'subComponents': [],
    'relatedAssets': [
    {
      'assetId': 57,
      'name': 'Risus Developers Cookbook'
    },
    {
      'assetId': 11,
      'name': 'Accumsan App'
    }
    ]
  },

  {
    'id': 34,
    'guid': '6482B5F8-CB71-E00D-8FA4-16529549EC22',
    'name': 'Notepad++',
    'description': 'Notepad++ is a free source code editor and Notepad replacement that supports several languages. Running in the MS Windows environment, its use is governed by GPL License. Based on the powerful editing component Scintilla, Notepad++ is written in C++ and uses pure Win32 API and STL which ensures a higher execution speed and smaller program size. By optimizing as many routines as possible without losing user friendliness, Notepad++ is trying to reduce the world carbon dioxide emissions. When using less CPU power, the PC can throttle down and reduce power consumption, resulting in a greener environment.',
    'owner': 'Don Ho',
    'type': [
    {
      'code': 'APPS'
    }
    ],
    'stats': {
      'averageRating': 5,
      'numberRatings': 15,
      'comments': 1,
      'views': 43
    },
    'primaryLicense': 'GPLV2w/ Excpetions',
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'COLLAB',
      'desc': 'Collaboration'
    }
    ],
    'conformanceState': [
    {
      'code': 'COM'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATE2'
    }
    ],
    'releasedDate': '05/08/2014',
    'postDate': '05/12/2014',
    'updateDate': '05/12/2014',
    'features': [
    {
      'code': null,
      'desc': 'Syntax Highlighting and Syntax Folding'
    },
    {
      'code': null,
      'desc': 'Auto-completion'
    },
    {
      'code': null,
      'desc': 'Macro recording and playback'
    }
    ],
    'taxonomies': [
    {
      'code': 'DATTRANS',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.4 Data Transformation'
    },
    {
      'code': 'DATVAL',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.3 Data Validation'
    }
    ],
    'postedBy': 'DEVIN SHURTLEFF',
    'evaluated': true,
    'tested': true,
    'integrated': false,
    'assetTags': [
    {
      'code': 'DATAV',
      'desc': 'Data Validation',
      'text': 'Data Validation'
    },
    {
      'code': 'DATAT',
      'desc': 'Data Transformation',
      'text': 'Data Transformation'
    },
    {
      'code': 'APPS',
      'desc': 'Application',
      'text': 'Application'
    }
    ],
    'assetIcon': null,
    'componentOf': [],
    'subComponents': [],
    'relatedAssets': [
    {
      'assetId': 33,
      'name': 'Microsoft Word'
    },
    {
      'assetId': 1,
      'name': 'NetBeans'
    }
    ]
  },
  {
    'id': 33,
    'guid': 'B3E36975-6F14-A403-C08B-1F3D7CE12C4D',
    'name': 'Microsoft Word',
    'description': 'Microsoft Word is a word processor developed by Microsoft. It was first released in 1983 under the name Multi-Tool Word for Xenix systems. Subsequent versions were later written for several other platforms including IBM PCs running DOS (1983), Apple Macintosh running Mac OS (1985), AT&T Unix PC (1985), Atari ST (1988), SCO Unix (1994), OS/2 (1989), and Microsoft Windows (1989). Commercial versions of Word are licensed as a standalone product or as a component of Microsoft Office, Windows RT or the discontinued Microsoft Works suite. Freeware editions of Word are Microsoft Word Viewer and Office Online, both of which have limited features.',
    'owner': 'Microsoft',
    'type': [
    {
      'code': 'APPS'
    }
    ],
    'stats': {
      'averageRating': 4,
      'numberRatings': 26,
      'comments': 0,
      'views': 43
    },
    'primaryLicense': 'MSL',
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'DATAM',
      'desc': 'Data Management'
    }
    ],
    'conformanceState': [
    {
      'code': 'OBS'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATE0'
    }
    ],
    'releasedDate': '01/01/2013',
    'postDate': '02/26/2014',
    'updateDate': '02/26/2014',
    'features': [
    {
      'code': null,
      'desc': 'Cross Version Compatible'
    },
    {
      'code': null,
      'desc': 'Word Art Capable'
    },
    {
      'code': null,
      'desc': 'Macro recording and playback'
    }
    ],
    'taxonomies': [
    {
      'code': 'DATTRANS',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.4 Data Transformation'
    },
    {
      'code': 'DATVAL',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.3 Data Validation'
    }
    ],
    'postedBy': 'DEVIN SHURTLEFF',
    'evaluated': false,
    'tested': false,
    'integrated': false,
    'assetTags': [
    {
      'code': 'DATAV',
      'desc': 'Data Validation',
      'text': 'Data Validation'
    },
    {
      'code': 'DATAT',
      'desc': 'Data Transformation',
      'text': 'Data Transformation'
    },
    {
      'code': 'APPS',
      'desc': 'Application',
      'text': 'Application'
    }
    ],
    'assetIcon': null,
    'componentOf': [],
    'subComponents': [],
    'relatedAssets': [
    {
      'assetId': 34,
      'name': 'Notepad++'
    },
    {
      'assetId': 52,
      'name': 'Microsoft Windows'
    }
    ]
  },
  {
    'id': 45,
    'guid': '29FCB9DC-4157-BD33-9E97-876C89EE0D15',
    'name': 'Google Chrome',
    'description': 'Google Chrome is a freeware web browser developed by Google. It used the WebKit layout engine until version 27 and, with the exception of its iOS releases, from version 28 and beyond uses the WebKit fork Blink. It was first released as a beta version for Microsoft Windows on September 2, 2008, and as a stable public release on December 11, 2008. As of March 2014, StatCounter estimates that Google Chrome has a 43% worldwide usage share of web browsers, making it the most widely used web browser in the world. In September 2008, Google released the majority of Chrome\'s source code as an open source project called Chromium, on which Chrome releases are still based. Notable components that are not open source are the built-in PDF viewer and the built-in Flash player.',
    'owner': 'Google',
    'type': [
    {
      'code': 'APPS'
    }
    ],
    'stats': {
      'averageRating': 4,
      'numberRatings': 26,
      'comments': 0,
      'views': 43
    },
    'primaryLicense': 'BSD',
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'DATAM',
      'desc': 'Data Management'
    }
    ],
    'conformanceState': [
    {
      'code': 'COM'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATE0'
    }
    ],
    'releasedDate': '09/02/2013',
    'postDate': '02/26/2014',
    'updateDate': '02/26/2014',
    'features': [
    {
      'code': null,
      'desc': 'Bookmarks and Settings Synchronisation'
    },
    {
      'code': null,
      'desc': 'Web Standards Support'
    },
    {
      'code': null,
      'desc': 'Security'
    },
    {
      'code': null,
      'desc': 'Plugins capable'
    }
    ],
    'taxonomies': [
    {
      'code': 'DATTRANS',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.4 Data Transformation'
    },
    {
      'code': 'DATVAL',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.3 Data Validation'
    }
    ],
    'postedBy': 'JONATHAN LAW',
    'evaluated': false,
    'tested': false,
    'integrated': false,
    'assetTags': [
    {
      'code': 'DATAV',
      'desc': 'Data Validation',
      'text': 'Data Validation'
    },
    {
      'code': 'DATAT',
      'desc': 'Data Transformation',
      'text': 'Data Transformation'
    },
    {
      'code': 'APPS',
      'desc': 'Application',
      'text': 'Application'
    }
    ],
    'assetIcon': null,
    'componentOf': [],
    'subComponents': [],
    'relatedAssets': [
    {
      'assetId': 39,
      'name': 'Google Chrome Technical Profile'
    },
    {
      'assetId': 14,
      'name': 'Firefox'
    }
    ]
  },
  {
    'id': 39,
    'guid': '29FCB9DC-4157-BD33-9E97-876C89EE0D15',
    'name': 'Google Chrome Technical Profile',
    'description': 'Google Chrome is the basis of Google\'s Chrome OS operating system that ships on specific hardware from Google\'s manufacturing partners. The user interface has a minimalist design resembling the Google Chrome browser. Chrome OS is aimed at users who spend most of their computer time on the Web; the only applications on the devices are a browser incorporating a media player and a file manager. Google announced Chrome OS on July 7, 2009',
    'owner': 'Google',
    'type': [
    {
      'code': 'TOOLS'
    }
    ],
    'stats': {
      'averageRating': 1,
      'numberRatings': 0,
      'comments': 0,
      'views': 15
    },
    'primaryLicense': null,
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'COLLECT',
      'desc': 'Collection'
    }
    ],
    'conformanceState': [
    {
      'code': 'CAN'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATENA'
    }
    ],
    'releasedDate': '09/02/2013',
    'postDate': '02/26/2014',
    'updateDate': '02/26/2014',
    'features': [
    {
      'code': null,
      'desc': 'Technical Profile - A description of the Chrome browser evolution from the Chrome OS.'
    }
    ],
    'taxonomies': [
    {
      'code': 'SENPROV',
      'arch': 'DI2E-Svc-V4',
      'desc': '3.2.1.1 Sensor Provisioning'
    }
    ],
    'postedBy': 'JONATHAN LAW',
    'evaluated': false,
    'tested': false,
    'integrated': false,
    'assetTags': [
    {
      'code': 'APPS',
      'desc': 'Application',
      'text': 'Application'
    }
    ],
    'assetIcon': null,
    'componentOf': [],
    'subComponents': [],
    'relatedAssets': [
    {
      'assetId': 45,
      'name': 'Google Chrome'
    }
    ]
  },
  {
    'id': 14,
    'guid': '2B1BB13F-9B56-9265-8C12-B5415AFEB24D',
    'name': 'Firefox',
    'description': 'Mozilla Firefox (known simply as Firefox) is a free and open-source web browser developed for Windows, OS X, and Linux, with a mobile version for Android, by the Mozilla Foundation and its subsidiary, the Mozilla Corporation. Firefox uses the Gecko layout engine to render web pages, which implements current and anticipated web standards. As of February 2014, Firefox has between 12% and 22% of worldwide usage, making it the third most popular web browser, according to different sources. According to Mozilla, Firefox counts over 450 million users around the world. The browser has had particular success in Indonesia, Iran, Germany, and Poland, where it is the most popular browser with 55%, 46%, 43%, and 41% of the market share, respectively.',
    'owner': 'Mozilla',
    'type': [
    {
      'code': 'APPS'
    }
    ],
    'stats': {
      'averageRating': 4,
      'numberRatings': 53,
      'comments': 0,
      'views': 111
    },
    'primaryLicense': 'MPL',
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'DATAM',
      'desc': 'Data Management'
    }
    ],
    'conformanceState': [
    {
      'code': 'CAN'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATENA'
    }
    ],
    'releasedDate': '09/23/2002',
    'postDate': '02/26/2014',
    'updateDate': '02/26/2014',
    'features': [
    {
      'code': null,
      'desc': '\'Fastest\' Browser experience'
    },
    {
      'code': null,
      'desc': 'Privacy protection'
    }
    ],
    'taxonomies': [
    {
      'code': 'DATTRANS',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.4 Data Transformation'
    },
    {
      'code': 'DATVAL',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.3 Data Validation'
    }
    ],
    'postedBy': 'JONATHAN LAW',
    'evaluated': false,
    'tested': false,
    'integrated': false,
    'assetTags': [
    {
      'code': 'DATAV',
      'desc': 'Data Validation',
      'text': 'Data Validation'
    },
    {
      'code': 'DATAT',
      'desc': 'Data Transformation',
      'text': 'Data Transformation'
    },
    {
      'code': 'APPS',
      'desc': 'Application',
      'text': 'Application'
    }
    ],
    'assetIcon': null,
    'componentOf': [],
    'subComponents': [],
    'relatedAssets': [
    {
      'assetId': 45,
      'name': 'Google Chrome'
    }
    ]
  },
  {
    'id': 99,
    'guid': '3AD3EB52-2249-01F7-5743-AE097FEF9FDB',
    'name': 'Velit',
    'description': 'Et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem',
    'owner': 'Donec Felis Company',
    'type': [
    {
      'code': 'SOFTLIB'
    }
    ],
    'stats': {
      'averageRating': 3,
      'numberRatings': 47,
      'comments': 0,
      'views': 92
    },
    'primaryLicense': 'GPLV2w/ Excpetions',
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'DATAM',
      'desc': 'Data Management'
    },
    {
      'code': 'SECM',
      'desc': 'Security Management'
    }
    ],
    'conformanceState': [
    {
      'code': 'NR'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATE0'
    }
    ],
    'releasedDate': '11/24/2005',
    'postDate': '02/26/2014',
    'updateDate': '02/26/2014',
    'features': [
    {
      'code': null,
      'desc': 'REST API interface'
    },
    {
      'code': null,
      'desc': 'Swappable backend'
    },
    {
      'code': null,
      'desc': 'Supports MongoDB'
    },
    {
      'code': null,
      'desc': 'Supports in-memory implementations'
    }
    ],
    'taxonomies': [
    {
      'code': 'DATTRANS',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.4 Data Transformation'
    },
    {
      'code': 'DATVAL',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.3 Data Validation'
    }
    ],
    'postedBy': 'JONATHAN LAW',
    'evaluated': false,
    'tested': false,
    'integrated': false,
    'assetTags': [
    {
      'code': 'DATAV',
      'desc': 'Data Validation',
      'text': 'Data Validation'
    },
    {
      'code': 'DATAT',
      'desc': 'Data Transformation',
      'text': 'Data Transformation'
    },
    {
      'code': 'SOFTLIB',
      'desc': 'Software Libraries',
      'text': 'Software Libraries'
    }
    ],
    'assetIcon': null,
    'componentOf': [
    {
      'assetId': 100,
      'name': 'Velit Parent'
    }
    ],
    'subComponents': [
    {
      'assetId': 98,
      'name': 'Velit Child'
    }
    ],
    'relatedAssets': [
    {
      'assetId': 97,
      'name': 'Velit Sibling'
    }
    ]
  },
  {
    'id': 100,
    'guid': '0C96BC79-0C55-7794-2E98-DE5C7C5BB087',
    'name': 'Velit Parent',
    'description': 'Nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec',
    'owner': 'Egestas Fusce Institute',
    'type': [
    {
      'code': 'SOFTLIB'
    }
    ],
    'stats': {
      'averageRating': 1,
      'numberRatings': 0,
      'comments': 0,
      'views': 3
    },
    'primaryLicense': 'GPLV2w/ Excpetions',
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'DATAM',
      'desc': 'Data Management'
    },
    {
      'code': 'SECM',
      'desc': 'Security Management'
    }
    ],
    'conformanceState': [
    {
      'code': 'COM'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATE0'
    }
    ],
    'releasedDate': '04/16/2000',
    'postDate': '02/26/2014',
    'updateDate': '02/26/2014',
    'features': [
    {
      'code': null,
      'desc': 'REST API interface'
    },
    {
      'code': null,
      'desc': 'Supports in-memory implementations'
    }
    ],
    'taxonomies': [
    {
      'code': 'DATTRANS',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.4 Data Transformation'
    },
    {
      'code': 'DATVAL',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.3 Data Validation'
    }
    ],
    'postedBy': 'JONATHAN LAW',
    'evaluated': false,
    'tested': false,
    'integrated': false,
    'assetTags': [
    {
      'code': 'DATAV',
      'desc': 'Data Validation',
      'text': 'Data Validation'
    },
    {
      'code': 'DATAT',
      'desc': 'Data Transformation',
      'text': 'Data Transformation'
    },
    {
      'code': 'SOFTLIB',
      'desc': 'Software Libraries',
      'text': 'Software Libraries'
    }
    ],
    'assetIcon': null,
    'componentOf': [],
    'subComponents': [
    {
      'assetId': 99,
      'name': 'Velit'
    }
    ],
    'relatedAssets': []
  },
  {
    'id': 98,
    'guid': 'E2A1B482-1C49-CB8E-9B26-6F03D5228778',
    'name': 'Velit Child',
    'description': 'Sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse.',
    'owner': 'Donec Felis Company',
    'type': [
    {
      'code': 'SOFTLIB'
    }
    ],
    'stats': {
      'averageRating': 0,
      'numberRatings': 0,
      'comments': 2,
      'views': 15
    },
    'primaryLicense': 'BSD',
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'DATAM',
      'desc': 'Data Management'
    },
    {
      'code': 'SECM',
      'desc': 'Security Management'
    }
    ],
    'conformanceState': [
    {
      'code': 'COM'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATE1'
    }
    ],
    'releasedDate': '06/05/2008',
    'postDate': '02/26/2014',
    'updateDate': '02/26/2014',
    'features': [
    {
      'code': null,
      'desc': 'Open Source'
    },
    {
      'code': null,
      'desc': 'Licensed under the BSD license'
    }
    ],
    'taxonomies': [
    {
      'code': 'DATTRANS',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.4 Data Transformation'
    },
    {
      'code': 'DATVAL',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.3 Data Validation'
    }
    ],
    'postedBy': 'JONATHAN LAW',
    'evaluated': true,
    'tested': false,
    'integrated': false,
    'assetTags': [
    {
      'code': 'DATAV',
      'desc': 'Data Validation',
      'text': 'Data Validation'
    },
    {
      'code': 'DATAT',
      'desc': 'Data Transformation',
      'text': 'Data Transformation'
    },
    {
      'code': 'SOFTLIB',
      'desc': 'Software Libraries',
      'text': 'Software Libraries'
    }
    ],
    'assetIcon': null,
    'componentOf': [
    {
      'assetId': 99,
      'name': 'Velit'
    }
    ],
    'subComponents': [],
    'relatedAssets': []
  },
  {
    'id': 97,
    'guid': '7D5A9C12-3A0F-719A-DF93-8779120CCB10',
    'name': 'Velit Sibling',
    'description': 'Sed sem egestas blandit. Nam nulla magna, malesuada. Bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis.',
    'owner': 'Semper Rutrum Fusce Corp.',
    'type': [
    {
      'code': 'ENTERPRISE'
    }
    ],
    'stats': {
      'averageRating': 0,
      'numberRatings': 0,
      'comments': 2,
      'views': 15
    },
    'primaryLicense': 'BSD',
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'DATAM',
      'desc': 'Data Management'
    },
    {
      'code': 'SECM',
      'desc': 'Security Management'
    },
    {
      'code': 'VISUAL',
      'desc': 'Visualization'
    }
    ],
    'conformanceState': [
    {
      'code': 'OBS'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATE3'
    }
    ],
    'releasedDate': '03/09/2004',
    'postDate': '02/26/2014',
    'updateDate': '02/26/2014',
    'features': [
    {
      'code': null,
      'desc': 'Licensed under the BSD license'
    },
    {
      'code': null,
      'desc': 'Fuzzy Search Capabilities'
    },
    {
      'code': null,
      'desc': 'Data-rich Geographic entities'
    }
    ],
    'taxonomies': [
    {
      'code': 'DATTRANS',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.4 Data Transformation'
    },
    {
      'code': 'DATVAL',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.3 Data Validation'
    }
    ],
    'postedBy': 'JONATHAN LAW',
    'evaluated': true,
    'tested': true,
    'integrated': true,
    'assetTags': [
    {
      'code': 'DATAV',
      'desc': 'Data Validation',
      'text': 'Data Validation'
    },
    {
      'code': 'DATAT',
      'desc': 'Data Transformation',
      'text': 'Data Transformation'
    },
    {
      'code': 'ENTERPRISE',
      'desc': 'Enterprise Services',
      'text': 'Enterprise Services'
    }
    ],
    'assetIcon': null,
    'componentOf': [],
    'subComponents': [],
    'relatedAssets': [
    {
      'assetId': 99,
      'name': 'Velit'
    },
    {
      'assetId': 54,
      'name': 'Velit Sibling Widget'
    }
    ]
  },
  {
    'id': 54,
    'guid': '6C93BBC8-F0BF-BA83-05D3-415F75BDE071',
    'name': 'Velit Sibling Widget',
    'description': 'Euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor.quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla',
    'owner': 'Dolor Sit Limited',
    'type': [
    {
      'code': 'WIDGET'
    }
    ],
    'stats': {
      'averageRating': 5,
      'numberRatings': 9,
      'comments': 1,
      'views': 9
    },
    'primaryLicense': 'GPLV2w/ Excpetions',
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'DATAM',
      'desc': 'Data Management'
    },
    {
      'code': 'VISUAL',
      'desc': 'Visualization'
    }
    ],
    'conformanceState': [
    {
      'code': 'CAN'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATE0'
    }
    ],
    'releasedDate': '07/14/2007',
    'postDate': '02/26/2014',
    'updateDate': '02/26/2014',
    'features': [
    {
      'code': null,
      'desc': 'Fuzzy Search Capabilities'
    },
    {
      'code': null,
      'desc': 'Data-rich Geographic entities'
    }
    ],
    'taxonomies': [
    {
      'code': 'DATTRANS',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.4 Data Transformation'
    },
    {
      'code': 'DATVAL',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.3 Data Validation'
    }
    ],
    'postedBy': 'JONATHAN LAW',
    'evaluated': false,
    'tested': false,
    'integrated': false,
    'assetTags': [
    {
      'code': 'DATAV',
      'desc': 'Data Validation',
      'text': 'Data Validation'
    },
    {
      'code': 'DATAT',
      'desc': 'Data Transformation',
      'text': 'Data Transformation'
    },
    {
      'code': 'WIDGET',
      'desc': 'Widgets',
      'text': 'Widgets'
    }
    ],
    'assetIcon': null,
    'componentOf': [],
    'subComponents': [],
    'relatedAssets': []
  },
  {
    'id': 13,
    'guid': '6696D03B-71FF-5127-732D-86BF3A8D352F',
    'name': 'NecMauris',
    'description': 'Euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor.quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla',
    'owner': 'Dolor Sit Limited',
    'type': [
    {
      'code': 'WIDGET'
    }
    ],
    'stats': {
      'averageRating': 5,
      'numberRatings': 9,
      'comments': 1,
      'views': 9
    },
    'primaryLicense': 'GPLV2w/ Excpetions',
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'DATAM',
      'desc': 'Data Management'
    },
    {
      'code': 'VISUAL',
      'desc': 'Visualization'
    }
    ],
    'conformanceState': [
    {
      'code': 'COM'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATE0'
    }
    ],
    'releasedDate': '07/14/2007',
    'postDate': '02/26/2014',
    'updateDate': '02/26/2014',
    'features': [
    {
      'code': null,
      'desc': 'Fuzzy Search Capabilities'
    },
    {
      'code': null,
      'desc': 'Data-rich Geographic entities'
    }
    ],
    'taxonomies': [
    {
      'code': 'DATTRANS',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.4 Data Transformation'
    },
    {
      'code': 'DATVAL',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.3 Data Validation'
    }
    ],
    'postedBy': 'JONATHAN LAW',
    'evaluated': false,
    'tested': false,
    'integrated': false,
    'assetTags': [
    {
      'code': 'DATAV',
      'desc': 'Data Validation',
      'text': 'Data Validation'
    },
    {
      'code': 'DATAT',
      'desc': 'Data Transformation',
      'text': 'Data Transformation'
    },
    {
      'code': 'WIDGET',
      'desc': 'Widgets',
      'text': 'Widgets'
    }
    ],
    'assetIcon': null,
    'componentOf': [],
    'subComponents': [],
    'relatedAssets': [
    {
      'assetId': 97,
      'name': 'Velit Sibling'
    }
    ]
  },
  {
    'id': 66,
    'guid': '6B7E113B-A402-0DAC-622D-173DC2095E13',
    'name': 'Ullamcorper Viverra Reference Document',
    'description': 'A sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed,. Nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi Accumsan App. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare',
    'owner': 'Dolor Sit Limited',
    'type': [
    {
      'code': 'REFDOCS'
    }
    ],
    'stats': {
      'averageRating': 3,
      'numberRatings': 123,
      'comments': 21,
      'views': 1209
    },
    'primaryLicense': 'GPLV2w/ Excpetions',
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'COLLAB',
      'desc': 'Collaboration'
    }
    ],
    'conformanceState': [
    {
      'code': 'COM'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATE0'
    }
    ],
    'releasedDate': '07/14/2007',
    'postDate': '02/26/2014',
    'updateDate': '02/26/2014',
    'features': [
    {
      'code': null,
      'desc': 'Provides information on Ullamcorper Viverra'
    }
    ],
    'taxonomies': [
    {
      'code': 'DATTRANS',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.4 Data Transformation'
    },
    {
      'code': 'DATVAL',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.3 Data Validation'
    }
    ],
    'postedBy': 'JONATHAN LAW',
    'evaluated': false,
    'tested': false,
    'integrated': false,
    'assetTags': [
    {
      'code': 'DATAV',
      'desc': 'Data Validation',
      'text': 'Data Validation'
    },
    {
      'code': 'DATAT',
      'desc': 'Data Transformation',
      'text': 'Data Transformation'
    },
    {
      'code': 'REFDOCS',
      'desc': 'Reference Documentation',
      'text': 'Reference Documentation'
    }
    ],
    'assetIcon': null,
    'componentOf': [],
    'subComponents': [],
    'relatedAssets': [
    {
      'assetId': 4,
      'name': 'Morbi Widget'
    }
    ]
  },
  {
    'id': 4,
    'guid': 'D746290C-57FE-8001-5FF7-56249A11941A',
    'name': 'Morbi Widget',
    'description': 'condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula. Risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus',
    'owner': 'Sodales Company',
    'type': [
    {
      'code': 'WIDGET'
    }
    ],
    'stats': {
      'averageRating': 2,
      'numberRatings': 13,
      'comments': 5,
      'views': 253
    },
    'primaryLicense': 'GPLV2w/ Excpetions',
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'COLLAB',
      'desc': 'Collaboration'
    }
    ],
    'conformanceState': [
    {
      'code': 'COM'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATE0'
    }
    ],
    'releasedDate': '07/14/2007',
    'postDate': '02/26/2014',
    'updateDate': '02/26/2014',
    'features': [
    {
      'code': null,
      'desc': 'Open Source'
    },
    {
      'code': null,
      'desc': 'CMWA 1.0 and 1.1 compliant'
    },
    {
      'code': null,
      'desc': 'EMP JavaScript API Library'
    }
    ],
    'taxonomies': [
    {
      'code': 'DATVAL',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.3 Data Validation'
    }
    ],
    'postedBy': 'JONATHAN LAW',
    'evaluated': false,
    'tested': false,
    'integrated': false,
    'assetTags': [
    {
      'code': 'DATAV',
      'desc': 'Data Validation',
      'text': 'Data Validation'
    },
    {
      'code': 'DATAT',
      'desc': 'Data Transformation',
      'text': 'Data Transformation'
    },
    {
      'code': 'WIDGET',
      'desc': 'Widgets',
      'text': 'Widgets'
    }
    ],
    'assetIcon': null,
    'componentOf': [],
    'subComponents': [],
    'relatedAssets': [
    {
      'assetId': 66,
      'name': 'Ullamcorper Viverra Reference Document'
    }
    ]
  },
  {
    'id': 73,
    'guid': '737D183A-8530-F6E6-FA37-7DAE134A9138',
    'name': 'Pede Plan',
    'description': 'iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula.. Mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo',
    'owner': 'Lacus Quisque INC.',
    'type': [
    {
      'code': 'SOFTLIB'
    }
    ],
    'stats': {
      'averageRating': 2,
      'numberRatings': 13,
      'comments': 5,
      'views': 253
    },
    'primaryLicense': 'BSD',
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'PLAN',
      'desc': 'Planning and Direction'
    }
    ],
    'conformanceState': [
    {
      'code': 'NE'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATENA'
    }
    ],
    'releasedDate': '10/10/1999',
    'postDate': '02/26/2014',
    'updateDate': '02/26/2014',
    'features': [
    {
      'code': null,
      'desc': 'REST API interface'
    },
    {
      'code': null,
      'desc': 'Swappable backend'
    },
    {
      'code': null,
      'desc': 'Supports MongoDB'
    },
    {
      'code': null,
      'desc': 'Supports in-memory implementations'
    }
    ],
    'taxonomies': [
    {
      'code': 'SENCAT',
      'arch': 'DI2E-Svc-V4',
      'desc': '3.1.2.2 Sensor Cataloging'
    }
    ],
    'postedBy': 'JONATHAN LAW',
    'evaluated': false,
    'tested': false,
    'integrated': false,
    'assetTags': [
    {
      'code': 'DATAV',
      'desc': 'Data Validation',
      'text': 'Data Validation'
    },
    {
      'code': 'DATAT',
      'desc': 'Data Transformation',
      'text': 'Data Transformation'
    },
    {
      'code': 'PLAN',
      'desc': 'Planning and Direction',
      'text': 'Planning and Direction'
    },
    {
      'code': 'SOFTLIB',
      'desc': 'Software Libraries',
      'text': 'Software Libraries'
    }
    ],
    'assetIcon': null,
    'componentOf': [],
    'subComponents': [],
    'relatedAssets': []
  },
  {
    'id': 52,
    'guid': '0BC6E60A-B3DB-9412-09BF-0293690EA443',
    'name': 'Microsoft Windows',
    'description': 'Microsoft Windows is a series of graphical interface operating systems developed, marketed, and sold by Microsoft. Microsoft introduced an operating environment named Windows on November 20, 1985 as a graphical operating system shell for MS-DOS in response to the growing interest in graphical user interfaces (GUIs). Microsoft Windows came to dominate the world\'s personal computer market with over 90% market share, overtaking Mac OS, which had been introduced in 1984. As of April 2014, the most recent versions of Windows for personal computers, smartphones, server computers and embedded devices are respectively Windows 8.1, Windows Phone 8.1, Windows Server 2012 R2 and Windows Embedded 8.',
    'owner': 'Microsoft',
    'type': [
    {
      'code': 'APPS'
    }
    ],
    'stats': {
      'averageRating': 2,
      'numberRatings': 325,
      'comments': 552,
      'views': 12314
    },
    'primaryLicense': 'MSL',
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'DATAM',
      'desc': 'Data Management'
    },
    {
      'code': 'VISUAL',
      'desc': 'Visualization'
    }
    ],
    'conformanceState': [
    {
      'code': 'NE'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATENA'
    }
    ],
    'releasedDate': '10/10/1999',
    'postDate': '02/26/2014',
    'updateDate': '02/26/2014',
    'features': [
    {
      'code': null,
      'desc': 'Unique user interface and Memory Management'
    },
    {
      'code': null,
      'desc': 'Added Security Features'
    },
    {
      'code': null,
      'desc': 'New Live Tile Interaction'
    }
    ],
    'taxonomies': [
    {
      'code': 'DESSHA',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.1.2.1 Desktop Sharing'
    },
    {
      'code': 'METMEACOL',
      'arch': 'DI2E-Svc-V4',
      'desc': '1.1.1.1 Metrics Measurements Collection'
    }
    ],
    'postedBy': 'JONATHAN LAW',
    'evaluated': false,
    'tested': false,
    'integrated': false,
    'assetTags': [
    {
      'code': 'DATAV',
      'desc': 'Data Validation',
      'text': 'Data Validation'
    },
    {
      'code': 'DATAT',
      'desc': 'Data Transformation',
      'text': 'Data Transformation'
    },
    {
      'code': 'APPS',
      'desc': 'Applications',
      'text': 'Applications'
    }
    ],
    'assetIcon': null,
    'componentOf': [],
    'subComponents': [],
    'relatedAssets': [
    {
      'assetId': 33,
      'name': 'Microsoft Word'
    }
    ]
  },
  {
    'id': 83,
    'guid': 'ED0B6211-D0E3-060A-7224-F79A3A0070C0',
    'name': 'Vivamus',
    'description': 'lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec.',
    'owner': 'Ipsum Leo Corp',
    'type': [
    {
      'code': 'WIDGET'
    }
    ],
    'stats': {
      'averageRating': 3,
      'numberRatings': 41,
      'comments': 354,
      'views': 235
    },
    'primaryLicense': 'GOTS',
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'DATAM',
      'desc': 'Data Management'
    },
    {
      'code': 'VISUAL',
      'desc': 'Visualization'
    }
    ],
    'conformanceState': [
    {
      'code': 'CAN'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATE0'
    }
    ],
    'releasedDate': '06/16/2004',
    'postDate': '02/26/2014',
    'updateDate': '02/26/2014',
    'features': [
    {
      'code': 'CDRC1',
      'desc': 'CDR Search 1.0 compliant'
    },
    {
      'code': null,
      'desc': 'Data Viewer Widget'
    }
    ],
    'taxonomies': [
    {
      'code': 'DATTRANS',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.4 Data Transformation'
    },
    {
      'code': 'DATVAL',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.3 Data Validation'
    }
    ],
    'postedBy': 'JONATHAN LAW',
    'evaluated': false,
    'tested': false,
    'integrated': false,
    'assetTags': [
    {
      'code': 'DATAV',
      'desc': 'Data Validation',
      'text': 'Data Validation'
    },
    {
      'code': 'DATAT',
      'desc': 'Data Transformation',
      'text': 'Data Transformation'
    },
    {
      'code': 'WIDGET',
      'desc': 'Widgets',
      'text': 'Widgets'
    }
    ],
    'assetIcon': null,
    'componentOf': [],
    'subComponents': [],
    'relatedAssets': []
  },
  {
    'id': 11,
    'guid': 'B29BB069-59C7-05A2-37CF-CC460DD7D5F3',
    'name': 'Accumsan App',
    'description': 'Ipsum dolor sit amet, consectetuer adipiscing. Get tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    'owner': 'Mollis Vitae Posuere Inc.',
    'type': [
    {
      'code': 'APPS'
    }
    ],
    'stats': {
      'averageRating': 4,
      'numberRatings': 23,
      'comments': 1,
      'views': 152
    },
    'primaryLicense': 'APACHE2.0',
    'operationStatus': 'Released/Operational',
    'categories': [
    {
      'code': 'DATAM',
      'desc': 'Data Management'
    }
    ],
    'conformanceState': [
    {
      'code': 'COM'
    }
    ],
    'evaluationLevel': [
    {
      'code': 'STATE0'
    }
    ],
    'releasedDate': '05/24/2009',
    'postDate': '02/26/2014',
    'updateDate': '02/26/2014',
    'features': [
    {
      'code': null,
      'desc': 'OpenAM compliant'
    },
    {
      'code': null,
      'desc': 'Master IdAM Administration Console'
    },
    {
      'code': null,
      'desc': 'Supports Ozone Widget Framework Implementations'
    }
    ],
    'taxonomies': [
    {
      'code': 'DATTRANS',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.4 Data Transformation'
    },
    {
      'code': 'DATVAL',
      'arch': 'DI2E-Svc-V4',
      'desc': '2.5.1.3 Data Validation'
    }
    ],
    'postedBy': 'JONATHAN LAW',
    'evaluated': false,
    'tested': false,
    'integrated': false,
    'assetTags': [
    {
      'code': 'IMGSRCH',
      'desc': 'Image Search',
      'text': 'Image Search'
    },
    {
      'code': 'DATAV',
      'desc': 'Data Validation',
      'text': 'Data Validation'
    },
    {
      'code': 'DATAT',
      'desc': 'Data Transformation',
      'text': 'Data Transformation'
    },
    {
      'code': 'APPS',
      'desc': 'Application',
      'text': 'Application'
    }
    ],
    'assetIcon': null,
    'componentOf': [],
    'subComponents': [],
    'relatedAssets': [
    {
      'assetId': 57,
      'name': 'Risus Developers Cookbook'
    },
    {
      'assetId': 11,
      'name': 'Accumsan App'
    }
    ]
  }
  ]
};
