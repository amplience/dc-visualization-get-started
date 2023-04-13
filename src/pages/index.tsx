import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import * as appComponents from '../components';

const componentLookup = {
  'https://get-started-dashboard.com/banner-carousel': 'Carousel',
  'https://get-started-dashboard.com/banner-schema': 'Banner',
  'https://get-started-dashboard.com/hello-world-schema': 'Markdown',
};

export const Page = () => {
  const {
    query: { vse, content, locale },
  } = useRouter();

  const [hubData, setHubData] = useState(null);
  const [component, setComponent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const urlParamsArr = ['depth=all', 'format=inlined'];

      if (locale) {
        urlParamsArr.push('locale=${locale}');
      }

      const url = `https://${vse}/content/id/${content}?${urlParamsArr.join(
        '&'
      )}`;
      const {
        data: { content: respContent },
      } = await axios.get(url);

      setHubData(respContent);

      const {
        _meta: { schema },
      } = respContent;

      const component = Object.keys(componentLookup).find((item) =>
        // inverse comparison for development purposes
        schema.includes(item)
      );

      setComponent(componentLookup[component]);
    };

    if (vse && content) {
      fetchData();
    }
  }, [vse, content, locale]);

  const Component = appComponents[component];

  return !Component ? null : (
    <>
      <Component {...hubData} />
    </>
  );
};

export default Page;
