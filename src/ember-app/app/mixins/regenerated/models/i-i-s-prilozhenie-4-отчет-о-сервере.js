import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  режим: DS.attr('i-i-s-prilozhenie-4-режим-сервера'),
  расположение: DS.belongsTo('i-i-s-prilozhenie-4-расположение', { inverse: null, async: false }),
  серверная: DS.belongsTo('i-i-s-prilozhenie-4-серверная', { inverse: null, async: false })
});

export let ValidationRules = {
  режим: {
    descriptionKey: 'models.i-i-s-prilozhenie-4-отчет-о-сервере.validations.режим.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расположение: {
    descriptionKey: 'models.i-i-s-prilozhenie-4-отчет-о-сервере.validations.расположение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  серверная: {
    descriptionKey: 'models.i-i-s-prilozhenie-4-отчет-о-сервере.validations.серверная.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчетОСервереE', 'i-i-s-prilozhenie-4-отчет-о-сервере', {
    режим: attr('Режим', { index: 0 }),
    расположение: belongsTo('i-i-s-prilozhenie-4-расположение', 'Расположение', {
      адрес: attr('Расположение', { index: 1 })
    }, { index: -1, hidden: true }),
    серверная: belongsTo('i-i-s-prilozhenie-4-серверная', 'Сервер', {

    }, { index: 2 })
  });

  modelClass.defineProjection('ОтчетОСервереL', 'i-i-s-prilozhenie-4-отчет-о-сервере', {
    режим: attr('Режим', { index: 0 })
  });
};
