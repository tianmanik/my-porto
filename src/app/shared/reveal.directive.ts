import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  @Input() appRevealDelay: number | string = 0;

  ngOnInit(): void {
    const node = this.el.nativeElement;
    
    // Tambahkan class reveal awal
    node.classList.add('reveal');

    const delay = typeof this.appRevealDelay === 'string'
      ? parseInt(this.appRevealDelay, 10)
      : this.appRevealDelay;

    if (delay) {
      node.style.transitionDelay = `${delay}ms`;
    }

    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '50px' } // Diperluas marginnya agar cepat muncul
    );

    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}