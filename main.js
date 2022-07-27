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
            .get(apiUrl+"Users/getUsersById/3")
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
              "https://raw.githubusercontent.com/tikawidi/tekweb2022/artikeljson/artikel.json"
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