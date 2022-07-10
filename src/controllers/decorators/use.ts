import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middelwares =
      Reflect.getMetadata(MetadataKeys.middelware, target, key) || [];

    Reflect.defineMetadata(
      MetadataKeys.middelware,
      [...middelwares, middleware],
      target,
      key
    );
  };
}
