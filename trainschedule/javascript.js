var config = {
    apiKey: "AIzaSyBEDwYoJBSsX-nJzLhTxIAnqNUiecrWDWs",
    authDomain: "tainschedule.firebaseapp.com",
    databaseURL: "https://tainschedule.firebaseio.com",
    projectId: "tainschedule",
    storageBucket: "tainschedule.appspot.com",
    messagingSenderId: "873203540822"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();
$('#addTrainBtn').on("click", function() {
  var trainName = $("#trainNameInput").val().trim();
  var destination = $("#destinationInput").val().trim();
  var firstTrain = moment($("#timeInput").val().trim(), "HH:mm").format("HH:mm");
  var frequency = $("#frequencyInput").val().trim();
  var newTrain = {
      name: trainName,
      place: destination,
      ftrain: firstTrain,
      freq: frequency
    }
  database.ref().push(newTrain);
  console.log(newTrain.name);
  $("#trainNameInput").val("");
  $("#destinationInput").val("");
  $("#timeInput").val("");
  $("#frequencyInput").val("");
  return false;
});
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());
   var minToTrain = frequency - timeRemainder; var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().place;
  var firstTrain = childSnapshot.val().ftrain;
  var frequency = childSnapshot.val().freq;
  var firstTimeConverted = moment(firstTrain, "HH:mm");
  var currentTime = moment().format("HH:mm");
  var timeDiff = moment().diff(moment(firstTimeConverted), "minutes");
  var timeRemainder = timeDiff % frequency;

});