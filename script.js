var con = document.querySelector(".container")

var love = document.querySelector("i")

con.addEventListener("dblclick", function () {
    love.style.transform = "translate(-50%,-50%) scale(1)"
    nxtlove.classList.remove('ri-heart-3-line')
    nxtlove.style.color = 'red'
    nxtlove.classList.add('ri-heart-3-fill')
    love.style.opacity = 0.9;
    setTimeout(() => {
        love.style.transform = "translate(-50%,-50%) scale(0)"
        love.style.opacity = 0;
    }, 2500);

})

var nxtlove = document.getElementById("nxtlove")
var check = 0;

nxtlove.addEventListener("click", function double() {
    if (check == 0) {
        nxtlove.classList.remove('ri-heart-3-line')
        nxtlove.classList.add('ri-heart-3-fill')
        nxtlove.style.color = 'red'
        nxtlove.style.scale = "1.2"
        check = 1

    }
    else {
        nxtlove.classList.remove('ri-heart-3-fill')
        nxtlove.classList.add('ri-heart-3-line')
        nxtlove.style.color = 'black'
        nxtlove.style.scale = "1"
        check = 0
    }

})
var nxtsave = document.getElementById("nxtsave")
var flag = 0

nxtsave.addEventListener("click", function () {

    if (flag == 0) {
        nxtsave.style.stroke = "black"
        nxtsave.style.scale = "1.1"
        flag = 1

    }
    else {
        nxtsave.style.stroke = "none"
        nxtsave.style.scale = "1"
        flag = 0
    }
})

// if (heartIcon.classList.contains('fa-regular')) {
//     heartIcon.classList.remove('fa-regular');
//     heartIcon.classList.add('fa-solid');
//     heartIcon.style.color = 'red';
// } else {
//     heartIcon.classList.remove('fa-solid');
//     heartIcon.classList.add('fa-regular');
//     heartIcon.style.color = '#ff0000';
// }