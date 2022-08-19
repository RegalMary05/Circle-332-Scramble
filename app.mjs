function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!

  //declaration of element
  "use strict";
  //declaration of element
  const body = document.querySelector("body");
  const main = document.querySelector("#text1");
  const sub = document.querySelector("#text2");
  const sign = document.querySelector("#hide");
  const redacted = document.querySelector("p");
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const mode = document.querySelector(".mode");
  const redactBtn = document.querySelector(".redact-btn1");
  const resetBtn = document.querySelector(".reset-btn");
  const closeRedactBtn = document.querySelector(".close-modal");
  const copyBtn = document.querySelector(".copy");
  const shareBtn = document.querySelector(".share");
  const closeModal = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };
  // delaring the redact function
  function redactr(str1, str2, sine) {
    for (let i = 0; i < str2.length; i++) {
      for (let j = 0; j < str1.length; j++) {
        if (str1[j] == str2[i]) {
          let count = str1[j].length;
          str1[j] = "";
          for (let v = 0; v < count; v++) {
            str1[j] += sine == "" ? "*" : sine;
          }
        }
      }
    }
    return str1.join(" ");
  }

  //declaring of modal opening
  const openModal = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    // converting the input strings to array
    const major = main.value.split(" ");
    const minor = sub.value.split(" ");
    const symbol = sign.value;
    // calling redact function
    redacted.innerHTML = redactr(major, minor, symbol);
  };
  // radact btn calling the modal
  redactBtn.addEventListener("click", openModal);
  closeRedactBtn.addEventListener("click", closeModal);

  //reset button
  resetBtn.addEventListener("click", () => {
    main.value = "";
    sub.value = "";
    sign.value = "";
  });

  //copy button
  copyBtn.addEventListener("click", () => {
    redacted.select();
    redacted.setSelectionRange(0, 99999);
    copyBtn.innerHTML = "copied";

    navigator.clipboard.writeText(redacted.innerHTML).then(
      function() {
        alert("copied to clipboard ");
      },
      function(err) {
        alert("could not copy text: ", err);
      }
    );

    setTimeout(() => {
      copyBtn.innerHTML = "copy";
    }, 2000);
  });
  //share button
  shareBtn.addEventListener("click", async (e) => {
    let info = {
      title: "",
      text: `${redacted.innerHTML}`,
    };
    try {
      await navigator.share(data);
    } catch (err) {
      console.log(err);
    }
  });

  //mode button
  mode.addEventListener("click", () => {
    if (body.classList.contains("light-container")) {
      body.classList.remove("light-container");
      body.classList.add("dark-container");
      mode.innerHTML = "Light mode";
    } else {
      body.classList.add("light-container");
      body.classList.remove("dark-container");
      mode.innerHTML = "Dark mode";
    }
  });
}
// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //