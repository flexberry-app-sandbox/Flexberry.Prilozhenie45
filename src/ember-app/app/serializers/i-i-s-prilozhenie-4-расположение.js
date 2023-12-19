import { Serializer as РасположениеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-4-расположение';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РасположениеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
