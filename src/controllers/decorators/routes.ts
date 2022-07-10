import 'reflect-metadata';

export function get(path: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata('path', path, target, key);
    // const pathValue = Reflect.getMetadata('path', target, key);
  };
}
