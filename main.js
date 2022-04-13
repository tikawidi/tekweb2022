Vue.createApp({
    data() {
      return {
        message: "Hello Vue!",
        header: {
          title: "Widi Pinastika Istirofah",
          description:
            "Belajar ngoding asik dan menyenangkan jika berusaha",
          social: {
            ig: {
              url: "#",
              title: "widi_pinastika_istirofah",
            },
            gh: {
              url: "#",
              title: "tikawidi",
            },

          },
          imageProfile:
            "Widi.png",

          articles: [
                {
                  title: 'The Magic of Vue',
                  description: "This is your first looping using Vue",
                  thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
                }
              ]

        },
      };
    },
  }).mount("#app");
  