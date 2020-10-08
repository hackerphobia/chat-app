/* Xử lý logic bằng sử dụng các method trong view và obj trong components*/

const _init_index = () => {
        // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDQNpqrObm5sBZw3Dknis9d-yK--Wk7juM",
        authDomain: "chat-app-45c60.firebaseapp.com",
        databaseURL: "https://chat-app-45c60.firebaseio.com",
        projectId: "chat-app-45c60",
        storageBucket: "chat-app-45c60.appspot.com",
        messagingSenderId: "400495193210",
        appId: "1:400495193210:web:b049d4398169df41161fc3"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        console.log(firebase.app().name);
    
    view.setActiveScreen('register');
}

$(_init_index);