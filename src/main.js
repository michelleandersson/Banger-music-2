const app = new Vue({
    el: '#top-ten', 
    data: {
      topSongs: [], 
      modal: false, 
      topSongsLyrics: []
    },
    methods: {
      modalAction: function(track_id) {
        if(this.modal == false){
          this.modal = true; 
          fetch('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id='+track_id+'&apikey=e06708be7a728768734c486cd6c6547e')
          .then(response => response.json())
          .then(topSongsLyricsResponce => {
          this.topSongsLyrics = topSongsLyricsResponce.message.body.lyrics}) 
        } else {
          this.modal = false
        } 
      }
    },
    // Mounted hook is being called after the app is fully initialized
    mounted: function() {
      fetch('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=e06708be7a728768734c486cd6c6547e')
      .then(response => response.json())
      .then(topSongsResponce => {
        this.topSongs = topSongsResponce.message.body.track_list; 
      })
    } 
  }); 

  const app2 = new Vue({
    el: '#find-song', 
    data: {
      findSongs: [], 
      songSearch: '', 
      modal2: false, 
      songLyrics: []
    },
    methods: {
      handleSubmit: function(){
        fetch('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track_artist='+this.songSearch+'&page_size=10&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=e06708be7a728768734c486cd6c6547e')
      .then(response => response.json())
      .then(findSongsResponce => {
        this.findSongs = findSongsResponce.message.body.track_list; 
      });

      }, 
      modalAction2: function(track) {
        if(this.modal2 == false){
          this.modal2 = true; 
          fetch('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id='+track+'&apikey=e06708be7a728768734c486cd6c6547e')
          .then(response => response.json())
          .then(songLyricsResponce => {
          this.songLyrics = songLyricsResponce.message.body.lyrics}) 
        } else {
          this.modal2 = false
        } 
      }
    }
  }); 

