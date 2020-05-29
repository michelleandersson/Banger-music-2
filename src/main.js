const app = new Vue({
    el: '#top-ten', 
    data: {
      topSongs: []
    },
    // Mounted hook is being called after the app is fully initialized
    mounted: function() {
      fetch('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=9&country=us&f_has_lyrics=1&apikey=e06708be7a728768734c486cd6c6547e')
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
      //searchResult: , 
    },
    // Mounted hook is being called after the app is fully initialized
    mounted: function() {
      fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track_artist=cher&page_size=10&page=1&s_track_rating=desc&apikey=e06708be7a728768734c486cd6c6547e`)
      .then(response => response.json())
      .then(findSongsResponce => {
        this.findSongs = findSongsResponce.message.body.track_list; 
      })
    } 
  }); 
