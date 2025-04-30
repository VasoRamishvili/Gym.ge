

import { todo } from './todolist.js';  
todo();

document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Toggle Navigation
    
    function toggleNav() {
        const nav = document.getElementById('nav-menu');
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        let icon = document.querySelector('.burger-icon-xyz456');
        icon.classList.toggle('triali');
    }
    window.toggleNav = toggleNav;


    // filter 

    const events = [
        { id: 1, name: "Football Match", category: "Football", date: "2025-05-10", venue: "Olympic Stadium" },
        { id: 2, name: "Basketball Game", category: "Basketball", date: "2025-05-15", venue: "Sports Hall A" },
        { id: 3, name: "Tennis Tournament", category: "Tennis", date: "2025-06-01", venue: "Tennis Court 1" },
        { id: 4, name: "Marathon Race", category: "Running", date: "2025-07-01", venue: "City Park" },
        { id: 5, name: "Boxing Championship", category: "Boxing", date: "2025-06-15", venue: "Sports Hall A" }
      ];

      function filterEvents(category, venue) {
        return events.filter(event => 
          (category ? event.category === category : true) &&
          (venue ? event.venue === venue : true)
        )
      }
      
      
      const filteredEvents = filterEvents("Basketball", "Sports Hall A")
      console.log(filteredEvents)


    // 🔹 Accordions
    let accordions = document.querySelectorAll(".first-acord");
    accordions.forEach(accordion => {
        let maind = accordion.querySelector(".ddiv");
        let itag = accordion.querySelector(".fa-chevron-down");
        let h3 = accordion.querySelector(".h33");

        maind.addEventListener("click", () => {
            h3.classList.toggle("h3d");
            itag.classList.toggle("rotate");
        });
    });

 
    // 🔹 Form Validation
    const formel = document.getElementById('form');
    if (formel) {
        formel.addEventListener("submit", function (e) {
            e.preventDefault();
            let errors = {};

            let username = document.getElementById('new-username').value;
            if (username.trim() === "") {
                errors.username = 'Username field cannot be empty';
            }

            let password = document.getElementById('new-password').value;
            let repeatpassword = document.getElementById('repeat-password').value;

            if (password.trim() === "") {
                errors.password = "Password field cannot be empty";
            }

            if (password !== repeatpassword) {
                errors.repeatpassword = 'Passwords do not match';
            }

            let info = this.querySelectorAll('[name="gender"]');
            let gender = false;
            info.forEach(item => {
                if (item.checked) {
                    gender = true;
                }
            });
            if (!gender) {
                errors.gender = "Please select your gender";
            }

            let checkbox = document.getElementById('check');
            if (!checkbox.checked) {
                errors.agree = 'You must agree to our terms and conditions';
            }

            console.log(errors);
        });
    }
  
});

