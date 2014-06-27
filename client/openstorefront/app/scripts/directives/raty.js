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

app.directive('raty', function () {
  return {
    restrict: 'AE',
    link: function(scope, elem, attrs) {
      /***************************************************************
      * This function watches the score, and if it changes we do stuff.
      ***************************************************************/
      attrs.$observe('score', function(data) { /*jshint unused:false*/

        /***************************************************************
        * We set up variables...
        * params: param name -- param description
        * returns: Return name -- return description
        ***************************************************************/
        var readOnly = false;
        var imagePath = 'images/raty';


        /***************************************************************
        * We override variables when the attirbutes to replace them have been set
        ***************************************************************/
        if (attrs.readOnly !== undefined && attrs.readOnly !== null){
          readOnly = true;
        }
        if (attrs.path !== undefined && attrs.path !== null) {
          imagePath = attrs.path;
        }
        if (scope[attrs.ngmodel] !== undefined && scope[attrs.ngmodel] !== null && scope[attrs.ngmodel] !== '') {
          scope.$watch(scope[attrs.ngmodel], function() {
          });
        }

        /***************************************************************
        * And we remake the elements.
        ***************************************************************/
        $(elem).raty({

          //This is a complete list of what is available for configuarion on the raty directive.

          // cancel      : false                                          // Creates a cancel button to cancel the rating.
          // cancelClass : 'raty-cancel'                                  // Name of cancel's class.
          // cancelHint  : 'Cancel this rating!'                          // The cancel's button hint.
          // cancelOff   : 'cancel-off.png'                               // Icon used on active cancel.
          // cancelOn    : 'cancel-on.png'                                // Icon used inactive cancel.
          // cancelPlace : 'left'                                         // Cancel's button position.
          // click       : undefined                                      // Callback executed on rating click.
          // half        : false                                          // Enables half star selection.
          // halfShow    : true                                           // Enables half star display.
          // hints       : ['bad', 'poor', 'regular', 'good', 'gorgeous'] // Hints used on each star.
          // iconRange   : undefined                                      // Object list with position and icon on and off to do a mixed icons.
          // mouseout    : undefined                                      // Callback executed on mouseout.
          // mouseover   : undefined                                      // Callback executed on mouseover.
          // noRatedMsg  : 'Not rated yet!'                               // Hint for no rated elements when it's readOnly.
          // number      : 5                                              // Number of stars that will be presented.
          // numberMax   : 20                                             // Max of star the option number can creates.
          // path        : undefined                                      // A global locate where the icon will be looked.
          // precision   : false                                          // Enables the selection of a precision score.
          // readOnly    : false                                          // Turns the rating read-only.
          // round       : { down: .25, full: .6, up: .76 }               // Included values attributes to do the score round math.
          // score       : undefined                                      // Initial rating.
          // scoreName   : 'score'                                        // Name of the hidden field that holds the score value.
          // single      : false                                          // Enables just a single star selection.
          // space       : true                                           // Puts space between the icons.
          // starHalf    : 'star-half.png'                                // The name of the half star image.
          // starOff     : 'star-off.png'                                 // Name of the star image off.
          // starOn      : 'star-on.png'                                  // Name of the star image on.
          // target      : undefined                                      // Element selector where the score will be displayed.
          // targetFormat: '{score}'                                      // Template to interpolate the score in.
          // targetKeep  : false                                          // If the last rating value will be keeped after mouseout.
          // targetScore : undefined                                      // Element selector where the score will be filled, instead of creating a new hidden field (scoreName option).
          // targetText  : ''                                             // Default text setted on target.
          // targetType  : 'hint'                                         // Option to choose if target will receive hint o 'score' type.
          // starType    : 'img'                                          // The type of the star, img as default, could also be whatever element


          //This is our current setup.
          score: attrs.score,
          number: attrs.number,
          path: imagePath,
          readOnly: readOnly,
          cancel  : !readOnly,
          // cancelOff : 'cancel-custom-off.png',
          // cancelOn  : 'cancel-custom-on.png',
          noRatedMsg : 'This component hasn not been rated yet',
          half     : true,
          // starHalf : 'star-half.png',
          starType : 'i',
          hints: ['Bad', 'Below Average', 'Average', 'Above Average', 'Great'],
          click: function(score, event) {
            scope[attrs.ngModel] = score;
            scope.$apply();
          }
        });
      }, true);
    }
  };
});
