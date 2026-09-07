document.addEventListener("DOMContentLoaded", function () {
  /* ===== Data ===== */
  var menuItems = [
    { name: "Mutton Biryani", cat: "Biryani", desc: "Fragrant basmati, tender mutton and house spices.", price: "₹399", popular: true, veg: false, image: "assets/images/spice-nation-hero.jpg" },
    { name: "Chicken Biryani", cat: "Biryani", desc: "Aromatic dum rice layered with spiced chicken.", price: "₹329", veg: false, image: "assets/images/spice-nation-feast.jpg" },
    { name: "Chicken Tikka Biryani", cat: "Biryani", desc: "Smoky tikka folded through fragrant rice.", price: "₹359", popular: true, veg: false, image: "assets/images/spice-nation-signatures.jpg" },
    { name: "Tangdi Kabab", cat: "Tandoori", desc: "Char-grilled chicken legs with warm spices.", price: "₹349", popular: true, veg: false, image: "assets/images/spice-nation-signatures.jpg" },
    { name: "Tandoori Chicken", cat: "Tandoori", desc: "Classic clay-oven chicken, smoky and succulent.", price: "₹399", veg: false, image: "assets/images/spice-nation-tandoor.jpg" },
    { name: "Paneer Tikka", cat: "Vegetarian", desc: "Charred paneer, peppers and aromatic marinade.", price: "₹299", veg: true, image: "assets/images/spice-nation-tandoor.jpg" },
    { name: "Crispy Corn", cat: "Starters", desc: "Crisp kernels tossed with chilli and herbs.", price: "₹239", veg: true, image: "assets/images/spice-nation-feast.jpg" },
    { name: "Tiranga Kebab", cat: "Starters", desc: "A trio of vibrant, delicately spiced kebabs.", price: "₹359", veg: false, image: "assets/images/spice-nation-tandoor.jpg" },
    { name: "Butter Chicken", cat: "Main Course", desc: "Silky tomato gravy with tender tandoori chicken.", price: "₹369", popular: true, veg: false, image: "assets/images/spice-nation-signatures.jpg" },
    { name: "Butter Garlic Chicken", cat: "Main Course", desc: "Rich, savoury and finished with roasted garlic.", price: "₹379", veg: false, image: "assets/images/spice-nation-signatures.jpg" },
    { name: "Chettinadu Chicken", cat: "Main Course", desc: "Peppery southern spices with roasted coconut notes.", price: "₹369", veg: false, image: "assets/images/spice-nation-feast.jpg" },
    { name: "Chicken Kulcha", cat: "Breads", desc: "Tandoor-baked bread with a savoury chicken filling.", price: "₹179", veg: false, image: "assets/images/spice-nation-feast.jpg" },
    { name: "Garlic Naan", cat: "Breads", desc: "Soft, blistered naan with garlic and herbs.", price: "₹79", veg: true, image: "assets/images/spice-nation-feast.jpg" },
    { name: "Chicken Manchow Soup", cat: "Soups", desc: "Warming, peppery broth with crisp noodles.", price: "₹199", veg: false, image: "assets/images/spice-nation-feast.jpg" },
    { name: "Apollo Fish", cat: "Seafood", desc: "Crisp fish tossed in a punchy house sauce.", price: "₹379", veg: false, image: "assets/images/spice-nation-feast.jpg" },
    { name: "Chilli Prawns", cat: "Seafood", desc: "Juicy prawns with chilli, garlic and peppers.", price: "₹399", veg: false, image: "assets/images/spice-nation-feast.jpg" },
    { name: "Almond Ice Cream", cat: "Desserts", desc: "Creamy, nutty and gently aromatic.", price: "₹149", veg: true, image: "assets/images/spice-nation-feast.jpg" }
  ];

  var spices = [
    ["01", "CARDAMOM", "Aromatic warmth."],
    ["02", "CINNAMON", "Sweet, woody depth."],
    ["03", "CLOVES", "A bold, warming note."],
    ["04", "SAFFRON", "Fragrant golden depth."],
    ["05", "MINT", "A fresh finishing note."],
    ["06", "RICE", "Long-grain and delicate."]
  ];

  var galleryImages = [
    { src: "assets/images/spice-nation-feast.jpg", alt: "Indian feast with biryani, breads and curries", cls: "gallery-span-2 gallery-span-2-row" },
    { src: "assets/images/spice-nation-tandoor.jpg", alt: "Tandoori skewers over glowing charcoal", cls: "" },
    { src: "assets/images/spice-nation-interior.jpg", alt: "Warm Spice Nation dining ambience", cls: "gallery-span-2" },
    { src: "assets/images/spice-nation-hero.jpg", alt: "Close-up of steaming mutton biryani", cls: "gallery-span-2-row" },
    { src: "assets/images/spice-nation-family.jpg", alt: "Guests sharing a generous Indian meal", cls: "" },
    { src: "assets/images/spice-nation-signatures.jpg", alt: "Selection of Spice Nation signature dishes", cls: "gallery-span-2" }
  ];

  var reviews = [
    "Good food, tasty starters and a nice place to hangout with family and friends.",
    "The place is beautiful and lovely music. Good staff, great service.",
    "Every single item ordered tastes good. Quality and quantity are also great."
  ];

  var spiceMarkSvg =
    '<svg viewBox="0 0 120 120" fill="none" width="96" height="96"><path d="M23 78c28-4 45-20 52-51 8 24 0 54-28 66M36 72c7-4 13-10 18-17M72 28c11 6 19 16 22 29M88 79c-7 8-17 13-30 15" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M83 70c9-11 14-20 11-27-8 1-15 9-18 22" stroke="currentColor" stroke-width="1.4"/></svg>';

  /* ===== Smooth scroll for all .js-scroll links ===== */
  document.querySelectorAll(".js-scroll").forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = link.getAttribute("href");
      if (href && href.charAt(0) === "#") {
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          closeMobileMenu();
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  /* ===== Header scroll state ===== */
  var header = document.getElementById("siteHeader");
  function onScrollHeader() {
    if (window.scrollY > 60) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  /* ===== Mobile menu ===== */
  var mobileMenu = document.getElementById("mobileMenu");
  var mobileMenuBtn = document.getElementById("mobileMenuBtn");
  var mobileMenuClose = document.getElementById("mobileMenuClose");
  function openMobileMenu() {
    mobileMenu.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeMobileMenu() {
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
  }
  mobileMenuBtn.addEventListener("click", openMobileMenu);
  mobileMenuClose.addEventListener("click", closeMobileMenu);

  /* ===== Scroll reveal ===== */
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12 }
  );
  function observeReveals() {
    document.querySelectorAll(".reveal, .image-reveal").forEach(function (node) {
      revealObserver.observe(node);
    });
  }

  /* ===== Menu section (category tabs) ===== */
  var menuGrid = document.getElementById("menuGrid");
  var menuTabs = document.getElementById("menuTabs");

  function renderMenu(category) {
    var items = menuItems.filter(function (item) {
      return item.cat === category || (category === "Vegetarian" && item.veg);
    });
    menuGrid.innerHTML = items
      .map(function (item) {
        return (
          '<div class="col-12 col-md-6 col-lg-4">' +
          '<article class="menu-card menu-in">' +
          '<div class="menu-card-img-wrap">' +
          '<img src="' + item.image + '" alt="' + item.name + '" loading="lazy" />' +
          (item.popular ? '<span class="menu-popular-badge">Popular</span>' : "") +
          "</div>" +
          '<div class="menu-card-body">' +
          '<div class="menu-card-title-row"><h3>' + item.name + '</h3><span class="menu-card-price">' + item.price + "</span></div>" +
          '<p class="menu-card-desc">' + item.desc + "</p>" +
          '<span class="veg-dot' + (item.veg ? " is-veg" : "") + '" title="' + (item.veg ? "Vegetarian" : "Non-vegetarian") + '"><span></span></span>' +
          "</div>" +
          "</article>" +
          "</div>"
        );
      })
      .join("");
  }

  menuTabs.querySelectorAll(".menu-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      menuTabs.querySelectorAll(".menu-tab").forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      renderMenu(tab.dataset.cat);
    });
  });
  renderMenu("Biryani");

  document.getElementById("discoverBiryaniBtn").addEventListener("click", function () {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
    window.setTimeout(function () {
      var biryaniTab = menuTabs.querySelector('[data-cat="Biryani"]');
      if (biryaniTab) biryaniTab.click();
    }, 400);
  });

  /* ===== Spice trail ===== */
  var spiceTrail = document.getElementById("spiceTrail");
  spiceTrail.innerHTML = spices
    .map(function (s, i) {
      return (
        '<article class="spice-item">' +
        '<span class="spice-item-num">' + s[0] + "</span>" +
        '<div class="spice-item-icon">' + spiceMarkSvg + "</div>" +
        "<h3>" + s[1] + "</h3>" +
        "<p>" + s[2] + "</p>" +
        "</article>"
      );
    })
    .join("");

  /* ===== Gallery + lightbox ===== */
  var galleryGrid = document.getElementById("galleryGrid");
  galleryGrid.innerHTML = galleryImages
    .map(function (img, i) {
      return (
        '<button class="gallery-item ' + img.cls + '" data-index="' + i + '" aria-label="View ' + img.alt + '">' +
        '<img src="' + img.src + '" alt="' + img.alt + '" loading="lazy" />' +
        '<span class="gallery-overlay">View image →</span>' +
        "</button>"
      );
    })
    .join("");

  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCount = document.getElementById("lightboxCount");
  var activeIndex = 0;

  function openLightbox(index) {
    activeIndex = index;
    updateLightbox();
    lightbox.classList.add("open");
  }
  function updateLightbox() {
    lightboxImg.src = galleryImages[activeIndex].src;
    lightboxImg.alt = galleryImages[activeIndex].alt;
    lightboxCount.textContent = activeIndex + 1 + " / " + galleryImages.length;
  }
  function closeLightbox() {
    lightbox.classList.remove("open");
  }
  function nextImage() {
    activeIndex = (activeIndex + 1) % galleryImages.length;
    updateLightbox();
  }
  function prevImage() {
    activeIndex = (activeIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightbox();
  }

  galleryGrid.querySelectorAll(".gallery-item").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openLightbox(parseInt(btn.dataset.index, 10));
    });
  });
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxNext").addEventListener("click", nextImage);
  document.getElementById("lightboxPrev").addEventListener("click", prevImage);
  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  });

  /* ===== Reviews carousel ===== */
  var reviewQuote = document.getElementById("reviewQuote");
  var reviewIndex = 0;
  function renderReview() {
    reviewQuote.textContent = reviews[reviewIndex];
    reviewQuote.classList.remove("menu-in");
    void reviewQuote.offsetWidth;
    reviewQuote.classList.add("menu-in");
  }
  renderReview();
  document.getElementById("reviewNext").addEventListener("click", function () {
    reviewIndex = (reviewIndex + 1) % reviews.length;
    renderReview();
  });
  document.getElementById("reviewPrev").addEventListener("click", function () {
    reviewIndex = (reviewIndex - 1 + reviews.length) % reviews.length;
    renderReview();
  });

  /* ===== Floating controls ===== */
  var backToTop = document.getElementById("backToTop");
  var callFab = document.getElementById("callFab");
  var mobileBar = document.getElementById("mobileBar");
  function onScrollFloating() {
    var shown = window.scrollY > window.innerHeight * 0.75;
    backToTop.classList.toggle("show", shown);
    callFab.classList.toggle("show", shown);
    mobileBar.classList.toggle("show", shown);
  }
  onScrollFloating();
  window.addEventListener("scroll", onScrollFloating, { passive: true });
  backToTop.addEventListener("click", function () {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  });

  /* Kick off reveal observers after all dynamic content is in the DOM */
  observeReveals();
});
