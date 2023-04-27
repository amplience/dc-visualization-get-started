import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Banner, Carousel, Markdown } from '../components';
import ContentItemService from '../services/ContentItemService';

const componentLookup = {
  'https://get-started-dashboard.com/banner-carousel': Carousel,
  'https://get-started-dashboard.com/banner-schema': Banner,
  'https://get-started-dashboard.com/hello-world-schema': Markdown,
};

export const Page = () => {
  const {
    query: { vse, content, locale, hub, live },
  } = useRouter();

  const [itemContent, setItemContent] = useState(null);

  const getContentItem = async () => {
    try {
      if (!ContentItemService.initialized) {
        await ContentItemService.init();
      }

      const contentItem = await ContentItemService.fetchItem({
        id: content,
        hub,
        live,
        locale,
        vse,
      });
      setItemContent(contentItem.content);
    } catch (error) {}
  };

  useEffect(() => {
    getContentItem();
  }, [vse, content, locale]);

  const Component = componentLookup[itemContent?._meta?.schema];

  return !Component ? null : <Component {...itemContent} />;
};

export default Page;
