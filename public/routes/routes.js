var PetRoutes = Backbone.Router.extend({
	routes: {
		"": "allPets",
		"pets/:anId": "showPet",
		"pets": "allPets"
	},
	showPet: function(anId){
		var ul = document.getElementById("allPets");
		ul.innerHTML = ""
		var thisPet = new Pet({id: anId})
		thisPet.fetch({
			success: function(){
				new ShowPetView({model: thisPet}).render();
			}
		})
	}
});

var petRoutes = new PetRoutes();

Backbone.history.start();