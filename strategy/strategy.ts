import { database } from './database.js';

function dropPasswordFieldFromObject(user:object){
    delete user["password"]
    return user

}

interface Authenticate{
    authenticate(credential: object):object;
}

class EmailAndPassword implements Authenticate{
    authenticate(credential: object): object {
        let results = {isAuthenticated: false, user:null}
        for (let dbUser of database){
            if (dbUser["email"] === credential["email"] && dbUser["password"] === credential["password"]){
                results = {isAuthenticated: true, user: dbUser}
                break
            }
        }
        return results
    }
}

class IDAndPassword implements Authenticate{
    authenticate(credential: object): object {
        let results = {isAuthenticated: false, user:null}
        for (let dbUser of database){
            if (dbUser["userID"] === credential["userID"] && dbUser["password"] === credential["password"]){
                results = {isAuthenticated: true, user: dbUser}
                break
            }
        }
        return results
    }
}

class UserNameAndPassword implements Authenticate{
    authenticate(credential: object): object {
        let results = {isAuthenticated: false, user:null}
        for (let dbUser of database){
            if (dbUser["username"] === credential["username"] && dbUser["password"] === credential["password"]){
                results = {isAuthenticated: true, user: dbUser}
                break
            }
        }
        return results
    }
}

class Logger{
    private static authenticator:Authenticate;
    private static user:object = null;
    private constructor(user:object){
        Logger.user = user
    }

    static login(scheme:string, credentials:object){
        if(Logger.user === null){
            // Altered logic
            let dbUser = null;
            if(scheme == "usernameAndPassword"){
                Logger.authenticator = new UserNameAndPassword()
            }else if(scheme == "emailAndPassword"){
                Logger.authenticator = new EmailAndPassword()
            }else if(scheme == "IDAndPassword"){
                Logger.authenticator = new IDAndPassword()
            }

            let authenticatedResults = Logger.authenticator.authenticate(credentials)
           
            if (authenticatedResults['isAuthenticated']){
                dbUser = authenticatedResults['user']
                new Logger(dropPasswordFieldFromObject(dbUser));
            } 

        }
    }

    static getLoggedInUser(){
        return Logger.user
    }
}

Logger.login("IDAndPassword", {userID:"12345", password:"x12345"});
console.log(Logger.getLoggedInUser());
Logger.login("emailAndPassword", {email:"odeke@gmail.com", password:"p@ssw0rd"});
console.log(Logger.getLoggedInUser())
Logger.login("usernameAndPassword",{username:"gabby", password:"m55855"});
console.log(Logger.getLoggedInUser())
Logger.login("usernameAndPassword",{username:"@ushindi", password:"x86991"});
console.log(Logger.getLoggedInUser())
Logger.login("usernameAndPassword",{username:"josh", password:"passjosh"});
console.log(Logger.getLoggedInUser())
Logger.login("usernameAndPassword",{username:"ziyalogy", password:"food"});
console.log(Logger.getLoggedInUser())
Logger.login("usernameAndPassword",{username:"raymondcolor", password:"ray345"});
console.log(Logger.getLoggedInUser())
Logger.login("usernameAndPassword",{ username: "b.rojas", password: "7890x" });
console.log(Logger.getLoggedInUser())


function scheme(scheme: any, arg1: string, arg2: { username: string; password: string; }) {
    throw new Error('Function not implemented.');
}
// console.log(database);