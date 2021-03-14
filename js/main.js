$('.container, #title-text').mousemove(function(event){
    // get frame center
    var frameHeight = window.innerHeight / 2;
    var frameWidth = window.innerWidth * .2 / 2;

    // move container element (do i need)
    // $('.container'). attr('style', `offset-position: ${frameWidth - (event.pageX - frameWidth) / 2}px, ${event.pageY / 1.1}px, 0px)`);
    
    // move thumbnails
    $('#P001').attr('style', `transform: translate3d(${event.pageX / 2.1 + 100}px, ${event.pageY / 3 + 100}px, 0px)`);
    $('#P002').attr('style', `transform: translate3d(${event.pageX / 3.5 - 140 }px, ${event.pageY / 3.5 + 90}px, 0px)`);
    $('#P003').attr('style', `transform: translate3d(${(window.innerWidth - 570) - ((window.innerWidth - event.pageX) / 2.5)}px, ${(window.innerHeight - 80) - ((window.innerHeight - event.pageY) / 2.5)}px, 0px)`);
    $('#P004').attr('style', `transform: translate3d(${(window.innerWidth - 600) - ((window.innerWidth - event.pageX) / 3.5)}px, ${(window.innerHeight - 50) - ((window.innerHeight - event.pageY) / 3)}px, 0px)`); // clean for bottom right edge
});


$(document).ready(function() {
    $('.photo-single').magnificPopup({
        type: 'image',
        removalDelay: 900,
        preloader: false,
        callbacks: {
            beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
        },
        // other options
    });
    
    $('.video').magnificPopup({
        type: 'iframe',
        disableOn: 700,
        removalDelay: 900,
        preloader: false,
        fixedContentPos: false
    });

    $('.about').magnificPopup({
        type: 'iframe',
        disableOn: 700,
        removalDelay: 900,
        preloader: false,
        fixedContentPos: false
    });
});
