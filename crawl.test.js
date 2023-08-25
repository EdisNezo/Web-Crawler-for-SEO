const { test, expect } = require("@jest/globals");
const { normalizeURL } = require("./crawl.js");

const url_1 = "https://blog.boot.dev/path/";
const url_2 = "https://blog.boot.dev/path";
const url_3 = "http://blog.boot.dev/path/";
const url_4 = "http://blog.boot.dev/path";

const expected_url = "blog.boot.dev/path";

test(`used url: ${url_1}`, () => {
  expect(normalizeURL(url_1)).toBe(expected_url);
});
test(`used url: ${url_2}`, () => {
  expect(normalizeURL(url_2)).toBe(expected_url);
});
test(`used url: ${url_3}`, () => {
  expect(normalizeURL(url_3)).toBe(expected_url);
});
test(`used url: ${url_4}`, () => {
  expect(normalizeURL(url_4)).toBe(expected_url);
});
