import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent)
  child: ChildComponent = new ChildComponent;

  constructor() { }

  ngOnInit(): void {
    // this is the parent component
    console.log('ParentComponent.ngOnInit()');

    // this is the child component
    console.log('ParentComponent.ngOnInit() this.child', this.child.ngOnInit());
  }

}
