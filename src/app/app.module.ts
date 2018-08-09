import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularDraggableModule } from 'angular2-draggable';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardComponent } from './dashboard/board/board.component';
import { ROUTES } from './app.routes';
import { DashboardService } from './dashboard/dashboard.service';
import { BoardService } from './dashboard/board/board.service';
import { PostitBoardComponent } from './postit-board/postit-board.component';
import { PostitComponent } from './postit-board/postit/postit.component';
import { PostitBoardService } from './postit-board/postit-board.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BoardComponent,
    PostitBoardComponent,
    PostitComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    AngularDraggableModule
  ],
  providers: [DashboardService, BoardService, PostitBoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
