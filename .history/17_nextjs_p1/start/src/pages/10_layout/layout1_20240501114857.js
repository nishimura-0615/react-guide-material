import Header from '../../components/header';

export default function Layout({ children }) {
  return (
    <>
      <Header position='top' />
      <main className='layout1'>{children}</main>
    </>
  );
}
