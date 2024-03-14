const body = document.querySelector('body')
const titre = document.createElement('h1')
titre.innerText = 'Quizz'
body.appendChild(titre)

const explication = document.createElement('p')
explication.innerText =' Salut à tous et bienvenue à ce quiz sur les bons réflexes à avoir quand on est confronté au cyberharcèlement. On sait que c"est quelque chose qui peut arriver à n"importe qui sur internet, surtout à notre âge. C"est pour ça qu"il est super important de savoir comment réagir pour se protéger et aider nos amis. Prêt à tester tes connaissances sur ce qu"il faut faire en cas de cyberharcèlement ? Let"s go!'
explication.classList.add ('quizztext')
body.appendChild(explication)

const test = document.createElement ('button')
test.innerText ='Faire le test'
test.classList.add('test')
body.appendChild(test)

test.addEventListener('click', () => {
    explication.remove()
    test.remove()
    footer.remove()
    question1()
    valider1()
})


/**Nom des questions */
function question1(){
    const quest = document.createElement('h3')
    quest.innerText='Question 1: Quelles sont les différents types de cyber harcèlement ?'
    quest.classList.add('quest')
    body.appendChild(quest)

    qcm1()
}
function question2(){
    const quest = document.createElement('h3')
    quest.innerText='Question 2: Combien d"ados déclarent avoir été victimes de cyber-harcèlement ?'
    quest.classList.add('quest')
    body.appendChild(quest)

    qcm2()
}
function question3(){
    const quest = document.createElement('h3')
    quest.innerText='Question 3: Quel pourcentage des parents n"ont pas connaissance de ce que leurs enfants font sur les réseaux sociaux ?'
    quest.classList.add('quest')
    body.appendChild(quest)

    qcm3()
}
function question4(){
    const quest = document.createElement('h3')
    quest.innerText='Question 4: Que faire si je suis victime ou témoin de cyber-harcèlement ?'
    quest.classList.add('quest')
    body.appendChild(quest)

    qcm4()
}
function question5(){
    const quest = document.createElement('h3')
    quest.innerText='Question 5: De quoi les jeunes ont-ils le plus peur ?'
    quest.classList.add('quest')
    body.appendChild(quest)
    qcm5()
}

/** Choix des réponses*/
function qcm1(){
    /**Réponses 1 */
    const div= document.createElement('div')
    div.classList.add('div')
    body.appendChild(div)

    const check= document.createElement('div')
    check.classList.add('check')
    div.appendChild(check)

    const proposition = document.createElement('p')
    proposition.innerText='Piratage de compte'
    proposition.classList.add('proposition')
    div.appendChild(proposition)

    div.addEventListener('click', () => {
        div.style.backgroundColor ='green'
    })

    /**Réponses 2 */
    const div2= document.createElement('div')
    div2.classList.add('div')
    body.appendChild(div2)

    const check2= document.createElement('div')
    check2.classList.add('check')
    div2.appendChild(check2)

    const proposition2 = document.createElement('p')
    proposition2.innerText='Divergence d’opinions'
    proposition2.classList.add('proposition')
    div2.appendChild(proposition2)

    div2.addEventListener('click', () => {
        div2.style.backgroundColor ='red'
    })

    /**Réponses 3 */
    const div3= document.createElement('div')
    div3.classList.add('div')
    body.appendChild(div3)

    const check3= document.createElement('div')
    check3.classList.add('check')
    div3.appendChild(check3)

    const proposition3 = document.createElement('p')
    proposition3.innerText='Intimidations, insulte, moqueries'
    proposition3.classList.add('proposition')
    div3.appendChild(proposition3)

    div3.addEventListener('click', () => {
        div3.style.backgroundColor ='green'
    })

    /**Réponses 4 */
    const div4 = document.createElement('div')
    div4.classList.add('div')
    body.appendChild(div4)

    const check4= document.createElement('div')
    check4.classList.add('check')
    div4.appendChild(check4)

    const proposition4 = document.createElement('p')
    proposition4.innerText='Rumeurs en ligne'
    proposition4.classList.add('proposition')
    div4.appendChild(proposition4)

    div4.addEventListener('click', () => {
        div4.style.backgroundColor ='green'
    })
}
function qcm2(){
    /**Réponses 1 */
    const div= document.createElement('div')
    div.classList.add('div')
    body.appendChild(div)

    const check= document.createElement('div')
    check.classList.add('check')
    div.appendChild(check)

    const proposition = document.createElement('p')
    proposition.innerText='1 ado sur 10'
    proposition.classList.add('proposition')
    div.appendChild(proposition)

    div.addEventListener('click', () => {
        div.style.backgroundColor ='green'
    })

    /**Réponses 2 */
    const div2= document.createElement('div')
    div2.classList.add('div')
    body.appendChild(div2)

    const check2= document.createElement('div')
    check2.classList.add('check')
    div2.appendChild(check2)

    const proposition2 = document.createElement('p')
    proposition2.innerText='1 ado sur 100'
    proposition2.classList.add('proposition')
    div2.appendChild(proposition2)

    div2.addEventListener('click', () => {
        div2.style.backgroundColor ='red'
    })

    /**Réponses 3 */
    const div3= document.createElement('div')
    div3.classList.add('div')
    body.appendChild(div3)

    const check3= document.createElement('div')
    check3.classList.add('check')
    div3.appendChild(check3)

    const proposition3 = document.createElement('p')
    proposition3.innerText='1 ado sur 1000'
    proposition3.classList.add('proposition')
    div3.appendChild(proposition3)

    div3.addEventListener('click', () => {
        div3.style.backgroundColor ='red'
    })

    /**Réponses 4 */
    const div4 = document.createElement('div')
    div4.classList.add('div')
    body.appendChild(div4)

    const check4= document.createElement('div')
    check4.classList.add('check')
    div4.appendChild(check4)

    const proposition4 = document.createElement('p')
    proposition4.innerText='1 ado sur 10000'
    proposition4.classList.add('proposition')
    div4.appendChild(proposition4)

    div4.addEventListener('click', () => {
        div4.style.backgroundColor ='red'
    })
}
function qcm3(){
    /**Réponses 1 */
    const div= document.createElement('div')
    div.classList.add('div')
    body.appendChild(div)

    const check= document.createElement('div')
    check.classList.add('check')
    div.appendChild(check)

    const proposition = document.createElement('p')
    proposition.innerText='12%'
    proposition.classList.add('proposition')
    div.appendChild(proposition)

    div.addEventListener('click', () => {
        div.style.backgroundColor ='red'
    })

    /**Réponses 2 */
    const div2= document.createElement('div')
    div2.classList.add('div')
    body.appendChild(div2)

    const check2= document.createElement('div')
    check2.classList.add('check')
    div2.appendChild(check2)

    const proposition2 = document.createElement('p')
    proposition2.innerText='25%'
    proposition2.classList.add('proposition')
    div2.appendChild(proposition2)

    div2.addEventListener('click', () => {
        div2.style.backgroundColor ='red'
    })

    /**Réponses 3 */
    const div3= document.createElement('div')
    div3.classList.add('div')
    body.appendChild(div3)

    const check3= document.createElement('div')
    check3.classList.add('check')
    div3.appendChild(check3)

    const proposition3 = document.createElement('p')
    proposition3.innerText='78%'
    proposition3.classList.add('proposition')
    div3.appendChild(proposition3)

    div3.addEventListener('click', () => {
        div3.style.backgroundColor ='green'
    })

    /**Réponses 4 */
    const div4 = document.createElement('div')
    div4.classList.add('div')
    body.appendChild(div4)

    const check4= document.createElement('div')
    check4.classList.add('check')
    div4.appendChild(check4)

    const proposition4 = document.createElement('p')
    proposition4.innerText='96%'
    proposition4.classList.add('proposition')
    div4.appendChild(proposition4)

    div4.addEventListener('click', () => {
        div4.style.backgroundColor ='red'
    })
}
function qcm4(){
    /**Réponses 1 */
    const div= document.createElement('div')
    div.classList.add('div')
    body.appendChild(div)

    const check= document.createElement('div')
    check.classList.add('check')
    div.appendChild(check)

    const proposition = document.createElement('p')
    proposition.innerText='En parler à quelqu"un de confiance'
    proposition.classList.add('proposition')
    div.appendChild(proposition)

    div.addEventListener('click', () => {
        div.style.backgroundColor ='green'
    })

    /**Réponses 2 */
    const div2= document.createElement('div')
    div2.classList.add('div')
    body.appendChild(div2)

    const check2= document.createElement('div')
    check2.classList.add('check')
    div2.appendChild(check2)

    const proposition2 = document.createElement('p')
    proposition2.innerText='Appeler la police'
    proposition2.classList.add('proposition')
    div2.appendChild(proposition2)

    div2.addEventListener('click', () => {
        div2.style.backgroundColor ='red'
    })

    /**Réponses 3 */
    const div3= document.createElement('div')
    div3.classList.add('div')
    body.appendChild(div3)

    const check3= document.createElement('div')
    check3.classList.add('check')
    div3.appendChild(check3)

    const proposition3 = document.createElement('p')
    proposition3.innerText='Appeler le 3018 ou le 3020'
    proposition3.classList.add('proposition')
    div3.appendChild(proposition3)

    div3.addEventListener('click', () => {
        div3.style.backgroundColor ='green'
    })

    /**Réponses 4 */
    const div4 = document.createElement('div')
    div4.classList.add('div')
    body.appendChild(div4)

    const check4= document.createElement('div')
    check4.classList.add('check')
    div4.appendChild(check4)

    const proposition4 = document.createElement('p')
    proposition4.innerText='On ne peut rien faire malheureusement'
    proposition4.classList.add('proposition')
    div4.appendChild(proposition4)

    div4.addEventListener('click', () => {
        div4.style.backgroundColor ='red'
    })
}
function qcm5(){
    /**Réponses 1 */
    const div= document.createElement('div')
    div.classList.add('div')
    body.appendChild(div)

    const check= document.createElement('div')
    check.classList.add('check')
    div.appendChild(check)

    const proposition = document.createElement('p')
    proposition.innerText='Ne pas utiliser le bon filtre sur Instagram'
    proposition.classList.add('proposition')
    div.appendChild(proposition)

    div.addEventListener('click', () => {
        div.style.backgroundColor ='red'
    })

    /**Réponses 2 */
    const div2= document.createElement('div')
    div2.classList.add('div')
    body.appendChild(div2)

    const check2= document.createElement('div')
    check2.classList.add('check')
    div2.appendChild(check2)

    const proposition2 = document.createElement('p')
    proposition2.innerText='Perdre leurs mots de passe'
    proposition2.classList.add('proposition')
    div2.appendChild(proposition2)

    div2.addEventListener('click', () => {
        div2.style.backgroundColor ='red'
    })

    /**Réponses 3 */
    const div3= document.createElement('div')
    div3.classList.add('div')
    body.appendChild(div3)

    const check3= document.createElement('div')
    check3.classList.add('check')
    div3.appendChild(check3)

    const proposition3 = document.createElement('p')
    proposition3.innerText='Se faire voler leur données personnelles'
    proposition3.classList.add('proposition')
    div3.appendChild(proposition3)

    div3.addEventListener('click', () => {
        div3.style.backgroundColor ='red'
    })

    /**Réponses 4 */
    const div4 = document.createElement('div')
    div4.classList.add('div')
    body.appendChild(div4)

    const check4= document.createElement('div')
    check4.classList.add('check')
    div4.appendChild(check4)

    const proposition4 = document.createElement('p')
    proposition4.innerText='Être ennuyés ou harcelés'
    proposition4.classList.add('proposition')
    div4.appendChild(proposition4)

    div4.addEventListener('click', () => {
        div4.style.backgroundColor ='green'
    })
}

/**Bouton pour accéder à la question suivante */
function valider1(){
    const valider = document.createElement ('button')
    valider.innerText ='Question suivante'
    valider.classList.add ('btnvalider')
    valider.addEventListener('click', () => {
        question2()
        valider.remove()
        valider2()
    })
    body.appendChild(valider)
}

function valider2(){
    const valider = document.createElement ('button')
    valider.innerText ='Question suivante'
    valider.classList.add ('btnvalider')
    valider.addEventListener('click', () => {
        question3()
        valider.remove()
        valider3()
    })
    body.appendChild(valider)
}
function valider3(){
    const valider = document.createElement ('button')
    valider.innerText ='Question suivante'
    valider.classList.add ('btnvalider')
    valider.addEventListener('click', () => {
        question4()
        valider.remove()
        valider4()
    })
    body.appendChild(valider)
}
function valider4(){
    const valider = document.createElement ('button')
    valider.innerText ='Question suivante'
    valider.classList.add ('btnvalider')
    valider.addEventListener('click', () => {
        question5()
        valider.remove()
    })
    body.appendChild(valider)
}

/**footer */
const footer = document.createElement('div')
footer.classList.add('footer')
body.appendChild(footer)

const footnavbar = document.createElement('div')
footnavbar.classList.add('footnavbar')
footer.appendChild(footnavbar)

const img = document.createElement('img')
img.src = './Links/Logo safe blanc.png'
img.classList.add('logofoot')
footnavbar.appendChild(img)

const navfoot = document.createElement('div')
navfoot.classList.add('navfoot')
footnavbar.appendChild(navfoot)

const index = document.createElement ('a')
index.innerText = 'Accueil'
index.classList.add ('onglet')
navfoot.appendChild(index)

const blog = document.createElement ('a')
blog.innerText = 'Blog'
blog.classList.add ('onglet')
navfoot.appendChild(blog)

const podcast = document.createElement ('a')
podcast.innerText = 'Podcast'
podcast.classList.add ('onglet')
navfoot.appendChild(podcast)

const qui_sommes_nous = document.createElement ('a')
qui_sommes_nous.innerText = 'Qui sommes-nous ?'
qui_sommes_nous.classList.add ('onglet')
navfoot.appendChild(qui_sommes_nous)


const contact = document.createElement ('a')
contact.innerText = 'Contact'
contact.classList.add ('onglet')
navfoot.appendChild(contact)


const quizz = document.createElement ('a')
quizz.innerText = 'Quizz'
quizz.classList.add ('onglet')
navfoot.appendChild(quizz)

const footcontact = document.createElement ('div')
footcontact.classList.add ='footcontact'
footer.appendChild(footcontact)

const numerofoot = document.createElement ('p')
numerofoot.innerText = '3018'
numerofoot.classList.add('numerofoot')
footcontact.appendChild(numerofoot)

const logors = document.createElement('div')
logors.classList.add = 'logors'
footcontact.appendChild(logors)

const logoinsta = document.createElement ('img')
logoinsta.src = './Links/Insta.png'
logoinsta.classList.add ('logoinsta')
logors.appendChild(logoinsta)

const logotiktok = document.createElement ('img')
logotiktok.src = './Links/Tiktok.png'
logotiktok.classList.add ('logotiktok')
logors.appendChild(logotiktok)