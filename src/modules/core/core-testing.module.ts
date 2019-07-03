import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { ApiServiceStub } from './services/api.service.stub';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [{
    provide: ApiService,
    useClass: ApiServiceStub
  }]
})
export class CoreTestingModule {}
