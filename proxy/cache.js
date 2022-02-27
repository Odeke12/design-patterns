var realServer = [
    {
        request: "Jackson Ssenengo",
        resultSet: [
            'Technical Coach at Refactory',
            'Software Developer',
            'Software Engineer',
            'Software Design Enthusiast',
            'OOP software Designer',
        ]
    },
    {
        request: "Odeke Trevor",
        resultSet: [
            'Student at refactory',
            'Backend Developer',
            'Christian',
            'Loves guitar',
            'Enjoys video games',
        ]
    },
];
var proxyServer = [];
//Heavy weight class
var Google = /** @class */ (function () {
    function Google() {
    }
    Google.prototype.search = function (request) {
        for (var _i = 0, realServer_1 = realServer; _i < realServer_1.length; _i++) {
            var result = realServer_1[_i];
            if (result.request == request) {
                for (var _a = 0, proxyServer_1 = proxyServer; _a < proxyServer_1.length; _a++) {
                    var item = proxyServer_1[_a];
                    if (item.request == request) {
                        continue;
                    }
                    proxyServer.push(result);
                    break;
                }
                return result;
            }
            return {
                request: request,
                resultSet: ["Item not found"]
            };
        }
    };
    return Google;
}());
//Proxy class
var ProxyGoogle = /** @class */ (function () {
    function ProxyGoogle(google) {
        this.google = google;
    }
    ProxyGoogle.prototype.search = function (request) {
        for (var _i = 0, proxyServer_2 = proxyServer; _i < proxyServer_2.length; _i++) {
            var item = proxyServer_2[_i];
            if (item.request == request) {
                return item;
            }
        }
        return this.google.search(request);
    };
    return ProxyGoogle;
}());
var Chrome = /** @class */ (function () {
    function Chrome(searchEngine) {
        this.searchEngine = searchEngine;
    }
    Chrome.prototype.request = function (requestString) {
        return this.searchEngine.search(requestString);
    };
    return Chrome;
}());
var google = new Google();
var proxy1 = new ProxyGoogle(google);
var chrome = new Chrome(proxy1);
console.log(chrome.request("Odeke Trevor"));
