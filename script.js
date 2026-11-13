const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  const expanded = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(expanded));
  menuButton.setAttribute("aria-label", expanded ? "Close menu" : "Open menu");
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
  });
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
});