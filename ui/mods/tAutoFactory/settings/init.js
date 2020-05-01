(function() {

    //console.log("af roll call live game settings");

    var af_settings_var = {

	tAutoFactory_dd_t1_bot: {
		title: 'T1 Bot Unit Choice',
		type: 'select',
		options: ['FABBER', 'COMBAT FABBER', 'DOX', 'GRENADIER', 'BOOM', 'NONE'],
		default: 'DOX'
	},
	tAutoFactory_t1_bot_metal: {
		title: 'T1 Bot Metal % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},
	tAutoFactory_t1_bot_energy: {
		title: 'T1 Bot Energy % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},

	tAutoFactory_dd_t2_bot: {
		title: 'T2 Bot Unit Choice',
		type: 'select',
		options: ['ADV FABBER', 'ADV COMBAT FABBER', 'GIL-E', 'SLAMMER', 'BLUEHAWK', 'SAME AS T1'],
		default: 'SLAMMER'
	},
	tAutoFactory_t2_bot_metal: {
		title: 'T2 Bot Metal % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},
	tAutoFactory_t2_bot_energy: {
		title: 'T2 Bot Energy % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},

	tAutoFactory_dd_t1_veh: {
		title: 'T1 Vehicle Unit Choice',
		type: 'select',
		options: ['FABBER', 'SKITTER', 'INFERNO', 'SPINNER', 'T1 TANK', 'NONE'],
		default: 'T1 TANK'
	},
	tAutoFactory_t1_veh_metal: {
		title: 'T1 Vehicle Metal % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},
	tAutoFactory_t1_veh_energy: {
		title: 'T1 Vehicle Energy % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},

	tAutoFactory_dd_t2_veh: {
		title: 'T2 Vehicle Unit Choice',
		type: 'select',
		options: ['ADV FABBER', 'VANGUARD', 'SHELLER', 'LEVELER', 'SAME AS T1'],
		default: 'LEVELER'
	},
	tAutoFactory_t2_veh_metal: {
		title: 'T2 Vehicle Metal % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},
	tAutoFactory_t2_veh_energy: {
		title: 'T2 Vehicle Energy % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},

	tAutoFactory_dd_t1_air: {
		title: 'T1 Air Unit Choice',
		type: 'select',
		options: ['FABBER', 'FIREFLY', 'HUMMINGBIRD', 'BUMBLEBEE', 'NONE'],
		default: 'HUMMINGBIRD'
	},
	tAutoFactory_t1_air_metal: {
		title: 'T1 Air Metal % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},
	tAutoFactory_t1_air_energy: {
		title: 'T1 Air Energy % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},

	tAutoFactory_dd_t2_air: {
		title: 'T2 Air Unit Choice',
		type: 'select',
		options: ['ADV FABBER', 'PELICAN', 'KESTREL', 'HORNET', 'SAME AS T1'],
		default: 'HORNET'
	},
	tAutoFactory_t2_air_metal: {
		title: 'T2 Air Metal % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},
	tAutoFactory_t2_air_energy: {
		title: 'T2 Air Energy % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},

	tAutoFactory_dd_t1_nav: {
		title: 'T1 Naval Unit Choice',
		type: 'select',
		options: ['FABBER', 'SUN FISH', 'NARWHAL', 'ORCA', 'NONE'],
		default: 'ORCA'
	},
	tAutoFactory_t1_nav_metal: {
		title: 'T1 Naval Metal % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},
	tAutoFactory_t1_nav_energy: {
		title: 'T1 Naval Energy % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},

	tAutoFactory_dd_t2_nav: {
		title: 'T2 Naval Unit Choice',
		type: 'select',
		options: ['ADV FABBER', 'LEVIATHAN', 'STINGRAY', 'SAME AS T1'],
		default: 'LEVIATHAN'
	},
	tAutoFactory_t2_nav_metal: {
		title: 'T2 Naval Metal % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},
	tAutoFactory_t2_nav_energy: {
		title: 'T2 Naval Energy % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},

	tAutoFactory_dd_t1_orb: {
		title: 'T1 Orbital Unit Choice',
		type: 'select',
		options: ['FABBER', 'ASTRAEUS', 'AVENGER', 'RADAR SATELLITE', 'NONE'],
		default: 'AVENGER'
	},
	tAutoFactory_t1_orb_metal: {
		title: 'T1 Orbital Metal % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},
	tAutoFactory_t1_orb_energy: {
		title: 'T1 Orbital Energy % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},

	tAutoFactory_dd_t2_orb: {
		title: 'T2 Orbital Unit Choice',
		type: 'select',
		options: ['ADV RADAR SATELLITE', 'SXX LASER', 'SOLAR ARRAY', 'SAME AS LAUNCHER'],
		default: 'SOLAR ARRAY'
	},
	tAutoFactory_t2_orb_metal: {
		title: 'T2 Orbital Metal % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},
	tAutoFactory_t2_orb_energy: {
		title: 'T2 Orbital Energy % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},

	tAutoFactory_dd_nuk: {
		title: 'Nuke Launcher Unit Choice',
		type: 'select',
		options: ['NUKE', 'NONE'],
		default: 'NUKE'
	},
	tAutoFactory_nuk_metal: {
		title: 'Nuke Launcher Metal % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},
	tAutoFactory_nuk_energy: {
		title: 'Nuke Launcher Energy % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},

	tAutoFactory_dd_ank: {
		title: 'Anti-Nuke Launcher Unit Choice',
		type: 'select',
		options: ['ANTI-NUKE', 'NONE'],
		default: 'ANTI-NUKE'
	},
	tAutoFactory_ank_metal: {
		title: 'Anti-Nuke Launcher Metal % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
	},
	tAutoFactory_ank_energy: {
		title: 'Anti-Nuke Launcher Energy % Threshold',
		type: 'slider',
		options: {min:1, max:99, step:1},
		default: 80
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
