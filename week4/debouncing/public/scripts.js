function sumVisible()
{
    document.querySelector(".container1").style.display = "block";
    document.querySelector(".btn1").style.display = "none";
    document.querySelector(".btn2").style.display = "block";
    document.querySelector(".container2").style.display = "none";
    
}

function interestVisible()
{
    document.querySelector(".container1").style.display = "none";
    document.querySelector(".btn1").style.display = "block";
    document.querySelector(".btn2").style.display = "none";
    document.querySelector(".container2").style.display = "block";
    
}

function sum() {
    var num1 = document.getElementById("a").value;
    var num2 = document.getElementById("b").value;

    fetch("http://localhost:3000/sum?a=" + num1 + "&b=" + num2)
        .then(function(res) {
            if (!res.ok) {
                throw new Error('Invalid input');
            }
            return res.text();
        })
        .then(function(data) {
            document.getElementById("container1").innerHTML = "Sum: " + data;
        })
        .catch(function(error) {
            console.error('Error:', error);
            document.getElementById("container1").innerHTML = "An error occurred: " + error.message;
        });
}
function interest(){
    var amount = document.getElementById("amt").value;
    var rate = document.getElementById("r").value;
    var time = document.getElementById("t").value;

    fetch("http://localhost:3000/interest?amount=" + amount + "&rate=" + rate + "&time=" + time)
        .then(function(res) {
            if (!res.ok) {
                throw new Error('Invalid input');
            }
            return res.text();
        })
        .then(function(data) {
            document.getElementById("container2").innerHTML = "Interest: " + data;
        })
        .catch(function(error) {
            console.error('Error:', error);
            document.getElementById("container2").innerHTML = "An error occurred: " + error.message;
        });
}

let timeout;
function debouncePopulate1() {
    clearTimeout(timeout);
    timeout = setTimeout(function(){
        populate1()
    },1000);
}


function populate1(){
    var num1 = document.getElementById("a").value;
    var num2 = document.getElementById("b").value;
    if(num1.length > 0 && num2.length > 0){
        sum();
    }
}

function populate2(){
    var amount = document.getElementById("amt").value;
    var rate = document.getElementById("r").value;
    var time = document.getElementById("t").value;
    if(amount.length > 0 && rate.length > 0 && time.length > 0){
        interest();
    }
}


