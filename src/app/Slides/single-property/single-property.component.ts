import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TrailPropertiesService } from '../Service/trail-properties.service';
import { error } from 'console';
import { FormsModule } from '@angular/forms';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { response } from 'express';

@Component({
  selector: 'app-single-property',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgToastModule,
  ],
  templateUrl: './single-property.component.html',
  styleUrl: './single-property.component.css',
})
export class SinglePropertyComponent implements OnInit {
  propertyId: string | null = null;
  propertyData: any = null;

  constructor(
    private toast: NgToastService,
    private trailProperty: TrailPropertiesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadPost();
  }

  loadPost() {
    this.route.paramMap.subscribe((params) => {
      this.propertyId = params.get('id');
      if (this.propertyId) {
        this.trailProperty.getSingleProperty(this.propertyId).subscribe({
          next: (data) => {
            this.propertyData = data;
          },
          error: (error) => {
            console.error('server error', error.message);
          },
        });
      }
    });
  }

  LikeProperty() {
    this.route.paramMap.subscribe((params) => {
      this.propertyId = params.get('id');
      if (this.propertyId) {
        this.trailProperty.LikeProperty(this.propertyId).subscribe({
          next: (response) => {
            this.toast.success({
              detail: 'Liked',
              summary: 'Product added to list',
              position: 'topRight',
            });
          },
          error: (error) => {
            this.toast.warning({
              detail: 'Action failed',
              summary: error.error.message,
              position: 'topRight',
            });
          },
        });
      }
    });
  }
}
