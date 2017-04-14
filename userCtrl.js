var users = require('./users')

module.exports = {

    // Get All Users. Write a function called readAll that will return all users from the users module.
    readAll: function(req, res, next){
        console.log("users info");
        res.status(200).json(users);
    },
    
    // Get User By Id. Write a function called findUserById that will take in a userId, use that to find the user 
    // with that id and return that user's information. If there is no user with that ID, return null.
    findUserById: function(req,res, next) {
        var showId = parseInt(req.params.id);
        res.status(200).json(users[showId]);
    },
    
    // Get All Admin Users. Write a function called getAdmins which will return an array of all 
    // users with a type of 'admin'. Return null if none are found.
    getAdmins: function(req,res, next) {
        res.status(200).json(users.find("type", "admin"))
    },
    
    // Get All Non Admin Users (regular users) Write a function called getNonAdmins which will return 
    // an array of all users who have a type of 'user'. Return null if none are found.
    getNonAdmins: function(req,res, next) {
        res.status(200).json(users.find("type", "user"))
        
    },
    
    // Get All users with a specified favorite. The function getUsersByFavorite will take in a favorite as a string, 
    // and use it to return all users with that favorite in their favorites array. If none are found, return null.
    getUsersByFavorite: function(req, res, next){
        res.status(200).json(req.session.favorites);
    },

    // Get all users with age under given age. Write a function, getUsersByAgeLimit, that will take in an age and 
    // return all users under the age provided. If none are found, it will return null.
    getUsersByAgeLimit: function (req, res, next){
        if (req.query.age) {
        var filteredAge = users.filter(function (user){
            return user.age === req.query.age;
        });
        res.status(200).json(filteredAge);
        } else {
            res.status(200).json(users)
        }
    },
    
    // Get User By last_name. Write a function called findUserByQuery. This function will take in two parameters: 
    // a query term and the value. If the query term is 'last_name', the function will use the value parameter to 
    // return the user (or users) with that last_name. Make sure that the search is case-insensitive. 
    // If the user is not found, return null.
    
    findUserByQuery: function (req, res, next){
        if (req.query.last_name) {
        var filteredLastName = users.filter(function (user){
            return user.last_name === req.query.last_name;
        });
        res.status(200).json(filteredLastName);
        } else {
            res.status(200).json(users)
        }
    },

    // Get User By Email. Adjust findUserByQuery to search for a user by email, if the query term equals 'email'. 
    // Again, it will search using the value parameter, return that found user, or if not found, return null.

    findUserByQuery: function (req, res, next){
        if (req.query.email) {
        var filteredEmail = users.filter(function (user){
            return user.email === req.query.email;
        });
        res.status(200).json(filteredEmail);
        } else {
            res.status(200).json(users)
        }
    },

    // Add new user. Write a function, createUser, that takes a user object as a parameter to the users module. 
    // Create a user using this object. Remember, the users module will generate an id itself, 
    // so you don't have to. If the user is not in the correct format, the users module will give you an error. 
    // If there is an error from the users module, return null. Otherwise, return the new user (with automatically generated id).

    createUser: function createUser(newUser){
      return users.add({
        first_name:newUser.first_name,
        last_name:newUser.last_name,
        email:newUser.email,
        gender:newUser.gender,
        language:newUser.language,
        age:newUser.age,
        city:newUser.city,
        state:newUser.state,
        type:newUser.type,
        favorites:[newUser.favorites]
      })
      return users.add({newUser})
    },

    // Update user by ID. Write a function called updateUser which will take in a userId and an object. 
    // The object will contain the properties that need to be changed, along with their new values. 
    // Find a user by the id, then update it, changing only those properties sent in the object. 
    // Return the updated user.

    // updateUser: function(req, res, next){
    //     
    // },

    // Delete a user by ID. -Your function, removeUser, should take in a userId, find a user by that id, then use the user module's 
    // remove functionality to delete the user. Return the deleted item.

    removeUser: function (req, res, next){
        var deletedUser = users.splice(req.params.id, 1)[0];
        res.status(200).json(deletedUser);
    }

};



