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




/***************************************************************
* TODO:: Make this directive work in the modal on the results page.
***************************************************************/





app.directive('componentList', ['business', function (Business) {
  var uniqueId = 1;
  return {
    template: '<div class="hideMore"><div class="hideMoreArticle"><input ng-show="hasMoreThan3 && showMore" type="checkbox" role="button" class="read_more"><label ng-show="hasMoreThan3 && showMore" data-toggle="tooltip" data-placement="top" title="Click here to show more!" ng-click="setShown()" class="read_more bottomCircleBase"><span><i class="fa fa-arrow-down"></i></span><span><i class="fa fa-arrow-up"></i></span></label><br /><div ng-class="listOfClasses"><div ng-show="isTitle" class="componentListTitle">{{title}}</div><table class="table table-striped" id="resultsTable"><tr ng-repeat="item in data" class="moreSection" style="margin-bottom: 20px;"><td style="white-space: inherit;"><div class="container-fluid"><div class="row" style="margin-left: 0px; margin-right: 0px"><div class="results-content"><div class="results-content-title"><div ng-click="clickCallback(item.id)" id="{{item.id}}"><div class="results-content-title-content" >{{item.name}}</div></div><raty read-only ng-class="{lastPopover:$last}" class="pull-left average-raty" id="star{{$index style="min-width:110px; height: 100%;" score="{{item.stats.averageRating}}" number="5" pathimages/raty/" data-container="body" data-toggle="popover" data-content="Average rating: {{itemstats.averageRating}} of {{item.stats.numberRatings}}<br>Comments: {{item.stats.comments}}<br>Views: {{item.stats.views}}"></raty></div><br><div class="results-content-description">&nbsp;{{item.shortdescription}}</div></div></div></div></td></tr></table></div></div></div>',
    restrict: 'AE',
    scope: {
      data: '=',
      clickCallback: '=',
      filters: '=',
      hideMore: '@'
    },
    link: function postLink(scope, element, attrs) {

      /***************************************************************
      * Here we are setting up the id's of different sections so that our current
      * 'more' button implementation will work correctly.
      *
      * The problem is that directives shar scope unless implicitly told that they
      * don't, and then when they don't share scope, they just reset every time they're
      * made anyway, so they end up looking like copies... (which is a problem for id's)
      ***************************************************************/
      var item = 'componentList' + uniqueId++;
      element.find('.hideMore').attr('id', item);

      item = 'read_more' + uniqueId++;
      element.find('input.read_more').attr('id', item);
      element.find('label.read_more').attr('for', item);
      

      //now we set up the scope variables
      scope.hasMoreThan3 = false;
      scope._scopename = 'componentList';
      scope.isShownClass = null;
      scope.isTitle = false;
      scope.listOfClasses = attrs.classList;


      /***************************************************************
      * This function is used to watch the data list. If it changes, we may need
      * to adjust the layout
      ***************************************************************/
      scope.$watch('data', function() {
        if(scope.data.length > 3) {
          scope.hasMoreThan3 = true;
        }
        scope.addMore();
      });


      /***************************************************************
      * Here we handle attribute set ups. If an attribute is set, it will most likely
      * override something else.
      ***************************************************************/
      if (attrs.type !== null && attrs.type !== undefined && attrs.type !== '') {
        scope.data = Business.getData();
        _.each(scope.data, function(item){
          item.shortdescription = item.description.match(/^(.*?)[.?!]\s/)[1] + '.';
        });
      }
      if (attrs.title !== null && attrs.title !== undefined && attrs.title !== '') {
        scope.isTitle = true;
        scope.title = attrs.title;
      }

      /***************************************************************
      * This funciton gives the correct component list the active class that
      * will open the content to full status.
      ***************************************************************/
      scope.setShown = function() {
        var id = element.find('.hideMore').attr('id');
        $('#' + id).toggleClass('active');
      };

      /***************************************************************
      * This function watches the scope variable for 'hidemore', if it changes
      * we need to recall the 'addMore' function
      ***************************************************************/
      scope.$watch('hideMore', function() {
        scope.addMore();
      });

      /***************************************************************
      * This function sets up the classes that handle the 'readmore'
      * capabilities
      ***************************************************************/
      scope.addMore = function() {
        if (scope.hideMore !== undefined && scope.hideMore !== null){
          element.find('.hideMore').addClass('moreContent');
          element.find('.hideMoreArticle').addClass('moreContentArticle');
          element.find('.moreSection').each(function() {
            $(this).addClass('moreContentSection');
          });
          scope.showMore = true;
        }
      };

      /***************************************************************
      * This function sets up the tooltips that are available on this page.
      ***************************************************************/
      scope.init = function() {
        $('[data-toggle="tooltip"').tooltip();
      };
      
      scope.init();

    }
  };
}]);
