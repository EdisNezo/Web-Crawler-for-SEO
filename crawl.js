function normalizeURL(url) {
  const urlObject = new URL(url);
  let fullPath = urlObject.hostname + urlObject.pathname;
  if (fullPath.length > 0 && fullPath.slice(-1) === "/") {
    fullPath = fullPath.slice(0, -1);
  }
  return fullPath;
}

module.exports = {
  normalizeURL,
};
