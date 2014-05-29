var PageTransitions = (function() {

	var $main = $( '#pt-main' ),
  $pages = $main.children( 'div.pt-page' ),
  $iterate = $( '#showPageLeft' ),
  animcursor = 1,
  pagesCount = $pages.length,
  current = 0,
  next = 1,
  isAnimating = false,
  isPage1 = true,
  history = '',
  animEndEventNames = {
   'WebkitAnimation' : 'webkitAnimationEnd',
   'OAnimation' : 'oAnimationEnd',
   'msAnimation' : 'MSAnimationEnd',
   'animation' : 'animationend'
 },
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],

    transEndEventNames = {
    'WebkitTransition' : 'webkitTransitionEnd',// Saf 6, Android Browser
    'MozTransition'    : 'transitionend',      // only for FF < 15
    'transition'       : 'transitionend'       // IE10, Opera, Chrome, FF 15+, Saf 7+
  },

    //transition end event names
    transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];
		// support css animations
		support = Modernizr.cssanimations;

   function init() {


    $pages.each( function() {
     var $page = $( this );
     $page.removeClass("pt-page-current");
     $page.removeClass("pt-page-not-current");
     $page.data( 'originalClassList', $page.attr( 'class' ) );
   } );

    $pages.eq( current ).addClass( 'pt-page-current' );
    $pages.eq( next ).addClass( 'pt-page-not-current' );

    function animate() {
      if( animcursor > 2 ) {
        animcursor = 1;
      }
      nextPage( animcursor );
      animcursor++;
      isPage1 = !isPage1;
    }
    $(document).ready(function(){
      $(".showPageLeftToggle").each(function() {
        $(this).on( 'click', function() {
          
          if( isAnimating || ( history !=='' && history !== $(this).attr('id') ) ) { // if the history is not the same, don't animate
          
            if (isPage1 && !isAnimating) { // unless the page is closed
              animate();
            }
            history = $(this).attr('id'); // update the history
            return false;
          }
          animate();
          history = $(this).attr('id');
        });
        $(this).toggleClass("showPageLeftToggle")
      });
      $(".showPageRight").each(function() {
        $(this).on( 'click', function() {
          if( isAnimating) {
            return false;
          }
          animate();
        });
      });
    });

  }

  function nextPage( animation ) {

    if( isAnimating ) {
      return false;
    }

    isAnimating = true;
    
    var $currPage = $pages.eq( current );

    if( current < pagesCount - 1 ) {
      ++current;
    }
    else {
      current = 0;
    }
    if( next < pagesCount - 1 ) {
      ++next;
    }
    else {
      next = 0;
    }

    var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' ),
    outClass = '', inClass = '';
    var move = $(window).width();

    var leftOffset = 300;
    var rightOffset = 0;
    if (toggled){
      if (move < 768)
        leftOffset = 0;
      else
        leftOffset = 600;
    }
    switch( animation ) {
      case 1:
      outClass = 'pt-page-moveToLeft';
      inClass = 'pt-page-moveFromRight';
      $('#showPageRight').css("left", move+"px");
      $('#showPageRight').css("right", "auto");
      $('#showPageRight').toggleClass('current').animate({
        left: "300px",
        right: ""
          // left: "-="+move,
        }, 200, function() {
          $('#showPageRight').html("<i class='fa fa-caret-right'></i>")
        // Animation complete.
      });
      $('.filters').toggleClass("current");
      break;
      case 2:
      outClass = 'pt-page-moveToRight';
      inClass = 'pt-page-moveFromLeft';

      $('#showPageRight').css("left", "auto");
      $('#showPageRight').css("right", (move - leftOffset)+"px");
      $('#showPageRight').toggleClass('current').animate({
        right: "0px",
        left: $('#page1').width - 300 + 'px'
      }, 200, function() {
        $('#showPageRight').html("<i class='fa fa-caret-left'></i>")
      });
      $('.filters').toggleClass("current");
      break;
    }

    $currPage.addClass( outClass ).on( animEndEventName, function() {
      $currPage.off( animEndEventName );
      onEndAnimation( $currPage, $nextPage );
    }).on( transEndEventName, function() {
      $currPage.off( transEndEventName );
      onEndAnimation( $currPage, $nextPage );
    } );

    $nextPage.addClass( inClass ).on( animEndEventName, function() {
      $nextPage.off( animEndEventName );
      onEndAnimation( $currPage, $nextPage );
    }).on( transEndEventName, function() {
      $nextPage.off( transEndEventName );
      onEndAnimation( $currPage, $nextPage );
    } );

    if( !support ) {
     onEndAnimation( $currPage, $nextPage );
   }

 }

 function onEndAnimation( $outpage, $inpage ) {
  resetPage( $outpage, $inpage );
  isAnimating = false;
}

function resetPage( $outpage, $inpage ) {
  $outpage.attr( 'class', $outpage.data( 'originalClassList') + ' pt-page-not-current');
  $inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' pt-page-current' );
}

init();

return { init : init };

})();

var elementPosition = $('.filters').offset();
var windowChange1 = true;
var windowChange2 = true;
var windowHeight;
var toggled = false;
var resetHeight = function(){
  elementPosition = $('.filters').offset();
  if (windowChange1)
  {
    windowHeight = $(window).height();
    windowChange1 = false;
  }
  if (windowChange2)
  {
    windowHeight = $(window).height();
    windowChange2 = false;
  }
  var offset = (0 - ($(window).scrollTop() - elementPosition.top))
  var height = $(window).height() - offset;
  $('.filters').css({'position':'absolute', 'top':'52px'});
  $('.filtersOverride').css({'height': (windowHeight - 52) + 'px'})
  $('#page2').css({'height': height + 'px', 'top': /*(0 - (52 - offset)) + 'px'*/ '52px'})
  $('#page1').css({'height': height + 'px', 'top': /*(0 - (52 - offset)) + 'px'*/ '52px'})
}
$(window).scroll(function(){
  if (windowChange1)
  {
    windowHeight = $(window).height();
    windowChange1 = false;
  }
  resetHeight();
});
$(window).resize(function(){
  windowChange1 = true;
  windowChange2 = true;
  windowHeight = $(window).height();
  resetHeight();
});

window.onload = function(){
  resetHeight();
}

$(document).ready(function(){
  if ($('[data-toggle="popover"]').length > 2)
    $('.lastPopover[data-toggle="popover"]').popover({trigger: 'hover','placement': 'top', 'html': true});
  $('[data-toggle="popover"]').popover({trigger: 'hover','placement': 'bottom', 'html': true});


  if ($(window).width() > 767)
  {
    toggled = true;
    showFilters();
  }
  $("#showFilters").on("click", function(){
    if (!toggled){
      toggled = true;
      showFilters();
    }
    else {
      toggled = false;
      hideFilters();
    }
  });
  function showFilters(){

    $('.filters').toggleClass("filtersOverride");
    $( '.filterButton' ).animate({
      right: "+=100px",
      width: "300px"
    }, 300, function() {
    });
    $( '.filtersOverride' ).animate({
      left: "+=300px"
    }, 300, function() {
      $('#showFilters').html("Filters <i class='fa fa-caret-left'></i>");
    });
    $( '#pt-main' ).animate({
      'padding-left': "+=300px"
    }, 200, function() {
    });
    $( '#page1' ).animate({
      'left': "+=300px"
    }, 200, function() {
      $( '#page1' ).animate({
        'padding-top': "-=40px",
      }, 50, function() {
      });
    });
    $(".pt-page-2").animate({
      'padding-left': '+=300px',
    }, 200, function(){
    });
    $( '#showPageRight' ).animate({
      'margin-left': "+=300px"
    }, 200, function() {
    });
  }
  function hideFilters(){

    $( '.filterButton' ).animate({
      right: "-=100px",
      width: "100px"
    }, 300, function() {
    });
    $( '.filtersOverride' ).animate({
      left: "-=300px"
    }, 300, function() {
      $('#showFilters').html("Filters <i class='fa fa-caret-right'></i>");
      $('.filters').toggleClass("filtersOverride");
    });
    $( '#page1' ).animate({
      'padding-top': "+=40px",
    }, 50, function() {
      $( '#page1' ).animate({
        'left': "-=300px"
      }, 200, function() {
      });
      $( '#pt-main' ).animate({
        'padding-left': "-=300px"
      }, 200, function() {
      });
    });
    setTimeout(function() {
      $( '#showPageRight' ).animate({
        'margin-left': "-=300px"
      }, 200, function() {
      });
      $(".pt-page-2").animate({
        'padding-left': '-=300px',
      }, 200, function(){
      });
    }, 100);
  }

});