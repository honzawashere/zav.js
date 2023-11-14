var style2 = 'background-color:#A1019D;color:white;font-size:1em;'
var style3 = 'background-color:white;color:#A1019D;font-size:1em;'

function appendScript(scriptPath) {
    var xhr = new XMLHttpRequest()
    
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 3) {
            if(xhr.status.toString() !== "200") {
                console.log(`%c[ZAV] Something wrong happened, status code %c${xhr.status}`, style2, style3)
                return
            }
            var script = document.createElement("script")
            script.innerHTML = xhr.responseText + " run()"
            document.body.appendChild(script)
            console.log(`%c[ZAV] Script loaded: %c${scriptPath}`, style2, style3)
            script.remove()
        }
    }

    xhr.open("GET", "https://raw.githubusercontent.com/honzawashere/zav-js/main" + scriptPath)
    xhr.send()
    return
}

function run() {
    window.addEventListener("hashchange", () => {
        if (document.URL === "https://student.zav.cz/#!/login") {
            appendScript("/js/login/loginPage.js")
        }
        if (document.URL === "https://student.zav.cz/#!/courses") {
            appendScript("/js/homepage/homePage.js")
        }
        if (document.URL.startsWith("https://student.zav.cz/#!/course/")) {
            appendScript("/js/course/coursePage.js")
        }
    })

    if (document.URL === "https://student.zav.cz/#!/login") {
        appendScript("/js/login/loginPage.js")
    }
    if (document.URL === "https://student.zav.cz/#!/courses") {
        appendScript("/js/homepage/homePage.js")
    }
    if (document.URL.startsWith("https://student.zav.cz/#!/course/")) {
        appendScript("/js/course/coursePage.js")
    }
}