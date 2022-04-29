const menu = [
    {
        foodName : "Avocado Coffee",
        foodIMG : 'img/breakfast/avocadoCoffee.jpg',
        price : "250€",
        type : "Breakfast",
        description : "La douceur de l'avocat accompagné de l'amertume du café vous offrira une expérience innoubliable de dégout"

    },
    {
        foodName : "Egg Pizza",
        foodIMG : 'img/breakfast/eggPizza.jpg',
        price : "150€",
        type : "Breakfast",
        description : "Une envie de protéine ? Mais vous refusez d'abandonner votre plat préféré ? Pas de soucis ! Nous avons créer pour vous après plus de 5 ans de R&D la 'Egg Pizza' un massacre culinaire"

    },
    {
        foodName : "Saussage Waffle",
        foodIMG : 'img/breakfast/saussageWaffle.jpg',
        price : "150€",
        type : "Breakfast",
        description : "Une envie de protéine ? Mais vous refusez d'abandonner votre plat préféré ? Pas de soucis ! Nous avons créer pour vous après plus de 5 ans de R&D la 'Egg Pizza' un massacre culinaire"

    },
    {
        foodName : "Choco Bacon",
        foodIMG : 'img/breakfast/chocoBacon.jpg',
        price : "150€",
        type : "Breakfast",
        description : "Faut il vraiment une description pour ce plat tout droit descendu des cieux ? Non. Mange et ferme là, si tu vomis, ravale le."

    },
    {
        foodName : "Burger Cookie",
        foodIMG : 'img/lunch/burgerCookie.jpg',
        price : "389€",
        type : "Lunch",
        description : "Le moeulleux du cookie, la tendresse de la viande vous ferons retombé dans votre enfance, vous savez cette époque, ou vous mangiez tout ce que vous trouviez sans crainte DISCLAIMER : Nous ne sommes pas réponsable en cas de salmonelle "

    },
    {
        foodName : "Choco Pasta",
        foodIMG : 'img/lunch/chocoPasta.jpg',
        price : "785€",
        type : "Lunch",
        description : "Ce plat à une histoire phénomenale, connaissez vous Vin Diesel ? Eh bien il n'a absolument rien avoir dans cette histoire. c'est Volkswagn Van notre cuisinier en chef qui un jour à trébuché dans la cuisine, son coude à taper contre le pot de Nutello qui est tombé dans son assiette de pâtes au beurre, il demanda au stagiaire de gouté car il pensais que le pot était périmé, ce qui était effectivement le cas après vérification, mais cela donna au pâtes un goût unique (plutot un gout de moissi en vrai)"

    },
    {
        foodName : "Weird Lunch",
        foodIMG : 'img/lunch/worstLunch.jpg',
        price : "425€",
        type : "Lunch",
        description : "Vous êtes une personne qui met un short en hiver ? Le genre de personne qui commande son BigMac sans viande ? Vous aimez l'ananas sur les pizza ? Vous gardez vos chaussettes pendant l'amour ? Ce plat est fait pour vous."
    },
    {
        foodName : "Bacon Oreo",
        foodIMG : 'img/dinner/baconOreo.jpg',
        price : "389€",
        type : "Dinner",
        description : "Le meilleurs des deux mondes reunis pour votre plus grand plaisir ou votre plus grand malheur..." 
    },
    {
        foodName : "Cream Chips",
        foodIMG : 'img/dinner/creamChips.jpg',
        price : "895€",
        type : "Dinner",
        description : "Oui je sais... moi aussi je trouve les chips trop sec. Un soir alors que je n'étais pas du tout alcolisée j'ai voulu prendre de la crème aigre ( sour cream ) pour accompagné mes délicieuse chips au mokka, mmalencontreusement, j'ai pris de la crème fraiche à la place. Voici l'histoire de ce met delicieux"
    },
    {
        foodName : "Honey Pizza",
        foodIMG : 'img/dinner/honneyCheese.jpg',
        price : "658€",
        type : "Dinner",
        description : "Oui je sais... moi aussi je trouve les chips trop sec. Un soir alors que je n'étais pas du tout alcolisée j'ai voulu prendre de la crème aigre ( sour cream ) pour accompagné mes délicieuse chips au mokka, mmalencontreusement, j'ai pris de la crème fraiche à la place. Voici l'histoire de ce met delicieux"
    },
    {
        foodName : "Banana Water",
        foodIMG : 'img/drink/bananaWater.jpg',
        price : "128€",
        type : "Drink",
        description : "Oui je sais... moi aussi je trouve les chips trop sec. Un soir alors que je n'étais pas du tout alcolisée j'ai voulu prendre de la crème aigre ( sour cream ) pour accompagné mes délicieuse chips au mokka, mmalencontreusement, j'ai pris de la crème fraiche à la place. Voici l'histoire de ce met delicieux"
    },
    {
        foodName : "Pickles Granita",
        foodIMG : 'img/drink/pickleGranita.jpg',
        price : "194€",
        type : "Drink",
        description : "Oui je sais... moi aussi je trouve les chips trop sec. Un soir alors que je n'étais pas du tout alcolisée j'ai voulu prendre de la crème aigre ( sour cream ) pour accompagné mes délicieuse chips au mokka, mmalencontreusement, j'ai pris de la crème fraiche à la place. Voici l'histoire de ce met delicieux"
    }
]


function darkMode() {
    var element = document.body;
    element.classList.toggle("darkMode");
  }

function displayMenu ()
{
    let main =document.querySelector("main")
    let foodName;
    let foodIMG;
    let price;
    let type;
    let description;
    let article;


    for (const food  of menu) {
        foodName = document.createElement("h3");
        foodName.className = "foodName";
        foodIMG = document.createElement("img");
        foodIMG.className ="bouffe";
        article = document.createElement("article");
        article.className= "type";
        description = document.createElement("p");
        description.className = "description";
        type = document.createElement("p");
        price = document.createElement("p");
        price.className = "price";
        


        const buttons = document.createElement("button");
        buttons.textContent = "Ajouter au panier";
        buttons.className = "buttons";
        
        


        price.appendChild(document.createTextNode(food.price));
        foodName.appendChild(document.createTextNode(food.foodName));
        description.appendChild(document.createTextNode(food.description));
        


        article.appendChild(foodIMG);

        
        article.appendChild(foodName);
        article.appendChild(description)
        article.appendChild(price);
        article.appendChild(buttons);
        
        
        
      
        document.querySelector("main").appendChild(article);
        

        foodIMG.setAttribute("src", food.foodIMG);
    }

    
}



    displayMenu();

    

    function remplirCatalogue() {
        let list= document.getElementById('list');
      for (let food of menu) {
          let e= document.createElement("option");
          e.value=food.price;
            let txt= document.createTextNode(food.foodName);
            e.appendChild(txt);
          list.appendChild(e);
          
      }

  }

  

  function ajouterCase(parent, txt) {
      var e = document.createElement("td");
      e.appendChild(document.createTextNode(txt));
      parent.appendChild(e);
    }
    
    

 // TOTAL //  
const panier = []


function total() {
  let tot= 0;
  for (let i in panier) {
      tot+= panier[i].price;
  }
  return tot;
}

// AJOUTER ARTICLES //
function ajouter() {
    
      let list= document.getElementById('list');

      let choix= list.options[list.selectedIndex];
      panier.push(choix)
      let ligne= document.createElement("tr");
      ajouterCase(ligne,choix.innerText); 
      ajouterCase(ligne,choix.value);
       
      document.getElementById("pan").appendChild(ligne);
      document.getElementById("tot").innerHTML= total();
console.log(panier)
}
  
function remplirCatalogue() {
    let list= document.getElementById('list');
  for (let food of menu) {
      let e= document.createElement("option");
      e.value=food.price;
        let txt= document.createTextNode(food.foodName);
        e.appendChild(txt);
      list.appendChild(e);
      
  }

}



function ajouterCase(parent, txt) {
  var e = document.createElement("td");
  e.appendChild(document.createTextNode(txt));
  parent.appendChild(e);
}


// AJOUTER ARTICLES //
function ajouter() {

  let list= document.getElementById('list');

  let choix= list.options[list.selectedIndex];
  panier.push(choix)
  let ligne= document.createElement("tr");
  ajouterCase(ligne,choix.innerText); 
  ajouterCase(ligne,choix.value);
   
  document.getElementById("pan").appendChild(ligne);
  document.getElementById("tot").innerHTML= total();
console.log(panier)
}

remplirCatalogue();



// COMMANDER //

function miam() {
alert("Thanks for your command ! Buon Appetito")
}


/*
function commander() {
let basket = document.querySelector(".basket")
let commande = document.createElement("button")
commande.innerHTML = "commander"
commande.addEventListener("click", alert)
  basket.appendChild(commande)
}
*/


function visible() {
let command = document.querySelector(".command")
command.style.visibility = "visible"
}

let add = document.querySelector(".add")

add.addEventListener("click", visible)
