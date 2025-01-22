```javascript
// Solution 1: Using $setOnInsert
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{"$inc":{"count":1},"$setOnInsert":{"count":0}});
// Solution 2: Check if the field exist before performing the increment operation
// Add a check to verify if the field exists using the find method before applying the update
let doc = db.collection('myCollection').findOne({"_id":ObjectId("someId")});
if (doc && doc.count){  // check if doc exist and has count field
  db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{count:1}});
} else{
  db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$set:{count:1}});
}
```