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
          .get(
            "https://raw.githubusercontent.com/tikawidi/tekweb2022/articleuts/artikel_1.json"
          )
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
          .get(
            "https://raw.githubusercontent.com/tikawidi/tekweb2022/articleuts/artikel_3.json"
          )
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