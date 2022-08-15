function showOwnProps(obj) {
    let result = "";
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result += key + ": " + obj[key] + "\n";
      }
    }
    console.log(result);
  }
  
  
  const cat1 = {
    name: "Eva",
    age: 1,
    breed: "cornish rex"
  };

  showOwnProps(cat1);