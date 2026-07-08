import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ghn-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-about">
          <div class="footer-brand">✦ GLOBAL HEALING NETWORK</div>
          <p>Part of the OASIS Omniverse — the world's first decentralised, karma-powered healing platform. Every act of compassion leaves a permanent mark on the OASIS blockchain.</p>
        </div>
        <div class="footer-col">
          <div class="footer-heading">HEAL</div>
          <a href="#submit-beam">Send a Love Beam</a>
          <a href="#groups">Healing Groups</a>
          <a href="#live-beams">Live Beams</a>
          <a href="#healers">Healer Directory</a>
        </div>
        <div class="footer-col">
          <div class="footer-heading">LEARN</div>
          <a href="#archive">Healing Archive</a>
          <a href="#forum">Community Forum</a>
          <a href="#features">Features</a>
          <a href="#mission">Our Mission</a>
        </div>
        <div class="footer-col">
          <div class="footer-heading">OASIS</div>
          <a href="https://oasisomniverse.one" target="_blank">OASIS Omniverse</a>
          <a href="#ecosystem">Ecosystem</a>
          <a href="#map">World Map</a>
          <a href="#karma">Karma System</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 Global Healing Network · OASIS Omniverse</span>
        <span>Built with love on WEB4</span>
      </div>
    </footer>
  `,
  styles: [`
    .footer { background: rgba(3,7,20,.97); border-top: 1px solid rgba(232,121,249,.1); padding: 80px 40px 40px; }
    .footer-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 60px; }
    .footer-brand { font-family: 'Orbitron',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .16em; color: #e879f9; margin-bottom: 16px; }
    .footer-about p { font-size: 14px; color: #a8bfd8; line-height: 1.7; }
    .footer-heading { font-family: 'Share Tech Mono',monospace; font-size: 10px; letter-spacing: .2em; color: #e879f9; margin-bottom: 16px; }
    .footer-col { display: flex; flex-direction: column; gap: 10px; }
    .footer-col a { font-size: 14px; color: #a8bfd8; text-decoration: none; transition: color .2s; }
    .footer-col a:hover { color: #e879f9; }
    .footer-bottom { max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(232,121,249,.08); padding-top: 24px; font-family: 'Share Tech Mono',monospace; font-size: 11px; color: #a8bfd8; letter-spacing: .06em; flex-wrap: wrap; gap: 12px; }
    @media (max-width: 768px) { .footer-inner { grid-template-columns: 1fr 1fr; } }
  `]
})
export class FooterComponent {}
