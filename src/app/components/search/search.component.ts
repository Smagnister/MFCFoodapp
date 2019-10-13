import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  constructor(public router: Router) { 
    
  }

  ngOnInit() {}

  searchInfo(){
    this.router.navigateByUrl('home');
  }

  openList(){
    this.router.navigateByUrl('search-list')
  }
}
