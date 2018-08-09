import { Component, OnInit, Input } from '@angular/core';
import { Postit } from './postit/postit.model';
import { PostitBoardService } from './postit-board.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postit-board',
  templateUrl: './postit-board.component.html',
  styleUrls: ['./postit-board.component.css']
})
export class PostitBoardComponent implements OnInit {
  
  postits: Postit[];
  
  constructor(private postitBoardService: PostitBoardService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.postitBoardService.getAllPostits(this.route.snapshot.params['id']).subscribe((postits: Postit[]) => {
      this.postits = postits;
    });
  }
}
