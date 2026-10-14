    (function () {
      var loader = document.getElementById("loader");
      var menuButton = document.getElementById("menu-toggle");
      var navLinks = document.getElementById("nav-links");
      var themeButton = document.getElementById("theme-toggle");
      var root = document.documentElement;

      function hideLoader() {
        window.setTimeout(function () {
          if (loader) loader.classList.add("is-hidden");
        }, 250);
      }
      if (document.readyState === "complete") hideLoader();
      else window.addEventListener("load", hideLoader, { once: true });

      themeButton.addEventListener("click", function () {
        var nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
        root.dataset.theme = nextTheme;
        themeButton.setAttribute("aria-label", nextTheme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
        try {
          localStorage.setItem("viri-dental-theme", nextTheme);
        } catch (error) {
          // El tema sigue funcionando aunque el navegador bloquee el almacenamiento local.
        }
      });

      menuButton.addEventListener("click", function () {
        var isOpen = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
        navLinks.classList.toggle("is-open", !isOpen);
      });
      navLinks.addEventListener("click", function (event) {
        if (event.target.closest("a")) {
          navLinks.classList.remove("is-open");
          menuButton.setAttribute("aria-expanded", "false");
          menuButton.setAttribute("aria-label", "Abrir menú");
        }
      });
      document.getElementById("year").textContent = String(new Date().getFullYear());
    }());
