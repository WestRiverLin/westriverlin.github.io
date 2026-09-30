(function () {
  var lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-label", "图片预览");
  lightbox.innerHTML = '<button class="lightbox-close" type="button" aria-label="关闭">×</button><img alt="">';
  document.body.appendChild(lightbox);

  var image = lightbox.querySelector("img");
  var closeButton = lightbox.querySelector(".lightbox-close");

  function open(src, alt) {
    image.src = src;
    image.alt = alt || "";
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
    image.src = "";
  }

  document.querySelectorAll(".figure img").forEach(function (img) {
    img.addEventListener("click", function () {
      open(img.getAttribute("src"), img.getAttribute("alt"));
    });
  });

  lightbox.addEventListener("click", function (event) {
    if (event.target !== image) {
      close();
    }
  });
  closeButton.addEventListener("click", close);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      close();
    }
  });
})();
