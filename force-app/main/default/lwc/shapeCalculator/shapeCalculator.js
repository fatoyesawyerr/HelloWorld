import { LightningElement, track } from 'lwc';

export default class ShapeCalculator extends LightningElement {

    @track currentOutput;
    side;
    width;
    height;
    side;
    diagonal1;
    diagonal2;


    sideChangeHandler(event)
    {
        this.side=event.target.value;
    }
    widthChangeHandler(event)
    {
        this.width=event.target.value;
    }
    heightChangeHandler(event)
    {
        this.height=event.target.value;
    }
    diagonal1ChangeHandler(event)
    {
        this.diagonal1=event.target.value;
    }
    diagonal2ChangeHandler(event)
    {
        this.diagonal2=event.target.value;
    }
    calculateSqAreaHandler()
    {
        const s= parseInt(this.side);
        this.currentOutput='Area of the Square is: '+(s*s);
    }
    calculateSqAreaHandler()
    {
        const w= parseInt(this.width);
        const h= parseInt(this.height);
        this.currentOutput='Area of the Square is: '+(w*h);
    }
    calculateSqAreaHandler()
    {
        const w= parseInt(this.width);
        const h= parseInt(this.height);
        this.currentOutput='Area of the Square is: '+(w*h);
    }

}