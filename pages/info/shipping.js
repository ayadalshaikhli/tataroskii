import Head from "next/head";
import React from "react";
import Shipping from "../../components/Shipping";

function infoshipping() {
  return (
    <>
    <Head>
    <title>Shipping </title>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta
      httpEquiv="Content-Type"
      content="text/html; charset=ISO-8859-1"
    />
    <meta
      name="description"
      content="We are committed to providing our customers with the best products and services. 
      Shipping is free for all orders over $35"
    />
    <meta property="og:title" content="Tataroski" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.tataroski.com" />
    <meta
      property="og:image"
      content="https://www.buildnextshop.com/share.png"
    />
    <meta
      property="og:description"
      content="We are committed to providing our customers with the best products and services. 
      Shipping is free for all orders over $35"
    />
    <meta
      name="keywords"
      />
    <meta name="author" content="Tataroski" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <div>
      <Shipping />
    </div>
    </>
  );
}

export default infoshipping;
