function updateMonth() {
    let slider = document.getElementById("range-slider");
    let bill = document.getElementById("range-slider").value;
    let rate = (bill*0.16).toFixed(2);

    slider.addEventListener("input",updateMonth);

    document.getElementById("price").innerHTML = '$' + rate;
    document.getElementById("price-mob").innerHTML = '$' + rate;
    document.getElementById("pageviews").innerHTML = bill + "K"
}


function updateYear() {
    let slider = document.getElementById("range-slider");
    let bill = document.getElementById("range-slider").value;
    let rate = (bill*0.16*12).toFixed(2);
    let finalRate = (rate - rate*0.25).toFixed(2);

    slider.addEventListener("input",updateYear);

    document.getElementById("price").innerHTML = '$' + finalRate;
    document.getElementById("price-mob").innerHTML = '$' + finalRate;
    document.getElementById("pageviews").innerHTML = bill + "K"
}

function billType(){
    let btnValue = document.getElementById("toggle-btn").value;
    let type = document.getElementById("toggle-btn");
    type.addEventListener("input",billType);

    if (btnValue == 2){
        document.getElementById("bill-type").innerHTML = '/year';
        updateYear();   
    }
    
    else if(btnValue == 1){
        document.getElementById("bill-type").innerHTML = '/month';
        updateMonth();
    }
}

var sliderColor = document.querySelector('.range-slider');
sliderColor.addEventListener('input', function() {
  var value = (sliderColor.value - sliderColor.min) / (sliderColor.max - sliderColor.min) * 100;
  sliderColor.style.background = 'linear-gradient(to right, #10d8c4 0%, #10d8c4 ' + value + '%, #ddd ' + value + '%, #ddd 100%)';
});

var toggleColor = document.querySelector('.toggle-btn');
toggleColor.addEventListener('input', function(){
    var value2 = (toggleColor.value - toggleColor.min) / (toggleColor.max - toggleColor.min) * 100;
    toggleColor.style.background = 'linear-gradient(to right, #10d8c4 0%, #10d8c4 ' + value2 + '%, #ddd ' + value2 + '%, #ddd 100%)';
});

billType();
console.log(type.value)