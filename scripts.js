const restaurants = [
    {name: "Mystique Feast", price: 150, img: "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"},
    {name: "Golden Harvest", price: 200, img: "https://assets.gqindia.com/photos/62a9d4653e8cdc9b632eb2ad/master/pass/10%20restaurants%20in%20Mumbai%20that%20offer%20the%20best%20sunset%20views.jpg"},
    {name: "Celestial Delights", price: 100, img: "https://assets.architecturaldigest.in/photos/63733ec2a2dd6ea6560eb6da/16:9/w_2560%2Cc_limit/Ditas%2520Interior%2520Image%2520-%25201%2520(8).png"},
    {name: "Whispering Pines", price: 250, img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4d/bf/e4/social-kitchen-is-our.jpg?w=600&h=-1&s=1"}
];

document.addEventListener("DOMContentLoaded", () => {
    displayRestaurants(restaurants);
});

function displayRestaurants(restaurants) {
    const restaurantList = document.getElementById('restaurants');
    restaurantList.innerHTML = '';
    restaurants.forEach(restaurant => {
        const restaurantItem = document.createElement('div');
        restaurantItem.classList.add('restaurant');
        restaurantItem.innerHTML = `
            <img src="${restaurant.img}" alt="${restaurant.name}">
            <h2>${restaurant.name}</h2>
            <p>Rental Price: $${restaurant.price}</p>
        `;
        restaurantList.appendChild(restaurantItem);
    });
}
function filterRestaurants() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const maxPrice = document.getElementById('max-price').value;
    const filteredRestaurants = restaurants.filter(restaurant => {
        return restaurant.name.toLowerCase().includes(searchQuery) && 
               (!maxPrice || restaurant.price <= maxPrice);
    });
    displayRestaurants(filteredRestaurants);
}