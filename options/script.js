const form = document.getElementById('options-form')
const blacklistTexteara = document.querySelector('[name=blacklist]')

const handleSubmit = (e) => {
  e.preventDefault()
  const rawBlacklist = blacklistTexteara.value
  const blacklist = rawBlacklist.split('\n')

  browser.storage.local.set({ blacklist })
}

const initialValue = browser.storage.local.get('blacklist')
  .then(({ blacklist }) => {
    const content = (blacklist || []).join('\n')
    blacklistTexteara.textContent = content
  })

form.addEventListener('submit', handleSubmit)
