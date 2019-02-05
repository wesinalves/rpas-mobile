import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  data: any
  constructor(private issuesService: IssuesService, private router: Router) { }

  ngOnInit() {
  	this.issuesService.getData('submissions')
		.subscribe(data => {
			console.log(data);
      this.data = data
		})
  }

  getSubmission(submission){
    this.issuesService.currentIssue = submission
    this.router.navigate(['/tabs/resp-submission'])
  }
}
