export default function Setting({ query }) {
  return <h1>{query}</h1>;
}

export async function getServerSideProps({ query }) {
  return {
    props: { query },
  };
}
