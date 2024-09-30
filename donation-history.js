let account = parseFloat(document.getElementById("total-account").innerText);
let btnDonation = document.getElementById("btn-donation");
let btnHistory = document.getElementById("btn-history");
let mainDonation = document.getElementById("main-donation");
let mainHistory = document.getElementById("main-history");
let modal = document.getElementById("modal");

btnDonation.addEventListener("click", () => {
  mainDonation.classList.remove("hidden");
  mainHistory.classList.add("hidden");
  btnDonation.classList.add("bg-[#B4F461]");
  btnHistory.classList.remove("bg-[#B4F461]");
});
btnHistory.addEventListener("click", () => {
  mainHistory.classList.remove("hidden");
  mainDonation.classList.add("hidden");
  btnHistory.classList.add("bg-[#B4F461]");
  btnDonation.classList.remove("bg-[#B4F461]");
});

// cart 1
let btnDonation1 = document.getElementById("btn-donation1");

btnDonation1.addEventListener("click", function () {
  let inputDonation1 = parseFloat(
    document.getElementById("input-donation1").value
  );
  let noakhali = document.getElementById("noakhali");
  if (isNaN(inputDonation1) || inputDonation1 <= 0) {
    modal.innerHTML = error();
  } else {
    let modal = document.getElementById("modal");
    modal.innerHTML = success();
    let count1 = parseFloat(document.getElementById("count1").innerText);

    let totalCount = count1 + inputDonation1;
    document.getElementById("count1").innerText = totalCount;

    let totalAccount = account - totalCount;

    parseFloat(
      (document.getElementById("total-account").innerText = totalAccount)
    );

    let date = new Date();

    let append = `
       <dir class="p-8 border rounded-2xl">
        <h2 class="mb-4">${inputDonation1} Taka is ${noakhali}</h2>
        <p>${date}</p>
      </dir>
    `;
    mainHistory.innerHTML += append;
  }
  document.getElementById("input-donation1").value = "";
});

// cart 2
let btnDonation2 = document.getElementById("btn-donation2");

btnDonation2.addEventListener("click", function () {
  let count2 = document.getElementById("count2").innerText;
  let inputDonation2 = parseFloat(
    document.getElementById("input-donation2").value
  );
  let feni = document.getElementById("feni").innerText;

  if (isNaN(inputDonation2) || inputDonation2 <= 0) {
    modal.innerHTML = error();
  } else {
    modal.innerHTML = success();

    let totalCount = parseFloat(count2) + inputDonation2;
    document.getElementById("count2").innerText = totalCount;

    let totalAccount = account - totalCount;

    parseFloat(
      (document.getElementById("total-account").innerText = totalAccount)
    );

    let date = new Date();

    let append = `
       <dir class="p-8 border rounded-2xl">
        <h2 class="mb-4">${inputDonation2} Taka is ${feni}</h2>
        <p>${date}</p>
      </dir>
    `;
    mainHistory.innerHTML += append;
  }
  document.getElementById("input-donation2").value = "";
});

// cart 3
let btnDonation3 = document.getElementById("btn-donation3");

btnDonation3.addEventListener("click", function () {
  let inputDonation3 = parseFloat(
    document.getElementById("input-donation3").value
  );
  let quota = document.getElementById("quota").innerText;

  if (isNaN(inputDonation3) || inputDonation3 <= 0) {
    modal.innerHTML = error();
  } else {
    modal.innerHTML = success();

    let count3 = parseFloat(document.getElementById("count3").innerText);

    let totalCount = count3 + inputDonation3;
    document.getElementById("count3").innerText = totalCount;

    let totalAccount = account - totalCount;

    parseFloat(
      (document.getElementById("total-account").innerText = totalAccount)
    );

    let date = new Date();

    let append = `
       <dir class="p-8 border rounded-2xl">
        <h2 class="mb-4">${inputDonation3} Taka is ${quota}</h2>
        <p>${date}</p>
      </dir>
    `;
    mainHistory.innerHTML += append;
  }

  document.getElementById("input-donation3").value = "";
});
