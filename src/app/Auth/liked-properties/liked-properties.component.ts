import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { UserServiceService } from '../Service/user-service.service';

@Component({
  selector: 'app-liked-properties',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, NgFor, NgToastModule],
  templateUrl: './liked-properties.component.html',
  styleUrl: './liked-properties.component.css',
})
export class LikedPropertiesComponent implements OnInit {
  LikedPropertiesData: any = [];

  constructor(
    private Likedproductservice: UserServiceService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.GetLikedProducts();
  }

  GetLikedProducts() {
    this.Likedproductservice.LikedProductsGet().subscribe((data: any) => {
      this.LikedPropertiesData = data.likedproperties;
    });
  }

  DeleteProperty(propertyId: string) {
    this.Likedproductservice.removePropertyLike(propertyId).subscribe({
      next: (response) => {
        console.log(response, 'Removed from Likes');
        this.toast.success({
          detail: 'Item Deleted',
          summary: response.message,
          position: 'topRight',
        });
        this.LikedPropertiesData = this.LikedPropertiesData.filter(
          (item: any) => item._id !== propertyId
        );
      },
      error: (error) => {
        console.log(error.message);
        this.toast.warning({
          detail: 'Failed',
          summary: error.message,
          position: 'topRight',
        });
      },
    });
  }
}
