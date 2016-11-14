// #docregion bootstrap
import { platformBrowser } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).then(platformRef => {
  let upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['phonecatApp']);
});
// #enddocregion bootstrap
