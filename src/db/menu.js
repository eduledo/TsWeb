import {init} from "./crud";

const def = init('menu');

const getAll = (callback) => {
    def.collectionPromise
        .orderBy("order", "asc")
        .onSnapshot((snapshot) => {
            if (snapshot && snapshot.docs) {
                callback(snapshot.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }

                }));
            }
        });
};


export default {
    getAll
}