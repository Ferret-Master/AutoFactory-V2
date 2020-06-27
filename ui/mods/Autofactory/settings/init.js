//todo add a decription of how to use settings menu
(function () {
    model.settingGroups().push("Autofactory");
    model.settingDefinitions().Autofactory = {title:"Autofactory",settings:{}};

    $(".option-list.keyboard").parent().append(
        $.ajax({
            type: "GET",
            url: 'coui://ui/mods/Autofactory/settings/Autofactory.html',
            async: false
        }).responseText
    );
    
   model.settingGroups.notifySubscribers();
	


	//the following section of code used wondibles connect buttons mod as reference so is fairly similar; credit to him for making working text input in settings menu as I could find no other reference	
	
  var numberOfFactorys = 10
  var numberOfSettings = 1
  var SettingsListTitle = ['Seconds Before Activation from landing']
  var SettingsList = ['Seconds Before Activation']
  var FactoryList = ['Bot_Factory','Advanced_Bot_Factory','Vehicle_Factory','Advanced_Vehicle_Factory','Air_Factory','Advanced_Air_Factory','Naval_Factory','Advanced_Naval_Factory','Orbital_Launcher','Orbital_Factory']
  var groups = []
  var DefaultQueueList = ['5,DOX,F,2,SPARK,F','3,SLAMMER,F,1,BLUEHAWK,F,1,GILE,F','3,ANT,F,2,INFERNO,F,1,SPINNER,F,1,SKITTER,F,2,ANT,F','3,LEVELER,F,2,SHELLER,F,3,LEVELER,F,2,SHELLER,F,1,STORM,F','1,FIREFLY,T,2,HUMMINGBIRD,F,1,BUMBLEBEE,F,2,HUMMINGBIRD,F','2,PHOENIX,F,2,KESTREL,F,1,HORSEFLY,F','2,BARRACUDA,F,1,NARWHAL,F,1,ORCA,F','1,TYPHOON,T,2,KRAKEN,F,1,LEVIATHAN,F','10,AVENGER,F,2,ARTEMIS,F','1,AVENGER,F']

  for (var i = 0;i < numberOfFactorys;i=i+1) {
    api.settings.definitions.Autofactory.settings[FactoryList[i]] = {
      title: (FactoryList[i]),
      type: 'text',
      default: DefaultQueueList[i]
    }
  }
  
  for (var i = 0;i < numberOfSettings;i=i+1) {
    api.settings.definitions.Autofactory.settings[SettingsList[i]] = {
      title: (SettingsListTitle[i]),
      type: 'text',
      default: ''
    }
  }

  

  
  model.settingDefinitions(api.settings.definitions)

  model.FactoryGroups = []
  for (var j = 0;j < numberOfFactorys;j++) {
    model.FactoryGroups[j] = {parts: [
      model.settingsItemMap()['Autofactory.' + FactoryList[j]],
      
      
    ]}
  }
  for (var j = numberOfFactorys;j < numberOfFactorys+numberOfSettings;j++) {
    model.FactoryGroups[j] = {parts: [
      model.settingsItemMap()['Autofactory.' + SettingsList[j-numberOfFactorys]],
     
      
    ]}
  }
  

  var settingsHtml = 
    '<div class="form-group" data-bind="foreach: FactoryGroups">' +
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
	
  var $group = $(settingsHtml).appendTo('.option-list.Autofactory')

})();
