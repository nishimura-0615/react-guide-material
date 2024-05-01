import Header from '../../components/header';

export default function Layout2({ Children }) {
  return (
    <>
      <Header position='bottom' />
      <main className='layout2'>{Children}</main>
    </>
  );
}
