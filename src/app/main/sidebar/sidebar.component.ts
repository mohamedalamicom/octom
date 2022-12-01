import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  menu: Array<string>;

  constructor(private router:Router) {
    this.menu = ['dashboard', 'activity', 'ebooks', 'settings', 'messenger', 'files'];
  }

  navTo(url:string) {
    this.router.navigate(['/' + url]);
  }

}
