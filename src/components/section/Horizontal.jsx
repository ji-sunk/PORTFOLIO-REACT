import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Horizontal = () => {
  const horizontalRef = useRef(null);
  const sectionsRef = useRef([]);

  // 가로 모드
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    const sections = sectionsRef.current;

    let scrollTween;

    scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: horizontal,
        start: 'top top',
        end: () => '+=' + (horizontal.offsetWidth - window.innerWidth),
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  //section4
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set('#section4', {
      backgroundColor: '#E0E3E7',
      color: '#000',
    });

    gsap.to('#section4', {
      scrollTrigger: {
        trigger: '#section4',
        start: 'top 60%',
        toggleClass: { targets: '#section4', className: 'scroll-active' },
        onEnter: function () {
          gsap.to('#section4', {
            backgroundColor: '#000',
            color: '#fff',
          });
          gsap.to('#section4 .header span', {
            color: '#fff',
          });
          gsap.to('#section4 .text', {
            color: '#fff',
          });
          gsap.to(['#nav'], {
            backgroundColor: '#fff',
          });
          gsap.to(['#nav span'], {
            backgroundColor: '#000',
          });
        },
        onLeaveBack: function () {
          gsap.to('#section4', {
            backgroundColor: '#E0E3E7',
            color: '#000',
          });
          gsap.to('#section4 .header span', {
            color: '#000',
          });
          gsap.to('#section4 .text', {
            color: '#000',
          });
          gsap.to(['#nav'], {
            backgroundColor: '#000',
          });
          gsap.to(['#nav span'], {
            backgroundColor: '#fff',
          });
        },
      },
    });

    // timeline
    const section4TL = gsap.timeline();

    section4TL.fromTo(
      '#section4 .text ul li.split',
      { autoAlpha: 0, y: 20 },
      { duration: 0.2, autoAlpha: 1, y: 0, stagger: 0.2 },
    );

    ScrollTrigger.create({
      trigger: '#section4',
      start: 'top 10%',
      animation: section4TL,
      markers: false,
    });
  }, []);

  //section5
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set('#section5', {
      backgroundColor: '#000',
      color: '#fff',
    });
    gsap.set('#section5 .title span', {
      color: '#fff',
    });

    gsap.to('#section5, #section5 .title span', {
      scrollTrigger: {
        trigger: '#section5',
        start: '60% top',
        end: 'bottom bottom',
        scrub: true,
        onEnter: function () {
          gsap.to('#section5', {
            backgroundColor: '#E0E3E7',
            color: '#000',
          });
          gsap.to('#section5 .title span', {
            color: '#000',
          });
          gsap.to(['#nav'], {
            backgroundColor: '#000',
          });
          gsap.to(['#nav span'], {
            backgroundColor: '#fff',
          });
        },
        onLeaveBack: function () {
          gsap.to('#section5', {
            backgroundColor: '#000',
            color: '#fff',
          });
          gsap.to('#section5 .title span', {
            color: '#fff',
          });
          gsap.to(['#nav'], {
            backgroundColor: '#fff',
          });
          gsap.to(['#nav span'], {
            backgroundColor: '#000',
          });
        },
      },
    });
  }, []);

  return (
    <div id="horizontal" ref={horizontalRef}>
      <section ref={el => (sectionsRef.current[0] = el)} id="section4">
        <div className="header">
          <span>I MADE IT</span>
        </div>
        <div className="text">
          <ul>
            <li className="split">about my</li>
            <li className="split">WEB STANDARD</li>
            <li className="split">project</li>
          </ul>
        </div>
      </section>
      <section ref={el => (sectionsRef.current[1] = el)} id="section5">
        <div className="title">
          <span className="t1">WEB STANDARD</span>
          <span className="t2">
            PROJECT <em>01</em>
          </span>
        </div>
        <div className="img"></div>
        <div className="explain">
          <div className="aa">
            <div className="line1">
              <a
                href="https://github.com/seolhee313/web2023/blob/main/site/site1/index.html"
                target="_blank"
                rel="noreferrer"
              >
                CODE VIEW
              </a>
            </div>
            <a
              href="https://github.com/seolhee313/web2023/blob/main/site/site1/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <div className="arrow1"></div>
            </a>
          </div>
          <div className="ab">
            <h3>Explain</h3>
            <a
              href="https://seolhee313.github.io/web2023/site/site1/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <div className="arrow"></div>
            </a>
            <div className="line">
              <a
                href="https://seolhee313.github.io/web2023/site/site1/index.html"
                target="_blank"
                rel="noreferrer"
              >
                SITE VIEW
              </a>
            </div>
          </div>
          <div className="text">
            <p>
              제가 좋아하는 커피를 주제로 웹 표준 사이트를 제작하였습니다.
              카페와 커피에 관한 설명이 주된 사이트입니다. 사이트의 기본이 되는
              슬라이드 유형, 배너 유형, 이미지텍스트 유형, 카드 유형, 배너 유형,
              텍스트 유형으로 구성하였습니다. swiper를 이용하여 이미지
              슬라이드를 구현했으며 미디어 쿼리를 활용하여 반응형 작업까지
              완료하였습니다.
            </p>
          </div>
        </div>
      </section>
      <section ref={el => (sectionsRef.current[2] = el)} id="section6">
        <div className="title">
          <span className="t1">Domino’s PIZZA</span>
          <span className="t2">
            PROJECT <em>02</em>
          </span>
        </div>
        <div className="img"></div>
        <div className="explain">
          <div className="aa">
            <div className="line1">
              <a
                href="https://github.com/seolhee313/web2023/blob/main/site/site2/index.html"
                target="_blank"
                rel="noreferrer"
              >
                CODE VIEW
              </a>
            </div>
            <a
              href="https://github.com/seolhee313/web2023/blob/main/site/site2/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <div className="arrow1"></div>
            </a>
          </div>
          <div className="ab">
            <h3>Explain</h3>
            <a
              href="https://seolhee313.github.io/web2023/site/site2/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <div className="arrow"></div>
            </a>
            <div className="line">
              <a
                href="https://seolhee313.github.io/web2023/site/site2/index.html"
                target="_blank"
                rel="noreferrer"
              >
                SITE VIEW
              </a>
            </div>
          </div>
          <div className="text">
            <p>
              실제 도미노피자 사이트를 반응형으로 작업한 기업형 사이트 입니다.
              SWIPER 이미지 슬라이드, 탭 메뉴 등 제이쿼리와 스크립트를 이용하여
              구현하였으며 이러한 구현을 바탕으로 리액트를 사용하여 동일한
              기능을 가진 웹사이트도 만들었 습니다.
            </p>
            <div className="line1">
              <a
                href="https://github.com/seolhee313/domino-react01"
                target="_blank"
                rel="noreferrer"
              >
                REACT CODE VIEW
              </a>
            </div>
            <a
              href="https://github.com/seolhee313/domino-react01"
              target="_blank"
              rel="noreferrer"
            >
              <div className="arrow1"></div>
            </a>
            <a
              href="https://sitedomino-react01.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="arrow"></div>
            </a>
            <div className="line">
              <a
                href="https://sitedomino-react01.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                REACT SITE VIEW
              </a>
            </div>
          </div>
        </div>
      </section>
      <section ref={el => (sectionsRef.current[3] = el)} id="section7">
        <div className="title">
          <span className="t1">REACT SITE</span>
          <span className="t2">
            PROJECT <em>03</em>
          </span>
        </div>
        <div className="img"></div>
        <div className="explain">
          <div className="aa">
            <div className="line1">
              <a
                href="https://github.com/seolhee313/site2023-react01"
                target="_blank"
                rel="noreferrer"
              >
                CODE VIEW
              </a>
            </div>
            <a
              href="https://github.com/seolhee313/site2023-react01"
              target="_blank"
              rel="noreferrer"
            >
              <div className="arrow1"></div>
            </a>
          </div>
          <div className="ab">
            <h3>Explain</h3>
            <a
              href="https://sitecheon-react01.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="arrow"></div>
            </a>
            <div className="line">
              <a
                href="https://sitecheon-react01.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                SITE VIEW
              </a>
            </div>
          </div>
          <div className="text">
            <p>
              Node.js를 통해 CMD에서 터미널을 설정하고 NPM으로 JS라이브러리를
              설치한 후, 컴퍼넌트를 생성하여 싱글페 이지를 출력시켜 만든 React를
              사이트입니다. API를 이 용한 유튜브 페이지에서 동영상 목록과 검색이
              가능하며 영화페이지에선 영화 목록과 검색이 가능합니다. REACT
              HOOK함수도 사용했습니다.
            </p>
          </div>
        </div>
      </section>
      <section ref={el => (sectionsRef.current[4] = el)} id="section8">
        <div className="title">
          <span className="t1">PHP SITE</span>
          <span className="t2">
            PROJECT <em>04</em>
          </span>
        </div>
        <div className="img"></div>
        <div className="explain">
          <div className="aa">
            <div className="line1">
              <a
                href="https://github.com/seolhee313/php2023/tree/main"
                target="_blank"
                rel="noreferrer"
              >
                CODE VIEW
              </a>
            </div>
            <a
              href="https://github.com/seolhee313/php2023/tree/main"
              target="_blank"
              rel="noreferrer"
            >
              <div className="arrow1"></div>
            </a>
          </div>
          <div className="ab">
            <h3>Explain</h3>
            <a
              href="http://gp2617.dothome.co.kr/php/main/main.php"
              target="_blank"
              rel="noreferrer"
            >
              <div className="arrow"></div>
            </a>
            <div className="line">
              <a
                href="http://gp2617.dothome.co.kr/php/main/main.php"
                target="_blank"
                rel="noreferrer"
              >
                SITE VIEW
              </a>
            </div>
          </div>
          <div className="text">
            <p>
              PHP를 사용해 웹 페이지를 제작하였습니다. 댓글 기능, 게시판,
              로그인, 회원가입 기능을 넣었습니다. MyAdmin 에 접속한 후 MySQL을
              이용해 데이터베이스에 접속하여 데이터들을 수정, 삭제, 복사 등을 할
              수 있습니다.
            </p>
          </div>
        </div>
      </section>
      <section ref={el => (sectionsRef.current[5] = el)} id="section9">
        <div className="title">
          <span className="t1">TEAM PROJECT</span>
          <span className="t2">
            PROJECT <em>05</em>
          </span>
        </div>
        <div className="img"></div>
        <div className="explain">
          <div className="aa">
            <div className="line1">
              <a
                href="https://github.com/seolhee313/TEAMPROJECT/tree/main/php2"
                target="_blank"
                rel="noreferrer"
              >
                CODE VIEW
              </a>
            </div>
            <a
              href="https://github.com/seolhee313/TEAMPROJECT/tree/main/php2"
              target="_blank"
              rel="noreferrer"
            >
              <div className="arrow1"></div>
            </a>
          </div>
          <div className="ab">
            <h3>Explain</h3>
            <a
              href="http://gp2617.dothome.co.kr/php2/main/main.php"
              target="_blank"
              rel="noreferrer"
            >
              <div className="arrow"></div>
            </a>
            <div className="line">
              <a
                href="http://gp2617.dothome.co.kr/php2/main/main.php"
                target="_blank"
                rel="noreferrer"
              >
                SITE VIEW
              </a>
            </div>
          </div>
          <div className="text">
            <p>
              “하루 한 지문” 이라는 독해력 향상을 위한 문학/비문학 문제 풀이
              사이트입니다. PHP를 기반으로한 협력 프로젝트로 개발되었으며,
              사용자들에게 독해력과 문학적 이해력을 향상시킬 수 있도록
              도와줍니다. 또한, 사용자들은 게시판을 통해 문제의 해설을 공유하고,
              간단한 게임 등의 기능을 통해 학습을 더욱 흥미롭게 만들 수
              있습니다.
            </p>
          </div>
        </div>
      </section>
      <section ref={el => (sectionsRef.current[6] = el)} id="section10">
        <div className="title">
          <span className="t1">VUE SITE</span>
          <span className="t2">
            PROJECT <em>06</em>
          </span>
        </div>
        <div className="img"></div>
        <div className="explain">
          <div className="aa">
            <div className="line1">
              <a
                href="https://github.com/seolhee313/site2023-vue01"
                target="_blank"
                rel="noreferrer"
              >
                CODE VIEW
              </a>
            </div>
            <a
              href="https://github.com/seolhee313/site2023-vue01"
              target="_blank"
              rel="noreferrer"
            >
              <div className="arrow1"></div>
            </a>
          </div>
          <div className="ab">
            <h3>Explain</h3>
            <a
              href="https://sitecheon-vue01.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="arrow"></div>
            </a>
            <div className="line">
              <a
                href="https://sitecheon-vue01.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                SITE VIEW
              </a>
            </div>
          </div>
          <div className="text">
            <p>
              REACT로 작성한 사이트레이아웃을 그대로 VUE문법을 사용하여 사이트를
              만들었습니다. youtube, movie와 같은 restful API를 postman사이트를
              이용하려 데이터를 분류하고 그 중에서 원하는 데이터만 가져와서
              사용했습니다. prettier, eslint를 이용해 문법에 오류가 없도록
              작업하며 코드정리도 했습니다.
            </p>
          </div>
        </div>
      </section>
      <section ref={el => (sectionsRef.current[7] = el)} id="section10_1">
        <div className="title">
          <span className="t1">YOUTUBE API</span>
          <span className="t2">
            PROJECT <em>07</em>
          </span>
        </div>
        <div className="img"></div>
        <div className="explain">
          <div className="aa">
            <div className="line1">
              <a
                href="https://github.com/seolhee313/site2023-youtube"
                target="_blank"
                rel="noreferrer"
              >
                CODE VIEW
              </a>
            </div>
            <a
              href="https://github.com/seolhee313/site2023-youtube"
              target="_blank"
              rel="noreferrer"
            >
              <div className="arrow1"></div>
            </a>
          </div>
          <div className="ab">
            <h3>Explain</h3>
            <a
              href="https://sitecheon-youtube01.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="arrow"></div>
            </a>
            <div className="line">
              <a
                href="https://sitecheon-youtube01.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                SITE VIEW
              </a>
            </div>
          </div>
          <div className="text">
            <p>
              react로 youtube API를 활용해 제작한 유튜브 API 입니다. useState와
              useEffect, useParams를 사용하여 유튜브 API 데이터와 서치 기능을
              구현하였습니다. 아직 준비중입니다.
            </p>
          </div>
        </div>
      </section>
      <section ref={el => (sectionsRef.current[8] = el)} id="section10_2">
        <div className="title">
          <span className="t1">STUDY SITE</span>
          <span className="t2">
            PROJECT <em>08</em>
          </span>
        </div>
        <div className="img"></div>
        <div className="explain">
          <div className="aa">
            <div className="line1">
              <a
                href="https://github.com/seolhee313/web2023"
                target="_blank"
                rel="noreferrer"
              >
                CODE VIEW
              </a>
            </div>
            <a
              href="https://github.com/seolhee313/web2023"
              target="_blank"
              rel="noreferrer"
            >
              <div className="arrow1"></div>
            </a>
          </div>
          <div className="ab">
            <h3>Explain</h3>
            <a
              href="https://seolhee313.github.io/web2023/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="arrow"></div>
            </a>
            <div className="line">
              <a
                href="https://seolhee313.github.io/web2023/"
                target="_blank"
                rel="noreferrer"
              >
                SITE VIEW
              </a>
            </div>
          </div>
          <div className="text">
            <p>
              학원에 다니며 수업 시간에 공부한 내용을 바로바로 작성하며 기록해
              놓은 사이트입니다. HTML, JAVASCRIPT, PHP, MySQL, REACT,
              WEBPACK등을 정리해 놓고, 필요할 때마다 찾아보고 있습니다.
            </p>
          </div>
        </div>
      </section>
      <section ref={el => (sectionsRef.current[9] = el)} id="section10_3">
        <div className="title">
          <span className="t1">NEXT.JS SITE</span>
          <span className="t2">
            PROJECT <em>09</em>
          </span>
        </div>
        <div className="img"></div>
        <div className="explain">
          <div className="aa">
            <div className="line1">
              <a
                href="https://github.com/seolhee313/site2023-next01"
                target="_blank"
                rel="noreferrer"
              >
                CODE VIEW
              </a>
            </div>
            <a
              href="https://github.com/seolhee313/site2023-next01"
              target="_blank"
              rel="noreferrer"
            >
              <div className="arrow1"></div>
            </a>
          </div>
          <div className="ab">
            <h3>Explain</h3>
            <a
              href="https://sitecheon-next01.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="arrow"></div>
            </a>
            <div className="line">
              <a
                href="https://sitecheon-next01.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                SITE VIEW
              </a>
            </div>
          </div>
          <div className="text">
            <p>아직 준비중입니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Horizontal;
