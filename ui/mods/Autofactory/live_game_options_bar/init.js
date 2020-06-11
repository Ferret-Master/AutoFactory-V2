var tAutoFactory_op_bar = (function () {

		var tAutoFactory_op_bar = {};
		tAutoFactory_op_bar.active = ko.observable(true);

	    return tAutoFactory_op_bar;
})();

(function () {
    "use strict";

    //console.log("af roll call live game init create ui");

    //visible to knockout
    model.tAutoFactory_op_bar = tAutoFactory_op_bar;

    //add toggle to live_game bottom bar
	$(".div_ingame_options_bar_cont").prepend("<div class=\"btn_ingame_options div_af_toggle_cont\"><a href=\"#\" data-bind=\"click: function () { tAutoFactory_op_bar.active(!tAutoFactory_op_bar.active()); api.Panel.message(api.Panel.parentId, 'aftoggle', tAutoFactory_op_bar.active()?'true':'false'); }\"><!-- ko if: tAutoFactory_op_bar.active() --><img src=\"coui://ui/mods/tAutoFactory/live_game/af_on.png\" /><!-- /ko --><!-- ko ifnot: tAutoFactory_op_bar.active() --><img src=\"coui://ui/mods/tAutoFactory/live_game/af_off.png\" /><!-- /ko --></a></div>");

})();
