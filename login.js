   function login(){
    alert('The website uses "ready-made records". For more information, see: Cookie Policy')
      // 🔹 Login Cookie Check

      let frml = document.getElementById('logi');

      frml.addEventListener('submit', function(e) {
          e.preventDefault();
      
          let checkboxx = document.getElementById('ssv');
      
          if (checkboxx.checked) {
              let usernamefld = document.getElementById('usn').value;
              Cookies.set('SaveName', usernamefld);
          } else {
              Cookies.remove('SaveName');
          }
      });
      
      let saveusernameinfo = Cookies.get('SaveName');
      
      if (saveusernameinfo) {
          document.getElementById('usn').value = saveusernameinfo;
          document.getElementById('ssv').checked = true;
      }
}
login()