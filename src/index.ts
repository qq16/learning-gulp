import 'reflect-metadata';

function logParamTypes(target: any, key: string) {
  const t = Reflect.getMetadata('design:paramtypes', target, key);
  const r = Reflect.getMetadata('design:returntype', target, key);
  const s = t.map((i:{name:string})=>i.name).join();
  console.log(`${key} type: ${s} ${r.name}`);
}

declare interface IFoo {

}

class Demo {
  @logParamTypes // apply parameter decorator
    doSomething(
      param1: string,
      param2: number,
      param3: any,
      param4: { test: string },
      param5: IFoo,
      param6: Function,
      param7: (a: number) => void,
    ): number {
      return 1;
    }
}
