class TabLink {
  constructor(tabElement) {
    this.tabElement = tabElement;
    this.tabData = this.tabElement.dataset.tab;
    if (this.tabData === "all") {
      this.cards = document.querySelectorAll(".profile");
    } else {
      this.cards = document.querySelectorAll(`.profile[data-tab='${this.tabData}']`);
    }

    this.cards = Array.from(this.cards).map(function(tabcard) {
      return new TabCard(tabcard);
    });

    this.tabElement.addEventListener("click", this.selectTab.bind(this));
  }

  selectTab() {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(function(activetab) {
      activetab.classList.remove("active-tab");
    });

    const cards = document.querySelectorAll(".profile");

    cards.forEach(function(cardhide) {
      cardhide.style.display = "none";
    });

    this.tabElement.classList.add("active-tab");

    this.cards.forEach(card => card.selectCard());

    // non arrow
    /* this.cards.forEach(function(card){
     card.selectCard(card);
    }); */
  }
}

class TabCard {
  constructor(cardElement) {
    this.cardElement = cardElement;
  }
  selectCard() {
    this.cardElement.style.display = "flex";
  }
}

let tabs = document.querySelectorAll(".tab");
tabs.forEach(function(tablink) {
  return new TabLink(tablink);
});
