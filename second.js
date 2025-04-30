  // 🔹 Fetch - Drivers API
  let meindiv99 = document.getElementById('maindiv44');
  let ul = document.createElement('ul');
  meindiv99.appendChild(ul);
  ul.classList.add('mainul');

  fetch('https://ergast.com/api/f1/drivers.json', {
      method: 'GET'
  })
      .then(response => response.json())
      .then(data => {
          data.MRData.DriverTable.Drivers.forEach(driver => {
              let li = document.createElement('li');

              let drid = document.createElement('h2');
              drid.innerText = driver.driverId;

              let drname = document.createElement('h2');
              drname.innerText = driver.givenName;

              let nation = document.createElement('h3');
              nation.innerText = driver.nationality;

              let born = document.createElement('h3');
              born.innerText = driver.dateOfBirth;

              drid.classList.add('liebi');
              drname.classList.add('liebi');
              nation.classList.add('liebi');
              born.classList.add('liebi');

              li.classList.add('mainli');

              li.appendChild(drid);
              li.appendChild(drname);
              li.appendChild(nation);
              li.appendChild(born);

              ul.appendChild(li);
          });
      })
      .catch(error => {
          console.error("Fetch error:", error);
      });
