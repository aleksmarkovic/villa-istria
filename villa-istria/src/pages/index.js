import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import HomeMain from "../components/Home/HomeMain";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {
//   getFire,
//   collection,
//   getDocs,
//   query,
// } from "firebase/fire/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAWV53NbUNPUkQGo6ddg7ZQdgYqUH8eNbc",
//   authDomain: "villa-istria.firebaseapp.com",
//   projectId: "villa-istria",
//   storageBucket: "villa-istria.appspot.com",
//   messagingSenderId: "18339508284",
//   appId: "1:18339508284:web:ec1717dc694c57e3671339",
//   measurementId: "G-F5QZT899NR",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFire(app);
// const analytics = getAnalytics(app);

// async function getCities() {
//   const citiesCol = query(collection(db, "timetable"));
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   console.log(cityList[0].validFrom);
//   console.log(new Date(cityList[0].validFrom));

//   return cityList;
// }

const Index = (props) => {
  // getCities();
  return (
    <React.Fragment>
      <Header />
      <HomeMain />
      <Footer />

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WMDKJTD"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`,
        }}
      />
    </React.Fragment>
  );
};

export default Index;

export async function getStaticProps({}) {
  return {
    props: {},
  };
}
