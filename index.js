let Click_btn = () => {
  let http = new XMLHttpRequest();

  http.onload = function () {
    if (this.readyState === 3 && this.status === 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    } else {
      document.getElementById("demo").innerHTML = "oops!....";
    }
  };

  http.open("GET", "./dinamic_values/object/object.html");
  http.send();
};
