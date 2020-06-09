(function() {

    //console.log("af roll call live game settings");

    var af_settings_var = {

	tAutoFactory_dd_t1_bot: {
		title: 'T1 Bot Unit Choice',
		type: 'select',
		options: ['FABBER', 'COMBAT FABBER', 'DOX', 'GRENADIER', 'BOOM', 'NONE'],
		default: 'DOX'
	},
	

	tAutoFactory_dd_t2_bot: {
		title: 'T2 Bot Unit Choice',
		type: 'select',
		options: ['ADV FABBER', 'ADV COMBAT FABBER', 'GIL-E', 'SLAMMER', 'BLUEHAWK', 'SAME AS T1'],
		default: 'SLAMMER'
	},
	

	tAutoFactory_dd_t1_veh: {
		title: 'T1 Vehicle Unit Choice',
		type: 'select',
		options: ['FABBER', 'SKITTER', 'INFERNO', 'SPINNER', 'T1 TANK', 'NONE'],
		default: 'T1 TANK'
	},
	

	tAutoFactory_dd_t2_veh: {
		title: 'T2 Vehicle Unit Choice',
		type: 'select',
		options: ['ADV FABBER', 'VANGUARD', 'SHELLER', 'LEVELER', 'SAME AS T1'],
		default: 'LEVELER'
	},
	

	tAutoFactory_dd_t1_air: {
		title: 'T1 Air Unit Choice',
		type: 'select',
		options: ['FABBER', 'FIREFLY', 'HUMMINGBIRD', 'BUMBLEBEE', 'NONE'],
		default: 'HUMMINGBIRD'
	},
	

	tAutoFactory_dd_t2_air: {
		title: 'T2 Air Unit Choice',
		type: 'select',
		options: ['ADV FABBER', 'PELICAN', 'KESTREL', 'HORNET', 'SAME AS T1'],
		default: 'HORNET'
	},
	

	tAutoFactory_dd_t1_nav: {
		title: 'T1 Naval Unit Choice',
		type: 'select',
		options: ['FABBER', 'SUN FISH', 'NARWHAL', 'ORCA', 'NONE'],
		default: 'ORCA'
	},
	

	tAutoFactory_dd_t2_nav: {
		title: 'T2 Naval Unit Choice',
		type: 'select',
		options: ['ADV FABBER', 'LEVIATHAN', 'STINGRAY', 'SAME AS T1'],
		default: 'LEVIATHAN'
	},
	

	tAutoFactory_dd_t1_orb: {
		title: 'T1 Orbital Unit Choice',
		type: 'select',
		options: ['FABBER', 'ASTRAEUS', 'AVENGER', 'RADAR SATELLITE', 'NONE'],
		default: 'AVENGER'
	},
	

	tAutoFactory_dd_t2_orb: {
		title: 'T2 Orbital Unit Choice',
		type: 'select',
		options: ['ADV RADAR SATELLITE', 'SXX LASER', 'SOLAR ARRAY', 'SAME AS LAUNCHER'],
		default: 'SOLAR ARRAY'
	},
	

	tAutoFactory_dd_nuk: {
		title: 'Nuke Launcher Unit Choice',
		type: 'select',
		options: ['NUKE', 'NONE'],
		default: 'NUKE'
	},
	

	tAutoFactory_dd_ank: {
		title: 'Anti-Nuke Launcher Unit Choice',
		type: 'select',
		options: ['ANTI-NUKE', 'NONE'],
		default: 'ANTI-NUKE'
	}
	

	};

	_.extend(api.settings.definitions.ui.settings, af_settings_var);

	//fix for settings not shown
	//model.settingGroups.notifySubscribers(); }));
	model.settingDefinitions(api.settings.definitions);
	

	var $group = $('<div class="sub-group"></div>').appendTo('.option-list.ui .form-group');
  	$group.append('<div class="sub-group-title">Auto Factory</div>');

  	Object.keys(af_settings_var).forEach(function(setting) {
    	$group.append('<div class="option" data-bind="template: { name: \'setting-template\', data: $root.settingsItemMap()[\'ui.' + setting + '\'] }"></div>')
  	});

})()
