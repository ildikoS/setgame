function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }


    szulo.addEventListener(mikor, esemenyKezelo);
}

let kezdolap = document.querySelector('#kezdolap')
let jatek = document.querySelector('#jatek')
let start = document.querySelector('#start')
let vege = document.querySelector('#vege')
let egyebGombok = document.querySelector('#egyebGombok')

let jatekosok = []
//localStorage.clear('vegeredmeny')
let items = JSON.parse(localStorage.getItem('vegeredmeny')) //localstorage

//Kártyák
let Cards = [
    {
        shape: 'D',
        number: 1,
        color: 'g',
        img: ''
    },
    {
        shape: 'P',
        number: 1,
        color: 'g',
        img: ''
    },
    {
        shape: 'S',
        number: 1,
        color: 'g',
        img: ''
    },
    {
        shape: 'D',
        number: 1,
        color: 'p',
        img: ''
    },
    {
        shape: 'P',
        number: 1,
        color: 'p',
        img: ''
    },
    {
        shape: 'S',
        number: 1,
        color: 'p',
        img: ''
    },
    {
        shape: 'D',
        number: 1,
        color: 'r',
        img: ''
    },
    {
        shape: 'P',
        number: 1,
        color: 'r',
        img: ''
    },
    {
        shape: 'S',
        number: 1,
        color: 'r',
        img: ''
    },
    {
        shape: 'D',
        number: 2,
        color: 'g',
        img: ''
    },
    {
        shape: 'P',
        number: 2,
        color: 'g',
        img: ''
    },
    {
        shape: 'S',
        number: 2,
        color: 'g',
        img: ''
    },
    {
        shape: 'D',
        number: 2,
        color: 'p',
        img: ''
    },
    {
        shape: 'P',
        number: 2,
        color: 'p',
        img: ''
    },
    {
        shape: 'S',
        number: 2,
        color: 'p',
        img: ''
    },
    {
        shape: 'D',
        number: 2,
        color: 'r',
        img: ''
    },
    {
        shape: 'P',
        number: 2,
        color: 'r',
        img: ''
    },
    {
        shape: 'S',
        number: 2,
        color: 'r',
        img: ''
    },
    {
        shape: 'D',
        number: 3,
        color: 'g',
        img: ''
    },
    {
        shape: 'P',
        number: 3,
        color: 'g',
        img: ''
    },
    {
        shape: 'S',
        number: 3,
        color: 'g',
        img: ''
    },
    {
        shape: 'D',
        number: 3,
        color: 'p',
        img: ''
    },
    {
        shape: 'P',
        number: 3,
        color: 'p',
        img: ''
    },
    {
        shape: 'S',
        number: 3,
        color: 'p',
        img: ''
    },
    {
        shape: 'D',
        number: 3,
        color: 'r',
        img: ''
    },
    {
        shape: 'P',
        number: 3,
        color: 'r',
        img: ''
    },
    {
        shape: 'S',
        number: 3,
        color: 'r',
        img: ''
    }
]

let eredeti = Cards

for(card of Cards){
    card.img = `${card.number}S${card.color}${card.shape}.svg`
}

function shuffle(array) {
    let currInd = array.length, tempVal, randInd;
  
    while (0 !== currInd) {
        randInd = Math.floor(Math.random() * currInd);
        currInd--;
  
        tempVal = array[currInd];
        array[currInd] = array[randInd];
        array[randInd] = tempVal;
    }
  
    return array;
}

shuffle(Cards);
console.log(Cards);



//set-e

function set_e(alt1,alt2,alt3){
    let set = false
    let card1, card2, card3

    for(card of Cards){
        switch(card.img){
            case alt1:
                card1 = card
                break;
            case alt2:
                card2 = card
                break;
            case alt3:
                card3 = card
                break;
        }
    }

    let cond1 = card1.shape === card2.shape && card2.shape === card3.shape && card1.shape === card3.shape
    let cond2 = card1.color === card2.color && card2.color === card3.color && card1.color === card3.color
    let cond3 = card1.shape !== card2.shape && card2.shape !== card3.shape && card1.shape !== card3.shape
    let cond4 = card1.color !== card2.color && card2.color !== card3.color && card1.color !== card3.color
    let cond5 = card1.number !== card2.number && card2.number !== card3.number && card1.number !== card3.number


    if(cond1 && cond2){
        set = true
    }else if(cond3 && cond4 && cond5){
        set = true
    }
    else{
        set = false
    }
        
    return set
}

let szabalyDiv = document.querySelector('#szabalyDiv')
szabalyDiv.style.display = "none"
document.querySelector('#szabalyButton').addEventListener('click',()=>{
    szabalyDiv.style.display = "block"
})

//Start
jatek.style.display = "none";
vege.style.display = "none";
start.addEventListener('click',()=>{
    kezdolap.style.display = "none";
    jatek.style.display = "block";

    console.log(items)

    //Egyéb gombok generálása
    
    let vanSetButton, p, lekeresButton, kiegeszitesButton
    if(gyakorlo.checked){
        if(beallitasok[0].checked){
            vanSetButton = document.createElement('button')
            vanSetButton.innerHTML = 'Van SET?'
            egyebGombok.appendChild(vanSetButton)

            p = document.createElement('p')
            p.innerHTML = ''
            egyebGombok.appendChild(p)
        }
        if(beallitasok[1].checked){
            lekeresButton = document.createElement('button')
            lekeresButton.innerHTML = 'SET lekérdezése'
            egyebGombok.appendChild(lekeresButton)
        }
        if(beallitasok[2].checked){
            kiegeszitesButton = document.createElement('button')
            kiegeszitesButton.innerHTML = '+3 lap kiegészítés'
            egyebGombok.appendChild(kiegeszitesButton)
        }
    }

    //Pontszámok/Játékos gombok

    let pontUl = document.querySelector('#pontszamok')
    let pontLi
    let jatekosGombok = document.querySelector('#jatekosGomb')
    let newButton
    let i = 1;
    let inputs = document.querySelectorAll('#players input')
    let gombok = []
    let pontok = []
    let jatekosok = []
    inputs.forEach(elem => {
        jatekosok.push( {nev: elem.value, pontszam: 0, id: i, kijelolt: false} )

        pontLi = document.createElement('li')
        pontLi.innerHTML = `${elem.value} pontszáma: ${jatekosok[i-1].pontszam}`
        pontok.push(pontLi) 
        pontUl.appendChild(pontLi)
        newButton = document.createElement('button')
        newButton.innerHTML = `${elem.value}`
        jatekosGombok.appendChild(newButton)
        newButton.id = i
        gombok.push(newButton) 

        //csak design kedvéért
        if(i % 2 == 0){
            let br = document.createElement('br')
            jatekosGombok.appendChild(br)
        }
        
        i++;
    })

    //delegálás játékosokra

    gombok[0].classList.add('selectedPlayer')
    jatekosok[0].kijelolt = true
    delegal(jatekosGombok, 'button', 'click', (esemeny, elem)=>{
        for(jatekos of jatekosok){
            jatekos.kijelolt = false
        }  
        jatekosGombok.querySelector('.selectedPlayer').classList.remove('selectedPlayer') 
        elem.classList.add('selectedPlayer')
        jatekosok[elem.id-1].kijelolt = true

    })    

    //kártyák kigenerálása html-be
    let table = document.querySelector('#cards')
    let tr, td, img
    let cardInd
    let columns = 4
    let vegeVan = false
    let lekerdez = false
    function cardGen(arr){
        let set = false

        table.innerHTML = ''
        
        let curr_Cards = []
        cardInd = 0

        let trGroup = []

        function tdGen(){

            td = document.createElement('td')
                img = document.createElement('img')
                img.alt = arr[cardInd].img
                img.src = `imgs/icons/${img.alt}`
            td.appendChild(img)
            tr.appendChild(td)
    
            curr_Cards.push(arr[cardInd])
            cardInd++;
        }

        if((arr.length/3) < columns){
            columns--
        }

        for(let i=0; i<3; i++){
            tr = document.createElement('tr')
            for(let j=0; j<columns; j++){
                tdGen()
            }
            table.appendChild(tr)
            trGroup.push(tr)
        }

        //van-e még set
        
        let c1,c2,c3
        let f = 0
        while(f<curr_Cards.length){
            for(let s=f+1; s<curr_Cards.length; s++){
                let t=s+1
                while(!set && t<curr_Cards.length){
                    c1 = curr_Cards[f]
                    c2 = curr_Cards[s]
                    c3 = curr_Cards[t]
                    set = set_e(c1.img,c2.img,c3.img)
                    t++
                }
            }
            f++;
        }

        if(!set && (arr.length/3) === columns) vegeVan = true

        //+3 lap lekérés versenymódban
        if(!vegeVan && !set && verseny.checked){
            for(let i=0; i<3; i++){
                for(let j=columns; j<columns+1; j++){ 
                    tdGen()

                    trGroup[i].appendChild(td)
                }
                table.appendChild(tr)
            }
            columns++
        }

         //+3 lap lekérés egyébként
        let press = 0 
        if(beallitasok[2].checked){
            kiegeszitesButton.addEventListener('click',()=>{ 
                if(press<1){
                    for(let i=0; i<3; i++){
                        for(let j=columns; j<columns+1; j++){ 
                            tdGen()

                            trGroup[i].appendChild(td)
                        }
                    table.appendChild(tr)
                    }
                    columns++
                    press++
                } 
            })
        }

        //van-e set gomb
        if(beallitasok[0].checked){
            p.innerHTML = ''
            vanSetButton.addEventListener('click',()=>{
                set ? p.innerHTML = 'Igen, van' : p.innerHTML = 'Nincs'
            })
        }

        lekerdez = false
        //set lekérdezés
        if(beallitasok[1].checked && set){
            lekeresButton.addEventListener('click',()=>{

                images = document.querySelectorAll('img')
                for(image of images){
                    image.classList.remove('selectedCards')
                }

                for(image of images){
                    if(image.alt === c1.img || image.alt === c2.img || image.alt === c3.img){
                        image.classList.add('selectedCards')
                    }
                }
               lekerdez = true
            })
        }

        if(vegeVan || !set){
            let pointsDiv = document.querySelector('#vegePontszamok')

            function compare(a, b) {
                
                const pointA = a.pontszam;
                const pointB = b.pontszam;
              
                let comparison = 0;
                if (pointA < pointB) {
                  comparison = 1;
                } else if (pointA > pointB) {
                  comparison = -1;
                }
                return comparison;
            }

            jatekosok.sort(compare)

            let index = 1   
            pointsDiv.innerHTML = `Aktuális:<br>`
            for(jatekos of jatekosok){
                pontLi = document.createElement('p')
                pontLi.innerHTML = `${index}. helyezett: ${jatekos.nev}, pontszáma: ${jatekos.pontszam}`
                pointsDiv.appendChild(pontLi)
                index++
            }

            //localstorage
            let datas = []
            if(items != null){
                let ossz = document.querySelector('#osszesitett')
                ossz.innerHTML = `Összesített:<br>`

                for(jatekos of jatekosok){

                    let found = false
                    let it = 0
                    while(it<items.length && found === false){
                        if(items[it].nev === jatekos.nev){
                            datas.push({nev: items[it].nev, pontszam: jatekos.pontszam+items[it].pontszam})
                            found = true
                        }
                        it++
                    }

                    if(!found){
                        datas.push({nev: jatekos.nev, pontszam: jatekos.pontszam})
                    }
                }   

                datas.sort(compare)
                index = 1 
                for(data of datas){
                    pontLi = document.createElement('p')
                    pontLi.innerHTML = `${index}. helyezett: ${data.nev}, pontszáma: ${data.pontszam}`
                    ossz.appendChild(pontLi)
                    index++
                }

            }else{
                for(jatekos of jatekosok){
                    datas.push({nev: jatekos.nev, pontszam: jatekos.pontszam})
                }
            }

            localStorage.setItem('vegeredmeny', JSON.stringify(datas))
            items = JSON.parse(localStorage.getItem('vegeredmeny'))
            console.log('Végeredmény LocalStorage-el eltárolva')
            console.log(items)

            jatek.style.display = "none";
            vege.style.display = "block";

            Cards = eredeti
        }
    }

    cardGen(Cards)


    //delegálás kártyákra
    let blocked = []
    delegal(table, 'img', 'click', (esemeny, elem)=>{
        
        let selectedCards = document.querySelectorAll('.selectedCards');
        if(selectedCards.length < 3) elem.classList.toggle('selectedCards')
        else if(selectedCards.length === 3){ 
            selectedCards.forEach(e =>{
                e.classList.remove('selectedCards')
            })

            let setjelzese = document.querySelector('#setJelzese')
            let set = set_e(selectedCards[0].alt,selectedCards[1].alt,selectedCards[2].alt)
            
            if(set){

                setjelzese.innerHTML = 'Helyes'
                setjelzese.style.color = 'green'

                for(jatekos of jatekosok){
                    if(jatekos.kijelolt === true){
                        lekerdez === false ? jatekos.pontszam++ : ''
                        pontok[jatekos.id-1].innerHTML = `${jatekos.nev} pontszáma: ${jatekos.pontszam}`
                    } 
                    blocked = []
                    gombok[jatekos.id-1].disabled = false
                    gombok[jatekos.id-1].classList.remove('blockedPlayer')
                }

                //lapok kivétele, kirajzolása
                for(let i=0; i<Cards.length; i++){
                    for(selCard of selectedCards){
                        if(selCard.alt === Cards[i].img)
                        Cards.splice(i,1)
                    }
                }
                cardGen(Cards)
                console.log(Cards)

            }else if(!set){

                setjelzese.innerHTML = 'Helytelen'
                setjelzese.style.color = 'red'

                for(jatekos of jatekosok){
                    if(jatekos.kijelolt === true){
                        jatekos.pontszam--
                        pontok[jatekos.id-1].innerHTML = `${jatekos.nev} pontszáma: ${jatekos.pontszam}`
                        jatekos.kijelolt = false
                        
                        blocked.push(jatekos.id-1)
                        gombok[jatekos.id-1].classList.add('blockedPlayer')
                        gombok[jatekos.id-1].disabled = true
                    } 
                }

                
                if(blocked.length === jatekosok.length){
                    for(jatekos of jatekosok){
                        gombok[jatekos.id-1].disabled = false
                        gombok[jatekos.id-1].classList.remove('blockedPlayer')
                        gombok[jatekos.id-1].classList.remove('selectedPlayer')
                    }
                    gombok[0].classList.add('selectedPlayer')
                    jatekosok[0].kijelolt = true
                    blocked = []
                }
                
            }
        }
    })

})

//Játékosok
let jatekosSzam = document.querySelector('#playersNumber')

let ul = document.querySelector('#players')
let li, playerInput
jatekosSzam.addEventListener('input', ()=>{
    ul.innerHTML = ''
    for (let i=0; i<jatekosSzam.value; i++){
        if(i<10){
            li = document.createElement('li')
            li.innerHTML = `${i+1}. Játékos neve: `
            ul.appendChild(li)
            playerInput = document.createElement('input')
            playerInput.value = `Játékos${i+1}`
            //playerInput.value = localStorage.getItem('nev')
            ul.appendChild(playerInput)
        }
    }  
})


//Egyéb beállítások
let gyakorlo = document.querySelector('#gyakorlo')
let verseny = document.querySelector('#verseny')
let egyebBeallitas = document.querySelector('#egyebBeallitas')
let beallitasok = document.querySelectorAll('#egyebBeallitas input')
verseny.addEventListener('change', ()=>{
    if(verseny.checked){
        egyebBeallitas.style.display = "none"
        beallitasok.forEach(elem => {
            elem.checked = false
        })
    }
})
gyakorlo.addEventListener('change', ()=>{
    gyakorlo.checked ? egyebBeallitas.style.display = "block" : ''
})
