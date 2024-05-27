import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from '../../Slides/hero/hero.component';
import { PropertyCardsComponent } from '../../Slides/property-cards/property-cards.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    HeroComponent,
    PropertyCardsComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
