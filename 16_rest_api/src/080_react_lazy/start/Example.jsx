// POINT コンポーネントをダイナミックインポート
import { useState, lazy, Suspense, startTransition } from "react";

// lazyでインターネット越しにコンポーネントを取得している
const LazyComponentA = lazy(() => import('./components/ComponentA'))
const LazyComponentB = lazy(() => import('./components/ComponentB'))

const Example = () => {
  const [compA, setCompA] = useState(true);

  return (
    <>
      <button onClick={() => {
        startTransition(() => {
          setCompA((prev) => !prev)
        })
      }}>ComponentA</button>
      {/* fallbackでプロパティを設定してコンポーネントが読み込まれるまでの間にJSXのdivタグを出力する */}
      <Suspense fallback={<div>Loading!!!!!!!!</div>}>
        {compA ? <LazyComponentA /> : <LazyComponentB />}
      </Suspense>
    </>
  );
};

export default Example;
