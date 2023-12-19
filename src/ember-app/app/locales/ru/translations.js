import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Prilozhenie_4',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie_4',
          title: 'Prilozhenie_4'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
