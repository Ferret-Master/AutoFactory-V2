//customisation is described in a block of comments further down, you can adjsut the update interval at the bottom(default 3 seconds) for reliability at the cost of performance/potential issues

var tAutoFactory = (function () {
    "use strict";
	
	//function to build using the queue list
	function buildFromQueue(FACNAME){
		
		var i;
		
		for (i = 0; i < FACNAME.length; i=i+3) {
			
			var amount = FACNAME[i],
			type = FACNAME[i+1],
			priority = FACNAME[i+2];
			console.log(i +" : "+"attempting to queue " + amount +" " + type +" with " +priority);
			api.unit.build(type, amount, priority);
			api.unit.build(type+".player", amount, priority);
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
		GILE = '/pa/units/land/sniper_bot/sniper_bot.json',
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
        
		//declaring default and custom queue for each factory
		
		BOT_FAC = [5,DOX,false,2,SPARK,false],
		ADVANCED_BOT_FAC = [3, SLAMMER, false, 1, BLUEHAWK, false, 1, GILE, false],
		VEHICLE_FAC = [3, ANT, false, 2, INFERNO, false, 1, SPINNER, false, 1, SKITTER, false, 2, ANT, false],
		ADVANCED_VEHICLE_FAC = [3, LEVELER, false, 2, SHELLER, false, 3, LEVELER, false, 2, SHELLER, false, 1, STORM, false],
		AIR_FAC = [1, FIREFLY, true, 2, HUMMINGBIRD, false, 1, BUMBLEBEE, false, 2, HUMMINGBIRD, false],
		ADVANCED_AIR_FAC = [2, PHOENIX, false, 2, KESTREL, false, 1, HORSEFLY, false],
		NAVAL_FAC = [1, ORCA, false, 2, BARRACUDA, false, 1, NARWHAL, false],
		ADVANCED_NAVAL_FAC =[1, TYPHOON, true, 2, KRAKEN, false, 1, LEVIATHAN, false ],
		ORBITAL_LAUNCHER = [10, AVENGER, false, 2, ARTEMIS, false],
		ORBITAL_FACTORY =[1, AVENGER, false],
	
	
	/*
	for those that wish to customise their own queue the format is
	
	The number of the unit you wish to make
	
	The common name of the unit which can be found above without quotes
	
	and whether you want that queue to be priority or not, it is false for normal, true for priority. both without quotes
	
	have a comma between each entry and ensure each entry is a trio of 3 values, It will probably stop running/crash if a custom queue has more or less values.
	
	Alter the queues that have custom in their name. e.g BOT_FAC_CUSTOM = [amount, unit name, priority setting, amount 2, unit name 2, priority setting]
	
	by default custom queues are the same as default so they don't break if you only do a few of them
	
	*/
	    
		
		// bot factory custom setting
		BOT_FAC_CUSTOM = [5,DOX,false,2,SPARK,false],
		
		// advanced bot factory custom setting
		ADVANCED_BOT_FAC_CUSTOM = [3, SLAMMER, false, 1, BLUEHAWK, false, 1, GILE, false],
		
		// vehicle factory custom setting
		VEHICLE_FAC_CUSTOM = [3, ANT, false, 2, INFERNO, false, 1, SPINNER, false, 1, SKITTER, false, 2, ANT, false],
		
		// advanced vehicle factory custom setting
		ADVANCED_VEHICLE_FAC_CUSTOM = [3, LEVELER, false, 2, SHELLER, false, 3, LEVELER, false, 2, SHELLER, false, 1, STORM, false],
		
		// air factory custom setting
		AIR_FAC_CUSTOM = [1, FIREFLY, true, 2, HUMMINGBIRD, false, 1, BUMBLEBEE, false, 2, HUMMINGBIRD, false],
		
		// advanced air factory custom setting
		ADVANCED_AIR_FAC_CUSTOM = [2, PHOENIX, false, 2, KESTREL, false, 1, HORSEFLY, false],
		
		// naval factory custom setting
		NAVAL_FAC_CUSTOM = [1, ORCA, false, 2, BARRACUDA, false, 1, NARWHAL, false],
		
		// advanced naval factory custom setting
		ADVANCED_NAVAL_FAC_CUSTOM = [1, TYPHOON, true, 2, KRAKEN, false, 1, LEVIATHAN, false ],
		
		// orbital launcher custom setting
		ORBITAL_LAUNCHER_CUSTOM = [10, AVENGER, false, 2, ARTEMIS, false],
		
		// orbital factory custom setting
		ORBITAL_FACTORY_CUSTOM = [1, AVENGER, false],
	
	
	
	
	
	
	
	
	
	
	
	
	
	
        tAutoFactory = {};
        tAutoFactory.active = true;

    var AutoFactory_Choice = api.settings.isSet('ui', 'AutoFactory_Choice', true)==undefined?'DEFAULT':api.settings.isSet('ui', 'AutoFactory_Choice', true);
	if(AutoFactory_Choice === 'Custom'){
		BOT_FAC = BOT_FAC_CUSTOM;
		ADVANCED_BOT_FAC =ADVANCED_BOT_FAC_CUSTOM;
		VEHICLE_FAC =VEHICLE_FAC_CUSTOM;
		ADVANCED_VEHICLE_FAC =ADVANCED_VEHICLE_FAC_CUSTOM;
		AIR_FAC =AIR_FAC_CUSTOM;
		ADVANCED_AIR_FAC =ADVANCED_AIR_FAC_CUSTOM;
		NAVAL_FAC =NAVAL_FAC_CUSTOM;
		ADVANCED_NAVAL_FAC =ADVANCED_NAVAL_FAC_CUSTOM;
		ORBITAL_LAUNCHER =ORBITAL_LAUNCHER_CUSTOM;
		ORBITAL_FACTORY =ORBITAL_FACTORY_CUSTOM;
		
		
		
		
		
		
		
	}
	
    

    function threshold_parse(id) {
      return ( (api.settings.isSet('ui', id, true) == undefined?80:api.settings.isSet('ui', id, true)) * 0.01 );
    }

    

   
//update
    tAutoFactory.update = function (exec_type) {
//console.log("af update func");

        if (exec_type === undefined) {
            exec_type = 'auto';
        }

        if ( ((exec_type === 'manual') || ((exec_type === 'auto') && !model.hasSelection()))  && model.maxEnergy() !== 0 ) {
            //if user hasn't selected anything && we're playing

               var selected_enabled = 0;//if idle factories have been selected

            if (tAutoFactory.active) {
                //if we possibly want to auto-build
				//all t2 facs queued before t1 so we can deselect advanced factories to prevent t1 units queued in them
                if (t2_bot_use === 1) {
                    if(selected_enabled === 0) {//select idle factories if we haven't yet
                        
                        api.select.allIdleFactories();
                        selected_enabled = 1;
                    }
					//console.log("queuing t2 bot fac");
                    buildFromQueue(ADVANCED_BOT_FAC);
                }
                if (t2_veh_use === 1) {
                    if(selected_enabled === 0) {
                        api.select.allIdleFactories();
                        selected_enabled = 1;
                    }
                     buildFromQueue(ADVANCED_VEHICLE_FAC);
					 //console.log("queuing t2 veh fac");
                }
                if (t2_air_use === 1) {
                    if(selected_enabled === 0) {
                        api.select.allIdleFactories();
                        selected_enabled = 1;
                    }
                     buildFromQueue(ADVANCED_AIR_FAC);
                }
                if (t2_nav_use === 1) {
                    if(selected_enabled === 0) {
                        api.select.allIdleFactories();
                        selected_enabled = 1;
                    }
                     buildFromQueue(ADVANCED_NAVAL_FAC);
                }
                if (t2_orb_use === 1) {
                    if(selected_enabled === 0) {
                        api.select.allIdleFactories();
                        selected_enabled = 1;
                    }
                     buildFromQueue(ORBITAL_FACTORY);
                }
                if (t1_bot_use === 1) {
                    if(selected_enabled === 0) {
                        api.select.allIdleFactories();
                        selected_enabled = 1;
                    }
                    api.select.fromSelectionWithTypeFilter('Advanced', null, true);
					//console.log("queuing t1 bot fac");
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

    //update every 3 seconds
	//change this if you want slightly more reliability, be careful though
    setInterval(tAutoFactory.update, 3000);

    //visible to knockout
    model.tAutoFactory = tAutoFactory;

})();
