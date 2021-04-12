export class Recipe {

    public theName: string
    public theDescription: string
    public imagePath: string

    constructor(name: string, desc: string, imgPath: string) {
        this.theName = name
        this.theDescription = desc
        this.imagePath = imgPath

    }
}