let string = ""
let buttons = document.querySelectorAll(".button");

btn1.addEventListener("mousedown", function () {
    document.getElementById("btn1").style.background = "black";
    document.getElementById("btn1").style.color = "aqua";
})

btn1.addEventListener("mouseup", function () {
    document.getElementById("btn1").style.background = "white";
    document.getElementById("btn1").style.color = "black";
})
btn2.addEventListener("mousedown", function () {
    document.getElementById("btn2").style.background = "black";
    document.getElementById("btn2").style.color = "aqua";
})

btn2.addEventListener("mouseup", function () {
    document.getElementById("btn2").style.background = "white";
    document.getElementById("btn2").style.color = "black";
})

btn3.addEventListener("mousedown", function () {
    document.getElementById("btn3").style.background = "black";
    document.getElementById("btn3").style.color = "aqua";
})

btn3.addEventListener("mouseup", function () {
    document.getElementById("btn3").style.background = "white";
    document.getElementById("btn3").style.color = "black";
})

btn4.addEventListener("mousedown", function () {
    document.getElementById("btn4").style.background = "black";
    document.getElementById("btn4").style.color = "aqua";
})

btn4.addEventListener("mouseup", function () {
    document.getElementById("btn4").style.background = "white";
    document.getElementById("btn4").style.color = "black";
})

btn5.addEventListener("mousedown", function () {
    document.getElementById("btn5").style.background = "black";
    document.getElementById("btn5").style.color = "aqua";
})

btn5.addEventListener("mouseup", function () {
    document.getElementById("btn5").style.background = "white";
    document.getElementById("btn5").style.color = "black";
})

btn6.addEventListener("mousedown", function () {
    document.getElementById("btn6").style.background = "black";
    document.getElementById("btn6").style.color = "aqua";
})

btn6.addEventListener("mouseup", function () {
    document.getElementById("btn6").style.background = "white";
    document.getElementById("btn6").style.color = "black";
})

btn7.addEventListener("mousedown", function () {
    document.getElementById("btn7").style.background = "black";
    document.getElementById("btn7").style.color = "aqua";
})

btn7.addEventListener("mouseup", function () {
    document.getElementById("btn7").style.background = "white";
    document.getElementById("btn7").style.color = "black";
})

btn8.addEventListener("mousedown", function () {
    document.getElementById("btn8").style.background = "black";
    document.getElementById("btn8").style.color = "aqua";
})

btn8.addEventListener("mouseup", function () {
    document.getElementById("btn8").style.background = "white";
    document.getElementById("btn8").style.color = "black";
})

btn9.addEventListener("mousedown", function () {
    document.getElementById("btn9").style.background = "black";
    document.getElementById("btn9").style.color = "aqua";
})

btn9.addEventListener("mouseup", function () {
    document.getElementById("btn9").style.background = "white";
    document.getElementById("btn9").style.color = "black";
})

btn10.addEventListener("mousedown", function () {
    document.getElementById("btn10").style.background = "black";
    document.getElementById("btn10").style.color = "aqua";
})

btn10.addEventListener("mouseup", function () {
    document.getElementById("btn10").style.background = "white";
    document.getElementById("btn10").style.color = "black";
})

btn11.addEventListener("mousedown", function () {
    document.getElementById("btn11").style.background = "black";
    document.getElementById("btn11").style.color = "aqua";
})

btn11.addEventListener("mouseup", function () {
    document.getElementById("btn11").style.background = "white";
    document.getElementById("btn11").style.color = "black";
})

btn12.addEventListener("mousedown", function () {
    document.getElementById("btn12").style.background = "black";
    document.getElementById("btn12").style.color = "aqua";
})

btn12.addEventListener("mouseup", function () {
    document.getElementById("btn12").style.background = "white";
    document.getElementById("btn12").style.color = "black";
})
btn13.addEventListener("mousedown", function () {
    document.getElementById("btn13").style.background = "black";
    document.getElementById("btn13").style.color = "aqua";
})

btn13.addEventListener("mouseup", function () {
    document.getElementById("btn13").style.background = "white";
    document.getElementById("btn13").style.color = "black";
})
btn14.addEventListener("mousedown", function () {
    document.getElementById("btn14").style.background = "black";
    document.getElementById("btn14").style.color = "aqua";
})

btn14.addEventListener("mouseup", function () {
    document.getElementById("btn14").style.background = "white";
    document.getElementById("btn14").style.color = "black";
})
btn15.addEventListener("mousedown", function () {
    document.getElementById("btn15").style.background = "black";
    document.getElementById("btn15").style.color = "aqua";
})

btn15.addEventListener("mouseup", function () {
    document.getElementById("btn15").style.background = "white";
    document.getElementById("btn15").style.color = "black";
})
btn16.addEventListener("mousedown", function () {
    document.getElementById("btn16").style.background = "black";
    document.getElementById("btn16").style.color = "aqua";
})

btn16.addEventListener("mouseup", function () {
    document.getElementById("btn16").style.background = "white";
    document.getElementById("btn16").style.color = "black";
})
btn17.addEventListener("mousedown", function () {
    document.getElementById("btn17").style.background = "black";
    document.getElementById("btn17").style.color = "aqua";
})

btn17.addEventListener("mouseup", function () {
    document.getElementById("btn17").style.background = "white";
    document.getElementById("btn17").style.color = "black";
})
btn18.addEventListener("mousedown", function () {
    document.getElementById("btn18").style.background = "black";
    document.getElementById("btn18").style.color = "aqua";
})

btn18.addEventListener("mouseup", function () {
    document.getElementById("btn18").style.background = "white";
    document.getElementById("btn18").style.color = "black";
})

btn19.addEventListener("mousedown", function () {
    document.getElementById("btn19").style.background = "black";
    document.getElementById("btn19").style.color = "aqua";
})

btn19.addEventListener("mouseup", function () {
    document.getElementById("btn19").style.background = "white";
    document.getElementById("btn19").style.color = "black";
})

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string;
        }
        else if (e.target.innerHTML == "DE") {
            string = string.substring(0,string.length-1);
            document.querySelector("input").value = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            document.querySelector("input").value = string;
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    })
});

