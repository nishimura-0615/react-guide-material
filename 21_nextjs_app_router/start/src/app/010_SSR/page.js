import ClientComp from './components/ClientComp';
import { ENDPOINT } from '@/constants';
import ArticleList from '@/components/articleList';

// http://locakhost:4020/010/SSR/2
// http://locakhost:4020/010/SSR/5
export default async function SSR() {
  // 基本next.jsではキャッシュが貯まる仕様となっている
  const articles = await fetch(ENDPOINT, {
    next: { revalidate: 10 },
  }).then((res) => res.json());
  return (
    <>
      <div>SSR Page</div>
      <ClientComp />
      <ArticleList list={articles} basePath='/010_SSR' />
    </>
  );
}
