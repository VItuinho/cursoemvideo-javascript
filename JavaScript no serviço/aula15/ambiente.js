let num = [5, 8, 2, 9, 3]
num.sort()
num.length
num[5] = 6
console.log(`testando ${num.length}, ${num}`)
for(let pos=0;pos<num.length;pos++){
    console.log(num[pos])
}
let pos = num.indexOf(5)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}