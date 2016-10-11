import <%= capModuleName %>Controller from './<%= moduleName %>.controller';

export const <%= moduleName %>Component = {
  template: require('./<%= moduleName %>.html'),
  controller: <%= capModuleName %>Controller,
  controllerAs: '<%= moduleName %>'
  //bindings: {}
};
