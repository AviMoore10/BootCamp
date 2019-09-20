const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []},
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [{id: 1, text: "Idiot has no idea"}, {id: 2, text: "Fool!"}, {id: 3, text: "I agree!"}]
    },
    {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []}
  ]

  for (let index in posts) {
    if (posts[index]["id"] == 2){
      for (let index2 in posts[index].comments) {
        if (posts[index].comments[index2]["id"] == 3) {
          x = posts[index].comments.splice(index2, 1)
        }
      }
    }
  }

  console.log(posts)
