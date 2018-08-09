import { Component, OnInit, Input } from '@angular/core';
import { Postit } from './postit.model';

@Component({
  selector: 'app-postit',
  templateUrl: './postit.component.html',
  styleUrls: ['./postit.component.css']
})
export class PostitComponent implements OnInit {
  
  @Input() postit: Postit;
  
  constructor() { }

  ngOnInit() {
  }

}
