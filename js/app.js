

const twitters = [];

function onSubmit(event){
    event.preventDefault();
    let mensagem = document.querySelector('.mensagem').value;
    let person = {
        user: "Pamela Rozolem",
        address: "@PRozolem",
        picture: "profile.jpg",
        message: mensagem,
        dateTime: moment()
    };
    addTwitter(person);
    resetTwitter();
   
}

function resetTwitter(){
    document.querySelector('.mensagem').value = "" ;
    contador();
    
}

function addTwitter(person){
    let box = createTwitter(person);
    twitters.push(box);
    document.querySelector('.qtdTwitters').innerHTML = twitters.length;
    document.querySelector('.twitters').innerHTML = twitters;
}

function createTwitter(person){
    return `<div class="mensagem-twitter">
            <div class="profile-twitter">
                <img class="picture" src="./img/${person.picture}">
                <p>
                <strong>${person.user}</strong>
                ${person.address}
                <small> ${moment(person.dateTime).format('DD/MM/YYYY H:mm')}</small>
                </p>
            </div>
            <div class="texto-mensagem">
                ${person.message}
            </div>
        </div>`;
}


function contador(){
    let mensagem = document.querySelector('.mensagem').value.trim();
    buttonValidator(mensagem.length);
    colorsQtdCaracteres(mensagem.length);
    document.querySelector('.qtdCaracteres').innerHTML = 140 - mensagem.length; 
}

function tecla(event){
    if(event.keyCode == 13){
        document.querySelector('.mensagem').rows++;
    }
    if(event.keyCode == 8){
        document.querySelector('.mensagem').rows--;
    }
}



function buttonValidator(length){
    switch(true){
        case length > 0 &&  length < 140:
            document.querySelector('.btn').removeAttribute('disabled');
        break;  
        case length < 1 ||  length >= 140:
            document.querySelector('.btn').setAttribute('disabled', true);
        break;
        default: 
            document.querySelector('.btn').setAttribute('disabled', true);
    }
}



function colorsQtdCaracteres(length){
    switch(true){
        case length > 0 &&  length <= 120:
            document.querySelector('.qtdCaracteres').style.color = '#6495ED';
        break;  
        case length > 120  &&  length <= 130:
            document.querySelector('.qtdCaracteres').style.color = '#7FFF00';
        break;
        case length > 130  &&  length <= 140:
            document.querySelector('.qtdCaracteres').style.color = '#FF4500';
        break;
        default: 
        document.querySelector('.qtdCaracteres').style.color = 'black';
    }
}


function do_resize(textbox) {
    var maxrows=4; 
     var txt=textbox.value;
     var cols=textbox.cols;
   
    var arraytxt=txt.split('\n');
     var rows=arraytxt.length; 
   
    for (i=0;i<arraytxt.length;i++) 
     rows+=parseInt(arraytxt[i].length/cols);
   
    if (rows>maxrows) textbox.rows=maxrows;
     else textbox.rows=rows;
    
}