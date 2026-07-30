import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective } from '../../shared/reveal.directive';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  template: `
    <section id="skills" class="section-container">
      <div appReveal class="section-subtitle">03. Skills</div>
      <h2 appReveal appRevealDelay="100" class="section-title">Technologies I Work With</h2>

      <div class="grid md:grid-cols-3 gap-6 mt-12">
        @for (category of data.skillCategories; track category.title; let i = $index) {
          <div
            appReveal
            [appRevealDelay]="i * 120"
            class="card p-6 group relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-amber-600/30 dark:hover:border-amber-500/30"
          >
            <!-- Warm Organic Floating Aura -->
            <div class="absolute -top-12 -right-12 w-28 h-28 bg-amber-600/10 rounded-full blur-2xl group-hover:bg-amber-500/20 animate-float-slow transition-all duration-500 pointer-events-none"></div>

            <!-- Header Category -->
            <div class="flex items-center gap-3.5 mb-6 border-b border-stone-200/60 dark:border-stone-800/80 pb-4">
              <span
                class="grid place-items-center w-11 h-11 rounded-2xl 
                       bg-amber-500/10 dark:bg-amber-950/40 
                       border border-amber-600/20 dark:border-amber-500/30
                       text-amber-800 dark:text-amber-400
                       group-hover:scale-110 group-hover:rotate-3 group-hover:border-amber-500 
                       group-hover:shadow-[0_0_15px_rgba(217,119,6,0.2)] transition-all duration-300"
              >
                <app-icon [name]="category.icon" [size]="22" />
              </span>
              <div>
                <h3 class="text-lg font-bold text-stone-900 dark:text-stone-100 tracking-tight font-sans">
                  {{ category.title }}
                </h3>
                <span class="font-mono text-[10px] text-amber-700 dark:text-amber-400 uppercase tracking-widest">
                  // {{ category.skills.length }} TECHS
                </span>
              </div>
            </div>

            <!-- Tech Tags List dengan Hover Interaction -->
            <div class="flex flex-wrap gap-2 relative z-10">
              @for (skill of category.skills; track skill) {
                <span class="tech-tag transition-transform hover:-translate-y-0.5 hover:scale-105 duration-200">
                  {{ skill }}
                </span>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `,
})
export class SkillsComponent {
  readonly data = PORTFOLIO_DATA;
}