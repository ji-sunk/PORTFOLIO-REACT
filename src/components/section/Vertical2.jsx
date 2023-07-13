import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Vertical2 = () => {
  //section11
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set('#section11', {
      backgroundColor: '#E0E3E7',
      color: '#000',
    });

    gsap.set('#section11 .text .split', {
      color: '#000',
    });

    gsap.to('#section11', {
      scrollTrigger: {
        trigger: '#section11',
        start: 'top 60%',
        toggleClass: { targets: '#section11', className: 'scroll-active' },
        onEnter: function () {
          gsap.to('#section11', {
            backgroundColor: '#000',
            color: '#fff',
          });
          gsap.to('#section11 .text .split', {
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
          gsap.to('#section11', {
            backgroundColor: '#E0E3E7',
            color: '#000',
          });
          gsap.to('#section11 .text .split', {
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
    const section11TL = gsap.timeline();

    section11TL
      .fromTo(
        '#section11 .text ul li',
        { autoAlpha: 0, y: 20 },
        { duration: 0.2, autoAlpha: 1, y: 0, stagger: 0.2 },
      )
      .fromTo(
        '#section11 .scroll .line',
        { scaleX: 0, transformOrigin: 'left' },
        { duration: 1, scaleX: 1, ease: 'power3.out', delay: 0.2 },
      );

    ScrollTrigger.create({
      trigger: '#section11',
      start: 'top 10%',
      animation: section11TL,
      markers: false,
    });
  }, []);

  //section12
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set('#section12', {
      backgroundColor: '#000',
      color: '#fff',
    });

    gsap.set('#section12 h3', {
      backgroundColor: '#000',
      color: '#fff',
    });

    gsap.to('#section12', {
      scrollTrigger: {
        trigger: '#section12',
        start: 'top 60%',
        toggleClass: { targets: '#section12', className: 'scroll-active' },
        onEnter: function () {
          gsap.to('#section12', {
            backgroundColor: '#E0E3E7',
            color: '#000',
          });
          gsap.to('#section12 h3', {
            backgroundColor: '#E0E3E7',
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
          gsap.to('#section12', {
            backgroundColor: '#000',
            color: '#fff',
          });
          gsap.to('#section12 h3', {
            backgroundColor: '#000',
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

    const circle = document.querySelectorAll('#section12 .circle a span');

    const ani2 = gsap.timeline();
    ani2.fromTo(circle, { x: 2290, autoAlpha: 1 }, { x: 0, autoAlpha: 1 });

    ScrollTrigger.create({
      animation: ani2,
      trigger: '#section12',
      start: 'top top',
      end: '+=3500',
      scrub: true,
      pin: true,
      anticipatePin: 1,
      markers: false,
    });

    const span = document.querySelector(
      '#section12 .circle a:nth-child(1) span',
    );
    const em = document.querySelector(
      '#section12 .circle a:nth-child(1) span em',
    );

    span.addEventListener('mouseenter', () => {
      em.style.opacity = '1';
    });

    span.addEventListener('mouseleave', () => {
      em.style.opacity = '0';
    });

    var snippet = [].slice.call(document.querySelectorAll('.hover'));
    if (snippet.length) {
      snippet.forEach(function (snippet) {
        snippet.addEventListener('mouseout', function (event) {
          if (event.target.parentNode.tagName === 'a') {
            event.target.parentNode.classList.remove('hover');
          } else {
            event.target.parentNode.classList.remove('hover');
          }
        });
      });
    }
  }, []);

  //section13
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set('#section13', {
      backgroundColor: '#E0E3E7',
      color: '#000',
    });

    gsap.set('#section13 .text li', {
      backgroundColor: '#E0E3E7',
      color: '#000',
    });

    gsap.to('#section13', {
      scrollTrigger: {
        trigger: '#section13',
        start: 'top 60%',
        toggleClass: { targets: '#section13', className: 'scroll-active' },
        onEnter: function () {
          gsap.to('#section13', {
            backgroundColor: '#fff',
            color: '#000',
          });
          gsap.to('#section13 .text li', {
            backgroundColor: '#fff',
            color: '#000',
          });
        },
        onLeaveBack: function () {
          gsap.to('#section13', {
            backgroundColor: '#E0E3E7',
            color: '#000',
          });
          gsap.to('#section13 .text li', {
            backgroundColor: '#E0E3E7',
            color: '#000',
          });
        },
      },
    });

    // timeline
    const section13TL = gsap.timeline();

    section13TL.fromTo(
      '#section13 .text ul li',
      { autoAlpha: 0, y: 20 },
      { duration: 0.2, autoAlpha: 1, y: 0, stagger: 0.2 },
    );

    ScrollTrigger.create({
      trigger: '#section13',
      start: 'top 10%',
      animation: section13TL,
      markers: false,
    });
  }, []);

  //section14
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set('#section14', {
      backgroundColor: '#fff',
      color: '#000',
    });

    gsap.set('#section14 .header span', {
      color: '#000',
    });

    gsap.set('#section14 .right', {
      backgroundColor: '#fff',
      color: '#000',
    });

    gsap.set('#section14 .right h3', {
      color: '#000',
    });

    gsap.set('#section14 .right p', {
      color: '#000',
    });

    gsap.to('#section14', {
      scrollTrigger: {
        trigger: '#section14',
        start: 'top 60%',
        toggleClass: { targets: '#section14', className: 'scroll-active' },
        onEnter: function () {
          gsap.to('#section14', {
            backgroundColor: '#E0E3E7',
            color: '#000',
          });
          gsap.to('#section14 .header span', {
            color: '#000',
          });
          gsap.to('#section14 .right', {
            backgroundColor: '#E0E3E7',
            color: '#000',
          });
          gsap.to('#section14 .right h3', {
            color: '#000',
          });
          gsap.to('#section14 .right p', {
            color: '#000',
          });
        },
        onLeaveBack: function () {
          gsap.to('#section14', {
            backgroundColor: '#fff',
            color: '#000',
          });
          gsap.to('#section14 .header span', {
            color: '#000',
          });
          gsap.to('#section14 .right', {
            backgroundColor: '#fff',
            color: '#000',
          });
          gsap.to('#section14 .right h3', {
            color: '#000',
          });
          gsap.to('#section14 .right p', {
            color: '#000',
          });
        },
      },
    });

    const imgElements = document.querySelectorAll('#section14 .left > div');

    imgElements.forEach(element => {
      element.addEventListener('click', function () {
        // Remove active class from all elements
        imgElements.forEach(el => el.classList.remove('active'));

        // Add active class to the clicked element
        this.classList.add('active');
      });
    });

    // JavaScript 코드
    // 이미지를 클릭했을 때 해당 내용을 보여주는 함수
    function showContent(className) {
      // 모든 내용 숨기기
      const contentDivs = document.querySelectorAll(
        '.section__inner .right > div',
      );
      contentDivs.forEach(div => {
        div.style.display = 'none';
      });

      // 선택한 내용 보여주기
      const selectedDiv = document.querySelector(
        `.section__inner .right .${className}`,
      );
      selectedDiv.style.display = 'block';
    }

    // 이미지 클릭 이벤트 추가
    const images = document.querySelectorAll('.section__inner .left div');
    images.forEach(image => {
      const className = image.querySelector('span').innerText;
      image.addEventListener('click', function () {
        showContent(className);
      });
    });
  }, []);

  //section15
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // timeline
    const section15TL = gsap.timeline();

    section15TL
      .fromTo(
        '#section15 .text ul li',
        { autoAlpha: 0, y: 20 },
        { duration: 0.2, autoAlpha: 1, y: 0, stagger: 0.2 },
      )
      .fromTo(
        '#section15 .contact1 .line',
        { scaleX: 0, transformOrigin: 'left' },
        { duration: 1, scaleX: 1, ease: 'power3.out', delay: 0.2 },
      )
      .fromTo(
        '#section15 .contact2 .line',
        { scaleX: 0, transformOrigin: 'left' },
        { duration: 1, scaleX: 1, ease: 'power3.out', delay: 0.2 },
      );

    ScrollTrigger.create({
      trigger: '#section15',
      start: 'top 80%',
      animation: section15TL,
      markers: false,
    });
  }, []);

  //section16
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set('#section16', {
      backgroundColor: '#E0E3E7',
      color: '#000',
    });

    gsap.set('#section16 .mail li', {
      color: '#000',
    });

    gsap.to('#section16', {
      scrollTrigger: {
        trigger: '#section16',
        start: 'top 60%',
        toggleClass: { targets: '#section16', className: 'scroll-active' },
        onEnter: function () {
          gsap.to('#section16', {
            backgroundColor: '#000',
            color: '#fff',
          });
          gsap.to('#section16 .mail li', {
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
          gsap.to('#section16', {
            backgroundColor: '#E0E3E7',
            color: '#000',
          });
          gsap.to('#section16 .mail li', {
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
    const section16TL = gsap.timeline();

    section16TL
      .fromTo(
        '#section16 .thx ul li',
        { autoAlpha: 0, y: 20 },
        { duration: 0.3, autoAlpha: 1, y: 0, stagger: 0.2 },
      )
      .fromTo(
        '#section16 .mail ul li',
        { autoAlpha: 0, y: 20 },
        { duration: 0.3, autoAlpha: 1, y: 0, stagger: 0.2 },
      )
      .fromTo(
        '#section16 .menu ul',
        { autoAlpha: 0, y: 20 },
        { duration: 0.3, autoAlpha: 1, y: 0, stagger: 0.2 },
      );

    ScrollTrigger.create({
      trigger: '#section16',
      start: 'top 20%',
      animation: section16TL,
      markers: false,
    });
  }, []);

  return (
    <div className="vertical2">
      <section id="section11">
        <div className="text">
          <ul>
            <li className="split">about my</li>
            <li className="">SCRIPT</li>
            <li className="split">project</li>
          </ul>
          <div className="scroll">
            <span className="line"></span>
            <h4>SCROLL DOWN</h4>
            <span className="arrow"></span>
          </div>
        </div>
      </section>
      <section id="section12">
        <h3>introduce script</h3>
        <div className="circle">
          <a
            href="https://seolhee-game.web.app/"
            className="effect-wrap"
            target="_blank"
            rel="noreferrer"
          >
            <div className="effect5">
              <span>
                <figcaption>
                  <h4>
                    music game<em>Effect</em>
                  </h4>
                </figcaption>
              </span>
            </div>
          </a>

          <a
            href="https://seolhee-game.web.app/"
            className="effect-wrap"
            target="_blank"
            rel="noreferrer"
          >
            <div className="effect5">
              <span>
                <figcaption>
                  <h4>
                    TETRIS game<em>Effect</em>
                  </h4>
                </figcaption>
              </span>
            </div>
          </a>

          <a
            href="https://seolhee313.github.io/web2023/javascript/parallax/parallaxEffect01.html"
            className="effect-wrap"
            target="_blank"
            rel="noreferrer"
          >
            <div className="effect5">
              <span>
                <figcaption>
                  <h4>
                    parallax<em>Effect</em>
                  </h4>
                </figcaption>
              </span>
            </div>
          </a>

          <a
            href="https://seolhee313.github.io/web2023/javascript/mouse/mouseEffect01.html"
            className="effect-wrap"
            target="_blank"
            rel="noreferrer"
          >
            <div className="effect5">
              <span>
                <figcaption>
                  <h4>
                    Mouse Hover<em>Effect</em>
                  </h4>
                </figcaption>
              </span>
            </div>
          </a>

          <a
            href="https://seolhee313.github.io/web2023/javascript/quiz/quizEffect07.html"
            className="effect-wrap"
            target="_blank"
            rel="noreferrer"
          >
            <div className="effect5">
              <span>
                <figcaption>
                  <h4>
                    quiz<em>Effect</em>
                  </h4>
                </figcaption>
              </span>
            </div>
          </a>
        </div>
      </section>
      <section id="section13">
        <div className="text">
          <ul>
            <li className="split">Do you want to</li>
            <li className="split">know more</li>
            <li className="split">about me?</li>
          </ul>
        </div>
        <div className="moreBox">
          <div className="tistory">
            <a
              href="https://seolheeone.tistory.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img">
                <span></span>istory
              </div>
            </a>
            <div className="view">
              <span className="line"></span>
              <span>
                <a
                  href="https://seolheeone.tistory.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW
                </a>
              </span>
            </div>
            <a
              href="https://seolheeone.tistory.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="arrow"></span>
            </a>
          </div>
          <div className="github">
            <a
              href="https://github.com/seolhee313/seolhee313"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img">
                <span></span>github
              </div>
            </a>
            <div className="view">
              <span className="line"></span>
              <span>
                <a
                  href="https://github.com/seolhee313/seolhee313"
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW
                </a>
              </span>
            </div>
            <a
              href="https://github.com/seolhee313/seolhee313"
              target="_blank"
              rel="noreferrer"
            >
              <span className="arrow"></span>
            </a>
          </div>
          <div className="instagram">
            <a href="#">
              <div className="img">
                <span></span>instagram
              </div>
            </a>
            <div className="view">
              <span className="line"></span>
              <span>
                <a href="#" target="_blank">
                  VIEW
                </a>
              </span>
            </div>
            <a href="#" target="_blank">
              <span className="arrow"></span>
            </a>
          </div>
          <div className="codepen">
            <a
              href="https://codepen.io/your-work/?cursor=ZD0wJm89MSZwPTEmdj02NzM1MTU3MQ=="
              target="_blank"
              rel="noreferrer"
            >
              <div className="img">
                <span></span>
                <em>c</em>depen
              </div>
            </a>
            <div className="view">
              <span className="line"></span>
              <span>
                <a
                  href="https://codepen.io/your-work/?cursor=ZD0wJm89MSZwPTEmdj02NzM1MTU3MQ=="
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW
                </a>
              </span>
            </div>
            <a
              href="https://codepen.io/your-work/?cursor=ZD0wJm89MSZwPTEmdj02NzM1MTU3MQ=="
              target="_blank"
              rel="noreferrer"
            >
              <span className="arrow"></span>
            </a>
          </div>
        </div>
      </section>
      <section id="section14">
        <div className="header">
          <span>INTRODUCE</span>
          <span>MY SELF</span>
        </div>
        <div className="section__inner">
          <div className="left">
            <div className="active">
              <div className="img1">
                <span>METICULOUS</span>
              </div>
            </div>
            <div>
              <div className="img2">
                <span>RATIONAL</span>
              </div>
            </div>
            <div>
              <div className="img3">
                <span>EARNEST</span>
              </div>
            </div>
            <div>
              <div className="img4">
                <span>SOCIABLE</span>
              </div>
            </div>
            <div>
              <div className="img5">
                <span>GO-AHEAD</span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="METICULOUS">
              <h3>METICULOUS</h3>
              <span>꼼꼼한</span>
              <p>
                저는 평소에 꼼꼼하다는 이야기를 주변에서 많이 듣습니다.
                <br />
                그로 인해 코딩 작업을 할 때에도 디테일에 주의를 기울이며,
                <br />
                작은 실수를 놓치지 않는 성격을 가지고 있습니다.
                <br />
                이러한 꼼꼼함은 코드의 정확성과 일관성을 확보하는 데<br />
                매우 중요한 역할을 한다고 생각합니다. 문제 해결에 있어서도
                <br />
                꼼꼼함은 제 강점으로, 복잡한 문제를 체계적으로 분석하고
                <br />
                해결책을 찾아내는데 도움을 줍니다.
                <br />
                또한, 코드의 가독성과 유지보수성을 고려하여 효율적인
                <br />
                프로그램을 작성하는 데에도 신경을 쓰며,
                <br />
                협업 환경에서도 원활한 소통과 협력을 위해 꼼꼼함을 발휘합니다.
                <br />
                제 꼼꼼한 성격은 프로젝트에 신뢰성과 품질을 높이는 데<br />
                기여할 것이라 자부합니다.
              </p>
            </div>
            <div className="RATIONAL">
              <h3>RATIONAL</h3>
              <span>이성적인, 합리적인</span>
              <p>
                저는 평소에 이성적이다는 이야기를 많이 듣습니다. 이는
                <br />
                문제 해결과 의사 결정에 있어서 객관적인 사고와 분석적인
                <br />
                접근을 채택하는 특성을 의미한다고 생각합니다. 코딩 작업
                <br />
                적인 사고가 필요한데, 이성적인 성격은 이러한 작업에 적<br />
                합한 특징이라고 생각합니다. 이성적인 사고는 감정이 개입
                <br />
                되지 않고 사실과 데이터를 바탕으로 판단하는 것을 의미하
                <br />
                는데, 프로그래밍은 정확성과 효율성을 요구하는 작업이기 <br />
                때문에, 이성적인 접근은 버그를 찾고 수정하는 과정에서
                <br />
                매우 유용하다고 생각합니다. 또한, 문제의 본질을 파악하
                <br />
                고 목표를 달성하기 위한 최상의 전략을 도출하는 데에도
                <br />
                도움을 줍니다.
              </p>
            </div>
            <div className="EARNEST">
              <h3>EARNEST</h3>
              <span>성실한</span>
              <p>
                저는 전 직장을 다닐 때나, 최근 학원을 다닐 때도 지각을
                <br />
                전혀 하지 않았습니다. 성실함이란 평소에도 작업을 할 때에도
                <br />
                최선을 다하고 책임감을 갖는 특성을 의미한다고 생각합니다.
                <br />
                코딩 작업에서는 정확성과 일관성이 중요한데, 성실한 성격은
                <br />
                신중하고 철저한 접근으로 이러한 요구사항을 충족시킨다고
                <br />
                생각합니다. 또한, 성실함은 프로젝트에 헌신하여 작업의
                <br />
                완성도를 높이는 데 도움을 줍니다. 작업의 목표와 일정을
                <br />
                준수하며, 주어진 업무에 최선을 다해 정확하고 효율적인
                <br />
                결과물을 제공하는 것이 성실한 사람의 특징입니다.
                <br />
                성실한 사람은 과제를 완료하기 위해 필요한 추가적인 노력을
                <br />
                기꺼이 기울이며, 어려움에 직면해도 포기하지 않고 문제를
                <br />
                해결해 나갑니다. 저는 학원을에 다니며 매일 1일 1 블로그를
                <br />
                업로드 했으며, 잠이 부족해도 과제를 미룬 적이 없습니다.
                <br />
                이러한 성실함은 분명 코딩 작업에 장점이 된다고 생각합니다.
              </p>
            </div>
            <div className="SOCIABLE">
              <h3>SoCIABLE</h3>
              <span>사교적인</span>
              <p>
                저는 어느 곳을 가도 현장이나 무리에 어울리지 못한 적이 없습니다.
                <br />
                사교적인 사람은 타인과의 원활한 관계 형성과 협업을 즐기며,
                <br />
                소통과 협업을 위한 능력을 갖추고 있다고 생각합니다.
                <br />
                코딩 작업에서도 사교적인 성격은 팀 내 소통과 협업에 매우 중요한
                <br />
                역할을 합니다. 사교적인 성격은 팀원들과의 관계를 즐기고,
                <br />
                적극적으로 의견을 나누며 협업하는 특징을 의미합니다
                <br />
                프로젝트에서 팀원들과 원활한 소통을 유지하고, 아이디어와 정보를
                <br />
                주고받으면서 효율적인 협업을 끌어낼 수 있습니다. 또한,
                <br />
                다른 사람의 의견을 존중하고 조화롭게 협력하는 능력을 발휘하여
                <br />
                팀의 목표 달성에 기여합니다. 또 저는 사교적인 사람은 팀 내에서의
                <br />
                원활한 협업뿐만이 아니라, 이해관계자와의 소통, 사용자와의
                <br />
                상호작용 등 다양한 상황에서 유용하다고 생각합니다.
                <br />
                이처럼 사교적인 성격은 개발자로서의 커뮤니케이션 능력을
                강화시키고,
                <br />
                팀의 동료들과의 관계 형성에 긍정적인 영향을 줄 수 있습니다.
              </p>
            </div>
            <div className="GO-AHEAD">
              <h3>GO-AHEAD</h3>
              <span>진취적인</span>
              <p>
                저는 제가 진취적인 성격이라고 생각합니다. 진취적인 사람은
                <br />
                도전적인 상황에서도 망설이지 않고 앞으로 나아가는 특성이
                <br />
                있다고 하는데, 저는 저의 발전을 위해서 전 직장에서 나와서
                <br />
                나와 맞으면서 동시에 성취감을 취할 수 있는 직업이 무엇이
                <br />
                있는지 탐구하여, 프론트엔드라는 직업을 선택하였습니다.
                <br />
                코딩 작업에서는 문제를 해결하고 혁신적인 아이디어를 구현하기
                <br />
                위해 진취적인 성격이 필요하다고 생각하는데 저는 그와 어울린다고
                <br />
                확신합니다. 진취적인 사람은 새로운 도전에 대해 두려움을 갖지
                않으며,
                <br />
                새로운 기술과 도구를 학습하고 습득하는 데 능숙합니다.
                <br />
                기술의 발전 속도가 빠르게 진행되는 개발 환경에서 진취적인
                <br />
                성격은 계속해서 성장하고 발전하기 위한 필수적인 요소입니다.
                <br />
                새로운 기술과 개발 방법론에 대한 관심과 탐구를 통해
                <br />
                자신을 계속해서발전시키고, 최신 동향에 따라 기술 스택을
                <br />
                업데이트하는 것이 중요하다고 생각합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="section15">
        <span>MY PORTFOLIO</span>
        <div className="text">
          <ul>
            <li className="split">Thank you for</li>
            <li className="split">lookig at</li>
            <li className="split">my portfolio so far.</li>
            <li className="split">please contact me.</li>
          </ul>
        </div>
        <div className="contact1">
          <span className="line"></span>
          <span className="tel">TEL 010 - 3940 -8721</span>
        </div>
        <div className="contact2">
          <h4>CONTACT ME</h4>
          <span className="line"></span>
        </div>
      </section>
      <section id="section16">
        <div className="text">
          <div className="thx">
            <ul>
              <li className="split">THANK YOU</li>
              <li className="split">FOR</li>
              <li className="split">WATCHING</li>
            </ul>
          </div>
          <div className="mail">
            <ul>
              <li className="split">Don't hesitate.</li>
              <li className="split">To contact me,</li>
              <li className="split">I want to listen to it</li>
              <li className="split">From you!</li>
              <li className="split">
                <a href="mailto:seolheetwo@gmail.com">seolheetwo@gmail.com</a>
              </li>
            </ul>
          </div>
          <span>Get in touch</span>
          <div className="menu">
            <ul>
              <li className="split">
                <a href="#section2">Introduce</a>
              </li>
              <li className="split">
                <a href="#section3">Skill</a>
              </li>
              <li className="split">
                <a href="#section4">Website</a>
              </li>
              <li className="split">
                <a href="#section12">Script</a>
              </li>
              <li className="split">
                <a href="#section14">About</a>
              </li>
              <li className="split">
                <a href="#section16">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vertical2;
