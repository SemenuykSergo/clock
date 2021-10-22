let startTimeColor = new Date().getMinutes();
colorSet();

function clock() {
   let hours;
   let minutes;
   let seconds;
   let date = new Date();
   let get = document.getElementById('hours');
   hours = date.getHours();
   if (hours >= 0 && hours < 10) { hours = "0" + hours; }
   get.innerText = hours;

   get = document.getElementById('minutes');
   minutes = date.getMinutes();
   if (minutes >= 0 && minutes < 10) { minutes = "0" + minutes; }
   get.innerText = minutes;
   if (minutes - startTimeColor == 1) {
      colorSet()
      startTimeColor = minutes;
   };

   get = document.getElementById('seconds');
   seconds = date.getSeconds();
   if (seconds >= 0 && seconds < 10) { seconds = "0" + seconds; }
   get.innerText = seconds;
}

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

function colorSet() {
   let element;
   let color = ['red', 'green', 'pink', 'lavender', 'purple', 'salmon'];
   let backColor = ['orange', 'yellow', 'teal', 'aqua', 'navy', 'gray'];
   let rand;
   rand = getRandomInt(6);
   element = document.querySelector('.clock');
   element.style.color = color[rand];
   rand = getRandomInt(6);
   element.style.backgroundColor = backColor[rand];
}


setInterval(clock, 1000);