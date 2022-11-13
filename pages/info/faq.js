import Head from "next/head";
import React from "react";
import Faq from "../../components/Faq";

function infofaq() {
  return (
    <>
     <Head>
      <title>FAQ</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        httpEquiv="Content-Type"
        content="text/html; charset=ISO-8859-1"
      />
      <meta
        name="description"
        content="Frequently Asked Questions"
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
        content="Frequently Asked Questions"
      />
      <meta
        name="keywords"
        />
      <meta name="author" content="Tataroski" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <Faq />
    </div>
    </>
  );
}

export default infofaq;
