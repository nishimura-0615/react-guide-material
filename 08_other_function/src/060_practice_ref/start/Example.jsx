// 練習問題
// useRef、useImperativeHandle、forwardRefを使って完成系の動画再生機能を作成してください。
// ※useImperativeHandleでplay(再生)、stop(停止)メソッドを定義すること。



// import { useState, useRef, forwardRef, useImperativeHandle } from "react";

// const Video = forwardRef(({ path }, ref) => {
//   return <input type="text" ref={(ref)}></input>

//   useImperativeHandle(ref, () => ({
//     setPlaying() {
//       inputRef.current.play();
//       console.log('フォーカス取得')
//     }
//   }));

//   return (
//     <video style={{ maxWidth: "100%" }}>
//       <source src={path}></source>
//     </video>
//   );
// });

// const Example = () => {
//   const [playing, setPlaying] = useState(false);

//   const ref = useRef();

//   return (
//     <div>

//       <Video ref={ref} path="./sample.mp4" />
//       <button
//         onClick={() => {
//           if(playing) {
//             videoRef.current.pause();
//           } else {
//             videoRef.current.play();
//           }
//           setPlaying((prev) => !prev);
//         }}>
//         {playing ? "Stop" : "Play"}
//       </button>
//     </div>
//   );
// };

// export default Example;

//回答のコード

import { useState, useRef, forwardRef, useImperativeHandle } from "react";

const Video = forwardRef(({ path }, ref) => {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    stop() {
      videoRef.current.pause();
    },
  }));

  return (
    <video style={{ maxWidth: "100%" }} ref={videoRef}>
      <source src={path}></source>
    </video>
  );
});

const Example = () => {
  const [playing, setPlaying] = useState(false);

  const ref = useRef();

  return (
    <div>
      <Video ref={ref} path="./sample.mp4" />
      <button
        onClick={() => {
          if (playing) {
            ref.current.stop();
          } else {
            ref.current.play();
          }
          setPlaying((prev) => !prev);
        }}
      >
        {playing ? "Stop" : "Play"}
      </button>
    </div>
  );
};

export default Example;
