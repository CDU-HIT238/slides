function createRow(data) {
  var row = '<tr class="personRow"><td>'
   + data.id
   + '</td><td>'
   + data.name
   + '</td></tr>';
  console.log(row);
  return row;
}


function loadData(db) {
  var personTable = document.querySelector('#personList tbody');
  personTable.innerHTML = '';
  
  // Get transaction and store
  var store = db.transaction(['users']).objectStore('users');
  
  // Open cursor and listen for success
  // Use createRow to get HTML for each item
  var cursor = store.openCursor();
  cursor.addEventListener('success', function(evt) {
    var thisCursor = evt.target.result;
    if(thisCursor) {
      console.log('key', thisCursor.key);
      console.log('value', thisCursor.value);
      personTable.innerHTML += createRow(thisCursor.value);
      thisCursor.continue();
    } else {
      console.log('No more items');
    }
  });
  
}

function bindSaveButton(db) {
    var idInput = document.getElementById('idInput');
  var nameInput = document.getElementById('nameInput');
  var saveBtn = document.getElementById('saveBtn');
  
  // Note that we have to bind the event listener after we have a database connection
  saveBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    // Get transaction and store
    
    var transaction = db.transaction('users', 'readwrite');
    var store = transaction.objectStore('users');
    
    // Add data from inputs and listen for success
    var result = store.add({id: idInput.value, name: nameInput.value});
    result.addEventListener('success', function(evt) {
      console.log('success', evt.target.result);
      loadData(db);
    })
  });
}

function connectToDB() {
  // Connect to database
  var conn = indexedDB.open('test-db', 5);
  console.log('conn');

  // Listen for success and bind save button and load data
  conn.addEventListener('success', function(evt) {
    console.log('connected event', evt)
    var db = evt.target.result;
    console.log(db);

    bindSaveButton(db);
    loadData(db);

  });

  // Listen for error event and show the error
  conn.addEventListener('error', function(evt) {
    console.log('error connecting', evt.target.error);
  });

  // Listen for the uppgradeneeded event
  // Create an object store to track people
  // use keyPath to store the ID value
  conn.addEventListener('upgradeneeded',function(evt) {
    console.log('upgrade needed', evt)
     var db = evt.target.result;
    console.log(db);

    // Create an objectStore for this database
    var objectStore = db.createObjectStore("users", { keyPath: "id" });
    console.log(objectStore);
    objectStore.createIndex('name', 'name', {unique: false});
    objectStore.transaction.addEventListener('complete', function(evt) {
     console.log('Store created');
    });
  });
}

console.log('reload');
document.addEventListener('DOMContentLoaded', connectToDB);
