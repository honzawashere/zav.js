function run() {
    let currentTask;
    let textToType;
    let disableSpacesBetweenText = false

    var observer = new MutationObserver(() => {
        if (document.querySelector("#textInput > div.ql-editor > p")) {
            observer.disconnect()
            if (document.querySelector("#zavScriptButton")) return
            insertMenu()
        }
    })

    observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true })

    function insertMenu() {
        var menuSpan = document.createElement("span")
        menuSpan.role = "presentation"
        menuSpan.classList.add("dropdown-item-text")

        var menuButton = document.createElement("a")
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
        menuSpan.appendChild(menuButton)
        document.getElementsByClassName("dropdown-menu-left")[0].id = "zav_user_menu"
        document.querySelector("#zav_user_menu").appendChild(menuSpan)

        getCurrentTask()
    }

    function getCurrentTask() {
        currentTask = document.querySelector("p").innerText
        console.log(currentTask)

        if(currentTask !== undefined) {
            if(currentTask.includes("bez mezer")) {
                disableSpacesBetweenText = true
                textToType = document.querySelector("#scrollableText > div.ql-editor > p").innerText.replace(/\s/g, "").split("")
            } else {
                disableSpacesBetweenText = false
                textToType = document.querySelector("#scrollableText > div.ql-editor > p").split("")
            }
        }
    }

    var observer = new MutationObserver(() => {
        if (document.querySelector("#animateme > span")) {
            getCurrentTask()
        }
    })
    observer.observe(document.querySelector("p"), { attributes: true, childList: true, subtree: true })
}