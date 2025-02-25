//  .nodeName :->
//           The nodeName property returns the name of the node, such as the name of an HTML element, text node, or attribute. The value of nodeName depends on the type of node it is called on.
//    Ex:->
//            let p = document.createElement('p');
//            console.log(p.nodeName);  // Output: "P"

//      The value returned by the nodeName property is always in uppercase for HTML elements. 
//      This is because nodeName refers to the node name in the DOM (Document Object Model), 
//          and DOM node names are case-insensitive but standardized to uppercase.


let element = document.querySelector('#wrapper');

element.addEventListener('click',function(event){
    if(event.target.nodeName === "SPAN"){    //   The tag which is used in html file same name will be used but should be uppercase.
        console.log("Span clicked");
        alert("Span clicked");
    }
    else if(event.target.nodeName ==="P"){       //  here used for paragraph 
        console.log("Paragraph clicked");
        alert("Paragraph clicked");
    }
});

//                    event.target.nodeName === "SPAN":
//        This condition checks if the clicked element is a <span>. If true, it logs "Span clicked" and shows an alert saying "Span clicked".

//                event.target.nodeName === "P":
// This condition checks if the clicked element is a <p>. If true, it logs "Paragraph clicked" and shows an alert saying "Paragraph clicked".