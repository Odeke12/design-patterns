interface Lights{
dimLights();
turnOn();
}

interface Display{
turnOn()
turnOff()
stopTv();
}

interface Amplifier{
    turnOn();
    turnOff();
    setVolume(volume:string);
}

class MovieLight implements Lights{
    dimLights() {
        console.log('Dimmed lights')
    }
    turnOn() {
        console.log('Turn on lights')
    }

}

class Tv implements Display{
    stopTv() {
       console.log('TV stoppped')
    }
    turnOn() {
       console.log('TV ON')
    }
    turnOff() {
        console.log('TV OFF')
    }

}

class MovieAmplifier implements Amplifier{
    turnOn() {
       console.log('Movie amplifier ON')
    }
    turnOff() {
        console.log('Movie Amplifier OFF');
    }
    setVolume(volume:string) {
        throw new Error("Method not implemented.");
    }

}

class MovieTheatreFacade{
    private movieLight:MovieLight
    private tv:Tv
    private movieamplifier: MovieAmplifier

    constructor(movieLight:MovieLight,tv:Tv,movieamplifier: MovieAmplifier){
        this.movieLight = movieLight
        this.movieamplifier = movieamplifier
        this.tv = tv
    }

    watchMovie(){
        this.movieLight.dimLights()
        this.tv.turnOn()
        this.movieamplifier.turnOn()
    }
}

const tv = new Tv();
const amplifier = new MovieAmplifier()
const movieLight = new MovieLight()
const cinema = new MovieTheatreFacade(movieLight, tv, amplifier)
cinema.watchMovie()