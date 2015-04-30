var PetsCollection = Backbone.Collection.extend({
	model: Pet,
	url: '/pets'
})

var zoo = new PetsCollection();