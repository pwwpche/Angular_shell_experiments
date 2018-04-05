import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  heroes : String = "HeroesComponent 2";

  listData: String[] = ['a', 'b', 'c', 'd'];
  
}