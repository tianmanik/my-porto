import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective } from '../../shared/reveal.directive';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, IconComponent, RevealDirective],
  template: `
    <section id="contact" class="section-container">
      <div appReveal class="section-subtitle">05. Contact</div>
      <h2 appReveal appRevealDelay="100" class="section-title">Let's Build Something</h2>
      <p appReveal appRevealDelay="150" class="text-stone-600 dark:text-stone-300 max-w-xl mt-3 font-sans">
        Got a project in mind or just want to say hi? My inbox is always open.
      </p>

      <div class="grid lg:grid-cols-5 gap-8 mt-12">
        <!-- Contact Info Section -->
        <div appReveal appRevealDelay="200" class="lg:col-span-2 space-y-4">
          <!-- Email Card -->
          <a
            [href]="'mailto:' + data.email"
            class="card p-5 flex items-center gap-4 group transition-all duration-300 hover:-translate-y-1 hover:border-amber-600/30"
          >
            <span
              class="grid place-items-center w-11 h-11 rounded-2xl 
                     bg-amber-500/10 dark:bg-amber-950/40 
                     border border-amber-600/20 dark:border-amber-500/30
                     text-amber-800 dark:text-amber-400
                     group-hover:scale-110 group-hover:rotate-3 group-hover:border-amber-500 
                     group-hover:shadow-[0_0_15px_rgba(217,119,6,0.2)] transition-all duration-300"
            >
              <app-icon name="mail" [size]="20" />
            </span>
            <div>
              <div class="font-mono text-xs text-stone-400 dark:text-stone-500 uppercase tracking-wider">// Email</div>
              <div class="text-sm font-semibold text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                {{ data.email }}
              </div>
            </div>
          </a>

          <!-- Location Card -->
          <div class="card p-5 flex items-center gap-4">
            <span
              class="grid place-items-center w-11 h-11 rounded-2xl 
                     bg-amber-500/10 dark:bg-amber-950/40 
                     border border-amber-600/20 dark:border-amber-500/30
                     text-amber-800 dark:text-amber-400"
            >
              <app-icon name="map-pin" [size]="20" />
            </span>
            <div>
              <div class="font-mono text-xs text-stone-400 dark:text-stone-500 uppercase tracking-wider">// Location</div>
              <div class="text-sm font-semibold text-stone-900 dark:text-stone-100">{{ data.location }}</div>
            </div>
          </div>

          <!-- Social Control Cluster -->
          <div class="flex gap-3 pt-2">
            @for (link of data.social; track link.label) {
              <a
                [href]="link.url"
                target="_blank"
                rel="noopener noreferrer"
                [attr.aria-label]="link.label"
                class="grid place-items-center w-11 h-11 rounded-full 
                       border border-stone-200 dark:border-stone-800 bg-white/60 dark:bg-stone-900/60
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

        <!-- Contact Form -->
        <form
          appReveal
          appRevealDelay="300"
          (ngSubmit)="submit()"
          class="lg:col-span-3 card p-6 md:p-8 space-y-5 relative overflow-hidden transition-all duration-300"
          [class.opacity-60]="submitted()"
        >
          <!-- Floating Form Background Aura -->
          <div class="absolute -bottom-12 -right-12 w-40 h-40 bg-amber-600/10 rounded-full blur-3xl animate-float-slow pointer-events-none"></div>

          <div class="grid sm:grid-cols-2 gap-5 relative z-10">
            <div>
              <label for="name" class="block text-xs font-mono font-semibold text-stone-700 dark:text-stone-300 mb-2 uppercase tracking-wider">
                Name <span class="text-amber-700 dark:text-amber-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                [(ngModel)]="form.name"
                class="w-full px-4 py-2.5 rounded-xl bg-stone-50/80 dark:bg-stone-900/80 border
                       border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100
                       placeholder-stone-400 dark:placeholder-stone-600 font-sans text-sm
                       focus:border-amber-600 dark:focus:border-amber-500 focus:ring-2
                       focus:ring-amber-500/20 outline-none transition duration-200"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label for="email" class="block text-xs font-mono font-semibold text-stone-700 dark:text-stone-300 mb-2 uppercase tracking-wider">
                Email <span class="text-amber-700 dark:text-amber-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                [(ngModel)]="form.email"
                class="w-full px-4 py-2.5 rounded-xl bg-stone-50/80 dark:bg-stone-900/80 border
                       border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100
                       placeholder-stone-400 dark:placeholder-stone-600 font-sans text-sm
                       focus:border-amber-600 dark:focus:border-amber-500 focus:ring-2
                       focus:ring-amber-500/20 outline-none transition duration-200"
                placeholder="jane@example.com"
              />
            </div>
          </div>

          <div class="relative z-10">
            <label for="message" class="block text-xs font-mono font-semibold text-stone-700 dark:text-stone-300 mb-2 uppercase tracking-wider">
              Message <span class="text-amber-700 dark:text-amber-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              [(ngModel)]="form.message"
              class="w-full px-4 py-2.5 rounded-xl bg-stone-50/80 dark:bg-stone-900/80 border
                     border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100
                     placeholder-stone-400 dark:placeholder-stone-600 font-sans text-sm
                     focus:border-amber-600 dark:focus:border-amber-500 focus:ring-2
                     focus:ring-amber-500/20 outline-none transition resize-none duration-200"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button type="submit" class="btn-primary w-full sm:w-auto relative z-10" [disabled]="submitted()">
            <app-icon name="send" [size]="18" />
            <span>{{ submitted() ? 'Message Sent!' : 'Send Message' }}</span>
          </button>

          @if (submitted()) {
            <div
              class="flex items-center gap-2.5 text-xs font-mono text-emerald-700 dark:text-emerald-400 
                     bg-emerald-500/10 border border-emerald-600/20 dark:border-emerald-500/30 
                     rounded-xl p-3.5 mt-4 animate-fade-in relative z-10"
            >
              <app-icon name="sparkles" [size]="18" />
              <span>// Thanks for reaching out — I'll get back to you soon!</span>
            </div>
          }
        </form>
      </div>
    </section>
  `,
})
export class ContactComponent {
  readonly data = PORTFOLIO_DATA;
  readonly submitted = signal(false);

  form = { name: '', email: '', message: '' };

  submit(): void {
    this.submitted.set(true);
    this.form = { name: '', email: '', message: '' };
    setTimeout(() => this.submitted.set(false), 5000);
  }
}