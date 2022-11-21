



function enlarge(){
    var myImg = document.getElementById("distort");
    var currWidth = myImg.clientWidth;
    if(currWidth == 500){
        alert("Maximum size reached.");
    } else {

        myImg.style.width = (currWidth + 50) + "px";
    } 
}

function minimize(){
    var myImg = document.getElementById("distort");
    var currWidth = myImg.clientWidth;
    if(currWidth == 0){
        alert("Minimum size reached.");
    } else{
        myImg.style.width = (currWidth - 50) + "px";
    } 
}

function rotate(){
    var myImg = document.getElementById("distort");
    var num = Math.floor(Math.random() * 365);
    myImg.style.transform = 'rotate(' + num + 'deg)';
} 


function startImageTransition() {
    var images = document.getElementsByClassName("test");

    for (var i = 0; i < images.length; ++i) {
        images[i].style.opacity = 1;
    }

    var top = 1;

    var cur = images.length - 1;

    setInterval(changeImage, 3000);

    async function changeImage() {

        var nextImage = (1 + cur) % images.length;

        images[cur].style.zIndex = top + 1;
        images[nextImage].style.zIndex = top;

        await transition();

        images[cur].style.zIndex = top;

        images[nextImage].style.zIndex = top + 1;

        top = top + 1;

        images[cur].style.opacity = 1;
       
        cur = nextImage;

    }

    function transition() {
        return new Promise(function(resolve, reject) {
            var del = 0.01;

            var id = setInterval(changeOpacity, 10);

            function changeOpacity() {
                images[cur].style.opacity -= del;
                if (images[cur].style.opacity <= 0) {
                    clearInterval(id);
                    resolve();
                }
            }

        })
    }
}

    function changeImg() {
        var myImg = document.getElementById("distort");
        if (myImg.src.match("../../../images/TheMedium.jpg")) {
            myImg.src = "../../../images/TheMessage.png";
        }
        else {
            myImg.src = "../../../images/TheMedium.jpg";
        }

        
    }