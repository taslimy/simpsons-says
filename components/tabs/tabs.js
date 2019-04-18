class TabLink {
  constructor(tabElement) {
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;

    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab;

    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:

    // <- Delete this comment block when you work on the if statement
    // Check to see if this.tabData is equal to 'all' NOTE: have to set it equal to the string all as per line 11. (clicked 'all' )
    // https://javascript.info/ifelse
    if (this.tabData === "all") {
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll(".profile");
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(
        `.profile[data-tab='${this.tabData}']`
      );
    }
    // Delete this comment block when you work on the if statement

    // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class.
    this.cards = Array.from(this.cards).map(function(tabcard) {
      return new TabCard(tabcard);
    });

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener("click", this.selectTab.bind(this));
  }

  selectTab() {
    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll(".tab");

    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(function(activetab) {
      activetab.classList.remove("active-tab");
    });

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll(".profile");

    // Iterate through the NodeList setting the display style each one to 'none' (style.display)
    cards.forEach(function(cardhide) {
      cardhide.style.display = "none";
    });

    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add("active-tab");

    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => card.selectCard());

    // non arrow
    /* this.cards.forEach(function(card){
     card.selectCard(card);
    }); */
  }
}

class TabCard {
  constructor(cardElement) {
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard() {
    // Update the style of this.cardElement to display = "flex" (style.display)
    // element.style; // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
    this.cardElement.style.display = "flex";
  }
}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll(".tab");
tabs.forEach(function(tablink) {
  return new TabLink(tablink);
});
