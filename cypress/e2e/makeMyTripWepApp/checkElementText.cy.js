
describe('test suite', () => {
    it('test case', () => {
        // const expectedLabels = [
        //     'Flights',
        //     'Hotels',
        //     'Homestays & Villas',
        //     'Holiday Packages',
        //     'Trains',
        //     'Buses',
        //     'Cabs',
        //     'Visas',
        //     'Forex Card & Currency',
        //     'Travel Insurance'
        // ];
        failOnStatusCode: false;
        cy.visit("https://www.makemytrip.com/");
        cy.get("[class='makeFlex font12 headerIconsGap'] > li > span > a > span:nth-child(2)")
            // .should('have.length', expectedLabels.length)
            // .each(($el, index) => {
            //     cy.wrap($el).invoke('text').then((text) => {
            //         expect(text.trim()).to.eq(expectedLabels[index]);
            //     });
            // });
    });
});