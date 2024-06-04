// Step 1: تعریف کلاس House با ویژگی‌های پایه
class House {
    walls: number;
    doors: number;
    windows: number;
    roof: boolean;
    backyard?: boolean;
    balcony?: boolean;
    floors?: number;

    constructor() {
        this.walls = 4;
        this.doors = 1;
        this.windows = 2;
        this.roof = true;
    }
}

// Step 2: تعریف Builder Interface
interface HouseBuilder {
    setBackyard(backyard: boolean): this;
    setBalcony(balcony: boolean): this;
    setFloors(floors: number): this;
    build(): House;
}

// Step 3: پیاده‌سازی Concrete Builder
class ConcreteHouseBuilder implements HouseBuilder {
    private house: House;

    constructor() {
        this.house = new House();
    }

    setBackyard(backyard: boolean): this {
        this.house.backyard = backyard;
        return this;
    }

    setBalcony(balcony: boolean): this {
        this.house.balcony = balcony;
        return this;
    }

    setFloors(floors: number): this {
        this.house.floors = floors;
        return this;
    }

    build(): House {
        return this.house;
    }
}

// Step 4: استفاده از Builder برای ساخت اشیاء مختلف
const basicHouse = new ConcreteHouseBuilder().build();
console.log(basicHouse);

const luxuryHouse = new ConcreteHouseBuilder()
    .setBackyard(true)
    .setBalcony(true)
    .setFloors(2)
    .build();
console.log(luxuryHouse);