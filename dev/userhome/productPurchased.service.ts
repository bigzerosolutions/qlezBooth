import {Injectable} from "angular2/core";
import {Http,Headers,Response,HTTP_PROVIDERS} from "angular2/http";
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {ProductPurchased} from './productPurchased';

@Injectable()
export class ProductPurchasedService {
	private CustomerDetail;
	constructor(private _purchasedHttp: Http) {}
	getPreviousPurchase(){
		return this._purchasedHttp.get('http://localhost:8080/AngularJSWithRestful/LoadCategoryServlet')
				.map(res => res.json());
	}
}