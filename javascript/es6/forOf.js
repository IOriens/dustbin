for(const word of "Hello World") console.log(word)

function* fn() {
  yield 1
  yield 2
}
for(const value of fn()) console.log(value)

