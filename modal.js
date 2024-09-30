function success() {
  let appendModalText = `
    <h3 class="text-lg font-bold">Congratulated</h3>
    <p class="py-4">Your donation has been completed correctly</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>`;
  return appendModalText;
}

function error() {
  let appendModalText = `
    <h3 class="text-lg font-bold">Please fill the input fields correctly.</h3>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>`;

  return appendModalText;
}
