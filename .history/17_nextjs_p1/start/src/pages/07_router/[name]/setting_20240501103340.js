export default function Setting({ hello }) {
  return <h1>[name]/setting.js</h1>;
}

export async function getServerSideProps({ query }) {
  return {
    props: { query },
  };
}
