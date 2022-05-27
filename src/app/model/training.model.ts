export class Training {

    id: number;
    name: string;
    description: string;
    price: number;
    quantity:number
    imgURL: string

    constructor(id: number, name: string, description: string, price: number, quantity: number, imgURL: string) {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.quantity = quantity
        this.imgURL = imgURL
    }
}