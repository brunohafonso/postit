import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

import { Board } from './board.model';
import { faTrashAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { BoardService } from './board.service';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  
  faTrashAlt = faTrashAlt;
  faExternalLinkAlt = faExternalLinkAlt;
  
  @Input() board: Board;
  @Output() updatedBoards =  new EventEmitter();
  
  constructor(private router: Router, private dashboardService: DashboardService, private boardService: BoardService) { }

  ngOnInit() {
  }
  
  //metodo para excluir o quadro
  deleteBoard(board: Board) {
    if(confirm(`Are you sure you want to delete  ${ board.name } ?`)) {
      this.boardService.deleteBoard(board.id).subscribe(() =>{
        this.teste();  
      });
    }
  } 
  
  teste() {
    this.dashboardService.getAllBoards().subscribe((boards: Board[]) => {
      this.updatedBoards.emit(boards);
    });
  }
}
