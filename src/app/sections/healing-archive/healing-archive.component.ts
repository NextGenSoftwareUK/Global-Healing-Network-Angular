import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ghn-healing-archive',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-full" id="archive">
      <div class="section">
        <div class="section-kicker" style="color:#34d399">KNOWLEDGE BASE</div>
        <h2 class="section-title">Healing Archive</h2>
        <span class="section-line" style="background:linear-gradient(90deg,#34d399,transparent)"></span>
        <p class="section-sub">Peer-reviewed healing wisdom, practitioner case studies and research from across every tradition. Contribute your knowledge and earn karma.</p>
        <div class="archive-grid">
          @for (a of articles; track a.title) {
            <div class="archive-card">
              <div class="article-kicker">{{ a.category }}</div>
              <h3 class="article-title">{{ a.title }}</h3>
              <p class="article-excerpt">{{ a.excerpt }}</p>
              <div class="article-meta">
                <div class="article-stars">
                  @for (s of [1,2,3,4,5]; track s) {
                    <span [style.color]="s <= a.rating ? '#f59e0b' : '#2a3f6b'">★</span>
                  }
                </div>
                <span class="article-reads">{{ a.reads | number }} reads</span>
              </div>
            </div>
          }
        </div>
        <div class="archive-cta">
          <button class="btn-green">✦ Submit an Article</button>
          <button class="btn-outline-green">Browse Archive</button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-full { background: linear-gradient(180deg,transparent,rgba(52,211,153,.03),transparent); }
    .section { padding: 100px 40px; max-width: 1100px; margin: 0 auto; }
    .section-kicker { font-family: 'Share Tech Mono',monospace; font-size: 11px; letter-spacing: .22em; margin-bottom: 16px; }
    .section-title { font-family: 'Orbitron',sans-serif; font-size: clamp(24px,3.5vw,44px); font-weight: 900; color: #fff; margin: 0 0 16px; }
    .section-line { display: block; width: 60px; height: 3px; border-radius: 2px; margin-bottom: 24px; }
    .section-sub { font-family: 'Rajdhani',sans-serif; font-size: 17px; color: #a8bfd8; line-height: 1.7; margin: 0 0 48px; max-width: 680px; }
    .archive-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(260px,1fr)); gap: 20px; margin-bottom: 40px; }
    .archive-card { background: rgba(14,31,68,.7); border: 1px solid rgba(52,211,153,.15); border-radius: 14px; padding: 28px 22px; transition: border-color .3s; }
    .archive-card:hover { border-color: rgba(52,211,153,.35); }
    .article-kicker { font-family: 'Share Tech Mono',monospace; font-size: 10px; letter-spacing: .14em; color: #34d399; margin-bottom: 10px; }
    .article-title { font-family: 'Orbitron',sans-serif; font-size: 13px; font-weight: 700; color: #fff; margin: 0 0 10px; line-height: 1.4; letter-spacing: .04em; }
    .article-excerpt { font-size: 13px; color: #a8bfd8; line-height: 1.6; margin: 0 0 16px; }
    .article-meta { display: flex; align-items: center; justify-content: space-between; }
    .article-stars { font-size: 14px; letter-spacing: 2px; }
    .article-reads { font-family: 'Share Tech Mono',monospace; font-size: 10px; color: #a8bfd8; }
    .archive-cta { display: flex; gap: 16px; flex-wrap: wrap; }
    .btn-green { background: linear-gradient(135deg,#34d399,#059669); color: #fff; padding: 14px 32px; border-radius: 10px; font-family: 'Orbitron',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .1em; border: none; cursor: pointer; }
    .btn-outline-green { border: 1px solid rgba(52,211,153,.35); color: #34d399; background: none; padding: 14px 32px; border-radius: 10px; font-family: 'Orbitron',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .1em; cursor: pointer; }
  `]
})
export class HealingArchiveComponent {
  articles = [
    { category: 'DISTANCE HEALING', title: 'Quantum Entanglement and Healing Intention: A Review', excerpt: 'Survey of peer-reviewed research into non-local effects of focused healing intention across distance.', rating: 5, reads: 4820 },
    { category: 'MEDITATION SCIENCE', title: 'Group Meditation and Reduced Urban Crime Rates', excerpt: 'Analysis of the 1993 Washington D.C. study and subsequent replications across 8 cities.', rating: 4, reads: 3140 },
    { category: 'REIKI', title: 'Clinical Outcomes of Reiki in Palliative Care Settings', excerpt: 'Meta-analysis of 22 RCTs examining Reiki\'s effect on pain, anxiety and quality of life in terminal patients.', rating: 5, reads: 2890 },
    { category: 'SOUND HEALING', title: '432Hz vs 440Hz: Physiological Responses in Controlled Study', excerpt: 'Double-blind crossover trial measuring HRV, cortisol and self-reported calm across two tuning frequencies.', rating: 4, reads: 6210 },
  ];
}
