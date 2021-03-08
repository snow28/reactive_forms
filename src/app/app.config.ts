import { InjectionToken } from '@angular/core';

export const dataToProvide = [ 1 , 2 , 3 ];


export const AppConfigToken = new InjectionToken<any>('dataToProvide');


