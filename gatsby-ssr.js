/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

 // You can delete this file if you're not using it
const React = require("react");

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const measurementId = "G-F150JNQK2J";

  setHeadComponents([
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} key="ga4"></script>,
    <script
      key="ga4-init"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${measurementId}');
        `,
      }}
    />,
  ]);
};
