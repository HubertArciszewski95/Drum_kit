const numberOfDrumButtons = document.querySelectorAll(".drum").length

// Mouse event listener
for (let i = 0; i < numberOfDrumButtons; i++) {
    let element = document.querySelectorAll(".drum")[i];
    
    // Add listener to all drum buttons on page
    element.addEventListener("click", () => {
        // This is reffering to the clicked element
        playSong(element.textContent);
    });
}

// Keyboard event listener
document.addEventListener("keypress", (event) => {
    const aviableKeys = ["wasdjkl"];
    let keyPress = event.key;
    let pattern = new RegExp(keyPress);
    let aviableKeyPress = pattern.test(aviableKeys);

    if (aviableKeyPress) {
        playSong(keyPress);
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

 