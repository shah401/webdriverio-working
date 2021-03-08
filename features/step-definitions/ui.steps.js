import { Given, When, Then } from "cucumber";

import GoogleHomePage from "../pageobjects/googleHome.page";

let itemSearchedFor;

Given(/^I'm on the google homepage$/, () => {
  GoogleHomePage.open();
});

When(/^I search for "(.*)"$/, (searchItem) => {
  itemSearchedFor = searchItem;
  GoogleHomePage.search(searchItem);
});

Then(/^I should be navigated to the search result page$/, () => {
  expect(browser).toHaveTitleContaining(itemSearchedFor);
});
