//Converted with C2C3AddonConverter v1.0.0.6
"use strict";

{
	const PLUGIN_ID = "Rex_SLGBoard";
	const PLUGIN_VERSION = "0.1.0.0";
	const PLUGIN_CATEGORY = "data-and-storage";

	let app = null;

	const PLUGIN_CLASS = SDK.Plugins.Rex_SLGBoard = class Rex_SLGBoard extends SDK.IPluginBase
	{
		constructor()
		{
			super(PLUGIN_ID);
			SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());
			this._info.SetIcon("icon.png", "image/png");
			this._info.SetName(lang(".name"));
			this._info.SetDescription(lang(".description"));
			this._info.SetVersion(PLUGIN_VERSION);
			this._info.SetCategory(PLUGIN_CATEGORY);
			this._info.SetAuthor("Rex.Rainbow");
			this._info.SetHelpUrl(lang(".help-url"));
			this._info.SetIsSingleGlobal(false);
			this._info.SetIsDeprecated(false);
			SDK.Lang.PushContext(".properties");
			this._info.SetProperties([
				new SDK.PluginProperty("integer", "width", 64),
				new SDK.PluginProperty("integer", "height", 64),
				new SDK.PluginProperty("combo", "wrap", {initialValue:"no", items:["no","yes"]}),
				new SDK.PluginProperty("combo", "infinity", {initialValue:"no", items:["no","yes"]})
			]);
			SDK.Lang.PopContext();		// .properties
			SDK.Lang.PopContext();
		}
	};
	PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}
