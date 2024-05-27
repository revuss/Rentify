import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../Services/all-products.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-properties-main-page',
  standalone: true,
  imports: [HttpClientModule, RouterModule, CommonModule, NgFor],
  templateUrl: './properties-main-page.component.html',
  styleUrl: './properties-main-page.component.css',
})
export class PropertiesMainPageComponent implements OnInit {
  AllPropertiesData: any = [];

  constructor(private allProductService: AllProductsService) {}

  ngOnInit(): void {
    this.loadAllPost();
  }

  loadAllPost() {
    this.allProductService.getAllProducts().subscribe((data: any) => {
      this.AllPropertiesData = data.properties;
      console.log(this.AllPropertiesData);
    });
  }
}
