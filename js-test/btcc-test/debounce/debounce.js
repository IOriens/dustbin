const debounce = (cb, time) => {
    this.timer = null
    return () => {
        if(!this.timer) {
            this.timer = setTimeout(()=> {
                cb()
                clearTimeout(this.timer)
            }, time);
        } else {
            clearTimeout(this.timer)
            this.timer = setTimeout(()=> {
                cb()
                clearTimeout(this.timer)
            }, time);
        }
    }
}

module.exports = debounce