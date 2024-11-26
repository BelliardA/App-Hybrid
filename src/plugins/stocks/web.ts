import { WebPlugin } from '@capacitor/core';

import type { CreaPlugin } from './definitions';

export class CreaWeb extends WebPlugin implements CreaPlugin {

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
  async stock(options: { name: string }): Promise<{ name: string }> {
    console.log('STOCK', options);
    return options;
  }

  async showSwiftUIView(options : {name : string}): Promise<{ name: string }> {
    console.log('Simulating SwiftUI view presentation on the web');
    return { name: 'SwiftUI view simulation successful on web' };
  }
  
}
