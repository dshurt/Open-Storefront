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

//overrides
Ext.define('Opencat.window.override', {
    override: 'Ext.window.Window',
    ghost: false,
    closeAction: 'hide'
});


//defaults
Ext.Ajax.timeout = 120000;
Ext.tip.QuickTipManager.init();


//Core Uitl
var Core = {
	msgCt: false	,
			
	createBox: function createBox(t, s){
	       return '<div class="msg"><h3>' + t + '</h3><p>' + s + '</p></div>';
	},
	
	popmsg: function(title, format){
		if(!this.msgCt){
			this.msgCt = Ext.DomHelper.insertFirst(document.body, {id:'msg-div'}, true);
		}
		var s = Ext.String.format.apply(String, Array.prototype.slice.call(arguments, 1));
		var m = Ext.DomHelper.append(this.msgCt, this.createBox(title, s), true);
		m.hide();
		m.slideIn('t').ghost("t", { delay: 1000, remove: true});
        }
	
};