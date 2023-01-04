module.exports = class Item {
    name = null;
    sellIn = null;
    quality = null;
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}
