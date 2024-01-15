describe("login page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    
    it("Should open the main page", () => {
      cy.contains('Books list');
   })

    it("Should successfully login", () => {
      cy.login("bropet@mail.ru", "123");
      cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
   })

    it("Should not login with empty login", () => {
      cy.login(" ", "123");
      cy.get('#mail').then($el => $el[0].checkValidity()).should('be.false');
   })
   
    it("Should not login with empty password", () => {
      cy.login("bropet@mail.ru", " ");
      cy.get('#pass').then($el => $el[0].checkValidity()).should('be.false');
      
   })

    it("Should Add book", () => {
      cy.login("bropet@mail.ru", "123");
      cy.addBook("Парфюмер. История одного убийцы", "Психологическая проза", "Патрик Зюскинд");
      cy.contains("Add to favorite").should("be.visible");
    });

    it("Should Add book to Favorites", () => {
      cy.login("bropet@mail.ru", "123");
      cy.addBook("Граф Монте-Кристо", "Исторические приключения", "Александр Дюма");
      cy.contains("Add to favorite").click();
      cy.contains("Favorites").click();
      cy.contains("Граф Монте-Кристо").should("be.visible");
    });

    it("Should Delete book from Favorites", () => {
        cy.login("bropet@mail.ru", "123");
        cy.addBook("Граф Монте-Кристо", "Исторические приключения", "Александр Дюма");
        cy.contains("Add to favorite").click();
        cy.contains("Favorites").click();
        cy.contains("Delete from favorite").click();
        cy.contains("Please add some book to favorit on home page!").should("be.visible");
      });

    it("Should Download book", () => {
      cy.login("bropet@mail.ru", "123");
      cy.addBook("Гарри Поттер и философский камень", "Первый роман в серии книг про юного волшебника Гарри Поттера", "Джоан Роулинг");
      cy.contains("Гарри Поттер и философский камень").click();
      cy.contains("Dowload book").should("be.visible");
    });
});
