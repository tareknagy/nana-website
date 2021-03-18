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
            $('#P001').attr('style', `transform: scale(${1.5}) translate3d(${mouseVw / 2.1 - 5}vw, ${mouseVh / 1.5}vh, 0px); transition: transform 2000ms`); // top left
            $('#P002').attr('style', `transform: scale(${1.5}) translate3d(${mouseVw / 2.5 + 5}vw, ${mouseVh / 2.5 - 2}vh, 0px); transition: transform 2000ms`); // top left
            $('#P003').attr('style', `transform: scale(${1.5}) translate3d(${((100 + mouseVw) / 3 - 17)}vw, ${((100 + mouseVh) / 2 - 19)}vh, 0px); transition: transform 2000ms`); // bottom right corner
            $('#P004').attr('style', `transform: scale(${1.5}) translate3d(${((100 + mouseVw) / 4 - 35)}vw, ${((100 + mouseVh) / 3 + 5)}vh, 0px); transition: transform 2000ms`); // bottom right
            $('#P005').attr('style', `transform: scale(${1.5}) translate3d(${(((100 + mouseVw) / 2) - 80)}vw, ${mouseVh / 3 }vh, 0px); transition: transform 2000ms`); // top right
            $('#P006').attr('style', `transform: scale(${1.5}) translate3d(${mouseVw / 4 - 80}vw, ${((100 + mouseVh) / 1.5 - 45)}vh, 0px); transition: transform 2000ms`); // bottom left
            $('#P007').attr('style', `transform: scale(${1.5}) translate3d(${((100 + mouseVw) / 3)}vw, ${((100 + mouseVh) / 3 + - 20)}vh, 0px); transition: transform 2000ms`); // bottom right
            $('#P008').attr('style', `transform: scale(${1.5}) translate3d(${((100 + mouseVw) / 4 + 20)}vw, ${((100 + mouseVh) / 4 + + 10)}vh, 0px); transition: transform 2000ms`); // top right
            $('#P009').attr('style', `transform: scale(${1.5}) translate3d(${((100 + mouseVw) / 2 - 15)}vw, ${((100 + mouseVh) / 3.2 + - 35)}vh, 0px); transition: transform 2000ms`); // bottom left
            $('#P010').attr('style', `transform: scale(${1.5}) translate3d(${((100 + mouseVw) / 4)}vw, ${((100 + mouseVh) / 3 - 60)}vh, 0px); transition: transform 2000ms`); // bottom right
            $('#P011').attr('style', `transform: scale(${1.5}) translate3d(${((100 + mouseVw) / 3 - 50)}vw, ${((100 + mouseVh) / 2 - 80)}vh, 0px); transition: transform 2000ms`); // bottom right corner
            $('#P012').attr('style', `transform: scale(${1.5}) translate3d(${((100 + mouseVw) / 4) - 50}vw, ${((100 + mouseVh) / 2 - 1)}vh, 0px); transition: transform 2000ms`); // bottom right corner
            $('#P013').attr('style', `transform: scale(${1.5}) translate3d(${50}vw, ${120}vh, 0px); transition: transform 2000ms`); // bottom right corner
            $('#P014').attr('style', `transform: scale(${1.5}) translate3d(${50}vw, ${-50}vh, 0px); transition: transform 2000ms`); // bottom right corner
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
    var speedVw = Math.abs(50 - mouseVw);
    var speedVh = Math.abs(50 - mouseVh);

    // // move container -- UPDATE DIV SIZE TO TURN ON / OFF 
    // let mW = ((((event.pageX)*100)/frameWidth).toFixed(3))-50;
    // let mH = ((((event.pageY)*100)/frameHeight).toFixed(3))-50;
    // $(".container").attr('style', `transform: translate3d(${-mW/2}%, ${-mH/2}%, 0px)`); // if i turn this off, i need to update div size
    
    // // move thumbnails
    // $('#P001').attr('style', `transform: translate3d(${mouseVw * .2}vw, ${mouseVh * .2}vh, 0px)`); // top left
    // $('#P002').attr('style', `transform: translate3d(${mouseVw * .3 + 15}vw, ${mouseVh * .3 + 5}vh, 0px)`);
    // $('#P003').attr('style', `transform: translate3d(${mouseVw * .35 + 25}vw, ${mouseVh * .45 - 3}vh, 0px)`); 
    // $('#P004').attr('style', `transform: translate3d(${mouseVw * .3 + 45}vw, ${mouseVh * .2 + 6}vh, 0px)`); 
    // $('#P005').attr('style', `transform: translate3d(${mouseVw * .2 + 60}vw, ${mouseVh *.42 - 1}vh, 0px)`); // top right
    // $('#P006').attr('style', `transform: translate3d(${mouseVw * .15 - 5}vw, ${mouseVh * .33 + 15}vh, 0px)`); // left side
    // $('#P007').attr('style', `transform: translate3d(${mouseVw * .25 + 8}vw, ${mouseVh * .25 + 35}vh, 0px)`); // left side
    // $('#P008').attr('style', `transform: translate3d(${mouseVw * .15 + 62}vw, ${mouseVh *.50 + 15}vh, 0px)`); // right side
    // $('#P009').attr('style', `transform: translate3d(${mouseVw * .25 + 55}vw, ${mouseVh *.50 + 30}vh, 0px)`); // right side
    // $('#P010').attr('style', `transform: translate3d(${mouseVw * .22 -2}vw, ${mouseVh * .2 + 55}vh, 0px)`); // bottom left
    // $('#P011').attr('style', `transform: translate3d(${mouseVw * .3 + 12}vw, ${mouseVh * .3 + 48}vh, 0px)`); // 
    // $('#P012').attr('style', `transform: translate3d(${mouseVw * .35 + 25}vw, ${mouseVh * .2 + 58}vh, 0px)`); // 
    // $('#P013').attr('style', `transform: translate3d(${mouseVw * .3 + 25}vw, ${mouseVh * .4 + 15}vh, 0px)`); // 
    // $('#P014').attr('style', `transform: translate3d(${mouseVw * .35 + 35}vw, ${mouseVh * .45 + 30}vh, 0px)`); // 

    // move thumbnails
    $('#P001').attr('style', `transform: translate3d(${speedVw * .05}vw, ${speedVh * .05}vh, 0px)`); // top left
    $('#P002').attr('style', `transform: translate3d(${speedVw * .06 + 19}vw, ${speedVh * .05}vh, 0px)`);
    $('#P003').attr('style', `transform: translate3d(${speedVw * .07 + 38}vw, ${speedVh * .05}vh, 0px)`); 
    $('#P004').attr('style', `transform: translate3d(${speedVw * .08 + 57}vw, ${speedVh * .05}vh, 0px)`); 
    $('#P005').attr('style', `transform: translate3d(${speedVw * .09 + 76}vw, ${speedVh * .05}vh, 0px)`); // top right
    $('#P006').attr('style', `transform: translate3d(${speedVw * .05}vw, ${speedVh * .06 + 24}vh, 0px)`); // left side
    $('#P007').attr('style', `transform: translate3d(${speedVw * .09 + 76}vw, ${speedVh * .06 + 24}vh, 0px)`); // left side
    $('#P008').attr('style', `transform: translate3d(${speedVw * .05}vw, ${speedVh * .07 + 48}vh, 0px)`); // right side
    $('#P009').attr('style', `transform: translate3d(${speedVw * .09 + 76}vw, ${speedVh * .07 + 48}vh, 0px)`); // right side
    $('#P010').attr('style', `transform: translate3d(${speedVw * .05}vw, ${speedVh * .08 + 72}vh, 0px)`); // bottom left
    $('#P011').attr('style', `transform: translate3d(${speedVw * .06 + 19}vw, ${speedVh * .08 + 72}vh, 0px)`); // 
    $('#P012').attr('style', `transform: translate3d(${speedVw * .07 + 38}vw, ${speedVh * .08 + 72}vh, 0px)`); // 
    $('#P013').attr('style', `transform: translate3d(${speedVw * .08 + 57}vw, ${speedVh * .08 + 72}vh, 0px)`); // 
    $('#P014').attr('style', `transform: translate3d(${speedVw * .09 + 76}vw, ${speedVh * .08 + 72}vh, 0px)`); // 
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
