// clock javascript

setInterval(theClock, 1000);


const hour = document.querySelector("[data-hour-hand]");
const minute = document.querySelector("[data-minute-hand]");
const second = document.querySelector("[data-second-hand]")

function theClock(){
	const currentDate = new Date();
	const secondRatio = currentDate.getSeconds()/60;
	const minuteRatio = (secondRatio + currentDate.getMinutes())/60;
	const hourRatio = (minuteRatio + currentDate.getHours())/12;
	
	
	setRotation(hour,hourRatio);
	setRotation(minute,minuteRatio);
	setRotation(second,secondRatio);
}


function setRotation(element, ratio){
	element.style.setProperty("--rotation", ratio * 360);
}

theClock();