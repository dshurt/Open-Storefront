Ext.define('openstorefront.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.data.StoreManager',
        'Ext.field.*',
        'Ext.dataview.*'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Home',
                iconCls: 'home',
                layout: 'fit',
               // styleHtmlContent: true,
                //scrollable: true,
                items: [
                  {
                    xtype: 'landing'
                  }
              ]
            },
            {
                title: 'Profile',
                iconCls: 'user',
                layout: 'fit',
                 items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'User Profile'
                    },
                    {
                        xtype: 'userProfile'                       
                    }
                ]
            },
            {
                title: 'Help',
                iconCls: 'info',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Help'
                    },
                    {
                        xtype: 'panel',
                        html: 'Help Text'                        
                    }
                ]
            }
        ]
    }
});
