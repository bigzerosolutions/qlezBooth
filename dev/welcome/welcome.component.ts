import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';
import {WelcomeService} from './welcome.service';

@Component({
    selector: 'welcome',
    templateUrl:'../dev/welcome/welcome.component.html',
    directives :[ROUTER_DIRECTIVES],
    providers:[WelcomeService] 
})

export class WelcomeComponent {
	private noProductID: string;
	test:string;
	constructor(private _httpService: WelcomeService,private router: Router){

	}
	welcomeFunction(){
		this.noProductID="product_recieved";
		/*this._httpService.verifyUser()
			.subscribe(
				data => this.test = JSON.stringify(data),
				error => alert("error"),
				() => console.log("done")
			);
*/
		if(this.noProductID == "no_product") {
			this.router.navigate(['Locate']);
		}
		else if(this.noProductID == "product_recieved"){
			this.router.navigate(['UserHome'])
		}
	}
}