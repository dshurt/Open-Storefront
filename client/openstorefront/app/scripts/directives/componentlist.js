'use strict';

app.directive('componentList', function () {
  return {
    template: '<div ng-class="listOfClasses"><table class="table table-striped" id="resultsTable"><tr ng-repeat="item in data"  style="margin-bottom: 20px;"><td style="white-space: inherit;"><div class="container-fluid"><div class="row" style="margin-left: 0px; margin-right: 0px"><div class="results-content"><div class="results-content-title"><div ng-click="clickCallback(item.id)" id="{{item.id}}"><div class="results-content-title-content" >{{item.name}}</div></div><raty read-only ng-class="{lastPopover:$last}" class="pull-left average-raty" id="star{{$index}}" style="min-width:110px; height: 100%;" score="{{item.stats.averageRating}}" number="5" path="images/raty/" data-container="body" data-toggle="popover" data-content="Average rating: {{item.stats.averageRating}} of {{item.stats.numberRatings}}<br>Comments: {{item.stats.comments}}<br>Views: {{item.stats.views}}"></raty></div><div class="results-content-description">{{item.shortdescription}}</div></div></div></div></td></tr</table></div>',
    restrict: 'AE',
    scope: {
      data: '=',
      clickCallback: '=',
      filters: '='
    },
    link: function postLink(scope, element, attrs) {
      scope._scopename = 'componentList';
      scope.listOfClasses = attrs.classList;
      console.log('scop', scope.data);
      
      // console.log('Attrs', attrs);
      // console.log('scope', scope);
      scope.clickCallback('test');
    }
  };
});
