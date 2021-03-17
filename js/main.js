$(document).mousemove(function(event){
    // get frame center
    var frameHeight = window.innerHeight;
    var frameWidth = window.innerWidth;
    var mouseVh = event.pageY / frameHeight * 100;
    var mouseVw = event.pageX / frameWidth * 100;

    // // move container -- UPDATE DIV SIZE TO TURN ON / OFF 
    // let mW = ((((event.pageX)*100)/frameWidth).toFixed(3))-50;
    // let mH = ((((event.pageY)*100)/frameHeight).toFixed(3))-50;
    // $(".container").attr('style', `transform: translate3d(${-mW/2}%, ${-mH/2}%, 0px)`); // if i turn this off, i need to update div size
    
    // // move thumbnails
    // $('#P001').attr('style', `transform: translate3d(${mouseVw * 2 - 80}%, ${mouseVh * 2}%, 0px)`); // top left
    // $('#P002').attr('style', `transform: translate3d(${mouseVw * 3}%, ${mouseVh / 5}%, 0px)`); // top left
    // $('#P003').attr('style', `transform: translate3d(${((100 + mouseVw) * 1.3 - 100)}%, ${(mouseVh * 0.8 + 150)}%, 0px)`); // bottom right corner
    // $('#P004').attr('style', `transform: translate3d(${-mW/3}%, ${mH/5 + 350}%, 0px)`); // bottom right
    // $('#P005').attr('style', `transform: translate3d(${(((100 + mouseVw) / 2) - 80)}%, ${mouseVh / 3 }%, 0px)`); // top right
    // $('#P006').attr('style', `transform: translate3d(${mouseVw / 4 - 80}%, ${((100 + mouseVh) / 1.5 - 45)}%, 0px)`); // bottom left

    // move thumbnails
    $('#P001').attr('style', `transform: translate3d(${mouseVw / 2}%, ${mouseVh / 2}%, 0px)`); // top left
    $('#P002').attr('style', `transform: translate3d(${mouseVw / 2.5 + 5}%, ${mouseVh / 2.5 - 2}%, 0px)`); // top left
    $('#P003').attr('style', `transform: translate3d(${((100 + mouseVw) / 3 - 17)}%, ${((100 + mouseVh) / 2 - 19)}%, 0px)`); // bottom right corner
    $('#P004').attr('style', `transform: translate3d(${((100 + mouseVw) / 4 - 35)}%, ${((100 + mouseVh) / 3 + 5)}%, 0px)`); // bottom right
    $('#P005').attr('style', `transform: translate3d(${(((100 + mouseVw) / 2) - 80)}%, ${mouseVh / 3 }%, 0px)`); // top right
    $('#P006').attr('style', `transform: translate3d(${mouseVw / 4 - 80}%, ${((100 + mouseVh) / 1.5 - 45)}%, 0px)`); // bottom left

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

    $('.about-link').magnificPopup({
        type:'inline',
        midClick: true,
        disableOn: 700,
        removalDelay: 900
    });

    $('.contact-link').magnificPopup({ // could compress this into about-link
        type:'inline',
        midClick: true,
        removalDelay: 900
    });
});
