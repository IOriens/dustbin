(function () {

    const Cookie = function () {

    }

    Cookie.prototype.set = function (key, value, option) {
        console.log(option)
        let temp = `${key}=${value}`
        if (option && option.expire != null) {
            let timeTemp = new Date().getTime() + option.expire
            console.log(timeTemp);
            timeTemp = new Date(timeTemp).toUTCString()
            temp += `; expire=${timeTemp}`
        }

        if (option && option.domain) {
            temp += `; domain=${option.domain}`
        }

        if (option && option.secure) {
            temp += '; secure'
        }

        console.log(temp)
        document.cookie = temp
    }

    Cookie.prototype.get = function () {
        let allCookie = document.cookie
        console.log(allCookie)
    }

    var cookie = new Cookie()

    cookie.set('test', 666, { expire: 30 * 24 * 60 * 60 * 1000 })
    cookie.set('test2', 667)
    cookie.get()

})()