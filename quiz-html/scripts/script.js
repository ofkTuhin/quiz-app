document.querySelector(".floatingButton").addEventListener(
  "click",
  function () {
    this.classList.remove("floatingButton");
  },
  true
);

document.querySelector(".miniPlayer .close").addEventListener(
  "click",
  function () {
    document.querySelector(".miniPlayer").classList.add("floatingButton");
  },
  true
);

document.querySelector(".progress").addEventListener(
  "mouseover",
  function () {
    document.querySelector(".tooltip").style.display = "block";
  },
  true
);

document.querySelector(".progress").addEventListener(
  "mouseout",
  function () {
    document.querySelector(".tooltip").style.display = "none";
  },
  true
);
