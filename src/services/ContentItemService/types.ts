import { CDv2Response } from 'dc-visualization-sdk';

export interface FetchProps {
  vse?: string | string[];
  id: string | string[];
  locale?: string | string[];
  hub?: string | string[];
  live?: string | string[];
}

export interface FetchPropsNoArrays {
  vse?: string;
  id: string;
  locale?: string;
  hub?: string;
  live?: string;
}

export interface DataAdapter {
  init: () => Promise<boolean>;
  fetchItem: (
    fetchProps: FetchPropsNoArrays
  ) => Promise<CDv2Response<Record<string, any>>>;
}
