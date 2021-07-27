function moveHands() {

    let seconds = new Date().getSeconds();
    let minutes = new Date().getMinutes();
    let hours = new Date().getHours();

    let secondsPosition = (seconds / 60) * 360;
    let minutesPosition = (minutes / 60) * 360;
    let hoursPosition = ((minutes / 60 + hours) / 12) * 360;

    document.querySelector('.seconds')
    .style.transform = `rotate(${secondsPosition}deg)`;
    
    document.querySelector('.minutes')
    .style.transform = `rotate(${minutesPosition}deg)`;
    
    document.querySelector('.hours')
    .style.transform = `rotate(${hoursPosition}deg)`; 
};

setInterval(moveHands, 1000);