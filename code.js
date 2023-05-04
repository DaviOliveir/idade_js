function confir() {
    let data = new Date();
    let ano = data.getFullYear();
    let formularioAno = window.document.getElementsByName('ano');
    let resultado = window.document.getElementById('resto');

    if (formularioAno.value == 0 || formularioAno.value  > ano) {
        window.alert("Por favor digite um ano válido");
    } else {
        let nascimento = Number(formularioAno[0].value)
        let sexo = document.getElementsByName('sexo')  
        let idade = ano - nascimento
        let genero = ''
        let homem = 0
        let mulher = 1
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        let valorSexo = '';
        for (let i = 0; i < sexo.length; i++) {
        if (sexo[i].checked) {
            valorSexo = sexo[i].value;
        }
        }
        if(valorSexo == homem){
            genero = 'homem'

         } if( idade <= 10){    
            img.setAttribute('src', 'bebemasculino.jpg')
            //criança
        }else if(idade >10 && idade <=21){
            img.setAttribute('src', 'jovemasculino.jpg')
            //jovem
        }else if(idade >21 && idade <=50){
            img.setAttribute('src', 'adulto.jpg')
            //adulto
        }else if (idade >50 ){

            img.setAttribute('src', 'velho.jpg')
            //idoso
        }
           else if(valorSexo == mulher){

               genero = 'mulher'

            } if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'bebef.jpg')

                //criança
            }else if(idade>10 && idade <=21){
                img.setAttribute('src', 'jovemf.jpg')   
    
                //jovem
            }else if(idade >21 && idade<=50){
                img.setAttribute('src', 'adulta.jpg')
    
                //adulto
            }else {
                img.setAttribute('src', 'velha.jpg')
                //idoso
            }



        
            
        
       resultado.style.textAlign = 'center'
        resultado.innerHTML = `seu genero é ${genero} e sua idade é ${idade}`
        resultado.appendChild(img)
    }
}


    











