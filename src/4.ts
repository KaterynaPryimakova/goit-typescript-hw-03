class Key {
    private signature = Math.random();

    getSignature() {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {}

    getKey() {
        return this.key;
    }
}

abstract class House {
    constructor(key: Key) {}
    door: true | false;

    comeIn(person: Person) {
        const tenants: Array<Person> = [];
        if (this.door) {
            tenants.push(person);
            console.log(`${tenants.length} person is in the House`);
        }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    openDoor(key: Key): void {
        if (key) {
            this.door = true;
            console.log("We have a key. The door is opening");
        }
    }
}
const key = new Key();

const person = new Person(key);

const house = new MyHouse(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
