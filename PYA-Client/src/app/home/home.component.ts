import {Component} from '@angular/core';
import {AchievementsService} from '../shared/achievements.service';
import {Achievement} from '../shared/achievement.model';

@Component({
  selector: 'home',
  templateUrl: "app/home/home.component.html"
})
export class HomeComponent {
  achievements: Array<any>;

  constructor(private achievementsService: AchievementsService) {
    achievementsService.getAllAchievements()
      .subscribe(a => {
          this.achievements = a.json();
      });
  }
}