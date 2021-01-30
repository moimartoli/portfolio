import { Component, OnInit } from '@angular/core';
import * as projectdata  from './projects.json'; 


export interface Technologies
{
  img:string;
};


export interface Projects
{
  id:number;
  cardimg:string;
  title:string;
  content:string;
  technologies: Technologies[];

};


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})



export class ProjectsComponent implements OnInit {

  projects:Projects[] = (projectdata as any).default;

  constructor() { }

  ngOnInit(): void {
  }

}
