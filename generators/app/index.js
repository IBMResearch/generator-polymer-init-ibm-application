/**
 * @license
 * Copyright (c) 2016 The IBM Research authors. All rights reserved.
 * This code may only be used under the MIT style license found at https://ibmresearch.github.io/LICENSE.txt
 * The complete set of authors may be found at https://ibmresearch.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://ibmresearch.github.io/CONTRIBUTORS.txt
 */

'use strict';

const yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  initializing: function() {
    // Yeoman replaces dashes with spaces. We want dashes.
    this.appname = this.appname.replace(/\s+/g, '-');
  },

  prompting: function() {
    let prompts = [
      {
        name: 'applicationId',
        type: 'input',
        message: 'ID of the application',
        default: this.appname
      },
      {
        name: 'applicationName',
        type: 'input',
        message: 'Name of the application',
        default: this.appname
      },
      {
        name: 'applicationDescription',
        type: 'input',
        message: 'Brief description of the application'
      }
    ];

    return this.prompt(prompts).then(function(props) {
      this.props = props;
    }.bind(this));
  },

  writing: function() {
    this.fs.copy(
      this.templatePath('images/'),
      this.destinationPath('images/')
    );

    this.fs.copyTpl(
      this.templatePath('src/'),
      this.destinationPath('src/'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('test/'),
      this.destinationPath('test/'),
      this.props
    );

    this.fs.copy(
      this.templatePath('test/.eslintrc.json'),
      this.destinationPath('test/.eslintrc.json')
    );

    this.fs.copy(
      this.templatePath('.eslintrc.json'),
      this.destinationPath('.eslintrc.json')
    );

    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copyTpl(
      this.templatePath() + '/!(_)*',
      this.destinationPath(),
      this.props
    );
  },

  install: function() {
    this.installDependencies();
  }
});
