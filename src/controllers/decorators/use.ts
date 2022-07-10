import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middelwares =
      Reflect.getMetadata(MetadataKeys.middelware, target, key) || [];

    middelwares.push(middleware);

    Reflect.defineMetadata(MetadataKeys.middelware, middelwares, target, key);
  };
}
