import {ModuleWithProviders, NgModule} from "@angular/core";
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import {TestInterceptor} from "./test.interceptor";


@NgModule()
export class TestModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TestModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TestInterceptor,
          multi: true
        }
      ]
    };
  }

}