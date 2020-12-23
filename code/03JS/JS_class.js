class theFn {
    constructor(name, speed) {
        this.name = name
        this.speed = speed

        this.add = () => {
            this.speed += 25
            console.log(`add: ${this.speed}`);
        }

        this.sub = () => {
            this.speed -= 25
            console.log(`sub: ${this.speed}`);
        }
    }

    //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes
}

let theP = new theFn('a', 100)
theP.add()
theP.sub()

console.log( theP );
