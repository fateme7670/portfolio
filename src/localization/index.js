import en_us from './en'
// import fa_ir from './fa'

const direction={
    en:"ltr",
    // fa:"rtl"
}
const lang="en"
// localStorage.getItem("lang") ? localStorage.getItem("lang") :

export {lang}
function getDirection(){
    return direction[lang]
}
export {getDirection}
const font=
{
    en:"Quicksand",
    // fa:"IRANSAnS",

}
function getFonts(){
    return font[lang]
}
export {getFonts}
const translate={
    en:en_us,
    // fa:fa_ir
}
function gettranslate(){
    return translate[lang]
}
export {gettranslate}
function changeLanguage(newlang){
    if(newlang===lang){
        return
    }
    localStorage.setItem('lang',newlang)
    window.location.reload()
}
export {changeLanguage}