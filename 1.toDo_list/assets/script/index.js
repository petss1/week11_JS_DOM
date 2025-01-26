const text=document.getElementById("text");
const ul=document.querySelector(".do-list");

const createTask =()=> {
    const userText=text.value;
    if (userText === "") return; 
    const li=document.createElement("li");
    li.textContent = userText;
    text.value="";
    ul.appendChild(li);
};

ul.addEventListener('click', function(evt){
if(evt.target.tagName === 'LI'){
    evt.target.classList.toggle('active');
}
});