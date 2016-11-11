class Draw {
    constructor(cvs) {
        this.cvs = cvs
        this.ctx = cvs.getContext('2d')
    }

    drawRect() {
        ctx.fillStyle = 'color: #fff;'
        ctx.fillRect(10, 12, 1100, 10)
    }
}

export default Draw