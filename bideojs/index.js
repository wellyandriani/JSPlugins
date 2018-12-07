(function () {

    var bv = new Bideo();
    bv.init({
      videoEl: document.querySelector('#background_video'),
  
      container: document.querySelector('body'),
  
      resize: true,
  
      isMobile: window.matchMedia('(max-width: 768px)').matches,
  
      playButton: document.querySelector('#play'),
      pauseButton: document.querySelector('#pause'),
  
      src: [
        {
          src: 'https://storage.googleapis.com/coverr-main/mp4/Two-Swimmers.mp4',
          type: 'video/mp4'
        },
        {
          src: 'night.webm',
          type: 'video/webm;codecs="vp8, vorbis"'
        }
      ],
  
      onLoad: function () {
        document.querySelector('#video_cover').style.display = 'none';
      }
    });
  }());
  