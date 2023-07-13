import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const horizontal = () => {
  //section5
  gsap.registerPlugin(ScrollTrigger);

  // 섹션1
  let scrollTween = {};

  let t1Animation = gsap.to('#section5 .title .t1', {
    duration: 1,
    x: 30,
    scrollTrigger: {
      trigger: '#section5',
      animation: scrollTween,
      start: 'left right',
      end: 'right left',
      scrub: 2.5,
      markers: false,
    },
  });
  let t2Animation = gsap.to('#section5 .title .t2', {
    duration: 1,
    x: 40,
    scrollTrigger: {
      trigger: '#section5',
      animation: scrollTween,
      start: 'left right',
      end: 'right left',
      scrub: 1,
      markers: false,
    },
  });

  // 섹션2
  let aaAnimation = gsap.to('#section5 .explain .aa', {
    duration: 1,
    x: -30,
    scrollTrigger: {
      trigger: '#section5 .img',
      animation: scrollTween,
      start: 'left right',
      end: 'right left',
      scrub: 2.5,
      markers: false,
    },
  });
  let abAnimation = gsap.to('#section5 .explain .ab', {
    duration: 1,
    x: -50,
    scrollTrigger: {
      trigger: '#section5 .img',
      animation: scrollTween,
      start: 'left right',
      end: 'right left',
      scrub: 3,
      markers: false,
    },
  });

  let teaAnimation = gsap.to('#section5 .explain .text', {
    duration: 1,
    x: -50,
    scrollTrigger: {
      trigger: '#section5 .img',
      animation: scrollTween,
      start: 'left right',
      end: 'right left',
      scrub: 1,
      markers: false,
    },
  });

  let imgAnimation = gsap.to('#section5 .img', {
    duration: 1,
    y: -20,
    scrollTrigger: {
      trigger: '#section5',
      animation: scrollTween,
      start: 'left right',
      end: 'right left',
      scrub: 1,
      markers: false,
    },
  });

  // 애니메이션 정의
  scrollTween = {
    t1: t1Animation,
    t2: t2Animation,
    aa: aaAnimation,
    ab: abAnimation,
    te: teaAnimation,
    img: imgAnimation,
  };
};

export default horizontal;
