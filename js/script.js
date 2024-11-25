const firstHoodieName=document.querySelector(".art-1 h3");
firstHoodieName.innerText="Potato";

const homeLink=document.querySelector("header nav a:first-child");
homeLink.innerText="Start";

const contactLink=document.querySelector("header nav a:last-of-type");
contactLink.innerText="Mail Us"

const fireHoodi=document.querySelector(".art-2 p")
fireHoodi.innerText="This is a limited edition red hoodie "


// const fireHood=document.querySelector(".art-3 h2")
// fireHood.innerText="Fire "

const buttonColor=document.querySelector(".art-2 button")
buttonColor.style.backgroundColor="red"
buttonColor.innerText="For Free"
buttonColor.style.color="#f4b60a"


const productBackGround=document.querySelector(".art-3 figure");
productBackGround.style.backgroundColor="black"

const addressInfo=document.querySelector("footer article p")
addressInfo.innerText="San Fransisco 21st California"

const paragraphsColorChange=document.querySelectorAll("p")
paragraphsColorChange.forEach(p=>{
    p.style.color="green"
});

const allTextButton=document.querySelectorAll("button");
allTextButton.forEach(button => {
    button.innerText="add to cart"
})

// const addActive=document.querySelector("header nav");
// addActive.classList.add("active")

homeLink.classList.add("active");

const LogoClass=document.querySelector(".logo");
LogoClass.classList.remove("logo");

const addNewMenu=document.createElement("a")
addNewMenu.href="#"
addNewMenu.innerText="Blog";
const navMenu=document.querySelector("nav");
navMenu.appendChild(addNewMenu)

//13
const newProduct=` <article class="art-4">
<figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
<h2>Sinus Hoodie</h2>
<h3>Grass</h3>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe ratione possimus nobis?</p>
<button>buy</button>
</article>`;
const mainContainer=document.querySelector("main");
mainContainer.insertAdjacentHTML("beforeend", newProduct)

//14
LogoClass.addEventListener("click",()=>{
    console.log("found you!")
})

//15
const articleProduct=document.querySelectorAll("article");
articleProduct.forEach(article =>{
    article.addEventListener("click",()=>{
        console.log("Hi, Im article Fire/Ash/Water.");

});
});