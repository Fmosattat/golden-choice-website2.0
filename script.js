const timeEl = document.getElementById("qt-time");
const dateEl = document.getElementById("qt-date");

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: "Asia/Qatar",
});

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  weekday: "short",
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "Asia/Qatar",
});

const updateQatarTime = () => {
  const now = new Date();
  if (timeEl) {
    timeEl.textContent = timeFormatter.format(now);
  }
  if (dateEl) {
    const formatted = dateFormatter.format(now).replace(/,/g, "");
    const [weekday, day, month, year] = formatted.split(" ");
    dateEl.textContent = `${weekday}, ${day} ${month} ${year}`;
  }
};

updateQatarTime();
setInterval(updateQatarTime, 1000);

const navLinks = document.querySelectorAll(".nav-pill a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || !targetId.startsWith("#")) {
      return;
    }
    const section = document.querySelector(targetId);
    if (!section) {
      return;
    }
    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      const id = entry.target.getAttribute("id");
      if (!id) {
        return;
      }
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    });
  },
  { threshold: 0.5 }
);

[...document.querySelectorAll("main section")].forEach((section) => {
  sectionObserver.observe(section);
});
