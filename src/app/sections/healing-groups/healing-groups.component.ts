import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OasisService } from '../../oasis/services/oasis.service';

@Component({
  selector: 'ghn-healing-groups',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section" id="groups">
      <div class="section-kicker">COLLECTIVE HEALING</div>
      <h2 class="section-title">Healing Groups</h2>
      <span class="section-line"></span>
      <p class="section-sub">Join a healing circle that matches your tradition and intention. Groups amplify individual beams into coherent fields of collective energy.</p>
      <div class="groups-grid">
        @for (g of groups; track g.name) {
          <div class="group-card">
            <div class="group-header">
              <span class="group-icon">{{ g.icon }}</span>
              <div>
                <div class="group-name">{{ g.name }}</div>
                <div class="group-members">{{ g.members | number }} members</div>
              </div>
            </div>
            <p class="group-desc">{{ g.desc }}</p>
            <div class="group-tags">
              @for (tag of g.tags; track tag) {
                <span class="tag">{{ tag }}</span>
              }
            </div>
            <div class="group-footer">
              <span class="karma-total">{{ g.karma | number }} ✦ total karma</span>
              <button class="btn-join" (click)="join(g.name)">Join</button>
            </div>
          </div>
        }
      </div>
      <div class="groups-cta">
        <button class="btn-primary" (click)="create()">✦ Create a Group</button>
        <button class="btn-outline" (click)="browse()">Browse All Groups</button>
      </div>
    </section>
  `,
  styles: [`
    .section { padding: 100px 40px; max-width: 1100px; margin: 0 auto; }
    .section-kicker { font-family: 'Share Tech Mono',monospace; font-size: 11px; letter-spacing: .22em; color: #e879f9; margin-bottom: 16px; }
    .section-title { font-family: 'Orbitron',sans-serif; font-size: clamp(24px,3.5vw,44px); font-weight: 900; color: #fff; margin: 0 0 16px; }
    .section-line { display: block; width: 60px; height: 3px; background: linear-gradient(90deg,#e879f9,transparent); border-radius: 2px; margin-bottom: 24px; }
    .section-sub { font-family: 'Rajdhani',sans-serif; font-size: 17px; color: #a8bfd8; line-height: 1.7; margin: 0 0 48px; max-width: 680px; }
    .groups-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(300px,1fr)); gap: 24px; margin-bottom: 40px; }
    .group-card { background: rgba(14,31,68,.7); border: 1px solid rgba(232,121,249,.15); border-radius: 16px; padding: 28px; transition: border-color .3s; }
    .group-card:hover { border-color: rgba(232,121,249,.35); }
    .group-header { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }
    .group-icon { font-size: 30px; }
    .group-name { font-family: 'Orbitron',sans-serif; font-size: 13px; font-weight: 700; color: #fff; letter-spacing: .06em; margin-bottom: 3px; }
    .group-members { font-family: 'Share Tech Mono',monospace; font-size: 11px; color: #e879f9; }
    .group-desc { font-size: 14px; color: #a8bfd8; line-height: 1.6; margin: 0 0 14px; }
    .group-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
    .tag { background: rgba(232,121,249,.1); border: 1px solid rgba(232,121,249,.2); border-radius: 999px; padding: 3px 10px; font-family: 'Share Tech Mono',monospace; font-size: 10px; color: #e879f9; letter-spacing: .06em; }
    .group-footer { display: flex; align-items: center; justify-content: space-between; }
    .karma-total { font-family: 'Share Tech Mono',monospace; font-size: 11px; color: #a8bfd8; }
    .btn-join { background: rgba(232,121,249,.12); border: 1px solid rgba(232,121,249,.3); border-radius: 999px; padding: 6px 18px; color: #e879f9; font-family: 'Share Tech Mono',monospace; font-size: 11px; cursor: pointer; transition: background .2s; }
    .btn-join:hover { background: rgba(232,121,249,.22); }
    .groups-cta { display: flex; gap: 16px; flex-wrap: wrap; }
    .btn-primary { background: linear-gradient(135deg,#e879f9,#a855f7); color: #fff; padding: 14px 32px; border-radius: 10px; font-family: 'Orbitron',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .1em; border: none; cursor: pointer; }
    .btn-outline { border: 1px solid rgba(232,121,249,.35); color: #e879f9; background: none; padding: 14px 32px; border-radius: 10px; font-family: 'Orbitron',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .1em; cursor: pointer; }
  `]
})
export class HealingGroupsComponent {
  oasis = inject(OasisService);

  groups = [
    { icon: '🌸', name: 'Light Weavers Circle', members: 3841, karma: 284000, desc: 'Daily collective meditation at dawn and dusk, sending unified beams of love and light to world hotspots and individuals in crisis.', tags: ['Meditation', 'Light Work', 'Daily Practice'] },
    { icon: '🌿', name: 'Earth Guardians', members: 2190, karma: 198000, desc: 'Healing focused on the natural world — forests, oceans, endangered species and ecosystems under threat from human activity.', tags: ['Nature', 'Gaia', 'Distance Healing'] },
    { icon: '💖', name: 'Heart Warriors', members: 1654, karma: 142000, desc: 'Trauma-informed healing circle supporting survivors of abuse, conflict and loss through prayer, intention and compassionate witness.', tags: ['Trauma', 'Prayer', 'Compassion'] },
  ];

  join(name: string): void { this.oasis.addKarma(300, `Joined healing group: ${name}`); }
  create(): void { this.oasis.addKarma(500, 'Created a healing group'); }
  browse(): void {}
}
