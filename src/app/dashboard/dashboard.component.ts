import { Component, OnInit } from '@angular/core';

import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Board } from '../dashboard/board/board.model';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // icones
  faPlusSquare = faPlusSquare;
  
  // objeto para adicionar novo quadro
  newBoard = new Board();
  
  //arrays que armazenam os quadros
  boards: Board[];
  boardsBackup: Board[];
  
  // variavel que armazena o filtro
  filter: string;
  
  // variavel que mostra o input de cadastro de board
  creatingBoard = false;
  
  // variavel que habilita o save button
  inputValid = false;
  
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getAllBoards().subscribe((boards: Board[]) => {
      this.boards = boards;
      this.boardsBackup = boards; 
    });
  }
  
  // metodo que mostra o input e limpa o mesmo
  addBoard() {
    this.newBoard = new Board();
    this.creatingBoard = true;
  }
  
  // metodo que salva os dados no banco
  saveBoard() {
    this.newBoard.id = this.newBoard.name;
    this.newBoard.createAt = new Date().toString();
    console.log(this.newBoard);
    this.dashboardService.insertBoard(this.newBoard).subscribe(() => {
      this.dashboardService.getAllBoards().subscribe((boards: Board[]) => {
        this.boards = boards;
        this.boardsBackup = boards; 
      });
    });
    this.creatingBoard = false;
  }
  
  updateBoards(boards: Board[]) {
    this.boards = boards;
  }
  
  // metodo que esconde o input
  cancelCreateBoard() {
    this.creatingBoard = false;
  }
  
  // metodo que verifica se o inout é valido
  checkInput() {
    if(this.newBoard.name.length > 0) {
      this.inputValid = true;
    } else {
      this.inputValid = false;
    }
  }
  
  filterBoards() {
    if(this.filter.length > 0) {
      this.boards = this.boardsBackup;
      this.boards = this.boards.filter(board => board.name.toUpperCase().includes(this.filter.toUpperCase()));
    } else {
      this.boards = this.boardsBackup;
    }
  }
}
