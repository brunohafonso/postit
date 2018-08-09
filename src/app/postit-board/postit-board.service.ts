import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostitBoardService {

  constructor(private http: HttpClient) { }
    
  apiUrl = 'https://5b5871296ab251001421b59b.mockapi.io/api/boards';
  
  getAllPostits(id: string) {
      return this.http.get(` ${ this.apiUrl }/${ id }/postis `); 
  }
}
