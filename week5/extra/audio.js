function bindButtons(stream) {
  console.log('setup');
  var mediaRecorder = new MediaRecorder(stream);
  
  var recordBtn = document.getElementById('recordBtn');
  var audioContainer = document.getElementById('audioContainer');
  var recording = false;
  var chunks = [];
  
  console.log('state', mediaRecorder.state);

  
  mediaRecorder.addEventListener('dataavailable', function(evt) {
    chunks.push(evt.data);
  })
  
  mediaRecorder.addEventListener('stop', function() {
    console.log('stopped');
      var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
      chunks = [];
      var audioUrl = window.URL.createObjectURL(blob);
      var audioElem = document.createElement('audio');
      audioElem.controls = true;
      audioElem.src = audioUrl;
      audioContainer.appendChild(audioElem);
  });
  
  recordBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    console.log('click');
    if(recording) {
      recordBtn.classList.remove('recording');
      recordBtn.innerHTML = 'Start;'
      mediaRecorder.stop();
      console.log('stop state', mediaRecorder.state);

    } else {
      recordBtn.classList.add('recording');
      recordBtn.innerHTML = 'Stop';
      chunks = [];
      mediaRecorder.start();
      console.log('start state', mediaRecorder.state);
    }
    recording = !recording;
    
    
  });
}

function enableAudio() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
     console.log('getUserMedia supported');
     navigator.mediaDevices.getUserMedia(
        {
           audio: true
        })
        .then(bindButtons)

        // Error callback
        .catch(function(err) {
           console.log('The following getUserMedia error occured: ' + err);
        }
     );
  } else {
     console.log('getUserMedia not supported on your browser!');
  }
}

enableAudio();
