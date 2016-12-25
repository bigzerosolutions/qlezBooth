import {Injectable} from "angular2/core";
import {Http,Headers,Response,HTTP_PROVIDERS} from "angular2/http";
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {NavBarDetail } from'./navbar';

@Injectable()
export class NavbarService {
	private CustomerDetail;
	constructor(private _navbarhttp: Http) {}

	getCustomerDetail(){
		/*return this._navbarhttp.get('http://localhost:8080/AngularJSWithRestful/LoadCategoryServlet')
			.map(res => res.json());*/
		/*return this._navbarhttp.post('http://localhost:8080/AngularJSWithRestful/LoadCategoryServlet',json,{
			headers:headers
		})*/
	}
}