//Only purpose is to relay time data to live_game
function SendTime(){
	var CurrentTime = model.currentTimeInSeconds()
	console.log("current time in time bar is "+CurrentTime)

	api.Panel.message(api.Panel.parentId, 'AFtime',CurrentTime)
	setTimeout(SendTime, 1000);
	return
	}
(function () {
    

    //update every second

    setTimeout(SendTime, 1000);


})();
