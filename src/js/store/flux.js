const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiURL: "https://swapi.dev/api/",
			people:[],
			vehicles:[],
			planets:[],
			favorites:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchPeople: () => {
				const store = getStore();
				fetch(`${store.apiURL}/people`)
				.then(response => response.json())
				.then(data => {
					setStore({ people: data.results});
				})
				.then(() => console.log(store.people))
				.catch(function(error){
					console.log('error', error);
				});
			},
			fetchPlanets: () => {
				const store = getStore();
				fetch(`${store.apiURL}/planets/`)
				.then(response => response.json())
				.then(data => {
					setStore({planets: data.results});
				})
				.then(() => console.log(getStore.planets))
				.catch(function(error){
					console.log('error', error);
				});
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			fetchVehicles: () => {
				const store = getStore();
				fetch(`${store.apiURL}/vehicles`)
				.then(response => response.json())
				.then(data => {
					setStore({vehicles: data.results});
				})
				.then(() => console.log(getStore.vehicles))
				.catch(function(error){
					console.log('error', error);
				});
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			addToFavorite: itemName => {
				const oldFavorites = getStore().favorites;
				const foundFavorite = oldFavorites.find(item => item === itemName);
				if (foundFavorite) {
					const newArray = oldFavorites.filter(item => item !== foundFavorite); //remove item
					setStore({ favorites: newArray });
				} else {
					setStore({ favorites: [...oldFavorites, itemName] });
				}
			},

			
		}
	};
};

export default getState;
