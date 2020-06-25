CurrentTime = function () {

		
		
		GameTime = model.endOfTimeInSeconds() - model.gameStartTime;
		
		api.Panel.message(api.Panel.parentId, 'GetTime', GameTime);
	    return GameTime;
};

(function () {
    "use strict";

    //console.log("army data function initilised");
	 setInterval(Autofac, 1000);
    //visible to knockout
    model.CurrentTime = CurrentTime;
    
    

})();
