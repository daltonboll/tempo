(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/activities/createCustomActivity"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<!-- Temporary styling -->\n<!-- TODO: move this away -->\n\n<style>\n\t#custom-activities-form {\n\t\twidth: 350px;\n\t\theight: 350px;\n\t\tborder: 1px solid #dedede;\n\t\tborder-radius: 3px;\n\t\tbackground-color: white;\n\t\tbox-shadow: .5px .5px .5px #888888;\n\t\tmargin: 0 auto;\n\t\ttext-align: center;\n\t\tpadding-top: 30px;\n\t\tpadding-bottom: 20px;\n\t}\n\n\t#warning {\n\t  color: red;\n\t  text-align: center;\n\t }\n\n\tinput {\n\t\twidth: 300px;\n\t\theight: 30px;\n\t\tmargin-bottom: 15px;\n\t\tpadding-left: 10px;\n\t}\n\n\tlabel {\n\t\tmargin-bottom: 5px;\n\t}\n\n\t.submitCustomActivity {\n\t\twidth: 315px;\n\t\theight: 35px;\n\t    background-color: #66CC99;\n\t    border: 1px solid #2ABB9B;\n\t\tborder-radius: 3px;\n\t\tmargin-top: 10px;\n\t}\n\n\t.submitCustomActivity:hover {\n\t\topacity: .8;\n\t\tcursor: pointer;\n\t}\n</style>\n\n<form id="custom-activities-form" name="custom-activity"> \n\t<h3> Create New Custom Activity </h3>\n\t<label for="title"> Title: </label> <br>\n\t<input type="text" name"title" id="title" value=""> <br>\n\t<label for="content"> Content: </label> <br>\n\t<input type="text" name"content" id="content" value=""> <br>\n\t<label for="completion_time"> Completion time: </label> <br>\n\t<input type="text" name"completion_time" id="completion_time" value=""> <br>\n\t<p id="warning"> </p> \n\t<button type="button" class="submitCustomActivity"> Submit </button> <br>\n</form>\n');}return __p.join('');};
}).call(this);
