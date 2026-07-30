import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-intro',
  standalone: true,
  template: `
    @if (visible()) {
      <div 
        class="intro-overlay relative overflow-hidden bg-[#121110] select-none cursor-pointer" 
        [class.intro-fading]="fading()" 
        (click)="skip()"
      >
        <!-- Canvas Abstract Oil & Watercolor Color Blobs -->
        <div class="absolute w-[600px] h-[600px] bg-amber-700/15 rounded-full blur-[120px] pointer-events-none -top-1/3 -left-1/4 animate-pulse"></div>
        <div class="absolute w-[500px] h-[500px] bg-rose-800/10 rounded-full blur-[100px] pointer-events-none -bottom-1/4 -right-1/4"></div>
        <div class="absolute w-[350px] h-[350px] bg-orange-600/10 rounded-full blur-[90px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

        <!-- Software Gallery Header / Role Tag -->
        <div class="absolute top-8 left-8 right-8 flex justify-between items-center text-xs tracking-widest text-stone-500 uppercase border-b border-stone-800/80 pb-4">
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            <span class="text-stone-400 font-mono text-[11px]">{{ data.role }}</span>
          </div>
          <div class="hidden sm:block text-[10px] text-stone-500 font-serif italic">
            Engineering x Digital Artistry
          </div>
        </div>

        <!-- Main Content -->
        <div class="intro-content relative z-10 px-6 max-w-3xl mx-auto">
          <!-- Developer Concept Tagline -->
          <p class="intro-eyebrow text-amber-600/90 text-xs tracking-[0.3em] uppercase mb-4 font-sans font-semibold">
            Crafting Digital Experiences
          </p>

          <!-- Title Utama -->
          <h1 class="intro-title text-4xl sm:text-6xl md:text-7xl font-normal text-stone-100 tracking-tight leading-tight">
            The Code &amp; Canvas of <br class="hidden sm:inline" />
            <span class="text-gradient font-serif italic">{{ data.name }}</span>
          </h1>

          <!-- Monospace / Typing URL Box -->
          <div class="intro-url inline-flex items-center gap-2 mt-8 px-6 py-2.5 rounded-full bg-stone-900/60 border border-stone-800/80 backdrop-blur-md shadow-2xl">
            <span class="text-amber-500 text-xs tracking-wider uppercase font-mono font-semibold">dev://</span>
            <span class="intro-typed text-stone-200 text-xs sm:text-sm tracking-wide font-mono">{{ typedUrl() }}</span>
            <span class="intro-cursor"></span>
          </div>
        </div>

        <!-- Bottom Skip Hint -->
        <div class="intro-skip absolute bottom-10 left-0 right-0 text-center text-[11px] tracking-[0.2em] text-stone-500 uppercase flex items-center justify-center gap-3">
          <span class="w-8 h-px bg-stone-800"></span>
          <span>Click anywhere to explore portfolio</span>
          <span class="w-8 h-px bg-stone-800"></span>
        </div>
      </div>
    }
  `,
})
export class IntroComponent implements OnInit, OnDestroy {
  readonly data = PORTFOLIO_DATA;
  readonly typedUrl = signal('');
  readonly visible = signal(true);
  readonly fading = signal(false);

  private timers: ReturnType<typeof setTimeout>[] = [];
  private interval: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    document.documentElement.style.overflow = 'hidden';

    const url = this.data.website;
    let i = 0;

    this.timers.push(
      setTimeout(() => {
        this.interval = setInterval(() => {
          i++;
          this.typedUrl.set(url.slice(0, i));
          if (i >= url.length) {
            if (this.interval) clearInterval(this.interval);
            this.interval = null;
            this.timers.push(setTimeout(() => this.fadeOut(), 1000));
          }
        }, 75);
      }, 950),
    );
  }

  fadeOut(): void {
    this.fading.set(true);
    this.timers.push(
      setTimeout(() => {
        this.visible.set(false);
        document.documentElement.style.overflow = '';
      }, 800),
    );
  }

  skip(): void {
    if (this.fading() || !this.visible()) return;
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.typedUrl.set(this.data.website);
    this.fadeOut();
  }

  ngOnDestroy(): void {
    if (this.interval) clearInterval(this.interval);
    this.timers.forEach(clearTimeout);
    document.documentElement.style.overflow = '';
  }
}