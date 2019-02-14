import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  
  data: any
  constructor(private issuesService: IssuesService, private router: Router) { }

  ngOnInit() {
  	this.issuesService.getData('issues/current')
		.subscribe(data => {
			console.log(data);
      this.data = data
		})
  }

  getIssue(issue){
    this.issuesService.currentIssue = issue
    this.router.navigate(['/tabs/resp-issue'])
  }
}
