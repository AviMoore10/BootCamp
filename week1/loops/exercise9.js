const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]

  let x
  for (let index in posts) {
      if (index.id == 2) {
         x= posts.splice(index, 1)
      }
  }

  console.log(posts)
  console.log(x)