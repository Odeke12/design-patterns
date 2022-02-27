/*
    Caching requests
        - The Search Engine Analogy:  
            - SearchEngine: Should be subject Abstraction
                - Should have an abstract method search()

            - Google: Should be the real Search Engine
            - GooleProxy: Should be the proxy Search Engine
                - Should have a reference to the search engine

            - WebBrowser: Should be the client Abstraction
                - Should have a reference to the search engine
                - Should have an abstract method request()

            - Firefox: Should be one of the concrete clients

*/
interface Result{
    request: string;
    resultSet: Array<string>
}

let realServer: Array<Result> = [
    {
        request:"Jackson Ssenengo",
        resultSet:[
            'Technical Coach at Refactory',
            'Software Developer',
            'Software Engineer',
            'Software Design Enthusiast',
            'OOP software Designer',
        ]
    },
    {
        request:"Odeke Trevor",
        resultSet:[
            'Student at refactory',
            'Backend Developer',
            'Christian',
            'Loves guitar',
            'Enjoys video games',
        ]
    },
]

let proxyServer: Array<Result> = []

interface SearchEngine{
    search(request: string): Result;
}

//Heavy weight class
class Google implements SearchEngine{
    search(request: string): Result {
        for(const result of realServer){
            if(result.request == request){
                for(const item of proxyServer){
                    if(item.request == request){
                        continue
                    }
                    proxyServer.push(result)
                    break;
                }
            return result    
            }
            return {
                request: request,
                resultSet: ["Item not found"]
            }
            
        }
    }

}

//Proxy class
class ProxyGoogle implements SearchEngine{
    private google:SearchEngine
    constructor(google:SearchEngine){
        this.google = google
    }
    search(request: string): Result {
        for(const item of proxyServer){
            if(item.request == request){
                return item
            }
        }
        return this.google.search(request)
    }

}

interface WebBrowser{
    request(requestString: string):Result;
}

class Chrome implements WebBrowser{
    private searchEngine:SearchEngine
    constructor(searchEngine:SearchEngine){
        this.searchEngine = searchEngine
    }
    request(requestString: string): Result {
        return this.searchEngine.search(requestString)
    }

}

const google = new Google()
const proxy1 = new ProxyGoogle(google)
const chrome = new Chrome(proxy1)
console.log(chrome.request("Odeke Trevor"))
