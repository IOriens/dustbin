const $$ = id => {return document.querySelector(id)} 

// console.log($$('#img_input'))

// Demo1
$$('#img_upload').addEventListener("change",e => {
    const file = e.target.files[0]

    console.log(file.type)
    if(!file.type.match('image.*')) {
        return false
    }

    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = arg => {
        const img = `<img class="preview" src="${arg.target.result}" alt="preview" />`
        console.log( $$(".preview_box"))
        $$(".preview_box").innerHTML = img
    }
})