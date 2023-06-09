import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

export default function Document() {
    return (
        <Html>
            <Head>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap"
                      rel="stylesheet"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}