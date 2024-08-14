//todo add a decription of how to use settings menu
(function () {
  model.settingGroups().push("AutofactoryBugs");
  model.settingDefinitions().AutofactoryBugs = {title:"Autofactory(Bugs)",settings:{}};

  $(".option-list.keyboard").parent().append(
      $.ajax({
          type: "GET",
          url: 'coui://ui/mods/Autofactory/settings/AutofactoryBugs.html',
          async: false
      }).responseText
  );
  
 model.settingGroups.notifySubscribers();



//the following section of code used wondibles connect buttons mod as reference so is fairly similar; credit to him for making working text input in settings menu as I could find no other reference	

var numberOfFactorys = 6
var numberOfSettings = 1
var SettingsListTitle = ['Seconds Before Activation from landing']
var BugsSettingsList = ['Seconds Before Activation']
var BugsFactoryList = ['Swarm_Hive','Basic_Hive','Advanced_Hive','Air_Hive','Advanced_Air_Hive','Spire']
var BugsFactoryUnitsList = [
  'Swarm_Hive:(FORAGER,RIPPER,BELCHER,BOOMER,RUNNER)',
  'Basic_Hive:(BUG_BOT_FAB,GRUNT,NEEDLER,ZAPPER,BOMBARDIER)',
  'Advanced_Hive:(ADVANCED_BUG_BOT_FAB,SCORCHER,MANTICORE,ALPHA_BOOMER,TEMPEST,HYDRA,CRUSHER)',
  'Air_Hive:(BUG_AIR_FAB,BUG_FIGHTER,MEDUSA,HARPY,BUG_TRANSPORT)',
  'Advanced_Air_Hive:(BUG_AIR_FAB_ADVANCED,BUG_FIGHTER_ADVANCED,BASILISK,STHENO)',
  'Spire:(BUG_ORBITAL_FAB,SEEKER,CHOMPER,BEHEMOTH,BUG_ORBITAL_LASER,BUG_ORBITAL_RADAR)'
]
var groups = []
var BugsDefaultQueueList = [
  '5,RIPPER,F,2,BOOMER,F,1,RUNNER,F',
  '3,GRUNT,F,3,NEEDLER,F,1,ZAPPER,F,1,BOMBARDIER,F',
  '3,SCORCHER,F,2,MANTICORE,F,1,TEMPEST,F,3,SCORCHER,F,2,MANTICORE,F',
  '4,BUG_FIGHTER,F,1,MEDUSA,F,4,BUG_FIGHTER,F',
  '4,BUG_FIGHTER_ADVANCED,F,2,BASILISK,F',
  '1,SEEKER,F'
]

for (var i = 0;i < numberOfFactorys;i=i+1) {
  api.settings.definitions.AutofactoryBugs.settings[BugsFactoryList[i]] = {
    title: (BugsFactoryUnitsList[i]),
    type: 'text',
    default: BugsDefaultQueueList[i]
  }
}

for (var i = 0;i < numberOfSettings;i=i+1) {
  api.settings.definitions.AutofactoryBugs.settings[BugsSettingsList[i]] = {
    title: (SettingsListTitle[i]),
    type: 'text',
    default: ''
  }
}




model.settingDefinitions(api.settings.definitions)

model.BugsFactoryGroups = []
for (var j = 0;j < numberOfFactorys;j++) {
  model.BugsFactoryGroups[j] = {parts: [
    model.settingsItemMap()['AutofactoryBugs.' + BugsFactoryList[j]],
    
    
  ]}
}
for (var j = numberOfFactorys;j < numberOfFactorys+numberOfSettings;j++) {
  model.BugsFactoryGroups[j] = {parts: [
    model.settingsItemMap()['AutofactoryBugs.' + BugsSettingsList[j-numberOfFactorys]],
   
    
  ]}
}


var settingsHtml = 
  '<div class="form-group" data-bind="foreach: BugsFactoryGroups">' +
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

var $group = $(settingsHtml).appendTo('.option-list.AutofactoryBugs')

})();
