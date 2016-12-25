import {Component, OnInit, Pipe, PipeTransform,ElementRef,ViewChildren} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ProductPurchasedService} from './productPurchased.service';
import {NavbarComponent} from './navbar/navbar.component';

@Component({
    selector: 'userhome',
    templateUrl:'../dev/userhome/productPurchased.component.html',
    directives :[NavbarComponent,ROUTER_DIRECTIVES],
    providers:[ProductPurchasedService,HTTP_PROVIDERS] 
})

export class ProductPurchasedComponent implements OnInit{
	@ViewChildren('star') inputs;
	@ViewChildren('comment') comments;
	rem:number;
	mod:number;
	inds = [1, 2, 3, 4, 5];
	products = [{productID:"123456789",productName: "Parle G",productPurchaseDate: "12-02-2017",starRate:"",comment:""},
				{productID:"874521202",productName: "Magie",productPurchaseDate: "15-02-2017",starRate:"",comment:""},
				{productID:"986653214",productName: "Tomato",productPurchaseDate: "12-12-2017",starRate:"",comment:""},
				{productID:"741258963",productName: "Pepe Jeans",productPurchaseDate: "02-08-2017",starRate:"",comment:""},
				{productID:"888541236",productName: "Mobile cover",productPurchaseDate: "22-02-2017",starRate:"",comment:""},
				{productID:"748966332",productName: "Table Mate",productPurchaseDate: "12-01-2017",starRate:"",comment:""}]
	
	constructor(private _httpService: ProductPurchasedService,private router: Router,private elementRef: ElementRef){}
	
	ngOnInit(){
		this._httpService.getPreviousPurchase().subscribe(data => {
			//this.products.pop();
			var productID;
			var productName;
			var productPurchaseDate;
			var starRate;
			var comment;
			var purchase;
			for(var i = 0;i< data.length;i++)
			{
				productID = data[i].productID;
				productName = data[i].productName;
				productPurchaseDate = data[i].productPurchaseDate;
				starRate = data[i].starRate;
				comment	= data[i].comment;
				purchase = {
					productID : productID,
			    	productName : productName,
				    productPurchaseDate : productPurchaseDate,
				    starRate : starRate,
				    comment : comment
				};
				this.products.push(purchase);
			}
		},
		error => alert("Error in fetching previous purchase"),
		() => console.log("Previous purchase details recieved"));

    }

    selectStar(item,name){
		this.mod = item.id % 10;
        this.rem =  parseInt("" + item.id/10);
		this.inputs.toArray().find((e) => {
			var emod = e.nativeElement.id % 10;
        	var erem =  parseInt("" + e.nativeElement.id/10);
        	//Run the loop trough only the selected line
			if(this.rem == erem){
				//Applies yellow color till the seleted star
				if(this.mod > emod){
					return e.nativeElement.setAttribute("style","color: yellow;");
				}
				else if(this.mod == emod){
					for(var i =0;i<this.products.length;i++){
			    		if(this.products[i].productName==name) {
			    			this.products[i].starRate=emod.toString();
			    		}
			    	}
					return e.nativeElement.setAttribute("style","color: yellow;");
				}
				else{
					return e.nativeElement.setAttribute("style","color: grey;");
				}
			}
    	});
    }

    saveComment(comment,name){
    	this.comments.toArray().find((c) => {
        	//Run the loop trough only the selected line
			if(c.nativeElement.id == comment.id){
				//Applies yellow color till the seleted comment
				if(c.nativeElement.checked){
					for(var i =0;i<this.products.length;i++){
			    		if(this.products[i].productName==name) {
			    			this.products[i].comment=c.nativeElement.value;
			    		}
			    	}
				}	
			}	
		});
    }
}