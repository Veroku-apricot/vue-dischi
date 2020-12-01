var app = new Vue ({
  el: '#app',
  data: {
    albums: []
  },

  mounted: function () {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(response => {
        var i = 0;
        while (i < response.data.response.length) {
          this.albums.push(response.data.response[i]);
          i++;
        }
      });
    console.log(this.albums)
  }


})
