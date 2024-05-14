import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainBannerComponent, HeroSectionComponent, WelcomeBannerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-project';
}
