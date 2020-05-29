const app = new Vue({
    el: '#vue-app', 
    data: {
      songs: []
    },
    // Mounted hook is being called after the app is fully initialized
    mounted: function() {
      fetch('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=us&f_has_lyrics=1&apikey=e06708be7a728768734c486cd6c6547e')
      .then(response => response.json())
      .then(songsResponce => {
        this.songs = songsResponce.message.body.track_list; 
      })
    } 
  }) 