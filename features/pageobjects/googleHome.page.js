import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GoogleHomePage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputSearchField() {
    return $("//input[@name='q']");
  }
  get inputSearchButton() {
    return $("//input[@name='btnK']");
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open("https://www.google.com/");
  }

  /**
   * searches for the given input
   */
  search(input) {
    this.inputSearchField.waitForDisplayed();
    this.inputSearchField.setValue(input);
    browser.keys(["Enter"]);
    // this.inputSearchButton.click();
  }
}

export default new GoogleHomePage();
