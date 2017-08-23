import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.styl']
})
export class LibroComponent implements OnInit, OnDestroy {

  title: any;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {this.title = params['title'];});  
  }
  
  ngOnDestroy() {
    this.sub.unsuscribe();
  }
}
