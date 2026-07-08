import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OasisService } from '../../oasis/services/oasis.service';

@Component({
  selector: 'ghn-healing-forum',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section" id="forum">
      <div class="section-kicker" style="color:#fbbf24">COMMUNITY VOICES</div>
      <h2 class="section-title">Healing Forum</h2>
      <span class="section-line" style="background:linear-gradient(90deg,#fbbf24,transparent)"></span>
      <p class="section-sub">Share experiences, ask questions, discuss traditions. Every post earns karma and contributes to the collective wisdom of GHN.</p>
      <div class="forum-list">
        @for (t of threads; track t.title) {
          <div class="thread-row">
            <div class="thread-icon">{{ t.icon }}</div>
            <div class="thread-body">
              <div class="thread-title">{{ t.title }}</div>
              <div class="thread-meta"><span class="thread-author">{{ t.author }}</span> · <span class="thread-time">{{ t.time }}</span></div>
            </div>
            <div class="thread-stats">
              <div class="reply-count">{{ t.replies }}</div>
              <div class="reply-label">replies</div>
            </div>
          </div>
        }
      </div>
      <div class="forum-cta">
        <button class="btn-amber" (click)="post()">✦ Start a Thread</button>
        <button class="btn-outline-amber">Browse Forum</button>
      </div>
    </section>
  `,
  styles: [`
    .section { padding: 100px 40px; max-width: 1100px; margin: 0 auto; }
    .section-kicker { font-family: 'Share Tech Mono',monospace; font-size: 11px; letter-spacing: .22em; margin-bottom: 16px; }
    .section-title { font-family: 'Orbitron',sans-serif; font-size: clamp(24px,3.5vw,44px); font-weight: 900; color: #fff; margin: 0 0 16px; }
    .section-line { display: block; width: 60px; height: 3px; border-radius: 2px; margin-bottom: 24px; }
    .section-sub { font-family: 'Rajdhani',sans-serif; font-size: 17px; color: #a8bfd8; line-height: 1.7; margin: 0 0 40px; max-width: 680px; }
    .forum-list { display: flex; flex-direction: column; gap: 2px; margin-bottom: 40px; }
    .thread-row { display: grid; grid-template-columns: 48px 1fr auto; gap: 16px; align-items: center; background: rgba(14,31,68,.7); border: 1px solid rgba(251,191,36,.1); border-radius: 12px; padding: 20px 24px; transition: border-color .2s; }
    .thread-row:hover { border-color: rgba(251,191,36,.28); }
    .thread-icon { font-size: 24px; }
    .thread-title { font-family: 'Rajdhani',sans-serif; font-size: 16px; font-weight: 600; color: #fff; margin-bottom: 4px; }
    .thread-meta { font-family: 'Share Tech Mono',monospace; font-size: 10px; color: #a8bfd8; letter-spacing: .06em; }
    .thread-author { color: #fbbf24; }
    .thread-stats { text-align: center; }
    .reply-count { font-family: 'Orbitron',sans-serif; font-size: 20px; font-weight: 900; color: #fbbf24; }
    .reply-label { font-family: 'Share Tech Mono',monospace; font-size: 9px; letter-spacing: .1em; color: #a8bfd8; }
    .forum-cta { display: flex; gap: 16px; flex-wrap: wrap; }
    .btn-amber { background: linear-gradient(135deg,#fbbf24,#d97706); color: #0a1535; padding: 14px 32px; border-radius: 10px; font-family: 'Orbitron',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .1em; border: none; cursor: pointer; }
    .btn-outline-amber { border: 1px solid rgba(251,191,36,.35); color: #fbbf24; background: none; padding: 14px 32px; border-radius: 10px; font-family: 'Orbitron',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .1em; cursor: pointer; }
  `]
})
export class HealingForumComponent {
  oasis = inject(OasisService);

  threads = [
    { icon: '🔮', title: 'Has anyone noticed physical warmth during group distant healing sessions?', author: 'StellarHealer', time: '2 hours ago', replies: 34 },
    { icon: '🌿', title: 'Combining Reiki with shamanic journey work — my 6-month experiment', author: 'EarthWalker', time: '5 hours ago', replies: 19 },
    { icon: '💫', title: 'Best meditation timings for collective beam alignment?', author: 'LightWeaver7', time: '1 day ago', replies: 47 },
    { icon: '📚', title: 'Resources for beginners: where to start with distance healing', author: 'NewHealer42', time: '2 days ago', replies: 62 },
  ];

  post(): void { this.oasis.addKarma(50, 'Forum post created'); }
}
