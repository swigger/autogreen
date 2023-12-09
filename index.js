async function show(){
let txt = await import('txtgen');
console.log(txt.sentence())
}
show()
