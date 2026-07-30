import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon.component';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconComponent],
  template: `
    <footer class="border-t border-stone-200/80 dark:border-stone-800 bg-[#f7f4ed] dark:bg-[#0e0d0c] transition-colors duration-500">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <!-- Brand & Role Info -->
          <div class="flex items-center gap-3.5 group">
            <!-- Initials Badge Canvas Style -->
            <span
              class="grid place-items-center w-9 h-9 rounded-xl bg-amber-700 dark:bg-amber-500
                     text-stone-50 font-mono text-sm font-bold shadow-md shadow-amber-600/20
                     border border-amber-600 dark:border-amber-400
                     group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
            >
              {{ data.initials }}
            </span>

            <div>
              <div class="font-bold font-mono text-sm text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                <span>{{ data.name }}</span>
                <span class="text-amber-700 dark:text-amber-400 text-xs">.site</span>
              </div>
              <div class="text-xs font-mono text-stone-500 dark:text-stone-400">// {{ data.role }}</div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="flex items-center gap-2.5">
            @for (link of data.social; track link.label) {
              <a
                [href]="link.url"
                target="_blank"
                rel="noopener noreferrer"
                [attr.aria-label]="link.label"
                class="grid place-items-center w-10 h-10 rounded-full border border-stone-200 dark:border-stone-800
                       bg-white/80 dark:bg-stone-900/60 text-stone-500 dark:text-stone-400 
                       hover:text-amber-800 dark:hover:text-amber-400 hover:border-amber-500/40 dark:hover:border-amber-500/40
                       hover:shadow-md hover:-translate-y-1
                       transition-all duration-300"
              >
                <app-icon [name]="link.icon" [size]="18" />
              </a>
            }
          </div>
        </div>

        <!-- System Status / Copyright Footer Bar -->
        <div
          class="mt-8 pt-6 border-t border-stone-200/60 dark:border-stone-800/80 
                 flex flex-col sm:flex-row items-center justify-between gap-3
                 font-mono text-xs text-stone-500 dark:text-stone-400"
        >
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>&copy; {{ year }} {{ data.name }}. All rights reserved.</span>
          </div>

          <div class="text-stone-400 dark:text-stone-500 text-[11px]">
            Built with <span class="text-amber-700 dark:text-amber-400 font-semibold">Angular</span> &amp; <span class="text-amber-700 dark:text-amber-400 font-semibold">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly data = PORTFOLIO_DATA;
  readonly year = new Date().getFullYear();
}