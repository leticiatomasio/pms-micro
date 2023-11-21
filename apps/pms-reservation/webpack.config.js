const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "../../tsconfig.base.json"),
  [
    "@pms-store",
    "@pms-auth",
    "@pms-http"
  ]
);

module.exports = withModuleFederation({
  ...config,
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
});

