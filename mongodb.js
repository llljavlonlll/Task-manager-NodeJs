// CRUD (create, read, update, delete)

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
    connectionURL,
    { useNewUrlParser: true },
    (error, client) => {
        if (error) {
            return console.log("Unable to connect to database");
        }

        const db = client.db(databaseName);

        // db.collection("users").findOne(
        //     { _id: new ObjectID("5c96551974926433042fae02") },
        //     (error, user) => {
        //         if (error) {
        //             return console.log("Unable to fetch");
        //         }

        //         console.log(user);
        //     }
        // );

        // db.collection("users")
        //     .find({ age: 27 })
        //     .toArray((error, users) => {
        //         console.log(users);
        //     });

        // db.collection("tasks").findOne(
        //     {
        //         _id: new ObjectID("5c965290812dad337467dd6f")
        //     },
        //     (error, task) => {
        //         if (error) {
        //             return console.log("Unable to fetch");
        //         }

        //         console.log(task);
        //     }
        // );

        // db.collection("tasks")
        //     .find({ completed: false })
        //     .toArray((error, tasks) => {
        //         if (error) {
        //             return console.log("Unable to fetch");
        //         }

        //         console.log(tasks);
        //     });

        // const updatePromise = db
        //     .collection("users")
        //     .updateOne(
        //         {
        //             _id: new ObjectID("5c964f522038a34f0c108419")
        //         },
        //         {
        //             $inc: {
        //                 age: 1
        //             }
        //         }
        //     )
        //     .then(result => {
        //         console.log(result);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });

        // db.collection("tasks")
        //     .updateMany(
        //         {
        //             completed: false
        //         },
        //         {
        //             $set: {
        //                 completed: true
        //             }
        //         }
        //     )
        //     .then(result => {
        //         console.log(result);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });

        // db.collection("users")
        //     .deleteMany({
        //         age: 28
        //     })
        //     .then(result => {
        //         console.log(result);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });

        db.collection("tasks")
            .deleteOne({
                description: "Visit doctor on 20 March at 8:45"
            })
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });
    }
);
