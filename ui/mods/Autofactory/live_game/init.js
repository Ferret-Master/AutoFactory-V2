//customisation is moved to a settings menu, while easier to use it is less powerful for now







var tAutoFactory = (function () {
    "use strict";
	
	//function to build using the queue list
	function buildFromQueue(FACNAME){
		//console.log(FACNAME);
		var i;
		
		for (i = 0; i < FACNAME.length; i=i+3) {
			var amount = parseInt(FACNAME[i],10),  //parses custom setting amounts
			type = (FACNAME[i+1]),
			priority = FACNAME[i+2];
			//console.log(i +" : "+"attempting to queue " + amount +" " + type +" with " +priority);
			api.unit.build(type, amount, priority);
			//api.unit.build(type+".player", amount, priority);
			//console.log(army.factoryCount);
			//console.log(armies[0].factoryCount);
			//console.log(model);
		}
		
		
		
		
		
	}

	// declaring all units/jsons as their commonly known name
    var	ANT = '/pa/units/land/tank_light_laser/tank_light_laser.json',
		VEHICLE_FAB = '/pa/units/land/fabrication_vehicle/fabrication_vehicle.json',
		SKITTER = '/pa/units/land/land_scout/land_scout.json',
		SPINNER = '/pa/units/land/aa_missile_vehicle/aa_missile_vehicle.json',
		INFERNO = '/pa/units/land/tank_armor/tank_armor.json',
		GRENADIER = '/pa/units/land/bot_grenadier/bot_grenadier.json',
		DOX = '/pa/units/land/assault_bot/assault_bot.json',
		SLAMMER = '/pa/units/land/assault_bot_adv/assault_bot_adv.json',
		GILE = '/pa/units/land/bot_sniper/bot_sniper.json',
		BOT_FAB = '/pa/units/land/fabrication_bot/fabrication_bot.json',
		STITCH = '/pa/units/land/fabrication_bot_combat/fabrication_bot_combat.json',
		BLUEHAWK = '/pa/units/land/bot_tactical_missile/bot_tactical_missile.json',
		COLONEL = '/pa/units/land/bot_support_commander/bot_support_commander.json',
		LOCUST = '/pa/units/land/bot_nanoswarm/bot_nanoswarm.json',
		BOOM = '/pa/units/land/bot_bomb/bot_bomb.json',
		SPARK = '/pa/units/land/bot_tesla/bot_tesla.json',
		HUMMINGBIRD = '/pa/units/air/fighter/fighter.json',
		AIR_FAB = '/pa/units/air/fabrication_aircraft/fabrication_aircraft.json',
		FIREFLY = '/pa/units/air/air_scout/air_scout.json',
		BUMBLEBEE = '/pa/units/air/bomber/bomber.json',
		NAVAL_FAB = '/pa/units/sea/fabrication_ship/fabrication_ship.json',
		PIRANHA = '/pa/units/sea/sea_scout/sea_scout.json',
		NARWHAL = '/pa/units/sea/frigate/frigate.json',
		ORCA = '/pa/units/sea/destroyer/destroyer.json',
		BARRACUDA = '/pa/units/sea/attack_sub/attack_sub.json',
		ICARUS = '/pa/units/air/solar_drone/solar_drone.json',
		SOLAR_ARRAY = '/pa/units/orbital/solar_array/solar_array.json',
		PELICAN = '/pa/units/air/transport/transport.json',
		KESTREL = '/pa/units/air/gunship/gunship.json',
		HORSEFLY = '/pa/units/air/strafer/strafer.json',
		ANGEL = '/pa/units/air/support_platform/support_platform.json',
		WYRM = '/pa/units/air/bomber_heavy/bomber_heavy.json',
		HORNET = '/pa/units/air/bomber_adv/bomber_adv.json',
		PHOENIX = '/pa/units/air/fighter_adv/fighter_adv.json',
		KAIJU = '/pa/units/sea/hover_ship/hover_ship.json',
		KRAKEN = '/pa/units/sea/nuclear_sub/nuclear_sub.json',
		STINGRAY = '/pa/units/sea/missile_ship/missile_ship.json',
		LEVIATHAN = '/pa/units/sea/battleship/battleship.json',
		TYPHOON = '/pa/units/sea/drone_carrier/carrier/carrier.json',
		STRYKER = '/pa/units/land/attack_vehicle/attack_vehicle.json',
		DRIFTER = '/pa/units/land/tank_hover/tank_hover.json',
		LEVELER = '/pa/units/land/tank_laser_adv/tank_laser_adv.json',
		STORM = '/pa/units/land/tank_flak/tank_flak.json',
		SHELLER = '/pa/units/land/tank_heavy_mortar/tank_heavy_mortar.json',
		VANGUARD = '/pa/units/land/tank_heavy_armor/tank_heavy_armor.json',
		MANHATTAN = '/pa/units/land/tank_nuke/tank_nuke.json',
		ASTRAEUS = '/pa/units/orbital/orbital_lander/orbital_lander.json',
		HERMES = '/pa/units/orbital/orbital_probe/orbital_probe.json',
		AVENGER = '/pa/units/orbital/orbital_fighter/orbital_fighter.json',
		ARTEMIS = '/pa/units/orbital/orbital_railgun/orbital_railgun.json',
		SSX = '/pa/units/orbital/orbital_laser/orbital_laser.json',
		OMEGA = '/pa/units/orbital/orbital_battleship/orbital_battleship.json',
		ORBITAL_FAB = '/pa/units/orbital/orbital_fabrication_bot/orbital_fabrication_bot.json',
		ADVANCED_BOT_FAB = '/pa/units/land/fabrication_bot_adv/fabrication_bot_adv.json',
		ADVANCED_VEHICLE_FAB = '/pa/units/land/fabrication_vehicle_adv/fabrication_vehicle_adv.json',
		ADVANCED_AIR_FAB = '/pa/units/air/fabrication_aircraft_adv/fabrication_aircraft_adv.json',
		ADVANCED_NAVAL_FAB = '/pa/units/sea/fabrication_ship_adv/fabrication_ship_adv.json',
		BARNACLE= '/pa/units/sea/fabrication_barge/fabrication_barge.json',
		MEND= '/pa/units/land/fabrication_bot_combat_adv/fabrication_bot_combat_adv.json',
		
		//unit var and string list needed to convert custom settings, not fun to type out 
		
		Unit_List = [ANT,VEHICLE_FAB,SKITTER,SPINNER,INFERNO,GRENADIER,DOX,SLAMMER,GILE,BOT_FAB,STITCH,BLUEHAWK,COLONEL,LOCUST,BOOM,SPARK,HUMMINGBIRD,AIR_FAB,FIREFLY,BUMBLEBEE,NAVAL_FAB,PIRANHA,NARWHAL,ORCA,BARRACUDA,ICARUS,SOLAR_ARRAY,PELICAN,KESTREL,HORSEFLY,ANGEL,WYRM,HORNET,PHOENIX,KAIJU,KRAKEN,STINGRAY,LEVIATHAN,TYPHOON,STRYKER,DRIFTER,LEVELER,STORM,SHELLER,VANGUARD,MANHATTAN,ASTRAEUS,HERMES,AVENGER,ARTEMIS,SSX,OMEGA,ORBITAL_FAB,ADVANCED_BOT_FAB,ADVANCED_VEHICLE_FAB,ADVANCED_AIR_FAB,ADVANCED_NAVAL_FAB,BARNACLE,MEND],
		
		
		String_List = ["ANT","VEHICLE_FAB","SKITTER","SPINNER","INFERNO","GRENADIER","DOX","SLAMMER","GILE","BOT_FAB","STITCH","BLUEHAWK","COLONEL","LOCUST","BOOM","SPARK","HUMMINGBIRD","AIR_FAB","FIREFLY","BUMBLEBEE","NAVAL_FAB","PIRANHA","NARWHAL","ORCA","BARRACUDA","ICARUS","SOLAR_ARRAY","PELICAN","KESTREL","HORSEFLY","ANGEL","WYRM","HORNET","PHOENIX","KAIJU","KRAKEN","STINGRAY","LEVIATHAN","TYPHOON","STRYKER","DRIFTER","LEVELER","STORM","SHELLER","VANGUARD","MANHATTAN","ASTRAEUS","HERMES","AVENGER","ARTEMIS","SSX","OMEGA","ORBITAL_FAB","ADVANCED_BOT_FAB","ADVANCED_VEHICLE_FAB","ADVANCED_AIR_FAB","ADVANCED_NAVAL_FAB","BARNACLE","MEND"],
		
		// values that determine if a factory is auto queued , if you don't want a factory being auto queued set to 0
		
		t1_bot_use = 1,
        t2_bot_use = 1,
        t1_veh_use = 1,
        t2_veh_use = 1,
        t1_air_use = 1,
        t2_air_use = 1,
        t1_nav_use = 1,
        t2_nav_use = 1,
        t1_orb_use = 1,
        t2_orb_use = 1,
        
		
		//declaring default queue for each factory
		
		BOT_FAC = '5,DOX,F,2,SPARK,F',
		ADVANCED_BOT_FAC = '3,SLAMMER,F,1,BLUEHAWK,F,1,GILE,F',
		VEHICLE_FAC = '3,ANT,F,2,INFERNO,F,1,SPINNER,F,1,SKITTER,F,2,ANT,F',
		ADVANCED_VEHICLE_FAC = '3,LEVELER,F,2,SHELLER,F,3,LEVELER,F,2,SHELLER,F,1,STORM,F',
		AIR_FAC = '1,FIREFLY,T,2,HUMMINGBIRD,F,1,BUMBLEBEE,F,2,HUMMINGBIRD,F',
		ADVANCED_AIR_FAC = '2,PHOENIX,F,2,KESTREL,F,1,HORSEFLY,F',
		NAVAL_FAC = '2,BARRACUDA,F,1,NARWHAL,F,1,ORCA,F',
		ADVANCED_NAVAL_FAC ='1,TYPHOON,T,2,KRAKEN,F,1,LEVIATHAN,F',
		ORBITAL_FACTORY = '10,AVENGER,F,2,ARTEMIS,F',
		ORBITAL_LAUNCHER ='1,AVENGER,F',
		
		Default_List = [BOT_FAC,ADVANCED_BOT_FAC,VEHICLE_FAC,ADVANCED_VEHICLE_FAC,AIR_FAC,ADVANCED_AIR_FAC,NAVAL_FAC,ADVANCED_NAVAL_FAC,ORBITAL_LAUNCHER,ORBITAL_FACTORY], //default list of factorys for use with settings
		
		//parsing custom settings queues
		SettingsList = [],
		SettingsNameList = ['Seconds Before Activation'],
		numberOfFactorys = 10,
		FactoryList = ['Bot_Factory','Advanced_Bot_Factory','Vehicle_Factory','Advanced_Vehicle_Factory','Air_Factory','Advanced_Air_Factory','Naval_Factory','Advanced_Naval_Factory','Orbital_Launcher','Orbital_Factory'];
		
		//grabs each setting and splits the string
		for (var i = 0;i < numberOfFactorys;i++) {
			SettingsList[i] = api.settings.isSet('Autofactory', FactoryList[i], true)==undefined?Default_List[i]:api.settings.isSet('Autofactory', FactoryList[i], true);
			if(SettingsList[i].length < 6){
				SettingsList[i] = Default_List[i];
				
			}
			SettingsList[i] = SettingsList[i].split(',');
			//console.log(SettingsList[i]);
			
		}
		var CurrentTime;
		var StartTime = api.settings.isSet('Autofactory', SettingsNameList[0], true)==undefined?"0":api.settings.isSet('Autofactory', SettingsNameList[0], true);
		//console.log(StartTime);
		StartTime = parseInt(StartTime,10);
		//console.log(StartTime);
		if(!(StartTime > 10)){StartTime = 0;}
		
		
		
		function parseBuildQueue(Queue){
			
			for (var b = 0;b<Queue.length;b++){
				if (Queue.length%3 !== 0){
					console.log("flagged " + Queue + " as for incorrect length");
					Queue = false;
				}
					
					if(Queue !== false){	
					
					if (Queue[b] !== "F" && Queue[b] !== "T" && b%3 === 2){
						
						console.log("changed " + Queue[b] + " to default false");
						Queue[b] = false;
						
					}
					
					if (Queue[b] === "T"){
						Queue[b] = true;
						
					}
					if (Queue[b] === "F"){
						
						Queue[b] = false;
						
						}
					
					
					
					if ( b%3 === 0){ //checking that number being checked is in the right spot
						
						//checking if the set number is valid
					
					var defaultAmount = 1; // A default result.
					var amount = parseInt(Queue[b],10); 
					
					if (isNaN(amount)){
						
						amount = defaultAmount; //sets the number of units to 1 if it is invalid
					
						console.log("changed " + amount + " to 1 due to it being an invalid amount");
					} 
					
						Queue[b] = Math.abs(amount);
					
					} 
					
					var validUnit = false;
					
					if (b%3 === 1){
					for (i = 0; i<String_List.length;i++){
						
						//console.log(String_List[i] + " === " + SettingsList[a][b]);
						
						if (String_List[i] === Queue[b]){
							
							
							
							Queue[b] = Unit_List[i];
							validUnit = true; // if valid unit is found, tells program to not mark the queue as invalid
							
							}
						
					}
					if(validUnit === false){
						
						console.log("flagged " + SettingsList[a] + "for non valid unit");
						Queue = false;
						
						}
						
					}
				
				} 
			}
			
			
			
			return Queue;
		}
		
		
		
		
		//parses the settings so they are useable
		for (var a = 0; a<SettingsList.length;a++) {
			SettingsList[a] = parseBuildQueue(SettingsList[a])
			
		}
		//parses Default queues in case they are needed
		
		
		BOT_FAC = parseBuildQueue(BOT_FAC.split(',')),
		ADVANCED_BOT_FAC = parseBuildQueue(ADVANCED_BOT_FAC.split(',')),
		VEHICLE_FAC = parseBuildQueue(VEHICLE_FAC.split(',')),
		ADVANCED_VEHICLE_FAC = parseBuildQueue(ADVANCED_VEHICLE_FAC.split(',')),
		AIR_FAC = parseBuildQueue(AIR_FAC.split(',')),
		ADVANCED_AIR_FAC = parseBuildQueue(ADVANCED_AIR_FAC.split(',')),
		NAVAL_FAC = parseBuildQueue(NAVAL_FAC.split(',')),
		ADVANCED_NAVAL_FAC = parseBuildQueue(ADVANCED_NAVAL_FAC.split(',')),
		ORBITAL_FACTORY = parseBuildQueue(ORBITAL_FACTORY.split(',')),
		ORBITAL_LAUNCHER = parseBuildQueue(ORBITAL_LAUNCHER.split(','));
		//declaring the custom settings 
		
		var BOT_FAC_CUSTOM,ADVANCED_BOT_FAC_CUSTOM,VEHICLE_FAC_CUSTOM,ADVANCED_VEHICLE_FAC_CUSTOM,AIR_FAC_CUSTOM,ADVANCED_AIR_FAC_CUSTOM,NAVAL_FAC_CUSTOM,ADVANCED_NAVAL_FAC_CUSTOM,ORBITAL_LAUNCHER_CUSTOM,ORBITAL_FACTORY_CUSTOM;
		
		//list of custom settings
		var Custom_List = [BOT_FAC_CUSTOM,ADVANCED_BOT_FAC_CUSTOM,VEHICLE_FAC_CUSTOM,ADVANCED_VEHICLE_FAC_CUSTOM,AIR_FAC_CUSTOM,ADVANCED_AIR_FAC_CUSTOM,NAVAL_FAC_CUSTOM,ADVANCED_NAVAL_FAC_CUSTOM,ORBITAL_LAUNCHER_CUSTOM,ORBITAL_FACTORY_CUSTOM];
		
		
		for(i=0;i<numberOfFactorys;i++){
			Custom_List[i] = SettingsList[i];
			
			
		}
		
	
        tAutoFactory = {};
        tAutoFactory.active = true;

    var AutoFactory_Choice = 'Custom';//no longer a need to differentiate due to defaults auto applying, mabye in future versions
	if(AutoFactory_Choice === 'Custom'){
		
		//checking if the queues were valid and leaving as defaults if they are not
		
		if(Custom_List[0] !== false){BOT_FAC = Custom_List[0];}
		if(Custom_List[1] !== false){ADVANCED_BOT_FAC =Custom_List[1];}
		if(Custom_List[2] !== false){VEHICLE_FAC =Custom_List[2];}
		if(Custom_List[3] !== false){ADVANCED_VEHICLE_FAC =Custom_List[3];}
		if(Custom_List[4] !== false){AIR_FAC =Custom_List[4];}
		if(Custom_List[5] !== false){ADVANCED_AIR_FAC =Custom_List[5];}
		if(Custom_List[6] !== false){NAVAL_FAC =Custom_List[6];}
		if(Custom_List[7] !== false){ADVANCED_NAVAL_FAC =Custom_List[7];}
		if(Custom_List[8] !== false){ORBITAL_LAUNCHER =Custom_List[8];}
		if(Custom_List[9] !== false){ORBITAL_FACTORY =Custom_List[9];}
		
	}
	
    

    function threshold_parse(id) {
      return ( (api.settings.isSet('ui', id, true) == undefined?80:api.settings.isSet('ui', id, true)) * 0.01 );
    }

    
	var landTime = 200000;
    model.TimeSinceLanding = 0;
//update
    tAutoFactory.update = function (exec_type) {


        if (exec_type === undefined) {
            exec_type = 'auto';
        }
		
			
        if ( ((exec_type === 'manual') && model.gameOver == false|| ((exec_type === 'auto') && !model.hasSelection()))  && model.maxEnergy() > 0 && model.gameOver == false) {
			//console.log(landTime-landTime)
		//console.log(StartTime)
		//console.log((Date.now()-landTime)/1000)
		if(model.TimeSinceLanding<landTime && model.TimeSinceLanding !== 0){landTime = model.TimeSinceLanding}
			//console.log("Time since landing = "+model.TimeSinceLanding+" Start time set as : "+StartTime+" Land time is "+landTime)
			if((model.TimeSinceLanding > (landTime + StartTime)|| StartTime + 240 <model.TimeSinceLanding)&&(model.paused() === false)){
            //if user hasn't selected anything && we're playing

               var selected_enabled = 0;//if idle factories have been selected

            if (tAutoFactory.active) {
                //if we possibly want to auto-build
				//all t2 facs queued before t1 so we can deselect advanced factories to prevent t1 units queued in them
				
                if (t2_bot_use === 1) {
                    if(selected_enabled === 0) {//select idle factories if we haven't yet
                        
                        api.select.allIdleFactories();
						api.select.fromSelectionWithTypeFilter('Basic', null, true);
                        selected_enabled = 1;
                    }
					
                    buildFromQueue(ADVANCED_BOT_FAC);
                }
                if (t2_veh_use === 1) {
                    if(selected_enabled === 0) {
                        api.select.allIdleFactories();
						api.select.fromSelectionWithTypeFilter('Basic', null, true);
                        selected_enabled = 1;
                    }
                     buildFromQueue(ADVANCED_VEHICLE_FAC);
					
                }
                if (t2_air_use === 1) {
                    if(selected_enabled === 0) {
                        api.select.allIdleFactories();
						api.select.fromSelectionWithTypeFilter('Basic', null, true);
                        selected_enabled = 1;
                    }
                     buildFromQueue(ADVANCED_AIR_FAC);
                }
                if (t2_nav_use === 1) {
                    if(selected_enabled === 0) {
                        api.select.allIdleFactories();
						api.select.fromSelectionWithTypeFilter('Basic', null, true);
                        selected_enabled = 1;
                    }
                     buildFromQueue(ADVANCED_NAVAL_FAC);
                }
                if (t2_orb_use === 1) {
                    if(selected_enabled === 0) {
                        api.select.allIdleFactories();
						api.select.fromSelectionWithTypeFilter('Basic', null, true);
                        selected_enabled = 1;
                    }
                     buildFromQueue(ORBITAL_FACTORY);
                }
				api.select.allIdleFactories();
                if (t1_bot_use === 1) {
                    if(selected_enabled === 0) {
                        api.select.allIdleFactories();
                        selected_enabled = 1;
                    }
                    api.select.fromSelectionWithTypeFilter('Advanced', null, true);
					
                    buildFromQueue(BOT_FAC);
                }

              
                if (t1_veh_use === 1) {
					
                    if(selected_enabled === 0) {
                        api.select.allIdleFactories();
                        selected_enabled = 1;
                    }
                    api.select.fromSelectionWithTypeFilter('Advanced', null, true);
					
                     buildFromQueue(VEHICLE_FAC);
					
                }

                
                if (t1_air_use === 1) {
                    if(selected_enabled === 0) {
                        api.select.allIdleFactories();
                        selected_enabled = 1;
                    }
                    api.select.fromSelectionWithTypeFilter('Advanced', null, true);
                     buildFromQueue(AIR_FAC);
                }

               
                if (t1_nav_use === 1) {
                    if(selected_enabled === 0) {
                        api.select.allIdleFactories();
                        selected_enabled = 1;
                    }
                    api.select.fromSelectionWithTypeFilter('Advanced', null, true);
                     buildFromQueue(NAVAL_FAC);
                }

               
                if (t1_orb_use === 1) {
                    if(selected_enabled === 0) {
                        api.select.allIdleFactories();
                        selected_enabled = 1;
                    }
                    api.select.fromSelectionWithTypeFilter('Advanced', null, true);
					
                    buildFromQueue(ORBITAL_LAUNCHER);
                }

              
                if(selected_enabled === 1) {
                    api.select.empty();
                }

            }
		}
		}
		setTimeout(tAutoFactory.update, 1000);
    };
    
    return tAutoFactory;
})();



(function () {
    //handler to get ui toggle status
    handlers.aftoggle = function(payload) {
        //console.log("aftoggle handler activated with payload: "+ payload);
        if(payload === 'false')
            tAutoFactory.active = false;
        else if(payload === 'true')
            tAutoFactory.active = true;
    };
	handlers.AFtime = function(payload) {
		//console.log("time handler called with "+ payload)
		model.TimeSinceLanding = payload;
	 };
	

    //update every 3 seconds
	//change this if you want slightly more reliability, be careful though
	setTimeout(tAutoFactory.update, 1000);
	//console.log("timeout set")

    //visible to knockout
    model.tAutoFactory = tAutoFactory;

})();
