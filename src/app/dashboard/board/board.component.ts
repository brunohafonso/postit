import { Component, OnInit, Input } from '@angular/core';

import { Board } from './board.model'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  
  @Input() board: Board
  
  constructor() { }

  ngOnInit() {
  }

}
