import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class BoardService {

  constructor(private http: HttpClient) { }
    
  apiUrl = 'https://5b5871296ab251001421b59b.mockapi.io/api/boards';
  
  deleteBoard(id: string) {
      return this.http.delete(`${ this.apiUrl }/${ id }`);
  }
}
