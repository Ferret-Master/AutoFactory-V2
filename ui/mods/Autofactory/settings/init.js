(function() {

    //console.log("af roll call live game settings");

    var af_settings_var = {

	AutoFactory_Choice: {
		title: 'Build Order Choice',
		type: 'select',
		set: 'AutoFactory',
        display_group: 'AutoFactory',
		options: ['DEFAULT', 'Custom'],
		default: 'DEFUALT'
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
