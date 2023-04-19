import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { init } from 'dc-visualization-sdk';

import { Banner, Carousel, Markdown } from '../components';

const componentLookup = {
  'https://get-started-dashboard.com/banner-carousel': Carousel,
  'https://get-started-dashboard.com/banner-schema': Banner,
  'https://get-started-dashboard.com/hello-world-schema': Markdown,
};

export const Page = () => {
  const {
    query: { vse, content, locale },
  } = useRouter();

  const [itemContent, setItemContent] = useState(null);

  const readSdk = async () => {
    const sdk = await init();
    const form = await sdk.form.get();
    const { content: respContent } = form;

    setItemContent(respContent);
  };

  useEffect(() => {
    readSdk();
  }, [vse, content, locale]);

  const Component = componentLookup[itemContent?._meta?.schema];

  return !Component ? null : <Component {...itemContent} />;
};

export default Page;
