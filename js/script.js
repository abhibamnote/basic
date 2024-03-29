function navBtnClicked() {
  document.getElementById("NavlinksHere").classList.toggle("make-display-non");
}

const left = document.querySelector(".split-left");
const right = document.querySelector(".split-right");
const container = document.querySelector(".container-split");

left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);
right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);

function hideInput(){
  document.getElementById('userOtherDegree').classList.add('hide-input')
}

function showInput(){
  document.getElementById('userOtherDegree').classList.remove('hide-input')
}

function showApplyForm(){
  document.getElementById('applyForm').classList.remove('apply-form-hide');
}