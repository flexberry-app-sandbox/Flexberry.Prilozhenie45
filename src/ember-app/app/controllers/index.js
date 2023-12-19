import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.prilozhenie-4.caption'),
          title: i18n.t('forms.application.sitemap.prilozhenie-4.title'),
          children: [{
            link: 'i-i-s-prilozhenie-4-отчет-о-сервере-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-4.i-i-s-prilozhenie-4-отчет-о-сервере-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-4.i-i-s-prilozhenie-4-отчет-о-сервере-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-4-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-4.i-i-s-prilozhenie-4-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-4.i-i-s-prilozhenie-4-сотрудник-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-4-сенсоры-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-4.i-i-s-prilozhenie-4-сенсоры-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-4.i-i-s-prilozhenie-4-сенсоры-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-4-серверная-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-4.i-i-s-prilozhenie-4-серверная-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-4.i-i-s-prilozhenie-4-серверная-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-4-должность-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-4.i-i-s-prilozhenie-4-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-4.i-i-s-prilozhenie-4-должность-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-4-расположение-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-4.i-i-s-prilozhenie-4-расположение-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-4.i-i-s-prilozhenie-4-расположение-l.title'),
            icon: 'tasks',
            children: null
          }]
        }
      ]
    };
  }),
})