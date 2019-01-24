service cloud.firestore {
  match /databases/{database}/documents {
  	match /menu/{menuId} {
      allow read: if isSignedIn();
      allow write: if isSignedIn();
    }
    match /{document=**} {
      allow read: if isSignedIn();
      allow write: if isSignedIn();
    }

    match /users/{userId} {
    	allow read: if true;
      allow write: if true;
    }

    // Functions //

    function isSignedIn() {
    	return request.auth != null;
    }

    function isOwner(userId) {
    	return request.auth.uid == userId;
    }

    function existingData() {
    	return resource.data;
    }

    function incomingData() {
    	return request.resource.data;
    }

    function getUserData() {
    	return get(/databases/{database}/documents/users/$(request.auth.uid)).data;
    }
  }
}