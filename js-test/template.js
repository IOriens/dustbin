function replaceSeat(template, arrays) {
    var len = arrays.length
    var reg = null
    for (var i = 0; i < len; i++) {
        reg = new RegExp('\\$\\{'+i +'\\}','g')
        
  
        template = template.replace(reg, arrays[i])
    }

    reg = /\$\{\d+\}/g
  
    template = template.replace(reg, '')
    return template
}

replaceSeat("${}${4}热烈欢迎${0}${4}${0}${0}${4}、${1}、${2}同学加入${3}！",["张三","李四","王五","趣店集团"])
