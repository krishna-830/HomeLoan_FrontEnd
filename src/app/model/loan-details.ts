import { EMIDetails } from "./EMIDetails";

export class LoanDetails {
     loanId:number;
	 loanNo:number;
    EMIDetails: EMIDetails[];
	loanAmount:number;
	rateOfInterest:number;
	tenure:number;
	totalAmounttobepaid:number;
	processingFees:number;
	totalInterest:number;
	sanctionDate:string;
	remark:string;
	status:string;
}
