import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataTest } from '../../data/dataTest';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoContent: string =
    'https://logowik.com/content/uploads/images/avengers.jpg';
  contentTitle: string = 'Avengers Secret War';
  contentDescription: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vel repellat necessitatibus, magni ipsa minus, in, rem cupiditate voluptatum ea libero quaerat magnam distinctio excepturi enim explicabo alias a';
  private id: string | null = '0';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = dataTest.filter((article) => article.id == id);
    console.log(result);
    
    
  }
}
