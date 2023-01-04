const GildedRose = require("../app/gildedrose");
const Item = require("../app/item");

describe("GildedRose", () => {
    const item1 = new Item('Aged Brie', 5, 32); 
    const item2 = new Item('Backstage passes', 2, 15);
    const item3 = new Item('Sulfuras', 10, 80);
    const gildedRose = new GildedRose([item1, item2, item3]);

    it("Should have 3 items", () => {
        expect(gildedRose.count).toBe(3);
    }) 

    it("Should match the attributes", () => {
        expect(gildedRose.items[0].name).toBe("Aged Brie");
        expect(gildedRose.items[0].sellIn).toBe(5);
        expect(gildedRose.items[0].quality).toBe(32);

        expect(gildedRose.items[1].name).toBe("Backstage passes");
        expect(gildedRose.items[1].sellIn).toBe(2);
        expect(gildedRose.items[1].quality).toBe(15);

        expect(gildedRose.items[2].name).toBe("Sulfuras");
        expect(gildedRose.items[2].sellIn).toBe(10);
        expect(gildedRose.items[2].quality).toBe(80);
    })

    it("UpdateQuality for Aged Brie", () => {
        const agedItem = new Item('Aged Brie', 5, 32);
        const giledRoseForAgedBrie = new GildedRose([agedItem]);
        for(let i = 1; i <= 18; i++) {
            giledRoseForAgedBrie.updateQuality();
            expect(giledRoseForAgedBrie.items[0].quality).toBe(32 + i);
            expect(giledRoseForAgedBrie.items[0].sellIn).toBe(5 - i);
        }
        giledRoseForAgedBrie.updateQuality();
        //quality should not be greater than 50;
        expect(giledRoseForAgedBrie.items[0].quality).toBe(50);
    })

    it("UpdateQuality for Sulfuras", () => {
        const sulfurasItem = new Item('Sulfuras', 5, 80);
        const giledRoseForSulfuras = new GildedRose([sulfurasItem]);
        for(let i = 1; i <= 5; i++) {
            giledRoseForSulfuras.updateQuality();
            //quality & sellIn will never update
            expect(giledRoseForSulfuras.items[0].quality).toBe(80);
            expect(giledRoseForSulfuras.items[0].sellIn).toBe(5);
        }
    })

    it("UpdateQulaity for Backstage", () => {
        const backstageItem = new Item('Backstage passes', 12, 34);
        const giledRoseForBackstage = new GildedRose([backstageItem]);

        giledRoseForBackstage.updateQuality();
        //Incrase by 1
        expect(giledRoseForBackstage.items[0].quality).toBe(35);
        expect(giledRoseForBackstage.items[0].sellIn).toBe(11);
        giledRoseForBackstage.updateQuality();
        //Incrase by 1
        expect(giledRoseForBackstage.items[0].quality).toBe(36);
        expect(giledRoseForBackstage.items[0].sellIn).toBe(10);
        giledRoseForBackstage.updateQuality();
        //Incrase by 2
        expect(giledRoseForBackstage.items[0].quality).toBe(38);
        expect(giledRoseForBackstage.items[0].sellIn).toBe(9);
        giledRoseForBackstage.updateQuality();
        //Incrase by 2
        expect(giledRoseForBackstage.items[0].quality).toBe(40);
        expect(giledRoseForBackstage.items[0].sellIn).toBe(8);
        giledRoseForBackstage.updateQuality();
        //Incrase by 2
        expect(giledRoseForBackstage.items[0].quality).toBe(42);
        expect(giledRoseForBackstage.items[0].sellIn).toBe(7);
        giledRoseForBackstage.updateQuality();
        //Incrase by 2
        expect(giledRoseForBackstage.items[0].quality).toBe(44);
        expect(giledRoseForBackstage.items[0].sellIn).toBe(6);
        giledRoseForBackstage.updateQuality();
        //Incrase by 2
        expect(giledRoseForBackstage.items[0].quality).toBe(46);
        expect(giledRoseForBackstage.items[0].sellIn).toBe(5);
        giledRoseForBackstage.updateQuality();
        //Incrase by 3
        expect(giledRoseForBackstage.items[0].quality).toBe(49);
        expect(giledRoseForBackstage.items[0].sellIn).toBe(4);
        giledRoseForBackstage.updateQuality();
        //Incrase by 3, but set to 50
        expect(giledRoseForBackstage.items[0].quality).toBe(50);
        expect(giledRoseForBackstage.items[0].sellIn).toBe(3);
        giledRoseForBackstage.updateQuality();
        //Incrase by 3, but set to 50
        expect(giledRoseForBackstage.items[0].quality).toBe(50);
        expect(giledRoseForBackstage.items[0].sellIn).toBe(2);
        giledRoseForBackstage.updateQuality();
        //Incrase by 3, but set to 50
        expect(giledRoseForBackstage.items[0].quality).toBe(50);
        expect(giledRoseForBackstage.items[0].sellIn).toBe(1);
        giledRoseForBackstage.updateQuality();
        //Incrase by 3, but set to 50
        expect(giledRoseForBackstage.items[0].quality).toBe(50);
        expect(giledRoseForBackstage.items[0].sellIn).toBe(0);
        giledRoseForBackstage.updateQuality();
        //Incrase by 3, but set to 50
        expect(giledRoseForBackstage.items[0].quality).toBe(50);
        expect(giledRoseForBackstage.items[0].sellIn).toBe(-1);
        giledRoseForBackstage.updateQuality();
        //Drop to 0
        expect(giledRoseForBackstage.items[0].quality).toBe(0);
        expect(giledRoseForBackstage.items[0].sellIn).toBe(-2);
        
    })
})