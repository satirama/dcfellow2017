import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as d3 from 'd3';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.styl']
})
export class AuthorsComponent implements OnInit {

  authorList: any;

  constructor(private http: Http) { }

  getData(){
    this.http.get('http://localhost:3000/books/authors')
    .subscribe((res: Response) => this.authorList = res.json())
  }

  ngOnInit() {
    this.getData();
  }

}
