var container = document.querySelector(".context")
var topicos = document.querySelector(".topicos nav")
var mobile = document.querySelector(".mobile")

var item = [
    {
        post:{
            abreviacao:"react",
            title:"React",
            description:"O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web",
            img:"./assets/react.png",
            
            status: true,
        }
    },
    {
        post:{
            abreviacao:"jscript",
            title:"Javascript",
            description:"JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
            img:"./assets/js.png",
            status: true,
        }
    },
    {
        post:{
            abreviacao:"html",
            title:"Html",
            description:"HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em temp",
            img:"./assets/html.png",
            status: true,
        }
    },
    {
        post:{
            abreviacao:"Css",
            title:"css",
            description:"CSS (Cascading Style Sheets) é um mecanismo para adicionar estilos a uma página web",
            img:"./assets/css.jpeg",
            status: true,
        }
    }
]


function start(){

    for(let i = 0; i < item.length; i++){

        const elemento = document.createElement("div")

        container.appendChild(elemento)

        elemento.innerHTML=`
        <div 
            class="items" 
            id= "item${i}"
        >
            <article>
                <h1>
                    ${item[i]["post"]["title"]}   
                </h1>
                <p>
                    ${item[i]["post"]["description"]} 
                </p>
                <img
                    src="${item[i]["post"]["img"]}" 
                    alt="${item[i]["post"]["title"]}"
                >
                <span>
                    foto retirada da internet font not default
                </span>
               
            </article>
        </div>`
        
        var lista = document.createElement("ul")
        topicos.appendChild(lista)

        lista.innerHTML = `
        <li>
            <a href="#item${i}">${item[i]["post"]["abreviacao"]}</a>
        </li>
    
        `

    }


    
}

start()

var btn = document.querySelector(".btn-cookies")
var cookies = document.querySelector(".cookies")

btn.onclick = closeCookies;

function closeCookies(){
    cookies.style.display = "none"
}

var button = document.querySelector(".dir button")
var body = document.querySelector("body")

button.onclick = dir;

function dir(){
    // alert("Thanks!")
    body.classList.toggle("theme")
}

var ul = document.querySelector("header ul")

mobile.onclick = mb;

function mb(){
    ul.classList.toggle("active")
}
