import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';

const routes: Routes = [
  {path:  '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'skills', component: Skills },
  { path: 'contact', component: Contact },
];

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl:'./app.html',
  styleUrls:['./app.css'],
  imports: [RouterModule, RouterOutlet],
})
export class App {}