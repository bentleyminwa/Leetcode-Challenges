document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    console.log("The page is hidden");
  } else {
    // The page is visible
  }
});
