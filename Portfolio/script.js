// Nav Bar

const menu = document.querySelector(".menu")
const navbar = document.querySelector(".navbar")
// import Swiper from 'swiper/swiper-bundle.esm.js';
// import 'swiper/swiper-bundle.css';

menu.addEventListener('click', () => {
    navbar.classList.toggle('change')
    menu.classList.toggle("change")
})

// End of Nav Bar

// Section 2 Video
const video = document.querySelector(".video")
const btn = document.querySelector(".buttons i")
const bar = document.querySelector(".video-bar")

const playPause = () => {
    if(video.paused) {
        video.play()
        btn.className = "far fa-pause-circle"
        video.style.opacity = "0.7"
    } else {
        video.pause()
        btn.className = "far fa-play-circle"
        video.style.opacity = "0.3"
    }
   
}

btn.addEventListener('click', () => {
    playPause()
})

//time update event
video.addEventListener("timeupdate", () => {
    const barWidth = video.currentTime / video.duration
    bar.style.width = `${barWidth * 100}%`

    if(video.ended) {
        btn.className = "far fa-play-circle"
        video.style.opacity = "0.3"
    }
    // console.log(video.currentTime,video.duration)
})
// End of Section 2 Video

