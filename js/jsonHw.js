//----------------- Q1 ---------------------
let Books = [
  {
    Book_ID: "1",
    Book_Name: "The Secret",
    Book_Price: "5.99$",
    Book_Author: "Max Monroe",
  },
  {
    Book_ID: "2",
    Book_Name: "The Locked Door",
    Book_Price: "3.99$",
    Book_Author: "Freida McFadden",
  },
  {
    Book_ID: "3",
    Book_Name: "Praise ",
    Book_Price: "4.99$",
    Book_Author: "Sara Cate",
  },
];
let jBooks = JSON.stringify(Books);
console.log(jBooks);

let Items = JSON.parse(jBooks);
for (let index of Books) {
  console.log(index);
}

for (let index of Items) {
  console.log(index);
}

for (let i of Items) {
  console.log(
    "Book ID: " +
      i.Book_ID +
      "\nBook Name: " +
      i.Book_Name +
      "\nBook Price: " +
      i.Book_Price +
      "\nBook Author: " +
      i.Book_Author +
      "\n--------------------------\n"
  );
}

//----------------- Q2 ---------------------
let myCat = {
  Name: "Marlo",
  Age: "2 Years",
  Color: "White",
  Is_Sterile: true,
};

let strCat = JSON.stringify(myCat);
console.log(strCat);

let yourCat = JSON.parse(strCat);
console.log(
  "Name: " +
    yourCat.Name +
    "\nAge: " +
    yourCat.Age +
    "\nColor: " +
    yourCat.Color +
    "\nIs Sterile: " +
    yourCat.Is_Sterile
);
