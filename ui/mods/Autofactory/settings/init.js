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
  var FactoryList = ['Bot_Factory','Advanced_Bot_Factory','Vehicle_Factory','Advanced_Vehicle_Factory','Air_Factory','Advanced_Air_Factory','Naval_Factory','Advanced_Naval_Factory','Orbital_Launcher','Orbital_Factory']
  var groups = []

  for (var i = 0;i < numberOfFactorys;i=i+2) {
    api.settings.definitions.Autofactory.settings[FactoryList[i]] = {
      title: (FactoryList[i]),
      type: 'text',
      default: ''
    }
    api.settings.definitions.Autofactory.settings[FactoryList[i+1]] = {
      title: (FactoryList[i+1]),
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
