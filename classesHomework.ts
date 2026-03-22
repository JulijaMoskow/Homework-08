class Person {
    firstName!: string;
    lastName!: string;
}

const person1 = new Person();
person1.firstName = "Anna";
person1.lastName = "Miller";
console.log(person1);

const person2 = new Person();
person2.firstName = "John";
person2.lastName = "Smith";
console.log(person2);

class Book {
    title: string;
    author: string;
    pages: number;

    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

const book1 = new Book("Harry Potter", "J.K. Rowling", 320);
console.log(book1);