import Vue from 'vue'
import VueI18n from 'vue-i18n'

import kg from './kg'
import ru from './ru'
import en from './en'

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'ru',
    messages: { kg, ru, en },
});

export default i18n;
