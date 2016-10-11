export default class <%= capModuleName %>Controller {
  /** @ngInject */
  constructor(<%= moduleName %>Service) {
    <%= moduleName %>Service.get<%= capModuleName %>().then(response => {
      this.<%= moduleName %>Items = response.data;
    });
  }
}