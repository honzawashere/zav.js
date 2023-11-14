function run() {
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
            if (e.key === "Backspace") {
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