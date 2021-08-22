const data = ["522XXXXXXXX5", "Arun", "24", "email@gmail.com", "Coimbatore", "MyCompany", "99XXXXXX87"]
const ulist = document.querySelectorAll('li');
let span = document.querySelectorAll('span')
var a =0;

const image = document.createElement('img');
image.src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
document.body.appendChild(image);

for(var i of ulist){
  i.classList.add('listitem')
  span[a].innerHTML = data[a]
  a++;
}
