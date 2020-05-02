export interface ICar {
    make: string;
    model: string;
    year: string;
    imageURL: string;

}
export class Car implements ICar{
    make: string;
    model: string;
    year: string;
    imageURL: string;

    constructor( make: string,  model: string,    year: string,    imageURL: string )
    {
        console.log( "hi 1 : " + make + " ok");
        this.make = make;
        this.model = model;
        this.year = year;
        this.imageURL = imageURL;
    }

}
