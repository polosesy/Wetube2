const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

const startRecording = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      //video: { width: 1280, height: 720 }, 비디오 레코딩
    });
    videoPreview.srcObject = stream;
    videoPreview.muted = true; //비디오 레코딩시 음소거
    videoPreview.play();
  } catch (error) {
    recordBtn.innerHTML = "☹️ Cant record";
    recordBtn.removeEventListener("click", startRecording);
  }
};

function init() {
  recordBtn.addEventListener("click", startRecording);
}

if (recorderContainer) {
  init();
}
