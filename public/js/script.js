let elements = document.querySelector("#sidebuttonid");

if (elements) {
  elements.addEventListener("click", function () {
    let style = getComputedStyle(document.body);
    let asideValue = style.getPropertyValue("--sidebar");

    if (asideValue === "350px") {
      document.documentElement.style.setProperty("--sidebar", "0px");
    } else {
      document.documentElement.style.setProperty("--sidebar", "350px");
    }
  });
}

document.getElementById("mainDiv")?.addEventListener("mouseover", () => {
  let element = document.querySelectorAll("#mainDiv");

  element.forEach((divelement) => {
    divelement.addEventListener("mouseover", async () => {
      divelement.style.backgroundColor = "maroon";
      divelement.style.scale = "105%";
      divelement.style.transition = "linear 0.2s";

      let fonts = divelement.querySelector("#horizontalModule"); // Use querySelector here
      if (fonts) {
        fonts.style.color = "white";
      }
    });
  });
});

document.getElementById("mainDiv")?.addEventListener("mouseout", () => {
  let element = document.querySelectorAll("#mainDiv");
  element.forEach((divelement) => {
    divelement.addEventListener("mouseout", async () => {
      divelement.style.backgroundColor = "white";
      divelement.style.scale = "100%";

      let fonts = divelement.querySelector("#horizontalModule");
      if (fonts) {
        fonts.style.color = "black";
      }
    });
  });
});

function dynamicYear(acadYear) {
  let date = new Date();
  let currYear = date.getFullYear();
  let prevYear = currYear - 1;
  let nextYear = currYear + 1;

  let year = `<option selected>Select Acad Year</option>
                    <option value = ${prevYear}-${currYear}>${prevYear}-${currYear}</option>
                    <option value = ${currYear}-${nextYear}>${currYear}-${nextYear}</option>
                    <option value = ${nextYear}-${nextYear + 1}>${nextYear}-${
    nextYear + 1
  }</option>`;

  acadYear.innerHTML = year;
}

function alphabetsValidation(inputText) {
  let text_length = inputText.length;

  for (let i = 0; i < text_length; i++) {
    let asciiValue = inputText.charCodeAt(i);

    console.log("ascii  value ", asciiValue);
    if (
      (asciiValue >= 33 && asciiValue <= 64) ||
      (asciiValue >= 91 && asciiValue <= 96) ||
      (asciiValue >= 123 && asciiValue <= 126)
    ) {
      return false;
    }
  }

  return true;
}

function specialCharacterValidation(inputText) {
  let text_length = inputText.length;

  for (let i = 0; i < text_length; i++) {
    let asciiValue = inputText.charCodeAt(i);

    if (
      (asciiValue >= 33 && asciiValue <= 47) ||
      (asciiValue >= 58 && asciiValue <= 64) ||
      (asciiValue >= 91 && asciiValue <= 96) ||
      (asciiValue >= 123 && asciiValue <= 126)
    ) {
      return false;
    }
  }

  return true;
}

function fileError(filePath) {
  if (filePath != ".xlsx") {
    return false;
  }
  return true;
}

function NumberValidation(inputText) {
  for (let i = 0; i < inputText.length; i++) {
    let chars = inputText.charAt(i);
    if (chars >= 0 && chars <= 9) {
      console.log(chars);
    } else {
      return false;
    }
  }
  return true;
}

function cancelButtonRedirect(redirectPage) {
  window.location.href = `${redirectPage}`;
}

function dynamicFetchApi(url, method, obj) {
  return new Promise((resolve, reject) => {
    const requestDetails = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: obj ? JSON.stringify(obj) : undefined,
    };
    fetch(url, requestDetails)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error nin fetching response");
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function dynamicExcelUploadFetch(url, method, obj) {
  return new Promise((resolve, reject) => {
    const requestDetails = {
      method: method,
      body: obj ? obj : undefined,
    };

    fetch(url, requestDetails)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error in Response");
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function dynamicGetFetch(url, method) {
  return new Promise((resolve, reject) => {
    const requestDetails = {
      method: method,
      headers: {
        Accept: "application/json",
      },
    };

    fetch(url, requestDetails)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error in Response");
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
