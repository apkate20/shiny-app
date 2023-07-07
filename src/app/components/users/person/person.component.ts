import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  animations: [
    trigger("OpenClose", [
      state(
        "open",
        style({
          height: "200px",
          opacity: 1,
          backgroundColor: "yellow"
        })
      ),
      state(
        "closed",
        style({
          height: "200px",
          opacity: 0.5,
          backgroundColor: "green"
        })
      ),
      transition("open => closed", [animate("1s")]),
      transition("closed => open", [animate("0.5s")])


    ])
  ]
})
export class PersonComponent implements OnInit {
  isOpen = true;

  toggle(){
      this.isOpen =! this.isOpen;
  }
  ngOnInit(){}

}
