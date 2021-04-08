import { Given, When, Then } from "cucumber";

import { get } from "../utils/apiUtils";

const baseURL = "https://jsonplaceholder.typicode.com";
let data;

Given(/^I have the api ready for a get request$/, () => { });

When(/^I hit the get "(.*)" endpoint$/, async (endpoint) => {
  const apiResponse = await get(`${baseURL}/${endpoint}`);
  data = apiResponse.data;
});

Then(/^I should be able to get a list of posts$/, () => {
  expect(data.length > 0).toBe(true);
  data.forEach((post) => {
    expect(post.title).toBeTruthy();
  });
  console.log("===> Response Data:", data);
});
