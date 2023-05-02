import { isInIframe } from '../../../../utils/isInIframe';
import { DataAdapter, StateUpdater } from '../../types';
import {
  ModelChangeDispose,
  VisualizationSDK,
  init,
} from 'dc-visualization-sdk';

class DcVisualisationSdkAdapter implements DataAdapter {
  sdk: VisualizationSDK;
  disposer: ModelChangeDispose | undefined;

  constructor() {
    this.sdk = undefined;
    this.disposer = undefined;
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

  listenForChanges(stateUpdater: StateUpdater) {
    if (!this.sdk) {
      throw new Error('Service not initialized');
    }

    this.disposer = this.sdk.form.changed((data) => stateUpdater(data.content));
  }

  disposeListeners() {
    if (this.disposer) {
      this.disposer();
    }
  }
}

export default new DcVisualisationSdkAdapter();
