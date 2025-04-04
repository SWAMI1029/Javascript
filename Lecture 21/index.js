// <li>TS</li>

// created Element
/*function attach(content){
let element = document.createElement('li');
element.innerHTML=content;

let element2=document.createElement('li');
element2.innerHTML=content+"V 2.0";
const parent =document.getElementById("root");
// parent.appendChild(element);
parent.append(element,element2);
}
attach("TS");
attach("REACT");
attach("NODE");*/



// Create a text node

/*const element=document.createTextNode("Hello World");
const parent = document.getElementById("root");
parent.appendChild(element);*/

// Create a Attribute Node

/*const element = document.createAttribute("class");
element.value="first";
// const curr_list=document.querySelector('li');
// curr_list.setAttributeNode(element);
const parent=document.getElementById("root");
parent.children[1].setAttributeNode(element);*/



// Accessing Attribute

// get Attribute
/*const element=document.getElementById("root");
console.log(element.getAttribute("class"));
element.setAttribute("custom","20");
element.setAttribute("class","third");
element.removeAttribute("custom");*/


// Add nodes to the DOM
/*const parent = document.getElementById("root");
const element = document.createElement('li');
element.innerHTML= "TS";
// parent.prepend(element);
// parent.append(element);
const child2=parent.children[1];
// parent.insertBefore(element,child2);
parent.replaceChild(element,child2);*/

/*const parent = document.getElementById("root");
// parent.innerHTML +="<li>TS</li>";

const element=document.createElement("div");
element.innerHTML="Hello coder army";
// parent.insertAdjacentElement("beforebegin",element);
// parent.insertAdjacentElement("afterend",element);*/




// Delete a node
document.querySelector('li').remove();
