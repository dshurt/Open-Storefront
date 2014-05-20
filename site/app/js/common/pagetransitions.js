var PageTransitions = (function() {

	var $main = $( '#pt-main' ),
		$pages = $main.children( 'div.pt-page' ),
		$iterate = $( '#showPageLeft' ),
		animcursor = 1,
		pagesCount = $pages.length,
    current = 0,
		next = 1,
    isAnimating = false,
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

    $(document).ready(function(){

      $(".showPageLeft").each(function() {
        $(this).on( 'click', function() {
          console.log("Clicked");

          if( isAnimating) {
            return false;
          }
          if( animcursor > 2 ) {
            animcursor = 1;
          }
          nextPage( animcursor );
          animcursor++;
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
    console.log("move", move);
    
    switch( animation ) {

      case 1:
        outClass = 'pt-page-moveToLeft';
        inClass = 'pt-page-moveFromRight';
        $('#showPageLeft').css("left", move+"px");
        $('#showPageLeft').css("right", "auto");
        $('#showPageLeft').toggleClass('current').animate({
          left: "-="+(move - 300)
          // left: "-="+move,
        }, 200, function() {
        // Animation complete.
        });
        break;
      case 2:
        outClass = 'pt-page-moveToRight';
        inClass = 'pt-page-moveFromLeft';

        $('#showPageLeft').css("left", "auto");
        $('#showPageLeft').css("right", (move - 300)+"px");
        $('#showPageLeft').toggleClass('current').animate({
          right: "-="+(move - 300)
        }, 200, function() {
        });
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
    console.log("We reset");
    
		resetPage( $outpage, $inpage );
    isAnimating = false;
	}

	function resetPage( $outpage, $inpage ) {
    console.log("Out class", $outpage.data('originalClassList'));
    console.log("In class", $inpage.data('originalClassList'));
    
		$outpage.attr( 'class', $outpage.data( 'originalClassList') + ' pt-page-not-current');
		$inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' pt-page-current' );
	}

	init();

	return { init : init };

})();