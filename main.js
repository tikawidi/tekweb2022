Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      header: {
        title: "Widi Pinastika Istirofah",
        description:
          "Ini adalah tempat saya untuk berbagi segala pengetahuan yang saya peroleh tentang koding dan teknologi.",
        social: {
          ig: {
            url: "#",
            title: "widi_pinastika_istirofah",
          },
          fb: {
            url: "#",
            title: "Widi Pinastika ",
          },
          yt: {
            url: "#",
            title: "Widi Pinastika ",
          },
        },
        imageProfile:
          "Widi.png",
      },
      articles: [
        {
          title: 'The Magic of Vue',
          description: "Articel",
          thumbnail: '1.png'
        }
      ],

      articless: [
        {
          title: 'The Magic of Vue',
          description: "Articel",
          thumbnail: '2.png'
        }
      ],

      articles3: [
        {
          title: 'The Magic of Vue',
          description: "Articel",
          thumbnail: '3.png'
        }
      ]
    };
  },

}).mount("#app");