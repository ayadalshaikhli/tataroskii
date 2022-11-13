import Head from "next/head";
import React from "react";
import Refund from "../../components/Refund";

function inforefund() {
  return (
    <>
     <Head>
      <title>Refund</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        httpEquiv="Content-Type"
        content="text/html; charset=ISO-8859-1"
      />
      <meta
        name="description"
        content="We offer 
          a 30-day money-back guarantee on all orders. If you are not satisfied with your purchase, you can return it for a full refund. "
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
        content="We offer 
        a 30-day money-back guarantee on all orders. If you are not satisfied with your purchase, you can return it for a full refund. "
    />
      <meta
        name="keywords"
        />
      <meta name="author" content="Tataroski" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <Refund />
    </div>
    </>
  );
}

export default inforefund;
