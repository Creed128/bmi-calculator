describe('BMI Calculator Tests', () => {
  it('calculates BMI correctly', () => {
    cy.visit('/'); // Besucht die Hauptseite
    cy.get('#weight').type('70'); // Typisiert "70" ins Gewichtsfeld
    cy.get('#height').type('175'); // Typisiert "175" ins Größenfeld
    cy.get('#calculate').click(); // Klickt den "Berechne" Button

    // Wartet auf das Laden des Ergebnisses und überprüft, ob das Ergebnis wie erwartet ist.
    // Nutzt .invoke('text') um den Text des Elements zu extrahieren und trimmt es, um Leerzeichen zu entfernen.
    cy.get('#result', { timeout: 10000 }).invoke('text').then((text) => {
      expect(text.trim()).to.contain('Dein BMI: 23');
    });
  });
});
