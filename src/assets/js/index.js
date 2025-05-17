// ----------------------------------------
// アコーディオン
// ----------------------------------------
const setUpAccordion = () => {
  const details = document.querySelectorAll('.js-setUp-details')
  details.forEach((element) => {
    const summary = element.querySelector('.js-setUp-detailsSummary')
    const content = element.querySelector('.js-setUp-detailsContent')

    summary.addEventListener('click', (event) => {
      event.preventDefault()
      if (element.dataset.animStatus === 'running') {
        return
      }

      const isOpen = element.open
      const IS_OPENED_CLASS = 'is-opened'

      if (isOpen) {
        element.classList.toggle(IS_OPENED_CLASS)
        const closingAnim = content.animate(
          closingAnimKeyframes(content),
          animTiming
        )
        element.dataset.animStatus = 'running'
        closingAnim.onfinish = () => {
          element.removeAttribute('open')
          element.dataset.animStatus = ''
        }
      } else {
        element.setAttribute('open', 'true')
        element.classList.toggle(IS_OPENED_CLASS)
        const openingAnim = content.animate(
          openingAnimKeyframes(content),
          animTiming
        )
        element.dataset.animStatus = 'running'
        openingAnim.onfinish = () => {
          element.dataset.animStatus = ''
        }
      }
    })
  })
}

/* アニメーションの時間とイージング */
const animTiming = {
  duration: 300,
  easing: 'ease-out'
}

/* アコーディオンを閉じるときのキーフレーム */
const closingAnimKeyframes = (content) => [
  {
    height: content.offsetHeight + 'px', // height: "auto"だとうまく計算されないため要素の高さを指定する
    opacity: 1
  },
  {
    height: 0,
    opacity: 0
  }
]

/* アコーディオンを開くときのキーフレーム */
const openingAnimKeyframes = (content) => [
  {
    height: 0,
    opacity: 0
  },
  {
    height: content.offsetHeight + 'px',
    opacity: 1
  }
]

// ----------------------------------------
// initialize
// ----------------------------------------
function initialize() {
  if (window.matchMedia('(max-width: 999px)').matches) {
    setUpAccordion()
  }
}

initialize()
