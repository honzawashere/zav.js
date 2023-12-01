var style = 'background-color:#A1019D;color:white;font-size:2em;'
var style2 = 'background-color:#A1019D;color:white;font-size:1em;'

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
    appendScript("/js/course/coursePage.js")
}

injectScript()
