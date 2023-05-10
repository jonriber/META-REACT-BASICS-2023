
//spread with objects
const desserts = [
    {
      title: 'Chocolate Cake',
      description: 'Chocolate cake is a cake flavored with melted chocolate',
      calories: 500,
    }
  ];
  
  //this one will REPLACE TITLE and ADD kCAL
  const newDesserts1 = desserts.map((dessert) => {
    return {
    ...dessert,
      title: dessert.title.toUpperCase(),
    
      kCal: dessert.calories / 1000,
    };
  });
  //this one will NOT replace title, but still adds kcal
  const newDesserts2 = desserts.map((dessert) => {
    return {
      title: dessert.title.toUpperCase(),
      ...dessert,
      kCal: dessert.calories / 1000,
    };
  });

  console.log("RESULTADO:",newDesserts1,newDesserts2);

//spread with arrays

//concat two arrays
const array1 = [1,2,3,4,5]
const array2 = [6,7,8,9]
const finalArray = [...array1,...array2]

console.log("final array concat:",finalArray);

//adding items in array
const toAdd = [1,2]
var normal = [-1,...toAdd,3,4,5]

console.log("normal:",normal);