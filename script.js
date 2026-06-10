// ── Helper function: text ko screen par print karta hai ──
function print(id, message) {
  var box = document.getElementById(id);
  if (box) {
    box.textContent = message;
  }
}

// Question 01 — Hello World
print("output-1", "Hello World!\nI am here to help you with your JavaScript output.");

// Question 02 — Error Message
print("output-2", "Error!\nPlease enter a valid password.");

// Question 03 — Welcome with Happy Coding
print("output-3", "Welcome to JS Land\nHappy Coding!");

// Question 04 — Two alerts combined into one
print("output-4", "Welcome to JS Land\nHappy Coding!");

// Question 05 — Console Note
print("output-5", "Hello! I can run JavaScript from my browser's console.");