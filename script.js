

document.getElementById("convertButton").addEventListener("click", function(){
    //get value for temp. input
    const temperature = parseInt(document.getElementById("temperatureInput").value);
    //get value for select input
    const conversionType = document.getElementById("conversionType").value;
    
    //select result display space
    const resultDiv = document.getElementById("result");
    //clear the previous value entered
    resultDiv.innerHTML = "";  
    //validate the user
    if(isNaN(temperature)) {
        resultDiv.innerHTML = "Please enter a valid number for the temperature";
        return;
    }
    //conversion logic
    let convertedTemperature;
    if(conversionType ==="toCelsius"){
        convertedTemperature = (temperature - 32) * (5/9);
        resultDiv.innerHTML = `${temperature}°F is equal to 
        ${convertedTemperature.toFixed(2)}°C`;
    }else if(conversionType ==="toFahrenheit"){
        convertedTemperature = temperature * (9/3) * 32;
        resultDiv.innerHTML = `${temperature}°C is equal to 
        ${convertedTemperature.toFixed(2)}°F`;
    }
});