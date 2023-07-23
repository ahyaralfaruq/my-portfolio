
function checkWord(word, value) {
    let len = ""
    let isTrue = false

    for(let z = 0; z < word.length; z++) {
        for(let i = 0; i < value.length; i++) {
            if(value[i] === word[z] && !isTrue) {
                if(len[len.length - 1] === value[i]) {
                    i++
                } else {
                    len += value[i]
                    isTrue = true
                    z++
                }
            }
            isTrue = false
        }
    }
    
    return len
}

function acronym (value){
    const db = [
        "iykwim",
        "wysiwyg",
        "lol",
        "lmao",
        "ldr"
    ]
    let result = ""
    
    for(let i = 0; i < db.length; i++) {
        const indexDb = db[i]
        const words = checkWord(indexDb, value)
        if(words.length === indexDb.length) {
            result = indexDb
        }
    }
    
    return result ? result : null
}

console.log(acronym("if you know what i mean"))
console.log(acronym("what you see is what you get"))
console.log(acronym("laugh overload"))
console.log(acronym("laugh my ass off"))
console.log(acronym("lorem ipsum dolor sit amet"))
console.log(acronym("lorem"))

