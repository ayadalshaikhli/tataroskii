import Head from "next/head";
import React from "react";
import About from "../../components/About";

function infoAbout() {
  return (
    <>
    <Head>
      <title>About Us</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        httpEquiv="Content-Type"
        content="text/html; charset=ISO-8859-1"
      />
      <meta
        name="description"
        content="STORY WHO WEARS Tataroski is a newly established direct-to-consumer
        fashion accessories brand, which means undefined fashion. "
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
        content="STORY WHO WEARS WOW 3W is a newly established direct-to-consumer
        fashion accessories brand, which means undefined fashion. We hope to
        create the unique one for everyone. We love every passion and interest
        on Earth because it is a reference to the UNIQUENESS of everything."
      />
      <meta
        name="keywords"
        />
      <meta name="author" content="Tataroski" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <div className="">
        <About />
      </div>
    </>
  );
}

export default infoAbout;
