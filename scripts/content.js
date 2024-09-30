
console.log('script invoked');

const added= document.querySelector('.betslip-inner');

//creating the bet placing option tag
const addedtag= document.createElement('div');
addedtag.style.display='flex';
addedtag.style.flexDirection='column';




addedtag.textContent= "successfully added";

if (added.children.length >=1) {
    added.insertBefore(addedtag,added.children[1]);
}

// added.appendChild(addedtag);