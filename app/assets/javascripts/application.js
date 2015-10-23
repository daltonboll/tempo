// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require tempo
//= require handlebars.runtime
//= require handlebars
//= require_tree ./backbone/templates
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_tree ./backbone/routers
//= require_tree .

//Test template

// TODO: Move to tempo.js 
$(document).ready(function(){
	window.App = {
	  Models: {},
	  Collections: {},
	  Views: {},
	  Routers: {},
	  initialize: function(data){
		console.log('Initilizing the app');
		//Start app router and history
		new App.Router;
		Backbone.history.start();	
	  }
	};

	//App router  =================================
	App.Router = Backbone.Router.extend({
		routes: {
			'': 'index',
			'home': 'index',
			"interests": "interests",
			"activities": "activities",
			"show": "show"
		},
		index: function(){
			console.log("Index router is called");
			App.Views['homeView'] = new HomeView();
		},
		activities: function(){
			console.log("The interests router was called ");
			//Constructing View 
			App.Views['activityView'] = new ActivityView()		
		},		
		interests: function(){
			console.log("The interests router was called ");
			//Constructing View 
			App.Views['interestView'] = new InterestView()			
		},
		show: function(){
			//This route doesn't do anything yet
			console.log("The show router was called ");
			document.getElementById('add').style.color = 'green';
			var newNode = document.createElement("p");
			newNode.appendChild(document.createTextNode("This hasn't been implemented yet"));
			var refNode = document.getElementById("add");
			refNode.parentNode.insertBefore(newNode, refNode.nextSibling);			
		}		
	});

	//Models =================================
	var Activity = Backbone.Model.extend({});
	var Interest = Backbone.Model.extend({});

	//Collections  =================================
	
	//Activities Collection
	var Activities = Backbone.Collection.extend({
		model: Activity,
		url: "/api/activities",
		parse: function(data){
			//TODO: change json key
			return data.data
		}
	});

	//Interests Collection
	var Interests = Backbone.Collection.extend({
		model: Interest,
		jsonData: null,		
		//TODO: Api endpoint to retrieve JSON data
		url: "/api/interests",
		parse: function(data){
			return data.interests
		}
	});	

	//Views  =================================
	var ActivityView = Backbone.View.extend({
		el: ".testDiv",
		tagName : 'li',
		options: null,
		initialize: function(options){
			this.options = options;
			this.render();

		},
		render : function (options){
			// Set scope, construct new activity collection, call fetch, render data on callback function
			var that = this; // To fix callback scoping error
		    var renderData = function(data){	    	
				//TODO: Create and import handlebars for templating			
				var html = "<h4 style='color: #9b59b6;'> Activity List </h4> <br>"
							+ "<table> <thead> <tr> <th>Title</th> <th>Content</th> <th>Completion Time</th> <th>Content type</th> <th>Id</th> "
							+ "<th colspan='3'></th> </tr> </thead>" 
							+ " <tbody> ";

				//Iterate throught he collections of Activities and create a template
				activities.each(function(model){
					html += "<tr>" 
							+ "<td> " +  model.get('title') + " </td>"
							+ "<td> " +  model.get('content') + " </td>"
							+ "<td> " +  model.get('completion_time') + " </td>"
							+ "<td> " +  model.get('content_type') + " </td>"
							+ "<td> " +  model.get('id') + " </td>"
						+ "</tr>";	
				});
				html += " </tbody> </table> </br> ";
				//Adding activity link
				html += " <a href='/activities#show' id='add'> Add activity </a>";
				$(that.el).html(html);	
		    };

			var activities = new Activities();	
			activities.fetch({
				success: function(data){
					renderData(data);
				}
			});
		}
	});


	// Creating View for Interests
	var InterestView = Backbone.View.extend({
		el: ".testDiv",
		tagName : 'li',
		options: null,
		initialize: function(options){
			this.options = options;
			this.render();
		},
		render : function (options){
			// Set scope, construct new activity collection, call fetch, render data on callback function
			var that = this; // To fix callback scoping error
		    var renderData = function(data){	    	
		
				//TODO: Create and import handlebars for templating			
				var html = "<h4 style='color: #1abc9c;'> Interest List </h4> <br>"
							+ "<table> <thead> <tr> <th>Name</th> <th>Created at</th> <th>Updated At</th> <th>User Id</th> <th>Content</th> "
							+ "<th colspan='3'></th> </tr> </thead>" 
							+ " <tbody> ";
				//Iterate throught he collections of Activities and create a template
				interests.each(function(model){
					html += "<tr>" 
							+ "<td> " +  model.get('name') + " </td>"
							+ "<td> " +  model.get('created_at') + " </td>"
							+ "<td> " +  model.get('updated_at') + " </td>"
							+ "<td> " +  model.get('user_id') + " </td>"
						+ "</tr>";	
				});
				html += " </tbody> </table> </br> ";
				//Adding activity link
				html += " <a href='/activities#show' id='add'> Add interest </a>";
				$(that.el).html(html);	
		    };

			var interests = new Interests();	
			interests.fetch({
				success: function(data){
					console.log(data + "interests data");
					renderData(data);
				}
			});
		}

		// render : function (options){




		// 	//Initialize ArtistsArray
		// 	var interestArray = []
		// 	for (var i in dummyInterests){
		// 		interestArray.push(new Interest(dummyInterests[i]));
		// 	}
			
		// 	//Initialize Collection of Artst
		// 	var interests = new Interests(interestArray);			
			
		// 	//TODO: Create and import handlebars for templating			
		// 	var html = "<h4 style='color: #1abc9c;'> Interest List </h4> <br>"
		// 				+ "<table> <thead> <tr> <th>Title</th> <th>Content</th> <th>Completion Time</th> <th>Content type</th> <th>Content</th> "
		// 				+ "<th colspan='3'></th> </tr> </thead>" 
		// 				+ " <tbody> ";
		// 	//Iterate throught he collections of Activities and create a template
		// 	interests.each(function(model){
		// 		html += "<tr>" 
		// 				+ "<td> " +  model.get('title') + " </td>"
		// 				+ "<td> " +  model.get('content') + " </td>"
		// 				+ "<td> " +  model.get('completion_time') + " </td>"
		// 				+ "<td> " +  model.get('content_type') + " </td>"
		// 			+ "</tr>";	
		// 	});

		// 	html += " </tbody> </table> </br> ";
		// 	//Adding activity link
		// 	html += " <a href='/activities#show' id='add'> Add interest </a>";
		// 	this.$el.html(html);	
		// }
	});

	// Creating View for Home
	var HomeView = Backbone.View.extend({
		el: ".testDiv",
		tagName : 'li',
		options: null,
		initialize: function(options){
			this.options = options;
			this.render();
		},
		render : function (options){

			html = "<h3 style='color: #e74c3c;'> Welcome Home Owen </h3>";
			//Go button
			html += "<a href='activities#activities'> GO </a> <br>";
			html += "<a href='activities#interests'> See your interests </a> ";
			this.$el.html(html);	
		}
	});

	//Initialize Activity view
	App.initialize();
});



