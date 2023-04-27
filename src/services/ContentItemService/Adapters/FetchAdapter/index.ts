import { CDv2Response } from 'dc-visualization-sdk';
import { DataAdapter, FetchPropsNoArrays } from '../../types';

class FetchAdapter implements DataAdapter {
  constructor() {}

  async init() {
    return true;
  }

  private generateUrl({ live, hub, vse, id }: FetchPropsNoArrays) {
    if (live) {
      return `https://${hub}.cdn.content.amplience.net/content/id/${id}?depth=all&&format=inlined`;
    } else {
      return `https://${vse}/content/id/${id}?depth=all&&format=inlined`;
    }
  }

  async fetchItem(fetchProps: FetchPropsNoArrays) {
    const url = this.generateUrl(fetchProps);

    try {
      const response = await fetch(url);
      const data = (await response.json()) as CDv2Response<Record<string, any>>;
      return data;
    } catch {
      return undefined;
    }
  }

  listenForChanges() {
    // not implemented
  }

  disposeListeners() {
    // nothing to dispose in this adapter
  }
}

export default new FetchAdapter();
