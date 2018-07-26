import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Board } from '../dashboard/board/board.model';

@Injectable()

export class DashboardService {

  constructor(private http: HttpClient) { }

  apiUrl = 'https://5b5871296ab251001421b59b.mockapi.io/api/boards'; 
    
  getAllBoards() {
      return this.http.get(`${ this.apiUrl }`);
  }
  
  insertBoard(board: Board) {
    return this.http.post(`${ this.apiUrl }`, board);
  }
}
