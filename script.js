// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

// GSAP animations
gsap.from("header", { y: -50, opacity: 0, duration: 1 });
gsap.from("main section", { opacity: 0, y: 50, stagger: 0.2, duration: 1 });

// Login functionality
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');

loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add login logic here
    loginModal.style.display = 'none';
    loginBtn.textContent = 'Logout';
});

// Music player functionality
const playPauseBtn = document.getElementById('playPauseBtn');
let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        playPauseBtn.textContent = 'Play';
        // Add pause logic here
    } else {
        playPauseBtn.textContent = 'Pause';
        // Add play logic here
    }
    isPlaying = !isPlaying;
});

// Search functionality
const searchInput = document.querySelector('#search input');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', () => {
    // Add search logic here
    searchResults.innerHTML = '<p>Search results will appear here</p>';
});

// Playlist functionality
const playlists = document.getElementById('playlists');

function createPlaylist(name) {
    const playlist = document.createElement('div');
    playlist.textContent = name;
    playlists.appendChild(playlist);
}

createPlaylist('My Favorite Songs');
createPlaylist('Workout Mix');
