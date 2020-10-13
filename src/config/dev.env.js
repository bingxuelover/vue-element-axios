'use strict'
import prodEnv from "./prod.env";

module.exports = Object.assign({}, prodEnv, {
    NODE_ENV: '"development"'
})