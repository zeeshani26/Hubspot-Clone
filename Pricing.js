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


description_1 = document.createElement("p")
description_1.innerText = "Yes! This is not a free trial. HubSpot’s free tools are 100% free — simple as that. You can add 1,000,000 contacts, unlimited free users, and your free access has no time limit. Just be aware that if you use HubSpot’s free CRM tools with Marketing Hub, the contacts you add to your free CRM tools end up in both places, which could affect your Marketing Hub subscription’s contact tier pricing.";
div_1.append(description_1)

description_2 = document.createElement("p");
description_2.innerText = "HubSpot’s free tools offer many “lite” versions of select tools featured in our paid products. There are limits to your free HubSpot account, which differ by feature."
div_2.append(description_2)

description_3 = document.createElement("p");
description_3.innerText = "Yes, you can connect HubSpot’s free CRM tools to Gmail, G Suite, and many versions of Outlook."
div_3.append(description_3)

description_4 = document.createElement("p");
description_4.innerText = "You can think of a user as any person who has access to use the HubSpot software. You can always have unlimited free users, whether or not you decide to upgrade some users to a paid version of Sales Hub or Service Hub. That means even if you upgrade, you only need to pay for the users who need access to paid features — and your other free users will still remain free!"
let description_4_b = document.createElement("p");
description_4_b.innerHTML ="Paid plans, however, include a set number of paid users that you can increase on a per-user basis."
div_4.append(description_4,description_4_b)

description_5 = document.createElement("p");
description_5.innerText = "You can add up to 1,000,000 contacts to your free HubSpot account. Just be aware that if you use HubSpot’s free CRM tools with Marketing Hub, the contacts you add to your free CRM tools end up in both places, which could affect your Marketing Hub subscription’s contact tier pricing."
div_5.append(description_5)

description_6 = document.createElement("p");
let description_6_b = document.createElement("p");
description_6.innerText = "There are several types of support available to free HubSpot CRM users. HubSpot offers support for many languages including English, French, German, Japanese, and Portuguese. For the full list of languages HubSpot supports, view HubSpot’s language offering."
description_6_b.innerText = "Free HubSpot users can chat with fellow software users in HubSpot Community, sharpen their skills in HubSpot Academy, and get expert advice on HubSpot tools in the Knowledge Base."
div_6.append(description_6,description_6_b)

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
        document.getElementById("arrow1").src = "https://i.ibb.co/kJzk8pS/Real.jpg";
        arrow1 = true;
    }
    else if(i==1 && arrow1==true){
        document.getElementById("arrow1").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow1 = false;
    }
    if(i==2 && arrow2==false){
        document.getElementById("arrow2").src = "https://i.ibb.co/kJzk8pS/Real.jpg"
        arrow2 = true;
    }
    else if(i==2 && arrow2==true){
        document.getElementById("arrow2").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow2 = false;
    }
    if(i==3 && arrow3==false){
        document.getElementById("arrow3").src = "https://i.ibb.co/kJzk8pS/Real.jpg"
        arrow3 = true;    
    }
    else if(i==3 && arrow3==true){
        document.getElementById("arrow3").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow3 = false;
    }
    if(i==4 && arrow4==false){
        document.getElementById("arrow4").src = "https://i.ibb.co/kJzk8pS/Real.jpg"
        arrow4 = true
    }
    else if(i==4 && arrow3==true){
        document.getElementById("arrow4").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow4 = false;
    }
    if(i==5 && arrow5==false){
        document.getElementById("arrow5").src = "https://i.ibb.co/kJzk8pS/Real.jpg"
        arrow5 = true;
    }
    else if(i==5 && arrow3==true){
        document.getElementById("arrow5").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow5 = false;
    }
    if(i==6 && arrow6==false){
        document.getElementById("arrow6").src = "https://i.ibb.co/kJzk8pS/Real.jpg"
        arrow6 = true
    }
    else if(i==6 && arrow3==true){
        document.getElementById("arrow6").src = "https://i.ibb.co/C0RpK6Q/20140611-CBP-Icon-animation.jpg"
        arrow6 = false;
    }
}
