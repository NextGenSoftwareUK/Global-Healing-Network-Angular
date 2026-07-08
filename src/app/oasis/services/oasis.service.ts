import { Injectable, signal } from '@angular/core';
import { OASISClient } from '@oasisomniverse/web4-api';

export interface OasisSession {
  avatarId: string;
  username: string;
  karma: number;
}

@Injectable({ providedIn: 'root' })
export class OasisService {
  private readonly API = 'https://api.web4.oasisomniverse.one';
  private readonly SESSION_KEY = 'oasis_ghn_session';

  session = signal<OasisSession | null>(this._loadSession());
  karmaToast = signal<{ message: string; amount: number } | null>(null);

  private _loadSession(): OasisSession | null {
    try {
      const raw = sessionStorage.getItem(this.SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }

  async login(username: string, password: string): Promise<void> {
    const oasis = new OASISClient({ baseUrl: this.API });
    const result: any = await oasis.auth.login({ username, password });
    const karma: any = await oasis.karma.getKarmaForAvatar({ avatarId: result.avatarId });
    const sess: OasisSession = { avatarId: result.avatarId, username, karma: karma.total ?? 0 };
    sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(sess));
    this.session.set(sess);
  }

  logout(): void {
    sessionStorage.removeItem(this.SESSION_KEY);
    this.session.set(null);
  }

  async register(firstName: string, lastName: string, username: string, email: string, password: string): Promise<void> {
    const oasis = new OASISClient({ baseUrl: this.API });
    await (oasis.auth as any).register({ firstName, lastName, username, email, password });
  }

  async forgotPassword(email: string): Promise<void> {
    const oasis = new OASISClient({ baseUrl: this.API });
    await (oasis.auth as any).forgotPassword({ email });
  }

  async addKarma(amount: number, reason: string): Promise<void> {
    const sess = this.session();
    if (!sess) return;
    try {
      const oasis = new OASISClient({ baseUrl: this.API });
      await oasis.karma.addKarmaToAvatar({ avatarId: sess.avatarId, karmaAmount: amount, karmaSourceTitle: reason });
      const updated = { ...sess, karma: sess.karma + amount };
      sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(updated));
      this.session.set(updated);
      this.karmaToast.set({ message: reason, amount });
      setTimeout(() => this.karmaToast.set(null), 4000);
    } catch { /* silent */ }
  }
}
