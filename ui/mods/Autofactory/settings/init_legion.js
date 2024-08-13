//todo add a decription of how to use settings menu
(function () {
    model.settingGroups().push("AutofactoryLegion");
    model.settingDefinitions().AutofactoryLegion = {title:"Autofactory(Legion)",settings:{}};

    $(".option-list.keyboard").parent().append(
        $.ajax({
            type: "GET",
            url: 'coui://ui/mods/Autofactory/settings/AutofactoryLegion.html',
            async: false
        }).responseText
    );
    
   model.settingGroups.notifySubscribers();
	


	//the following section of code used wondibles connect buttons mod as reference so is fairly similar; credit to him for making working text input in settings menu as I could find no other reference	
	
  var numberOfFactorys = 10
  var numberOfSettings = 1
  var SettingsListTitle = ['Seconds Before Activation from landing']
  var LegionSettingsList = ['Seconds Before Activation']
  var LegionFactoryList = ['Walker_Foundry','Advanced_Walker_Foundry','Armour_Foundry','Advanced_Armour_Foundry','Flyer_Foundry','Advanced_Flyer_Foundry','Ship_Foundry','Advanced_Ship_Foundry','Starship_Projector','Starship_Foundry']
  var groups = []
  var LegionDefaultQueueList = [
    '2,PEACEKEEPER,F,1,PATRIOT,F,3,LANCER,F,5,PEACEKEEPER,F,1,PATRIOT,F,3,LANCER,F,3,PEACEKEEPER,F,1,INVESTIGATOR,F',
    '3,ENFORCER,F,1,MONSTROSITY,F,1,ORBWEAVER,F',
    '3,SHANK,F,1,MAUL,F,3,SHANK,F,1,MAUL,F,1,GUARDIAN,F',
    '2,HAVOC,F,1,PANZER,F,1,SCORPION,F,2,HAVOC,F,1,PANZER,F',
    '4,SCYTHE,F,1,NOVA,F,1,MARAUDER,F,4,SCYTHE,F,2,NOVA,F,1,DAUNTLESS,F',
    '5,FIREBIRD,F,2,LOCKHEED,F,1,SALAMANDER,F',
    '5,CATFISH,F,1,TALOS,F,1,BOWHEAD,F,1,AKULA,F,5,CATFISH,F,1,AKULA,F',
    '1,EPOCH,T,2,MANTA,F,1,JAEGER,F',
    '1,VIPER,F',
    '10,VIPER,F,2,PALADIN,F']

  for (var i = 0;i < numberOfFactorys;i=i+1) {
    api.settings.definitions.AutofactoryLegion.settings[LegionFactoryList[i]] = {
      title: (LegionFactoryList[i]),
      type: 'text',
      default: LegionDefaultQueueList[i]
    }
  }
  
  for (var i = 0;i < numberOfSettings;i=i+1) {
    api.settings.definitions.AutofactoryLegion.settings[LegionSettingsList[i]] = {
      title: (SettingsListTitle[i]),
      type: 'text',
      default: ''
    }
  }

  

  
  model.settingDefinitions(api.settings.definitions)

  model.LegionFactoryGroups = []
  for (var j = 0;j < numberOfFactorys;j++) {
    model.LegionFactoryGroups[j] = {parts: [
      model.settingsItemMap()['AutofactoryLegion.' + LegionFactoryList[j]],
      
      
    ]}
  }
  for (var j = numberOfFactorys;j < numberOfFactorys+numberOfSettings;j++) {
    model.LegionFactoryGroups[j] = {parts: [
      model.settingsItemMap()['AutofactoryLegion.' + LegionSettingsList[j-numberOfFactorys]],
     
      
    ]}
  }
  

  var settingsHtml = 
    '<div class="form-group" data-bind="foreach: LegionFactoryGroups">' +
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
	
  var $group = $(settingsHtml).appendTo('.option-list.AutofactoryLegion')

})();
