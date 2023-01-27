const controls = document.querySelectorAll(".control") //para selecionar todos eles

 let currentItem = 0;

 const items = document.querySelectorAll(".item")

  const maxItems = items.length; //aqui esta amarzenado quantas imagen tem 

  controls.forEach(control =>{
    control.addEventListener('click', ( )=>{
      const isLeft = control.classList.contains('arrow-left') //classList é uma alternativa conveniente para acessar a lista de classes de um elemento e aqui estou difereciando um do outro senod assim os botão que for arrow-left e true caso não e false
        console.log("clicou", isLeft)

        if(isLeft){
          currentItem -=1 //bem se o botão left for precisonado o primeiro item vai diminuir
          
        }else{
          currentItem += 1
        }

      
        if(currentItem >= maxItems){ // valor que passar do valor total vai voltar para 0

          currentItem = 0;

        }
        if(currentItem < 0){//se for menor que 0 vai valer como ultimo numero
         currentItem = maxItems -1
        }
    items.forEach(item =>{
      item.classList.remove("current-item");

      items[currentItem].scrollIntoView({ // move o elemento ao qual é aplicado para a área visível da janela do navegador.
        inline: "center",
        behavior: "smooth" //melhora a rolagem
        
      })
      items[currentItem].classList.add("current-item")//adicionado a class para cada imagem que passar 
    })
    })
  })// ele é usando para determinar cada ação em um array tipo o primeiro array faz uma coisa depois o outro outra coisa
