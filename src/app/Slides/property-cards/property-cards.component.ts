import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { TrailPropertiesService } from '../Service/trail-properties.service';

@Component({
  selector: 'app-property-cards',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule, NgFor],
  templateUrl: './property-cards.component.html',
  styleUrl: './property-cards.component.css',
})
export class PropertyCardsComponent implements OnInit {
  trailPropertiesData: any = [];

  constructor(private trailProperty: TrailPropertiesService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.trailProperty.getTrailProperties().subscribe((data: any) => {
      this.trailPropertiesData = data.properties;
      console.log(this.trailPropertiesData);
    });
  }
}
