/*
// 1. Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
class circle {
    constructor(_r) {
        this.r = _r;
    }
    get radius() {
        return this.r;
    }
    get diameter() {
        return this.r * 2;
    }
    set radius(newRadius) {
        this.r = newRadius;
    }
    squareCircle() {
        return (3.14 * this.r * this.r).toFixed(2);
    }
    circumferens() {
        return (2 * 3.14 * this.r).toFixed(2);
    }
}
let p = new circle(5);
console.log(p.radius);
console.log(p.diameter);
console.log(p.squareCircle());
console.log(p.circumferens());


// 2. Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом;
// текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
class marker {
    constructor(_color, _quantity) {
        this.color = _color;
        this.quantity = _quantity;
    }
    print(text) {
        let space = 0;
        for (let i of text) {
            if (i === " ") {
                space += 1;
            }

        }
        for (let paint = (text.length - space) * 0.5; paint <= this.quantity; paint += (text.length - space) * 0.5) {
            document.write(`<p style="color: ${this.color}">${text}</p>`);
            // console.log(this.quantity - paint);
        }
    }
}
class fullMarker extends marker {
    constructor(_color, _quantity) {
        super(_color, _quantity);
    }
    print(text) {
        if (this.quantity < 100) {
            this.quantity = 100;
        }
        super.print(text);
    }
}
let phrase = new fullMarker("red", 80);
phrase.print("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, laboriosam?");
*/

// 3. Реализовать класс Employee, описывающий работника, и создать массив работников банка.
// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка.
// Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().

const PlanetExpress = [{
    name: "Philip J. Fry",
    skill: "delivery boy",
}, {
    name: "Turanga Leela",
    skill: "ship's captain",
}, {
    name: "Bender Rodriguez",
    skill: "assistant sales manager",
}, {
    name: "Professor Hubert J. Farnsworth",
    skill: "founder of Planet Express Inc.",
}, {
    name: "Amy Wong",
    skill: "accident-prone long-term intern",
}, {
    name: "Hermes Conrad",
    skill: "accountant",
}, {
    name: "Dr. John A. Zoidberg",
    skill: "staff physician",
}];
class EmpTable {
    constructor(data) {
        this.name = data.name;
        this.skill = data.skill;
    }
    getHtml() {
        let result = `<tr><td>${this.name}:</td><td>${this.skill}</td></tr>`;

        document.write(result);
    }
}
class Employee {
    constructor(_data) {
        this.data = _data;
    }
    print() {
        let result = `<table><tr><th>Name</th><th>Skill</th></tr>`;
        document.write(result);
        for (let item of this.data) {
            let worker = new EmpTable(item);
            worker.getHtml();
        }
        result += `</table>`;
    }
}
const workers = new Employee(PlanetExpress);
workers.print();
