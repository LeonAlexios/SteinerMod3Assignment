function Restaurant(name, address, hasGluten, hasVegan, isLocal) {
    this.name = name;
    this.address = address;
    this.hasGluten = hasGluten;
    if (this.hasGluten) {
        this.hasGluten = 'Has Gluten-Free Options'
    } else {
        this.hasGluten = 'Does Not Have Gluten-Free Options'
    }
    this.hasVegan = hasVegan;
    if (this.hasVegan) {
        this.hasVegan = 'Has Vegan Options'
    } else {
        this.hasVegan = 'Does Not Have Vegan Options'
    }
    this.isLocal = isLocal;
    if (this.isLocal) {
        this.isLocal = 'Has nearby Location(s)'
    } else {
        this.isLocal = 'Does Not Have Have Nearby Location(s)'
    }
    this.createTableRow = function () {

        return `<tr><td>${this.name}</td><td>${this.address}</td><td>${this.hasGluten}</td><td>${this.hasVegan}</td><td>${this.isLocal}</td></tr>`

    }
}

let allRestaurants = [
    new Restaurant('Macho Meals', '337 St Paul Ave', false, false, false),
    new Restaurant('Veganic Corner', '24 S Buckingham Road', true, true, true),
    new Restaurant('Sherryl Meals', '7897 Glen Eagles Court', true, false, false),
    new Restaurant('Salad Heaven', '593 Harvey Street', false, true, true),
    new Restaurant('Root Shoots', '18 South Chapel Street', true, true, true),
    new Restaurant('Grill Moguls', '40 State Rd', true, false, false),
    new Restaurant('NovaFood', '9026 Jones rd', true, true, false),
    new Restaurant('Sangli', '426 Summerhouse Ave', false, false, false),
    new Restaurant('Lavoya Diner', '83 Beacfon Lane', true, false, true),
    new Restaurant('Andisova', '474 Mayfield Ave', true, false, false),
];

/* As part of the method that creates the HTML element for the restaurant, include 
conditional statements that check if the restaurant has gluten free options, 
vegan options, and is local. Add the appropriate iconography to each restaurant 
to visually show the offerings of that restaurant. */

function restaurantLoop() {
    const outputEle = document.getElementById('restaurant-table');
    outputEle.innerHTML = `<thead>
        <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Gluten-Free</th>
            <th>Vegan</th>
            <th>Local</th>
        </tr>
    </thead>`
    for (let i = 0; i < allRestaurants.length; i++) {
        outputEle.innerHTML += (allRestaurants[i].createTableRow());
    }

    const select = document.getElementById('filter-by');
    select.addEventListener('change', function (e) {
        console.log(e.target.value)
        if (e.target.value == 'gluten-filter') {

        } else if (e.target.value == 'vegan-filter') {

        } else if (e.target.value == 'local-filter') {

        }
    });


};

restaurantLoop();


