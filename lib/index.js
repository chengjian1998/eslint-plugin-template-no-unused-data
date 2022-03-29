/**
 * @fileoverview 未在template使用的数据则不需要在data中定义
 * @author eslint-plugin-template-no-unused-data
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.configs = {
  'property': {
    rules: {
      'template-no-unused-data/template-no-unused-data': 'warn',
    }
  }
}

