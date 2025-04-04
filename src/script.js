const words = ["reliable", "intuitive", "beautiful", "effective"];
        
let index = 0;

function rotateWord() {
    index = (index + 1) % words.length; // Loop back to the start after the last word
    document.getElementById("targetWord").textContent = words[index];
}

setInterval(rotateWord, 3000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

const hiddenRightElement = document.querySelectorAll('.hiddenRight');
  hiddenRightElement.forEach((el) => observer.observe(el));

const toggleButton = document.getElementById("darkModeToggle");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}
  
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

const button = document.getElementById("backToTop");

    window.onscroll = function() {
      button.style.display = (window.scrollY > 200) ? "block" : "none";
    };

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

