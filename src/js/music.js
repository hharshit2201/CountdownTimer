const playlist = [
    { src: 'audio/bhootni_ke.mp3', name: 'Bhootni Ke' },
    { src: 'audio/marad.mp3', name: 'Marad' }
    // Add more songs as needed
];

let currentTrackIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bgMusic');
    const musicControl = document.getElementById('musicControl');
    const musicIcon = musicControl.querySelector('.music-icon');
    const prevTrack = document.getElementById('prevTrack');
    const nextTrack = document.getElementById('nextTrack');
    const trackName = document.getElementById('trackName');

    function loadTrack(index) {
        const track = playlist[index];
        music.src = track.src;
        trackName.textContent = track.name;
        if (!music.muted) {
            music.play();
        }
    }

    function playNextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        loadTrack(currentTrackIndex);
    }

    function playPrevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
        loadTrack(currentTrackIndex);
    }

    // Auto play next track when current one ends
    music.addEventListener('ended', playNextTrack);

    // Track controls
    nextTrack.addEventListener('click', playNextTrack);
    prevTrack.addEventListener('click', playPrevTrack);

    // Mute/Unmute control
    musicControl.addEventListener('click', function() {
        if (music.muted) {
            music.muted = false;
            music.play();
            musicIcon.textContent = '🔊';
            musicControl.classList.remove('muted');
        } else {
            music.muted = true;
            musicIcon.textContent = '🔇';
            musicControl.classList.add('muted');
        }
    });

    // Initial load
    loadTrack(currentTrackIndex);
    music.muted = true; // Start muted
});
