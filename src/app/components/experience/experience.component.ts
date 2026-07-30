import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective } from '../../shared/reveal.directive';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  template: `
    <section id="experience" class="section-container">
      <div appReveal class="section-subtitle">02. Experience</div>
      <h2 appReveal appRevealDelay="100" class="section-title">Where I've Worked</h2>

      <div class="relative mt-12 max-w-4xl">
        <!-- Base Vertical Timeline Line -->
        <div
          class="absolute left-4 md:left-5 top-3 bottom-3 w-0.5 bg-stone-200 dark:bg-stone-800/80"
          aria-hidden="true"
        ></div>

        <!-- Animated Warm Flow Line -->
        <div
          class="absolute left-4 md:left-5 top-3 bottom-3 w-0.5 animate-line-glow pointer-events-none z-0"
          aria-hidden="true"
        ></div>

        <div class="space-y-10 relative z-10">
          @for (job of data.experience; track job.company; let i = $index) {
            <div
              appReveal
              [appRevealDelay]="i * 120"
              class="relative pl-12 md:pl-16 group"
            >
              <!-- Timeline Node Dot -->
              <span
                class="absolute left-2 md:left-3 top-1.5 grid place-items-center w-5 h-5 rounded-full
                       border-2 bg-stone-50 dark:bg-[#121110] transition-all duration-300 z-10"
                [class]="job.current
                  ? 'border-amber-600 dark:border-amber-500 shadow-[0_0_12px_rgba(217,119,6,0.4)]'
                  : 'border-stone-300 dark:border-stone-700 group-hover:border-amber-500 group-hover:shadow-md'"
              >
                <span
                  class="w-2 h-2 rounded-full transition-colors"
                  [class]="job.current
                    ? 'bg-amber-600 dark:bg-amber-400 animate-pulse'
                    : 'bg-stone-300 dark:bg-stone-700 group-hover:bg-amber-500'"
                ></span>
              </span>

              <!-- Experience Card Frame -->
              <div class="card p-5 md:p-6 group-hover:-translate-y-1 transition-all duration-500 hover:shadow-lg hover:border-amber-600/30 dark:hover:border-amber-500/30">
                
                <!-- Role & Company Header -->
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-stone-200/60 dark:border-stone-800/60 pb-3 mb-4">
                  <h3 class="text-lg md:text-xl font-bold text-stone-900 dark:text-stone-100 tracking-tight font-sans">
                    {{ job.role }}
                    <span class="text-amber-700 dark:text-amber-400 font-mono text-base font-semibold"> &#64;{{ job.company }}</span>
                  </h3>
                  
                  <span
                    class="font-mono text-xs text-stone-500 dark:text-stone-400 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100/80 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/50 shrink-0"
                  >
                    <app-icon name="briefcase" [size]="14" />
                    {{ job.timeline }}
                  </span>
                </div>

                <!-- Location Property -->
                <p class="font-mono text-xs text-stone-400 dark:text-stone-500 mb-3 flex items-center gap-1.5">
                  <span>location:</span>
                  <span class="text-stone-700 dark:text-stone-300 font-semibold">"{{ job.location }}"</span>
                </p>

                <!-- General Description -->
                <p class="text-sm md:text-base text-stone-600 dark:text-stone-300 mb-5 leading-relaxed font-sans">
                  {{ job.description }}
                </p>

                <!-- Responsibilities List -->
                <ul class="space-y-2.5 mb-6">
                  @for (task of job.responsibilities; track task) {
                    <li class="flex items-start gap-2.5 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                      <span class="text-amber-700 dark:text-amber-500 font-mono font-bold shrink-0 mt-0.5">//</span>
                      <span>{{ task }}</span>
                    </li>
                  }
                </ul>

                <!-- Tech Stack Badges -->
                <div class="flex flex-wrap gap-2 pt-2">
                  @for (tech of job.techStack; track tech) {
                    <span class="tech-tag transition-transform hover:-translate-y-0.5 duration-200">{{ tech }}</span>
                  }
                </div>

              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  readonly data = PORTFOLIO_DATA;
}