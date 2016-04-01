// Profile Images Collections
ProfileImages = new FS.collection("ProfileImages",{
	stores: [new FS.Store.GridFS("ProfileImages")]
});

UserImages = new Mongo.Collections("UserImages");