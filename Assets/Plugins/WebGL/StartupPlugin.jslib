mergeInto(LibraryManager.library, {
  Loaded: function () {
	console.log("firstSceneLoadedCallback")
    window.firstSceneLoadedCallback();
  }
});