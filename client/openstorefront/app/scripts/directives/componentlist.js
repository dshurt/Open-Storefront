'use strict';

app.directive('componentList', ['business', function (Business) {
  var uniqueId = 1;
  return {
    template: '<div class="hideMore"><div class="hideMoreArticle"><input ng-show="hasMoreThan3 && showMore" type="checkbox" role="button" class="read_more"><label ng-show="hasMoreThan3 && showMore" data-toggle="tooltip" data-placement="top" title="Click here to show more!" ng-click="setShown()" class="read_more bottomCircleBase"><span><i class="fa fa-arrow-down"></i></span><span><i class="fa fa-arrow-up"></i></span></label><br /><div ng-class="listOfClasses"><div ng-show="isTitle" class="componentListTitle">{{title}}</div><table class="table table-striped" id="resultsTable"><tr ng-repeat="item in data" class="moreSection" style="margin-bottom: 20px;"><td style="white-space: inherit;"><div class="container-fluid"><div class="row" style="margin-left: 0px; margin-right: 0px"><div class="results-content"><div class="results-content-title"><div ng-click="clickCallback(item.id)" id="{{item.id}}"><div class="results-content-title-content" >{{item.name}}</div></div><raty read-only ng-class="{lastPopover:$last}" class="pull-left average-raty" id="star{{$index style="min-width:110px; height: 100%;" score="{{item.stats.averageRating}}" number="5" pathimages/raty/" data-container="body" data-toggle="popover" data-content="Average rating: {{itemstats.averageRating}} of {{item.stats.numberRatings}}<br>Comments: {{item.stats.comments}}<br>Views: {{item.stats.views}}"></raty></div><div class="results-content-description">{{item.shortdescription}}</div></div></div></div></td></tr></table></div></div></div>',
    restrict: 'AE',
    scope: {
      data: '=',
      clickCallback: '=',
      filters: '=',
      hideMore: '@'
    },
    link: function postLink(scope, element, attrs) {
      var item = 'componentList' + uniqueId++;
      element.find('.hideMore').attr('id', item);

      item = 'read_more' + uniqueId++;
      element.find('input.read_more').attr('id', item);
      element.find('label.read_more').attr('for', item);
      
      scope.hasMoreThan3 = false;

      scope.$watch('data', function() {
        if(scope.data.length > 3) {
          scope.hasMoreThan3 = true;
        }
        scope.addMore();
      });

      scope._scopename = 'componentList';
      scope.isShownClass = null;
      scope.isTitle = false;
      scope.listOfClasses = attrs.classList;
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


      scope.setShown = function() {
        var id = element.find('.hideMore').attr('id');
        $('#' + id).toggleClass('active');
      };

      scope.$watch('hideMore', function() {
        scope.addMore();
      });

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

      scope.init = function() {
        $('[data-toggle="tooltip"').tooltip();
      };
      
      scope.init();

    }
  };
}]);
