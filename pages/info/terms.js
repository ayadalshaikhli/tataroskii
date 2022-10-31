import Head from "next/head";
import React from "react";
import Terms from "../../components/Terms";

function infoterms() {
  return (
    <>
    <Head>
      <title>Tataroski</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        httpEquiv="Content-Type"
        content="text/html; charset=ISO-8859-1"
      />
      <meta
        name="description"
        content="STORY WHO WEARS WOW 3W is a newly established direct-to-consumer
        fashion accessories brand, which means undefined fashion. We hope to
        create the unique one for everyone. We love every passion and interest
        on Earth because it is a reference to the UNIQUENESS of everything."
      />
      <meta property="og:title" content="Tataroski" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.buildnextshop.com" />
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
    <div>
      <Terms />
    </div>
    </>
    
  );
}

export default infoterms;
