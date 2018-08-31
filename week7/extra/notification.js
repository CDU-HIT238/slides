var notifyBtn = document.querySelector('#notifyBtn');
var notificationCount = 0;

function showNotification(evt) {
  if(evt && evt.preventDefault) {
    evt.preventDefault();
  }
  
  if('Notification' in window) {
    if(Notification.permission === 'granted') {
      var notification = new Notification(
        'Hello',
        {
          body: 'This is notification ' + notificationCount++,
          tag: 'general'
        }
      );
    } else {
      Notification.requestPermission()
        .then((response) => {
          if(response === 'granted') {
            showNotification();
          }
      })
    }
  }
}

notifyBtn.addEventListener('click', showNotification);
