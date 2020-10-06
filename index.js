var kata1 = ["No"," rumah saya ",30, "A"];
var kata2 = ["Jalan pangeran Tirtayasa No ", 70];

function tugas27(x){
  for (var i = 0; i < x.length; i++) {
    process.stdout.write(String(x[i]));
  }
  console.log("");
}

tugas27(kata1);
tugas27(kata2);
