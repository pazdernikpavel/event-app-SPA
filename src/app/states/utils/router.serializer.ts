import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

import { IRouterStateUrl } from '../../models/ngrx/state.model';

export class RouterSerializer implements RouterStateSerializer {
  public serialize(routerState: RouterStateSnapshot): IRouterStateUrl {
    const { url } = routerState;

    let state: ActivatedRouteSnapshot = routerState.root;

    while (state.firstChild) state = state.firstChild;

    const { params } = state;
    const { queryParams } = state;
    const { component } = state;

    return {
      url,
      component,
      queryParams,
      params
    };
  }
}
