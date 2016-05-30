import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Achievement} from './achievement.model';

@Injectable()
export class AchievementsService {
	private urlPrefix: string = "http://localhost:8000";
	
	constructor(private http: Http) {
	}

	getAchievementsOfType(type: string): Observable<Response> {
		var path = `${this.urlPrefix}/api/achievements/${type}`;
		return this.http.get(path);
	}

	getAllAchievements(): Observable<Response> {
		var path = `${this.urlPrefix}/api/achievements`;
		return this.http.get(path);
	}

	addAnAchievement(newAchievement): Observable<Response> {
		var path = `${this.urlPrefix}/api/achievements`;
		return this.http.post(path, JSON.stringify(newAchievement));
	}
}