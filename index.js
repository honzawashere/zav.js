let isEnabled = false
let schoolMode = false

const style = 'background-color:#A1019D;color:white;font-size:2em;'
const style2 = 'background-color:#A1019D;color:white;font-size:1em;'

function injectScript() {
    console.log("%c@honzawashere", style)
    console.log("%c[ZAV] Injecting...", style2)

    window.addEventListener("hashchange", () => {
        handlePageNavigation()
    })

    if (document.URL === "https://student.zav.cz/#!/login") {
        if (schoolMode === false) {
            loginPage()
        }
    }
    if (document.URL === "https://student.zav.cz/#!/courses") {
        if (schoolMode === false) {
            editDog()
        }
    }
    if (document.URL.startsWith("https://student.zav.cz/#!/course/")) {
        coursePageHned()
    }

    console.log(`%c[ZAV] Injected!`, style2)
}

function loginPage() {
    if (document.readyState === "loading") {
        console.log(`%c[ZAV]Please wait for the page to get loaded.`, style2)
    }

    const main_img = document.querySelector("#views-placeholder > div > div > div:nth-child(1) > div.col.d-flex.flex-row > h1 > img")
    const bg = document.querySelector("#views-placeholder > div")
    const button1 = document.querySelector("#views-placeholder > div > div > div:nth-child(2) > div:nth-child(1) > form > input")
    const button2 = document.querySelector("#views-placeholder > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(2) > div > button")
    const loading = document.querySelector("#views-placeholder > div > div > div.row.flex-grow-1.align-items-center.justify-content-center > div")
    const a = document.querySelector("#views-placeholder > div > div > div:nth-child(2) > div.col.d-flex.flex-column.d-none.d-lg-flex > div:nth-child(2) > p:nth-child(2) > a")

    bg.style.background = "#A1019D"
    bg.style.backgroundImage = "url(https://student.zav.cz/dist/4b980caddd636d7aaf798f3a4a227502.png)"
    bg.style.backgroundSize = "350px"
    main_img.src = "https://raw.githubusercontent.com/honzawashere/zav-js/main/zav-logo-barevne-student-cs.png"
    button1.style.backgroundColor = "#A1019D"
    button1.style.borderColor = "#A1019D"
    button1.style.color = "white"
    button2.style.backgroundColor = "#A1019D"
    button2.style.borderColor = "#A1019D"
    button2.style.color = "white"
    loading.style.color = "#A1019D !important"
    a.style.color = "#A1019D !important"
}

function homePage() {
    const observer = new MutationObserver(() => {
        if (document.querySelector("#page-content-wrapper > div > div.flex-grow-1 > div.row.h-50.pb-4.zav-min-height > div.col.d-none.d-lg-flex.flex-column.fade-in.two > div > div > div:nth-child(1) > div.speech-bubble.bg-primary.h-50.text-white > span")) {
            observer.disconnect()
            editDog()
        }
    })
    observer.observe(document.documentElement, {childList: true, subtree: true, attributes: true})
}

function editDog() {
    document.querySelector("#page-content-wrapper > div > div.flex-grow-1 > div.row.h-50.pb-4.zav-min-height > div.col.d-none.d-lg-flex.flex-column.fade-in.two > div > div > div:nth-child(1) > div.speech-bubble.bg-primary.h-50.text-white > span").innerHTML = "Jsem Váš úhlavní nepřítel! :)"
}

function handlePageNavigation() {
    console.log(`%c${document.URL}`, style2)
    if (document.URL === "https://student.zav.cz/#!/login") {
        loginPage()
        return
    }
    if (document.URL === "https://student.zav.cz/#!/courses") {
        homePage()
        return
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
            injectMenu()
            getReadyToType()
        }
    })

    observer.observe(document.documentElement, {childList: true, subtree: true, attributes: true})
}

function coursePageHned() {
    injectMenu()
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

        if(z.innerText.startsWith("Písmeno")) {
            if(document.querySelector("#animateme > span")) {
                let l
                getLetter()
                setupTyping()
                function getLetter() {
                    console.log("[ZAV] Nigger")
                    const letter = document.querySelector("#animateme > span").innerHTML
                    if(letter) {
                        console.log(letter)
                        l = letter
                    }
                    setupLetterUpdate()
                }

                function setupLetterUpdate() {
                    const o = new MutationObserver(() => {
                        console.log("[ZAV] Nigger1")
                        const letter = document.querySelector("#animateme > span").innerHTML
                        if(letter) {
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
                        if(isModifying === true) return
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
                    if(document.querySelector("#animateme > span")) {
                        o.disconnect()
                        getTask()
                    }
                })
                o.observe(document.documentElement, { attributes: true, childList: true, subtree: true })
            }
            return
        }

        const observer = new MutationObserver(() => {
            a = document.querySelector("#scrollableText > div.ql-editor > p").innerText.split("")

            if (!document.querySelector("#scrollableText > div.ql-editor > p")) return

            if (document.querySelector('p')) {
                if (document.querySelector('p').innerHTML.includes("bez mezer")) {
                    bezMezer === true
                }
            }

            if(bezMezer) {
                a = document.querySelector("#scrollableText > div.ql-editor > p").innerText.replace(/\s/g, "").split("")
            } else {
                a = document.querySelector("#scrollableText > div.ql-editor > p").innerText.split("")
            }
        })
        observer.observe(document.documentElement, {childList: true, subtree: true, attributes: true})

        setupUpdating()
    }
    function setupUpdating() {
        const o = new MutationObserver(() => {
            z = document.querySelector("p")
            a = document.querySelector("#scrollableText > div.ql-editor > p").innerText.split("")
            p = 0
            const observer = new MutationObserver(() => {
                if (!document.querySelector("#scrollableText > div.ql-editor > p")) return

                if (document.querySelector('p')) {
                    if (document.querySelector('p').innerHTML.includes("bez mezer")) {
                        bezMezer === true
                    }
                    if (document.querySelector('p')
                    )
                }

                if(bezMezer) {
                    a = document.querySelector("#scrollableText > div.ql-editor > p").innerText.replace(/\s/g, "").split("")
                } else {
                    a = document.querySelector("#scrollableText > div.ql-editor > p").innerText.split("")
                }
            })
            observer.observe(document.documentElement, {childList: true, subtree: true, attributes: true})
        })
        o.observe(document.querySelector("p"), { subtree: true, attributes: true, childList: true})
    }

    document.addEventListener("keydown", (e) => {
        if (!document.URL.startsWith("https://student.zav.cz/#!/course/")) return
        if (isEnabled === true) {
            if (!document.querySelector("p").innerHTML.includes("Písmeno")) {
                e.preventDefault()
            }
            if (p === a.length) {
                if(document.querySelector('p').innerHTML.includes("Opisujte")) {
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

injectScript()