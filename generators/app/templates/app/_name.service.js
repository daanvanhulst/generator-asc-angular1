export default class <%= capModuleName %>Service {
  /** @ngInject */
  constructor($http) {
      this.$http = $http;
  }

  get<%= capModuleName %>() {
    return this.$http.get('app/<%= capModuleName %>/<%= capModuleName %>.json');
  }
}