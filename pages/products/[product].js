import ProductPageContent from "../../components/ProductPageContent";
import {
  getAllProducts,
  getProduct,
  recursiveCatalog,
  getAllCollections,
} from "../../lib/shopify";
import { motion } from "framer-motion";
import Head from "next/head";
export default function ProductPage({ product }) {
  // const realId = Buffer.from(product.id, 'base64').toString('utf8').split("/").pop()
  // console.log(realId)

  return (
    <>
    <Head>
     <title>{product.title}</title>
      <meta name="description" content={product.description} />
      <meta name="keywords" content={product.title} />
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
      <meta name="doc-section" content="products" />
      <meta name="doc-subject" content={product.title} />
      <meta name="doc-keyword" content={product.title} />
      <meta name="doc-keyword" content={product.description} />
      <meta name="doc-keyword" content="shopify" /> 
      </Head>
    <motion.div
      exit={{ opacity: 0 }}
      className="h-full w-full relative   colornav"
    >
      <ProductPageContent product={product} />
    </motion.div>
    </>
  );
}

export async function getStaticPaths() {
  const products = await recursiveCatalog();

  const paths = products.map((item) => {
    const product = String(item.node.handle);

    return {
      params: { product },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);

  return {
    props: {
      product,
    },
  };
}
