export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - hello",
        totalResults: "4900000000",
        searchTerms: "hello",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "a5f7b4190525e4395",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - hello",
        totalResults: "4900000000",
        searchTerms: "hello",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "a5f7b4190525e4395",
      },
    ],
  },
  context: {
    title: "DummyData",
  },
  searchInformation: {
    searchTime: 0.564993,
    formattedSearchTime: "0.56",
    totalResults: "4900000000",
    formattedTotalResults: "4,900,000,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "Adele - Hello - YouTube",
      htmlTitle: "Adele - <b>Hello</b> - YouTube",
      link: "https://www.youtube.com/watch?v=YQHsXMglC9A",
      displayLink: "www.youtube.com",
      snippet:
        'Oct 22, 2015 ... Listen to "Easy On Me" here: http://Adele.lnk.to/EOMPre-order Adele\'s new album "30" before its release on November 19: https://www.adele.',
      htmlSnippet:
        "Oct 22, 2015 <b>...</b> Listen to &quot;Easy On Me&quot; here: http://Adele.lnk.to/EOMPre-order Adele&#39;s new album &quot;30&quot; before its release on November 19: https://www.adele.",
      formattedUrl: "https://www.youtube.com/watch?v=YQHsXMglC9A",
      htmlFormattedUrl: "https://www.youtube.com/watch?v=YQHsXMglC9A",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0QFbzW1X0JqqLN9Wp0KsTscWBAjUFTffvOYWy2LjnETK3WnduD2FZAg",
            width: "300",
            height: "168",
          },
        ],
        imageobject: [
          {
            width: "1280",
            url: "https://i.ytimg.com/vi/YQHsXMglC9A/maxresdefault.jpg",
            height: "720",
          },
        ],
        person: [
          {
            name: "AdeleVEVO",
            url: "http://www.youtube.com/user/AdeleVEVO",
          },
        ],
        metatags: [
          {
            "og:image": "https://i.ytimg.com/vi/YQHsXMglC9A/maxresdefault.jpg",
            "twitter:app:url:iphone":
              "vnd.youtube://www.youtube.com/watch?v=YQHsXMglC9A&feature=applinks",
            "twitter:app:id:googleplay": "com.google.android.youtube",
            "theme-color": "rgba(255, 255, 255, 0.98)",
            "og:image:width": "1280",
            "twitter:card": "player",
            "og:site_name": "YouTube",
            "twitter:url": "https://www.youtube.com/watch?v=YQHsXMglC9A",
            "twitter:app:url:ipad":
              "vnd.youtube://www.youtube.com/watch?v=YQHsXMglC9A&feature=applinks",
            "al:android:package": "com.google.android.youtube",
            "twitter:app:name:googleplay": "YouTube",
            title: "Adele - Hello",
            "al:ios:url":
              "vnd.youtube://www.youtube.com/watch?v=YQHsXMglC9A&feature=applinks",
            "twitter:app:id:iphone": "544007664",
            "og:description":
              'Listen to "Easy On Me" here: http://Adele.lnk.to/EOMPre-order Adele\'s new album "30" before its release on November 19:  https://www.adele.comShop the "Adele...',
            "al:ios:app_store_id": "544007664",
            "twitter:image":
              "https://i.ytimg.com/vi/YQHsXMglC9A/maxresdefault.jpg",
            "twitter:player": "https://www.youtube.com/embed/YQHsXMglC9A",
            "twitter:player:height": "720",
            "twitter:site": "@youtube",
            "og:video:type": "text/html",
            "og:video:height": "720",
            "og:video:url": "https://www.youtube.com/embed/YQHsXMglC9A",
            "og:type": "video.other",
            "twitter:title": "Adele - Hello",
            "al:ios:app_name": "YouTube",
            "og:title": "Adele - Hello",
            "og:image:height": "720",
            "twitter:app:id:ipad": "544007664",
            "al:web:url":
              "http://www.youtube.com/watch?v=YQHsXMglC9A&feature=applinks",
            "og:video:secure_url": "https://www.youtube.com/embed/YQHsXMglC9A",
            "og:video:tag": "Adele",
            "og:video:width": "1280",
            "al:android:url":
              "vnd.youtube://www.youtube.com/watch?v=YQHsXMglC9A&feature=applinks",
            "fb:app_id": "87741124305",
            "twitter:app:url:googleplay":
              "https://www.youtube.com/watch?v=YQHsXMglC9A",
            "twitter:app:name:ipad": "YouTube",
            "twitter:description":
              'Listen to "Easy On Me" here: http://Adele.lnk.to/EOMPre-order Adele\'s new album "30" before its release on November 19:  https://www.adele.comShop the "Adele...',
            "og:url": "https://www.youtube.com/watch?v=YQHsXMglC9A",
            "twitter:player:width": "1280",
            "al:android:app_name": "YouTube",
            "twitter:app:name:iphone": "YouTube",
          },
        ],
        videoobject: [
          {
            embedurl: "https://www.youtube.com/embed/YQHsXMglC9A",
            playertype: "HTML5 Flash",
            isfamilyfriendly: "true",
            uploaddate: "2015-10-22",
            description:
              'Listen to "Easy On Me" here: http://Adele.lnk.to/EOMPre-order Adele\'s new album "30" before its release on November 19: https://www.adele.comShop the "Adele...',
            videoid: "YQHsXMglC9A",
            url: "https://www.youtube.com/watch?v=YQHsXMglC9A",
            duration: "PT6M7S",
            unlisted: "False",
            name: "Adele - Hello",
            paid: "False",
            width: "1280",
            regionsallowed:
              "AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH...",
            genre: "Music",
            interactioncount: "3008080420",
            channelid: "UComP_epzeKzvBX156r6pm1Q",
            datepublished: "2015-10-22",
            thumbnailurl:
              "https://i.ytimg.com/vi/YQHsXMglC9A/maxresdefault.jpg",
            height: "720",
          },
        ],
        cse_image: [
          {
            src: "https://i.ytimg.com/vi/YQHsXMglC9A/maxresdefault.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "HELLO! - Daily royal, celebrity, fashion, beauty & lifestyle news",
      htmlTitle:
        "<b>HELLO</b>! - Daily royal, celebrity, fashion, beauty &amp; lifestyle news",
      link: "https://www.hellomagazine.com/",
      displayLink: "www.hellomagazine.com",
      snippet:
        "HELLO! brings you the latest celebrity & royal news from the UK & around the world, magazine exclusives, fashion, beauty, lifestyle news, celeb babies, ...",
      htmlSnippet:
        "<b>HELLO</b>! brings you the latest celebrity &amp; royal news from the UK &amp; around the world, magazine exclusives, fashion, beauty, lifestyle news, celeb babies,&nbsp;...",
      cacheId: "hxjkDmKHGvIJ",
      formattedUrl: "https://www.hellomagazine.com/",
      htmlFormattedUrl: "https://www.<b>hello</b>magazine.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrFJKj5Z05x3Oik1ptcuuuy59bHOq359QK_F2Pug3AQIxhDa6Sb7xmPeo",
            width: "225",
            height: "225",
          },
        ],
        metatags: [
          {
            "p:domain_verify": "2e0d0d07c9164557a351ff28f09074ef",
            "og:image":
              "https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png",
            "og:site_name": "HELLO!",
            origen: "hellomagazine.com",
            title:
              "HELLO! - Daily royal, celebrity, fashion, beauty & lifestyle news",
            distribution: "global",
            "og:description":
              "HELLO! brings you the latest celebrity & royal news from the UK & around the world, magazine exclusives, fashion, beauty, lifestyle news, celeb babies, weddings, pregnancies and more!",
            last_mod: "Thu, 15 Sep 2022 17:24:50 GMT",
            "dc.creator": "HELLO!",
            "fb:admins": "89982930077",
            lang: "en-GB",
            "botify-site-verification": "rAorMmkbfzd6yOwJ3PITFmdyCjOzGLug",
            "og:type": "website",
            handheldfriendly: "True",
            "msvalidate.01": "802E2A1202224ED23A9EF77A39836CEC",
            author: "HELLO!",
            "og:title":
              "HELLO! - Daily royal, celebrity, fashion, beauty & lifestyle news",
            locality: "London, UK",
            "fb:pages": "89982930077",
            viewport: "width=device-width, initial-scale=1",
            organization: "HELLO!",
            mobileoptimized: "0",
            "resource-type": "document",
            "dc.language": "English",
            "og:url": "https://www.hellomagazine.com/",
          },
        ],
        cse_image: [
          {
            src: "https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png",
          },
        ],
        sitenavigationelement: [
          {
            name: "Celebrities",
            url: "Celebrities",
          },
          {
            name: "Celebrities",
            url: "Celebrities",
          },
          {
            name: "Celebrities",
            url: "Newsletter",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "hello | naturally friendly products, vegan + never tested on animals",
      htmlTitle:
        "<b>hello</b> | naturally friendly products, vegan + never tested on animals",
      link: "https://www.hello-products.com/",
      displayLink: "www.hello-products.com",
      snippet:
        "naturally friendly products for naturally friendly people. vegan, cruelty free, and thoughtfully formulated for everyone.",
      htmlSnippet:
        "naturally friendly products for naturally friendly people. vegan, cruelty free, and thoughtfully formulated for everyone.",
      cacheId: "lcA_2yf_mQgJ",
      formattedUrl: "https://www.hello-products.com/",
      htmlFormattedUrl: "https://www.<b>hello</b>-products.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS49LpojT3gru71Lz17BGAr1J27k-oxw8YS5S9-FP5SOfnlZLCRuYqnO-Bu",
            width: "312",
            height: "161",
          },
        ],
        metatags: [
          {
            "msapplication-tilecolor": "#ffffff",
            "og:image":
              "https://www.hello-products.com/wp-content/uploads/2020/01/HELLO_Strangely_Likeable_Mobile_Header_580x300.png",
            "theme-color": "#ffffff",
            "og:type": "website",
            "og:image:width": "580",
            "twitter:card": "summary",
            "og:site_name": "Hello Products",
            "msvalidate.01": "782AB2D27CB855D9F86E2B56FBC572DA",
            "og:title":
              "hello | naturally friendly products, vegan + never tested on animals",
            "og:image:height": "300",
            "og:image:type": "image/png",
            "msapplication-tileimage": "/ms-icon-144x144.png",
            "og:description":
              "naturally friendly products for naturally friendly people. vegan, cruelty free, and thoughtfully formulated for everyone.",
            "facebook-domain-verification": "5g2asge0sadcgj8wwh8380fkrcka91",
            "article:modified_time": "2022-09-12T15:50:12+00:00",
            viewport: "width=device-width, initial-scale=1.0",
            "og:locale": "en_US",
            "og:url": "https://www.hello-products.com/",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src: "https://www.hello-products.com/wp-content/uploads/2020/01/HELLO_Strangely_Likeable_Mobile_Header_580x300.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "HelloFresh: Fresh Food & Meal Kit Delivery Service",
      htmlTitle: "HelloFresh: Fresh Food &amp; Meal Kit Delivery Service",
      link: "https://www.hellofresh.com/",
      displayLink: "www.hellofresh.com",
      snippet:
        "Get started with America's Most Popular Meal Kit today! Most 5-Star Reviews ✓ The most recipe variety ✓ Fresh & affordable meal kit delivery service.",
      htmlSnippet:
        "Get started with America&#39;s Most Popular Meal Kit today! Most 5-Star Reviews ✓ The most recipe variety ✓ Fresh &amp; affordable meal kit delivery service.",
      formattedUrl: "https://www.hellofresh.com/",
      htmlFormattedUrl: "https://www.<b>hello</b>fresh.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0Bq7tO5sF1V1-1v8kvaTkeniZIbr9H25KVfV0i17dZbobXY9rmtUQn6Wv",
            width: "225",
            height: "225",
          },
        ],
        metatags: [
          {
            "msapplication-tilecolor": "#FFF",
            "p:domain_verify": "5aea915e1ac0b408298cfb02478eb3b2",
            country: "US",
            "og:image":
              "https://img.hellofresh.com/hellofresh_website/logo/Logo_square.png",
            "theme-color": "#FFF",
            "og:type": "product",
            "og:site_name": "HelloFresh",
            "apple-mobile-web-app-title": "Home",
            "og:title": "Fresh Food & Meal Kit Delivery Service | HelloFresh",
            "og:description": "HelloFresh",
            version: "0.7660.1",
            url: "https://www.hellofresh.com/",
            "next-head-count": "59",
            "twitter:site": "@hellofresh",
            "site:name": "HelloFresh",
            viewport: "width=device-width, initial-scale=1.0",
            "og:locale": "en-US",
            "og:url": "https://www.hellofresh.com/",
          },
        ],
        cse_image: [
          {
            src: "https://img.hellofresh.com/hellofresh_website/logo/Logo_square.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "The Official Home of Hello Kitty & Friends",
      htmlTitle: "The Official Home of <b>Hello</b> Kitty &amp; Friends",
      link: "https://www.sanrio.com/",
      displayLink: "www.sanrio.com",
      snippet:
        "Explore the supercute world of Sanrio, home to Hello Kitty, My Melody, Kuromi, Aggretsuko, Gudetama, and more!",
      htmlSnippet:
        "Explore the supercute world of Sanrio, home to <b>Hello</b> Kitty, My Melody, Kuromi, Aggretsuko, Gudetama, and more!",
      cacheId: "XcVtgsJCXsYJ",
      formattedUrl: "https://www.sanrio.com/",
      htmlFormattedUrl: "https://www.sanrio.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS2FYgqicxEKO3oVejVIYGIYCokOCM8llq1wdU_gL0767Kk2YJ7RghuREA",
            width: "225",
            height: "225",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://cdn.shopify.com/s/files/1/0416/8083/0620/files/HK_AND_Friends_cream_600x600.png?v=1604721645",
            "theme-color": "#ffffff",
            "og:type": "website",
            "og:image:width": "1200",
            "twitter:card": "summary",
            "og:site_name": "Sanrio",
            author: "Sanrio",
            "og:title": "The Official Home of Hello Kitty & Friends",
            "shopify-checkout-api-token": "16940c0cea93e91348c277a0eafbe76d",
            "og:image:height": "1200",
            "og:description":
              "Explore the supercute world of Sanrio, home to Hello Kitty, My Melody, Kuromi, Aggretsuko, Gudetama, and more!",
            "og:image:secure_url":
              "https://cdn.shopify.com/s/files/1/0416/8083/0620/files/HK_AND_Friends_cream_600x600.png?v=1604721645",
            "twitter:site": "@sanrio/",
            viewport: "width=device-width,initial-scale=1",
            "shopify-digital-wallet": "/41680830620/digital_wallets/dialog",
            "og:url": "https://www.sanrio.com/",
          },
        ],
        cse_image: [
          {
            src: "https://cdn.shopify.com/s/files/1/0416/8083/0620/files/HK_AND_Friends_cream_600x600.png?v=1604721645",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "hello network",
      htmlTitle: "<b>hello</b> network",
      link: "https://hello.com/",
      displayLink: "hello.com",
      snippet:
        "It's see you again soon. We are pausing hello while we get ready to launch something even better. We have loved having you a part of this community, and we want ...",
      htmlSnippet:
        "It&#39;s see you again soon. We are pausing <b>hello</b> while we get ready to launch something even better. We have loved having you a part of this community, and we want&nbsp;...",
      formattedUrl: "https://hello.com/",
      htmlFormattedUrl: "https://<b>hello</b>.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSSfbgRtxMgxPPU1hXv9WoE0LsPe0AinJzqIUnxQEb0XZjXHgzXmZWLQUk",
            width: "337",
            height: "149",
          },
        ],
        metatags: [
          {
            "apple-mobile-web-app-status-bar-style": "black",
            viewport: "width=device-width, initial-scale=1, maximum-scale=1",
            "apple-mobile-web-app-capable": "yes",
            author: "Hello Network, Inc.",
          },
        ],
        cse_image: [
          {
            src: "https://hello.com/img/hello-logo.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello Design",
      htmlTitle: "<b>Hello</b> Design",
      link: "https://www.hellodesign.com/",
      displayLink: "www.hellodesign.com",
      snippet:
        "Hello is a creative agency driven to craft worthy experiences. We believe everything will be digital—surrounding us like the air we breathe.",
      htmlSnippet:
        "<b>Hello</b> is a creative agency driven to craft worthy experiences. We believe everything will be digital—surrounding us like the air we breathe.",
      cacheId: "bpnW6X-_EvAJ",
      formattedUrl: "https://www.hellodesign.com/",
      htmlFormattedUrl: "https://www.<b>hello</b>design.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR--0_qKuJoRNnvSwoiYALScg3GTJgsjRFwAbRZLQ0tpurCbrxgSMwjOngj",
            width: "310",
            height: "163",
          },
        ],
        metatags: [
          {
            cluster: "ip-10-3-1-118.us-west-2.compute.internal",
            "og:image": "https://www.hellodesign.com/image/732/b17/0.5,0.5",
            "og:type": "website",
            "twitter:title": "Hello Design",
            "og:image:width": "1200",
            "twitter:card": "summary_large_image",
            "og:site_name": "Hello",
            author: "Hello Design",
            "og:title": "Hello Design",
            "og:image:height": "630",
            "og:image:type": "jpeg",
            "og:description":
              "Hello is a creative agency driven to craft worthy experiences. We believe everything will be digital—surrounding us like the air we breathe. Hello is communication, and simply what we do.",
            "twitter:image:src":
              "https://www.hellodesign.com/image/732/b17/0.5,0.5",
            viewport: "width=device-width, initial-scale=1.0, shrink-to-fit=no",
            "twitter:description":
              "Hello is a creative agency driven to craft worthy experiences. We believe everything will be digital—surrounding us like the air we breathe. Hello is communication, and simply what we do.",
            "og:url": "https://www.hellodesign.com/index.html",
          },
        ],
        cse_image: [
          {
            src: "https://www.hellodesign.com/image/732/b17/0.5,0.5",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello Games: Homepage",
      htmlTitle: "<b>Hello</b> Games: Homepage",
      link: "https://hellogames.org/",
      displayLink: "hellogames.org",
      snippet:
        "Hello Games. Join us on our journey to create the types of games that didn't exist before. View Jobs. Who We Are. We are a small studio who like to harness ...",
      htmlSnippet:
        "<b>Hello</b> Games. Join us on our journey to create the types of games that didn&#39;t exist before. View Jobs. Who We Are. We are a small studio who like to harness&nbsp;...",
      cacheId: "k10VN_BHc4AJ",
      formattedUrl: "https://hellogames.org/",
      htmlFormattedUrl: "https://<b>hello</b>games.org/",
      pagemap: {
        thumbnail: [
          {
            src: "https://hellogames.org/thumb.png",
          },
        ],
        metatags: [
          {
            "msapplication-tilecolor": "#ffffff",
            "og:image":
              "https://hellogames.org/app/uploads/2020/03/bg-section-background-1440w.jpg",
            "og:type": "website",
            "og:image:width": "1440",
            "twitter:card": "summary_large_image",
            "twitter:title": "Homepage - Hello Games",
            "theme-color": "#ffffff",
            thumbnail: "https://hellogames.org/thumb.png",
            "og:site_name": "Hello Games",
            "og:title": "Homepage - Hello Games",
            "og:image:height": "859",
            "og:description": "Homepage - Hello Games",
            "og:image:secure_url":
              "https://hellogames.org/app/uploads/2020/03/bg-section-background-1440w.jpg",
            "twitter:image":
              "https://hello-games-new-studio-site.azurewebsites.net/app/uploads/2020/03/bg-section-background-1440w.jpg",
            viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
            "twitter:description": "Homepage - Hello Games",
            "og:locale": "en_GB",
            "og:url": "https://hellogames.org/",
          },
        ],
        cse_image: [
          {
            src: "https://hello-games-new-studio-site.azurewebsites.net/app/uploads/2020/03/bg-nms-layer-2-2560w-768x900.png",
            width: "207",
            type: "1",
            height: "243",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello - Wikipedia",
      htmlTitle: "<b>Hello</b> - Wikipedia",
      link: "https://en.wikipedia.org/wiki/Hello",
      displayLink: "en.wikipedia.org",
      snippet:
        'Hello is a salutation or greeting in the English language. It is first attested in writing from 1826. The word "Hello" painted on a wall ...',
      htmlSnippet:
        "<b>Hello</b> is a salutation or greeting in the English language. It is first attested in writing from 1826. The word &quot;<b>Hello</b>&quot; painted on a wall&nbsp;...",
      cacheId: "ZW__FDER0tIJ",
      formattedUrl: "https://en.wikipedia.org/wiki/Hello",
      htmlFormattedUrl: "https://en.wikipedia.org/wiki/<b>Hello</b>",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcREWpZtYWxyPW3kdHpjvAZTDz9StqBGUSh9OoxpKFVjILB1iaYA0I4Xh7Us",
            width: "201",
            height: "251",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            "og:image":
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/-127wiki.jpg/1200px--127wiki.jpg",
            "theme-color": "#eaecf0",
            "og:image:width": "1200",
            "og:type": "website",
            viewport:
              "width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0",
            "og:title": "Hello - Wikipedia",
            "og:image:height": "1500",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/-127wiki.jpg/1200px--127wiki.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello Bar: Home",
      htmlTitle: "<b>Hello</b> Bar: Home",
      link: "https://www.hellobar.com/",
      displayLink: "www.hellobar.com",
      snippet:
        "Convert 83% More. Visitors into Leads, Subscribers, & Buyers. Bars, Modals, Sliders — beautifully designed popups for your site. Easy to use.",
      htmlSnippet:
        "Convert 83% More. Visitors into Leads, Subscribers, &amp; Buyers. Bars, Modals, Sliders — beautifully designed popups for your site. Easy to use.",
      cacheId: "XnRADKczSwcJ",
      formattedUrl: "https://www.hellobar.com/",
      htmlFormattedUrl: "https://www.<b>hello</b>bar.com/",
      pagemap: {
        metatags: [
          {
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "Home - Hello Bar",
            "og:site_name": "Hello Bar",
            viewport:
              "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
            "og:title": "Home - Hello Bar",
            "og:locale": "en_US",
            "og:url": "https://www.hellobar.com/",
          },
        ],
      },
    },
  ],
};
