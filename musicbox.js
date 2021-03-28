import { BufferLoader } from "./bufferloader.js";
import { Audio } from "./audio.js";
import { View } from "./view.js";

window.onload = function () {
  let bufferLoader = new BufferLoader(
    Audio.audioContext,
    [
      "A4.mp3",
      "A5.mp3",
      "C4.mp3",
      "C5.mp3",
      "D4.mp3",
      "D5.mp3",
      "E4.mp3",
      "E5.mp3",
      "G4.mp3",
      "G5.mp3",
      "cymbal.wav",
      "perc1.wav",
      "perc2.wav",
      "perc3.wav",
      "perc4.wav",
      "perc5.wav",
      "perc6.wav",
    ],
    finishedLoading
  );
  bufferLoader.load();

  function finishedLoading(bufferList) {
    Audio.init(bufferList);

    let canvas = document.getElementById("canvas");
    let view = new View(canvas);

    //canvas.addEventListener("mousedown", view.handleClick.bind(view), false);
    canvas.addEventListener("mousedown", (e) => view.handleClick(e), false);
    //setInterval(view.updateDisplay.bind(view), view.frameRate);
    setInterval((e) => view.updateDisplay(e), view.frameRate);
  }
};
