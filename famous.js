let button = document.querySelector("button"); /*this targets the "MORE" */
let list = document.querySelector(".list");/*This tartets the list with the famous people */

button.addEventListener("click", ()=>{/*This is an event listener for what happens if the button is clicked. */
    //this is the IF statement for it the button = More.
    if(button.textContent == "More"){
    //This adds the new items to the LIST div
    list.innerHTML += `     
    <!-- Third item. -->
    <div class="grid three">
       <div>
           <h2>George Lucas (1944-</h2>
           <p>Geore Lucas is very well known for creating the Star Wars, and also the Indiana Jones Franchises. He is currently a billionare, and is 77 years old..
           
           </p>
       </div>
       <!-- this is the image for the second person -->
       <img class="person" src="images/GeorgeLucas.jpeg" alt="This is a picture of George Lucas"> 
   </div>

   <!-- Fourth item. -->
   <div class="grid four">
      <div>
          <h2>Lucas Cranach the Elder (1472-1553)</h2>
          <p>Lucas Cranach the Elder was a German painter. He worked in Vienna, and he painted portraits of people. He also painted the Emperor Maximilian and a boy who became Emperor Charles V. Until 1508 Cranach signed his paintings with his initials.
        </p>
      </div>
      <!-- this is the image for the Fourth person -->
      <img class="person" src="images/LucasCranach.jpeg" alt="This is a picture of Lucas Cranach"> 
  </div>`;
    //Switches the button to LESS
    button.textContent = "Less";
    }else{
        //targeting the last 2 items
        let three = document.querySelector(".three");
        let four = document.querySelector(".four");
        //Deletes the previous 2 items
        three.remove();
        four.remove();
      //Switches the button to MORE
      button.textContent = "More";
    }

});

