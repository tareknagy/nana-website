$('.container, #title-text').mousemove(function(event){
    // get frame center
    // var frameHeight = window.innerHeight / 2; // might not need these two
    // var frameWidth = window.innerWidth * .2 / 2;
    var frameHeight = window.innerHeight;
    var frameWidth = window.innerWidth;
    var mouseVh = event.pageY / frameHeight * 100;
    var mouseVw = event.pageX / frameWidth * 100;

    // move container element (do i need)
    // $('.container'). attr('style', `offset-position: ${frameWidth - (event.pageX - frameWidth) / 2}px, ${event.pageY / 1.1}px, 0px)`);
    
    // move thumbnails
    $('#P001').attr('style', `transform: translate3d(${mouseVw / 2}vw, ${mouseVh / 2}vh, 0px)`); // top left
    $('#P002').attr('style', `transform: translate3d(${mouseVw / 2.5 + 5}vw, ${mouseVh / 2.5 - 2}vh, 0px)`); // top left
    $('#P003').attr('style', `transform: translate3d(${((100 + mouseVw) / 3 - 17)}vw, ${((100 + mouseVh) / 2 - 19)}vh, 0px)`); // bottom right corner
    $('#P004').attr('style', `transform: translate3d(${((100 + mouseVw) / 4 - 35)}vw, ${((100 + mouseVh) / 3 + 5)}vh, 0px)`); // bottom right
    $('#P005').attr('style', `transform: translate3d(${(((100 + mouseVw) / 2) - 80)}vw, ${mouseVh / 3 }vh, 0px)`); // top right
    $('#P006').attr('style', `transform: translate3d(${mouseVw / 4 - 80}vw, ${((100 + mouseVh) / 1.5 - 45)}vh, 0px)`); // bottom left
    // $('#P001').attr('style', `transform: translate3d(${event.pageX / 2.1 + 100}px, ${event.pageY / 3 + 100}px, 0px)`);  
    // $('#P002').attr('style', `transform: translate3d(${event.pageX / 3.5 - 140 }px, ${event.pageY / 3.5 + 90}px, 0px)`);
    // $('#P003').attr('style', `transform: translate3d(${(window.innerWidth - 570) - ((window.innerWidth - event.pageX) / 2.5)}px, ${(window.innerHeight - 80) - ((window.innerHeight - event.pageY) / 2.5)}px, 0px)`);
    // $('#P004').attr('style', `transform: translate3d(${(window.innerWidth - 590) - ((window.innerWidth - event.pageX) / 3.5)}px, ${(window.innerHeight - 20) - ((window.innerHeight - event.pageY) / 3)}px, 0px)`); // clean for bottom right edge
    // $('#P005').attr('style', `transform: translate3d(${(window.innerWidth - 750) - ((window.innerWidth - event.pageX) / 2.5)}px, ${event.pageY / 4 + 90}px, 0px)`);
    // $('#P006').attr('style', `transform: translate3d(${event.pageX / 3.5 - 750 }px, ${(window.innerHeight - 20) - ((window.innerHeight - event.pageY) / 2.2)}px, 0px)`); // clean for bottom right edge
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
    });
    
    $('.video').magnificPopup({
        type: 'iframe',
        disableOn: 700,
        removalDelay: 900,
        preloader: false,
        fixedContentPos: false
    });

    $('.about').magnificPopup({
        type: 'iframe', // need to chage type
        disableOn: 700,
        removalDelay: 900,
        preloader: false,
        fixedContentPos: false
    });
});
