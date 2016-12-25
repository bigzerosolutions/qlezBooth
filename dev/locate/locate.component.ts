import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';

@Component({
    selector: 'locate',
    templateUrl:'../dev/locate/locate.component.html',
    directives :[ROUTER_DIRECTIVES]
})

export class LocateComponent {
	test: string;
	private router: Router;
}