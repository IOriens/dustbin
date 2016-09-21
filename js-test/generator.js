function *Gen(i){
	console.log(i)
	return yield i+1
}

var gen = Gen(2)
console.log('---')
console.log(gen.next())
gen.next()
gen.next()
