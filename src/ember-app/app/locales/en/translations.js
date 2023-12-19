import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrilozhenie_4ДолжностьLForm from './forms/i-i-s-prilozhenie-4-должность-l';
import IISPrilozhenie_4ОтчетОСервереLForm from './forms/i-i-s-prilozhenie-4-отчет-о-сервере-l';
import IISPrilozhenie_4РасположениеLForm from './forms/i-i-s-prilozhenie-4-расположение-l';
import IISPrilozhenie_4СенсорыLForm from './forms/i-i-s-prilozhenie-4-сенсоры-l';
import IISPrilozhenie_4СервернаяLForm from './forms/i-i-s-prilozhenie-4-серверная-l';
import IISPrilozhenie_4СотрудникLForm from './forms/i-i-s-prilozhenie-4-сотрудник-l';
import IISPrilozhenie_4ДолжностьEForm from './forms/i-i-s-prilozhenie-4-должность-e';
import IISPrilozhenie_4ОтчетОСервереEForm from './forms/i-i-s-prilozhenie-4-отчет-о-сервере-e';
import IISPrilozhenie_4РасположениеEForm from './forms/i-i-s-prilozhenie-4-расположение-e';
import IISPrilozhenie_4СенсорыEForm from './forms/i-i-s-prilozhenie-4-сенсоры-e';
import IISPrilozhenie_4СервернаяEForm from './forms/i-i-s-prilozhenie-4-серверная-e';
import IISPrilozhenie_4СотрудникEForm from './forms/i-i-s-prilozhenie-4-сотрудник-e';
import IISPrilozhenie_4ДолжностьModel from './models/i-i-s-prilozhenie-4-должность';
import IISPrilozhenie_4КонтроллерModel from './models/i-i-s-prilozhenie-4-контроллер';
import IISPrilozhenie_4ОтчетОСервереModel from './models/i-i-s-prilozhenie-4-отчет-о-сервере';
import IISPrilozhenie_4РасположениеModel from './models/i-i-s-prilozhenie-4-расположение';
import IISPrilozhenie_4СенсорыModel from './models/i-i-s-prilozhenie-4-сенсоры';
import IISPrilozhenie_4СервернаяModel from './models/i-i-s-prilozhenie-4-серверная';
import IISPrilozhenie_4СотрудникModel from './models/i-i-s-prilozhenie-4-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-4-должность': IISPrilozhenie_4ДолжностьModel,
    'i-i-s-prilozhenie-4-контроллер': IISPrilozhenie_4КонтроллерModel,
    'i-i-s-prilozhenie-4-отчет-о-сервере': IISPrilozhenie_4ОтчетОСервереModel,
    'i-i-s-prilozhenie-4-расположение': IISPrilozhenie_4РасположениеModel,
    'i-i-s-prilozhenie-4-сенсоры': IISPrilozhenie_4СенсорыModel,
    'i-i-s-prilozhenie-4-серверная': IISPrilozhenie_4СервернаяModel,
    'i-i-s-prilozhenie-4-сотрудник': IISPrilozhenie_4СотрудникModel
  },

  'application-name': 'Prilozhenie_4',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Prilozhenie_4',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie_4',
          title: 'Prilozhenie_4'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'prilozhenie-4': {
          caption: 'Prilozhenie_4',
          title: 'Prilozhenie_4',
          'i-i-s-prilozhenie-4-отчет-о-сервере-l': {
            caption: 'Отчет о сервере',
            title: ''
          },
          'i-i-s-prilozhenie-4-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-prilozhenie-4-сенсоры-l': {
            caption: 'Сенсоры',
            title: ''
          },
          'i-i-s-prilozhenie-4-серверная-l': {
            caption: 'Серверная',
            title: ''
          },
          'i-i-s-prilozhenie-4-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-prilozhenie-4-расположение-l': {
            caption: 'Расположение',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-prilozhenie-4-должность-l': IISPrilozhenie_4ДолжностьLForm,
    'i-i-s-prilozhenie-4-отчет-о-сервере-l': IISPrilozhenie_4ОтчетОСервереLForm,
    'i-i-s-prilozhenie-4-расположение-l': IISPrilozhenie_4РасположениеLForm,
    'i-i-s-prilozhenie-4-сенсоры-l': IISPrilozhenie_4СенсорыLForm,
    'i-i-s-prilozhenie-4-серверная-l': IISPrilozhenie_4СервернаяLForm,
    'i-i-s-prilozhenie-4-сотрудник-l': IISPrilozhenie_4СотрудникLForm,
    'i-i-s-prilozhenie-4-должность-e': IISPrilozhenie_4ДолжностьEForm,
    'i-i-s-prilozhenie-4-отчет-о-сервере-e': IISPrilozhenie_4ОтчетОСервереEForm,
    'i-i-s-prilozhenie-4-расположение-e': IISPrilozhenie_4РасположениеEForm,
    'i-i-s-prilozhenie-4-сенсоры-e': IISPrilozhenie_4СенсорыEForm,
    'i-i-s-prilozhenie-4-серверная-e': IISPrilozhenie_4СервернаяEForm,
    'i-i-s-prilozhenie-4-сотрудник-e': IISPrilozhenie_4СотрудникEForm
  },

});

export default translations;
