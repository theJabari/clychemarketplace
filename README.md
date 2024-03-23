<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ClycheGraphics</title>
  <link rel="stylesheet" href="nav.css">
  <link rel="stylesheet" href="styles.css"> <!-- Added styles for the side menu -->
</head>
<body>
  <div class="menu-btn" id="menuBtn">&#9776; Menu</div>
  <div class="side-menu" id="sideMenu">
    <a href="home.html">Home</a>
    <a href="ContactUs.html">Contact Us</a>
    <a href="list.html">Product List</a>
    <!-- Add more menu items as needed -->
  </div>

  <header>
    <div style="margin-bottom: 20px">
      <div class="plain-back">
        <div class="logo-clyche">
          <img src="Assects/clyche.png" alt="no-pics" />
        </div>
      </div>
    </div>
    
    <div class="market-logo">
      <img src="Assects/market.jpg" alt="this is market">
    </div>
  </header>

  <script>
    document.addEventListener("DOMContentLoaded", function() {
      const menuBtn = document.getElementById('menuBtn');
      const sideMenu = document.getElementById('sideMenu');
      const categoryNav = document.querySelector('.category-nav');
      const dropdownToggles = document.querySelectorAll(".category-nav > ul > li > a");

      menuBtn.addEventListener('click', function() {
        sideMenu.classList.toggle('active');
      });

      dropdownToggles.forEach((toggle) => {
        toggle.addEventListener("click", function(e) {
          e.preventDefault();
          const dropdown = this.nextElementSibling;
          dropdown.classList.toggle("show");
        });
      });
    });
  </script>
</body>
</html>
