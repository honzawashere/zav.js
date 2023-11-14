const style = 'background-color:#A1019D;color:white;font-size:2em;'
const style2 = 'background-color:#A1019D;color:white;font-size:1em;'

function appendScript(scriptPath) {
    var xhr = new XMLHttpRequest()
    
    xhr.onreadystatechange = () => {
        if(xhr.responseText) {
            var script = document.createElement("script")
            script.innerHTML = xhr.responseText + " run()"
            document.body.appendChild(script)
        }
    }

    xhr.open("GET", "https://raw.githubusercontent.com/honzawashere/zav-js/main" + scriptPath)
    xhr.send()
}

function injectScript() {
    console.log("%c@honzawashere", style)
    console.log("%c[ZAV] Injecting...", style2)

    appendScript("/js/base/load.js")

    console.log(`%c[ZAV] Injected!`, style2)
}

function handlePageNavigation() {
    console.log(`%c${document.URL}`, style2)
    if (document.URL === "https://student.zav.cz/#!/login") {
        appendScript("/js/login/loginPage.js")
    }
    if (document.URL === "https://student.zav.cz/#!/courses") {
        appendScript("/js/homepage/homePage.js")
    }
    if (document.URL === "https://student.zav.cz/#!" || document.URL === "https://student.zav.cz/#!/protocol") {
        return
    }
    coursePage()
}

function coursePage() {
    const observer = new MutationObserver(() => {
        if (document.querySelector("#textInput > div.ql-editor > p")) {
            observer.disconnect()
            if (document.querySelector("#script_xd")) return
            getReadyToType()
        }
    })

    observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true })
}

function coursePageHned() {
    getReadyToType()
}

function injectMenu() {
    const menu_span = document.createElement("span")
    menu_span.role = "presentation"
    menu_span.classList.add("dropdown-item-text")
    const menu_a = document.createElement("a")
    menu_a.innerHTML = "Enable Script"
    menu_a.style.color = "#A1019D"
    menu_a.href = ""
    menu_a.id = "script_xd"
    menu_a.onclick = (e) => {
        e.preventDefault()
        if (isEnabled === false) {
            isEnabled = true
            menu_a.innerHTML = "Disable Script"
        } else {
            isEnabled = false
            menu_a.innerHTML = "Enable Script"
        }
    }
    menu_span.appendChild(menu_a)
    document.getElementsByClassName("dropdown-menu-left")[0].id = "zav_user_menu"
    document.querySelector("#zav_user_menu").appendChild(menu_span)
    console.log("%c[ZAV] Created Menu Button to Enable/Disable Script", style2)
}
function getReadyToType() {
    let a
    let p = 0
    let z;
    let bezMezer = false

    getTask()

    function getTask() {
        z = document.querySelector("p")

        if (z.innerText.startsWith("Písmeno")) {
            if (document.querySelector("#animateme > span")) {
                let l
                getLetter()
                setupTyping()
                function getLetter() {
                    console.log("[ZAV] Nigger")
                    const letter = document.querySelector("#animateme > span").innerHTML
                    if (letter) {
                        console.log(letter)
                        l = letter
                    }
                    setupLetterUpdate()
                }

                function setupLetterUpdate() {
                    const o = new MutationObserver(() => {
                        console.log("[ZAV] Nigger1")
                        const letter = document.querySelector("#animateme > span").innerHTML
                        if (letter) {
                            console.log(letter)
                            l = letter
                        }
                    })

                    o.observe(document.querySelector("#animateme > span"), { attributes: true, childList: true, subtree: true })
                }

                function setupTyping() {
                    let isModifying = false
                    document.addEventListener("keydown", (e) => {
                        console.log("xd")
                        if (isModifying === true) return
                        isModifying = true
                        e.preventDefault()

                        e.key = l

                        document.dispatchEvent(new KeyboardEvent("keydown", e))
                        isModifying = false
                    })
                }
            } else {
                document.querySelector("p").innerHTML = document.querySelector("p").innerHTML + " PLEASE TYPE THIS YOURSELF!"

                const o = new MutationObserver(() => {
                    if (document.querySelector("#animateme > span")) {
                        o.disconnect()
                        getTask()
                    }
                })
                o.observe(document.documentElement, { attributes: true, childList: true, subtree: true })
            }
            return
        }

        if (document.querySelector('p')) {
            if (document.querySelector('p').innerHTML.includes("bez mezer")) {
                bezMezer === true
                a = document.querySelector("#scrollableText > div.ql-editor > p").innerText.replace(/\s/g, "").split("")
                console.log("%c[ZAV] Task: opis bez mezer", style2)
                injectMenu()
                handleTyping()
            } else {
                bezMezer === false
                a = document.querySelector("#scrollableText > div.ql-editor > p").innerText.split("")
                console.log("%c[ZAV] Task: opis textu", style2)
                injectMenu()
                handleTyping()
            }
        }

        setupUpdating()
    }
    function setupUpdating() {
        const o = new MutationObserver(() => {
            if (document.querySelector('p').innerHTML.includes("bez mezer")) {
                bezMezer === true
                a = document.querySelector("#scrollableText > div.ql-editor > p").innerText.replace(/\s/g, "").split("")
                console.log("%c[ZAV] Task: opis bez mezer", style2)
            } else {
                bezMezer === false
                a = document.querySelector("#scrollableText > div.ql-editor > p").innerText.split("")
                console.log("%c[ZAV] Task: opis textu", style2)
            }
            p = 0
        })
        o.observe(document.querySelector("p"), { subtree: true, attributes: true, childList: true })
    }

    function handleTyping() {
        document.addEventListener("keydown", (e) => {
            if (!document.URL.startsWith("https://student.zav.cz/#!/course/")) return
            if(e.key === "Backspace") {
                const text = document.querySelector("#textInput > div.ql-editor > p")
                const t = text.innerHTML.split("")
                t.pop()
                text.innerHTML = t.join("")
                return
            }
            if (isEnabled === true) {
                if (!document.querySelector("p").innerHTML.includes("Písmeno")) {
                    e.preventDefault()
                }
                if (p === a.length) {
                    if (document.querySelector('p').innerHTML.includes("Opisujte")) {
                        p = 0
                        return
                    }
                    return bezMezer === false
                }
                const text = document.querySelector("#textInput > div.ql-editor > p")
                text.innerHTML = text.innerHTML + a[p]
                p++
            }
        })
    }
}

injectScript()
