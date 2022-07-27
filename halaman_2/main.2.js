let apiUrl = "https://tugas.widipinastikaistirofah.my.id/index.php/";

Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      header: {},
      articles: []
    };
  },
  methods:{    
      getHeaderData()
      {
        axios
          .get(apiUrl+"Artikel/getArtikelById/1")
          .then((res) => {              
            this.header = res.data;
            this.getArticles();
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getArticles()
      {
          axios
          .get(apiUrl+"Artikel/getArtikelById/1")
          .then((res) => {              
            this.articles = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
  },
  beforeMount() {
      this.getHeaderData()
  }
}).mount("#app");