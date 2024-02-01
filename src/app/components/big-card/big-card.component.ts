import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  photoCover: string = '';
  cardTitle: string = 'Update your game list now';
  cardDescription: string = 'streamings announces new games that are starting to gain conversation on social media around the world';

  
  constructor() {}

  ngOnInit(): void {}
}
