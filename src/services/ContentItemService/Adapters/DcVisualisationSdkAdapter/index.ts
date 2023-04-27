import { DataAdapter } from '../../types';
import { VisualizationSDK, init } from 'dc-visualization-sdk';

class DcVisualisationSdkAdapter implements DataAdapter {
  sdk: VisualizationSDK;

  constructor() {
    this.sdk = undefined;
  }

  async init() {
    try {
      const parent = window.parent;

      // check if application is displayed in an iframe
      // as only then dc-visualisation-sdk can work
      if (!parent || window === parent) return false;

      const sdk = await init();

      if (!sdk) {
        return false;
      }

      this.sdk = sdk;
      return true;
    } catch (error) {}
  }

  fetchItem() {
    if (!this.sdk) {
      throw new Error('Service not initialized');
    }

    return this.sdk.form.get();
  }
}

export default new DcVisualisationSdkAdapter();
