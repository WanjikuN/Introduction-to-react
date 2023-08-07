window.onload =()=>{
const rootElement = document.getElementById('root');
// Event listener on button
// const button =document.createElement('button');

// button.innerHTML = "Current date";
// button.addEventListener('click',()=>{
//     button.innerHTML = new Date().toString();
// });
//     rootElement.appendChild(button);


// loop through an array
const ints= [9,2,3];
ints.forEach(i=>{
    let li =document.createElement('li');
    li.innerHTML = i;
    rootElement.appendChild(li);
})
};