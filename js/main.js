$('.container, #title-text').mousemove(function(event){
    // get frame center
    var frameHeight = window.innerHeight / 2;
    var frameWidth = window.innerWidth * .2 / 2;

    // move container element (do i need)
    $('.container'). attr('style', `offset-position: ${frameWidth - (event.pageX - frameWidth) / 2}px, ${event.pageY / 1.1}px, 0px)`);
    
    // move thumbnails
    $('#P001').attr('style', `transform: translate3d(${event.pageX / 2.1 + 100}px, ${event.pageY / 3 + 100}px, 0px)`);
    $('#P002').attr('style', `transform: translate3d(${event.pageX / 3.5 - 140 }px, ${event.pageY / 3.5 + 90}px, 0px)`);
});


$(document).ready(function() {
    $('.test1').magnificPopup({
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
    
    $('.test2').magnificPopup({
        type: 'iframe',
        disableOn: 700,
        removalDelay: 900,
        preloader: false,
        fixedContentPos: false
    });
});
