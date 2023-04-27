import { isInIframe } from '../../../../utils/isInIframe';
import { DataAdapter } from '../../types';
import { VisualizationSDK, init } from 'dc-visualization-sdk';

class DcVisualisationSdkAdapter implements DataAdapter {
  sdk: VisualizationSDK;

  constructor() {
    this.sdk = undefined;
  }

  async init() {
    try {
      if (!isInIframe()) return false;

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
