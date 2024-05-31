import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = [
    "Wanda",
    "Vision",
    "Black Panter",
    "SheHulk",
    "Eyehawk",
    "Spiderman",
    "Thor",
    "Hulk",
    "Ironman"
  ]

  public deletedHero?:string

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop()
    console.log(this.deletedHero)
  }

}
