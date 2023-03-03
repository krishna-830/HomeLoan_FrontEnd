import { PbankDetails } from "./pbank-details";

export class PreviousLoan {
     ploanId:number;
	 ploanAmount:number;
	 pTenure:number;
	 paidAmount:number;
	 remainingAmount:number;
	 deafulterCount:number;
	
	 PreviousLoanBank: PbankDetails[];
	 status:string;
	 remark:string;

}
