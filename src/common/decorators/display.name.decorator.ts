import { PropertyMetadata } from '../models/property-metadata';

export function DisplayName(name: string): PropertyDecorator {
  return function (target: any, propertyKey: string) {
    target.constructor.properties.push(new PropertyMetadata(propertyKey, name));
  };
}
