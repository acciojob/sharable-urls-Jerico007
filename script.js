// your code here
let urlHolder = document.getElementById("url");

let form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = {};
  let elements = e.target.children;
  Array.from(elements).forEach((val) => {
    if (val.hasAttribute("name") && val.value != "") {
      data[val.name] = val.value.trim();
      val.value = "";
    }
  });
  if(Object.keys(data).length === 0)
  {
    urlHolder.innerText = "https://localhost:8080/";
    return ;
  }


 let str = "https://localhost:8080/";
  str += "?";

  for(const key in data)
  {
    str += `${key}=${data[key]}&`;
  }

  str = str.slice(0,str.length-1);

  urlHolder.innerText = str;
});
