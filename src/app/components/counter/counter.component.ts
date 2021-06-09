
import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as counterActions from '../../store/actions/counter.actions'
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
counter:number
  constructor(private store:Store<{counter:number}>) { }

  ngOnInit(): void {
    this.store.subscribe(state=>{
      console.log("[STATE]",state);
      this.counter=state['ctr'].counter
    })
  }
  onIncriment()
  {
    //this.store.dispatch({type:"INCREMENT"})
    this.store.dispatch(new counterActions.Increment())
  }
  onDncriment()
  {
    // this.store.dispatch({type:"DECREMENT"})
    this.store.dispatch(new counterActions.Decrement())
  }
  onAdd(value){
    //this.store.dispatch({type:"ADD",value})
    this.store.dispatch(new counterActions.AddCounter(value))
  }
}
