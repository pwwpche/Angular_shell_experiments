import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-heroes-2-2',
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  heroes : String = "HeroesComponent2_2";

  listData: String[] = ['a', 'b', 'c', 'd'];
  
}