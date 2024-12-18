document.getElementById("myButton").addEventListener("click", function() {
  var text = "Kanada";
  var index = 0;
  var outputElement = document.getElementById("output");
  outputElement.textContent = ""; // Clear existing text

  var typingInterval = setInterval(function() {
      if (index < text.length) {
          outputElement.textContent += text.charAt(index);
          index++;
      } else {
          clearInterval(typingInterval);
      }
  }, 100); // Controls typing speed
});
document.getElementById("myButton1").addEventListener("click", function() {
  var text = "Amerika";
  var index = 0;
  var outputElement = document.getElementById("output1");
  outputElement.textContent = ""; // Clear existing text

  var typingInterval = setInterval(function() {
      if (index < text.length) {
          outputElement.textContent += text.charAt(index);
          index++;
      } else {
          clearInterval(typingInterval);
      }
  }, 100); // Controls typing speed
});
document.getElementById("myButton2").addEventListener("click", function() {
  var text = "Meksika";
  var index = 0;
  var outputElement = document.getElementById("output2");
  outputElement.textContent = ""; // Clear existing text

  var typingInterval = setInterval(function() {
      if (index < text.length) {
          outputElement.textContent += text.charAt(index);
          index++;
      } else {
          clearInterval(typingInterval);
      }
  }, 100); // Controls typing speed
});