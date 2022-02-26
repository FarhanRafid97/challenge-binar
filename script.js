function loopingDoWhile(){
    let angka =[]
    let i= 0
  
    do {
        angka.push(i)
        console.log(`ini angka Looping Do While ${angka[i]}`)
        i++
        
    } while (i < 10);
    
}

function loopingFor(){
    let angka = []
    for(let i = 0; i < 10; i++){
        angka.push(i)
        console.log(`ini angka Looping For${angka[i]}`) 
    }
}

function penambahan(){
    let angka1 = 5
    let angka2 = 10
    let hasil = angka1 + angka2
    return alert(`${angka1} + ${angka2} = ${hasil}`)
}