import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserServiceService } from '../Service/user-service.service';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule,
    RouterModule,
    HttpClientModule,
  ],
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css',
})
export class AddPropertyComponent {
  PropertyForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor(
    private addProductService: UserServiceService,
    private toast: NgToastService
  ) {
    this.PropertyForm = new FormGroup({
      propertyId: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      propertyArea: new FormControl('', [Validators.required]),
      propertyDescription: new FormControl('', [Validators.required]),
      propertyBedrooms: new FormControl('', [Validators.required]),
      propertyBathrooms: new FormControl('', [Validators.required]),
      hospitalsNearby: new FormControl('', [Validators.required]),
      collegesNearby: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    this.isFormSubmitted = true;
    this.PropertyForm.markAllAsTouched();
    if (this.PropertyForm.valid) {
      console.log(this.PropertyForm.value);
      this.addProductService.addProduct(this.PropertyForm.value).subscribe({
        next: (response) => {
          console.log('Product added', response);
          this.toast.success({
            detail: 'Added',
            summary: 'Product Inserted to data',
            position: 'topRight',
          });
        },
        error: (error) => {
          console.error('Failed', error);
          this.toast.error({
            detail: 'Product Not added',
            summary: error.error.message || 'Something went wrong!',
            position: 'topRight',
          });
        },
      });
    }
  }
}
