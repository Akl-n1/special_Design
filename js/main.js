let landingpage = document.querySelector(".landing-page");
let myarray = ["photo1.WebP", "photo2.WebP", "photo3.WebP"];

let handler = setInterval(randomf, 5000);

function randomf() {
  let random = Math.floor(Math.random() * myarray.length);
  landingpage.style.backgroundImage = `url(img/${myarray[random]})`;
}
function SettInterval(set) {
  if (set.dataset.background === "Yes") {
    clearInterval(handler);
    handler = setInterval(randomf, 5000);
  } else {
    clearInterval(handler);
  }
}
// ==========option-box2=============
let randomBackground = document.querySelectorAll(".random-background span");
randomBackground.forEach((span) => {
  span.addEventListener("click", () => {
    handelActive(span);
    SettInterval(span);
    window.localStorage.setItem("state", span.dataset.background);
  });
});
// ====================================================
let backgroundrandom = document.querySelectorAll(
  ".options .backgroundRandom img"
);
backgroundrandom.forEach((e) => {
  e.addEventListener("click", (event) => {
    const imgName = event.target.dataset.img;
    landingpage.style.backgroundImage = `url(img/${imgName})`;
    window.localStorage.setItem(
      "backgroundoptions",
      landingpage.style.backgroundImage
    );
    document.querySelectorAll(".random-background span").forEach((e) => {
      if (e.dataset.background === "Yes") {
        e.classList.remove("active");
        clearInterval(handler);
        handler = setInterval(randomf, 5000);
      } else {
        e.classList.add("active");
        clearInterval(handler);
      }
      window.localStorage.setItem("state", e.dataset.background);
    });
  });
});
// ========= LocalStorge status ===============
if (window.localStorage.getItem("state")) {
  if (window.localStorage.getItem("state") === "Yes") {
    clearInterval(handler);
    handler = setInterval(randomf, 5000);
  } else {
    clearInterval(handler);
  }

  document.querySelectorAll(".random-background span").forEach((el) => {
    el.classList.remove("active");
  });
  document
    .querySelector(`[data-background=${window.localStorage.getItem("state")}]`)
    .classList.add("active");
}
if (window.localStorage.getItem("backgroundoptions")) {
  landingpage.style.backgroundImage =
    window.localStorage.getItem("backgroundoptions");
}
// ==========Header-Area========
let headerlinks = document.querySelector(".header-area .links");
let headerlinksli = document.querySelectorAll(".header-area .links li");
let headermenu = document.querySelector(".header-area .menu");

headermenu.addEventListener("click", () => {
  headerlinksli.forEach((li) => {
    li.classList.toggle("active");
  });
  headerlinks.classList.toggle("active");
});

window.addEventListener("click", (e) => {
  if (!headermenu.contains(e.target) && !headerlinks.contains(e.target)) {
    headerlinksli.forEach((li) => {
      li.classList.remove("active");
    });
    headerlinks.classList.remove("active");
  }
});

// Remove active class on resize if width <= 768px
window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    headerlinksli.forEach((li) => {
      li.classList.remove("active");
    });
    headerlinks.classList.remove("active");
  }
});

// =================================
let settingsBox = document.querySelector(".settings-box");
let toggleSettings = document.querySelector(".toggle-settings");
let faSettings = document.querySelector(".fa-settings");

toggleSettings.addEventListener("click", (event) => {
  settingsBox.classList.toggle("open");
  faSettings.classList.toggle("fa-spin");
  settingsBox.classList.remove("cloes");
});

window.addEventListener("click", (e) => {
  if (!settingsBox.contains(e.target)) {
    settingsBox.classList.remove("open");
    faSettings.classList.add("fa-spin");
    settingsBox.classList.add("cloes");
  }
});
// ===========function active class==================
function handelActive(active) {
  active.parentElement.querySelectorAll(".active").forEach((el) => {
    el.classList.remove("active");
  });
  active.classList.add("active");
}
// ==========option-box1=============
let switchcolor = document.querySelectorAll(".color-list li");
switchcolor.forEach((el) => {
  el.addEventListener("click", (li) => {
    handelActive(el);
    document.documentElement.style.setProperty(
      "--main-color",
      li.currentTarget.dataset.color
    );
    window.localStorage.setItem("colors", li.currentTarget.dataset.color);
    let aboutImg = document.querySelector(".image-about img");
    let myarrayimg = [
      "About-Us1.WebP",
      "About-Us2.WebP",
      "About-Us3.WebP",
      "About-Us4.WebP",
      "About-Us5.WebP",
    ];

    if (li.currentTarget.dataset.color.trim() === "#ff9800") {
      aboutImg.src = `img/${myarrayimg[0]}`;
    } else if (li.currentTarget.dataset.color.trim() === "#e91e63") {
      aboutImg.src = `img/${myarrayimg[1]}`;
    } else if (li.currentTarget.dataset.color.trim() === "#009688") {
      aboutImg.src = `img/${myarrayimg[2]}`;
    } else if (li.currentTarget.dataset.color.trim() === "#03a9f4") {
      aboutImg.src = `img/${myarrayimg[3]}`;
    } else if (li.currentTarget.dataset.color.trim() === "#4caf50") {
      aboutImg.src = `img/${myarrayimg[4]}`;
    }
    window.localStorage.setItem("colorimg", aboutImg.src);
  });
});
if (window.localStorage.getItem("colorimg")) {
  document.querySelector(".image-about img").src =
    window.localStorage.getItem("colorimg");
}
if (window.localStorage.getItem("colors")) {
  document.documentElement.style.setProperty(
    "--main-color",
    window.localStorage.colors
  );
  document.querySelectorAll(".color-list li").forEach((el) => {
    el.classList.remove("active");
  });
  document
    .querySelector(`[data-color='${window.localStorage.colors}']`)
    .classList.add("active");
}

// =============Skills==================
let SkillsSection = document.querySelector(".skills");
let allSkills = document.querySelectorAll(".skills-progress span");

window.onscroll = function () {
  if (window.scrollY + window.innerHeight >= SkillsSection.offsetTop + 200) {
    allSkills.forEach((el) => {
      el.style.width = el.dataset.width;
      el.classList.add("active");
      let width = el.dataset.width;
      if (width >= "0%" && width < "40%") {
        el.style.backgroundColor = "red";
      } else if (width >= "40%" && width < "60%") {
        el.style.backgroundColor = "#ff944d";
      } else if (width >= "60%" && width < "80%") {
        el.style.backgroundColor = "#4caf50";
      } else if (width >= "80%") {
        el.style.backgroundColor = "#03a9f4";
      } else {
        el.style.backgroundColor = "black";
      }
    });
  }
};
// =============Gallary popup==================
let gallary = document.querySelectorAll(".gallary-image img");
gallary.forEach((img) => {
  img.addEventListener("click", () => {
    // إنشاء overlay
    let overlay = document.createElement("div");
    overlay.className = "pop-overlay";
    document.body.appendChild(overlay);
    // إنشاء popupBox
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";
    let popupImage = document.createElement("img");
    popupImage.src = img.src;
    popupBox.appendChild(popupImage);
    document.body.appendChild(popupBox);
    // إغلاق popup عند النقر خارج popupBox
    overlay.addEventListener("click", () => {
      overlay.remove();
      popupBox.remove();
    });
    let span = document.createElement("span");
    span.appendChild(document.createTextNode("X"));
    span.className = "x";
    popupBox.appendChild(span);
    span.addEventListener("click", (e) => {
      overlay.remove();
      popupBox.remove();
    });
  });
});
// =============Nav-Bullets==================
let Bullets = document.querySelectorAll(".nav-bullets .Bullets");
let NavBullets = document.querySelector(".nav-bullets");
let tip = document.querySelectorAll(".nav-bullets .Bullets .tool-tip");
Bullets.forEach((b) => {
  b.addEventListener("click", (e) => {
    let tiptool = b.querySelector(".nav-bullets .Bullets .tool-tip");
    location.hash = `#${tiptool.innerHTML}`;
  });
  tip.forEach((tip) => {
    tip.addEventListener("click", (e) => {
      location.hash = `#${e.innerHTML}`;
    });
  });
});

let Navbullet = document.querySelectorAll(".nav-bullet span");
Navbullet.forEach((e) => {
  e.addEventListener("click", () => {
    handelActive(e);
    if (e.dataset.bullets == "Yes") {
      NavBullets.style.display = "none";
    } else {
      NavBullets.style.display = "block";
    }
    window.localStorage.setItem("Navbullets", e.dataset.bullets);
  });
});
// ============== localStorage for Bullets ================
if (window.localStorage.getItem("Navbullets")) {
  document.querySelectorAll(".nav-bullet span").forEach((e) => {
    e.classList.remove("active");
  });
  document
    .querySelector(
      `[data-bullets="${window.localStorage.getItem("Navbullets")}"]`
    )
    .classList.add("active");
  if (window.localStorage.getItem("Navbullets") == "Yes") {
    NavBullets.style.display = "none";
  } else {
    NavBullets.style.display = "block";
  }
}

// ================= Reset all options ==============
document.querySelector(".reset-option").onclick = function () {
  localStorage.clear();
  window.location.reload();
};
