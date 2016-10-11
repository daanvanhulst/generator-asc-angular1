'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your module name',
      store   : true,
      default : 'home'
    }]).then(function (answers) {
      this.name = answers.name;
    }.bind(this));
  },

  writing: {
    app: function() {
      var context = {
          moduleName: this.name,
          capModuleName: this.name.charAt(0).toUpperCase() + this.name.slice(1)
        };
        this.template('app/_name.module.js', context.moduleName + '/' + context.moduleName + '.module.js', context);
        this.template('app/_name.component.js', context.moduleName + '/' + context.moduleName + '.component.js', context);
        this.template('app/_name.component.spec.js', context.moduleName + '/' + context.moduleName + '.component.spec.js', context);
        this.template('app/_name.config.js', context.moduleName + '/' + context.moduleName + '.config.js', context);
        this.template('app/_name.controller.js', context.moduleName + '/' + context.moduleName + '.controller.js', context);
        this.template('app/_name.controller.spec.js', context.moduleName + '/' + context.moduleName + '.controller.spec.js', context);
        this.template('app/_name.service.js', context.moduleName + '/' + context.moduleName + '.service.js', context);
        this.template('app/_name.service.spec.js', context.moduleName + '/' + context.moduleName + '.service.spec.js', context);
        this.template('app/_name.html', context.moduleName + '/' + context.moduleName + '.html', context);
        this.template('app/_name.scss', context.moduleName + '/' + context.moduleName + '.scss', context);
        this.template('app/_name.json', context.moduleName + '/' + context.moduleName + '.json', context);      
              
    },
  },
  install: function () {
    //this.installDependencies();
  }
});
