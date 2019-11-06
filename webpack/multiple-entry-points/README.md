





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-TD/1gdStKo77Iu1A+WNb+2YoRJv7l1hZVO0/0h+eJ5wyGxiTvIbLRko1dQ1jEa9w5BK3poi18st9OPel71zK8A==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-94d2de65a56b07e193e50e91873678b6.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-s/fszKZ5jV9+tAHibuwhvymgy78cB49lbU1L/E40XqZNE6sBv07dSOCEz7I1n45OD2XXg8mUCI2Ub+pR6AegmA==" rel="stylesheet" href="https://github.githubassets.com/assets/github-3c4881237e97cb689271ee2f91e36269.css" />
    
    
    
    

  <meta name="viewport" content="width=device-width">
  
  <title>webpack/README.md at master · webpack/webpack</title>
    <meta name="description" content="A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows for loading parts of the application on demand. Through &quot;loaders&quot;, modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON, Coffeescript, LESS, ... and your custom stuff. - webpack/webpack">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars3.githubusercontent.com/u/2105791?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="webpack/webpack" /><meta name="twitter:description" content="A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows for loading parts of the application on demand. Through &amp;amp;quot;loaders&amp;amp;quot;, module..." />
    <meta property="og:image" content="https://avatars3.githubusercontent.com/u/2105791?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="webpack/webpack" /><meta property="og:url" content="https://github.com/webpack/webpack" /><meta property="og:description" content="A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows for loading parts of the application on demand. Through &amp;quot;loaders&amp;quot;, modules can be..." />

  <link rel="assets" href="https://github.githubassets.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6NDM1MDY4Njk0OjJkZTljY2UzMWQ0NGFhY2JjZGMwYTI1Mzk2ZDdkODMwNDgyZTA5MDkxMjVmMTg5ZTMzZTZjOGU2MGZlMWNkMmU=--2af0c64d297f18b0e4f4572a31465fea66be919e">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="CF57:028D:76E46A:B84838:5DB36E3B" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="CF57:028D:76E46A:B84838:5DB36E3B" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" /><meta name="octolytics-dimension-visitor_id" content="4141892537111404094" /><meta name="octolytics-actor-id" content="3900509" /><meta name="octolytics-actor-login" content="igoryen" /><meta name="octolytics-actor-hash" content="0b867e8a9b312804bc51318bb8902da947821f05066a49a88e915c75d5f8ccc6" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="163d67dccde1ee2153ffd8c537aba870">

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="igoryen">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NTg0YmM2ZTcwNmViYjY1MjczNDgyOTIyMGM2M2RkMDc3ZWIxNzA3MjQyNDExODA2MmE5MGI1YTE4NDE1NmExM3x7InJlbW90ZV9hZGRyZXNzIjoiMjA2LjUxLjI1Mi4xMzIiLCJyZXF1ZXN0X2lkIjoiQ0Y1NzowMjhEOjc2RTQ2QTpCODQ4Mzg6NURCMzZFM0IiLCJ0aW1lc3RhbXAiOjE1NzIwNDAyNTgsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="ACTIONS_V2_ON_MARKETPLACE,MARKETPLACE_FEATURED_BLOG_POSTS,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS,NOTIFY_ON_BLOCK,RELATED_ISSUES,GHE_CLOUD_TRIAL">

  <meta name="html-safe-nonce" content="6073c0e46fae3937418c63f580591b951f665ecf">

  <meta http-equiv="x-pjax-version" content="be4ae86afd7ca208f7cd7324a7ea948c">
  

      <link href="https://github.com/webpack/webpack/commits/master.atom" rel="alternate" title="Recent Commits to webpack:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/webpack/webpack git https://github.com/webpack/webpack.git">

  <meta name="octolytics-dimension-user_id" content="2105791" /><meta name="octolytics-dimension-user_login" content="webpack" /><meta name="octolytics-dimension-repository_id" content="3678731" /><meta name="octolytics-dimension-repository_nwo" content="webpack/webpack" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="3678731" /><meta name="octolytics-dimension-repository_network_root_nwo" content="webpack/webpack" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/webpack/webpack/blob/master/examples/multiple-entry-points/README.md" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  <meta name="webauthn-auth-enabled" content="true">

  <meta name="webauthn-registration-enabled" content="true">

  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-responsive page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
      <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
    </span>

    
    
    


          <header class="Header js-details-container Details flex-wrap flex-lg-nowrap p-responsive" role="banner">

    <div class="Header-item d-none d-lg-flex">
      <a class="Header-link" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

    </div>

    <div class="Header-item d-lg-none">
      <button class="Header-link btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
        <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
      </button>
    </div>

    <div class="Header-item Header-item--full flex-column flex-lg-row width-full flex-order-2 flex-lg-order-none mr-0 mr-lg-3 mt-3 mt-lg-0 Details-content--hidden">
        <div class="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="3678731" data-scoped-search-url="/webpack/webpack/search" data-unscoped-search-url="/search" action="/webpack/webpack/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=6iw1eXItY93fTMxN4gy6MAyRs3FXyRZhT/0tvvR17pvnuAROcKlr8vcQixkourH/841pll87VakC7bzoQH6fPw=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>


      <nav class="d-flex flex-column flex-lg-row flex-self-stretch flex-lg-self-auto" aria-label="Global">
    <a class="Header-link d-block d-lg-none py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:dashboard:user" aria-label="Dashboard" href="/dashboard">
      Dashboard
</a>
  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
    Pull requests
</a>
  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
    Issues
</a>
    <div class="mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15">
      <a class="js-selected-navigation-item Header-link" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
        Marketplace
</a>      

    </div>

  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
    Explore
</a>


    <a class="Header-link d-block d-lg-none mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" href="https://github.com/igoryen">
      <img class="avatar" height="20" width="20" alt="@igoryen" src="https://avatars0.githubusercontent.com/u/3900509?s=60&amp;v=4" />
      igoryen
</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="LfF/aQ6gM90P2NV1TNrShvyjyAO4Mk+K1RqThU3N+737vfLlOThysptvojiEaL01Igb7jv77t8GuMdPM4UDk4g==" />
      <button type="submit" class="Header-link mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15 d-lg-none btn-link d-block width-full text-left" data-ga-click="Header, sign out, icon:logout" style="padding-left: 2px;">
        <svg class="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9V7H8V5h4V3l4 3-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z"/></svg>
        Sign out
      </button>
</form></nav>

    </div>

    <div class="Header-item Header-item--full flex-justify-center d-lg-none position-relative">
      <div class="css-truncate css-truncate-target width-fit position-absolute left-0 right-0 text-center">
              <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
    <a class="Header-link" href="/webpack">webpack</a>
    /
    <a class="Header-link" href="/webpack/webpack">webpack</a>

</div>
    </div>


    <div class="Header-item mr-0 mr-lg-3 flex-order-1 flex-lg-order-none">
      

    <a aria-label="You have unread notifications" class="Header-link notification-indicator position-relative tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:unread" data-channel="notification-changed:3900509" href="/notifications">
        <span class="mail-status unread"></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
    </div>


    <div class="Header-item position-relative d-none d-lg-flex">
      <details class="details-overlay details-reset">
  <summary class="Header-link"
      aria-label="Create new…"
      data-ga-click="Header, create new, icon:add">
    <svg class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw">
    
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>


  <div role="none" class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="webpack/webpack">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/webpack/webpack/issues/new/choose" data-ga-click="Header, create new issue" data-skip-pjax>
      New issue
    </a>


  </details-menu>
</details>

    </div>

    <div class="Header-item position-relative mr-0 d-none d-lg-flex">
      
<details class="details-overlay details-reset">
  <summary class="Header-link"
    aria-label="View profile and more"
    data-ga-click="Header, show menu, icon:avatar">
    <img alt="@igoryen" class="avatar" src="https://avatars3.githubusercontent.com/u/3900509?s=40&amp;v=4" height="20" width="20">
      <include-fragment hidden src="/users/igoryen/feature_preview/indicator_check"></include-fragment>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-2" style="width: 180px">
    <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/igoryen" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">igoryen</strong></a></div>
    <div role="none" class="dropdown-divider"></div>

      <div class="pl-3 pr-3 f6 user-status-container js-user-status-context pb-1" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
        
<div class="js-user-status-container
    user-status-compact rounded-1 px-2 py-1 mt-2
    border
  " data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit "
      role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:2105791,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:3900509,&quot;client_id&quot;:&quot;964359505.1549655614&quot;,&quot;originating_request_id&quot;:&quot;CF57:028D:76E46A:B84838:5DB36E3B&quot;,&quot;originating_url&quot;:&quot;https://github.com/webpack/webpack/blob/master/examples/multiple-entry-points/README.md&quot;,&quot;referrer&quot;:&quot;https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points&quot;}}" data-hydro-click-hmac="417be91656350df1a2929b429f50da0672cef9c1aa18bf6e3d49fc249be3a5a3">
      <div class="d-flex">
        <div class="f6 lh-condensed user-status-header
          d-inline-block v-align-middle
            user-status-emoji-only-header circle
            pr-2
"
            style="max-width: 29px"
          >
          <div class="user-status-emoji-container flex-shrink-0 mr-1 mt-1 lh-condensed-ultra v-align-bottom" style="">
            <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
          </div>
        </div>
        <div class="
          d-inline-block v-align-middle
          
          
           css-truncate css-truncate-target 
           user-status-message-wrapper f6"
           style="line-height: 20px;" >
          <div class="d-inline-block text-gray-dark v-align-text-top text-left">
              <span class="text-gray ml-2">Set status</span>
          </div>
        </div>
      </div>
    </summary>
    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="f7YwpXqcYXTcY5BC40hMh7X48RuGc4HJ4fsV6O9F5wyQVtTiR9B/GKALyKxJiNDqqBK41NU0XX4y8WdVKsYsrw==" />
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value="">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden></span>
                  <span class="js-user-status-custom-emoji"></span>
                  <span class="js-user-status-no-emoji-icon" >
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
                  </span>
                </button>
              </span>
              <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
                <input
                  type="text"
                  autocomplete="off"
                  data-no-org-url="/autocomplete/user-suggestions"
                  data-org-url="/suggestions?mention_suggester=1"
                  data-maxlength="80"
                  class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field"
                  placeholder="What's happening?"
                  name="message"
                  value=""
                  aria-label="What is your current status?">
              </text-expander>
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true-compact-true" id="limited-availability-truncate-true-compact-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true-compact-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true-compact-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
            

<div class="d-inline-block f5 mr-2 pt-3 pb-2" >
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="f5 btn-link link-gray-dark border px-2 py-1 rounded-1" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2019-10-25T18:20:58-04:00">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2019-10-25T18:50:58-04:00">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2019-10-25T21:50:58-04:00">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2019-10-25T23:59:59-04:00">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2019-10-27T23:59:59-04:00">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit" disabled class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button" disabled class="width-full js-clear-user-status-button btn ml-2 ">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

      </div>
      <div role="none" class="dropdown-divider"></div>


    <a role="menuitem" class="dropdown-item" href="/igoryen" data-ga-click="Header, go to profile, text:your profile">Your profile</a>


    <a role="menuitem" class="dropdown-item" href="/igoryen?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a>

    <a role="menuitem" class="dropdown-item" href="/igoryen?tab=projects" data-ga-click="Header, go to projects, text:your projects">Your projects</a>

    <a role="menuitem" class="dropdown-item" href="/igoryen?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a>
      <a role="menuitem" class="dropdown-item" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists">Your gists</a>



    <div role="none" class="dropdown-divider"></div>
      
<div id="feature-enrollment-toggle" class="hide-sm hide-md feature-preview-details position-relative">
  <button
    type="button"
    class="dropdown-item btn-link"
    role="menuitem"
    data-feature-preview-trigger-url="/users/igoryen/feature_previews"
    data-feature-preview-close-details="{&quot;event_type&quot;:&quot;feature_preview.clicks.close_modal&quot;,&quot;payload&quot;:{&quot;client_id&quot;:&quot;964359505.1549655614&quot;,&quot;originating_request_id&quot;:&quot;CF57:028D:76E46A:B84838:5DB36E3B&quot;,&quot;originating_url&quot;:&quot;https://github.com/webpack/webpack/blob/master/examples/multiple-entry-points/README.md&quot;,&quot;referrer&quot;:&quot;https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points&quot;,&quot;user_id&quot;:3900509}}"
    data-feature-preview-close-hmac="bfc85056133dd307db9b85fdb06de69fa02d750584a6197b6a1cd13600070084"
    data-hydro-click="{&quot;event_type&quot;:&quot;feature_preview.clicks.open_modal&quot;,&quot;payload&quot;:{&quot;link_location&quot;:&quot;user_dropdown&quot;,&quot;client_id&quot;:&quot;964359505.1549655614&quot;,&quot;originating_request_id&quot;:&quot;CF57:028D:76E46A:B84838:5DB36E3B&quot;,&quot;originating_url&quot;:&quot;https://github.com/webpack/webpack/blob/master/examples/multiple-entry-points/README.md&quot;,&quot;referrer&quot;:&quot;https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points&quot;,&quot;user_id&quot;:3900509}}"
    data-hydro-click-hmac="d7803a53524427a32e5cb648735adfa61ea5f837f0ba827fd03391dbe163abca"
  >
    Feature preview
  </button>
    <include-fragment hidden src="/users/igoryen/feature_preview/indicator_check"></include-fragment>
</div>

    <a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
    <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="oR7bnwHtlx22yXEh9yh0VuGQPY8/i/Sb1JS0QOohRPV3UlYTNnXWciJ+Bmw/mhvlPzUOAnlCDNCvv/QJRqxbqg==" />
      
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
        Sign out
      </button>
</form>  </details-menu>
</details>

    </div>

  </header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>


    <div id="js-flash-container">

</div>



  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main  >
      


  



  









  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav pt-0 pt-lg-4 ">
    <div class="repohead-details-container clearfix container-lg p-responsive d-none d-lg-block">

      <ul class="pagehead-actions">

    <li>
      <details id="funding-links-modal" class="details-reset details-overlay details-overlay-dark d-inline-block float-left" >
        <summary id="sponsor-button-repo" class="btn btn-sm"
          title="Sponsor webpack/webpack"
          data-ga-click="Repository, show sponsor modal, action:blob#show; text:Sponsor"
          >
          <svg class="octicon octicon-heart text-pink v-align-middle" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9 2c-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-1.632.086-2.954 1.333-3 3 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.047-1.69-1.342-2.913-3-3z"/></svg>
          Sponsor
        </summary>
        <details-dialog
          class="anim-fade-in fast Box Box--overlay d-flex flex-column"
            src="/webpack/webpack/funding_links?fragment=1"
            preload
          >
          <div class="Box-header">
            <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
              <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
            </button>
            <h3 class="Box-title">
              Sponsor webpack/webpack
            </h3>
          </div>
          <div class="overflow-auto">
            <include-fragment
              >
              <div class="octocat-spinner my-3" aria-label="Loading..."></div>
            </include-fragment>
          </div>
        </details-dialog>
      </details>
    </li>


    <li >
      
    <details class="dropdown details-reset details-overlay d-inline-block float-left"
      data-deferred-details-content-url="/webpack/webpack/used_by_contents"
    >
      <summary class="btn btn-sm btn-with-count" data-menu-button>
        <svg class="octicon octicon-package v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1 4.27v7.47c0 .45.3.84.75.97l6.5 1.73c.16.05.34.05.5 0l6.5-1.73c.45-.13.75-.52.75-.97V4.27c0-.45-.3-.84-.75-.97l-6.5-1.74a1.4 1.4 0 00-.5 0L1.75 3.3c-.45.13-.75.52-.75.97zm7 9.09l-6-1.59V5l6 1.61v6.75zM2 4l2.5-.67L11 5.06l-2.5.67L2 4zm13 7.77l-6 1.59V6.61l2-.55V8.5l2-.53V5.53L15 5v6.77zm-2-7.24L6.5 2.8l2-.53L15 4l-2 .53z"/></svg>
        Used by
        <div class="dropdown-caret"></div>
      </summary>
      <include-fragment>
        <div class="dropdown-menu dropdown-menu-s p-3 text-center" style="width:360px;">
          <img width="32" height="32" alt="Loading..." class="my-0" src="https://github.githubassets.com/images/spinners/octocat-spinner-64.gif" />
          <p class="pt-1 m-0 f5 text-gray-light">
            Loading dependents...
          </p>
        </div>
      </include-fragment>
    </details>
    <a class="social-count"
      href="/webpack/webpack/network/dependents?package_id=UGFja2FnZS0xMzc5MTkzMw%3D%3D"
      aria-label="3581221 repositories depend on this package"
    >
      3.6m
    </a>

    </li>

  <li>
    
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="clearfix js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="l6ELbKEiV93YxEvEbzr42WCnk44K8VCh7GQvGOnFjJKHH2kHTvVqPt9DJ+Jz3H6qdiHnCMLBcAbn55/PaJsAFA==" />      <input type="hidden" name="repository_id" value="3678731">

      <details class="details-reset details-overlay select-menu float-left">
        <summary class="select-menu-button float-left btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:3678731,&quot;client_id&quot;:&quot;964359505.1549655614&quot;,&quot;originating_request_id&quot;:&quot;CF57:028D:76E46A:B84838:5DB36E3B&quot;,&quot;originating_url&quot;:&quot;https://github.com/webpack/webpack/blob/master/examples/multiple-entry-points/README.md&quot;,&quot;referrer&quot;:&quot;https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points&quot;,&quot;user_id&quot;:3900509}}" data-hydro-click-hmac="8e28dbdb4292ea316a70adadd3a2797263e9ac227ce2b15c54bbde36668d206b" data-ga-click="Repository, click Watch settings, action:blob#show">          <span data-menu-button>
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
          </span>
</summary>        <details-menu
          class="select-menu-modal position-absolute mt-5"
          style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-mute v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
        <a class="social-count js-social-count"
          href="/webpack/webpack/watchers"
          aria-label="1603 users are watching this repository">
          1.6k
        </a>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="starred js-social-form" action="/webpack/webpack/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Ddu7djIoDf5jvw5tE0AQavI10jO9iJeGhFPsUCMiNzQMdZJHarPF03v4dvjlc7EXicxyC5iuMY0U0nMUI4z8jQ==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Unstar webpack/webpack" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:3678731,&quot;client_id&quot;:&quot;964359505.1549655614&quot;,&quot;originating_request_id&quot;:&quot;CF57:028D:76E46A:B84838:5DB36E3B&quot;,&quot;originating_url&quot;:&quot;https://github.com/webpack/webpack/blob/master/examples/multiple-entry-points/README.md&quot;,&quot;referrer&quot;:&quot;https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points&quot;,&quot;user_id&quot;:3900509}}" data-hydro-click-hmac="08aee8d0a4589d89039e6dd2739f661507c42d1596a0e5c5aa240c9026b3481a" data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Unstar
</button>        <a class="social-count js-social-count" href="/webpack/webpack/stargazers"
           aria-label="51571 users starred this repository">
           51.6k
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="unstarred js-social-form" action="/webpack/webpack/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="HZRcxxH7cNswYkz/1RQtOjVwJsi4xxeTNqqT4l0PhVcgqQt0ch746R7EmIO0UqC8zPPWWMBP4ficmbOizgrgKg==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Star webpack/webpack" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:3678731,&quot;client_id&quot;:&quot;964359505.1549655614&quot;,&quot;originating_request_id&quot;:&quot;CF57:028D:76E46A:B84838:5DB36E3B&quot;,&quot;originating_url&quot;:&quot;https://github.com/webpack/webpack/blob/master/examples/multiple-entry-points/README.md&quot;,&quot;referrer&quot;:&quot;https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points&quot;,&quot;user_id&quot;:3900509}}" data-hydro-click-hmac="fec6a9f4c7b19ddb587a20a28d3b7991054c1e0cabf5ce49bb1f9852e68c2ab0" data-ga-click="Repository, click star button, action:blob#show; text:Star">        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Star
</button>        <a class="social-count js-social-count" href="/webpack/webpack/stargazers"
           aria-label="51571 users starred this repository">
          51.6k
        </a>
</form>  </div>

  </li>

  <li>
          <details class="details-reset details-overlay details-overlay-dark d-inline-block float-left">
            <summary class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:3678731,&quot;client_id&quot;:&quot;964359505.1549655614&quot;,&quot;originating_request_id&quot;:&quot;CF57:028D:76E46A:B84838:5DB36E3B&quot;,&quot;originating_url&quot;:&quot;https://github.com/webpack/webpack/blob/master/examples/multiple-entry-points/README.md&quot;,&quot;referrer&quot;:&quot;https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points&quot;,&quot;user_id&quot;:3900509}}" data-hydro-click-hmac="e4d01f016793c12c581a5c2985ad034097c48c56b99dac67fa9cc77515daf42a" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork" title="Fork your own copy of webpack/webpack to your account">              <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
</summary>            <details-dialog
              class="anim-fade-in fast Box Box--overlay d-flex flex-column"
              src="/webpack/webpack/fork?fragment=1"
              preload>
              <div class="Box-header">
                <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
                  <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
                </button>
                <h3 class="Box-title">Fork webpack</h3>
              </div>
              <div class="overflow-auto text-center">
                <include-fragment>
                  <div class="octocat-spinner my-3" aria-label="Loading..."></div>
                  <p class="f5 text-gray">If this dialog fails to load, you can visit <a href="/webpack/webpack/fork">the fork page</a> directly.</p>
                </include-fragment>
              </div>
            </details-dialog>
          </details>

    <a href="/webpack/webpack/network/members" class="social-count"
       aria-label="6565 users forked this repository">
      6.6k
    </a>
  </li>
</ul>

      <h1 class="public ">
    <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="organization" data-hovercard-url="/orgs/webpack/hovercard" href="/webpack">webpack</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/webpack/webpack">webpack</a></strong>
  

</h1>

    </div>
    
<nav class="hx_reponav reponav js-repo-nav js-sidenav-container-pjax container-lg p-responsive d-none d-lg-block"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /webpack/webpack" href="/webpack/webpack">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /webpack/webpack/issues" href="/webpack/webpack/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">402</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /webpack/webpack/pulls" href="/webpack/webpack/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">66</span>
      <meta itemprop="position" content="3">
</a>  </span>


    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement" class="position-relative float-left">
      <a data-hotkey="g w" data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /webpack/webpack/actions" href="/webpack/webpack/actions">
        <svg class="octicon octicon-play" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 8A7 7 0 110 8a7 7 0 0114 0zm-8.223 3.482l4.599-3.066a.5.5 0 000-.832L5.777 4.518A.5.5 0 005 4.934v6.132a.5.5 0 00.777.416z"/></svg>
        Actions
</a>
    </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /webpack/webpack/projects" href="/webpack/webpack/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      Projects
      <span class="Counter" >1</span>
</a>

    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /webpack/webpack/wiki" href="/webpack/webpack/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>
    <a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /webpack/webpack/security/advisories" href="/webpack/webpack/security/advisories">
      <svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"/></svg>
      Security
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse people /webpack/webpack/pulse" href="/webpack/webpack/pulse">
      <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
      Insights
</a>

</nav>

  <div class="reponav-wrapper reponav-small d-lg-none">
  <nav class="reponav js-reponav text-center no-wrap"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /webpack/webpack" href="/webpack/webpack">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /webpack/webpack/issues" href="/webpack/webpack/issues">
          <span itemprop="name">Issues</span>
          <span class="Counter">402</span>
          <meta itemprop="position" content="2">
</a>      </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /webpack/webpack/pulls" href="/webpack/webpack/pulls">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">66</span>
        <meta itemprop="position" content="3">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /webpack/webpack/projects" href="/webpack/webpack/projects">
          <span itemprop="name">Projects</span>
          <span class="Counter">1</span>
          <meta itemprop="position" content="4">
</a>      </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_wiki /webpack/webpack/wiki" href="/webpack/webpack/wiki">
          <span itemprop="name">Wiki</span>
          <meta itemprop="position" content="5">
</a>      </span>

      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /webpack/webpack/security/advisories" href="/webpack/webpack/security/advisories">
        <span itemprop="name">Security</span>
        <meta itemprop="position" content="6">
</a>
      <a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /webpack/webpack/pulse" href="/webpack/webpack/pulse">
        Pulse
</a>
      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="community /webpack/webpack/community" href="/webpack/webpack/community">
          Community
</a>      </span>

  </nav>
</div>


  </div>
<div class="container-lg clearfix new-discussion-timeline experiment-repo-nav  p-responsive">
  <div class="repository-content ">

    
    


  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/webpack/webpack/blob/09dd274bc94135e17c14706049f8942c74cf2d03/examples/multiple-entry-points/README.md">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:b92822c183025d887ca73a57fadaa60d -->
      

    <div class="d-flex flex-items-start flex-shrink-0 pb-3 flex-column flex-md-row">
      <span class="d-flex flex-justify-between width-full width-md-auto">
        
<details class="details-reset details-overlay select-menu branch-select-menu  hx_rsm" id="branch-select-menu">
  <summary class="btn btn-sm select-menu-button css-truncate"
           data-hotkey="w"
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target" data-menu-button>master</span>
  </summary>

  <details-menu class="select-menu-modal hx_rsm-modal position-absolute" style="z-index: 99;" src="/webpack/webpack/ref-list/master/examples/multiple-entry-points/README.md?source_action=show&amp;source_controller=blob" preload>
    <include-fragment class="select-menu-loading-overlay anim-pulse">
      <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
    </include-fragment>
  </details-menu>
</details>

        <div class="BtnGroup flex-shrink-0 d-md-none">
          <a href="/webpack/webpack/find/master"
                class="js-pjax-capture-input btn btn-sm BtnGroup-item"
                data-pjax
                data-hotkey="t">
            Find file
          </a>
          <clipboard-copy value="examples/multiple-entry-points/README.md" class="btn btn-sm BtnGroup-item">
            Copy path
          </clipboard-copy>
        </div>
      </span>
      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal flex-md-self-center ml-md-2 mr-md-3 my-2 my-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment"><a data-pjax="true" href="/webpack/webpack"><span>webpack</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/webpack/webpack/tree/master/examples"><span>examples</span></a></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/webpack/webpack/tree/master/examples/multiple-entry-points"><span>multiple-entry-points</span></a></span><span class="separator">/</span><strong class="final-path">README.md</strong>
      </h2>

      <div class="BtnGroup flex-shrink-0 d-none d-md-inline-block">
        <a href="/webpack/webpack/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy value="examples/multiple-entry-points/README.md" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
    </div>



    
  <div class="Box Box--condensed d-flex flex-column flex-shrink-0">
      <div class="Box-body d-flex flex-justify-between bg-blue-light flex-column flex-md-row flex-items-start flex-md-items-center">
        <span class="pr-md-4 f6">
          <a rel="contributor" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=1365881" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/sokra"><img class="avatar" src="https://avatars0.githubusercontent.com/u/1365881?s=40&amp;v=4" width="20" height="20" alt="@sokra" /></a>
          <a class="text-bold link-gray-dark lh-default v-align-middle" rel="contributor" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=1365881" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/sokra">sokra</a>
            <span class="lh-default v-align-middle">
              <a data-pjax="true" title="update examples" class="link-gray" href="/webpack/webpack/commit/f25906fd2fd0bbcf472d9d44dcd8d6a92e3fbe95">update examples</a>
            </span>
        </span>
        <span class="d-inline-block flex-shrink-0 v-align-bottom f6 mt-2 mt-md-0">
          <a class="pr-2 text-mono link-gray" href="/webpack/webpack/commit/f25906fd2fd0bbcf472d9d44dcd8d6a92e3fbe95" data-pjax>f25906f</a>
          <relative-time datetime="2019-10-10T21:11:05Z" class="no-wrap">Oct 10, 2019</relative-time>
        </span>
      </div>

    <div class="Box-body d-flex flex-items-center flex-auto f6 border-bottom-0 flex-wrap" >
      <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-2" id="blob_contributors_box">
        <summary class="btn-link">
          <span><strong>8</strong> contributors</span>
        </summary>
        <details-dialog
          class="Box Box--overlay d-flex flex-column anim-fade-in fast"
          aria-label="Users who have contributed to this file"
          src="/webpack/webpack/contributors/master/examples/multiple-entry-points/README.md/list" preload>
          <div class="Box-header">
            <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
              <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
            </button>
            <h3 class="Box-title">
              Users who have contributed to this file
            </h3>
          </div>
          <include-fragment class="octocat-spinner my-3" aria-label="Loading..."></include-fragment>
        </details-dialog>
      </details>
        <span class="">
    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=1365881" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/webpack/webpack/commits/master/examples/multiple-entry-points/README.md?author=sokra">
      <img class="avatar mr-1" src="https://avatars0.githubusercontent.com/u/1365881?s=40&amp;v=4" width="20" height="20" alt="@sokra" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=3367801" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/webpack/webpack/commits/master/examples/multiple-entry-points/README.md?author=hiroppy">
      <img class="avatar mr-1" src="https://avatars1.githubusercontent.com/u/3367801?s=40&amp;v=4" width="20" height="20" alt="@hiroppy" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=1686818" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/webpack/webpack/commits/master/examples/multiple-entry-points/README.md?author=zhaoshengjun">
      <img class="avatar mr-1" src="https://avatars2.githubusercontent.com/u/1686818?s=40&amp;v=4" width="20" height="20" alt="@zhaoshengjun" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=22762181" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/webpack/webpack/commits/master/examples/multiple-entry-points/README.md?author=nveenjain">
      <img class="avatar mr-1" src="https://avatars2.githubusercontent.com/u/22762181?s=40&amp;v=4" width="20" height="20" alt="@nveenjain" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=823277" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/webpack/webpack/commits/master/examples/multiple-entry-points/README.md?author=rhysd">
      <img class="avatar mr-1" src="https://avatars2.githubusercontent.com/u/823277?s=40&amp;v=4" width="20" height="20" alt="@rhysd" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=2662037" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/webpack/webpack/commits/master/examples/multiple-entry-points/README.md?author=kennyt">
      <img class="avatar mr-1" src="https://avatars0.githubusercontent.com/u/2662037?s=40&amp;v=4" width="20" height="20" alt="@kennyt" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=781746" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/webpack/webpack/commits/master/examples/multiple-entry-points/README.md?author=jhnns">
      <img class="avatar mr-1" src="https://avatars0.githubusercontent.com/u/781746?s=40&amp;v=4" width="20" height="20" alt="@jhnns" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=168498" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/webpack/webpack/commits/master/examples/multiple-entry-points/README.md?author=ooflorent">
      <img class="avatar mr-1" src="https://avatars2.githubusercontent.com/u/168498?s=40&amp;v=4" width="20" height="20" alt="@ooflorent" /> 
</a>
</span>

    </div>
  </div>





    <div class="Box mt-3 position-relative">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">
  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">

      691 lines (650 sloc)
      <span class="file-info-divider"></span>
    24.3 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/webpack/webpack/raw/master/examples/multiple-entry-points/README.md">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/webpack/webpack/blame/master/examples/multiple-entry-points/README.md">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/webpack/webpack/commits/master/examples/multiple-entry-points/README.md">History</a>
    </div>


    <div>
            <a class="btn-octicon tooltipped tooltipped-nw hide-sm"
               href="github-mac://openRepo/https://github.com/webpack/webpack?branch=master&amp;filepath=examples%2Fmultiple-entry-points%2FREADME.md"
               aria-label="Open this file in GitHub Desktop"
               data-ga-click="Repository, open with desktop, type:windows">
                <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
            </a>

            <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/webpack/webpack/edit/master/examples/multiple-entry-points/README.md" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="o+nZPBAK6yHWTDReTD7jZ7c4+g3TfMY8KPeA7c16sGqxliFDEU4My1VJe4646DteCKZsLq6qxJuPDdRpdTLpsw==" />
              <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
                aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
                <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
              </button>
</form>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/webpack/webpack/delete/master/examples/multiple-entry-points/README.md" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="N6F+Q+km/cJHTvLuu88I0qlPlu+XiRdl1ck/2x+SYen+34uAbTOGGMU06xSAqk5lrO+amgDxxqV7NvYlFjbCIw==" />
            <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and delete the file" data-disable-with>
              <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
            </button>
</form>    </div>
  </div>
</div>




      
  <div id="readme" class="Box-body readme blob instapaper_body js-code-block-container">
    <article class="markdown-body entry-content p-3 p-md-6" itemprop="text"><p>This example shows how to use multiple entry points with a commons chunk.</p>
<p>In this example you have two (HTML) pages <code>pageA</code> and <code>pageB</code>. You want to create individual bundles for each page. In addition to this you want to create a shared bundle that contains all modules used in both pages (assuming there are many/big modules in common). The pages also use Code Splitting to load a less used part of the features on demand.</p>
<p>You can see how to define multiple entry points via the <code>entry</code> option.</p>
<p>You can use</p>
<p>You can see the output files:</p>
<ul>
<li><code>commons.js</code> contains:
<ul>
<li>module <code>common.js</code> which is used in both pages</li>
</ul>
</li>
<li><code>pageA.js</code> contains: (<code>pageB.js</code> is similar)
<ul>
<li>the module system</li>
<li>chunk loading logic</li>
<li>the entry point <code>pageA.js</code></li>
<li>it would contain any other module that is only used by <code>pageA</code></li>
</ul>
</li>
<li><code>406.js</code> is an additional chunk which is used by both pages. It contains:
<ul>
<li>module <code>shared.js</code></li>
</ul>
</li>
</ul>
<p>You can also see the info that is printed to console. It shows among others:</p>
<ul>
<li>the generated files</li>
<li>the chunks with file, name and id
<ul>
<li>see lines starting with <code>chunk</code></li>
</ul>
</li>
<li>the modules that are in the chunks</li>
<li>the reasons why the modules are included</li>
<li>the reasons why a chunk is created
<ul>
<li>see lines starting with <code>&gt;</code></li>
</ul>
</li>
</ul>
<h1><a id="user-content-pageajs" class="anchor" aria-hidden="true" href="#pageajs"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>pageA.js</h1>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> common <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">"</span>./common<span class="pl-pds">"</span></span>);
<span class="pl-c1">require</span>([<span class="pl-s"><span class="pl-pds">"</span>./shared<span class="pl-pds">"</span></span>], <span class="pl-k">function</span>(<span class="pl-smi">shared</span>) {
	<span class="pl-en">shared</span>(<span class="pl-s"><span class="pl-pds">"</span>This is page A<span class="pl-pds">"</span></span>);
});</pre></div>
<h1><a id="user-content-pagebjs" class="anchor" aria-hidden="true" href="#pagebjs"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>pageB.js</h1>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> common <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">"</span>./common<span class="pl-pds">"</span></span>);
<span class="pl-smi">require</span>.<span class="pl-en">ensure</span>([<span class="pl-s"><span class="pl-pds">"</span>./shared<span class="pl-pds">"</span></span>], <span class="pl-k">function</span>(<span class="pl-smi">require</span>) {
	<span class="pl-k">var</span> shared <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">"</span>./shared<span class="pl-pds">"</span></span>);
	<span class="pl-en">shared</span>(<span class="pl-s"><span class="pl-pds">"</span>This is page B<span class="pl-pds">"</span></span>);
});</pre></div>
<h1><a id="user-content-webpackconfigjs" class="anchor" aria-hidden="true" href="#webpackconfigjs"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>webpack.config.js</h1>
<div class="highlight highlight-source-js"><pre><span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
	<span class="pl-c"><span class="pl-c">//</span> mode: "development || "production",</span>
	entry<span class="pl-k">:</span> {
		pageA<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>./pageA<span class="pl-pds">"</span></span>,
		pageB<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>./pageB<span class="pl-pds">"</span></span>
	},
	optimization<span class="pl-k">:</span> {
		splitChunks<span class="pl-k">:</span> {
			cacheGroups<span class="pl-k">:</span> {
				commons<span class="pl-k">:</span> {
					name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>commons<span class="pl-pds">"</span></span>,
					chunks<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>initial<span class="pl-pds">"</span></span>,
					minChunks<span class="pl-k">:</span> <span class="pl-c1">2</span>,
					minSize<span class="pl-k">:</span> <span class="pl-c1">0</span>
				}
			}
		},
		chunkIds<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>deterministic<span class="pl-pds">"</span></span> <span class="pl-c"><span class="pl-c">//</span> To keep filename consistent between different modes (for example building only)</span>
	}
};</pre></div>
<h1><a id="user-content-pageahtml" class="anchor" aria-hidden="true" href="#pageahtml"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>pageA.html</h1>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">html</span>&gt;
	&lt;<span class="pl-ent">head</span>&gt;&lt;/<span class="pl-ent">head</span>&gt;
	&lt;<span class="pl-ent">body</span>&gt;
		&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>js/commons.js<span class="pl-pds">"</span></span> <span class="pl-e">charset</span>=<span class="pl-s"><span class="pl-pds">"</span>utf-8<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
		&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>js/pageA.bundle.js<span class="pl-pds">"</span></span> <span class="pl-e">charset</span>=<span class="pl-s"><span class="pl-pds">"</span>utf-8<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
	&lt;/<span class="pl-ent">body</span>&gt;
&lt;/<span class="pl-ent">html</span>&gt;</pre></div>
<h1><a id="user-content-distcommonsjs" class="anchor" aria-hidden="true" href="#distcommonsjs"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>dist/commons.js</h1>
<div class="highlight highlight-source-js"><pre>(<span class="pl-c1">window</span>[<span class="pl-s"><span class="pl-pds">"</span>webpackJsonp<span class="pl-pds">"</span></span>] <span class="pl-k">=</span> <span class="pl-c1">window</span>[<span class="pl-s"><span class="pl-pds">"</span>webpackJsonp<span class="pl-pds">"</span></span>] <span class="pl-k">||</span> []).<span class="pl-c1">push</span>([[<span class="pl-c1">351</span>],[
<span class="pl-c"><span class="pl-c">/*</span> 0 <span class="pl-c">*/</span></span>,
<span class="pl-c"><span class="pl-c">/*</span> 1 <span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/*</span>!*******************!*\</span>
<span class="pl-c">  !*** ./common.js ***!</span>
<span class="pl-c">  \******************<span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/*</span>! exports [maybe provided (runtime-defined)] [no usage info] <span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/*</span>! runtime requirements: module <span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/**</span><span class="pl-c">*/</span></span> ((<span class="pl-c1">module</span>) <span class="pl-k">=&gt;</span> {

<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Common<span class="pl-pds">"</span></span>;

<span class="pl-c"><span class="pl-c">/**</span><span class="pl-c">*/</span></span> })
]]);</pre></div>
<h1><a id="user-content-distpageajs" class="anchor" aria-hidden="true" href="#distpageajs"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>dist/pageA.js</h1>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> (() <span class="pl-k">=&gt;</span> { <span class="pl-c"><span class="pl-c">//</span> webpackBootstrap</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-k">var</span> __webpack_modules__ <span class="pl-k">=</span> ([
<span class="pl-c"><span class="pl-c">/*</span> 0 <span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/*</span>!******************!*\</span>
<span class="pl-c">  !*** ./pageA.js ***!</span>
<span class="pl-c">  \*****************<span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/*</span>! exports [maybe provided (runtime-defined)] [no usage info] <span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/*</span>! runtime requirements: __webpack_require__, __webpack_require__.e, __webpack_require__.oe, __webpack_require__.* <span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/**</span><span class="pl-c">*/</span></span> ((<span class="pl-smi">__unused_webpack_module</span>, <span class="pl-smi">__unused_webpack_exports</span>, <span class="pl-smi">__webpack_require__</span>) <span class="pl-k">=&gt;</span> {

<span class="pl-k">var</span> common <span class="pl-k">=</span> <span class="pl-en">__webpack_require__</span>(<span class="pl-c"><span class="pl-c">/*</span>! ./common <span class="pl-c">*/</span></span> <span class="pl-c1">1</span>);
<span class="pl-smi">__webpack_require__</span>.<span class="pl-en">e</span>(<span class="pl-c"><span class="pl-c">/*</span>! AMD require <span class="pl-c">*/</span></span> <span class="pl-c1">52</span>).<span class="pl-c1">then</span>(<span class="pl-k">function</span>() { <span class="pl-k">var</span> <span class="pl-c1">__WEBPACK_AMD_REQUIRE_ARRAY__</span> <span class="pl-k">=</span> [<span class="pl-en">__webpack_require__</span>(<span class="pl-c"><span class="pl-c">/*</span>! ./shared <span class="pl-c">*/</span></span> <span class="pl-c1">3</span>)]; (<span class="pl-k">function</span>(<span class="pl-smi">shared</span>) {
	<span class="pl-en">shared</span>(<span class="pl-s"><span class="pl-pds">"</span>This is page A<span class="pl-pds">"</span></span>);
}).<span class="pl-c1">apply</span>(<span class="pl-c1">null</span>, <span class="pl-c1">__WEBPACK_AMD_REQUIRE_ARRAY__</span>);}).<span class="pl-c1">catch</span>(<span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">oe</span>);

<span class="pl-c"><span class="pl-c">/**</span><span class="pl-c">*/</span></span> })
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	]);
<span class="pl-c"><span class="pl-c">/**</span>*********************************************************************<span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-c"><span class="pl-c">//</span> The module cache</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-k">var</span> __webpack_module_cache__ <span class="pl-k">=</span> {};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-c"><span class="pl-c">//</span> The require function</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-k">function</span> <span class="pl-en">__webpack_require__</span>(<span class="pl-smi">moduleId</span>) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> Check if module is in cache</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">if</span>(__webpack_module_cache__[moduleId]) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">return</span> __webpack_module_cache__[moduleId].<span class="pl-smi">exports</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> Create a new module (and put it into the cache)</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">var</span> <span class="pl-c1">module</span> <span class="pl-k">=</span> __webpack_module_cache__[moduleId] <span class="pl-k">=</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			i<span class="pl-k">:</span> moduleId,
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			l<span class="pl-k">:</span> <span class="pl-c1">false</span>,
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			exports<span class="pl-k">:</span> {}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> Execute the module function</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		__webpack_modules__[moduleId](<span class="pl-c1">module</span>, <span class="pl-c1">module</span>.<span class="pl-smi">exports</span>, __webpack_require__);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> Flag the module as loaded</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c1">module</span>.<span class="pl-smi">l</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> Return the exports of the module</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">return</span> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-c"><span class="pl-c">//</span> expose the modules object (__webpack_modules__)</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">m</span> <span class="pl-k">=</span> __webpack_modules__;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	
<span class="pl-c"><span class="pl-c">/**</span>*********************************************************************<span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-c"><span class="pl-c">/*</span> webpack/runtime/ensure chunk <span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-k">!</span><span class="pl-k">function</span>() {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">f</span> <span class="pl-k">=</span> {};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> This file contains only the entry chunk.</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> The chunk loading function for additional chunks</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-smi">__webpack_require__</span>.<span class="pl-en">e</span> <span class="pl-k">=</span> (<span class="pl-smi">chunkId</span>) <span class="pl-k">=&gt;</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">return</span> <span class="pl-c1">Promise</span>.<span class="pl-c1">all</span>(<span class="pl-c1">Object</span>.<span class="pl-c1">keys</span>(<span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">f</span>).<span class="pl-en">reduce</span>((<span class="pl-smi">promises</span>, <span class="pl-smi">key</span>) <span class="pl-k">=&gt;</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">f</span>[key](chunkId, promises);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-k">return</span> promises;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			}, []));
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	}();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-c"><span class="pl-c">/*</span> webpack/runtime/publicPath <span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-k">!</span><span class="pl-k">function</span>() {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">p</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>dist/<span class="pl-pds">"</span></span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	}();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-c"><span class="pl-c">/*</span> webpack/runtime/get javascript chunk filename <span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-k">!</span><span class="pl-k">function</span>() {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> This function allow to reference async chunks</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-smi">__webpack_require__</span>.<span class="pl-en">u</span> <span class="pl-k">=</span> (<span class="pl-smi">chunkId</span>) <span class="pl-k">=&gt;</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-c"><span class="pl-c">//</span> return url for filenames based on template</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span> <span class="pl-k">+</span> chunkId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>.js<span class="pl-pds">"</span></span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	}();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-c"><span class="pl-c">/*</span> webpack/runtime/jsonp chunk loading <span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-k">!</span><span class="pl-k">function</span>() {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> object to store loaded and loading chunks</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> undefined = chunk not loaded, null = chunk preloaded/prefetched</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> Promise = chunk loading, 0 = chunk loaded</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">var</span> installedChunks <span class="pl-k">=</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-c1">424</span><span class="pl-k">:</span> <span class="pl-c1">0</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">var</span> deferredModules <span class="pl-k">=</span> [
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			[<span class="pl-c1">0</span>,<span class="pl-c1">351</span>]
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">f</span>.<span class="pl-en">j</span> <span class="pl-k">=</span> (<span class="pl-smi">chunkId</span>, <span class="pl-smi">promises</span>) <span class="pl-k">=&gt;</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-c"><span class="pl-c">//</span> JSONP chunk loading for javascript</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-k">var</span> installedChunkData <span class="pl-k">=</span> <span class="pl-c1">Object</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">hasOwnProperty</span>.<span class="pl-c1">call</span>(installedChunks, chunkId) <span class="pl-k">?</span> installedChunks[chunkId] <span class="pl-k">:</span> <span class="pl-c1">undefined</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-k">if</span>(installedChunkData <span class="pl-k">!==</span> <span class="pl-c1">0</span>) { <span class="pl-c"><span class="pl-c">//</span> 0 means "already installed".</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 					<span class="pl-c"><span class="pl-c">//</span> a Promise means "currently loading".</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 					<span class="pl-k">if</span>(installedChunkData) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 						<span class="pl-smi">promises</span>.<span class="pl-c1">push</span>(installedChunkData[<span class="pl-c1">2</span>]);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 					} <span class="pl-k">else</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 						<span class="pl-k">if</span>(<span class="pl-c1">true</span>) { <span class="pl-c"><span class="pl-c">//</span> all chunks have JS</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-c"><span class="pl-c">//</span> setup Promise in chunk cache</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-k">var</span> promise <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Promise</span>((<span class="pl-smi">resolve</span>, <span class="pl-smi">reject</span>) <span class="pl-k">=&gt;</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								installedChunkData <span class="pl-k">=</span> installedChunks[chunkId] <span class="pl-k">=</span> [resolve, reject];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							});
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-smi">promises</span>.<span class="pl-c1">push</span>(installedChunkData[<span class="pl-c1">2</span>] <span class="pl-k">=</span> promise);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-c"><span class="pl-c">//</span> start chunk loading</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-k">var</span> url <span class="pl-k">=</span> <span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">p</span> <span class="pl-k">+</span> <span class="pl-smi">__webpack_require__</span>.<span class="pl-en">u</span>(chunkId);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-k">var</span> <span class="pl-en">loadingEnded</span> <span class="pl-k">=</span> () <span class="pl-k">=&gt;</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								<span class="pl-k">if</span>(<span class="pl-c1">Object</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">hasOwnProperty</span>.<span class="pl-c1">call</span>(installedChunks, chunkId) <span class="pl-k">&amp;&amp;</span> installedChunks[chunkId]) <span class="pl-k">return</span> installedChunks[chunkId][<span class="pl-c1">1</span>];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								<span class="pl-k">if</span>(installedChunks[chunkId] <span class="pl-k">!==</span> <span class="pl-c1">0</span>) installedChunks[chunkId] <span class="pl-k">=</span> <span class="pl-c1">undefined</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-k">var</span> script <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">'</span>script<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-k">var</span> onScriptComplete;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-smi">script</span>.<span class="pl-c1">charset</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>utf-8<span class="pl-pds">'</span></span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-smi">script</span>.<span class="pl-smi">timeout</span> <span class="pl-k">=</span> <span class="pl-c1">120</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-k">if</span> (<span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">nc</span>) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								<span class="pl-smi">script</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">"</span>nonce<span class="pl-pds">"</span></span>, <span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">nc</span>);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-smi">script</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> url;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-c"><span class="pl-c">//</span> create error before stack unwound to get useful stacktrace later</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-k">var</span> error <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-en">onScriptComplete</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-c1">event</span>) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								<span class="pl-c"><span class="pl-c">//</span> avoid mem leaks in IE.</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								<span class="pl-smi">script</span>.<span class="pl-smi">onerror</span> <span class="pl-k">=</span> <span class="pl-smi">script</span>.<span class="pl-smi">onload</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								<span class="pl-c1">clearTimeout</span>(timeout);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								<span class="pl-k">var</span> reportError <span class="pl-k">=</span> <span class="pl-en">loadingEnded</span>();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								<span class="pl-k">if</span>(reportError) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 									<span class="pl-k">var</span> errorType <span class="pl-k">=</span> <span class="pl-c1">event</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-c1">event</span>.<span class="pl-c1">type</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">'</span>load<span class="pl-pds">'</span></span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">'</span>missing<span class="pl-pds">'</span></span> <span class="pl-k">:</span> <span class="pl-c1">event</span>.<span class="pl-c1">type</span>);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 									<span class="pl-k">var</span> realSrc <span class="pl-k">=</span> <span class="pl-c1">event</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">event</span>.<span class="pl-c1">target</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">event</span>.<span class="pl-c1">target</span>.<span class="pl-smi">src</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 									<span class="pl-smi">error</span>.<span class="pl-smi">message</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>Loading chunk <span class="pl-pds">'</span></span> <span class="pl-k">+</span> chunkId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span> failed.<span class="pl-cce">\n</span>(<span class="pl-pds">'</span></span> <span class="pl-k">+</span> errorType <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>: <span class="pl-pds">'</span></span> <span class="pl-k">+</span> realSrc <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>)<span class="pl-pds">'</span></span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 									<span class="pl-smi">error</span>.<span class="pl-c1">name</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>ChunkLoadError<span class="pl-pds">'</span></span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 									<span class="pl-smi">error</span>.<span class="pl-c1">type</span> <span class="pl-k">=</span> errorType;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 									<span class="pl-smi">error</span>.<span class="pl-smi">request</span> <span class="pl-k">=</span> realSrc;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 									<span class="pl-en">reportError</span>(error);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-k">var</span> timeout <span class="pl-k">=</span> <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>(){
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								<span class="pl-en">onScriptComplete</span>({ type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>timeout<span class="pl-pds">'</span></span>, target<span class="pl-k">:</span> script });
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							}, <span class="pl-c1">120000</span>);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-smi">script</span>.<span class="pl-smi">onerror</span> <span class="pl-k">=</span> <span class="pl-smi">script</span>.<span class="pl-smi">onload</span> <span class="pl-k">=</span> onScriptComplete;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-c1">document</span>.<span class="pl-smi">head</span>.<span class="pl-c1">appendChild</span>(script);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 						} <span class="pl-k">else</span> installedChunks[chunkId] <span class="pl-k">=</span> <span class="pl-c1">0</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 						<span class="pl-c"><span class="pl-c">//</span> no HMR</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 					}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-c"><span class="pl-c">//</span> no chunk preloading needed</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> no prefetching</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> no HMR</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> no HMR manifest</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">var</span> <span class="pl-en">checkDeferredModules</span> <span class="pl-k">=</span> () <span class="pl-k">=&gt;</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">function</span> <span class="pl-en">checkDeferredModulesImpl</span>() {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">var</span> result;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">for</span>(<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">deferredModules</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-k">var</span> deferredModule <span class="pl-k">=</span> deferredModules[i];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-k">var</span> fulfilled <span class="pl-k">=</span> <span class="pl-c1">true</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-k">for</span>(<span class="pl-k">var</span> j <span class="pl-k">=</span> <span class="pl-c1">1</span>; j <span class="pl-k">&lt;</span> <span class="pl-smi">deferredModule</span>.<span class="pl-c1">length</span>; j<span class="pl-k">++</span>) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 					<span class="pl-k">var</span> depId <span class="pl-k">=</span> deferredModule[j];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 					<span class="pl-k">if</span>(installedChunks[depId] <span class="pl-k">!==</span> <span class="pl-c1">0</span>) fulfilled <span class="pl-k">=</span> <span class="pl-c1">false</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-k">if</span>(fulfilled) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 					<span class="pl-smi">deferredModules</span>.<span class="pl-c1">splice</span>(i<span class="pl-k">--</span>, <span class="pl-c1">1</span>);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 					result <span class="pl-k">=</span> <span class="pl-en">__webpack_require__</span>(<span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">s</span> <span class="pl-k">=</span> deferredModule[<span class="pl-c1">0</span>]);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-c"><span class="pl-c">//</span> no prefetch</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">return</span> result;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-smi">__webpack_require__</span>.<span class="pl-en">x</span> <span class="pl-k">=</span> () <span class="pl-k">=&gt;</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">return</span> (checkDeferredModules <span class="pl-k">=</span> checkDeferredModulesImpl)();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> install a JSONP callback for chunk loading</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">function</span> <span class="pl-en">webpackJsonpCallback</span>(<span class="pl-smi">data</span>) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">var</span> chunkIds <span class="pl-k">=</span> data[<span class="pl-c1">0</span>];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">var</span> moreModules <span class="pl-k">=</span> data[<span class="pl-c1">1</span>];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">var</span> executeModules <span class="pl-k">=</span> data[<span class="pl-c1">2</span>];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">var</span> runtime <span class="pl-k">=</span> data[<span class="pl-c1">3</span>];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-c"><span class="pl-c">//</span> add "moreModules" to the modules object,</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-c"><span class="pl-c">//</span> then flag all "chunkIds" as loaded and fire callback</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">var</span> moduleId, chunkId, i <span class="pl-k">=</span> <span class="pl-c1">0</span>, resolves <span class="pl-k">=</span> [];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">for</span>(;i <span class="pl-k">&lt;</span> <span class="pl-smi">chunkIds</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				chunkId <span class="pl-k">=</span> chunkIds[i];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-k">if</span>(<span class="pl-c1">Object</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">hasOwnProperty</span>.<span class="pl-c1">call</span>(installedChunks, chunkId) <span class="pl-k">&amp;&amp;</span> installedChunks[chunkId]) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 					<span class="pl-smi">resolves</span>.<span class="pl-c1">push</span>(installedChunks[chunkId][<span class="pl-c1">0</span>]);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				installedChunks[chunkId] <span class="pl-k">=</span> <span class="pl-c1">0</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">for</span>(moduleId <span class="pl-k">in</span> moreModules) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-k">if</span>(<span class="pl-c1">Object</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">hasOwnProperty</span>.<span class="pl-c1">call</span>(moreModules, moduleId)) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 					<span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">m</span>[moduleId] <span class="pl-k">=</span> moreModules[moduleId];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">if</span>(runtime) <span class="pl-en">runtime</span>(__webpack_require__);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">if</span>(parentJsonpFunction) <span class="pl-en">parentJsonpFunction</span>(data);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">while</span>(<span class="pl-smi">resolves</span>.<span class="pl-c1">length</span>) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-smi">resolves</span>.<span class="pl-c1">shift</span>()();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-c"><span class="pl-c">//</span> add entry modules from loaded chunk to deferred list</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">if</span>(executeModules) <span class="pl-smi">deferredModules</span>.<span class="pl-smi">push</span>.<span class="pl-c1">apply</span>(deferredModules, executeModules);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-c"><span class="pl-c">//</span> run deferred modules when all chunks ready</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">return</span> <span class="pl-en">checkDeferredModules</span>();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">var</span> jsonpArray <span class="pl-k">=</span> <span class="pl-c1">window</span>[<span class="pl-s"><span class="pl-pds">"</span>webpackJsonp<span class="pl-pds">"</span></span>] <span class="pl-k">=</span> <span class="pl-c1">window</span>[<span class="pl-s"><span class="pl-pds">"</span>webpackJsonp<span class="pl-pds">"</span></span>] <span class="pl-k">||</span> [];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">var</span> oldJsonpFunction <span class="pl-k">=</span> <span class="pl-smi">jsonpArray</span>.<span class="pl-smi">push</span>.<span class="pl-en">bind</span>(jsonpArray);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-smi">jsonpArray</span>.<span class="pl-smi">push</span> <span class="pl-k">=</span> webpackJsonpCallback;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		jsonpArray <span class="pl-k">=</span> <span class="pl-smi">jsonpArray</span>.<span class="pl-c1">slice</span>();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">for</span>(<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">jsonpArray</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) <span class="pl-en">webpackJsonpCallback</span>(jsonpArray[i]);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">var</span> parentJsonpFunction <span class="pl-k">=</span> oldJsonpFunction;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	}();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	
<span class="pl-c"><span class="pl-c">/**</span>*********************************************************************<span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-c"><span class="pl-c">//</span> run startup</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-k">return</span> <span class="pl-smi">__webpack_require__</span>.<span class="pl-c1">x</span>();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> })()
;</pre></div>
<h1><a id="user-content-distpagebjs" class="anchor" aria-hidden="true" href="#distpagebjs"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>dist/pageB.js</h1>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> (() <span class="pl-k">=&gt;</span> { <span class="pl-c"><span class="pl-c">//</span> webpackBootstrap</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-k">var</span> __webpack_modules__ <span class="pl-k">=</span> ({

<span class="pl-c"><span class="pl-c">/**</span><span class="pl-c">*/</span></span> <span class="pl-c1">2</span><span class="pl-k">:</span>
<span class="pl-c"><span class="pl-c">/*</span>!******************!*\</span>
<span class="pl-c">  !*** ./pageB.js ***!</span>
<span class="pl-c">  \*****************<span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/*</span>! exports [maybe provided (runtime-defined)] [no usage info] <span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/*</span>! runtime requirements: __webpack_require__, __webpack_require__.e, __webpack_require__.* <span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/**</span><span class="pl-c">*/</span></span> ((<span class="pl-smi">__unused_webpack_module</span>, <span class="pl-smi">__unused_webpack_exports</span>, <span class="pl-smi">__webpack_require__</span>) <span class="pl-k">=&gt;</span> {

<span class="pl-k">var</span> common <span class="pl-k">=</span> <span class="pl-en">__webpack_require__</span>(<span class="pl-c"><span class="pl-c">/*</span>! ./common <span class="pl-c">*/</span></span> <span class="pl-c1">1</span>);
<span class="pl-smi">__webpack_require__</span>.<span class="pl-en">e</span>(<span class="pl-c"><span class="pl-c">/*</span>! require.ensure <span class="pl-c">*/</span></span> <span class="pl-c1">52</span>).<span class="pl-c1">then</span>((<span class="pl-k">function</span>(<span class="pl-smi">require</span>) {
	<span class="pl-k">var</span> shared <span class="pl-k">=</span> <span class="pl-en">__webpack_require__</span>(<span class="pl-c"><span class="pl-c">/*</span>! ./shared <span class="pl-c">*/</span></span> <span class="pl-c1">3</span>);
	<span class="pl-en">shared</span>(<span class="pl-s"><span class="pl-pds">"</span>This is page B<span class="pl-pds">"</span></span>);
}).<span class="pl-en">bind</span>(<span class="pl-c1">null</span>, __webpack_require__)).<span class="pl-c1">catch</span>(<span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">oe</span>);

<span class="pl-c"><span class="pl-c">/**</span><span class="pl-c">*/</span></span> })

<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	});
<span class="pl-c"><span class="pl-c">/**</span>*********************************************************************<span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-c"><span class="pl-c">//</span> The module cache</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-k">var</span> __webpack_module_cache__ <span class="pl-k">=</span> {};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-c"><span class="pl-c">//</span> The require function</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-k">function</span> <span class="pl-en">__webpack_require__</span>(<span class="pl-smi">moduleId</span>) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> Check if module is in cache</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">if</span>(__webpack_module_cache__[moduleId]) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">return</span> __webpack_module_cache__[moduleId].<span class="pl-smi">exports</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> Create a new module (and put it into the cache)</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">var</span> <span class="pl-c1">module</span> <span class="pl-k">=</span> __webpack_module_cache__[moduleId] <span class="pl-k">=</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			i<span class="pl-k">:</span> moduleId,
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			l<span class="pl-k">:</span> <span class="pl-c1">false</span>,
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			exports<span class="pl-k">:</span> {}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> Execute the module function</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		__webpack_modules__[moduleId](<span class="pl-c1">module</span>, <span class="pl-c1">module</span>.<span class="pl-smi">exports</span>, __webpack_require__);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> Flag the module as loaded</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c1">module</span>.<span class="pl-smi">l</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> Return the exports of the module</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">return</span> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-c"><span class="pl-c">//</span> expose the modules object (__webpack_modules__)</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">m</span> <span class="pl-k">=</span> __webpack_modules__;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	
<span class="pl-c"><span class="pl-c">/**</span>*********************************************************************<span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-c"><span class="pl-c">/*</span> webpack/runtime/ensure chunk <span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-k">!</span><span class="pl-k">function</span>() {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">f</span> <span class="pl-k">=</span> {};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> This file contains only the entry chunk.</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> The chunk loading function for additional chunks</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-smi">__webpack_require__</span>.<span class="pl-en">e</span> <span class="pl-k">=</span> (<span class="pl-smi">chunkId</span>) <span class="pl-k">=&gt;</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">return</span> <span class="pl-c1">Promise</span>.<span class="pl-c1">all</span>(<span class="pl-c1">Object</span>.<span class="pl-c1">keys</span>(<span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">f</span>).<span class="pl-en">reduce</span>((<span class="pl-smi">promises</span>, <span class="pl-smi">key</span>) <span class="pl-k">=&gt;</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">f</span>[key](chunkId, promises);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-k">return</span> promises;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			}, []));
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	}();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-c"><span class="pl-c">/*</span> webpack/runtime/publicPath <span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-k">!</span><span class="pl-k">function</span>() {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">p</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>dist/<span class="pl-pds">"</span></span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	}();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-c"><span class="pl-c">/*</span> webpack/runtime/get javascript chunk filename <span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-k">!</span><span class="pl-k">function</span>() {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> This function allow to reference async chunks</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-smi">__webpack_require__</span>.<span class="pl-en">u</span> <span class="pl-k">=</span> (<span class="pl-smi">chunkId</span>) <span class="pl-k">=&gt;</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-c"><span class="pl-c">//</span> return url for filenames based on template</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span> <span class="pl-k">+</span> chunkId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>.js<span class="pl-pds">"</span></span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	}();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-c"><span class="pl-c">/*</span> webpack/runtime/jsonp chunk loading <span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-k">!</span><span class="pl-k">function</span>() {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> object to store loaded and loading chunks</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> undefined = chunk not loaded, null = chunk preloaded/prefetched</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> Promise = chunk loading, 0 = chunk loaded</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">var</span> installedChunks <span class="pl-k">=</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-c1">121</span><span class="pl-k">:</span> <span class="pl-c1">0</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">var</span> deferredModules <span class="pl-k">=</span> [
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			[<span class="pl-c1">2</span>,<span class="pl-c1">351</span>]
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">f</span>.<span class="pl-en">j</span> <span class="pl-k">=</span> (<span class="pl-smi">chunkId</span>, <span class="pl-smi">promises</span>) <span class="pl-k">=&gt;</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-c"><span class="pl-c">//</span> JSONP chunk loading for javascript</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-k">var</span> installedChunkData <span class="pl-k">=</span> <span class="pl-c1">Object</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">hasOwnProperty</span>.<span class="pl-c1">call</span>(installedChunks, chunkId) <span class="pl-k">?</span> installedChunks[chunkId] <span class="pl-k">:</span> <span class="pl-c1">undefined</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-k">if</span>(installedChunkData <span class="pl-k">!==</span> <span class="pl-c1">0</span>) { <span class="pl-c"><span class="pl-c">//</span> 0 means "already installed".</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 					<span class="pl-c"><span class="pl-c">//</span> a Promise means "currently loading".</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 					<span class="pl-k">if</span>(installedChunkData) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 						<span class="pl-smi">promises</span>.<span class="pl-c1">push</span>(installedChunkData[<span class="pl-c1">2</span>]);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 					} <span class="pl-k">else</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 						<span class="pl-k">if</span>(<span class="pl-c1">true</span>) { <span class="pl-c"><span class="pl-c">//</span> all chunks have JS</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-c"><span class="pl-c">//</span> setup Promise in chunk cache</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-k">var</span> promise <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Promise</span>((<span class="pl-smi">resolve</span>, <span class="pl-smi">reject</span>) <span class="pl-k">=&gt;</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								installedChunkData <span class="pl-k">=</span> installedChunks[chunkId] <span class="pl-k">=</span> [resolve, reject];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							});
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-smi">promises</span>.<span class="pl-c1">push</span>(installedChunkData[<span class="pl-c1">2</span>] <span class="pl-k">=</span> promise);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-c"><span class="pl-c">//</span> start chunk loading</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-k">var</span> url <span class="pl-k">=</span> <span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">p</span> <span class="pl-k">+</span> <span class="pl-smi">__webpack_require__</span>.<span class="pl-en">u</span>(chunkId);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-k">var</span> <span class="pl-en">loadingEnded</span> <span class="pl-k">=</span> () <span class="pl-k">=&gt;</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								<span class="pl-k">if</span>(<span class="pl-c1">Object</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">hasOwnProperty</span>.<span class="pl-c1">call</span>(installedChunks, chunkId) <span class="pl-k">&amp;&amp;</span> installedChunks[chunkId]) <span class="pl-k">return</span> installedChunks[chunkId][<span class="pl-c1">1</span>];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								<span class="pl-k">if</span>(installedChunks[chunkId] <span class="pl-k">!==</span> <span class="pl-c1">0</span>) installedChunks[chunkId] <span class="pl-k">=</span> <span class="pl-c1">undefined</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-k">var</span> script <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">'</span>script<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-k">var</span> onScriptComplete;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-smi">script</span>.<span class="pl-c1">charset</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>utf-8<span class="pl-pds">'</span></span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-smi">script</span>.<span class="pl-smi">timeout</span> <span class="pl-k">=</span> <span class="pl-c1">120</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-k">if</span> (<span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">nc</span>) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								<span class="pl-smi">script</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">"</span>nonce<span class="pl-pds">"</span></span>, <span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">nc</span>);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-smi">script</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> url;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-c"><span class="pl-c">//</span> create error before stack unwound to get useful stacktrace later</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-k">var</span> error <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-en">onScriptComplete</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-c1">event</span>) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								<span class="pl-c"><span class="pl-c">//</span> avoid mem leaks in IE.</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								<span class="pl-smi">script</span>.<span class="pl-smi">onerror</span> <span class="pl-k">=</span> <span class="pl-smi">script</span>.<span class="pl-smi">onload</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								<span class="pl-c1">clearTimeout</span>(timeout);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								<span class="pl-k">var</span> reportError <span class="pl-k">=</span> <span class="pl-en">loadingEnded</span>();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								<span class="pl-k">if</span>(reportError) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 									<span class="pl-k">var</span> errorType <span class="pl-k">=</span> <span class="pl-c1">event</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-c1">event</span>.<span class="pl-c1">type</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">'</span>load<span class="pl-pds">'</span></span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">'</span>missing<span class="pl-pds">'</span></span> <span class="pl-k">:</span> <span class="pl-c1">event</span>.<span class="pl-c1">type</span>);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 									<span class="pl-k">var</span> realSrc <span class="pl-k">=</span> <span class="pl-c1">event</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">event</span>.<span class="pl-c1">target</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">event</span>.<span class="pl-c1">target</span>.<span class="pl-smi">src</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 									<span class="pl-smi">error</span>.<span class="pl-smi">message</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>Loading chunk <span class="pl-pds">'</span></span> <span class="pl-k">+</span> chunkId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span> failed.<span class="pl-cce">\n</span>(<span class="pl-pds">'</span></span> <span class="pl-k">+</span> errorType <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>: <span class="pl-pds">'</span></span> <span class="pl-k">+</span> realSrc <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>)<span class="pl-pds">'</span></span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 									<span class="pl-smi">error</span>.<span class="pl-c1">name</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>ChunkLoadError<span class="pl-pds">'</span></span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 									<span class="pl-smi">error</span>.<span class="pl-c1">type</span> <span class="pl-k">=</span> errorType;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 									<span class="pl-smi">error</span>.<span class="pl-smi">request</span> <span class="pl-k">=</span> realSrc;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 									<span class="pl-en">reportError</span>(error);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-k">var</span> timeout <span class="pl-k">=</span> <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>(){
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 								<span class="pl-en">onScriptComplete</span>({ type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>timeout<span class="pl-pds">'</span></span>, target<span class="pl-k">:</span> script });
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							}, <span class="pl-c1">120000</span>);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-smi">script</span>.<span class="pl-smi">onerror</span> <span class="pl-k">=</span> <span class="pl-smi">script</span>.<span class="pl-smi">onload</span> <span class="pl-k">=</span> onScriptComplete;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 							<span class="pl-c1">document</span>.<span class="pl-smi">head</span>.<span class="pl-c1">appendChild</span>(script);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 						} <span class="pl-k">else</span> installedChunks[chunkId] <span class="pl-k">=</span> <span class="pl-c1">0</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 						<span class="pl-c"><span class="pl-c">//</span> no HMR</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 					}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-c"><span class="pl-c">//</span> no chunk preloading needed</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> no prefetching</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> no HMR</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> no HMR manifest</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">var</span> <span class="pl-en">checkDeferredModules</span> <span class="pl-k">=</span> () <span class="pl-k">=&gt;</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">function</span> <span class="pl-en">checkDeferredModulesImpl</span>() {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">var</span> result;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">for</span>(<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">deferredModules</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-k">var</span> deferredModule <span class="pl-k">=</span> deferredModules[i];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-k">var</span> fulfilled <span class="pl-k">=</span> <span class="pl-c1">true</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-k">for</span>(<span class="pl-k">var</span> j <span class="pl-k">=</span> <span class="pl-c1">1</span>; j <span class="pl-k">&lt;</span> <span class="pl-smi">deferredModule</span>.<span class="pl-c1">length</span>; j<span class="pl-k">++</span>) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 					<span class="pl-k">var</span> depId <span class="pl-k">=</span> deferredModule[j];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 					<span class="pl-k">if</span>(installedChunks[depId] <span class="pl-k">!==</span> <span class="pl-c1">0</span>) fulfilled <span class="pl-k">=</span> <span class="pl-c1">false</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-k">if</span>(fulfilled) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 					<span class="pl-smi">deferredModules</span>.<span class="pl-c1">splice</span>(i<span class="pl-k">--</span>, <span class="pl-c1">1</span>);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 					result <span class="pl-k">=</span> <span class="pl-en">__webpack_require__</span>(<span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">s</span> <span class="pl-k">=</span> deferredModule[<span class="pl-c1">0</span>]);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-c"><span class="pl-c">//</span> no prefetch</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">return</span> result;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-smi">__webpack_require__</span>.<span class="pl-en">x</span> <span class="pl-k">=</span> () <span class="pl-k">=&gt;</span> {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">return</span> (checkDeferredModules <span class="pl-k">=</span> checkDeferredModulesImpl)();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-c"><span class="pl-c">//</span> install a JSONP callback for chunk loading</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">function</span> <span class="pl-en">webpackJsonpCallback</span>(<span class="pl-smi">data</span>) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">var</span> chunkIds <span class="pl-k">=</span> data[<span class="pl-c1">0</span>];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">var</span> moreModules <span class="pl-k">=</span> data[<span class="pl-c1">1</span>];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">var</span> executeModules <span class="pl-k">=</span> data[<span class="pl-c1">2</span>];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">var</span> runtime <span class="pl-k">=</span> data[<span class="pl-c1">3</span>];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-c"><span class="pl-c">//</span> add "moreModules" to the modules object,</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-c"><span class="pl-c">//</span> then flag all "chunkIds" as loaded and fire callback</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">var</span> moduleId, chunkId, i <span class="pl-k">=</span> <span class="pl-c1">0</span>, resolves <span class="pl-k">=</span> [];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">for</span>(;i <span class="pl-k">&lt;</span> <span class="pl-smi">chunkIds</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				chunkId <span class="pl-k">=</span> chunkIds[i];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-k">if</span>(<span class="pl-c1">Object</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">hasOwnProperty</span>.<span class="pl-c1">call</span>(installedChunks, chunkId) <span class="pl-k">&amp;&amp;</span> installedChunks[chunkId]) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 					<span class="pl-smi">resolves</span>.<span class="pl-c1">push</span>(installedChunks[chunkId][<span class="pl-c1">0</span>]);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				installedChunks[chunkId] <span class="pl-k">=</span> <span class="pl-c1">0</span>;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">for</span>(moduleId <span class="pl-k">in</span> moreModules) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-k">if</span>(<span class="pl-c1">Object</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">hasOwnProperty</span>.<span class="pl-c1">call</span>(moreModules, moduleId)) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 					<span class="pl-smi">__webpack_require__</span>.<span class="pl-smi">m</span>[moduleId] <span class="pl-k">=</span> moreModules[moduleId];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">if</span>(runtime) <span class="pl-en">runtime</span>(__webpack_require__);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">if</span>(parentJsonpFunction) <span class="pl-en">parentJsonpFunction</span>(data);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">while</span>(<span class="pl-smi">resolves</span>.<span class="pl-c1">length</span>) {
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 				<span class="pl-smi">resolves</span>.<span class="pl-c1">shift</span>()();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			}
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-c"><span class="pl-c">//</span> add entry modules from loaded chunk to deferred list</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">if</span>(executeModules) <span class="pl-smi">deferredModules</span>.<span class="pl-smi">push</span>.<span class="pl-c1">apply</span>(deferredModules, executeModules);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-c"><span class="pl-c">//</span> run deferred modules when all chunks ready</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 			<span class="pl-k">return</span> <span class="pl-en">checkDeferredModules</span>();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		};
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">var</span> jsonpArray <span class="pl-k">=</span> <span class="pl-c1">window</span>[<span class="pl-s"><span class="pl-pds">"</span>webpackJsonp<span class="pl-pds">"</span></span>] <span class="pl-k">=</span> <span class="pl-c1">window</span>[<span class="pl-s"><span class="pl-pds">"</span>webpackJsonp<span class="pl-pds">"</span></span>] <span class="pl-k">||</span> [];
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">var</span> oldJsonpFunction <span class="pl-k">=</span> <span class="pl-smi">jsonpArray</span>.<span class="pl-smi">push</span>.<span class="pl-en">bind</span>(jsonpArray);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-smi">jsonpArray</span>.<span class="pl-smi">push</span> <span class="pl-k">=</span> webpackJsonpCallback;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		jsonpArray <span class="pl-k">=</span> <span class="pl-smi">jsonpArray</span>.<span class="pl-c1">slice</span>();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">for</span>(<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">jsonpArray</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) <span class="pl-en">webpackJsonpCallback</span>(jsonpArray[i]);
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 		<span class="pl-k">var</span> parentJsonpFunction <span class="pl-k">=</span> oldJsonpFunction;
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	}();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	
<span class="pl-c"><span class="pl-c">/**</span>*********************************************************************<span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-c"><span class="pl-c">//</span> run startup</span>
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> 	<span class="pl-k">return</span> <span class="pl-smi">__webpack_require__</span>.<span class="pl-c1">x</span>();
<span class="pl-c"><span class="pl-c">/**</span>***<span class="pl-c">*/</span></span> })()
;</pre></div>
<h1><a id="user-content-dist52js" class="anchor" aria-hidden="true" href="#dist52js"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>dist/52.js</h1>
<div class="highlight highlight-source-js"><pre>(<span class="pl-c1">window</span>[<span class="pl-s"><span class="pl-pds">"</span>webpackJsonp<span class="pl-pds">"</span></span>] <span class="pl-k">=</span> <span class="pl-c1">window</span>[<span class="pl-s"><span class="pl-pds">"</span>webpackJsonp<span class="pl-pds">"</span></span>] <span class="pl-k">||</span> []).<span class="pl-c1">push</span>([[<span class="pl-c1">52</span>],{

<span class="pl-c"><span class="pl-c">/**</span><span class="pl-c">*/</span></span> <span class="pl-c1">3</span><span class="pl-k">:</span>
<span class="pl-c"><span class="pl-c">/*</span>!*******************!*\</span>
<span class="pl-c">  !*** ./shared.js ***!</span>
<span class="pl-c">  \******************<span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/*</span>! exports [maybe provided (runtime-defined)] [no usage info] <span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/*</span>! runtime requirements: __webpack_require__, module <span class="pl-c">*/</span></span>
<span class="pl-c"><span class="pl-c">/**</span><span class="pl-c">*/</span></span> ((<span class="pl-c1">module</span>, <span class="pl-smi">__unused_webpack_exports</span>, <span class="pl-smi">__webpack_require__</span>) <span class="pl-k">=&gt;</span> {

<span class="pl-k">var</span> common <span class="pl-k">=</span> <span class="pl-en">__webpack_require__</span>(<span class="pl-c"><span class="pl-c">/*</span>! ./common <span class="pl-c">*/</span></span> <span class="pl-c1">1</span>);
<span class="pl-c1">module</span>.<span class="pl-en">exports</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">msg</span>) {
	<span class="pl-en">console</span>.<span class="pl-c1">log</span>(msg);
};

<span class="pl-c"><span class="pl-c">/**</span><span class="pl-c">*/</span></span> })

}]);</pre></div>
<h1><a id="user-content-info" class="anchor" aria-hidden="true" href="#info"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Info</h1>
<h2><a id="user-content-unoptimized" class="anchor" aria-hidden="true" href="#unoptimized"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Unoptimized</h2>
<pre><code>Hash: 0a1b2c3d4e5f6a7b8c9d
Version: webpack 5.0.0-alpha.31
     Asset       Size
     52.js  468 bytes  [emitted]
commons.js  326 bytes  [emitted]  [name: commons] [id hint: commons]
  pageA.js   9.27 KiB  [emitted]  [name: pageA]
  pageB.js   9.21 KiB  [emitted]  [name: pageB]
Entrypoint pageA = commons.js pageA.js
Entrypoint pageB = commons.js pageB.js
chunk 52.js 88 bytes [rendered]
    &gt; ./shared ./pageA.js 2:0-4:2
    &gt; ./pageB.js 2:0-5:2
 ./shared.js 88 bytes [built]
     [used exports unknown]
     amd require ./shared ./pageA.js 2:0-4:2
     require.ensure item ./shared ./pageB.js 2:0-5:2
     cjs require ./shared ./pageB.js 3:14-33
chunk pageB.js (pageB) 148 bytes (javascript) 5.07 KiB (runtime) [entry] [rendered]
    &gt; ./pageB pageB
 ./pageB.js 148 bytes [built]
     [used exports unknown]
     entry ./pageB pageB
     + 4 hidden chunk modules
chunk commons.js (commons) (id hint: commons) 26 bytes [initial] [rendered] split chunk (cache group: commons) (name: commons)
    &gt; ./pageA pageA
    &gt; ./pageB pageB
 ./common.js 26 bytes [built]
     [used exports unknown]
     cjs require ./common ./pageA.js 1:13-32
     cjs require ./common ./pageB.js 1:13-32
     cjs require ./common ./shared.js 1:13-32
chunk pageA.js (pageA) 105 bytes (javascript) 5.07 KiB (runtime) [entry] [rendered]
    &gt; ./pageA pageA
 ./pageA.js 105 bytes [built]
     [used exports unknown]
     entry ./pageA pageA
     + 4 hidden chunk modules
</code></pre>
<h2><a id="user-content-production-mode" class="anchor" aria-hidden="true" href="#production-mode"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Production mode</h2>
<pre><code>Hash: 0a1b2c3d4e5f6a7b8c9d
Version: webpack 5.0.0-alpha.31
     Asset       Size
     52.js  120 bytes  [emitted]
commons.js   90 bytes  [emitted]  [name: commons] [id hint: commons]
  pageA.js   1.76 KiB  [emitted]  [name: pageA]
  pageB.js   1.74 KiB  [emitted]  [name: pageB]
Entrypoint pageA = commons.js pageA.js
Entrypoint pageB = commons.js pageB.js
chunk 52.js 88 bytes [rendered]
    &gt; ./shared ./pageA.js 2:0-4:2
    &gt; ./pageB.js 2:0-5:2
 ./shared.js 88 bytes [built]
     amd require ./shared ./pageA.js 2:0-4:2
     require.ensure item ./shared ./pageB.js 2:0-5:2
     cjs require ./shared ./pageB.js 3:14-33
chunk pageB.js (pageB) 148 bytes (javascript) 5.08 KiB (runtime) [entry] [rendered]
    &gt; ./pageB pageB
 ./pageB.js 148 bytes [built]
     [no exports used]
     entry ./pageB pageB
     + 4 hidden chunk modules
chunk commons.js (commons) (id hint: commons) 26 bytes [initial] [rendered] split chunk (cache group: commons) (name: commons)
    &gt; ./pageA pageA
    &gt; ./pageB pageB
 ./common.js 26 bytes [built]
     cjs require ./common ./shared.js 1:13-32
     cjs require ./common ./pageA.js 1:13-32
     cjs require ./common ./pageB.js 1:13-32
chunk pageA.js (pageA) 105 bytes (javascript) 5.08 KiB (runtime) [entry] [rendered]
    &gt; ./pageA pageA
 ./pageA.js 105 bytes [built]
     [no exports used]
     entry ./pageA pageA
     + 4 hidden chunk modules
</code></pre>
</article>
  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>



  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2019 <span title="0.59438s from unicorn-677bc6cf6f-prsfh">GitHub</span>, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-OE1B2eygC9m/pwc7wJ2n3LQQIA2iZaG5GwgmYnlJnSVr5oU6dLvtC/GEBQ0gSkdOxi9d+Fgr4mgKH+Eh/g4QyA==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-5d05255b.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-2JLNi4+QYeFrJD385X4ggxovGj5JRtrvf3MM7aY04zwJNznziJvJrcxM0YYJ0SgL+hprx99TCpU7a4m+OREiaA==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-2f46c023.js"></script>
    
    
    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>
