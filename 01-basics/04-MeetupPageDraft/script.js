import Vue from './vendor/vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение по идентификатору, например, изображение митапа
 * @param imageId {number} - идентификатор изображения
 * @return {string} - ссылка на изображение
 */
function getImageUrlByImageId(imageId) {
  return `${API_URL}/images/${imageId}`;
}

/**
 * Функция, возвращающая словарь заголовков по умолчанию для всех типов пунктов программы
 */
const getAgendaItemDefaultTitles = () => ({
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
});

/**
 * Функция, возвращая словарь иконок для для всех типов пунктов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const getAgendaItemIcons = () => ({
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
});

new Vue({
  el: '#app',

  data() {
    return {
      loading: false,
      meetup: null,
      meetupId: MEETUP_ID,
      apiUrl: API_URL,
    };
  },

  created() {
    this.getMeetupInfo(this.meetupId);
  },

  methods: {
    getMeetupInfo(id) {
      this.loading = true;
      fetch(`${this.apiUrl}/meetups/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.loading = false;
          this.meetup = data;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },

    getAgendaItemIcons() {
      return getAgendaItemIcons();
    },

    getImageUrlByImageId(imageId) {
      return getImageUrlByImageId(imageId);
    },

    getAgendaItemDefaultTitles() {
      return getAgendaItemDefaultTitles();
    },
  },

  filters: {
    localDate: function(value) {
      if (!value) return '';
      const date = new Date(value);
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timezone: 'UTC',
      };
      return date.toLocaleDateString("ru-RU", options);
    },
  },
});
