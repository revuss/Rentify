import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Service/user-service.service';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { response } from 'express';
import { error } from 'console';
import { NgToastModule, NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-my-properties',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, NgFor, NgToastModule],
  templateUrl: './my-properties.component.html',
  styleUrl: './my-properties.component.css',
})
export class MyPropertiesComponent implements OnInit {
  MyPropertiesData: any = [];

  constructor(
    private Myproductservice: UserServiceService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.GetMyProducts();
  }

  GetMyProducts() {
    this.Myproductservice.MyProductsGet().subscribe((data: any) => {
      console.log(this.MyPropertiesData);
      this.MyPropertiesData = data.myProperties;
      console.log(this.MyPropertiesData);
    });
  }

  DeleteProperty(propertyId: string) {
    this.Myproductservice.deleteProperty(propertyId).subscribe({
      next: (response) => {
        console.log(response, 'Property Deleted');
        this.toast.success({
          detail: 'Item Deleted',
          summary: response.message,
          position: 'topRight',
        });
        this.MyPropertiesData = this.MyPropertiesData.filter(
          (item: any) => item._id !== propertyId
        );
      },
      error: (error) => {
        console.log(error.message);
        this.toast.warning({
          detail: 'Item not Deleted',
          summary: error.message,
          position: 'topRight',
        });
      },
    });
  }
}
