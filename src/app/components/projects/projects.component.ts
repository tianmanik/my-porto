import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective } from '../../shared/reveal.directive';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  template: `
    <section id="projects" class="section-container">
      <div appReveal class="section-subtitle">04. Projects</div>
      <h2 appReveal appRevealDelay="100" class="section-title">Things I've Built</h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        @for (project of data.projects; track project.title; let i = $index) {
          <article
            appReveal
            [appRevealDelay]="(i % 3) * 120"
            class="card overflow-hidden flex flex-col group relative transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-amber-600/30 dark:hover:border-amber-500/30"
          >
            <!-- Warm Floating Ambient Glow saat Hover -->
            <div class="absolute -top-16 -right-16 w-36 h-36 bg-amber-600/10 rounded-full blur-2xl group-hover:bg-amber-500/25 animate-float-reverse transition-all duration-500 pointer-events-none"></div>

            <!-- Thumbnail Header (Gallery Frame / Art Window Style) -->
            <div
              class="relative h-44 bg-stone-900 flex items-center justify-center overflow-hidden border-b border-stone-200/60 dark:border-stone-800/80"
            >
              <!-- Window Control Dots Decorative -->
              <div class="absolute top-3.5 left-3.5 flex items-center gap-1.5 z-10">
                <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>

              <!-- Canvas Warm Gradient Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent"
              ></div>

              <!-- Project Emoji / Icon Presentation -->
              <span class="relative z-10 text-6xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 ease-out">
                {{ project.emoji }}
              </span>
            </div>

            <!-- Card Body -->
            <div class="p-6 flex flex-col flex-1 relative z-10">
              <h3 class="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2 tracking-tight font-sans group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                {{ project.title }}
              </h3>
              
              <p class="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-5 flex-1 font-sans">
                {{ project.description }}
              </p>

              <!-- Tech Stack Badges -->
              <div class="flex flex-wrap gap-2 mb-5">
                @for (tech of project.techStack; track tech) {
                  <span class="tech-tag transition-transform hover:-translate-y-0.5 duration-200">{{ tech }}</span>
                }
              </div>

              <!-- Footer Links -->
              <div class="flex items-center gap-4 pt-4 border-t border-stone-200/60 dark:border-stone-800/80 font-mono text-xs">
                @if (project.liveUrl) {
                  <a
                    [href]="project.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 font-semibold text-amber-700 dark:text-amber-400 
                           hover:text-amber-800 dark:hover:text-amber-300 transition-colors"
                  >
                    <app-icon name="external-link" [size]="15" />
                    <span>Live Demo</span>
                  </a>
                }
                @if (project.repoUrl) {
                  <a
                    [href]="project.repoUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 font-semibold text-stone-600 dark:text-stone-400 
                           hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                  >
                    <app-icon name="github" [size]="15" />
                    <span>Source Code</span>
                  </a>
                }
              </div>
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  readonly data = PORTFOLIO_DATA;
}