import { AccountDetails } from "./account-details";

import { AllPersonalDocs } from "./AllPersonalDocs";

import { Cibil } from "./cibil";
import { CustomerAddress } from "./Customeraddress";
import { EducationalInfo } from "./educational-info";

import { GuarantorDetails } from "./guarantor-details";
import { Ledger } from "./ledger";
import { LoanDetails } from "./loan-details";
import { PreviousLoan } from "./previous-loan";
import { Profession } from "./profession";
import { PropertyInfo } from "./property-info";
import { SanctionLetter } from "./sanction-letter";

export class Customer {
  // url(url: any): any {
  //   throw new Error('Method not implemented.');
  // }
eID:number;
name:String;
DOB:String;
Age:number;
Gender:String;
Email:String;
MobileNo:number;
cAdditionalMobileNo:number;
cAmountPaidforHome:number;
cToltalLoanRequired:number;

cEducationalInfo:EducationalInfo[];
cAddress:CustomerAddress[];
cProfession:Profession[];
ccbil:Cibil[];
cLoanDetails:LoanDetails[];
cPreviousLoan:PreviousLoan[];
cAccountDetails:AccountDetails[];
cGuarantorDetails:GuarantorDetails[];
cPropertyInfo:PropertyInfo[];
cAllPersonalDocs:AllPersonalDocs[];



}

	







