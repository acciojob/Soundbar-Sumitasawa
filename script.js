//your JS code here. If required.
document.addEventListener("DOMContentLoaded",()=>{
	const buttons=document.querySelectorAll(".btn");
	const stopButton=document.querySelector(".stop");

	let currentAudio=null;
	buttons.forEach(button=>{
		button.addEventListener("click",()=>{
			const soundFile=button.getAttribute("data-sound");

		 if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
	currentAudio = new Audio(`sounds/${soundFile}`);
    currentAudio.play();
		});
	});

	 stopButton.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio = null;
    }
  });
})