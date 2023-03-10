module.exports = class GildedRose {
    items = [];
    constructor(items) {
        this.items = items;
    }
    get items() {
        return this.items;
    }
    get count() {
        return this.items.length;
    }
    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes') {
                if (this.items[i].quality > 0) {
                    if (this.items[i].name != 'Sulfuras') {
                        this.items[i].quality = this.items[i].quality - 1;
                        if (this.items[i].sellIn < 0 && this.items[i].quality > 0) {
                            this.items[i].quality = this.items[i].quality - 1;
                        }
                    } 
                }
            } else {
                if (this.items[i].quality < 50) {
                    if (this.items[i].name == 'Backstage passes') {
                       if (this.items[i].sellIn < 6) {
                            this.items[i].quality = this.items[i].quality + 3;
                        } else if (this.items[i].sellIn < 11) {
                            this.items[i].quality = this.items[i].quality + 2;
                        } else {
                            this.items[i].quality = this.items[i].quality + 1
                        }
                        if (this.items[i].quality > 50) this.items[i].quality = 50;
                       
                    } else {
                        this.items[i].quality = this.items[i].quality + 1
                    }
                } 
                if(this.items[i].sellIn < 0 && this.items[i].name == 'Backstage passes') {
                    this.items[i].quality = 0;
                }
            }
            if (this.items[i].name != 'Sulfuras') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
        }

        return this.items;
    }
}