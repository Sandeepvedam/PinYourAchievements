import {Component} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, NgForm} from '@angular/common';
import {Router} from '@angular/router';
import {AchievementsService} from '../shared/achievements.service';
import {Achievement} from '../shared/achievement.model';

@Component({
  selector: 'add-achievement',
  providers: [FormBuilder],
  templateUrl: 'app/add/addachievement.component.html',
  directives: [FORM_DIRECTIVES]
})
export class AddAchievementsComponent {
  addAchievementForm: any;
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
        });
    }
  }
}
