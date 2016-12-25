import {Injectable} from "angular2/core";
import {Http,Headers,Response} from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()
export class WelcomeService {
	res: Response;
	constructor(private _Welcomehttp: Http) {
		// code...
	}

	verifyUser(){
		/*var headers = new Headers();
		headers.append('Access-Control-Allow-Origin', '*');
    	headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    	headers.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');
    */
    	/*return this._Welcomehttp.post('http://localhost:8080/AngularJSWithRestful/LoadCategoryServlet',json,{
			headers:headers
		})
		.map(res => res.json());*/
		
		// return this._Welcomehttp.get('http://localhost:8080/AngularJSWithRestful/LoadCategoryServlet')
		// 		.map(res => res.json());

		
		
	}
}