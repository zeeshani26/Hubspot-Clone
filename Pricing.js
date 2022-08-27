let arrow1=false;
let arrow2=false;
let arrow3=false;
let arrow4=false;
let arrow5=false;
let arrow6=false;
let div_1 = document.getElementById("myDropdown1")
let div_2 = document.getElementById("myDropdown2")
let div_3 = document.getElementById("myDropdown3")
let div_4 = document.getElementById("myDropdown4")
let div_5 = document.getElementById("myDropdown5")
let div_6 = document.getElementById("myDropdown6")
let div_7 = document.getElementById("myDropdown7")
let div_8 = document.getElementById("myDropdown8")
let div_9 = document.getElementById("myDropdown9")
let div_10 = document.getElementById("myDropdown10")
let div_11 = document.getElementById("myDropdown11")
let div_12 = document.getElementById("myDropdown12")
let div_13 = document.getElementById("myDropdown13")
let div_14 = document.getElementById("myDropdown14")
let div_15 = document.getElementById("myDropdown15")
let div_16 = document.getElementById("myDropdown16")
let div_17 = document.getElementById("myDropdown17")
let div_18 = document.getElementById("myDropdown18")

function price_change1(user) {
    if(user>=2){
    let final = user - 2;
    let result = 45 + (final*23)
    let display = document.getElementById("display_price1");
    let mini = document.getElementById("actual1");
    let strikes = document.getElementById("strike1");
    mini.innerHTML = null;
    strikes.innerHTML = null;
    mini.innerText = result*12;
    strikes.innerText = 600 + (final*300)
    display.innerHTML = null;
    display.innerText = result;}
}
function price_change2(user) {
    if(user>=5){
    let final = user - 5;
    let result = 450 + (final*90)
    let display = document.getElementById("display_price2");
    let mini = document.getElementById("actual2");
    let strikes = document.getElementById("strike2");
    mini.innerHTML = null;
    strikes.innerHTML = null;
    strikes.innerText = 7200 + (final*1200)
    mini.innerText = result*12;
    display.innerHTML = null;
    display.innerText = result;}
}
function price_change3(user) {
    if(user>=10){
    let final = user - 10;
    let result = 1200 + (final*120)
    let display = document.getElementById("display_price3");
    let mini = document.getElementById("actual3");
    mini.innerHTML = null;
    mini.innerText = result*12;
    display.innerHTML = null;
    display.innerText = result;}
}

function price_change4(user) {
    if(user>=2){
    let final = user - 2;
    let result = 45 + (final*23)
    let display = document.getElementById("display_price4");
    let mini = document.getElementById("actual4");
    let strikes = document.getElementById("strike4");
    strikes.innerHTML = null;
    strikes.innerText = 600 + (final*300)
    mini.innerHTML = null;
    mini.innerText = result*12;
    display.innerHTML = null;
    display.innerText = result;}
}
function price_change5(user) {
    if(user>=5){
    let final = user - 5;
    let result = 450 + (final*90)
    let display = document.getElementById("display_price5");
    let mini = document.getElementById("actual5");
    let strikes = document.getElementById("strike5");
    strikes.innerHTML = null;
    strikes.innerText = 7200 + (final*1200)
    mini.innerHTML = null;
    mini.innerText = result*12;
    display.innerHTML = null;
    display.innerText = result;}
}
function price_change6(user) {
    if(user>=10){
    let final = user - 10;
    let result = 1200 + (final*120)
    let display = document.getElementById("display_price6");
    let mini = document.getElementById("actual6");
    mini.innerHTML = null;
    mini.innerText = result*12;
    display.innerHTML = null;
    display.innerText = result;}
}



let description_1 = document.createElement("p")
description_1.innerText = "Yes! This is not a free trial. HubSpot’s free tools are 100% free — simple as that. You can add 1,000,000 contacts, unlimited free users, and your free access has no time limit. Just be aware that if you use HubSpot’s free CRM tools with Marketing Hub, the contacts you add to your free CRM tools end up in both places, which could affect your Marketing Hub subscription’s contact tier pricing.";
div_1.append(description_1)

let description_2 = document.createElement("p");
description_2.innerText = "HubSpot’s free tools offer many “lite” versions of select tools featured in our paid products. There are limits to your free HubSpot account, which differ by feature."
div_2.append(description_2)

let description_3 = document.createElement("p");
description_3.innerText = "Yes, you can connect HubSpot’s free CRM tools to Gmail, G Suite, and many versions of Outlook."
div_3.append(description_3)

let description_4 = document.createElement("p");
description_4.innerText = "You can think of a user as any person who has access to use the HubSpot software. You can always have unlimited free users, whether or not you decide to upgrade some users to a paid version of Sales Hub or Service Hub. That means even if you upgrade, you only need to pay for the users who need access to paid features — and your other free users will still remain free!"
let description_4_b = document.createElement("p");
description_4_b.innerHTML ="Paid plans, however, include a set number of paid users that you can increase on a per-user basis."
div_4.append(description_4,description_4_b)

let description_5 = document.createElement("p");
description_5.innerText = "You can add up to 1,000,000 contacts to your free HubSpot account. Just be aware that if you use HubSpot’s free CRM tools with Marketing Hub, the contacts you add to your free CRM tools end up in both places, which could affect your Marketing Hub subscription’s contact tier pricing."
div_5.append(description_5)

let description_6 = document.createElement("p");
let description_6_b = document.createElement("p");
description_6.innerText = "There are several types of support available to free HubSpot CRM users. HubSpot offers support for many languages including English, French, German, Japanese, and Portuguese. For the full list of languages HubSpot supports, view HubSpot’s language offering."
description_6_b.innerText = "Free HubSpot users can chat with fellow software users in HubSpot Community, sharpen their skills in HubSpot Academy, and get expert advice on HubSpot tools in the Knowledge Base."
div_6.append(description_6,description_6_b)

let description_7 = document.createElement("p");
description_7.innerText = description_1.innerText
div_7.append(description_7);

let description_8 = document.createElement("p");
description_8.innerText = description_2.innerText;
div_8.append(description_8)

let description_9 = document.createElement("p");
description_9.innerText = description_3.innerText;
div_9.append(description_9)

let description_10 = document.createElement("p");
description_10.innerText = description_4.innerText;
let description_10_b = document.createElement("p");
description_10_b.innerText = description_4_b.innerText;
div_10.append(description_10,description_10_b)

let description_11 = document.createElement("p");
description_11.innerText = description_5.innerText;
div_11.append(description_11)

let description_12 = document.createElement("p");
let description_12_b = document.createElement("p");
description_12.innerText = description_6.innerText;
description_12_b.innerText = description_6_b.innerText
div_12.append(description_12,description_12_b)

let description_13 = document.createElement("p");
description_13.innerText = description_1.innerText
div_13.append(description_13);

let description_14 = document.createElement("p");
description_14.innerText = description_2.innerText;
div_14.append(description_14)

let description_15 = document.createElement("p");
description_15.innerText = description_3.innerText;
div_15.append(description_15)

let description_16 = document.createElement("p");
description_16.innerText = description_4.innerText;
let description_16_b = document.createElement("p");
description_16_b.innerText = description_4_b.innerText;
div_16.append(description_16,description_16_b)

let description_17 = document.createElement("p");
description_17.innerText = description_5.innerText;
div_17.append(description_17)

let description_18 = document.createElement("p");
let description_18_b = document.createElement("p");
description_18.innerText = description_6.innerText;
description_18_b.innerText = description_6_b.innerText
div_18.append(description_18,description_18_b)

function myFunction(j,i) {
    if(j==1){
        document.getElementById("myDropdown1").classList.toggle("show");
    }
    if(j==2){
        document.getElementById("myDropdown2").classList.toggle("show");
    }
    if(j==3){
        document.getElementById("myDropdown3").classList.toggle("show");
    }
    if(j==4){
        document.getElementById("myDropdown4").classList.toggle("show");
    }
    if(j==5){
        document.getElementById("myDropdown5").classList.toggle("show");
    }
    if(j==6){
        document.getElementById("myDropdown6").classList.toggle("show");
    }
    if(i==1 && arrow1==false){
        document.getElementById("arrow1").src = "https://i.ibb.co/NjP5Tsj/Real.png";
        arrow1 = true;
    }
    else if(i==1 && arrow1==true){
        document.getElementById("arrow1").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow1 = false;
    }
    if(i==2 && arrow2==false){
        document.getElementById("arrow2").src = "https://i.ibb.co/NjP5Tsj/Real.png"
        arrow2 = true;
    }
    else if(i==2 && arrow2==true){
        document.getElementById("arrow2").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow2 = false;
    }
    if(i==3 && arrow3==false){
        document.getElementById("arrow3").src = "https://i.ibb.co/NjP5Tsj/Real.png"
        arrow3 = true;    
    }
    else if(i==3 && arrow3==true){
        document.getElementById("arrow3").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow3 = false;
    }
    if(i==4 && arrow4==false){
        document.getElementById("arrow4").src = "https://i.ibb.co/NjP5Tsj/Real.png"
        arrow4 = true
    }
    else if(i==4 && arrow3==true){
        document.getElementById("arrow4").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow4 = false;
    }
    if(i==5 && arrow5==false){
        document.getElementById("arrow5").src = "https://i.ibb.co/NjP5Tsj/Real.png"
        arrow5 = true;
    }
    else if(i==5 && arrow3==true){
        document.getElementById("arrow5").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow5 = false;
    }
    if(i==6 && arrow6==false){
        document.getElementById("arrow6").src = "https://i.ibb.co/NjP5Tsj/Real.png"
        arrow6 = true
    }
    else if(i==6 && arrow3==true){
        document.getElementById("arrow6").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow6 = false;
    }
}
function myFunction2(j,i) {
    if(j==1){
        document.getElementById("myDropdown7").classList.toggle("show");
    }
    if(j==2){
        document.getElementById("myDropdown8").classList.toggle("show");
    }
    if(j==3){
        document.getElementById("myDropdown9").classList.toggle("show");
    }
    if(j==4){
        document.getElementById("myDropdown10").classList.toggle("show");
    }
    if(j==5){
        document.getElementById("myDropdown11").classList.toggle("show");
    }
    if(j==6){
        document.getElementById("myDropdown12").classList.toggle("show");
    }
    if(i==1 && arrow1==false){
        document.getElementById("arrow7").src = "https://i.ibb.co/NjP5Tsj/Real.png";
        arrow1 = true;
    }
    else if(i==1 && arrow1==true){
        document.getElementById("arrow7").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow1 = false;
    }
    if(i==2 && arrow2==false){
        document.getElementById("arrow8").src = "https://i.ibb.co/NjP5Tsj/Real.png"
        arrow2 = true;
    }
    else if(i==2 && arrow2==true){
        document.getElementById("arrow8").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow2 = false;
    }
    if(i==3 && arrow3==false){
        document.getElementById("arrow9").src = "https://i.ibb.co/NjP5Tsj/Real.png"
        arrow3 = true;    
    }
    else if(i==3 && arrow3==true){
        document.getElementById("arrow9").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow3 = false;
    }
    if(i==4 && arrow4==false){
        document.getElementById("arrow10").src = "https://i.ibb.co/NjP5Tsj/Real.png"
        arrow4 = true
    }
    else if(i==4 && arrow3==true){
        document.getElementById("arrow10").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow4 = false;
    }
    if(i==5 && arrow5==false){
        document.getElementById("arrow11").src = "https://i.ibb.co/NjP5Tsj/Real.png"
        arrow5 = true;
    }
    else if(i==5 && arrow3==true){
        document.getElementById("arrow11").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow5 = false;
    }
    if(i==6 && arrow6==false){
        document.getElementById("arrow12").src = "https://i.ibb.co/NjP5Tsj/Real.png"
        arrow6 = true
    }
    else if(i==6 && arrow3==true){
        document.getElementById("arrow12").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow6 = false;
    }
}

function myFunction3(j,i) {
    if(j==1){
        document.getElementById("myDropdown13").classList.toggle("show");
    }
    if(j==2){
        document.getElementById("myDropdown14").classList.toggle("show");
    }
    if(j==3){
        document.getElementById("myDropdown15").classList.toggle("show");
    }
    if(j==4){
        document.getElementById("myDropdown16").classList.toggle("show");
    }
    if(j==5){
        document.getElementById("myDropdown17").classList.toggle("show");
    }
    if(j==6){
        document.getElementById("myDropdown18").classList.toggle("show");
    }
    if(i==1 && arrow1==false){
        document.getElementById("arrow13").src = "https://i.ibb.co/NjP5Tsj/Real.png";
        arrow1 = true;
    }
    else if(i==1 && arrow1==true){
        document.getElementById("arrow13").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow1 = false;
    }
    if(i==2 && arrow2==false){
        document.getElementById("arrow14").src = "https://i.ibb.co/NjP5Tsj/Real.png"
        arrow2 = true;
    }
    else if(i==2 && arrow2==true){
        document.getElementById("arrow14").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow2 = false;
    }
    if(i==3 && arrow3==false){
        document.getElementById("arrow15").src = "https://i.ibb.co/NjP5Tsj/Real.png"
        arrow3 = true;    
    }
    else if(i==3 && arrow3==true){
        document.getElementById("arrow15").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow3 = false;
    }
    if(i==4 && arrow4==false){
        document.getElementById("arrow16").src = "https://i.ibb.co/NjP5Tsj/Real.png"
        arrow4 = true
    }
    else if(i==4 && arrow3==true){
        document.getElementById("arrow16").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow4 = false;
    }
    if(i==5 && arrow5==false){
        document.getElementById("arrow17").src = "https://i.ibb.co/NjP5Tsj/Real.png"
        arrow5 = true;
    }
    else if(i==5 && arrow3==true){
        document.getElementById("arrow17").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow5 = false;
    }
    if(i==6 && arrow6==false){
        document.getElementById("arrow18").src = "https://i.ibb.co/NjP5Tsj/Real.png"
        arrow6 = true
    }
    else if(i==6 && arrow3==true){
        document.getElementById("arrow18").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow6 = false;
    }
}

