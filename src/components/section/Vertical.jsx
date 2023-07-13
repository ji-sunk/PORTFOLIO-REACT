import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Vertical = () => {
  //section1
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    var section1TL = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animation for section 1
    section1TL
      .to('#section1 .img', { scale: 0, duration: 0 })
      .to('#section1 .img', { scale: 1, duration: 4 })
      // .to(canvas, { opacity: 1 })
      .fromTo(
        '#section1 .line',
        { scaleX: 0, transformOrigin: 'right' },
        { duration: 1, scaleX: 1 },
      )
      .fromTo(
        '#section1 .text .split',
        { autoAlpha: 0, y: 20 },
        { duration: 1, autoAlpha: 1, y: 0, stagger: 0.2 },
      );

    // ScrollTrigger for section 1
    ScrollTrigger.create({
      animation: section1TL,
      trigger: '#section1',
      start: 'top center',
      markers: false,
    });

    // 화살표 움직임
    gsap.fromTo(
      ['#section1 .arrow1', '#section1 .arrow2'],
      { rotation: 0 },
      {
        rotation: 25,
        scrollTrigger: {
          trigger: '#section1',
          start: 'top top',
          scrub: true,
        },
      },
    );
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    var section1TL = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animation for section 1
    section1TL
      .to('#section1 .img', { scale: 0, duration: 0 })
      .to('#section1 .img', { scale: 1, duration: 4 })
      // .to(canvas, { opacity: 1 })
      .fromTo(
        '#section1 .line',
        { scaleX: 0, transformOrigin: 'right' },
        { duration: 1, scaleX: 1 },
      )
      .fromTo(
        '#section1 .text .split',
        { autoAlpha: 0, y: 20 },
        { duration: 1, autoAlpha: 1, y: 0, stagger: 0.2 },
      );

    // ScrollTrigger for section 1
    ScrollTrigger.create({
      animation: section1TL,
      trigger: '#section1',
      start: 'top center',
      markers: false,
    });

    // 화살표 움직임
    gsap.fromTo(
      ['#section1 .arrow1', '#section1 .arrow2'],
      { rotation: 0 },
      {
        rotation: 25,
        scrollTrigger: {
          trigger: '#section1',
          start: 'top top',
          scrub: true,
        },
      },
    );
  }, []);

  //section2
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    function animate(item) {
      let x = 0;
      let y = 0;
      let delay = item.dataset.delay;

      gsap.fromTo(
        item,
        { autoAlpha: 0, x: x, y: y },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          delay: delay,
          duration: 1.25,
          overwrite: 'auto',
          ease: 'expo',
        },
      );
    }

    function reset(item) {
      gsap.to(item, {
        autoAlpha: 0,
        x: 0,
        y: 0,
        duration: 1,
        overwrite: 'auto',
        ease: 'expo',
      });
    }

    function createScrollTrigger(trigger, start, callback) {
      gsap.utils.toArray(trigger).forEach(item => {
        ScrollTrigger.create({
          trigger: item,
          start: start,
          markers: false,
          onEnter: () => {
            callback(item);
          },
          onLeaveBack: () => {
            reset(item);
          },
        });
        item.style.opacity = '0';
      });
    }

    createScrollTrigger('#section2 .name li', 'top 60%', animate);
    createScrollTrigger('#section2 .iam li', 'top 60%', animate);
    createScrollTrigger('#section2 .introduce ul li', 'top 70%', animate);
    createScrollTrigger('#section2 .imgText', 'top 30%', animate);
    createScrollTrigger('#section2 .imgText .text ul li', 'top 90%', animate);

    const section2TL = gsap.timeline();

    section2TL.fromTo(
      '#section2 .scroll .line',
      {
        scaleX: 0,
        transformOrigin: 'left',
      },
      {
        duration: 2,
        scaleX: 1,
        ease: 'power3.out',
        delay: 0.5,
      },
    );

    ScrollTrigger.create({
      trigger: '#section2',
      start: 'center center',
      animation: section2TL,
      markers: false,
    });

    // ScrollTrigger.matchMedia
    const matchMediaHandler = () => {
      if (window.matchMedia('(max-width: 799px)').matches) {
        createScrollTrigger('#section2 .name li', 'top 60%', animate);
        createScrollTrigger('#section2 .iam li', 'top 60%', animate);
        createScrollTrigger('#section2 .introduce ul li', 'top 70%', animate);
        createScrollTrigger('#section2 .imgText', 'top 80%', animate);
        createScrollTrigger(
          '#section2 .imgText .text ul li',
          'top 90%',
          animate,
        );

        const section2TL = gsap.timeline();

        section2TL.fromTo(
          '#section2 .scroll .line',
          {
            scaleX: 0,
            transformOrigin: 'left',
          },
          {
            duration: 2,
            scaleX: 1,
            ease: 'power3.out',
            delay: 0.5,
          },
        );

        ScrollTrigger.create({
          trigger: '#section2',
          start: 'center center',
          animation: section2TL,
          markers: false,
        });
      } else {
        // Desktop 환경에 대한 추가 처리
      }
    };

    // 최초 로딩 시 matchMediaHandler 호출
    matchMediaHandler();

    // resize 이벤트 리스너 등록
    window.addEventListener('resize', matchMediaHandler);

    // cleanup 함수
    return () => {
      window.removeEventListener('resize', matchMediaHandler);
    };
  }, []);

  //section3
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 배경 화면 색 변경을 위한 resize 이벤트 핸들러
    function handleResize() {
      gsap.to(['#section3', '#section3 .top li'], {
        backgroundColor: '#E0E3E7',
        color: '#000',
      });
    }

    gsap.to(['#section3', '#section3 .top li'], {
      backgroundColor: '#E0E3E7',
      color: '#000',
      scrollTrigger: {
        trigger: '#section3',
        start: 'top 60%',
        toggleClass: { targets: '#section3', className: 'scroll-active' },
        onEnter: function () {
          gsap.to(['#section3'], {
            backgroundColor: '#E0E3E7',
            color: '#000',
          });
          gsap.to(['#section3 .top li'], {
            backgroundColor: '#E0E3E7',
            color: '#000',
          });
          gsap.to(['#nav'], {
            backgroundColor: '#000',
          });
          gsap.to(['#nav span'], {
            backgroundColor: '#fff',
          });
          gsap.set('#section3 .arrow', { display: 'block' });
          gsap.set('#section3 .arrowWhite', { display: 'none' });
        },
        onLeaveBack: function () {
          gsap.to(['#section3', '#section3 .top li'], {
            backgroundColor: '#000',
            color: '#fff',
          });
          gsap.to(['#nav'], {
            backgroundColor: '#fff',
          });
          gsap.to(['#nav span'], {
            backgroundColor: '#000',
          });
          gsap.set('#section3 .arrow', { display: 'none' });
          gsap.set('#section3 .arrowWhite', { display: 'block' });
        },
      },
    });

    window.addEventListener('resize', handleResize);

    // timeline
    const section3TL = gsap.timeline();

    section3TL
      .fromTo(
        '#section3 .text .text__inner .line',
        {
          scaleX: 0,
          transformOrigin: 'right',
        },
        {
          duration: 1,
          scaleX: 1,
          ease: 'power3.out',
          delay: 0.1,
        },
      )
      .fromTo(
        '#section3 .text .text__inner .bottom .split',
        { autoAlpha: 0, y: 20 },
        { duration: 0.5, autoAlpha: 1, y: 0, stagger: 0.2 },
      );

    ScrollTrigger.create({
      trigger: '#section3',
      start: 'top top',
      animation: section3TL,
      markers: false,
    });

    // card
    gsap.utils.toArray('#section3 .card1').forEach(item => {
      gsap.to(item, {
        duration: 0.5,
        yPercent: -50,
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          end: 'bottom top',
          scrub: true,
          markers: false,
        },
      });
    });

    gsap.utils.toArray('#section3 .card2').forEach(item => {
      gsap.to(item, {
        duration: 0.5,
        yPercent: -50,
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          end: 'bottom top',
          scrub: true,
          markers: false,
        },
      });
    });

    gsap.utils.toArray('#section3 .card3').forEach(item => {
      gsap.to(item, {
        duration: 0.5,
        yPercent: -50,
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          end: 'bottom top',
          scrub: true,
          markers: false,
        },
      });
    });

    // ScrollTrigger.matchMedia
    const matchMediaHandler = () => {
      if (window.matchMedia('(min-width: 800px)').matches) {
        // Desktop 환경에 대한 추가 처리
      } else {
        // Mobile 환경에 대한 추가 처리
      }
    };

    // 최초 로딩 시 matchMediaHandler 호출
    matchMediaHandler();

    // resize 이벤트 리스너 등록
    window.addEventListener('resize', matchMediaHandler);

    // cleanup 함수
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', matchMediaHandler);
    };
  }, []);

  return (
    <div className="vertical">
      <section id="section1">
        <div className="img" aria-hidden="true"></div>
        <div className="arrow1" aria-hidden="true"></div>
        <div className="arrow2" aria-hidden="true"></div>
        <div className="text">
          <span className="line"></span>
          <ul>
            <li className="split">WELCOME</li>
            <li className="split">TO MY</li>
            <li className="split">PORTFOLIO</li>
            <li className="split">SITE</li>
          </ul>
        </div>
        <canvas id="canvas"></canvas>
      </section>
      <section id="section2">
        <div className="name">
          <ul>
            <li className="split">
              <span>CHEON</span>
            </li>
            <li className="split">
              <span>SEOL HEE</span>
            </li>
          </ul>
        </div>
        <div className="iam">
          <ul>
            <li className="split">I AM</li>
            <li className="split">FRONTEND</li>
            <li className="split">DEVELOPER</li>
          </ul>
        </div>
        <div className="introduce">
          <ul>
            <li className="split">
              저는 항상 새로운 도전에 대한 열정과 긍정적인 자세를 가지고
              있습니다.
            </li>
            <li className="split">
              어려움을 마주할 때도 포기하지 않고 문제에 집중하여
            </li>
            <li className="split">
              해결책을 찾아내는 능력을 갖추려고 노력하고 있습니다.
            </li>
            <li className="split">
              지속적인 학습과 개인 발전을 통해 능력있는 프론트엔드 개발자로
              성장하고.
            </li>
            <li className="split">
              사용자들에게 가치 있는 웹 경험을 제공하는 것이 저의 목표입니다.
            </li>
          </ul>
        </div>
        <div className="imgText">
          <div className="img"></div>
          <div className="text">
            <ul>
              <li className="split">
                노력과 열정은 결국 좋은 결과를 가져온다고 믿습니다.
              </li>
              <li className="split">
                끊임없이 배움에 열려있으며, 겸손한 자세로 세부적인 부분까지
              </li>
              <li className="split">꼼꼼하게 살펴보는 개발자가 되겠습니다.</li>
            </ul>
          </div>
        </div>
        <div className="scroll">
          <div className="text">
            <span>SCROLL DOWN</span>
            <div className="arrow"></div>
          </div>
          <div className="line"></div>
        </div>
      </section>
      <section id="section3">
        <div className="header">
          <span>PORTFOLIO</span>
          <span>WEBSTORY</span>
        </div>
        <div className="arrow"></div>
        <div className="arrowWhite"></div>
        <div className="text">
          <div className="text__inner">
            <ul className="top">
              <li className="split">I can HANDLE THESE</li>
              <li className="split">SKILLs</li>
            </ul>
            <span className="line"></span>
            <ul className="bottom">
              <li className="split">Welcome</li>
              <li className="split">to my skills</li>
              <li className="split">showcase page</li>
              <li className="split">I possess</li>
              <li className="split">expertise in</li>
              <li className="split">HTML CSS</li>
              <li className="split">JavaScript React</li>
              <li className="split">and Next.js.</li>
              <li className="split">Feel free to explore</li>
              <li className="split">this page to</li>
              <li className="split">learn more about</li>
              <li className="split">my skills and projects.</li>
              <li className="split">Thank you</li>
              <li className="split">for visiting</li>
            </ul>
          </div>
          <div className="background">
            <div className="bgArrow1"></div>
            <div className="bgArrow2"></div>
            <div className="bgText">
              <div className="flow-wrap">
                javascrip & HTML & CSS & javascrip & HTML & CSS &
              </div>
              <div className="flow-wrap">
                javascrip & HTML & CSS & javascrip & HTML & CSS &
              </div>
              <div className="flow-wrap">
                javascrip & HTML & CSS & javascrip & HTML & CSS &
              </div>
              <div className="flow-wrap">
                javascrip & HTML & CSS & javascrip & HTML & CSS &
              </div>
            </div>
            <div className="bgText2">
              <div className="flow-wrap2">
                javascrip & HTML & CSS & javascrip & HTML & CSS &
              </div>
              <div className="flow-wrap2">
                javascrip & HTML & CSS & javascrip & HTML & CSS &
              </div>
              <div className="flow-wrap2">
                javascrip & HTML & CSS & javascrip & HTML & CSS &
              </div>
              <div className="flow-wrap2">
                javascrip & HTML & CSS & javascrip & HTML & CSS &
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card1">
              <h3>HTML & CSS</h3>
              <p>
                HTML과 CSS를 조합하여 웹 페이지를 구축하고 콘텐츠를 구성하는
                데에 능숙합니다. 시맨틱 태그를 사용하여 의미론적인 마크업을
                구현하고, 다양한 CSS 속성을 활용하여 디자인과 레이아웃을
                구성합니다. 또한, 최신 CSS 트렌드에 주의를 기울이며 IR 기법이나
                이미지 스프라이트와 같은 기술을 사용합니다. 트랜지션, 트랜스폼,
                키프레임을 이용하여 애니메이션 효과를 추가할 수 있으며, 코드의
                재활용성을 고민하여 효율적인 코드를 작성합니다.
              </p>
              <a
                href="https://seolhee313.github.io/web2023/webd/index.html"
                target="_blank"
                rel="noreferrer"
              >
                VIEW
              </a>
            </div>
            <div className="card2">
              <h3>JAVASCRIPT</h3>
              <p>
                JavaScript 를 활용하여 이벤트 처리를 구현할 수 있습니다. DOM
                조작을 통해 웹 페이지의 요소들을 동적으로 조작하고, 콘텐츠를
                업데이트할 수 있으며, Ajax를 이용하여 비동기적으로 서버와
                데이터를 주고받을 수 있습니다. 또한, 애니메이션 기능을 구현하여
                웹 페이지를 더 생동감 있게 만들 수 있습니다. 요소의 이동, 크기
                조절, 페이드 인/아웃 등 다양한 애니메이션 효과를 자바스크립트로
                제어할 수 있습니다. 이를 통해 웹 페이지의 동적 동작과
                상호작용성을 향상시킬 수 있습니다.
              </p>
              <a
                href="https://seolhee313.github.io/web2023/javascript/javascript01.html"
                target="_blank"
                rel="noreferrer"
              >
                VIEW
              </a>
            </div>
            <div className="card3">
              <h3>REACT</h3>
              <p>
                REACT를 사용하여 컴퍼넌트를 생성하여 싱글페이지를 출력시킬 수
                있습니다. 리액트를 통해 외부 API를 활용하여 데이터를 불러올 수
                있으며, 유튜브 API나 영화 정보 API를 사용하여 동영상 목록이나
                영화 정보를 가져와서 웹 페이지에 표시할 수 있습니다. 또한,
                API와의 연동을 통해 검색 기능도 구현할 수 있습니다. 사용자가
                특정 키워드를 입력하면 해당 키워드를 기반으로 API에 요청을
                보내고 검색 결과를 받아와 웹 페이지에 동적으로 표시할 수
                있습니다. 이를 통해 사용자가 편리하게 원하는 정보를 검색할 수
                있는 기능을 제공할 수 있습니다.
              </p>
              <a
                href="https://seolhee313.github.io/web2023/react/index.html"
                target="_blank"
                rel="noreferrer"
              >
                VIEW
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vertical;
