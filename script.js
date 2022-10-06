const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  if (height == "" || weight == "") {
    alert("Please fill all the fields");

    return;
  }

  // BMI = weight in KG / (height in m * height in m)

  height = height / 100;

  let BMI = weight / (height * height);
  BMI = BMI.toFixed(2);

  document.querySelector("#result").innerHTML = BMI;

  let status = "";

  if (BMI < 18.5) {
    status = "Kekurangan berat badan";
  }

  if (BMI >= 18.5 && BMI < 25) {
    status = "Sehat";
  }

  if (BMI >= 25 && BMI < 30) {
    status = "Kelebihan berat badan";
  }

  if (BMI >= 30) {
    status = "Kegemukan";
  }

  document.querySelector(".comment").innerHTML = `comment: Hasilnya <span id="comment">${status}</span>"`;
});
