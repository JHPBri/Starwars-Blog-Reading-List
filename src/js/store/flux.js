const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiURL: "https://www.swapi.tech/api/",
			people:[],
			vehicles:[],
			planets:[],
			favorites:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchPeople: () => {
				const store = getStore();
				fetch(`${store.apiURL}/people/1`)
				.then(response => response.json())
				.then(data => {
					setStore({ people: data.results});
				})
				.then(() => console.log(store.people))
				.catch(function(error){
					console.log('Looks like there was a problem: \n', error);
				});
			},
			fetchPlanets: () => {
				fetch(`${store.apiURL}/planets/3`)
				.then(response => response.json())
				.then(data => {
					setStore({planets: data.results});
				})
				.then(() => console.log(store.planets))
				.catch(function(error){
					console.log('Looks like there was a problem: \n', error);
				});
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			fetchVehicles: () => {
				fetch(`${store.apiURL}/vehicles`)
				.then(response => response.json())
				.then(data => {
					setStore({vehicles: data.results});
				})
				.then(() => console.log(store.vehicles))
				.catch(function(error){
					console.log('Looks like there was a problem: \n', error);
				});
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			
		}
	};
};

export default getState;
