'use strict';

/* exported getCkConfig */

var getCkConfig = function() {
  var config = {};
  // Define changes to default configuration here.
  // For the complete reference:
  // http://docs.ckeditor.com/#!/api/CKEDITOR.config

  // make sure that the spell-check-as-you-type is set to be on by default
  /*jshint camelcase: false */
  config.scayt_autoStartup = true;

  // add the font plugin
  config.extraPlugins = 'font';

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
    // { name: 'font', items: ['Format', 'Font', 'FontSize', 'Bold', 'Italic', 'Underline', '-', 'TextColor', 'BGColor' ]},
    // { name: 'styling', items: ['NumberedList', 'BulletedList', '-','Outdent','Indent','-','Blockquote','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock' ]},
    // { name: 'inserts', items: ['Image','Table','HorizontalRule','SpecialChar', '-', 'Link','Unlink',] },
    // { name: 'maximize', items: ['Maximize']}

    { name: 'document', items : [ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ] },
    { name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
    { name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
    { name: 'forms', items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton',
    'HiddenField' ] },
    '/',
    { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
    { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv',
    '-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
    { name: 'links', items : [ 'Link','Unlink','Anchor' ] },
    { name: 'insert', items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ] },
    '/',
    { name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
    { name: 'colors', items : [ 'TextColor','BGColor' ] },
    { name: 'tools', items : [ 'Maximize', 'ShowBlocks','-','About' ] }
  //
  ];


  // Remove some buttons, provided by the standard plugins, which we don't
  // need to have in the Standard(s) toolbar.
  // config.removeButtons = "Styles,Source,Subscript,Superscript,Strike Through";
  // config.removeButtons = 'Underline,Subscript,Superscript';

  // Remove the "magicline" that suggests an inserted paragraph.
  // config.removePlugins = 'magicline,elementspath';

  // Set the most common block elements.
  // config.format_tags = 'p;h1;h2;h3;pre';

  // Make dialogs simpler.
  // config.removeDialogTabs = 'image:advanced;link:advanced;table:advanced';

  //misc options
  //height adjusts the content height.
  config.height = '500px';

  return config;
};
