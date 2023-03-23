import "../styles/style.css";
import "../styles/content.css"
import "../styles/about-university.css"
import "../styles/heads.css"
import "../styles/sport.css"
import "../styles/traditions.css"
import "../styles/comments.css"
import "../styles/contacts.css"
import "../styles/tables.css"
import "../styles/images.css"
import "../styles/general.css"
import "../styles/matriculation.css"
import "../styles/museum.css"
import React from "react";

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);
    return getLayout(<Component {...pageProps}/>);
}

export default MyApp