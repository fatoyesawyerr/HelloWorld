import { LightningElement, track } from 'lwc';

export default class SimpleInterestCalculator extends LightningElement {
    @track currentOutput;
     principle;
     rateOfInterest;
     noOfYears;

    principalChangeHandler(event)
    {
        this.principal=parseInt(event.target.value);
    }
    timeChangeHandler(event)
    {
        this.noOfYears=parseInt(event.target.value);
    }
    rateChangeHandler(event)
    {
        this.rateOfInterest=parseInt(event.target.value);
    }
    CalculateSIHandler()
    {
        this.currentOutput='Simple Interest is : ' +(this.principal*this.rateOfInterest*this.noOfYears)/100;
    }
}