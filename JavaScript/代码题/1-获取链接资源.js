/**
 * 给某个资源的链接，如 https://www.baidu.com/index.html ，请实现一个方法，获取该资源的后缀，如 html
 */
const fileName = "https://www.baidu.com/index.html";

function getFileExtension(url){
    if(typeof url !== 'string') return ''
    // return url.substring(url.lastIndexOf('.') + 1)
    return url.split('.').pop().toLowerCase()
}

console.log(getFileExtension(fileName))