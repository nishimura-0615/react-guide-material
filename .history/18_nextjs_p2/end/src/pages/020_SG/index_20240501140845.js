// POINT getStaticPropsでSGを実装
// SGとは静的にhtmlを生成すること
export default function IndexPage({ message }) {
  return <h3>SG:{message}</h3>;
}

export async function getStaticProps() {
  // console.log('getStaticProps');

  return {
    props: { message: 'From Static Props' },
  };
}
