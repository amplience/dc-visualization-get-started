# dc-visualization-get-started

To use this visualization app it first needs to be added to a content type inside DC.

## Url Params

### Capabilities

The capabilities of this app depend on the URL parameters supplied.

- `content` - The Content Item ID {{content.sys.id}}. Required for staging, live and diff tabs.
- `vse` - Your virtual staging environment {{vse.domain}}. Required for the staging tab.
- `locale` - The locale to use {{locales}}. This is not needed when using a realtime connection and exluding this will prevent unnecessary reloading.

### Example URL to use:

https://get-started.visualizations.content.amplience.net?content={{content.sys.id}}&vse={{vse.domain}}

## Running locally

Install the dependencies...

```bash
npm install
```

```bash
npm run dev
```

Navigate to [localhost:3000](http://localhost:3000). You should see your app running.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```
