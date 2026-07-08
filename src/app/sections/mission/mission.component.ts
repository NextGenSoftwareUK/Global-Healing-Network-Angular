import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ghn-mission',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section" id="mission">
      <div class="section-kicker">OUR PURPOSE</div>
      <h2 class="section-title">A Planet in Need of Healing</h2>
      <span class="section-line"></span>
      <div class="mission-grid">
        <div class="mission-text">
          <p>Global Healing Network is the world's first karma-powered healing platform. We believe in the science of consciousness, the power of collective intention, and the measurable effect of love sent with purpose.</p>
          <p>Every love beam you send is logged on the OASIS blockchain, tied to your avatar, and contributes to a growing field of intentional healing that spans 196 countries.</p>
          <p>Healers, lightworkers, meditators, shamans, Reiki masters, prayer warriors — every tradition is welcome. The only requirement is genuine intent to help.</p>
          <div class="mission-cta">
            <a href="#submit-beam" class="btn-primary">Send Your First Beam</a>
          </div>
        </div>
        <div class="mission-visual">
          <div class="glow-orb"></div>
          <div class="orb-ring r1"></div>
          <div class="orb-ring r2"></div>
          <div class="orb-ring r3"></div>
          <div class="orb-label">HEALING<br>FIELD</div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section { padding: 100px 40px; max-width: 1100px; margin: 0 auto; }
    .section-kicker { font-family: 'Share Tech Mono',monospace; font-size: 11px; letter-spacing: .22em; color: #e879f9; margin-bottom: 16px; }
    .section-title { font-family: 'Orbitron',sans-serif; font-size: clamp(24px,3.5vw,44px); font-weight: 900; color: #fff; margin: 0 0 16px; }
    .section-line { display: block; width: 60px; height: 3px; background: linear-gradient(90deg,#e879f9,transparent); border-radius: 2px; margin-bottom: 48px; }
    .mission-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
    .mission-text p { font-family: 'Rajdhani',sans-serif; font-size: 16px; color: #a8bfd8; line-height: 1.75; margin: 0 0 20px; }
    .mission-cta { margin-top: 32px; }
    .btn-primary { background: linear-gradient(135deg,#e879f9,#a855f7); color: #fff; padding: 14px 32px; border-radius: 10px; font-family: 'Orbitron',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .1em; text-decoration: none; }
    .mission-visual { position: relative; height: 320px; display: flex; align-items: center; justify-content: center; }
    .glow-orb { width: 120px; height: 120px; background: radial-gradient(circle, rgba(232,121,249,.5) 0%, rgba(168,85,247,.2) 60%, transparent 100%); border-radius: 50%; position: absolute; }
    .orb-ring { position: absolute; border-radius: 50%; border: 1px solid rgba(232,121,249,.2); animation: spin 12s linear infinite; }
    .r1 { width: 180px; height: 180px; animation-duration: 10s; }
    .r2 { width: 250px; height: 250px; animation-duration: 16s; animation-direction: reverse; border-style: dashed; }
    .r3 { width: 310px; height: 310px; animation-duration: 22s; opacity: .5; }
    .orb-label { font-family: 'Orbitron',sans-serif; font-size: 11px; font-weight: 700; letter-spacing: .2em; color: #e879f9; text-align: center; position: relative; z-index: 1; line-height: 1.6; }
    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    @media (max-width: 768px) { .mission-grid { grid-template-columns: 1fr; } .mission-visual { height: 220px; } }
  `]
})
export class MissionComponent {}
