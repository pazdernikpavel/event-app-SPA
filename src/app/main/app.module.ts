import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';
import { ClientModule } from '../client/client.module';
import { ContainerComponent } from '../container/container.component';
import { LandingModule } from '../pages/landing/landing.module';
import { appEffects } from '../states/app.effects';
import { appReducers } from '../states/app.reducers';
import { RouterSerializer } from '../states/utils/router.serializer';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducers, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false
      }
    }),
    EffectsModule.forRoot(appEffects),
    StoreRouterConnectingModule.forRoot({
      serializer: RouterSerializer
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    LandingModule,
    ClientModule
  ],
  providers: [],
  bootstrap: [ContainerComponent]
})
export class AppModule {}
