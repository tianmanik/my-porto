import { Component, HostListener, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { IconComponent } from '../../shared/icon.component';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, IconComponent],
  template: `
    <header
      class="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      [ngClass]="scrolled()
        ? 'bg-[#fbf9f5]/80 dark:bg-[#121110]/80 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 shadow-sm dark:shadow-2xl'
        : 'bg-transparent border-b border-transparent'"
    >
      <nav class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 md:h-20">
          
          <!-- Logo / Initials Exhibition Stamp -->
          <a
            href="#hero"
            class="group flex items-center gap-3 font-bold text-base md:text-lg tracking-tight"
            aria-label="Home"
          >
            <!-- Badge Inisial Stamp -->
            <span
              class="grid place-items-center w-9 h-9 rounded-full bg-stone-900 dark:bg-stone-100
                     text-stone-50 dark:text-stone-950 font-mono text-xs font-bold shadow-md
                     border border-amber-600/30 dark:border-amber-400/30
                     group-hover:bg-amber-800 dark:group-hover:bg-amber-400 dark:group-hover:text-stone-950
                     group-hover:scale-105 transition-all duration-300"
            >
              {{ data.initials }}
            </span>

            <!-- Nama & Identitas Developer -->
            <span class="flex items-center gap-1.5 text-stone-900 dark:text-stone-100 font-mono text-xs font-semibold tracking-wider hidden sm:flex">
              <span class="text-amber-700 dark:text-amber-500">//</span>
              <span>{{ data.name }}</span>
              <span class="text-stone-400 dark:text-stone-500 text-[11px]">.dev</span>
            </span>
          </a>

          <!-- Desktop Nav (Gaya Katalog Karya & Tab Dev) -->
          <ul class="hidden md:flex items-center gap-1 font-mono text-xs">
            @for (item of data.nav; track item.href; let i = $index) {
              <li>
                <a
                  [href]="item.href"
                  class="group flex items-center gap-1.5 px-4 py-2 rounded-full font-medium text-stone-600 dark:text-stone-400
                         hover:text-amber-800 dark:hover:text-amber-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/50
                         border border-transparent hover:border-amber-500/20
                         transition-all duration-300"
                >
                  <span class="text-amber-700 dark:text-amber-500 text-[10px] opacity-80 group-hover:opacity-100">
                    0{{ i + 1 }}.
                  </span>
                  <span class="font-sans font-medium tracking-wide">{{ item.label }}</span>
                </a>
              </li>
            }
          </ul>

          <!-- Right Cluster (Theme Switcher & Mobile Trigger) -->
          <div class="flex items-center gap-2.5">
            <!-- Theme Toggle Button -->
            <button
              type="button"
              (click)="theme.toggle()"
              class="grid place-items-center w-9 h-9 rounded-full border border-stone-200 dark:border-stone-800
                     bg-stone-100/60 dark:bg-stone-900/60 text-stone-600 dark:text-stone-400
                     hover:text-amber-800 dark:hover:text-amber-400 hover:border-amber-500/40
                     transition-all duration-300"
              [attr.aria-label]="theme.theme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
            >
              <app-icon [name]="theme.theme() === 'dark' ? 'sun' : 'moon'" [size]="18" />
            </button>

            <!-- Mobile Menu Trigger -->
            <button
              type="button"
              (click)="menuOpen.set(!menuOpen())"
              class="md:hidden grid place-items-center w-9 h-9 rounded-full border border-stone-200 dark:border-stone-800
                     bg-stone-100/60 dark:bg-stone-900/60 text-stone-600 dark:text-stone-400
                     hover:text-amber-800 dark:hover:text-amber-400 transition-all duration-300"
              aria-label="Toggle navigation menu"
            >
              <app-icon [name]="menuOpen() ? 'x' : 'menu'" [size]="18" />
            </button>
          </div>
        </div>

        <!-- Mobile Menu Panel -->
        <div
          class="md:hidden overflow-hidden transition-all duration-500 ease-in-out"
          [ngClass]="menuOpen() ? 'max-h-96 pb-6 pt-3 border-t border-stone-200/80 dark:border-stone-800/80' : 'max-h-0'"
        >
          <ul class="flex flex-col gap-1.5 font-mono text-xs">
            @for (item of data.nav; track item.href; let i = $index) {
              <li>
                <a
                  [href]="item.href"
                  (click)="menuOpen.set(false)"
                  class="flex items-center gap-2 px-4 py-2.5 rounded-2xl font-medium text-stone-700 dark:text-stone-300
                         hover:bg-stone-200/50 dark:hover:bg-stone-800/60 hover:text-amber-800 dark:hover:text-amber-400
                         border border-transparent hover:border-amber-500/20
                         transition-all duration-300"
                >
                  <span class="text-amber-700 dark:text-amber-500 text-[10px]">0{{ i + 1 }}.</span>
                  <span class="font-sans font-medium">{{ item.label }}</span>
                </a>
              </li>
            }
          </ul>
        </div>
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  readonly data = PORTFOLIO_DATA;
  readonly theme = inject(ThemeService);
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }
}