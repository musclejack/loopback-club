'use strict';

const Promise = require('bluebird');
const bluebirdCo = require('bluebird-co');
const debug = require('debug')('club:appuser');

Promise.coroutine.addYieldHandler(bluebirdCo.toPromise);

/**
 * AppUser model.
 * Extends LoopBack [User](#user-new-user).
 *
 * Default `AppUser` ACLs.
 *
 * - DENY EVERYONE `*`
 * - ALLOW EVERYONE `create`
 * - ALLOW EVERYONE `login`
 * - ALLOW EVERYONE `logout`
 * - ALLOW OWNER `findById`
 * - ALLOW OWNER `updateAttributes`
 *
 * @property {String} username Must be unique.
 * @property {String} password Hidden from remote clients.
 * @property {String} email Must be valid email.
 * @property {Boolean} emailVerified Set when a user's email has been verified via `confirm()`.
 * @property {Object} settings Extends the `Model.settings` object.
 * @property {Boolean} settings.emailVerificationRequired Require the email verification
 * process before allowing a login.
 * @property {Number} settings.ttl Default time to live (in seconds) for the `AccessToken` created by `User.login() / user.createAccessToken()`.
 * Default is `1209600` (2 weeks)
 * @property {Number} settings.maxTTL The max value a user can request a token to be alive / valid for.
 * Default is `31556926` (1 year)
 * @property {Boolean} settings.realmRequired Require a realm when logging in a user.
 * @property {String} settings.realmDelimiter When set a realm is required.
 * @property {Number} settings.resetPasswordTokenTTL Time to live for password reset `AccessToken`. Default is `900` (15 minutes).
 * @property {Number} settings.saltWorkFactor The `bcrypt` salt work factor. Default is `10`.
 * @property {Boolean} settings.caseSensitiveEmail Enable case sensitive email.
 *
 * @class AppUser
 * @inherits {User}
 */
module.exports = function(AppUser) {

  AppUser.validatesLengthOf('username', { min: 2, max: 20 });
  AppUser.validatesLengthOf('description', { max: 128, allowNull: true });
};
