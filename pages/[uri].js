import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import { getPostByUri } from '../lib/test-data';
import {client} from '../lib/apollo';
import {gql} from '@apollo/client';

export default function SlugPage({ post, navigation }) {
  const { previousPost, nextPost } = navigation;

  return (
    <div id="div-articles">
      <Head>
        <title>HexQuery | {post.title}</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Navbar />
      <main className="main single-post">
        <div className="siteHeader">
          <h1 className="title">{post.title}</h1>
        </div>
        <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
        <div className="navigation-buttons">
          {previousPost && (
            <a href={previousPost.uri} className="button previous">
              Previous
            </a>
          )}
          {nextPost && (
            <a href={nextPost.uri} className="button next">
              Next
            </a>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const GET_POST_BY_URI = gql`
    query GetPostByURI($id: ID!) {
      post(id: $id, idType: URI) {
        title
        content
        uri
      }
      posts {
        nodes {
          title
          uri
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_POST_BY_URI,
    variables: {
      id: params.uri,
    },
  });

  const allPosts = response?.data?.posts?.nodes || [];
  const currentIndex = allPosts.findIndex((p) => p.uri === response.data.post.uri);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const post = response?.data?.post;
  return {
    props: {
      post,
      navigation: {
        previousPost,
        nextPost,
      },
    },
  };
}

export async function getStaticPaths() {
  const GET_ALL_POSTS = gql`
    query GetAllPosts {
      posts {
        nodes {
          uri
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_ALL_POSTS,
  });

  const allPosts = response?.data?.posts?.nodes || [];

  const paths = allPosts.map((post) => ({
    params: { uri: post.uri.replace(/\//g, "") },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}