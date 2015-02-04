ProjectListView = Backbone.View.extend({
   
    el: 'div#content',


    initialize: function(options) {
       this.collection = options.collection;
       // NOTE: This would be called if server API involved
       //this.model.fetch({success: function(model){ this.render}});
       

    },


    events: {

    'click .glyphicon-remove' : 'hello'
    
    },

    hello: function(e) {
        e.preventDefault();
        var id = e.target.id;
       
        var model = this.collection.get(id);
        this.collection.remove(model);
        $('div#content').empty();
        this.render();
        

    },

    addRows: function() {

       this.collection.forEach(function(model) {    

          // add item view, each row
          var itemView  = new ProjectItemView({model: model});  
 
        },this);


    },


    render: function() {
        var compiled_template = _.template(this.html());
		var $el = $(this.el);
		$el.html(compiled_template());

     this.addRows();

		
    },

    // USING REQUIRE THIS WOULD CONTAINED IN AN HTML TEMPLATE
    html: function() {

       return '<table class="table"><th>Name</th><th>Resources</th><th>Manhours</th><th></th></tr>';	

    }

});




