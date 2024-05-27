import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TrailPropertiesService } from '../Service/trail-properties.service';
import { error } from 'console';

@Component({
  selector: 'app-single-property',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './single-property.component.html',
  styleUrl: './single-property.component.css',
})
export class SinglePropertyComponent implements OnInit {
  propertyId: string | null = null;
  propertyData: any = null;

  constructor(
    private trailProperty: TrailPropertiesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadPost();
  }

  loadPost() {
    this.route.paramMap.subscribe((params) => {
      this.propertyId = params.get('id');
      console.log('Property ID:', this.propertyId);
      if (this.propertyId) {
        this.trailProperty
          .getSingleProperty(this.propertyId)
          .subscribe((data: any) => {
            this.propertyData = data;
            console.log(data);
          });
      }
    });
  }
}
