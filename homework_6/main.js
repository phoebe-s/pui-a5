/* init cinnamon roll */
function cinnamonRoll (name, price, glaze, amount) {
    this.name = name;
    this.price = price;
    this.glaze = glaze;
    this.amount = amount;
}

/* update glazing selections */
var noGlazing = document.getElementById("none")
var sugar = document.getElementById("sugar-milk");
var vanilla = document.getElementById("vanilla-milk");
var chocolate = document.getElementById("double-chocolate");

function selectNone() {
    var notSelected = [vanilla, sugar, chocolate];
    noGlazing.style.border = "2px #D1A4FF solid";
    noGlazing.style.color = "#D1A4FF";
    for (var i = 0; i < notSelected.length; i++) {
        notSelected[i].style.border = "2px #000000 solid";
        notSelected[i].style.color = "#000000";
    }
}

function selectVanilla() {
    var notSelected = [noGlazing, sugar, chocolate];
    vanilla.style.border = "2px #D1A4FF solid";
    vanilla.style.color = "#D1A4FF";
    for (var i = 0; i < notSelected.length; i++) {
        notSelected[i].style.border = "2px #000000 solid";
        notSelected[i].style.color = "#000000";
    }
}

function selectSugar() {
    var notSelected = [vanilla, noGlazing, chocolate];
    sugar.style.border = "2px #D1A4FF solid";
    sugar.style.color = "#D1A4FF";
    for (var i = 0; i < notSelected.length; i++) {
        notSelected[i].style.border = "2px #000000 solid";
        notSelected[i].style.color = "#000000";
    }
}

function selectChocolate() {
    var notSelected = [vanilla, sugar, noGlazing];
    chocolate.style.border = "2px #D1A4FF solid";
    chocolate.style.color = "#D1A4FF";
    for (var i = 0; i < notSelected.length; i++) {
        notSelected[i].style.border = "2px #000000 solid";
        notSelected[i].style.color = "#000000";
    }
}
if (noGlazing) noGlazing.addEventListener('click', selectNone);
if (vanilla) vanilla.addEventListener('click', selectVanilla);
if (sugar) sugar.addEventListener('click', selectSugar);
if (chocolate) chocolate.addEventListener('click', selectChocolate);

/* update amount selections */
var one = document.getElementById("one")
var three = document.getElementById("three");
var six = document.getElementById("six");
var twelve = document.getElementById("twelve");

function selectOne() {
    var notSelected = [three, six, twelve];
    one.style.border = "2px #D1A4FF solid";
    one.style.color = "#D1A4FF";
    for (var i = 0; i < notSelected.length; i++) {
        notSelected[i].style.border = "2px #000000 solid";
        notSelected[i].style.color = "#000000";
    }
}

function selectThree() {
    var notSelected = [one, six, twelve];
    three.style.border = "2px #D1A4FF solid";
    three.style.color = "#D1A4FF";
    for (var i = 0; i < notSelected.length; i++) {
        notSelected[i].style.border = "2px #000000 solid";
        notSelected[i].style.color = "#000000";
    }
}

function selectSix() {
    var notSelected = [one, three, twelve];
    six.style.border = "2px #D1A4FF solid";
    six.style.color = "#D1A4FF";
    for (var i = 0; i < notSelected.length; i++) {
        notSelected[i].style.border = "2px #000000 solid";
        notSelected[i].style.color = "#000000";
    }
}

function selectTwelve() {
    var notSelected = [one, three, six];
    twelve.style.border = "2px #D1A4FF solid";
    twelve.style.color = "#D1A4FF";
    for (var i = 0; i < notSelected.length; i++) {
        notSelected[i].style.border = "2px #000000 solid";
        notSelected[i].style.color = "#000000";
    }
}
if (one) one.addEventListener('click', selectOne);
if (three) three.addEventListener('click', selectThree);
if (six) six.addEventListener('click', selectSix);
if (twelve) twelve.addEventListener('click', selectTwelve);