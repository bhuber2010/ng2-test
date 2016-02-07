"use strict";
var testing_1 = require('angular2/testing');
var main_component_ts_1 = require('./main.component.ts');
describe('Component: MainComponent', function () {
    testing_1.beforeEachProviders(function () { return []; });
    testing_1.it('should be defined', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
        return tcb.createAsync(main_component_ts_1.MainComponent)
            .then(function (fixture) {
            fixture.detectChanges();
            var element = fixture.debugElement.nativeElement;
            var cmpInstance = fixture.debugElement.componentInstance;
            expect(cmpInstance).toBeDefined();
            expect(element).toBeDefined();
        });
    }));
});
//# sourceMappingURL=main.component.spec.js.map