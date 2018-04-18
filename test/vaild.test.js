const vaild=require('../lib/vaild.lib')



let main=()=>{
    console.log("验证是否为邮箱",vaild.isEmail("rooqs.main@gmail.com"))
    console.log("验证是否为手机",vaild.isMobile("15901180401"))
    console.log("验证是否为Url",vaild.isUrl("http://www.baidu.com"))
    console.log("验证是否为Url",vaild.isUrl("https://www.baidu.com"))
}
main()