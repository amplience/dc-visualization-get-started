import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Banner, Carousel, Markdown } from "../components";
import contentItemService from "../services/ContentItemService";
import { getURLSearchParam } from "../utils/getURLSearchParam";

const CONTENT_SUFFIX = getURLSearchParam("contentSuffix") ?? "";

const componentLookup = {
  [`https://get-started-dashboard.com/banner-carousel${CONTENT_SUFFIX}`]:
    Carousel,
  [`https://schema-examples.com/banner-carousel${CONTENT_SUFFIX}`]: Carousel,
  [`https://amplience-examples.com/carousel${CONTENT_SUFFIX}`]: Carousel,
  [`https://get-started-dashboard.com/banner-schema${CONTENT_SUFFIX}`]: Banner,
  [`https://schema-examples.com/tutorial-banner${CONTENT_SUFFIX}`]: Banner,
  [`https://amplience-examples.com/banner${CONTENT_SUFFIX}`]: Banner,
  [`https://get-started-dashboard.com/hello-world-schema${CONTENT_SUFFIX}`]:
    Markdown,
  [`https://amplience-examples.com/hello-world${CONTENT_SUFFIX}`]: Markdown,
};

export const Page = () => {
  const {
    query: { vse, content, locale, hub, live },
  } = useRouter();

  const [itemContent, setItemContent] = useState(null);

  const getContentItem = async () => {
    try {
      if (!contentItemService.initialized) {
        await contentItemService.init();
      }

      const contentItem = await contentItemService.fetchItem({
        id: content,
        hub,
        live,
        locale,
        vse,
      });
      setItemContent(contentItem.content);
      contentItemService.listenForChanges(setItemContent);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (content === undefined) return;

    getContentItem();

    return () => {
      contentItemService.disposeListeners();
    };
  }, [vse, content, locale, hub, live]);

  const Component = componentLookup[itemContent?._meta?.schema];

  return !Component ? null : <Component {...itemContent} />;
};

export default Page;
