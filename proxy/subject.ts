interface Subject{
    request ():void;
}

class RealSubject implements Subject{
    request(): void {
        console.log('Real Subject: Handling Request') //core business logic
    }
}

class ProxySubject implements Subject{
    private realSubject: RealSubject
    constructor(realSubject: RealSubject){
        this.realSubject = realSubject
    }

    private checkAccess():boolean{
        console.log("Checking if the client has access to the heavyweight object")
        return true
    }
    private logAccess():void{
        console.log("Proxy is taking logs of clients accessing the heavy weight object")
    }
    request(): void {
        if(this.checkAccess){
            this.realSubject.request();
            this.logAccess();

        }

    }
}
function clientRequest(subject: Subject){
    subject.request()
}

const realSubject = new RealSubject();
clientRequest(realSubject)

const proxy = new ProxySubject(realSubject)
clientRequest(proxy)
