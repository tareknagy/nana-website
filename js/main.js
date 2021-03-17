var moveRandom = false; 
var simulatedPosition = 0;

function moveMouse (x, y, i) {
    if (moveRandom === true) {
        // set round intervals
        const simulatedMouse = [[20, 50], [50, 70], [80, 50], [50, 30]];
        // function 
        setTimeout(function() {
            var mouseVw = simulatedMouse[simulatedPosition][1];
            var mouseVh = simulatedMouse[simulatedPosition][0];
            // move thumbnails
            $('#P001').attr('style', `transform: translate3d(${mouseVw / 2}vw, ${mouseVh / 2}vh, 0px); transition: transform 2000ms`); // top left
            $('#P002').attr('style', `transform: translate3d(${mouseVw / 2.5 + 5}vw, ${mouseVh / 2.5 - 2}vh, 0px); transition: transform 2000ms`); // top left
            $('#P003').attr('style', `transform: translate3d(${((100 + mouseVw) / 3 - 17)}vw, ${((100 + mouseVh) / 2 - 19)}vh, 0px); transition: transform 2000ms`); // bottom right corner
            $('#P004').attr('style', `transform: translate3d(${((100 + mouseVw) / 4 - 35)}vw, ${((100 + mouseVh) / 3 + 5)}vh, 0px); transition: transform 2000ms`); // bottom right
            $('#P005').attr('style', `transform: translate3d(${(((100 + mouseVw) / 2) - 80)}vw, ${mouseVh / 3 }vh, 0px); transition: transform 2000ms`); // top right
            $('#P006').attr('style', `transform: translate3d(${mouseVw / 4 - 80}vw, ${((100 + mouseVh) / 1.5 - 45)}vh, 0px); transition: transform 2000ms`); // bottom left
            // update values and loop
            if (simulatedPosition + 1 === simulatedMouse.length) {
                simulatedPosition = 0;
            } else {
                simulatedPosition++;
            };
            // re-run function with new values
            moveMouse(mouseVh, mouseVw, simulatedPosition);
        }, 1900);
    }
}

$(document).mousemove(function(event){
    // stop random movement
    moveRandom = false; 

    // get frame center
    var frameWidth = window.innerWidth;
    var frameHeight = window.innerHeight;
    var mouseVw = event.pageX / frameWidth * 100;
    var mouseVh = event.pageY / frameHeight * 100;

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
    $('#P001').attr('style', `transform: translate3d(${mouseVw * .2}vw, ${mouseVh * .2}vh, 0px)`); // top left
    $('#P002').attr('style', `transform: translate3d(${mouseVw * .3 + 15}vw, ${mouseVh * .3 + 5}vh, 0px)`); // top left
    $('#P003').attr('style', `transform: translate3d(${mouseVw * .35 + 25}vw, ${mouseVh * .45 - 3}vh, 0px)`); // bottom right corner
    $('#P004').attr('style', `transform: translate3d(${mouseVw * .3 + 45}vw, ${mouseVh * .2 + 4}vh, 0px)`); // bottom right
    $('#P005').attr('style', `transform: translate3d(${mouseVw * .2 + 60}vw, ${mouseVh *.42 - 1}vh, 0px)`); // top right
    $('#P006').attr('style', `transform: translate3d(${mouseVw / 4 - 80}vw, ${((100 + mouseVh) / 1.5 - 45)}vh, 0px)`); // bottom left
    $('#P007').attr('style', `transform: translate3d(${mouseVw / 2}vw, ${mouseVh / 2}vh, 0px)`); // top left
    $('#P008').attr('style', `transform: translate3d(${mouseVw / 2.5 + 5}vw, ${mouseVh / 2.5 - 2}vh, 0px)`); // top left
    $('#P009').attr('style', `transform: translate3d(${((100 + mouseVw) / 3 - 17)}vw, ${((100 + mouseVh) / 2 - 19)}vh, 0px)`); // bottom right corner
    $('#P010').attr('style', `transform: translate3d(${((100 + mouseVw) / 4 - 35)}vw, ${((100 + mouseVh) / 3 + 5)}vh, 0px)`); // bottom right
    $('#P011').attr('style', `transform: translate3d(${(((100 + mouseVw) / 2) - 80)}vw, ${mouseVh / 3 }vh, 0px)`); // top right
    $('#P012').attr('style', `transform: translate3d(${mouseVw / 4 - 80}vw, ${((100 + mouseVh) / 1.5 - 45)}vh, 0px)`); // bottom left
});

$(document).mouseleave(function() {
    // start random movement
    moveRandom = true;
    moveMouse();
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
