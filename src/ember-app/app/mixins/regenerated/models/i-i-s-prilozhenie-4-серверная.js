import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDСерверной: DS.attr('number'),
  iP: DS.attr('string'),
  настройки: DS.attr('string'),
  порт: DS.attr('number'),
  протокол: DS.attr('string'),
  сотрудник: DS.belongsTo('i-i-s-prilozhenie-4-сотрудник', { inverse: null, async: false }),
  контроллер: DS.hasMany('i-i-s-prilozhenie-4-контроллер', { inverse: 'серверная', async: false })
});

export let ValidationRules = {
  iDСерверной: {
    descriptionKey: 'models.i-i-s-prilozhenie-4-серверная.validations.iDСерверной.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  iP: {
    descriptionKey: 'models.i-i-s-prilozhenie-4-серверная.validations.iP.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  настройки: {
    descriptionKey: 'models.i-i-s-prilozhenie-4-серверная.validations.настройки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  порт: {
    descriptionKey: 'models.i-i-s-prilozhenie-4-серверная.validations.порт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  протокол: {
    descriptionKey: 'models.i-i-s-prilozhenie-4-серверная.validations.протокол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-prilozhenie-4-серверная.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  контроллер: {
    descriptionKey: 'models.i-i-s-prilozhenie-4-серверная.validations.контроллер.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СервернаяE', 'i-i-s-prilozhenie-4-серверная', {
    iP: attr('IP', { index: 0 }),
    настройки: attr('Настройки', { index: 1 }),
    протокол: attr('Протокол', { index: 2 }),
    порт: attr('Порт', { index: 3 }),
    iDСерверной: attr('I d серверной', { index: 4 }),
    сотрудник: belongsTo('i-i-s-prilozhenie-4-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 6 })
    }, { index: 5, displayMemberPath: 'имя' }),
    контроллер: hasMany('i-i-s-prilozhenie-4-контроллер', 'Контроллер', {
      модель: attr('Модель', { index: 0 }),
      idКонтроллера: attr('', { index: 1 })
    })
  });

  modelClass.defineProjection('СервернаяL', 'i-i-s-prilozhenie-4-серверная', {
    iP: attr('IP', { index: 0 }),
    настройки: attr('Настройки', { index: 1 }),
    протокол: attr('Протокол', { index: 2 }),
    порт: attr('Порт', { index: 3 }),
    iDСерверной: attr('I d серверной', { index: 4 })
  });
};
