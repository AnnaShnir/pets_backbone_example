var Pet = Backbone.Model.extend({
	urlRoot: '/pets',
	initialize: function(){
		console.log("A pet was born!");
		this.on("change", function(){
			console.log("Make that change");
		})
	}
});