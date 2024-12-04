const secondsHand = document.querySelector(".seconds");
const minutesHand = document.querySelector(".minutes");
const hoursHand = document.querySelector(".hours");


setInterval(() => {
  const seconds = new Date().getSeconds();
  const rotation = seconds * 6; // Each second = 6 degrees
  secondsHand.style.transform = `rotate(${rotation}deg) translateY(-50%)`;
}, 1000);


function updateMinuteHand() {
  const minutes = new Date().getMinutes();
  console.log("Current Minute:", minutes); 
  const rotation = minutes * 6; 
  minutesHand.style.transform = `rotate(${rotation}deg) translateY(-50%)`;
}


updateMinuteHand();


setInterval(updateMinuteHand, 60000);

function updateHours() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    console.log("Current Hours:", hours); 

    const rotation = hours * 30 + minutes * 0.5; 
    hoursHand.style.transform = `rotate(${rotation}deg) translateY(-50%)`; 
  }
  
  
  updateHours();
  
  
  setInterval(updateHours, 3600000);
