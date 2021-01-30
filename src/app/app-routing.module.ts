import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'architecture', component: ArchitectureComponent },
  { path: 'projects', component: ProjectsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
