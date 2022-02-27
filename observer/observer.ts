import { database } from './database.js';
interface News{
    headline: string,
    body: string,
    author: string
}

interface Subscriber{
    name:string
    receiveNews(news:News):void;
}

class Publisher{
    private news: News
    private subscribers: Subscriber[] = []
    
    addSubscriber(subscriber: Subscriber):Boolean{
        let subscriberExists = false
        //Check if subscriber exists in the array 
        //Add them to the array if the do not exist
        this.subscribers.forEach(sub => {
            if(sub.name != subscriber.name){
                this.subscribers.push(subscriber)
                subscriberExists = true
            }
        })
        return subscriberExists;
    }

    removeSubscriber(subscriber: Subscriber){
        this.subscribers.forEach((sub, index) => {
           if(subscriber.name == sub.name){
             delete this.subscribers[index]
           }
        })
    }

    showSubscibers(){
        this.subscribers.forEach(sub => {
            console.log(sub.name)
        })
    }

    notifySubscribers(){
        this.subscribers.forEach(sub => {
            sub.receiveNews(this.news)
        });
    }

    publish(news:News){
        this.news = news
        this.notifySubscribers()
    }
}

class EliteSubscriber implements Subscriber{
    public name:string;

    constructor(name: string) {
        this.name = name
    }

    receiveNews(news: News): void {
        let result = {
            subscriber: this.name,
            news:news
        }
        console.log(result)
    }
}

class NVnews implements News{

    headline: string;
    body: string;
    author: string;

    constructor(headline:string, body:string, author:string){
        this.headline = headline
        this.body = body
        this.author = author
    }
 }

 //Observable
let NewVision:Publisher = new Publisher()


//Observers
let subscribers = []
subscribers[0] = new EliteSubscriber("Odeke")
subscribers[1] = new EliteSubscriber("Timothy")

for(let subscriber of subscribers){
    NewVision.addSubscriber(subscriber)
}

let news:News = new NVnews("Sports","Best sports man","Odeke")
// NewVision.publish(news)

const Odeke: Subscriber = new EliteSubscriber("Odeke Trevor")
NewVision.addSubscriber(Odeke)
NewVision.publish(news)

NewVision.showSubscibers()

Odeke.receiveNews(news)
// const publish = new Publisher()
// const Sports: News = {headline: "Sports", body : "Best sports around", author : "Odeke"
// const Odeke: Subscriber = {receiveNews(Sports){ return Sports.headline }, name: "Odeke"}
// publish.addSubscriber(Odeke)
// publish.showSubscibers()
// console.log(Odeke.receiveNews(Sports))


