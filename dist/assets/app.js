eval("//# sourceURL=vendor/ember-cli/loader.js");

;eval("define(\"app/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"app/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix,\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, config.modulePrefix);\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=app/app.js");

;eval("define(\"app/initializers/export-application-global\", \n  [\"ember\",\"app/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    function initialize(container, application) {\n      var classifiedName = Ember.String.classify(config.modulePrefix);\n\n      if (config.exportApplicationGlobal) {\n        window[classifiedName] = application;\n      }\n    };\n    __exports__.initialize = initialize;\n    __exports__[\"default\"] = {\n      name: \'export-application-global\',\n\n      initialize: initialize\n    };\n  });//# sourceURL=app/initializers/export-application-global.js");

;eval("define(\"app/models/friend\", \n  [\"ember-data\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var DS = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = DS.Model.extend({\n      firstName: DS.attr(\'string\'),\n      lastName: DS.attr(\'string\'),\n      email: DS.attr(\'string\'),\n      twitter: DS.attr(\'string\'),\n      totalArticles: DS.attr(\'number\')\n    });\n  });//# sourceURL=app/models/friend.js");

;eval("define(\"app/router\", \n  [\"ember\",\"app/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: config.locationType\n    });\n\n    Router.map(function() {\n      this.resource(\'friends\', function() { });\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=app/router.js");

;eval("define(\"app/routes/friends\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n    });\n  });//# sourceURL=app/routes/friends.js");

;eval("define(\"app/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      data.buffer.push(\"<h2 id=\'title\'>Welcome to Ember.js</h2>\\n\\n\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=app/templates/application.js");

;eval("define(\"app/templates/friends\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=app/templates/friends.js");

;eval("define(\"app/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(true, \'app.js should pass jshint.\'); \n    });\n  });//# sourceURL=app/tests/app.jshint.js");

;eval("define(\"app/tests/app/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - app/tests/helpers\');\n    test(\'app/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'app/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=app/tests/app/tests/helpers/resolver.jshint.js");

;eval("define(\"app/tests/app/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - app/tests/helpers\');\n    test(\'app/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'app/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=app/tests/app/tests/helpers/start-app.jshint.js");

;eval("define(\"app/tests/app/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - app/tests\');\n    test(\'app/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'app/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=app/tests/app/tests/test-helper.jshint.js");

;eval("define(\"app/tests/app/tests/unit/models/friend-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - app/tests/unit/models\');\n    test(\'app/tests/unit/models/friend-test.js should pass jshint\', function() { \n      ok(true, \'app/tests/unit/models/friend-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=app/tests/app/tests/unit/models/friend-test.jshint.js");

;eval("define(\"app/tests/app/tests/unit/routes/friends-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - app/tests/unit/routes\');\n    test(\'app/tests/unit/routes/friends-test.js should pass jshint\', function() { \n      ok(true, \'app/tests/unit/routes/friends-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=app/tests/app/tests/unit/routes/friends-test.jshint.js");

;eval("define(\"app/tests/helpers/resolver\", \n  [\"ember/resolver\",\"app/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=app/tests/helpers/resolver.js");

;eval("define(\"app/tests/helpers/start-app\", \n  [\"ember\",\"app/app\",\"app/router\",\"app/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Application = __dependency2__[\"default\"];\n    var Router = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({}, config.APP);\n      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n\n      Ember.run(function() {\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      return App;\n    }\n  });//# sourceURL=app/tests/helpers/start-app.js");

;eval("define(\"app/tests/models/friend.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - models\');\n    test(\'models/friend.js should pass jshint\', function() { \n      ok(true, \'models/friend.js should pass jshint.\'); \n    });\n  });//# sourceURL=app/tests/models/friend.jshint.js");

;eval("define(\"app/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(true, \'router.js should pass jshint.\'); \n    });\n  });//# sourceURL=app/tests/router.jshint.js");

;eval("define(\"app/tests/routes/friends.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes\');\n    test(\'routes/friends.js should pass jshint\', function() { \n      ok(true, \'routes/friends.js should pass jshint.\'); \n    });\n  });//# sourceURL=app/tests/routes/friends.jshint.js");

;eval("define(\"app/tests/test-helper\", \n  [\"app/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n\n    QUnit.config.urlConfig.push({ id: \'nocontainer\', label: \'Hide container\'});\n    var containerVisibility = QUnit.urlParams.nocontainer ? \'hidden\' : \'visible\';\n    document.getElementById(\'ember-testing-container\').style.visibility = containerVisibility;\n  });//# sourceURL=app/tests/test-helper.js");

;eval("define(\"app/tests/unit/models/friend-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleForModel = __dependency1__.moduleForModel;\n    var test = __dependency1__.test;\n\n    moduleForModel(\'friend\', \'Friend\', {\n      // Specify the other units that are required for this test.\n      needs: []\n    });\n\n    test(\'it exists\', function() {\n      var model = this.subject();\n      // var store = this.store();\n      ok(!!model);\n    });\n  });//# sourceURL=app/tests/unit/models/friend-test.js");

;eval("define(\"app/tests/unit/routes/friends-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'route:friends\', \'FriendsRoute\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    test(\'it exists\', function() {\n      var route = this.subject();\n      ok(route);\n    });\n  });//# sourceURL=app/tests/unit/routes/friends-test.js");

/* jshint ignore:start */

define('app/config/environment', ['ember'], function(Ember) {
  var prefix = 'app';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */



});

if (runningTests) {
  require("app/tests/test-helper");
} else {
  require("app/app")["default"].create({"LOG_RESOLVER":true,"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}



/* jshint ignore:end */
