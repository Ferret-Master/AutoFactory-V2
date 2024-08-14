var isGW = false;
var gameType = undefined;

//checked against
var bugResearchMap = {
	"/pa/units/land/bug_ripper/bug_ripper.json":    "/pa/units/land/bug_ripper_stealth/bug_ripper_stealth.json",
	"/pa/units/land/bug_ripper_stealth/bug_ripper_stealth.json":    "/pa/units/land/bug_ripper/bug_ripper.json",
	"/pa/units/land/bug_grunt_big/bug_grunt_big.json":"/pa/units/land/bug_grunt/bug_grunt.json",
	"/pa/units/land/bug_grunt/bug_grunt.json":"/pa/units/land/bug_grunt_big/bug_grunt_big.json",
	"/pa/units/land/bug_combat_fab/bug_combat_fab_cheap.json":"/pa/units/land/bug_combat_fab/bug_combat_fab.json",
	"/pa/units/land/bug_combat_fab/bug_combat_fab.json":"/pa/units/land/bug_combat_fab/bug_combat_fab_cheap.json",
	"/pa/units/land/bug_needler/bug_needler_fast.json":  "/pa/units/land/bug_needler/bug_needler.json",
	"/pa/units/land/bug_needler/bug_needler.json":  "/pa/units/land/bug_needler/bug_needler_fast.json",
	"/pa/units/land/bug_crusher/bug_crusher.json":false,
	"/pa/units/land/bug_hydra/bug_hydra.json":false,
	"/pa/units/land/bug_boomer/bug_boomer_r.json":"/pa/units/land/bug_boomer/bug_boomer.json",
	"/pa/units/land/bug_boomer/bug_boomer.json":"/pa/units/land/bug_boomer/bug_boomer_r.json",
	"/pa/units/orbital/bug_orbital_fighter/bug_orbital_fighter.json":"/pa/units/orbital/bug_orbital_fighter/bug_orbital_fighter_vision.json",
	"/pa/units/orbital/bug_orbital_fighter/bug_orbital_fighter_vision.json":"/pa/units/orbital/bug_orbital_fighter/bug_orbital_fighter.json",
	"/pa/units/orbital/bug_orbital_battleship/bug_orbital_battleship.json":false,
	"/pa/units/orbital/bug_orbital_chomper/bug_orbital_chomper.json":false,
	"/pa/units/orbital/bug_orbital_laser/bug_orbital_laser.json":false,
	"/pa/units/orbital/bug_advanced_orbital_radar/bug_advanced_orbital_radar.json":false
}

var tAutoFactory = (function () {
    "use strict";
	
	//function to build using the queue list
	function buildFromQueue(FACNAME){
		var researchSwap = false
		if(model.lockedUnits !== undefined){//research enabled
			researchSwap = true
		}

		if(gameType == "Galactic War"){isGW = true};
		engine.call('set_order_state', 'build', 'continuous');

		if(Array.isArray(FACNAME)){
		for (var i = 0; i < FACNAME.length; i=i+3) {
			var amount = parseInt(FACNAME[i],10)  //parses custom setting amounts
			if(isGW == true){var type = (FACNAME[i+1]+".player")}
			else{var type = (FACNAME[i+1])}
			var priority = FACNAME[i+2];

			if(researchSwap == true){
				if(_.includes(model.lockedUnits, type)){//trying to queue un-researched unit
					if(bugResearchMap[type] == false){continue}
					if(bugResearchMap[type] !== undefined){type = bugResearchMap[type]}
				}
				else{
					if(bugResearchMap[type] !== undefined && !_.includes(model.lockedUnits, bugResearchMap[type])){
						
						type = bugResearchMap[type]
					}
				}
			}
		
			api.unit.build(type, amount, priority);

		}}
		
	}


	// declaring all units/jsons as their commonly known name

	//MLA ----------------------------------------------------------
    var	ANT = '/pa/units/land/tank_light_laser/tank_light_laser.json',
		STINGER = '/pa/units/land/bot_aa/bot_aa.json',
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
		ARKYD = '/pa/units/orbital/radar_satellite/radar_satellite.json',
		ADVANCED_RADAR_SATELLITE = '/pa/units/orbital/radar_satellite_adv/radar_satellite_adv.json',

		//Legion ----------------------------------------------------------
		//["NOVA", "METEOR","INFILTRATOR","DAUNTLESS","L_AIR_FAB","L_AIR_FAB_ADVANCED","SCYTHE","FIREBIRD", "SALAMANDER","LOCKHEED", "MARAUDER", "OSPREY","PEACEKEEPER","PATRIOT","ORBWEAVER","PURGER","MINIMAN","MONSTROSITY","PRAETORIAN","L_BOT_FAB","L_BOT_FAB_ADVANCED","L_VEHICLE_FAB","L_VEHICLE_FAB_ADVANCED","GUARDIAN","CORSAIR","PANZER"
		//,"STOKE", "NECROMANCER","ENFORCER","INVESTIGATOR","MAUL","LANCER","DEATHMARK","EARTHSHAKER","SCORPION","SHANK", "HAVOC","IMPERATOR","L_ORB_FAB","VIPER","CHARIOT","BLACK_KNIGHT","SPECTRE","PALADIN","SPUTNIK","COSMOS","AKULA","EPOCH","BOWHEAD","L_NAVAL_FAB","L_NAVAL_FAB_ADVANCED","REMORA","TALOS","JAEGER","MANTA","CATFISH","HAMMERHEAD"]
		NOVA = "/pa/units/air/l_air_bomb/l_air_bomb.json",
		METEOR = "/pa/units/air/l_air_carrier/l_air_carrier.json",
		INFILTRATOR  = "/pa/units/air/l_air_scout_adv/l_air_scout_adv.json",
		DAUNTLESS = "/pa/units/air/l_bomber/l_bomber.json",
		L_AIR_FAB = "/pa/units/air/l_fabrication_aircraft/l_fabrication_aircraft.json",
		L_AIR_FAB_ADVANCED = "/pa/units/air/l_fabrication_aircraft_adv/l_fabrication_aircraft_adv.json",
		SCYTHE = "/pa/units/air/l_fighter/l_fighter.json",
		FIREBIRD = "/pa/units/air/l_fighter_adv/l_fighter_adv.json",
		SALAMANDER = "/pa/units/air/l_firestarter/l_firestarter.json",
		LOCKHEED = "/pa/units/air/l_gunship/l_gunship.json",
		MARAUDER = "/pa/units/air/l_raider/l_raider.json",
		OSPREY = "/pa/units/air/l_transport/l_transport.json",
	
		PEACEKEEPER = "/pa/units/land/l_assault_bot/l_assault_bot.json",
		PATRIOT = "/pa/units/land/l_bot_aa/l_bot_aa.json",
		ORBWEAVER = "/pa/units/land/l_bot_aa_adv/l_bot_aa_adv.json",
		MINIMAN = "/pa/units/land/l_bot_artillery/l_bot_artillery.json",
		MONSTROSITY = "/pa/units/land/l_bot_artillery_adv/l_bot_artillery_adv.json",
		PURGER = "/pa/units/land/l_bot_bomb/l_bot_bomb.json",
		PRAETORIAN = "/pa/units/land/l_bot_support_commander/l_bot_support_commander.json",
		L_BOT_FAB = "/pa/units/land/l_fabrication_bot/l_fabrication_bot.json",
		L_BOT_FAB_ADVANCED = "/pa/units/land/l_fabrication_bot_adv/l_fabrication_bot_adv.json",
		L_VEHICLE_FAB = "/pa/units/land/l_fabrication_vehicle/l_fabrication_vehicle.json",
		L_VEHICLE_FAB_ADVANCED ="/pa/units/land/l_fabrication_vehicle_adv/l_fabrication_vehicle_adv.json",
		GUARDIAN = "/pa/units/land/l_fabrication_vehicle_combat/l_fabrication_vehicle_combat.json",
		CORSAIR = "/pa/units/land/l_hover_tank/l_hover_tank.json",
		PANZER = "/pa/units/land/l_hover_tank_adv/l_hover_tank_adv.json",
		STOKE = "/pa/units/land/l_mortar_tank/l_mortar_tank.json",
		NECROMANCER = "/pa/units/land/l_necromancer/l_necromancer.json",
		ENFORCER = "/pa/units/land/l_riot_bot/l_riot_bot.json",
		INVESTIGATOR = "/pa/units/land/l_scout_bot/l_scout_bot.json",
		MAUL = "/pa/units/land/l_shotgun_tank/l_shotgun_tank.json",
		LANCER = "/pa/units/land/l_sniper_bot/l_sniper_bot.json",
		DEATHMARK = "/pa/units/land/l_sniper_tank/l_sniper_tank.json",
		EARTHSHAKER = "/pa/units/land/l_tank_heavy_armor/l_tank_heavy_armor.json",
		SCORPION = "/pa/units/land/l_tank_laser_adv/l_tank_laser_adv.json",
		SHANK = "/pa/units/land/l_tank_shank/l_tank_shank.json",
		HAVOC = "/pa/units/land/l_tank_swarm/l_tank_swarm.json",
		IMPERATOR = "/pa/units/orbital/l_orbital_battleship/l_orbital_battleship.json",
		L_ORB_FAB = "/pa/units/orbital/l_orbital_fabrication_bot/l_orbital_fabrication_bot.json",

		VIPER = "/pa/units/orbital/l_orbital_fighter/l_orbital_fighter.json",
		CHARIOT = "/pa/units/orbital/l_orbital_lander/l_orbital_lander.json",
		BLACK_KNIGHT = "/pa/units/orbital/l_orbital_laser/l_orbital_laser.json",

		SPECTRE = "/pa/units/orbital/l_orbital_probe/l_orbital_probe.json",
		PALADIN = "/pa/units/orbital/l_orbital_railgun/l_orbital_railgun.json",
		SPUTNIK = "/pa/units/orbital/l_radar_satellite/l_radar_satellite.json",
		COSMOS = "/pa/units/orbital/l_radar_satellite_adv/l_radar_satellite_adv.json",

		AKULA = "/pa/units/sea/l_attack_sub/l_attack_sub.json",
		EPOCH = "/pa/units/sea/l_battleship/l_battleship.json",
		BOWHEAD = "/pa/units/sea/l_destroyer/l_destroyer.json",
		L_NAVAL_FAB = "/pa/units/sea/l_fabrication_ship/l_fabrication_ship.json",
		L_NAVAL_FAB_ADVANCED = "/pa/units/sea/l_fabrication_ship_adv/l_fabrication_ship_adv.json",
		REMORA = "/pa/units/sea/l_fabrication_sub_combat_adv/l_fabrication_sub_combat_adv.json",
		TALOS = "/pa/units/sea/l_frigate/l_frigate.json",
		JAEGER = "/pa/units/sea/l_hover_ship/l_hover_ship.json",
		MANTA ="/pa/units/sea/l_missile_ship/l_missile_ship.json",
		CATFISH = "/pa/units/sea/l_sea_scout/l_sea_scout.json",
		HAMMERHEAD = "/pa/units/sea/l_sea_tank/l_sea_tank.json",

			//Bugs ------------------------------------------------------------
		
			// []

		BUG_ORBITAL_TRANSPORT = "/pa/units/orbital/bug_lander/bug_lander.json",

		BEHEMOTH = "/pa/units/orbital/bug_orbital_battleship/bug_orbital_battleship.json",

		CHOMPER = "/pa/units/orbital/bug_orbital_chomper/bug_orbital_chomper.json",
		BUG_ORBITAL_FAB = "/pa/units/orbital/bug_orbital_fabricator/bug_orbital_fabricator.json",

		SEEKER = "/pa/units/orbital/bug_orbital_fighter/bug_orbital_fighter.json",
		SEEKER_VISION = "/pa/units/orbital/bug_orbital_fighter/bug_orbital_fighter_vision.json",
		BUG_ORBITAL_LASER = "/pa/units/orbital/bug_orbital_laser/bug_orbital_laser.json",
		BUG_ORBITAL_RADAR = "/pa/units/orbital/bug_orbital_radar/bug_orbital_radar.json",
		BUG_ORBITAL_RADAR_ADVANCED = "/pa/units/orbital/bug_advanced_orbital_radar/bug_advanced_orbital_radar.json",

		BUG_FIGHTER = "/pa/units/air/bug_fighter/bug_fighter.json",
		BUG_FIGHTER_ADVANCED = "/pa/units/air/bug_fighter_adv/bug_fighter_adv.json",
		MEDUSA = "/pa/units/air/bug_bomber/bug_bomber.json",
		STHENO = "/pa/units/air/bug_bomber_adv/bug_bomber_adv.json",
		BUG_TRANSPORT = "/pa/units/air/bug_transport/bug_transport,json",
		BUG_AIR_FAB = "/pa/units/air/bug_air_fab/bug_air_fab.json",
		BUG_AIR_FAB_ADVANCED = "/pa/units/air/bug_air_fab_adv/bug_air_fab_adv.json",
		HARPY = "/pa/units/air/bug_harpy/bug_harpy.json",
		BASILISK = "/pa/units/air/bug_basilisk/bug_basilisk.json",

		FORAGER = "/pa/units/land/bug_combat_fab/bug_combat_fab.json",
		FORAGER_CHEAP = "/pa/units/land/bug_combat_fab/bug_combat_fab_cheap.json",
		CRUSHER = "/pa/units/land/bug_crusher/bug_crusher.json",
		HYDRA = "/pa/units/land/bug_hydra/bug_hydra.json",
		BOMBARDIER = "/pa/units/land/bug_gren/bug_gren.json",
		BUG_BOT_FAB = "/pa/units/land/bug_bot_fab/bug_bot_fab.json",
		ZAPPER = "/pa/units/land/bug_aa/bug_aa.json",
		TEMPEST = "/pa/units/land/bug_aa_big/bug_aa_big.json",
		BUG_BOT_FAB_ADVANCED = "/pa/units/land/bug_bot_fab_advanced/bug_bot_fab_advanced.json",
		BELCHER = "/pa/units/land/bug_belcher/bug_belcher.json",
		BOOMER = "/pa/units/land/bug_boomer/bug_boomer.json",
		BOOMER_R = "/pa/units/land/bug_boomer/bug_boomer_r.json",
		ALPHA_BOOMER = "/pa/units/land/bug_boomer_big/bug_boomer_big.json",
		STEALTH_RIPPER = "/pa/units/land/bug_ripper_stealth/bug_ripper_stealth.json",
		RIPPER = "/pa/units/land/bug_ripper/bug_ripper.json",
		RUNNER = "/pa/units/land/bug_runner/bug_runner.json",
		
		SCORCHER = "/pa/units/land/bug_scorcher/bug_scorcher.json",

		GRUNT_BIG ="/pa/units/land/bug_grunt_big/bug_grunt_big.json",

		NEEDLER = "/pa/units/land/bug_needler/bug_needler.json",
		NEEDLER_FAST = "/pa/units/land/bug_needler/bug_needler_fast.json",
		MANTICORE = "/pa/units/land/bug_manticore/bug_manticore.json",
		BUG_SNIPER = "/pa/units/land/bug_sniper/bug_sniper.json",

		GRUNT = "/pa/units/land/bug_grunt/bug_grunt.json",

		//unit var and string list needed to convert custom settings, not fun to type out 

		Bug_Unit_List = [BUG_TRANSPORT,BUG_ORBITAL_TRANSPORT,BEHEMOTH,CHOMPER,BUG_ORBITAL_FAB,SEEKER,SEEKER_VISION,BUG_ORBITAL_LASER,BUG_ORBITAL_RADAR,BUG_ORBITAL_RADAR_ADVANCED,BUG_FIGHTER,BUG_FIGHTER_ADVANCED,MEDUSA,STHENO,
			BUG_AIR_FAB,BUG_AIR_FAB_ADVANCED,HARPY,BASILISK,FORAGER,FORAGER_CHEAP,CRUSHER,HYDRA,BOMBARDIER,BUG_BOT_FAB,ZAPPER,TEMPEST,BUG_BOT_FAB_ADVANCED,BELCHER,BOOMER,BOOMER_R,ALPHA_BOOMER,STEALTH_RIPPER,
			RIPPER,RUNNER,SCORCHER,GRUNT_BIG,NEEDLER,NEEDLER_FAST,MANTICORE,BUG_SNIPER,GRUNT],
		Legion_Unit_List = [NOVA, METEOR,INFILTRATOR,DAUNTLESS,L_AIR_FAB,L_AIR_FAB_ADVANCED,SCYTHE,FIREBIRD, SALAMANDER,LOCKHEED, MARAUDER, OSPREY,PEACEKEEPER,PATRIOT,ORBWEAVER,PURGER,MINIMAN,MONSTROSITY,PRAETORIAN,L_BOT_FAB,L_BOT_FAB_ADVANCED,L_VEHICLE_FAB,L_VEHICLE_FAB_ADVANCED,GUARDIAN,CORSAIR,PANZER,STOKE, NECROMANCER,ENFORCER,INVESTIGATOR,MAUL,LANCER,DEATHMARK,EARTHSHAKER,SCORPION,SHANK, HAVOC,IMPERATOR,L_ORB_FAB,VIPER,CHARIOT,BLACK_KNIGHT,SPECTRE,PALADIN,SPUTNIK,COSMOS,AKULA,EPOCH,BOWHEAD,L_NAVAL_FAB,L_NAVAL_FAB_ADVANCED,REMORA,TALOS,JAEGER,MANTA,CATFISH,HAMMERHEAD],
		Unit_List = [ANT,STINGER,VEHICLE_FAB,SKITTER,SPINNER,INFERNO,GRENADIER,DOX,SLAMMER,GILE,BOT_FAB,STITCH,BLUEHAWK,COLONEL,LOCUST,BOOM,SPARK,HUMMINGBIRD,AIR_FAB,FIREFLY,BUMBLEBEE,NAVAL_FAB,PIRANHA,NARWHAL,ORCA,BARRACUDA,ICARUS,SOLAR_ARRAY,PELICAN,KESTREL,HORSEFLY,ANGEL,WYRM,HORNET,PHOENIX,KAIJU,KRAKEN,STINGRAY,LEVIATHAN,TYPHOON,STRYKER,DRIFTER,LEVELER,STORM,SHELLER,VANGUARD,MANHATTAN,ASTRAEUS,HERMES,AVENGER,ARTEMIS,SSX,OMEGA,ORBITAL_FAB,ADVANCED_BOT_FAB,ADVANCED_VEHICLE_FAB,ADVANCED_AIR_FAB,ADVANCED_NAVAL_FAB,BARNACLE,MEND,ARKYD,ADVANCED_RADAR_SATELLITE],
		
		Bug_String_List = ["BUG_TRANSPORT","BUG_ORBITAL_TRANSPORT","BEHEMOTH","CHOMPER","BUG_ORBITAL_FAB","SEEKER","SEEKER_VISION","BUG_ORBITAL_LASER","BUG_ORBITAL_RADAR","BUG_ORBITAL_RADAR_ADVANCED","BUG_FIGHTER","BUG_FIGHTER_ADVANCED","MEDUSA","STHENO",
			"BUG_AIR_FAB","BUG_AIR_FAB_ADVANCED","HARPY","BASILISK","FORAGER","FORAGER_CHEAP","CRUSHER","HYDRA","BOMBARDIER","BUG_BOT_FAB","ZAPPER","TEMPEST","BUG_BOT_FAB_ADVANCED","BELCHER","BOOMER","BOOMER_R","ALPHA_BOOMER","STEALTH_RIPPER",
			"RIPPER","RUNNER","SCORCHER","GRUNT_BIG","NEEDLER","NEEDLER_FAST","MANTICORE","BUG_SNIPER","GRUNT"
		],
		Legion_String_List = ["NOVA", "METEOR","INFILTRATOR","DAUNTLESS","L_AIR_FAB","L_AIR_FAB_ADVANCED","SCYTHE","FIREBIRD", "SALAMANDER","LOCKHEED", "MARAUDER", "OSPREY","PEACEKEEPER","PATRIOT","ORBWEAVER","PURGER","MINIMAN","MONSTROSITY","PRAETORIAN","L_BOT_FAB","L_BOT_FAB_ADVANCED","L_VEHICLE_FAB","L_VEHICLE_FAB_ADVANCED","GUARDIAN","CORSAIR","PANZER","STOKE", "NECROMANCER","ENFORCER","INVESTIGATOR","MAUL","LANCER","DEATHMARK","EARTHSHAKER","SCORPION","SHANK", "HAVOC","IMPERATOR","L_ORB_FAB","VIPER","CHARIOT","BLACK_KNIGHT","SPECTRE","PALADIN","SPUTNIK","COSMOS","AKULA","EPOCH","BOWHEAD","L_NAVAL_FAB","L_NAVAL_FAB_ADVANCED","REMORA","TALOS","JAEGER","MANTA","CATFISH","HAMMERHEAD"],
		String_List = ["ANT","STINGER","VEHICLE_FAB","SKITTER","SPINNER","INFERNO","GRENADIER","DOX","SLAMMER","GILE","BOT_FAB","STITCH","BLUEHAWK","COLONEL","LOCUST","BOOM","SPARK","HUMMINGBIRD","AIR_FAB","FIREFLY","BUMBLEBEE","NAVAL_FAB","PIRANHA","NARWHAL","ORCA","BARRACUDA","ICARUS","SOLAR_ARRAY","PELICAN","KESTREL","HORSEFLY","ANGEL","WYRM","HORNET","PHOENIX","KAIJU","KRAKEN","STINGRAY","LEVIATHAN","TYPHOON","STRYKER","DRIFTER","LEVELER","STORM","SHELLER","VANGUARD","MANHATTAN","ASTRAEUS","HERMES","AVENGER","ARTEMIS","SSX","OMEGA","ORBITAL_FAB","ADVANCED_BOT_FAB","ADVANCED_VEHICLE_FAB","ADVANCED_AIR_FAB","ADVANCED_NAVAL_FAB","BARNACLE","MEND"],

		
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
		
		BOT_FAC = '5,DOX,F,2,SPARK,F,1,STINGER,F',
		ADVANCED_BOT_FAC = '3,SLAMMER,F,1,BLUEHAWK,F,1,GILE,F',
		VEHICLE_FAC = '3,ANT,F,2,INFERNO,F,1,SPINNER,F,1,SKITTER,F,2,ANT,F',
		ADVANCED_VEHICLE_FAC = '3,LEVELER,F,2,SHELLER,F,3,LEVELER,F,2,SHELLER,F,1,STORM,F',
		AIR_FAC = '1,FIREFLY,T,2,HUMMINGBIRD,F,1,BUMBLEBEE,F,2,HUMMINGBIRD,F',
		ADVANCED_AIR_FAC = '2,PHOENIX,F,2,KESTREL,F,1,HORSEFLY,F',
		NAVAL_FAC = '2,BARRACUDA,F,1,NARWHAL,F,1,ORCA,F',
		ADVANCED_NAVAL_FAC ='1,TYPHOON,T,2,KRAKEN,F,1,LEVIATHAN,F',
		ORBITAL_FACTORY = '10,AVENGER,F,2,ARTEMIS,F',
		ORBITAL_LAUNCHER ='1,AVENGER,F',

		//legion defaults
		Walker_Foundry = '2,PEACEKEEPER,F,1,PATRIOT,F,3,LANCER,F,5,PEACEKEEPER,F,1,PATRIOT,F,3,LANCER,F,3,PEACEKEEPER,F,1,INVESTIGATOR,F',
		Advanced_Walker_Foundry = '3,ENFORCER,F,1,MONSTROSITY,F,1,ORBWEAVER,F',
		Armour_Foundry ='3,SHANK,F,1,MAUL,F,3,SHANK,F,1,MAUL,F,1,GUARDIAN,F',
		Advanced_Armour_Foundry ='2,HAVOC,F,1,PANZER,F,1,SCORPION,F,2,HAVOC,F,1,PANZER,F',
		Flyer_Foundry ='4,SCYTHE,F,1,NOVA,F,1,MARAUDER,F,4,SCYTHE,F,2,NOVA,F,1,DAUNTLESS,F',
		Advanced_Flyer_Foundry ='5,FIREBIRD,F,2,LOCKHEED,F,1,SALAMANDER,F',
		Ship_Foundry =	'5,CATFISH,F,1,TALOS,F,1,BOWHEAD,F,1,AKULA,F,5,CATFISH,F,1,AKULA,F',
		Advanced_Ship_Foundry ='1,EPOCH,T,2,MANTA,F,1,JAEGER,F',
		Starship_Projector ='1,VIPER,F',
		Starship_Foundry ='10,VIPER,F,2,PALADIN,F',

		//Bug Defaults
		Swarm_Hive = '5,RIPPER,F,2,BOOMER,F,1,RUNNER,F',
		Basic_Hive = '3,GRUNT,F,3,NEEDLER,F,1,ZAPPER,F,1,BOMBARDIER,F',
		Advanced_Hive = '3,SCORCHER,F,2,MANTICORE,F,1,TEMPEST,F,3,SCORCHER,F,2,MANTICORE,F',
		Air_Hive = '4,BUG_FIGHTER,F,1,MEDUSA,F,4,BUG_FIGHTER,F',
		Advanced_Air_Hive =  '4,BUG_FIGHTER_ADVANCED,F,2,BASILISK,F',
		Spire = '1,SEEKER,F',



		Legion_Default_List = [Walker_Foundry ,Advanced_Walker_Foundry ,Armour_Foundry ,Advanced_Armour_Foundry ,Flyer_Foundry ,Advanced_Flyer_Foundry ,Ship_Foundry ,Advanced_Ship_Foundry ,Starship_Projector ,Starship_Foundry],

		Bugs_Default_List = [Swarm_Hive,Basic_Hive,Advanced_Hive,Air_Hive,Advanced_Air_Hive,Spire],
		
		Default_List = [BOT_FAC,ADVANCED_BOT_FAC,VEHICLE_FAC,ADVANCED_VEHICLE_FAC,AIR_FAC,ADVANCED_AIR_FAC,NAVAL_FAC,ADVANCED_NAVAL_FAC,ORBITAL_LAUNCHER,ORBITAL_FACTORY], //default list of factorys for use with settings
		
		//parsing custom settings queues
		SettingsList = [],
		SettingsNameList = ['Seconds Before Activation'],
		numberOfFactorys = 10,
		FactoryList = ['Bot_Factory','Advanced_Bot_Factory','Vehicle_Factory','Advanced_Vehicle_Factory','Air_Factory','Advanced_Air_Factory','Naval_Factory','Advanced_Naval_Factory','Orbital_Launcher','Orbital_Factory'],
		LegionSettingsList = [],
		LegionSettingsNameList = ['Seconds Before Activation'],
		LegionFactoryList = ['Walker_Foundry','Advanced_Walker_Foundry','Armour_Foundry','Advanced_Armour_Foundry','Flyer_Foundry','Advanced_Flyer_Foundry','Ship_Foundry','Advanced_Ship_Foundry','Starship_Projector','Starship_Foundry'],

		BugsSettingsList = [],
		BugsSettingsNameList = ['Seconds Before Activation'],
		BugsFactoryList = ['Swarm_Hive','Basic_Hive','Advanced_Hive','Air_Hive','Advanced_Air_Hive','Spire']
		//grabs each setting and splits the string
		//MLA
		for (var i = 0;i < numberOfFactorys;i++) {
			SettingsList[i] = api.settings.isSet('Autofactory', FactoryList[i], true)==undefined?Default_List[i]:api.settings.isSet('Autofactory', FactoryList[i], true);
			if(SettingsList[i].length == 0){
				SettingsList[i] = SettingsList[i];
			}
			else if(SettingsList[i].length < 6 && SettingsList[i].length !== 0){
				SettingsList[i] = Default_List[i];
				
			}
			SettingsList[i] = SettingsList[i].split(',');
			console.log(SettingsList[i])
		
			
		}
		var CurrentTime;
		var StartTime = api.settings.isSet('Autofactory', SettingsNameList[0], true)==undefined?"0":api.settings.isSet('Autofactory', SettingsNameList[0], true);
	
		StartTime = parseInt(StartTime,10);
	
		if(!(StartTime > 10)){StartTime = 0;}

		//LEGION
		for (var i = 0;i < numberOfFactorys;i++) {
			LegionSettingsList[i] = api.settings.isSet('AutofactoryLegion', LegionFactoryList[i], true)==undefined?Legion_Default_List[i]:api.settings.isSet('AutofactoryLegion', LegionFactoryList[i], true);
			if(LegionSettingsList[i].length < 6){
				LegionSettingsList[i] = Legion_Default_List[i];
				
			}
			LegionSettingsList[i] = LegionSettingsList[i].split(',');
		
			
		}
		var LegionStartTime = api.settings.isSet('AutofactoryLegion', LegionSettingsNameList[0], true)==undefined?"0":api.settings.isSet('AutofactoryLegion', LegionSettingsNameList[0], true);
	
		LegionStartTime = parseInt(LegionStartTime,10);
	
		if(!(LegionStartTime > 10)){LegionStartTime = 0;}

		//BUGS
		for (var i = 0;i < BugsFactoryList.length;i++) {
			BugsSettingsList[i] = api.settings.isSet('AutofactoryBugs', BugsFactoryList[i], true)==undefined?Bugs_Default_List[i]:api.settings.isSet('AutofactoryBugs', BugsFactoryList[i], true);
			if(BugsSettingsList[i].length < 6){
				BugsSettingsList[i] = Bugs_Default_List[i];
				
			}
			BugsSettingsList[i] = BugsSettingsList[i].split(',');
		
			
		}
		var BugsStartTime = api.settings.isSet('AutofactoryBugs', BugsSettingsNameList[0], true)==undefined?"0":api.settings.isSet('AutofactoryBugs', BugsSettingsNameList[0], true);
	
		BugsStartTime = parseInt(BugsStartTime,10);
	
		if(!(BugsStartTime > 10)){BugsStartTime = 0;}

		
		function parseBuildQueue(Queue, isLegion, isBugs){
			

			var localStringList = String_List
			var Local_Unit_List = Unit_List
			if(isLegion){localStringList = Legion_String_List;Local_Unit_List = Legion_Unit_List}
			if(isBugs){localStringList = Bug_String_List; Local_Unit_List = Bug_Unit_List}
			

			if(Queue.length == 1 && Queue[0].length == 0){return -1}

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
					for (i = 0; i<localStringList.length;i++){
						
						
						if (localStringList[i] === Queue[b]){
							
							
							
							Queue[b] = Local_Unit_List[i]
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
		for (var a = 0; a<LegionSettingsList.length;a++) {
			LegionSettingsList[a] = parseBuildQueue(LegionSettingsList[a], true, false)
			
		}
		for (var a = 0; a<BugsSettingsList.length;a++) {
			BugsSettingsList[a] = parseBuildQueue(BugsSettingsList[a], false, true)
			
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


		//legion default parse
		for(var i = 0;i<Legion_Default_List.length;i++){
			Legion_Default_List[i] = Legion_Default_List[i].split(',')
		}
		//Bug default parse
		for(var i = 0;i<Bugs_Default_List.length;i++){
			Bugs_Default_List[i] = Bugs_Default_List[i].split(',')
		}
		//declaring the custom settings 
		
		var BOT_FAC_CUSTOM,ADVANCED_BOT_FAC_CUSTOM,VEHICLE_FAC_CUSTOM,ADVANCED_VEHICLE_FAC_CUSTOM,AIR_FAC_CUSTOM,ADVANCED_AIR_FAC_CUSTOM,NAVAL_FAC_CUSTOM,ADVANCED_NAVAL_FAC_CUSTOM,ORBITAL_LAUNCHER_CUSTOM,ORBITAL_FACTORY_CUSTOM;

		var Walker_Foundry_Custom ,Advanced_Walker_Foundry_Custom ,Armour_Foundry_Custom ,Advanced_Armour_Foundry_Custom ,Flyer_Foundry_Custom ,Advanced_Flyer_Foundry_Custom ,Ship_Foundry_Custom ,Advanced_Ship_Foundry_Custom ,Starship_Projector_Custom ,Starship_Foundry_Custom;

		var Swarm_Hive_Custom,Basic_Hive_Custom,Advanced_Hive_Custom,Air_Hive_Custom,Advanced_Air_Hive_Custom,Spire_Custom;
		
		//list of custom settings
		var Custom_List = [BOT_FAC_CUSTOM,ADVANCED_BOT_FAC_CUSTOM,VEHICLE_FAC_CUSTOM,ADVANCED_VEHICLE_FAC_CUSTOM,AIR_FAC_CUSTOM,ADVANCED_AIR_FAC_CUSTOM,NAVAL_FAC_CUSTOM,ADVANCED_NAVAL_FAC_CUSTOM,ORBITAL_LAUNCHER_CUSTOM,ORBITAL_FACTORY_CUSTOM];
		var Legion_Custom_List = [Walker_Foundry_Custom ,Advanced_Walker_Foundry_Custom ,Armour_Foundry_Custom ,Advanced_Armour_Foundry_Custom ,Flyer_Foundry_Custom ,Advanced_Flyer_Foundry_Custom ,Ship_Foundry_Custom ,Advanced_Ship_Foundry_Custom ,Starship_Projector_Custom ,Starship_Foundry_Custom]
		var Bugs_Custom_List = [Swarm_Hive_Custom,Basic_Hive_Custom,Advanced_Hive_Custom,Air_Hive_Custom,Advanced_Air_Hive_Custom,Spire_Custom]
		
		for(i=0;i<numberOfFactorys;i++){
			Custom_List[i] = SettingsList[i];
		}

		for(i=0;i<numberOfFactorys;i++){
			Legion_Custom_List[i] = LegionSettingsList[i];
		}

		for(i=0;i<Bugs_Custom_List.length;i++){
			Bugs_Custom_List[i] = BugsSettingsList[i];
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

		//Legion
		if(Legion_Custom_List[0] !== false){Walker_Foundry = Legion_Custom_List[0];}
		if(Legion_Custom_List[1] !== false){Advanced_Walker_Foundry = Legion_Custom_List[1];}
		if(Legion_Custom_List[2] !== false){Armour_Foundry = Legion_Custom_List[2];}
		if(Legion_Custom_List[3] !== false){Advanced_Armour_Foundry = Legion_Custom_List[3];}
		if(Legion_Custom_List[4] !== false){Flyer_Foundry = Legion_Custom_List[4];}
		if(Legion_Custom_List[5] !== false){Advanced_Flyer_Foundry = Legion_Custom_List[5];}
		if(Legion_Custom_List[6] !== false){Ship_Foundry = Legion_Custom_List[6];}
		if(Legion_Custom_List[7] !== false){Advanced_Ship_Foundry = Legion_Custom_List[7];}
		if(Legion_Custom_List[8] !== false){Starship_Projector = Legion_Custom_List[8];}
		if(Legion_Custom_List[9] !== false){Starship_Foundry = Legion_Custom_List[9];}

		//Bugs	Bugs_Default_List = [Swarm_Hive,Basic_Hive,Advanced_Hive,Air_Hive,Advanced_Air_Hive,Spire],
		if(Bugs_Custom_List[0] !== false){Swarm_Hive = Bugs_Custom_List[0];}
		if(Bugs_Custom_List[1] !== false){Basic_Hive = Bugs_Custom_List[1];}
		if(Bugs_Custom_List[2] !== false){Advanced_Hive = Bugs_Custom_List[2];}
		if(Bugs_Custom_List[3] !== false){Air_Hive = Bugs_Custom_List[3];}
		if(Bugs_Custom_List[4] !== false){Advanced_Air_Hive = Bugs_Custom_List[4];}
		if(Bugs_Custom_List[5] !== false){Spire = Bugs_Custom_List[5];}
		
	}
	
    console.log(Bugs_Custom_List)

    function threshold_parse(id) {
      return ( (api.settings.isSet('ui', id, true) == undefined?80:api.settings.isSet('ui', id, true)) * 0.01 );
    }

    

	var landTime = 200000;
    model.TimeSinceLanding = 0;

    tAutoFactory.update = function (exec_type) {
		gameType == undefined
		
		if(gameType == undefined){gameType = model.gameType();}
        if (exec_type === undefined) {
            exec_type = 'auto';
        }
		
        if ( ((exec_type === 'manual') && model.gameOver() == false|| ((exec_type === 'auto') && !model.hasSelection()))  && model.maxEnergy() > 0 && model.gameOver() == false) {
			
		if(model.TimeSinceLanding<landTime && model.TimeSinceLanding !== 0){landTime = model.TimeSinceLanding}
			
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

					buildFromQueue(Advanced_Hive);
                    buildFromQueue(ADVANCED_BOT_FAC);
					buildFromQueue(Advanced_Walker_Foundry);
                }
                if (t2_veh_use === 1) {
                    if(selected_enabled === 0) {
                        api.select.allIdleFactories();
						api.select.fromSelectionWithTypeFilter('Basic', null, true);
					
                        selected_enabled = 1;
                    }
                     buildFromQueue(ADVANCED_VEHICLE_FAC);
					 buildFromQueue(Advanced_Armour_Foundry);
                }
                if (t2_air_use === 1) {
                    if(selected_enabled === 0) {
                        api.select.allIdleFactories();
						api.select.fromSelectionWithTypeFilter('Basic', null, true);
						
                        selected_enabled = 1;
                    }
					 buildFromQueue(Advanced_Air_Hive);
                     buildFromQueue(ADVANCED_AIR_FAC);
					 buildFromQueue(Advanced_Flyer_Foundry);
                }
                if (t2_nav_use === 1) {
                    if(selected_enabled === 0) {
                        api.select.allIdleFactories();
						api.select.fromSelectionWithTypeFilter('Basic', null, true);
						
                        selected_enabled = 1;
                    }
                     buildFromQueue(ADVANCED_NAVAL_FAC);
					 buildFromQueue(Advanced_Ship_Foundry);
                }
                if (t2_orb_use === 1) {
                    if(selected_enabled === 0) {
                        api.select.allIdleFactories();
						api.select.fromSelectionWithTypeFilter('Basic', null, true);
						
                        selected_enabled = 1;
                    }
                     buildFromQueue(ORBITAL_FACTORY);
					 buildFromQueue(Starship_Foundry);
				
                }
				api.select.allIdleFactories();
                if (t1_bot_use === 1) {
                    if(selected_enabled === 0) {
						api.select.allIdleFactories();
						
                        selected_enabled = 1;
                    }
                    api.select.fromSelectionWithTypeFilter('Advanced', null, true);
					
					buildFromQueue(Swarm_Hive);
                    buildFromQueue(BOT_FAC);
					buildFromQueue(Walker_Foundry);
                }

              
                if (t1_veh_use === 1) {
					
                    if(selected_enabled === 0) {
						api.select.allIdleFactories();
						
                        selected_enabled = 1;
                    }
                    api.select.fromSelectionWithTypeFilter('Advanced', null, true);
					
					buildFromQueue(Basic_Hive);
                     buildFromQueue(VEHICLE_FAC);
					 buildFromQueue(Armour_Foundry);
					
                }

                
                if (t1_air_use === 1) {
                    if(selected_enabled === 0) {
						api.select.allIdleFactories();
						
                        selected_enabled = 1;
                    }
                    api.select.fromSelectionWithTypeFilter('Advanced', null, true);
					 buildFromQueue(Air_Hive);
                     buildFromQueue(AIR_FAC);
					 buildFromQueue(Flyer_Foundry);
                }

               
                if (t1_nav_use === 1) {
                    if(selected_enabled === 0) {
						api.select.allIdleFactories();
						
                        selected_enabled = 1;
                    }
                    api.select.fromSelectionWithTypeFilter('Advanced', null, true);
                     buildFromQueue(NAVAL_FAC);
					 buildFromQueue(Ship_Foundry);
                }

               
                if (t1_orb_use === 1) {
                    if(selected_enabled === 0) {
						api.select.allIdleFactories();
						
                        selected_enabled = 1;
                    }
                    api.select.fromSelectionWithTypeFilter('Advanced', null, true);
					
					buildFromQueue(Spire);
                    buildFromQueue(ORBITAL_LAUNCHER);
					buildFromQueue(Starship_Projector);
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
	setTimeout(tAutoFactory.update, 5000);
	//console.log("timeout set")

    //visible to knockout
    model.tAutoFactory = tAutoFactory;

})();
