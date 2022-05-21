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
				fetch(`${store.apiURL}/people`)
				.then(response => response.json())
				.then(data => {
					setStore({ people: data.results});
				})
				.then(() => console.log(getStore().people))
				.catch(function(error){
					console.log('error', error);
				});
			},
			fetchPlanets: () => {
				fetch(`${store.apiURL}/planets/3`)
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
			
		}
	};
};

export default getState;
