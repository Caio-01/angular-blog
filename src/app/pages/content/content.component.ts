import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataTest } from '../../data/dataTest';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoContent: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = '0';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataTest.filter((article) => article.id == id)[0];
    this.photoContent = result.photoContent
    this.contentTitle = result.title;
    this.contentDescription = result.description;
  }
}
