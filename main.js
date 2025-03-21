
        function toggleMenu() {
            var navLinks = document.getElementById("navLinks");
            navLinks.classList.toggle("show");
        }
        

        // Close menu when clicking outside
        document.addEventListener("click", function(event) {
            var navLinks = document.getElementById("navLinks");
            var menuIcon = document.querySelector(".menu-icon");

            // Check if the clicked area is outside the menu and the menu icon
            if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
                navLinks.classList.remove("show");
            }
        });
  