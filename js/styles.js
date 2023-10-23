const style = 'background-color:#A1019D;color:white;font-size:2em;'
const style2 = 'background-color:#A1019D;color:white;font-size:1em;'

module.exports.log = (msg, type) => {
    console.log(`%c${msg}`, type === "style" ? style : style2)
}