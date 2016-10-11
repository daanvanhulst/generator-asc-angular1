export default <%= moduleName %>Config;

/** @ngInject */
function <%= moduleName %>Config($stateProvider) {
  $stateProvider
  .state('<%= moduleName %>', {
    url: '/<%= moduleName %>',
    component: '<%= moduleName %>'
  });
}