// 1. 
const firstHoodieName = document.querySelector('.art-1 h3');
firstHoodieName.innerText = "Potato";

// 2. 
const homeLink = document.querySelector('nav a:nth-child(1)');
homeLink.innerText = "Start";

// 3. 
const contactLink = document.querySelector('nav a:nth-child(3)');
contactLink.innerText = "Mail Us";

// 4. 
const fireHoodieDescription = document.querySelector('.art-2 p');
fireHoodieDescription.innerText = "This hoodie is perfect for chilly days and is made from high-quality materials.";

// 5. 
const fireButton = document.querySelector('.art-2 button');
fireButton.style.backgroundColor = "#ff5722"; 
fireButton.style.color = "#ffffff"; 
fireButton.innerText = "Buy Now"; 

// 6. 
const oceanHoodie = document.querySelector('.art-3');
oceanHoodie.style.backgroundColor = "#e0f7fa"; 

// 7. 
const addressInfo = document.querySelector('footer article:nth-child(2) p');
addressInfo.innerHTML = "Sinus skateboards <br> Railsvägen 20 <br> 133 37, Rampnäs"; // New address

// 8. 
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
    p.style.color = "#333"; 
});

// 9. 
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.innerText = "Add to Cart";
});

// 10. 
homeLink.classList.add('active');

// 11. 
const logoImage = document.querySelector('.logo');
logoImage.classList.remove('logo');

// 12. 
const newMenuLink = document.createElement('a');
newMenuLink.href = "#";
newMenuLink.innerText = "Blog"; 
document.querySelector('nav').appendChild(newMenuLink); 

// 13. 
const newProduct = document.createElement('article');
newProduct.className = "art-4";
newProduct.innerHTML = `
    <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
    <h2>Sinus Hoodie</h2>
    <h3>Forrest</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
    <button>Buy</button>
`;
document.querySelector('main').appendChild(newProduct); 

// 14. 
logoImage.addEventListener('click', () => {
    console.log("found you!");
});

// 15. 
const articles = document.querySelectorAll('article');
articles.forEach(article => {
    article.addEventListener('click', () => {
        const hoodieName = article.querySelector('h3').innerText; 
        console.log(`Hi, I'm article ${hoodieName}`);
    });
});