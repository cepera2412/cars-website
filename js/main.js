  // ====================================== Tab ===================================== 
  const tabItem = document.querySelectorAll('.choose-cars__tab-btn');
  const tabContent = document.querySelectorAll('.choose-cars__tab-item');

  tabItem.forEach(function(element) {
    element.addEventListener('click', open);
  });

  function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item) {
      item.classList.remove('choose-cars__tab-btn--active');
    });

    tabTarget.classList.add('choose-cars__tab-btn--active');

    tabContent.forEach(function(item) {
      item.classList.remove('choose-cars__tab-item--active');
    });

    document.querySelector(`#${button}`).classList.add('choose-cars__tab-item--active');
  }

// =======================================  Menu mobile =========================
function toggleDropdown() {
    var dropdownContent = document.querySelector('.disp');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}

// ========================================== Swiper ============================
const swiper = new Swiper(".swiper", {
    effect: "fade",
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

