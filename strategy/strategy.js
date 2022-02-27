"use strict";
exports.__esModule = true;
var database_js_1 = require("./database.js");
function dropPasswordFieldFromObject(user) {
    delete user["password"];
    return user;
}
var EmailAndPassword = /** @class */ (function () {
    function EmailAndPassword() {
    }
    EmailAndPassword.prototype.authenticate = function (credential) {
        var results = { isAuthenticated: false, user: null };
        for (var _i = 0, database_1 = database_js_1.database; _i < database_1.length; _i++) {
            var dbUser = database_1[_i];
            if (dbUser["email"] === credential["email"] && dbUser["password"] === credential["password"]) {
                results = { isAuthenticated: true, user: dbUser };
                break;
            }
        }
        return results;
    };
    return EmailAndPassword;
}());
var IDAndPassword = /** @class */ (function () {
    function IDAndPassword() {
    }
    IDAndPassword.prototype.authenticate = function (credential) {
        var results = { isAuthenticated: false, user: null };
        for (var _i = 0, database_2 = database_js_1.database; _i < database_2.length; _i++) {
            var dbUser = database_2[_i];
            if (dbUser["userID"] === credential["userID"] && dbUser["password"] === credential["password"]) {
                results = { isAuthenticated: true, user: dbUser };
                break;
            }
        }
        return results;
    };
    return IDAndPassword;
}());
var UserNameAndPassword = /** @class */ (function () {
    function UserNameAndPassword() {
    }
    UserNameAndPassword.prototype.authenticate = function (credential) {
        var results = { isAuthenticated: false, user: null };
        for (var _i = 0, database_3 = database_js_1.database; _i < database_3.length; _i++) {
            var dbUser = database_3[_i];
            if (dbUser["username"] === credential["username"] && dbUser["password"] === credential["password"]) {
                results = { isAuthenticated: true, user: dbUser };
                break;
            }
        }
        return results;
    };
    return UserNameAndPassword;
}());
var Logger = /** @class */ (function () {
    function Logger(user) {
        Logger.user = user;
    }
    Logger.login = function (scheme, credentials) {
        if (Logger.user === null) {
            // Altered logic
            var dbUser = null;
            if (scheme == "usernameAndPassword") {
                Logger.authenticator = new UserNameAndPassword();
            }
            else if (scheme == "emailAndPassword") {
                Logger.authenticator = new EmailAndPassword();
            }
            else if (scheme == "IDAndPassword") {
                Logger.authenticator = new IDAndPassword();
            }
            var authenticatedResults = Logger.authenticator.authenticate(credentials);
            if (authenticatedResults['isAuthenticated']) {
                dbUser = authenticatedResults['user'];
                new Logger(dropPasswordFieldFromObject(dbUser));
            }
        }
    };
    Logger.getLoggedInUser = function () {
        return Logger.user;
    };
    Logger.user = null;
    return Logger;
}());
Logger.login("IDAndPassword", { userID: "12345", password: "x12345" });
console.log(Logger.getLoggedInUser());
Logger.login("emailAndPassword", { email: "odeke@gmail.com", password: "p@ssw0rd" });
console.log(Logger.getLoggedInUser());
Logger.login("usernameAndPassword", { username: "gabby", password: "m55855" });
console.log(Logger.getLoggedInUser());
Logger.login("usernameAndPassword", { username: "@ushindi", password: "x86991" });
console.log(Logger.getLoggedInUser());
Logger.login("usernameAndPassword", { username: "josh", password: "passjosh" });
console.log(Logger.getLoggedInUser());
Logger.login("usernameAndPassword", { username: "ziyalogy", password: "food" });
console.log(Logger.getLoggedInUser());
Logger.login("usernameAndPassword", { username: "raymondcolor", password: "ray345" });
console.log(Logger.getLoggedInUser());
Logger.login("usernameAndPassword", { username: "b.rojas", password: "7890x" });
console.log(Logger.getLoggedInUser());
function scheme(scheme, arg1, arg2) {
    throw new Error('Function not implemented.');
}
// console.log(database);
