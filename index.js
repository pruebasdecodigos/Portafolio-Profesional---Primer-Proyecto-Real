   document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".progress-bar span");
    const texts = document.querySelectorAll(".progress-text");

    skills.forEach((bar, i) => {
      let finalValue = bar.getAttribute("data-progress");
      let value = 0;

      // animar barra
      let anim = setInterval(() => {
        if (value >= finalValue) {
          clearInterval(anim);
        } else {
          value++;
          bar.style.width = value + "%";
          texts[i].textContent = value + "%";
        }
      }, 20);
    });
  });

