import React from "react";
import { useRouter } from "next/router";
import CollectionPageContent from "../../components/collections/CollectionPageContent";
import { recursiveCatalog } from "../../lib/shopify";
import client from "../../lib/shopify";
import Head from "next/head";
const CollectionPage = ({ collection }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
    <Head>
    <title>{collection.title}</title>
      <meta name="description" content={collection.description} />
      <meta name="keywords" content={collection.title} />
      <meta name="author" content="Shopify" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="Content-Style-Type" content="text/css" />
      <meta httpEquiv="Content-Script-Type" content="text/javascript" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="generator" content="Shopify" />
      <meta name="resource-type" content="document" />
      <meta name="doc-class" content="completed" />
      <meta name="doc-rights" content="public" />
      <meta name="doc-type" content="web page" />
      <meta name="doc-state" content="dynamic" />
      <meta name="doc-section" content="collections" />
      <meta name="doc-subject" content={collection.title} />
      <meta name="doc-keyword" content={collection.title} />
      <meta name="doc-keyword" content={collection.description} />
      <meta name="doc-keyword" content="shopify" />
      

    </Head>
      <div>
        <CollectionPageContent collection={collection} />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const collection = await client.collection.fetchByHandle(slug);

  return {
    props: {
      collection: JSON.parse(JSON.stringify(collection)),
    },
  };
}

// export async function getServerSideProps(context) {
//   const products = await client.product.fetchAll();
//   const collections = await client.collection.fetchAllWithProducts();
//   return {
//     props: {
//       products: JSON.parse(JSON.stringify(products)),
//       collections: JSON.parse(JSON.stringify(collections)),
//     },
//   };
// }

export default CollectionPage;
