import Header from '../../components/header';
import { Children } from 'react';
import Layout2 from '../../components/layout/layout2';

export default function Layout2({ Children }) {
  return (
    <>
      <Header position='bottom' />
      <main className='layout2'>{Children}</main>
    </>
  );
}

//
Page.getLayout = (page) => {
  return <Layout2>{page}</Layout2>;
};
