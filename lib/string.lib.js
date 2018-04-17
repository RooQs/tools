


/**
 * 去空格函数
 * @param {*} str 
 */
let trim=(str)=>{
    if(typeof str != 'string'){
        return undefined;
    }
    return str.replace(/(^\s*)|(\s*$)/g, ""); 
}

/**
 * 正则验证
 * @param {*} str 要正验证的内容
 * @param {*} regexp 正则表达式
 */
let regularVaild=(str,regexp)=>{
    return regexp.test(str)
}


module.exports={
    trim:trim,
    regularVaild:regularVaild
}