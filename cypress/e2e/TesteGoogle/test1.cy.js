describe('Suita 1', ()=> {

    //Testul 1, functie it cu 2 parametri
    it('test 1', () => {
        cy.visit('https://google.com');
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type('vlog de it').type('{enter}');
    })
})