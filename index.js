const numberOfDrumButtons = document.querySelectorAll(".drum").length

// Mouse event listener
for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // This is reffering to the clicked element
        playSong(this.textContent);
    });
}

// Keyboard event listener
document.addEventListener("keypress", function (event) {
    const aviableKeys = ["w", "a", "s", "d", "j", "k", "l"];
    playSong(event.key);
})

const sounds = {
    w: "tom-1.mp3",
    a: "tom-2.mp3",
    s: "tom-3.mp3",
    d: "tom-4.mp3",
    j: "snare.mp3",
    k: "crash.mp3",
    l: "kick-bass.mp3"
}

function playSong (buttonClick) {
    const audio = new Audio(`./sounds/${sounds[buttonClick]}`);
    audio.play(); 
}

 