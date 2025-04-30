 export function todo() {
       // 🔹 To Do List
       let input = document.querySelector(".innput");
       let btn = document.querySelector(".bt3");
       let ull = document.querySelector(".ull3");
       let clr = document.querySelector(".clear");
   
       btnx.addEventListener("click", function () {
           let text = input.value.trim();
           if (text === "") {
               alert("ჩაწერეთ თექსტი");
               return;
           }
   
           let li = document.createElement("li");
           li.classList.add('li3');
           li.textContent = text;
   
           let dlt = document.createElement("i");
           dlt.classList.add('i3', "fa-solid", "fa-trash-can");
   
           li.appendChild(dlt);
           ull.appendChild(li);
           input.value = "";
   
           dlt.addEventListener("click", () => {
               li.remove();
           });
       });
   
       clr.addEventListener("click", () => {
           ull.innerHTML = "";
       });
   
}

