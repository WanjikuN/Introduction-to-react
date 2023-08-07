window.onload =()=>{
const rootElement = document.getElementById('root');
const button =document.createElement('button');

button.innerHTML = "Current date";
button.addEventListener('click',()=>{
    button.innerHTML = new Date().toString();
});
    rootElement.appendChild(button);

};