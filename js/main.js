// Storyteller with Autocomplete Text
const storyOutput = document.getElementById('story');
const speedInput = document.getElementById('speed');

let storyText = `This is my story! There are many like it, but this on is mine.`;

let speedValue = 1;
let speed = 200 / speedInput.value;

function writeStory() {
    storyOutput.innerHTML = storyText.slice(0, speedValue);
    speedValue++;
    if (speedValue > storyText.length) {
        speedValue = 1;
    }
    setTimeout(writeStory, speed);
}

speedInput.addEventListener('input', e => {
    speed = 200 / e.target.value;
});

writeStory();