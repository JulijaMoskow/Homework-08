class Product {

    name: string;
    price: number;
    quantity: number;

    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    isInStock(): boolean {
        return this.quantity > 0;
    }

}

const product1 = new Product("Laptop", 1200, 5);
const product2 = new Product("Phone", 800, 0);

console.log(product1.isInStock());
console.log(product2.isInStock());