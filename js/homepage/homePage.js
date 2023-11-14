function run() {
    const observer = new MutationObserver(() => {
        if (document.querySelector("#page-content-wrapper > div > div.flex-grow-1 > div.row.h-50.pb-4.zav-min-height > div.col.d-none.d-lg-flex.flex-column.fade-in.two > div > div > div:nth-child(1) > div.speech-bubble.bg-primary.h-50.text-white > span")) {
            observer.disconnect()
            document.querySelector("#page-content-wrapper > div > div.flex-grow-1 > div.row.h-50.pb-4.zav-min-height > div.col.d-none.d-lg-flex.flex-column.fade-in.two > div > div > div:nth-child(1) > div.speech-bubble.bg-primary.h-50.text-white > span").innerHTML = "Jsem Váš úhlavní nepřítel! :)"
        }
    })
    observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true })
}