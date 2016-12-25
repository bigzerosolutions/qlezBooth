import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {NavbarService} from './navbar.service';
import {NavBarDetail} from './navbar';

@Component({
    selector: 'navbar',
    templateUrl:'../dev/userhome/navbar/navbar.component.html',
    directives :[ROUTER_DIRECTIVES],
    providers:[NavbarService,HTTP_PROVIDERS] 
})

export class NavbarComponent implements OnInit{
	username:string;
	userImageUrl:string;
	constructor(private _httpService: NavbarService,private router: Router){}
	ngOnInit(){
		this.username = "vishnu prasad";
		this.userImageUrl ="../images/customer.png";

		//this._httpService.getCustomerDetail().subscribe(data => {
			//this.username = data.username;
			//this.userImagerUrl = data.imageurl;
		//},
		//error => alert("error in fetching customer details"),
		//() => console.log("customer details recieved"));

	}
}