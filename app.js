const app = Vue.createApp({
  data() {
    return {
      yourName: "Johnathant",
      yourAge: "18",
      linkImage:
        "https://ecdn.game4v.com/g4v-content/uploads/2021/02/Mugen-train-1-game4v.jpeg",
      nameInput: "Johnathant",
    };
  },
  methods: {
    incrementAge(age) {
      return parseInt(age) + 5;
    },

    randomNumber() {
      return Math.round(Math.random());
    },


  },
});

app.mount("#assignment");
