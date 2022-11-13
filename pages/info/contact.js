import Head from "next/head";
import React from "react";
import Contact from "../../components/Contact";
function infoContact() {
  return (
    <>
       <Head>
      <title>Contact Us</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        httpEquiv="Content-Type"
        content="text/html; charset=ISO-8859-1"
      />
      <meta
        name="description"
        content="Contact Us"
      />
      <meta property="og:title" content="Tataroski" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.Tataroski.com" />
      <meta
        property="og:image"
        content="https://www.buildnextshop.com/share.png"
      />
      <meta
        property="og:description"
        content="Contact Us"
      />
      <meta
        name="keywords"
        />
      <meta name="author" content="Tataroski" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <Contact />
    </>
  );
}

export default infoContact;
