chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  const badWords = ["porn", "xxx", "nsfw", "hentai", "rule34", "sex"];

  const url = details.url.toLowerCase();
  const shouldRedirect = badWords.some(word => url.includes(word));

  if (shouldRedirect) {
    chrome.tabs.update(details.tabId, {
      url: chrome.runtime.getURL("spinoguard.html")
    });
  }
}, {
  url: [
    { urlMatches: ".*" }
  ]
});

