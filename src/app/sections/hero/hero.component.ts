import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OasisService } from '../../oasis/services/oasis.service';

@Component({
  selector: 'ghn-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero" id="hero">
      <div class="hero-glow"></div>
      <div class="hero-content">
        <div class="hero-kicker">✦ OASIS OMNIVERSE · GLOBAL HEALING NETWORK</div>
        <h1 class="hero-title">Heal the World<br><em>Together</em></h1>
        <p class="hero-sub">Send love beams across the planet. Join healing groups. Share wisdom. Earn karma for every act of compassion. One unified network, infinite healing.</p>
        <div class="hero-ctas">
          <a href="#submit-beam" class="btn-primary">✦ Send a Love Beam</a>
          <a href="#mission" class="btn-outline">Learn More</a>
        </div>
        <div class="hero-stats">
          <div class="hs"><span class="hs-n">48,291</span><span class="hs-l">Active Healers</span></div>
          <div class="hs-div"></div>
          <div class="hs"><span class="hs-n">1.2M</span><span class="hs-l">Love Beams Sent</span></div>
          <div class="hs-div"></div>
          <div class="hs"><span class="hs-n">196</span><span class="hs-l">Countries</span></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 120px 40px 80px; position: relative; text-align: center; }
    .hero-glow { position: absolute; top: 20%; left: 50%; transform: translateX(-50%); width: 600px; height: 400px; background: radial-gradient(ellipse, rgba(232,121,249,.12) 0%, transparent 70%); pointer-events: none; }
    .hero-content { position: relative; z-index: 1; max-width: 780px; }
    .hero-kicker { font-family: 'Share Tech Mono', monospace; font-size: 11px; letter-spacing: .2em; color: #e879f9; margin-bottom: 24px; }
    .hero-title { font-family: 'Orbitron', sans-serif; font-size: clamp(36px,6vw,80px); font-weight: 900; color: #fff; line-height: 1.1; margin: 0 0 24px; letter-spacing: .04em; }
    .hero-title em { background: linear-gradient(135deg, #e879f9, #f472b6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-style: normal; }
    .hero-sub { font-family: 'Rajdhani', sans-serif; font-size: clamp(16px,2vw,20px); color: #a8bfd8; line-height: 1.7; margin: 0 0 40px; max-width: 620px; margin-left: auto; margin-right: auto; }
    .hero-ctas { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-bottom: 56px; }
    .btn-primary { background: linear-gradient(135deg,#e879f9,#a855f7); color: #fff; padding: 16px 36px; border-radius: 10px; font-family: 'Orbitron',sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .1em; text-decoration: none; transition: opacity .2s; }
    .btn-primary:hover { opacity: .85; }
    .btn-outline { border: 1px solid rgba(232,121,249,.4); color: #e879f9; padding: 16px 36px; border-radius: 10px; font-family: 'Orbitron',sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .1em; text-decoration: none; transition: background .2s; }
    .btn-outline:hover { background: rgba(232,121,249,.08); }
    .hero-stats { display: flex; align-items: center; justify-content: center; gap: 32px; }
    .hs { text-align: center; }
    .hs-n { font-family: 'Orbitron', sans-serif; font-size: 28px; font-weight: 900; color: #e879f9; display: block; }
    .hs-l { font-family: 'Share Tech Mono', monospace; font-size: 10px; letter-spacing: .16em; color: #a8bfd8; }
    .hs-div { width: 1px; height: 40px; background: rgba(232,121,249,.2); }
  `]
})
export class HeroComponent {
  oasis = inject(OasisService);
}
