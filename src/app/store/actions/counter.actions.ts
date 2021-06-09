
export const INCREMENT="INCREMENT";
export const DECREMENT="DECREMENT";
export const ADD_COUNTER="ADD_COUNTER";

export class Increment{
  readonly type=INCREMENT;

}
export class Decrement{
  readonly type=DECREMENT;

}
export class AddCounter{
  readonly type=ADD_COUNTER;
  constructor(public value:number){}

  };


export type CounterAction=AddCounter|Increment|Decrement;
