// Collect all image elements
const images = [
    document.getElementById('photo1'),
    document.getElementById('photo2'),
    document.getElementById('photo3'),
    document.getElementById('photo4'),
    document.getElementById('photo5'),
    document.getElementById('photo6'),
    document.getElementById('photo7'),
    document.getElementById('photo8'),
    document.getElementById('photo9'),
    document.getElementById('photo10'),
    document.getElementById('photo11'),
    document.getElementById('photo12'),
    document.getElementById('photo13'),
    document.getElementById('photo14'),
    document.getElementById('photo15'),
    document.getElementById('photo16')
];

let currentImage = 0;
const changeInterval = 900000; // 15 minutes in milliseconds
let countdown = changeInterval / 1000; // In seconds

const timerElement = document.getElementById('timer');

// Update the timer display
const updateTimer = () => {
    let minutes = Math.floor(countdown / 60);
    let seconds = countdown % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} left`;
};

// Change the image automatically
const changeImage = () => {
    images[currentImage].classList.remove('visible');
    images[currentImage].classList.add('hidden');

    currentImage = (currentImage + 1) % images.length;

    images[currentImage].classList.remove('hidden');
    images[currentImage].classList.add('visible');

    countdown = changeInterval / 1000;
    updateTimer();
};

// Manual navigation to the next photo
const nextPhoto = () => {
    images[currentImage].classList.remove('visible');
    images[currentImage].classList.add('hidden');

    currentImage = (currentImage + 1) % images.length;

    images[currentImage].classList.remove('hidden');
    images[currentImage].classList.add('visible');

    resetTimer();
};

// Manual navigation to the previous photo
const previousPhoto = () => {
    images[currentImage].classList.remove('visible');
    images[currentImage].classList.add('hidden');

    currentImage = (currentImage - 1 + images.length) % images.length;

    images[currentImage].classList.remove('hidden');
    images[currentImage].classList.add('visible');

    resetTimer();
};

// Reset the timer and restart the automatic slideshow
const resetTimer = () => {
    countdown = changeInterval / 1000;
    updateTimer();
    clearInterval(autoChange);
    autoChange = setInterval(changeImage, changeInterval);
};

// Countdown every second
setInterval(() => {
    countdown--;
    updateTimer();
}, 1000);

// Automatically change image at the interval
let autoChange = setInterval(changeImage, changeInterval);
