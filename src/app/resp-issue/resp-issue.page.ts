import { Component, OnInit } from '@angular/core';
import { IssuesService} from '../issues.service';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-resp-issue',
  templateUrl: './resp-issue.page.html',
  styleUrls: ['./resp-issue.page.scss'],
})
export class RespIssuePage implements OnInit {

	data: any;
	issueId: null;
	subscription: any;

	constructor(private issuesService: IssuesService, 
		private nav: NavController, 
		private loadingController: LoadingController) { }

	ngOnInit() {
		this.issueId = this.issuesService.currentIssue
		console.log(this.issuesService.currentIssue)
		if(this.issueId){
			this.loadIssue();
		}
	  	
	}

	async loadIssue(){
		const loading = await this.loadingController.create({
			message: 'now loading...'
		});
		await loading.present();

		this.subscription = this.issuesService.getData('issues/'+this.issueId).subscribe(res => {
			loading.dismiss();
			this.data = res;
		});


	}

	ngOnDestroy() {
  		this.subscription.unsubscribe();
  	}

}
