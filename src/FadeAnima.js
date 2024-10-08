import React, { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import "./FadeAnime.css";

export default FadeAnimation = (props) => {
    const { children } = props;
  
    /**
     * スクロールイベントのオプション
     * 「ref」検知する要素
     * 「inView」要素が見えたかどうか(見えたらtrue)
     * 「rootMargin」要素の検知の「余白」を設定
     * 「triggerOnce」検知を一度だけ行うかどうか
     */
    const { ref, inView } = useInView({
      rootMargin: "-100px",
      triggerOnce: true,
    });
  
    return (
      /**
       * ★スクロールさせたい要素を囲む
       * refで指定すると対象の要素になる
       * inViewのtrueかfalseを受け取り、styled-componentに渡す
       */
      <SFadeElem inView={inView} ref={ref}>
        {children}
      </SFadeElem>
    );
  };
  
  /**
   * ★inView(trueかfalse)で受け取り、それに応じてcssを切り替える
   */
  const SFadeElem = styled.span<{boolean}>`
    display: inline-block;
    transition: opacity 0.5s cubic-bezier(0.47, 0, 0.745, 0.715);
    
    //opacityをtrueなら1、falseなら0とする
    opacity: ${(props) => (props.inView ? 1 : 0)};
  `;
  
/*
const FadeAnimation = ({ children }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        rootMargin: "-100px",
        triggerOnce: true,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <span className={`FadeElem ${inView ? 'inView' : ''}`} ref={ref}>
      {children}
    </span>
  );
};

export default FadeAnimation;
*/
