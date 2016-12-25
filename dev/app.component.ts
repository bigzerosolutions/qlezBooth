import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {LocateComponent} from './locate/locate.component';
import {ProductPurchasedComponent} from './userhome/productPurchased.component';


@Component({
    selector: 'my-app',
    templateUrl:'../dev/app.component.html',
    directives :[ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/', component: WelcomeComponent, name: 'Welcome', useAsDefault:true},
  { path: '/locate', component: LocateComponent, name: 'Locate'},
  { path: '/userhome', component: ProductPurchasedComponent, name: 'UserHome'}
])

export class AppComponent {
	constructor(){}
}