
      function showScreen2() {
        document.getElementById('screen1').classList.remove('active');
        document.getElementById('screen2').classList.add('active');
        document.getElementById('screenNo').classList.remove('active');
        document.getElementById('screenCards').classList.remove('active');
      }

      function showNoScreen() {
        document.getElementById('screen2').classList.remove('active');
        document.getElementById('screenNo').classList.add('active');
        document.getElementById('screenCards').classList.remove('active');
      }

      function showCards() {
        document.getElementById('screen2').classList.remove('active');
        document.getElementById('screenNo').classList.remove('active');
        document.getElementById('screenCards').classList.add('active');
      }