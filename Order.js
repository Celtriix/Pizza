class Order {
    name = ""
    mozarella = true
    ham = false
    salami = false
    pepperoni = false
    olives = false
    corn = false
    onions = false
    // fungi = false

    constructor(name, mozarella, ham, salami, pepperoni, olives, corn, onions) {
        this.name = name
        this.mozarella = mozarella
        this.ham = ham
        this.salami = salami
        this.pepperoni = pepperoni
        this.olives = olives
        this.corn = corn
        this.onions = onions
    }

    getter = (s) => {
        switch (s) {
            case 'name':
                return this.name
            case 'moz':
                return this.mozarella
            case 'ham':
                return this.ham
            case 'sal':
                return this.salami
            case 'pep':
                return this.pepperoni
            case 'oli':
                return this.olives
            case 'cor':
                return this.corn
            case 'oni':
                return this.onions
            default:
                return;
        }
    }

}

class Pizza {
    orders = []
    constructor(order, order2) {
        this.addOrder(order);
        this.addOrder(order2);
    }
    constructor(order, order2, order3) {
        this.addOrder(order);
        this.addOrder(order2);
        this.addOrder(order3);

    }
    addOrder = (order) => {
        this.orders.push(order)
    }
}

class PizzaOrganizer {
    orders = []
    addOrder = () => {

    }
    pizzas = []
    addPizzas = () => { }


    getSimilarities = () => {
        let orderList = this.orders
        
    }


}