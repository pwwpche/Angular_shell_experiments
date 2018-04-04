import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html', 
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  heroes : String = "HeroesComponent2";

  listData: String[] = ['a2', 'b2', 'c2', 'd2'];
  
}