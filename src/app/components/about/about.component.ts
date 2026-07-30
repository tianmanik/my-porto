import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective } from '../../shared/reveal.directive';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  template: `
    <section id="about" class="section-container">
      <div appReveal class="section-subtitle">01. About Me</div>
      <h2 appReveal appRevealDelay="100" class="section-title">Who I Am</h2>

      <div class="grid md:grid-cols-3 gap-8 mt-10">
        <!-- Bio Section -->
        <div appReveal appRevealDelay="150" class="md:col-span-2 space-y-5">
          <!-- Text Container dengan garis aksen warna kanvas -->
          <div class="space-y-4 border-l-2 border-amber-600/30 dark:border-amber-500/30 pl-4 md:pl-6">
            @for (paragraph of data.about; track $index) {
              <p class="text-base md:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                {{ paragraph }}
              </p>
            }
          </div>

          <!-- Developer Location Property -->
          <div class="flex items-center gap-2.5 pt-3 font-mono text-xs text-stone-500 dark:text-stone-400">
            <span class="inline-flex items-center justify-center p-2 rounded-xl bg-amber-500/10 border border-amber-600/20 dark:border-amber-500/20 text-amber-700 dark:text-amber-400">
              <app-icon name="map-pin" [size]="16" />
            </span>
            <span class="text-stone-400 dark:text-stone-500">// based_in:</span>
            <span class="font-semibold text-stone-800 dark:text-stone-200">"{{ data.location }}"</span>
          </div>
        </div>

        <!-- Stats Cards Grid (Gallery Swatch Style) -->
        <div class="grid grid-cols-2 gap-4 self-start">
          @for (stat of data.stats; track stat.label; let i = $index) {
            <div
              appReveal
              [appRevealDelay]="200 + i * 80"
              class="card p-5 flex flex-col items-start gap-3 group relative overflow-hidden"
            >
              <!-- Warm Soft Aura saat Hover -->
              <div class="absolute -top-10 -right-10 w-24 h-24 bg-amber-600/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-all duration-500"></div>

              <!-- Stat Icon -->
              <span
                class="grid place-items-center w-10 h-10 rounded-2xl 
                       bg-amber-500/10 dark:bg-amber-950/40 
                       border border-amber-600/20 dark:border-amber-500/30
                       text-amber-800 dark:text-amber-400
                       group-hover:scale-110 group-hover:border-amber-500 transition-all duration-300"
              >
                <app-icon [name]="stat.icon" [size]="20" />
              </span>

              <!-- Stat Value & Label -->
              <div class="relative z-10">
                <div class="text-2xl md:text-3xl font-extrabold font-mono text-stone-900 dark:text-stone-100 tracking-tight group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors">
                  {{ stat.value }}
                </div>
                <div class="text-xs font-mono text-stone-500 dark:text-stone-400 mt-1 uppercase tracking-wider">
                  {{ stat.label }}
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  readonly data = PORTFOLIO_DATA;
}