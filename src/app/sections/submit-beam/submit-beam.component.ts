import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OasisService } from '../../oasis/services/oasis.service';
import { ModalComponent } from '../../oasis/components/modal/modal.component';

@Component({
  selector: 'ghn-submit-beam',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent],
  template: `
    <section class="section-full" id="submit-beam">
      <div class="section">
        <div class="section-kicker">SEND HEALING</div>
        <h2 class="section-title">Submit a Love Beam</h2>
        <span class="section-line"></span>
        <p class="section-sub">Direct your healing intention to a specific person, animal, place or situation. Your beam joins thousands of others in a coherent field of compassionate energy.</p>
        <div class="beam-type-grid">
          @for (t of beamTypes; track t.id) {
            <div class="beam-type-card" [class.selected]="selectedType() === t.id" (click)="selectedType.set(t.id)">
              <div class="bt-icon">{{ t.icon }}</div>
              <div class="bt-name">{{ t.name }}</div>
              <div class="bt-desc">{{ t.desc }}</div>
            </div>
          }
        </div>
        <div class="beam-cta">
          <button class="btn-primary" (click)="openModal()">✦ Send a Love Beam</button>
        </div>
      </div>
    </section>

    <oasis-modal [open]="modalOpen()" (close)="modalOpen.set(false)">
      <div class="modal-icon">💗</div>
      <h2 class="modal-title">Send a Love Beam</h2>
      <p class="modal-sub">Fill in the details below. Your beam will be logged on the OASIS network and broadcast to all healers in the relevant group.</p>
      <form action="https://formsubmit.co/davidellams&#64;hotmail.com" method="POST" (ngSubmit)="onSubmit()">
        <input type="hidden" name="_subject" value="GHN — New Love Beam Request">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_template" value="table">
        <input class="oasis-input" name="your_name" placeholder="Your name" required [(ngModel)]="form.name">
        <input class="oasis-input" name="your_email" type="email" placeholder="your&#64;email.com" required [(ngModel)]="form.email">
        <input class="oasis-input" name="target_name" placeholder="Name of person, animal or place receiving healing" [(ngModel)]="form.target">
        <select class="oasis-input" name="beam_type" [(ngModel)]="form.type">
          <option value="">Beam type…</option>
          <option value="distance-healing">Distance healing / Reiki</option>
          <option value="prayer">Prayer</option>
          <option value="meditation">Collective meditation focus</option>
          <option value="love-light">Love & light transmission</option>
          <option value="shamanic">Shamanic healing</option>
          <option value="sound">Sound / frequency healing</option>
          <option value="other">Other</option>
        </select>
        <select class="oasis-input" name="visibility" [(ngModel)]="form.visibility">
          <option value="public">Public — show on live beam feed</option>
          <option value="private">Private — healers only, no public display</option>
        </select>
        <textarea class="oasis-input" name="details" rows="3" placeholder="Any background, context or specific focus for the healing (optional)" [(ngModel)]="form.details"></textarea>
        <button type="submit" class="btn-primary" style="width:100%">Send Love Beam</button>
      </form>
    </oasis-modal>
  `,
  styles: [`
    .section-full { background: linear-gradient(180deg,transparent,rgba(232,121,249,.03),transparent); }
    .section { padding: 100px 40px; max-width: 1100px; margin: 0 auto; }
    .section-kicker { font-family: 'Share Tech Mono',monospace; font-size: 11px; letter-spacing: .22em; color: #e879f9; margin-bottom: 16px; }
    .section-title { font-family: 'Orbitron',sans-serif; font-size: clamp(24px,3.5vw,44px); font-weight: 900; color: #fff; margin: 0 0 16px; }
    .section-line { display: block; width: 60px; height: 3px; background: linear-gradient(90deg,#e879f9,transparent); border-radius: 2px; margin-bottom: 24px; }
    .section-sub { font-family: 'Rajdhani',sans-serif; font-size: 17px; color: #a8bfd8; line-height: 1.7; margin: 0 0 48px; max-width: 680px; }
    .beam-type-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(200px,1fr)); gap: 20px; margin-bottom: 40px; }
    .beam-type-card { background: rgba(14,31,68,.7); border: 1px solid rgba(232,121,249,.15); border-radius: 14px; padding: 28px 20px; text-align: center; cursor: pointer; transition: border-color .2s, transform .2s; }
    .beam-type-card:hover, .beam-type-card.selected { border-color: rgba(232,121,249,.5); transform: translateY(-3px); }
    .beam-type-card.selected { background: rgba(232,121,249,.07); }
    .bt-icon { font-size: 32px; margin-bottom: 10px; }
    .bt-name { font-family: 'Orbitron',sans-serif; font-size: 12px; font-weight: 700; color: #fff; letter-spacing: .08em; margin-bottom: 8px; }
    .bt-desc { font-size: 13px; color: #a8bfd8; line-height: 1.5; }
    .beam-cta { text-align: center; }
    .btn-primary { background: linear-gradient(135deg,#e879f9,#a855f7); color: #fff; padding: 14px 40px; border-radius: 10px; font-family: 'Orbitron',sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .1em; text-decoration: none; border: none; cursor: pointer; }
    .modal-icon { font-size: 40px; text-align: center; margin-bottom: 12px; }
    .modal-title { font-family: 'Orbitron',sans-serif; font-size: 20px; font-weight: 700; color: #fff; text-align: center; margin: 0 0 8px; }
    .modal-sub { font-size: 14px; color: #a8bfd8; text-align: center; line-height: 1.6; margin: 0 0 24px; }
    .oasis-input { width: 100%; background: rgba(255,255,255,.05); border: 1px solid rgba(232,121,249,.2); border-radius: 8px; padding: 11px 14px; color: #fff; font-size: 14px; outline: none; box-sizing: border-box; margin-bottom: 12px; display: block; font-family: inherit; }
    option { background: #0a1535; }
  `]
})
export class SubmitBeamComponent {
  oasis = inject(OasisService);
  modalOpen = signal(false);
  selectedType = signal('person');
  form = { name: '', email: '', target: '', type: '', visibility: 'public', details: '' };

  beamTypes = [
    { id: 'person', icon: '🧘', name: 'Person', desc: 'Send healing to a specific individual' },
    { id: 'animal', icon: '🐾', name: 'Animal', desc: 'Healing for an animal in need' },
    { id: 'place', icon: '🌍', name: 'Place / Situation', desc: 'A location, community or world event' },
  ];

  openModal(): void {
    if (!this.oasis.session()) { return; }
    this.modalOpen.set(true);
  }

  onSubmit(): void {
    this.oasis.addKarma(250, 'Love Beam Sent');
    this.modalOpen.set(false);
  }
}
