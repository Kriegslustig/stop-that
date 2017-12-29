browser.tabs.onUpdated.addListener((tabId) => {
  Promise.all([
    browser.tabs.get(tabId),
    browser.storage.local.get('blacklist')
  ])
    .then(([ tab, { blacklist } ]) =>
      blacklist
        .filter((blacklistedUrl) => tab.url.includes(blacklistedUrl))
        .length
          ? browser.tabs.remove(tabId)
          : null
    )
    .catch((err) => console.error(err))
})
