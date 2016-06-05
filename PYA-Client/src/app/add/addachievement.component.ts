import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AchievementsService} from '../shared/achievements.service';
import {Achievement} from '../shared/achievement.model';

@Component({
  selector: 'add-achievement',
  templateUrl: 'app/add/addachievement.component.html'
})
export class AddAchievementComponent {
  achievement: Achievement;
  constructor(private router: Router,
    private achievementsService: AchievementsService) {
    this.achievement = {
      title: "",
      type: "",
      from: ""
    };
  }

  addAchievement() {
    if (this.achievement.title && this.achievement.type && this.achievement.from) {
      this.achievementsService.addAnAchievement(this.achievement)
        .subscribe(result => {
          this.router.navigateByUrl('/');
        }, (error) => {
          alert("Couldn't add the component!");
        });
    }
  }
}
