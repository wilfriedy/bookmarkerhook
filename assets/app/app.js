// import { hello } from "./utils.js";
// let btn = document.querySelector("button");

// console.log("hello");
// hello();
document
  .getElementById("bookmarkButton")
  .addEventListener("click", function () {
    // Query for the active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];

      // Create a new bookmark for the active tab
      chrome.bookmarks.create({
        parentId: "1", // this is the id of the "Other bookmarks" folder
        title: activeTab.title,
        url: activeTab.url,
      });

      console.log(activeTab);
    });
  });
