//$(document).ready(function(){  <-- this is for when you link to your scripts in the head as opposed to the bottom of the body
var ShowPetView = Backbone.View.extend({
	el: "#contentArea",
	template: _.template($("#showPet").html()),
	render: function(){
		this.$el.html(this.template({pet: this.model.toJSON()}));
		return this;
	}
});
//}) <-- this closes up the function on line 1