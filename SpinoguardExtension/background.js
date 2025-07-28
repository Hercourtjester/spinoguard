const blockedKeywords = ["porn", "xxx", "nsfw", "rule34", "hentai", "xvideos", "xvideos2", "gelbooru"];

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = details.url.toLowerCase();
    for (let word of blockedKeywords) {
      if (url.includes(word)) {
        return {
          redirectUrl: "https://https://github.com/Hercourtjester/spinoguard.git/spinoguard.html"
        };
      }
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
