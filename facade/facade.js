var MovieLight = /** @class */ (function () {
    function MovieLight() {
    }
    MovieLight.prototype.dimLights = function () {
        console.log('Dimmed lights');
    };
    MovieLight.prototype.turnOn = function () {
        console.log('Turn on lights');
    };
    return MovieLight;
}());
var Tv = /** @class */ (function () {
    function Tv() {
    }
    Tv.prototype.stopTv = function () {
        console.log('TV stoppped');
    };
    Tv.prototype.turnOn = function () {
        console.log('TV ON');
    };
    Tv.prototype.turnOff = function () {
        console.log('TV OFF');
    };
    return Tv;
}());
var MovieAmplifier = /** @class */ (function () {
    function MovieAmplifier() {
    }
    MovieAmplifier.prototype.turnOn = function () {
        console.log('Movie amplifier ON');
    };
    MovieAmplifier.prototype.turnOff = function () {
        console.log('Movie Amplifier OFF');
    };
    MovieAmplifier.prototype.setVolume = function (volume) {
        throw new Error("Method not implemented.");
    };
    return MovieAmplifier;
}());
var MovieTheatreFacade = /** @class */ (function () {
    function MovieTheatreFacade(movieLight, tv, movieamplifier) {
        this.movieLight = movieLight;
        this.movieamplifier = movieamplifier;
        this.tv = tv;
    }
    MovieTheatreFacade.prototype.watchMovie = function () {
        this.movieLight.dimLights();
        this.tv.turnOn();
        this.movieamplifier.turnOn();
    };
    return MovieTheatreFacade;
}());
var tv = new Tv();
var amplifier = new MovieAmplifier();
var movieLight = new MovieLight();
var cinema = new MovieTheatreFacade(movieLight, tv, amplifier);
cinema.watchMovie();
