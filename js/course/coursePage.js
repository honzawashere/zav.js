function run() {
    const observer = new MutationObserver(() => {
        if (document.querySelector("#textInput > div.ql-editor > p")) {
            observer.disconnect()
            if (document.querySelector("#zavScriptButton")) return
            insertMenu()
        }
    })

    observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true })

    function insertMenu() {
        const menuSpan = document.createElement("span")
        menuSpan.role = "presentation"
        menuSpan.classList.add("dropdown-item-text")

        const menuButton = document.createElement("a")
        menuButton.innerHTML = "Enable Script"
        menuButton.style.color = "#A1019D"
        menuButton.href = ""
        menuButton.id = "zavScriptButton"
        menuButton.onclick = (e) => {
            e.preventDefault()
            if (isEnabled === false) {
                isEnabled = true
                menuButton.innerHTML = "Disable Script"
            } else {
                isEnabled = false
                menuButton.innerHTML = "Enable Script"
            }
        }
        menu_span.appendChild(menuButton)
        document.getElementsByClassName("dropdown-menu-left")[0].id = "zav_user_menu"
        document.querySelector("#zav_user_menu").appendChild(menu_span)
        console.log("%c[ZAV] Created Menu Button to Enable/Disable Script", style2)
    }
}