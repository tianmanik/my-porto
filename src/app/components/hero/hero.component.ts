import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective } from '../../shared/reveal.directive';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  template: `
    <section
      id="hero"
      class="relative min-h-screen flex items-center overflow-hidden bg-[#fbf9f5] dark:bg-[#121110] transition-colors duration-500"
    >
      <!-- Decorative Abstract Oil Painting Blobs -->
      <div
        class="pointer-events-none absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full
               bg-amber-700/10 dark:bg-amber-600/10 blur-[120px] animate-pulse"
        aria-hidden="true"
      ></div>
      <div
        class="pointer-events-none absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full
               bg-rose-800/10 dark:bg-rose-700/10 blur-[120px]"
        aria-hidden="true"
      ></div>
      <div
        class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full
               bg-orange-600/5 dark:bg-orange-500/5 blur-[100px]"
        aria-hidden="true"
      ></div>

      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full z-10">
        <!-- Grid Container -->
        <div class="grid md:grid-cols-12 gap-12 items-center">
          
          <!-- Bagian Kiri: Teks Konten Developer -->
          <div class="md:col-span-7 max-w-3xl">
            <!-- Developer Subtitle Badge -->
            <p 
              appReveal 
              class="inline-flex items-center gap-2 font-mono text-xs text-amber-800 dark:text-amber-400 mb-6 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-600/20 dark:border-amber-500/20 uppercase tracking-widest"
            >
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>// Software Engineer &amp; Developer</span>
            </p>

            <!-- Nama Utama dengan Tipografi Kanvas -->
            <h1
              appReveal
              appRevealDelay="100"
              class="text-4xl sm:text-6xl md:text-7xl font-serif font-normal
                     text-stone-900 dark:text-stone-100 tracking-tight leading-[1.1]"
            >
              {{ data.name }}<span class="text-amber-700 dark:text-amber-500">.</span>
            </h1>

            <!-- Role Tag -->
            <h2
              appReveal
              appRevealDelay="200"
              class="mt-4 text-2xl sm:text-3xl md:text-4xl font-sans font-bold
                     text-stone-600 dark:text-stone-400 tracking-tight"
            >
              Crafting <span class="text-gradient font-serif italic">{{ data.role }}</span> Solutions
            </h2>

            <!-- Intro Narrative -->
            <p
              appReveal
              appRevealDelay="300"
              class="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed font-sans"
            >
              {{ data.intro }}
            </p>

            <!-- Call to Action Buttons -->
            <div appReveal appRevealDelay="400" class="mt-8 flex flex-wrap items-center gap-4">
              <a [href]="'#contact'" class="btn-primary">
                <app-icon name="send" [size]="18" />
                <span>Get in Touch</span>
              </a>
              <a [href]="data.cvUrl" class="btn-secondary" download="Andreas_CV.pdf">
                <app-icon name="download" [size]="18" />
                <span>Download CV</span>
              </a>
            </div>

            <!-- Social Links (Warm Canvas Style) -->
            <div appReveal appRevealDelay="500" class="mt-10 flex items-center gap-3">
              @for (link of data.social; track link.label) {
                <a
                  [href]="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  [attr.aria-label]="link.label"
                  class="grid place-items-center w-11 h-11 rounded-full 
                         border border-stone-200 dark:border-stone-800 
                         bg-white/60 dark:bg-stone-900/60
                         text-stone-600 dark:text-stone-400 
                         hover:text-amber-800 dark:hover:text-amber-400
                         hover:border-amber-500/40 dark:hover:border-amber-500/40 
                         hover:shadow-lg hover:-translate-y-1
                         transition-all duration-300"
                >
                  <app-icon [name]="link.icon" [size]="20" />
                </a>
              }
            </div>
          </div>

          <!-- Bagian Kanan: Foto Profil Berbingkai Gallery / Art Canvas -->
          <div 
            appReveal 
            appRevealDelay="600" 
            class="md:col-span-5 flex justify-center md:justify-end"
          >
            <div class="relative group max-w-xs md:max-w-sm w-full">
              
              <!-- Soft Organic Ambient Aura -->
              <div class="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-amber-600/30 via-rose-600/20 to-orange-500/30 opacity-40 
                          group-hover:opacity-80 blur-xl transition duration-700 group-hover:duration-300"></div>

              <!-- Organic Frame Outline -->
              <div class="absolute -inset-3 rounded-[2.5rem] border border-dashed border-amber-600/30 dark:border-amber-500/30 
                          group-hover:border-amber-500/60 transition-colors duration-500 pointer-events-none"></div>

              <!-- Main Image Canvas Container -->
              <div class="relative rounded-3xl overflow-hidden bg-stone-900 border border-stone-200/80 dark:border-stone-800/80 shadow-2xl">
                <img 
                  [src]="data.profilePicUrl" 
                  [alt]="data.name"
                  class="w-full h-auto aspect-square object-cover 
                         grayscale group-hover:grayscale-0 
                         scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                <!-- Dev Status Floating Badge -->
                <div class="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-stone-950/80 backdrop-blur-md border border-stone-800/80 flex items-center justify-between text-xs font-mono">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span class="text-stone-300 text-[11px] font-semibold">// DEV_STATUS</span>
                  </div>
                  <span class="text-amber-400 text-[11px] font-semibold tracking-wider">AVAILABLE</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <!-- Scroll Indicator -->
      <a
        href="#about"
        class="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-400 dark:text-stone-600
               hover:text-amber-800 dark:hover:text-amber-400 transition-colors animate-bounce font-mono text-xs flex flex-col items-center gap-1"
        aria-label="Scroll to About"
      >
        <app-icon name="chevron-down" [size]="22" />
      </a>
    </section>
  `,
})
export class HeroComponent {
  readonly data = PORTFOLIO_DATA;
}