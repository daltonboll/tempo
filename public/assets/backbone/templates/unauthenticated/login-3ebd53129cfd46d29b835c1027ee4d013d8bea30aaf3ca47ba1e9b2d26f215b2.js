(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/unauthenticated/login"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<form id="login-form" class="form-horizontal">\n  <fieldset>\n    <div id="email_group" class="control-group">\n      <label class="control-label" >username or email</label>\n      <div class="controls">\n        <input id="username-or-email" name="username-or-email" required="required" />\n      </div>\n    </div>\n    <div id="password_group" class="control-group">\n      <label class="control-label" for="password">Password</label>\n      <div class="controls">\n        <input id="password" name="password" type="password" required="required" />\n      </div>\n    </div>\n    <div class="form-actions">\n    </div>\n  </fieldset>\n</form>\n      <button  value="login" class="btn btn-primary login-submit"> Login </button>\n\n      <a class="create"> create an account </a>\n');}return __p.join('');};
}).call(this);
