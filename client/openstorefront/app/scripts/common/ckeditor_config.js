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

'use strict';

/*global CKEDITOR*/

/* exported getCkConfig */


/***************************************************************
* Custom components that are added to the ckeditor
* params: param name -- param description
* returns: Return name -- return description
***************************************************************/
CKEDITOR.plugins.add( 'componentList', {
  init : function( editor ) {
    editor.addCommand( 'insertComponentList', {
      exec: function( editor ) {
        editor.insertHtml( '### Component List ###');
      }
    });
    editor.ui.addButton( 'ComponentButton',
    {
      label: 'Insert Component List',
      command: 'insertComponentList',
      icon: this.path + '../../../../images/yeoman.png'
    });
  }
});

CKEDITOR.plugins.registered.save = {
  init : function( editor ) {
    var command = editor.addCommand( 'save', { /*jshint unused:false*/
      modes: {wysiwyg: 1, source: 1},
      // readOnly: 1,
      exec: function(editor) {
        editor.fire('save');
      }
    }
    );
    editor.ui.addButton( 'Save',{label : 'My Save',command : 'save'});
  }
};

// This is the auto save feature...
// (function()
// {
//    var pluginName = 'ajaxAutoSave';
//    CKEDITOR.plugins.add( pluginName,
//    {
//       /**
//        * @param editor The editor instance to which the plugin bind.
//        */
//       init : function( editor )
//       {
//          var commandDefinition =
//          {
//             // This command works in both editing modes.
//             modes : { wysiwyg:1, source:1 },
//             // This command will not auto focus editor before execution.
//             editorFocus : false,
//             // This command requires no undo snapshot.
//             canUndo : false,
//             exec : function( editor )
//             {
//                // Simulate Do ajax post ...
//                setTimeout( function()
//                {
//                   // Simulate on ajax callback successful ...
//                   editor.resetDirty();
//                   // No more busy state.
//                   command.setState( CKEDITOR.TRISTATE_OFF );
//                }, 1000 );
//             }
//          };
//          var commandName = pluginName,
//             command = editor.addCommand( commandName, commandDefinition );
//          editor.ui.addButton( 'AjaxAutoSave',
//          {
//             label : editor.lang.ajaxAutoSaveButtonLabel,
//             command : commandName,
//             icon:this.path + 'images/ajaxAutoSaveClean.gif'
//          } );
//          // Schedule auto ajax save only if content is changed.
//          var autoAjaxSave = setInterval( function()
//          {
//             if( editor.checkDirty() )
//             {
//                editor.execCommand( commandName );
//                // Indicate busy state on this command.
//                command.setState( CKEDITOR.TRISTATE_DISABLED );
//             }
//          }, editor.config.autoAjaxSaveInterval || 30000 );
//          // Stop the job after editor is down.
//          editor.on( 'destroy', function()
//          {
//             clearInterval( autoAjaxSave );
//          } );
//       }
//    } );
// })();



/***************************************************************
* This function returns the configuration of the ckeditor as we would like it globally.
* To have a speific set up, we will need a nother config file, or some functions that define
* what is returned here dynamically.
***************************************************************/
var getCkConfig = function() {
  var config = {};
  // Define changes to default configuration here.
  // For the complete reference:
  // http://docs.ckeditor.com/#!/api/CKEDITOR.config

  // make sure that the spell-check-as-you-type is set to be on by default
  /*jshint camelcase: false */
  config.scayt_autoStartup = true;

  // add the font plugin
  config.extraPlugins = 'font,componentList';
  config.extraAllowedContent = 'component-list(*)[*]{*}';


  // The toolbar groups arrangement, optimized for two toolbar rows.
  config.toolbarGroups = [
    //
    {
      name: 'document',
      groups: [ 'mode', 'document', 'doctools' ]
    }
  //
  ];

  config.toolbar = 'Full';

  config.toolbar_Full =
  [
    ////////////////////////////////////////////////////////////////////////////
    // THIS IS THE FULL SET
    // { name: 'document', items : [ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ] },
    // { name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
    // { name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
    // { name: 'forms', items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton',
    // 'HiddenField' ] },
    // '/',
    // { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
    // { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv',
    // '-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
    // { name: 'links', items : [ 'Link','Unlink','Anchor' ] },
    // { name: 'insert', items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ] },
    // '/',
    // { name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
    // { name: 'colors', items : [ 'TextColor','BGColor' ] },
    // { name: 'tools', items : [ 'Maximize', 'ShowBlocks','-','About' ] }
    ////////////////////////////////////////////////////////////////////////////

    // { name: 'font', items: ['Format', 'Font', 'FontSize', 'Bold', 'Italic', 'Underline', '-', 'TextColor', 'BGColor' ]},
    // { name: 'styling', items: ['NumberedList', 'BulletedList', '-','Outdent','Indent','-','Blockquote','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock' ]},
    // { name: 'inserts', items: ['Image','Table','HorizontalRule','SpecialChar', '-', 'Link','Unlink',] },
    // { name: 'maximize', items: ['Maximize']}

    { name: 'document', items : [ 'Source','-','Save','DocProps','Preview','Print','-','Templates' ] },
    { name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
    { name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
    { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
    '/',
    { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv',
    '-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
    { name: 'links', items : [ 'Link','Unlink','Anchor' ] },
    { name: 'insert', items : [ 'Image','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ] },
    '/',
    { name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
    { name: 'colors', items : [ 'TextColor','BGColor' ] },
    { name: 'tools', items : [ 'Maximize', 'ShowBlocks','-','About',  ] },
    { name: 'CusomtTools', items: ['ComponentButton'] }
  //
  ];


  // Remove some buttons, provided by the standard plugins, which we don't
  // need to have in the Standard(s) toolbar.
  // config.removeButtons = "Styles,Source,Subscript,Superscript,Strike Through";
  // config.removeButtons = 'Underline,Subscript,Superscript';

  // Remove the "magicline" that suggests an inserted paragraph.
  // config.removePlugins = 'magicline,elementspath';

  // Set the most common block elements.
  config.enterMode = CKEDITOR.ENTER_BR;

  // Make dialogs simpler.
  // config.removeDialogTabs = 'image:advanced;link:advanced;table:advanced';

  //misc options
  //height adjusts the content height.
  config.height = '500px';

  return config;
};
