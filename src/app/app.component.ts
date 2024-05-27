import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  NgZone,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterLinkWithHref,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavBarComponent } from './Home/nav-bar/nav-bar.component';
import { FooterComponent } from './Home/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Lenis from '@studio-freight/lenis';
import { NotfoundComponent } from './Home/notfound/notfound.component';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterOutlet,
    NavBarComponent,
    FooterComponent,
    HttpClientModule,
    RouterModule,
    CommonModule,
    NgToastModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = 'front-end';
  private lenis: any;
  private rafId: any;
  isLoading = true;

  constructor(
    private zone: NgZone,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Execute only in the browser environment
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
      this.lenis = new Lenis();

      this.zone.runOutsideAngular(() => {
        const raf = (time: number) => {
          this.lenis.raf(time);
          this.rafId = requestAnimationFrame(raf);
        };

        this.rafId = requestAnimationFrame(raf);
      });
      // Run a task outside of Angular's zone
    }
  }
  ngOnDestroy(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }
}
