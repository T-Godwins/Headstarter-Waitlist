import React from 'react';
import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <>
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-HR3B6M6370`}
      />
       <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HR3B6M6370', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />      
    </>
  );
};

export default GoogleAnalytics;