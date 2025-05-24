//todo add a decription of how to use settings menu
(function () {
    model.settingGroups().push("AutofactoryExiles");
    model.settingDefinitions().AutofactoryExiles = {title:"Autofactory(Exiles)",settings:{}};

    $(".option-list.keyboard").parent().append(
        $.ajax({
            type: "GET",
            url: 'coui://ui/mods/Autofactory/settings/AutofactoryExiles.html',
            async: false
        }).responseText
    );
    
   model.settingGroups.notifySubscribers();
	


	//the following section of code used wondibles connect buttons mod as reference so is fairly similar; credit to him for making working text input in settings menu as I could find no other reference	
	
  var numberOfFactorys = 11
  var numberOfSettings = 1
  var SettingsListTitle = ['Seconds Before Activation from landing']
  var ExilesSettingsList = ['Seconds Before Activation']
  var ExilesFactoryList = ["Bot_Factory","Advanced_Bot_Factory","Foundry","Tank_Factory","Advanced_Tank_Factory","Air_Factory","Advanced_Air_Factory","Naval_Factory","Advanced_Naval_Factory","Orbital_Launcher","Advanced_Orbital_Factory"]
  var ExilesFactoryUnitsList = [
'Bot_Factory:(T_BOT_FAB,CAN,TAIPAN,LICE,TIN,HYENA)',
'Advanced_Bot_Factory:(T_BOT_FAB_ADV,RHINO,TORCH,TARANTULA,CAPE,PUMPA,INFL,CYCLOPS)',

'Foundry:(T_BATTLE_FAB,SWORD_DOX)',

'Tank_Factory:(T_TANK_FAB,WHEEL,BOLT,CROC,OCELOT,MEERCAT)',
'Advanced_Tank_Factory:(T_TANK_FAB_ADV,STEALTH,HIPPO,COUGAR,HAIL,SHAH)',

'Air_Factory:(T_AIR_FAB,KIKIMORA,DRAGONFLY,STORK,REDKITE)',
'Advanced_Air_Factory:(T_AIR_FAB_ADV,NEEDLETAIL,SHRIKE,GARGOYLE,VULTURE)',

'Naval_Factory:(T_NAVAL_FAB,T_SKILFF,T_FRIGATE,T_MORTAR,T_HARDTACK)',
'Advanced_Naval_Factory:(T_NAVAL_FAB_ADV,T_SCILLA,T_MORRAY,T_ULUA)',


'Orbital_Launcher:()',
'Advanced_Orbital_Factory:()',
  ]
  var groups = []
  var ExilesDefaultQueueList = [
    	'6,CAN,F,2,TIN,F,1,LICE,F,1,TAIPAN,F',
		'5,RHINO,F,2,TORCH,F,1,TARANTULA,F,1,CAPE,F',

		'1,T_BATTLE_FAB,F,10,SWORD_DOX,F',

		'5,WHEEL,F,2,BOLT,F,2,CROC,F,2,OCELOT,F,1,MEERCAT,F,5,WHEEL,F,2,BOLT,F',
		'2,HIPPO,F,2,COUGAR,F,1,HAIL,F',

		'3,KIKIMORA,F,1,DRAGONFLY,F,1,REDKITE,F,3,KIKIMORA,F,,F,1,REDKITE,F',
		'3,NEEDLETAIL,F,1,SHRIKE,F,2,GARGOYLE,F',

		'2,T_FRIGATE,F,1,T_MORTAR,F,1,T_HARDTACK,F',
		'5,T_SCILLA,F,2,T_MORRAY,F,1,T_ULUA,F',
 '',
		'']

  for (var i = 0;i < numberOfFactorys;i=i+1) {
    api.settings.definitions.AutofactoryExiles.settings[ExilesFactoryList[i]] = {
      title: (ExilesFactoryUnitsList[i]),
      type: 'text',
      default: ExilesDefaultQueueList[i]
    }
  }
  
  for (var i = 0;i < numberOfSettings;i=i+1) {
    api.settings.definitions.AutofactoryExiles.settings[ExilesSettingsList[i]] = {
      title: (SettingsListTitle[i]),
      type: 'text',
      default: ''
    }
  }

  

  
  model.settingDefinitions(api.settings.definitions)

  model.ExilesFactoryGroups = []
  for (var j = 0;j < numberOfFactorys;j++) {
    model.ExilesFactoryGroups[j] = {parts: [
      model.settingsItemMap()['AutofactoryExiles.' + ExilesFactoryList[j]],
      
      
    ]}
  }
  for (var j = numberOfFactorys;j < numberOfFactorys+numberOfSettings;j++) {
    model.ExilesFactoryGroups[j] = {parts: [
      model.settingsItemMap()['AutofactoryExiles.' + ExilesSettingsList[j-numberOfFactorys]],
     
      
    ]}
  }
  

  var settingsHtml = 
    '<div class="form-group" data-bind="foreach: ExilesFactoryGroups">' +
      '<div class="sub-group" data-bind="foreach: parts">' +
        '<div class="option">' +
          '<label data-bind="text: title" >' +
            'title' +
          '</label>' +
          '<!-- ko if: $data.type() === "text" -->' +
          '<input type="text" class="form-control" value="" data-bind="value: value" />' +
          '<!-- /ko -->' +
        '</div>' + 
      '</div>' + 
    '</div>'
	
  var $group = $(settingsHtml).appendTo('.option-list.AutofactoryExiles')

})();
