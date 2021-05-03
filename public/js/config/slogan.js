const sloganAnimation = document.getElementById('slogan_animation');

let designContext = sloganAnimation.getContext('2d');

let paletaDeCores = {
  cor1: "#00ffaf", 
  cor2: "#00ff9f", 
  cor3: "#00ff6f", 
  cor4: "#00ff3f", 
  cor5: "#00ff1f", 
  cor6: "#00ff00", 
  cor7: "#00cc00", 
  cor8: "#009900", 
  cor9: "#006600", 
  cor10: "#003300" 
};

designContext.beginPath();

designContext.fillStyle = "#00ff99";
designContext.fillRect(1, 2, 20, 20);

designContext.fillStyle = "#00ff99";
designContext.fillRect(1, 24, 10, 60);

designContext.fillStyle = "#00ff99";
designContext.fillRect(1, 86, 10, 60);

designContext.fillStyle = "#00ff99";
designContext.fillRect(22, 2, 10, 60);

designContext.fillStyle = "#00ff99";
designContext.fillRect(22, 64, 10, 60);

designContext.fillStyle = "#00ff99";
designContext.fillRect(12, 126, 20, 20);

designContext.fillStyle = "#00ff99";
designContext.fillRect(12, 24.2, 9, 9);

designContext.fillStyle = "#00ff99";
designContext.fillRect(12, 34.2, 9, 9);

designContext.fillStyle = "#00ff99";
designContext.fillRect(12, 44.2, 9, 9);

designContext.fillStyle = "#00ff99";
designContext.fillRect(12, 54.2, 9, 9);

designContext.fillStyle = "#00ff99";
designContext.fillRect(12, 64.2, 9, 9);

designContext.fillStyle = "#00ff99";
designContext.fillRect(12, 74.2, 9, 9);

designContext.fillStyle = "#00ff99";
designContext.fillRect(12, 84.2, 9, 9);

designContext.fillStyle = "#00ff99";
designContext.fillRect(12, 94.2, 9, 9);

designContext.fillStyle = "#00ff99";
designContext.fillRect(12, 104.2, 9, 9);

designContext.fillStyle = "#00ff99";
designContext.fillRect(12, 114.2, 9, 9);

setInterval(() => {}, 60000);