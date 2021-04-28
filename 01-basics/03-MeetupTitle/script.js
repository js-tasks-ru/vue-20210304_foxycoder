import Vue from './vendor/vue.esm.browser.js';

new Vue({
  el: '#app',

  data() {
    return {
      meetups: [],
      activeMeetupId: '',
      activeMeetup: {},
      apiUrl: 'https://course-vue.javascript.ru/api',
      loading: false,
    }
  },

  methods: {
    getMeetup(id) {
      this.loading = true;
      fetch(`${this.apiUrl}/meetups/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.loading = false;
          this.activeMeetup = data;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    }
  },

  created() {
    this.getMeetupsList();
  },

  watch: {
    activeMeetupId: function (id) {
      this.getMeetup(id);
    }
  }
});
