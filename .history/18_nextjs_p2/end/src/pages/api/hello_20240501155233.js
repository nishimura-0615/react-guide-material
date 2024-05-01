// リクエスト・レスポンスを送るための引数を定義
export default function handler(req, res) {
  res.status(200).json({ name: 'タロウ' });
}
// http://localhost:4020/api/hello
