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
// const ints= [9,2,3];
// ints.forEach(i=>{
//     let li =document.createElement('li');
//     li.innerHTML = i;
//     rootElement.appendChild(li);
// })

// Create react virtual DOM root
// assign it to a variable
const root = ReactDOM.createRoot(rootElement);
const ints= [8,2,3];
const childrenElements = [];
childrenElements.push(
    React.createElement('li',{key: ints[0]},ints[0])
)
childrenElements.push(
    React.createElement('li',{key: ints[1]},ints[1])
)
childrenElements.push(
    React.createElement('li',{key: ints[2]},ints[2])
)
root.render(childrenElements);
};