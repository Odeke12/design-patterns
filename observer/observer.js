"use strict";
exports.__esModule = true;
var Publisher = /** @class */ (function () {
    function Publisher() {
        this.subscribers = [];
    }
    Publisher.prototype.addSubscriber = function (subscriber) {
        var _this = this;
        var subscriberExists = false;
        //Check if subscriber exists in the array 
        //Add them to the array if the do not exist
        this.subscribers.forEach(function (sub) {
            if (sub.name != subscriber.name) {
                _this.subscribers.push(subscriber);
                subscriberExists = true;
            }
        });
        return subscriberExists;
    };
    Publisher.prototype.removeSubscriber = function (subscriber) {
        var _this = this;
        this.subscribers.forEach(function (sub, index) {
            if (subscriber.name == sub.name) {
                delete _this.subscribers[index];
            }
        });
    };
    Publisher.prototype.showSubscibers = function () {
        this.subscribers.forEach(function (sub) {
            console.log(sub.name);
        });
    };
    Publisher.prototype.notifySubscribers = function () {
        var _this = this;
        this.subscribers.forEach(function (sub) {
            sub.receiveNews(_this.news);
        });
    };
    Publisher.prototype.publish = function (news) {
        this.news = news;
        this.notifySubscribers();
    };
    return Publisher;
}());
var EliteSubscriber = /** @class */ (function () {
    function EliteSubscriber(name) {
        this.name = name;
    }
    EliteSubscriber.prototype.receiveNews = function (news) {
        var result = {
            subscriber: this.name,
            news: news
        };
        console.log(result);
    };
    return EliteSubscriber;
}());
var NVnews = /** @class */ (function () {
    function NVnews(headline, body, author) {
        this.headline = headline;
        this.body = body;
        this.author = author;
    }
    return NVnews;
}());
//Observable
var NewVision = new Publisher();
//Observers
var subscribers = [];
subscribers[0] = new EliteSubscriber("Odeke");
subscribers[1] = new EliteSubscriber("Timothy");
for (var _i = 0, subscribers_1 = subscribers; _i < subscribers_1.length; _i++) {
    var subscriber = subscribers_1[_i];
    NewVision.addSubscriber(subscriber);
}
var news = new NVnews("Sports", "Best sports man", "Odeke");
// NewVision.publish(news)
var Odeke = new EliteSubscriber("Odeke Trevor");
NewVision.addSubscriber(Odeke);
NewVision.publish(news);
NewVision.showSubscibers();
Odeke.receiveNews(news);
// const publish = new Publisher()
// const Sports: News = {headline: "Sports", body : "Best sports around", author : "Odeke"
// const Odeke: Subscriber = {receiveNews(Sports){ return Sports.headline }, name: "Odeke"}
// publish.addSubscriber(Odeke)
// publish.showSubscibers()
// console.log(Odeke.receiveNews(Sports))
