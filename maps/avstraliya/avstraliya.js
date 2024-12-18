document.getElementById("myButton").addEventListener("click", function() {
  var text = "Avstraliya";
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