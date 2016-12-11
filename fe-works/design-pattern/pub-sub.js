var PubSub = {
  subscribe: function(ev, cb) {
    this.callbacks = this.callbacks || {}
    if(!this.callbacks[ev]) {
      this.callbacks[ev] = []
    }
    this.callbacks[ev].push(cb)
    return this
  },
  publish: function() {
    var args = [].slice.apply(arguments)
    var ev = args.shift()
    var cbs = [];
    if(this.callbacks && (cbs = this.callbacks[ev])) {
      for(var i = 0, len = cbs.length; i < len; i ++) {
        cbs[i].apply(this, args)
      }
    }
  }
}

PubSub.subscribe('echo', function (data) {
  console.log(data)
})

PubSub.publish('echo', 'hhhhh')
