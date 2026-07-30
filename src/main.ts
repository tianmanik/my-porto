import 'zone.js';
import { Component, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { ThemeService } from './app/services/theme.service';
import { IntroComponent } from './app/components/intro/intro.component';
import { HeaderComponent } from './app/components/header/header.component';
import { HeroComponent } from './app/components/hero/hero.component';
import { AboutComponent } from './app/components/about/about.component';
import { ExperienceComponent } from './app/components/experience/experience.component';
import { SkillsComponent } from './app/components/skills/skills.component';
import { ProjectsComponent } from './app/components/projects/projects.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { FooterComponent } from './app/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IntroComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-intro />
    <app-header />
    <main>
      <app-hero />
      <app-about />
      <app-experience />
      <app-skills />
      <app-projects />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class App {
  // ThemeService is instantiated eagerly so the theme applies on first paint.
  private readonly theme = inject(ThemeService);
}

// Bootstrap langsung menggunakan class 'App' dan provider bawaan
bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));