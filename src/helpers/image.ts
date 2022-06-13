export interface IImage {

}
export class Image {
    public url: URL;
    constructor(url: string) {
        this.url = new URL(url);
    }
}