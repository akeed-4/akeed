import { inviceType } from "./inviceType";
import { InvoiceProductModel } from "./InvoiceProductModel";
import { NameModel } from "./namemodel";



export  class inivce{

    id:number;
    invoiceNo:number;
    type:inviceType;
    totalAmountBeforTax:number;
    totalAmount:number;
    paidAmount:number;
    taxPersentage:number;
    taxAmount:number;
    editAmount:number;
    date:Date;
    approvalState:boolean;
   // customer:customer;
    qrData:string;
    btc_title:NameModel;
    btb_title:NameModel;
    invoice_name:NameModel;
    customer_name:string;
    customer_tax_id:string
    products: InvoiceProductModel ;
  
  
}