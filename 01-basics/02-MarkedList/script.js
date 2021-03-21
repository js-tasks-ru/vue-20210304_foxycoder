import Vue from './vendor/vue.esm.browser.js';

// From https://jsonplaceholder.typicode.com/comments

const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

new Vue({
  el: '#app',
  data() {
    return {
      emails,
      filter: '',
    };
  },

  computed: {
    filteredEmails() {
      return [...this.emails]
        .map((item) => {
          return {
            email: item.toLowerCase(),
            marked: this.filter && item.toLowerCase().includes(this.filter.toLowerCase()),
          };
        })
        .sort((a, b) => {
          const emailA = a.email.toLowerCase();
          const emailB = b.email.toLowerCase();
          if (emailA < emailB) {
            return -1;
          }
          if (emailA > emailB) {
            return 1;
          }
          return 0;
        });
    },
  },
});
