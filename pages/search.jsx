import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../key";
import response from "../response";

const Search = ({results}) => {
const router = useRouter()

  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SearchResults results={results}/>
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const DummyData = false;
  const startIndex = context.query.start || 0;

  const data = DummyData ? response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then((response) => response.json());

  return {
    props: {
      results: data
    }
  }
}
