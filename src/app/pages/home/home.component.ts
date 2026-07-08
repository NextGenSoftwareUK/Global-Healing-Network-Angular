import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../sections/hero/hero.component';
import { MissionComponent } from '../../sections/mission/mission.component';
import { SubmitBeamComponent } from '../../sections/submit-beam/submit-beam.component';
import { HealingGroupsComponent } from '../../sections/healing-groups/healing-groups.component';
import { HealingArchiveComponent } from '../../sections/healing-archive/healing-archive.component';
import { HealingForumComponent } from '../../sections/healing-forum/healing-forum.component';
import { FooterComponent } from '../../sections/footer/footer.component';

@Component({
  selector: 'ghn-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    MissionComponent,
    SubmitBeamComponent,
    HealingGroupsComponent,
    HealingArchiveComponent,
    HealingForumComponent,
    FooterComponent,
  ],
  template: `
    <ghn-hero />
    <ghn-mission />
    <ghn-submit-beam />
    <ghn-healing-groups />
    <ghn-healing-archive />
    <ghn-healing-forum />
    <ghn-footer />
  `
})
export class HomeComponent {}
