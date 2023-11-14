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

function run() {
    window.onhashchange = () => {
        run()
    }

    if (document.URL === "https://student.zav.cz/#!/login") {
        appendScript("/js/login/loginPage.js")
    }
    if (document.URL === "https://student.zav.cz/#!/courses") {
        appendScript("/js/homepage/homePage.js")
    }
}