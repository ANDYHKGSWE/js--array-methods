

//------------------ data att jobba med - tweets -------------------  //

const tweets = [
    { text: 'Elon Musk is ..', id: 523423 },
    { text: 'World Cup Quatar is ..', id: 823423 },
    { text: 'Bye bye Cov-id..', id: 2039842 },
    { text: 'Meatballs, oh meatballs', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Array.prototype.find()
  // 1. Hitta kommentaren med id 823423
  const tweetFound1 = tweets.find(tweet => tweet.id === 823423);
  //console.log(`Kommentar för id: ${tweetFound1.id} är: `, tweetFound1.text);
  //console.log(tweetFound1.text);
  console.log(tweetFound1);



  // Array.prototype.findIndex() och Array.prototype.splice()
  // 2. Hitta kommentaren med id 2039842 och ta sedan bord den kommentaren
 let tweetFound2 = tweets.findIndex(tweet => tweet.id === 2039842);
 tweetFound2 = tweets.splice(tweetFound2, 1);
 console.log(tweets);



  // Array.prototype.map() och Array.prototype.join()
  // 3. Generera HTML för en ul-lista är varje li innehåller värdet i 'text'. Lägg till ul-listan på index.html
  let tweetText = tweets.map(tweet => `<li>${tweet.text}</li>`).join("");
  document.querySelector('#tweets').innerHTML = tweetText;

  // let tweetText = tweets.map(tweet => `<li>${tweet.text}</li>`).join("");
  // let ul = document.querySelector('#tweets');
  // let li = document.createElement('li');
  // li.innerHTML = tweetText;
  // ul.append(li);



  //------------------ny data att jobba med - authors -------------------  //

 const authors = [
    { first: 'Leo', last: 'Tolstoj', year: 1828, passed: 1910, age:  82},
    { first: 'Alexander', last: 'Pusjkin', year: 1799, passed: 1837, age: 38},
    { first: 'Fjodor', last: 'Dostojevski', year: 1821, passed: 1881, age: 60},
    { first: 'Anton', last: 'Tjechov', year: 1860, passed: 1904, age: 44},
    { first: 'Vladimir', last: 'Nabokov', year: 1899, passed: 1997, age: 98},
    { first: 'Maksim', last: 'Gorkij', year: 1868, passed: 1936, age: 68},
    { first: 'Nikolaj', last: 'Gogl', year: 1809, passed: 1852, age: 43},
    { first: 'Leonid', last: 'Andrejev', year: 1871, passed: 1919, age: 48},
    { first: 'Mirra', last: 'Lokhvitskaya', year: 1869, passed: 1905, age: 36},
    { first: 'Ivan', last: 'Krylov', year: 1769, passed: 1844, age: 75},
    { first: 'Michail', last: 'Lermontov', year: 1814, passed: 1841, age: 27},
    { first: 'Alexandr', last: 'Blok', year: 1880, passed: 1921, age: 41}
  ];

  // Array.prototype.findIndex() och Array.protype.splice() 
  // 4. Det finns en fake-författare i authors - som är död före den är född! Hitta elementet och ta bort det med Array.prototype.splice()!
  
  //let fakeAuthorIndex = authors.findIndex(fakeAuthor => fakeAuthor.year > fakeAuthor.passed);
  //fakeAuthorIndex = authors.splice(fakeAuthorIndex, 1);
  //console.log('Fake Author: ', fakeAuthorIndex);
  //Svaret: INGEN.???


  // Använd Array.prototype.map
  // 5. Skapa en array med varje författares för- och efternamn från arrayen authors
  let AuthorNames = authors.map(author => `${author.first} ${author.last}`);
  console.log(AuthorNames);
  
  
  // Array.prototype.filter()
  // 6. Filtrera arrayen authors utifrån författare som föddes på 1800-talet
  let AuthorsBorn1800 = authors.filter(author => author.year < 1900 && author.year > 1800);
  console.log(AuthorsBorn1800);


  // Array.protoype.sort()
  // 7. Sortera arrayen i stigande ordning utifrån födelseår - äldst till yngst
  let SortedbyBirth = authors.sort((a, b) => a.year - b.year);
  console.log(SortedbyBirth);


  // Array.protoype.sort()
  // 8. Sortera arrayen utifrån hur många år varje författare har levt - från flest år till minst år
  let AuthorAge = authors.sort((a, b) => {
    const lastPerson = a.passed - a.year;
    const nextPerson = b.passed - b.year;

    if (lastPerson > nextPerson) {
      return -1;
    } else {
      return 1;
    }
  });

  console.log('Author Age: ', AuthorAge);
  
  
  
  // Array.protype.reduce()
  // 9. Beräkna hur totala antalet år som ALLA författare har levt //
  let totalAge = authors.reduce((accumulator, currentValue) => accumulator + currentValue.passed - currentValue.year, 0);
  console.log('Total Age: ', totalAge);

  //------------------ny data att jobba med - players -------------------  //

 const players = [
    { name: 'Modrić, Luka', year: 1985 },
    { name: 'Christian, Eriksen', year: 1992 },
    { name: 'Griezmann, Antoine', year: 1991 },
    { name: 'Achraf, Hakimi', year: 1998 },
    { name: 'Martínez, Lautaro', year: 1997 }
  ];


  // Array.prototype.some() 
  // 10. Finns det någon spelare som är äldre än 35 år?
  let currentDate = new Date();
  let getCurrentYear = currentDate.getFullYear();
  const olderThen35 = players.some(player => getCurrentYear - player.year > 35);
  console.log(olderThen35);

  // Array.prototype.every() 
  // 11. Är alla spelare äldre än 20 år?
  const isOver20 = players.every(player => getCurrentYear - player.year > 20);
  console.log(isOver20);
  // Array.prototype.map() och Array.prototype.split()
  // 12. Gör om så att 'name' skrivs "förnamn efernamn" istället för nuvarande "efternamn, förnamn"
  players.map(player => {
    let name = player.name;
    name = name.split(/[,] /)
    player.name = `${name[1]}, ${name[0]}`;
    console.log(players);
  });

  //------------------och en sista -------------------  //

   // Bonus! Kan komma att behövas på inlämningsuppgiftens VG-del
    
   // Array.prototype.reduce() och Array.prototype.includes()
   // 13. M h a recuce() skapa en ny array som innehåller representerade kategorier i products. Acculumulatorn kan även börja från en tom array!
   
   const products = ['t-shirt', 'trousers', 'polos', 'shoes', 'jewellery', 'trousers','shoes', 'trousers',  'jewellery',  'trousers', 'polos', 't-shirt', 't-shirt'];

