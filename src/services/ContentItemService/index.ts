import { findAsync } from '../../utils/findAsync';
import DcVisualisationSdkAdapter from './Adapters/DcVisualisationSdkAdapter';
import FetchAdapter from './Adapters/FetchAdapter';
import { DataAdapter, FetchProps, FetchPropsNoArrays } from './types';

const adapters: DataAdapter[] = [DcVisualisationSdkAdapter, FetchAdapter];

class ContentItemService {
  dataAdapter: DataAdapter;
  initialized: boolean;

  constructor() {
    this.dataAdapter = undefined;
    this.initialized = false;
  }

  async init() {
    // load first adapter that is able to initialise
    this.dataAdapter = await findAsync(
      adapters,
      async (adapter) => await adapter.init()
    );

    if (!this.dataAdapter) {
      throw new Error('No data adapter initialized');
    }
  }

  async fetchItem(fetchProps: FetchProps) {
    const isAnyPropArray = Object.values(fetchProps).some((fetchProp) =>
      Array.isArray(fetchProp)
    );

    if (isAnyPropArray) {
      throw new Error('Array arguments not supported');
    }

    return await this.dataAdapter.fetchItem(fetchProps as FetchPropsNoArrays);
  }
}

export default new ContentItemService();
