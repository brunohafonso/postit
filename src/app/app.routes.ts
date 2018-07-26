import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PostitBoardComponent } from './postit-board/postit-board.component';

const ROUTES: Routes = [
    { path: '', component: DashboardComponent },
    { path: ':id', component: PostitBoardComponent }
];

export { ROUTES };