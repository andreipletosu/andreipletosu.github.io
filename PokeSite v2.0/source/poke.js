class HealthBar{
    constructor(x ,y ,w, h, maxHealth, color, backgroudn_color){
        this.x =x;
        this.y =y;
        this.w =w;
        this.animation_w=this.maxWidth;
        this.animation_dw=0;
        this.animation_step=0;
        this.damage_w = 0;
        this.h =h;
        this.maxHealth = maxHealth;
        this.maxWidth = w;
        this.health = maxHealth;
        this.color_health = color;
        this.color_damage = "black";
    }
    
    show(context) {
        context.font = "30px Arial";
        context.fillText(health, x, y);
        context.strokeText(health,x,y);
        context.lineWith = 5;
        context.strokeStyle = "#000";
        this.w = (this.health / this.maxHealth) * this.maxWidth;
        this.damage_w = this.maxWidth - this.w;
        context.fillStyle = this.color_damage;
        context.fillRect(440, this.y, -this.animation_dw, this.h);
        context.fillStyle = this.color_health;
        context.fillRect(this.x, this.y, this.animation_w, this.h);
        context.strokeRect(this.x, this.y, this.maxWidth, this.h);
    }
    
    updateHealth(value) {
        this.health = value;
        if(this.health < 600) this.color_health = "yellow";
        if(this.health < 300) this.color_health = "red";
        if(this.health > 600) this.color_health = "lightgreen";
        if(this.health == 0) {
            document.getElementById("pokemon-name").innerHTML = "Fainted";
            setTimeout(newpokemon,5000);
        }
        document.getElementById("Pokemon-Image").classList.remove("popout");
        document.getElementById("Pokemon-Image").classList.remove("dead");
        document.getElementById("Pokemon-Image").classList.remove("shake");
        document.getElementById("Pokemon-Image").classList.remove("heal");
    }
}
const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');
const width = canvas.width = 480;
const height = canvas.height = 100;
let pokemons; //= ["Charizard","Bulbasaur","Pikachu","Dialga","Pikanobi","Pika Pool","Greninja","Rayquaza","Gyarados","Brutalanda","Ditto","Giratina","Glarian Moltres", "Milotic", "Necrozma","Tornadus","Regirock", "Solgaleo", "Zacian", "Yveltal"];    // <------------ ADAUGA AICI NUMELE FILEURILOR PNG CU POKEMONII
let randomPokemons = new Array;
//shuffleArray(randomPokemons);
const maxHealth = 1000;
let health = maxHealth;
const healthBarWidth = 400;
const healthBarHeight = 30;
const x = width / 2 - healthBarWidth/  2;
const y = height / 2 - healthBarHeight / 2;
let count = 0;

const healthBar = new HealthBar(x, y, healthBarWidth, healthBarHeight, health, "lightgreen");
healthBar.animation_dw = 0;
healthBar.animation_w = healthBar.maxWidth;

const frame = function (){
    context.clearRect(0, 0, width, height);
    healthBar.show(context);
    if(healthBar.animation_dw<healthBar.damage_w) healthBar.animation_dw += 2;
    if(healthBar.animation_w>=healthBar.w) healthBar.animation_w -= 2;
    if(healthBar.animation_dw>healthBar.damage_w) healthBar.animation_dw -= 2;
    if(healthBar.animation_w<=healthBar.w) healthBar.animation_w +=2;
    
    requestAnimationFrame(frame);
}

frame();

function newhealthplus(number){
    if (health == maxHealth) return;
    health += number;
    if(health > maxHealth) health = maxHealth;
    healthBar.updateHealth(health);
    heal();
}

function newhealthminus(number){
    if (health == 0) {
        return;
    }
    if(number >= health){ 
        health = 0; 
        healthBar.updateHealth(health);
        death();
        ballSh();
        return; 
    }
    health -= number;
    healthBar.updateHealth(health);
    death();
    ballSh();
}

function instakill(){
    if (health == 0) { 
        return;
    }
    health = 0;
    healthBar.updateHealth(health);
    death();
}
function newpokemon() {
    //let pokemon = pokemons[Math.floor(Math.random()*pokemons.length)];
    if(!randomPokemons.length) {console.log(pokemons); randomPokemons = shuffleArray([...pokemons]);
        //shuffleArray(randomPokemons);
    }
    let pokemon = randomPokemons.pop();
    console.log(pokemons);
    console.log(randomPokemons);
    document.querySelector("#Pokemon-Image").src = "pokemons/" + pokemon + ".png";
    document.getElementById("pokemon-name").innerHTML = pokemon;
    health = maxHealth;
    healthBar.damage_w = 0;
    healthBar.w = healthBar.maxWidth;
    if(healthBar.health == 0)
        alert("Congratulations!");
    healthBar.updateHealth(health);
    popout();
}

function shuffleArray(array) {
    
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}

function ballSh() {
    if(healthBar.health != 0)
    document.getElementById("Pokemon-Image").classList += "shake";

    setTimeout(removeclass,200);
}
function removeclass(){
    document.getElementById("Pokemon-Image").classList.remove("shake");
}

function death(){
    if(healthBar.health == 0){
    document.getElementById("Pokemon-Image").classList += "dead";
    }
}

function removedead(){
    document.getElementById("Pokemon-Image").classList.remove("dead");
}
function heal() {
    document.getElementById("Pokemon-Image").classList += "heal";

    setTimeout(removeclass2,200);
}
function removeclass2(){
    document.getElementById("Pokemon-Image").classList.remove("heal");
}

function popupwindow(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  } 

function shoutouts(){
    const name = document.getElementById("fname").value;
    count++;
    changeCss();
    removeChildAnimation();
    const section = document.getElementById("#area");
    let para;
    if(!section.children.length != 0){
        para = document.createElement("p");
        para.innerHTML = name;
        para.setAttribute("id","anim");
        section.append(para);
    }
    else{
    para = document.createElement("p");
    para.innerHTML = name;
    para.setAttribute("id","anim");
    section.appendChild(para);
    }
    section.className += "hide";
    setTimeout(addChildAnimation,100);
  }
  console.log(count);

function removeChildAnimation(){
    var elements = document.querySelectorAll('#anim');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("scroll");
        }
}

function addChildAnimation(){
    const section = document.getElementById("#area");
    section.classList.remove("hide");
    var elements = document.querySelectorAll("#anim");
    for (var i = 0; i < elements.length; i++) {
        elements[i].className += "scroll";
        }
}

function changeCss(){
    let trans;
    let minus_trans;
    let seconds;
    if(count <= 2){
        trans = count * 200;
        minus_trans = count * -100;
        seconds = count * 8;
    }
    if(count > 2 && count <= 6){
        trans = count * 100;
        minus_trans = count * -100;
        seconds = count * 6;
    }
    if(count > 6){
        trans = count * 100;
        minus_trans = count * -100;
        seconds = count * 4;
    }
    document.documentElement.style.setProperty('--trans', trans + "%");
    document.documentElement.style.setProperty('--minus-trans', minus_trans + "%");
    document.documentElement.style.setProperty('--seconds', seconds + "s");
}

let aux_arr = new Array;
function insertPokemons(){
    let reader = new FileReader();
    var fileToRead = document.querySelector('input[type=file]').files[0];
    // attach event, that will be fired, when read is end
    reader.addEventListener("loadend", function() {
    // reader.result contains the contents of blob as a typed array
    // we insert content of file in DOM here
    aux_arr = reader.result;
    pokemons = aux_arr.split("\r\n");
    newpokemon();
});

// start reading a loaded file
reader.readAsText(fileToRead);
}

async function popout(){
    document.getElementById("Pokemon-Image").classList += "popout";
    await sleep(1000);

    removePopout();
}
function removePopout(){
    document.getElementById("Pokemon-Image").classList.remove("popout");
}