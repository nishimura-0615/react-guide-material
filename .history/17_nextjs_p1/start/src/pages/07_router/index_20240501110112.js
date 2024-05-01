import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link
        href={{ pathname: '/07_router', query: { key: 'value' } }}
        as='/dummy-url'
      >
        <a>/07_router</a>
      </Link>
      <a href='/07_router'>/07_router</a>
    </>
  );
}
