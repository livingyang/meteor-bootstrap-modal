Package.describe({
  summary: "Provides bootstrap modal v2.2.0"
});

Package.on_use(function (api) {
  api.use('bootstrap-3', 'client');

  var path = Npm.require('path');
  var asset_path = path.join('bootstrap-mocal');

  // css
  api.add_files(path.join(asset_path, 'css', 'bootstrap-modal-bs3patch.css'), 'client');
  api.add_files(path.join(asset_path, 'css', 'bootstrap-modal.css'), 'client');
  
  // js
  api.add_files(path.join(asset_path, 'js', 'bootstrap-modal.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'bootstrap-modalmanager.js'), 'client');
});