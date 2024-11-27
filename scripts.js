// Function to open the modal and display car details
function openModal(carId) {
    const carDetails = {
        car1: {
            title: "Ferrari LaFerrari",
            images: [
                "https://www.example.com/car1a.jpg",
                "https://www.example.com/car1b.jpg",
                "https://www.example.com/car1c.jpg"
            ],
            description: "The Ferrari LaFerrari is a hybrid hypercar with an awe-inspiring performance and futuristic design."
        },
        car2: {
            title: "Lamborghini Aventador",
            images: [
                "https://www.example.com/car2a.jpg",
                "https://www.example.com/car2b.jpg",
                "https://www.example.com/car2c.jpg"
            ],
            description: "With its bold styling and insane power, the Lamborghini Aventador is a dream car for enthusiasts."
        },
        // Add more car details for car3, car4, etc.
    };

    const modal = document.getElementById("carModal");
    const modalTitle = document.getElementById("carModalTitle");
    const modalDescription = document.getElementById("carModalDescription");
    const modalImages = document.getElementById("carModalImages");

    // Clear previous content
    modalImages.innerHTML = "";

    const car = carDetails[carId];
    modalTitle.textContent = car.title;
    modalDescription.textContent = car.description;

    // Create image elements for the carousel
    car.images.forEach(imgSrc => {
        const img = document.createElement("img");
        img.src = imgSrc;
        modalImages.appendChild(img);
    });

    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("carModal").style.display = "none";
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
