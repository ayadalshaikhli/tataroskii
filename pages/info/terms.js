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
        content="
          
          Tataroski is a brand that is dedicated to the creation of unique and
          high-quality products. We are committed to providing our customers with
          the best products and services. 

          "
      />
      <meta property="og:title" content="Teams And Conditions" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.tataroski.com" />
      <meta
        property="og:image"
        content="https://www.buildnextshop.com/share.png"
      />
      <meta
        property="og:description"
        content="Our Terms and Conditions" 
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
