// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJmhYSN1lzUe3fVWxkQLzhwI1NXIMBcOE",
  authDomain: "zyrex-panel.firebaseapp.com",
  databaseURL: "https://zyrex-panel-default-rtdb.firebaseio.com",
  projectId: "zyrex-panel",
  storageBucket: "zyrex-panel.firebasestorage.app",
  messagingSenderId: "748589300500",
  appId: "1:748589300500:web:46337e595fa41d9b25a001",
  measurementId: "G-BS038EWN18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };