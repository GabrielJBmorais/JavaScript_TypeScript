function write() {

    const result = document.querySelector('.container')


    const array = [

        { tag: 'p', texto: 'Frase 1' },
        { tag: 'div', texto: 'Frase 2' },
        { tag: 'footer', texto: 'Frase 3' },
        { tag: 'section', texto: 'Frase 4' }

    ]

    const div = document.createElement('div')

    for (let i = 0; i < array.length; i++) {

        let {tag, texto} = array[i];

        let tagC = document.createElement(tag);

        let textNode = document.createTextNode(texto)

        tagC.appendChild(textNode)
        div.appendChild(tagC)

       
    }
    result.appendChild(div);

}

write();