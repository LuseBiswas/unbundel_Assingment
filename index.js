document.addEventListener("DOMContentLoaded", function () {

    var treatmentsDropdown = document.getElementById('treatments-dropdown');
    var treatmentsMenu = document.getElementById('treatments-menu');

    treatmentsDropdown.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the click event from bubbling up to the document

        // Toggle the visibility of the dropdown menu
        treatmentsMenu.classList.toggle('show-dropdown');
    });

    // Add event listener to hide dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!treatmentsDropdown.contains(event.target)) {
            treatmentsMenu.classList.remove('show-dropdown');
        }
    });

    const popup = document.querySelector(".popup");
    const closeBtn = document.querySelector(".close");
  
    // Show popup when the page loads
    popup.style.display = "block";
    document.body.style.overflow = "hidden"; // Disable scrolling on the background
  
    // Close popup when the close button is clicked
    closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
      document.body.style.overflow = "auto"; // Enable scrolling on the background
    });










    const slider = document.querySelector(".slider");
    const images = slider.querySelectorAll("img");
    const sliderPointer = document.querySelector(".slider-pointer");

    let currentImageIndex = 0;

    // Function to show current image
    function showImage(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        setActivePointer(index);
    }

    // Function to set active pointer
    function setActivePointer(index) {
        const pointers = sliderPointer.querySelectorAll("span");
        pointers.forEach((pointer, i) => {
            if (i === index) {
                pointer.classList.add("active");
            } else {
                pointer.classList.remove("active");
            }
        });
    }

    // Initialize slider
    function initSlider() {
        // Create pointers
        images.forEach((image, index) => {
            const pointer = document.createElement("span");
            pointer.addEventListener("click", () => showImage(index));
            sliderPointer.appendChild(pointer);
        });

        // Show first image initially
        showImage(currentImageIndex);

        // Start automatic slide
        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        }, 2000); // Change slide duration (in milliseconds) as needed
    }

    initSlider();

    // Dropdown functionality for selecting cities
    const selectCity = document.querySelector(".select-city");
    const cityList = document.querySelector(".city-list");

    selectCity.addEventListener("click", function () {
        cityList.style.display = cityList.style.display === "block" ? "none" : "block";
    });

    // Close the city list when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".select-city")) {
            cityList.style.display = "none";
        }
    });



    //-------------------

    const productContainers = [...document.querySelectorAll('.product-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    productContainers.forEach((item, i)=>{
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', ()=>{
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', ()=>{
            item.scrollLeft -= containerWidth;
        })
    })

});
