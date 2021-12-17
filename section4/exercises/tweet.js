/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor (author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  addLike() {
    this.numberOfLikes++;
  }
  addComment(newComment) {
    this.comments.push(newComment);
  }
}

var tweet1 = new Tweet("User1", "generic message", "7:43 PM", 30, ["nice", "haha"]);
var tweet2 = new Tweet("User2", "another generic message", "9:23 AM", 500, ["wow", "comment2"]);
var tweet3 = new Tweet("User3", "unique message", "6:19 PM", 4, ["true", "generic comment"]);


console.log(tweet1);
console.log(tweet2);
console.log(tweet3);

tweet1.addLike();
tweet1.addComment("NEW COMMENT");

console.log(tweet1);
