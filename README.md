# Modern Digital Clock

A sleek, modern, real-time digital clock web application built using vanilla HTML5, CSS3, and JavaScript. It dynamically displays the current time (12-hour format with AM/PM indicator) alongside a formatted full calendar date, packaged inside a modern glassmorphism UI.

---

## Features

* **Real-Time Display:** Live updating clock powered by standard JavaScript interval timers.
* **12-Hour Format:** Automatically formats hours to a standard 12-hour cycle with padded zeros and AM/PM toggles.
* **Full Date Formatting:** Shows full weekday, month, day, and year using the browser's native `toLocaleDateString`.
* **Glassmorphism UI:** Stylish semi-transparent card layout over a modern gradient background.
* **Zero Dependencies:** Pure vanilla Web Tech — no external frameworks or libraries required.

---

## Tech Stack

* **HTML5** – Semantic markup and element structure.
* **CSS3** – Custom flexbox layouts, CSS gradients, and glassmorphism styling.
* **JavaScript (ES6+)** – DOM manipulation and real-time Date handling.

---

## Project Structure

```text
├── index.html   # Main markup structure
├── style.css    # Styling, layout, and colors
└── script.js    # Time & date logic and DOM updates
Getting Started
Follow these simple steps to run the project locally on your machine:

1. Clone the repository
Bash
git clone [https://github.com/your-username/digital-clock.git](https://github.com/your-username/digital-clock.git)
2. Navigate to the project directory
Bash
cd digital-clock
3. Open in Browser
Simply double-click index.html or open it with your preferred browser.

(Alternatively, use the Live Server extension in VS Code for live hot-reloading).

How It Works
JavaScript Date API: Captures the client's current date and time using new Date().

Dynamic Pad Formatting: Uses ternary conditions to prepend a leading "0" to single-digit numbers for consistent double-digit alignment (01 vs 1).

setInterval Loop: Runs the update routine every 1,000 milliseconds (1 second) to ensure pinpoint precision without lag.

License
This project is open-source and available under the MIT License.

Created by Siva Surya.B
