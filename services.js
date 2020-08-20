//
// let interior =document.getElementById("interior");
//
//     interior.onmouseover = function() {
//         let serviceId =(this.id);
//         serviceDiv(serviceId);
// };
//
//     interior.onmouseout= function(){
//         let serviceId=(this.id);
//         removeElement(serviceId);
//     }
//
//
//
// let exterior = document.getElementById("exterior");
//
//     exterior.onmouseover=function(){
//         let serviceId =(this.id);
//         serviceDiv(serviceId);
//
// };
//
// let repairs= document.getElementById("repairs");
//
//     repairs.onmouseover=function(){
//         let serviceId =(this.id);
//         serviceDiv(serviceId);
// }
//
//
//
//
// function serviceDiv(serviceId){
//         console.log(serviceId);
//     const showcaseInner = document.createElement('div');
//
//     showcaseInner.id = (serviceId + "Showcase");
//
//     document.getElementById("showcase-section").appendChild(showcaseInner);
// };
//
// function removeElement(serviceId){
//         var element = document.getElementById(serviceId + "Showcase");
//         element.parentNode.removeChild(element);
// };

let interior =document.getElementById("interior2");

let exterior_item = document.getElementById("exteriorShow");
let interior_item = document.getElementById("interiorShow");
let repair_item= document.getElementById("repairShow");

    interior.onmouseover = function() {

        if (exterior_item.classList.contains("active")) {
            exterior_item.classList.remove("active")
            exterior_item.classList.remove("opacity-class");
        }

        if (repair_item.classList.contains("active")) {
            repair_item.classList.remove("active");
            repair_item.classList.remove("opacity-class");


        }

            // document.getElementsByClassName("active").classList.remove("active");
            document.getElementById("interiorShow").classList.add("active");
            setTimeout(function(){
                interior_item.classList.add("opacity-class");
            },20);
        };

    // interior.onmouseout= function(){
    //     document.getElementById("interiorShow").classList.remove("active");
    // };

let exterior =document.getElementById("exterior2");

exterior.onmouseover = function() {

    if (interior_item.classList.contains("active")) {
        interior_item.classList.remove("active");
        interior_item.classList.remove("opacity-class");


    }

    if (repair_item.classList.contains("active")) {
        repair_item.classList.remove("active");
        repair_item.classList.remove("opacity-class");

    }
    document.getElementById("exteriorShow").classList.add("active");
    setTimeout(function(){
        exterior_item.classList.add("opacity-class")
    },20);
};

// exterior.onmouseout= function(){
//     document.getElementById("exteriorShow").classList.remove("active");
// };

let repairs =document.getElementById("repairs2");

repairs.onmouseover = function() {

    if (exterior_item.classList.contains("active")) {
        exterior_item.classList.remove("active");
        exterior_item.classList.remove("opacity-class");

    }

    if (interior_item.classList.contains("active")) {
        interior_item.classList.remove("active");
        interior_item.classList.remove("opacity-class");

    }

    document.getElementById("repairShow").classList.add("active");
    setTimeout(function(){
        repair_item.classList.add("opacity-class")
    },20);
};

// repairs.onmouseout= function(){
//     document.getElementById("repairShow").classList.remove("active");
// };