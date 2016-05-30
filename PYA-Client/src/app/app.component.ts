import {Component} from '@angular/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {HomeComponent} from './home/home.component';
import {AddAchievementsComponent} from './add/addAchievement.component';
import {AchievementsService} from './shared/achievements.service';

@Component({
  selector: 'app',
  templateUrl:'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, AchievementsService]
})
@Routes([
  { path: '/home', component: HomeComponent },
  { path: '/add', component: AddAchievementsComponent },
  { path: "*", component: HomeComponent },
  { path: "/", component: HomeComponent }
])
export class AppComponent { }
