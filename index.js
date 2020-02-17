const numberOfDrumButtons = document.querySelectorAll(".drum").length

// Mouse event listener
for (let i = 0; i < numberOfDrumButtons; i++) {
    let element = document.querySelectorAll(".drum")[i];
    
    // Add listener to all drum buttons on page
    element.addEventListener("click", () => {
        // This is reffering to the clicked element
        playSong(element.textContent);
        animation(element.textContent);
    });
}

// Keyboard event listener
document.addEventListener("keydown", (event) => {
    const aviableKeys = ["wasdjkl"];
    let keyPress = event.key;
    let pattern = new RegExp(keyPress);
    let aviableKeyPress = pattern.test(aviableKeys);

    if (aviableKeyPress) {
        playSong(keyPress);
        animation(keyPress);
    }
    else {
        console.error(`Not aviable key was pressed - ${keyPress}`);
    }
});

const sounds = {
    w: "tom-1.mp3",
    a: "tom-2.mp3",
    s: "tom-3.mp3",
    d: "tom-4.mp3",
    j: "snare.mp3",
    k: "crash.mp3",
    l: "kick-bass.mp3"
}

const playSong = (buttonClick) => {
    const audio = new Audio(`./sounds/${sounds[buttonClick]}`);
    audio.play(); 
}

const animation = (buttonClick) => {
    const keys = { w: 0, a: 1, s: 2, d: 3, j: 4, k: 5, l: 6 }
    let element = document.querySelectorAll(".drum")[keys[buttonClick]];

    element.classList.add("pressed");

    setTimeout( () => {
        element.classList.remove("pressed");
    }, 200);
}