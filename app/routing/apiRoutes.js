var friends = require("../data/friends");


module.exports = function(app) {

app.get("/api/friends", function(req, res) {

   res.json(friends);
});

app.post("/api/friends", function(req, res) {

    var newFriend = req.body

    var bestScore = 9999999999
    var bestMatch = friends[0]

    for (var x=0; x<friends.length; x++){

      var totalDiff = 0;

      for (var y=0; y<friends[x].scores.length; y++){
        var diff =  Math.abs(friends[x].scores[y] - newFriend.scores[y])
        totalDiff+=diff
      }

      if (totalDiff < bestScore){
        bestScore = totalDiff
        bestMatch = friends[x]
      }

    }

    friends.push(newFriend)

    res.json(bestMatch);
});

}
