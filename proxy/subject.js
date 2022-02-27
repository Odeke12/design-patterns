var RealSubject = /** @class */ (function () {
    function RealSubject() {
    }
    RealSubject.prototype.request = function () {
        console.log('Real Subject: Handling Request'); //core business logic
    };
    return RealSubject;
}());
var ProxySubject = /** @class */ (function () {
    function ProxySubject(realSubject) {
        this.realSubject = realSubject;
    }
    ProxySubject.prototype.checkAccess = function () {
        console.log("Checking if the client has access to the heavyweight object");
        return true;
    };
    ProxySubject.prototype.logAccess = function () {
        console.log("Proxy is taking logs of clients accessing the heavy weight object");
    };
    ProxySubject.prototype.request = function () {
        if (this.checkAccess) {
            this.realSubject.request();
            this.logAccess();
        }
    };
    return ProxySubject;
}());
function clientRequest(subject) {
    subject.request();
}
var realSubject = new RealSubject();
clientRequest(realSubject);
var proxy = new ProxySubject(realSubject);
clientRequest(proxy);
