import 'reflect-metadata';

function logType(target: any, key: string) {
  let t = Reflect.getMetadata('design:type', target, key);
  console.log(`${key} type: ${t.name}`);
}

class Demo {
  @logType
  private attr: string;
}
