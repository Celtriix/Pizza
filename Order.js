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
        this.name = name;
        this.mozarella = mozarella;
        this.ham = ham;
        this.salami = salami;
        this.pepperoni = pepperoni;
        this.olives = olives;
        this.corn = corn;
        this.onions = onions;
    }

    getVector = () => {
        let out = [];
        out[0] = (this.mozarella);
        out[1] = (this.ham);
        out[2] = this.salami;
        out[3] = this.pepperoni;
        out[4] = this.olives;
        out[5] = this.corn;
        out[6] = this.onions;
        return out;
    }

    getter = (s) => {
        switch (s) {
            case 'name':
                return this.name;
            case 'moz':
                return this.mozarella;
            case 'ham':
                return this.ham;
            case 'sal':
                return this.salami;
            case 'pep':
                return this.pepperoni;
            case 'oli':
                return this.olives;
            case 'cor':
                return this.corn;
            case 'oni':
                return this.onions;
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
    //constructor(order, order2, order3) {
    //    this.addOrder(order);
    //    this.addOrder(order2);
    //    this.addOrder(order3);

    //}
    addOrder = (order) => {
        this.orders.push(order);
    }

}

class PizzaOrganizer {
    orders = []
    addOrder = (order) => {
      this.orders.push(order);
    }
    pizzas = []
    addPizzas = () => { }


    getSimilarities = () => {
        let n = this.orders.length;
        let dist = Array(n).fill(Array(n).fill(0));
        for(let i = 0; i<n; i++){
          for(let j = i; j<n; j++){
            console.log("i: ", i, "j: ", j)
            dist[i][j] = this.getDistance(this.orders[i], this.orders[j])
            console.log(dist[i][j])
          }
        }
        return dist;
    }

    getDistance = (order1, order2) => {
      let out = 0;
      let out1 = order1.getVector();
      let out2 = order2.getVector();
      for(let i=0; i<out1.length;i++){
        if(out1[i]===out2[i])
          out += 1;
      }
      return Math.round(out*100/out1.length)/100;
    }
}
