window.addEventListener("load", () => {
  const form = document.querySelector("#task-form");
  const input = document.querySelector("#task-input");
  const list_el = document.querySelector("#tasks");
  const realTask = document.querySelectorAll(".task");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("pls fill out the task");
      return;
    }
    list_el.insertAdjacentHTML(
      "afterbegin",
      `<div class="task">
            <div class="content">
              <input type="text" class="text" value="${task}" readonly />
            </div>
            <div class="actions">
              <button class="edit">Edit</button>
              <button class="delete">Delete</button>
            </div>
          </div>`
    );

    const delete_btn = document.querySelector(".delete");
    delete_btn.addEventListener("click", () => {
      delete_btn.parentElement.parentElement.remove();
    });
    const edit_btn = document.querySelector(".edit");
    const content = document.querySelector(".text");
    edit_btn.addEventListener("click", () => {
      if (edit_btn.innerText.toLowerCase() == "edit") {
        content.removeAttribute("readonly");
        content.focus();
        edit_btn.innerText = "save";
        console.log("alahhhhhhhhh");
      } else {
        content.setAttribute("readonly", true);
        edit_btn.innerText = "edit";
        content.readonly = "false";
      }
    });
    var newData = input.value;
    if (localStorage.getItem("data") == null) {
      localStorage.setItem("data", "[]");
    }
    var old_data = JSON.parse(localStorage.getItem("data"));
    old_data.push(newData);
    localStorage.setItem("data", JSON.stringify(old_data));
    input.value = "";
  });
});

