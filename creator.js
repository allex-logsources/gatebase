function createGateBaseLogSource (execlib, logsourceregistrylibignored) {
  var registry = execlib.execSuite.additionalRegistries.get('logsources'),
    LogSourceBase = registry.get('.'),
    lib = execlib.lib;

  function GateBaseLogSource (conf) {
    LogSourceBase.call(this, conf);
    this.gate = conf.gate;
  }
  lib.inherit(GateBaseLogSource, LogSourceBase);
  GateBaseLogSource.prototype.__cleanUp = function () {
    this.gate = null;
    LogSourceBase.prototype.__cleanUp.call(this);
  };

  return GateBaseLogSource;
}
module.exports = createGateBaseLogSource;