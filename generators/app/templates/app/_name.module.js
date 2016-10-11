import angular from 'angular';

import { <%= moduleName %>Component } from './<%= moduleName %>.component';
import <%= capModuleName %>Service from './<%= moduleName %>.service';
import <%= moduleName %>Config from './<%= moduleName %>.config';

export const <%= moduleName %>Module = 'fekor.<%= moduleName %>';

angular
  .module(<%= moduleName %>Module, [])
  .config(<%= moduleName %>Config)
  .component('<%= moduleName %>', <%= moduleName %>Component)
  .service('<%= moduleName %>Service', <%= capModuleName %>Service);
