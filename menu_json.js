
//json.stringify(nombre_objeto), para convertir objetos de javascript a objetos json
//json.parse(convierte objeto json a objeto javascript), se convierte en objeto en javascript para poner manipular con ellos
//consolo.log()

let informacion_menu1 = ''
let informacion_menu2 = ''
let informacion_menu3 = ''
let informacion_menu4 = ''
let informacion_menu5 = ''
let informacion_menu6 = ''

fetch('/elementos.json')

.then(response => response.json())

.then (data => {

    console.log(data)

    for (let i = 0; i < data.length; i++) {
        
        informacion_menu1 += `<li><a href="  " target="_blank">${data[i].titulo_personal} </a></li>`;
        informacion_menu2 +=`<li><a href="  " target="_blank">${data[i].titulo_preferente} </a></li>`;
        informacion_menu3 += `<li><a href="  " target="_blank">${data[i].titulo_pyme} </a></li>`;
        informacion_menu4 +=`<li><a href="  " target="_blank">${data[i].titulo_empresarial} </a></li>`;
        informacion_menu5 += `<li><a href="  " target="_blank">${data[i].titulo_gubernamental} </a></li>`;
        informacion_menu6 +=`<li><a href="  " target="_blank">${data[i].titulo_internacional} </a></li>`;
    }
    document.getElementById('menu_1').innerHTML = informacion_menu1;
    document.getElementById('menu_2').innerHTML = informacion_menu2;
    document.getElementById('menu_3').innerHTML = informacion_menu3;
    document.getElementById('menu_4').innerHTML = informacion_menu4;
    document.getElementById('menu_5').innerHTML = informacion_menu5;
    document.getElementById('menu_6').innerHTML = informacion_menu6;
});

    //let datos = document.querySelector("#personal_menu");

   
