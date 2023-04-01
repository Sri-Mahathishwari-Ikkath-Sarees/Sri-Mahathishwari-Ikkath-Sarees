const c7000 = document.querySelector('.seven');
const c8000 = document.querySelector('.eight');
const c8500 = document.querySelector('.eight-five');
const c9000 = document.querySelector('.nine');
const c10000 = document.querySelector('.ten');
const c12000 = document.querySelector('.twelve');
let imgSrc;
let imgInsertCost;
let imgDelCost;
// Retrieve the addToCartList array from local storage or initialize it to an empty array
let addToCartList = JSON.parse(localStorage.getItem('addToCartList')) || [];
const c7000Images = [
  'https://i.ibb.co/PzHDjcT/loom-my-Image1.jpg',
  'https://i.ibb.co/T1ynmdh/loom-my-Image2.jpg',
  'https://i.ibb.co/HYHKp0D/loom-my-Image3.jpg',
  'https://i.ibb.co/KyNRjw0/loom-my-Image4.jpg',
  'https://i.ibb.co/Sn80PhD/loom-my-Image5.jpg',
  'https://i.ibb.co/MfyR76Q/loom-my-Image6.jpg',
  'https://i.ibb.co/MfWs6jJ/loom-my-Image7.jpg',
  'https://i.ibb.co/PFmZtxM/loom-my-Image8.jpg',
  'https://i.ibb.co/qmw2J0b/loom-my-Image9.jpg',
  'https://i.ibb.co/TYx6H8v/loom-my-Image10.jpg',
  'https://i.ibb.co/c1WgZHT/loom-my-Image11.jpg',
  'https://i.ibb.co/kcKNN04/loom-my-Image12.jpg',
  'https://i.ibb.co/ChkjkGS/loom-my-Image13.jpg',
  'https://i.ibb.co/dj2Tk7n/loom-my-Image14.jpg',
  'https://i.ibb.co/MsY0CMS/loom-my-Image15.jpg',
  'https://i.ibb.co/G2kd9dd/loom-my-Image16.jpg',
  'https://i.ibb.co/fHpx78M/loom-my-Image17.jpg',
  'https://i.ibb.co/b15pQZ9/loom-my-Image18.jpg',
  'https://i.ibb.co/cTVxxDT/loom-my-Image19.jpg',
  'https://i.ibb.co/DRk7kS6/loom-my-Image20.jpg',
  'https://i.ibb.co/zFRZxB0/loom-my-Image21.jpg',
  'https://i.ibb.co/t3ZQMY0/loom-my-Image22.jpg',
  'https://i.ibb.co/h8T16yW/loom-my-Image23.jpg',
  'https://i.ibb.co/XsxqdH2/Whats-App-Image-2023-03-14-at-6-11-32-PM.jpg',
  'https://i.ibb.co/nDKrdLv/Whats-App-Image-2023-03-14-at-6-11-33-PM.jpg',
  'https://i.ibb.co/VxgMH6z/Whats-App-Image-2023-03-14-at-6-11-34-PM.jpg',
  'https://i.ibb.co/W28SBCQ/Whats-App-Image-2023-03-14-at-6-11-35-PM.jpg',
  'https://i.ibb.co/7pXXWsC/Whats-App-Image-2023-03-14-at-6-11-36-PM.jpg',
  'https://i.ibb.co/0CJgwxN/Whats-App-Image-2023-03-14-at-6-11-37-PM.jpg',
  'https://i.ibb.co/p3hryN0/Whats-App-Image-2023-03-14-at-6-11-39-PM.jpg',
  'https://i.ibb.co/mycmPDm/Whats-App-Image-2023-03-14-at-6-11-40-PM-1.jpg',
  'https://i.ibb.co/d7RQFBn/Whats-App-Image-2023-03-14-at-6-11-41-PM.jpg',
  'https://i.ibb.co/5MjnpJV/Whats-App-Image-2023-03-23-at-10-20-06-AM.jpg',
  'https://i.ibb.co/vZv7j90/Whats-App-Image-2023-03-14-at-6-11-42-PM.jpg',
  'https://i.ibb.co/yX85nrw/Whats-App-Image-2023-03-23-at-10-20-09-AM.jpg',
  'https://i.ibb.co/1RHX68F/Whats-App-Image-2023-03-14-at-6-11-43-PM.jpg'
]

const c8000Images = [
  'https://i.ibb.co/7gpsZGj/Whats-App-Image-2023-03-16-at-9-51-58-AM.jpg',
  'https://i.ibb.co/jb2q8c6/Whats-App-Image-2023-03-16-at-9-51-59-AM.jpg',
  'https://i.ibb.co/rGQrtpk/Whats-App-Image-2023-03-16-at-9-51-59-AM-1.jpg',
  'https://i.ibb.co/z25xc7J/Whats-App-Image-2023-03-16-at-9-51-59-AM-2.jpg',
  'https://i.ibb.co/tDqscxZ/Whats-App-Image-2023-03-16-at-9-52-00-AM.jpg',
  'https://i.ibb.co/hRxwNL7/Whats-App-Image-2023-03-16-at-9-52-00-AM-1.jpg',
  'https://i.ibb.co/kKdFgVS/Whats-App-Image-2023-03-16-at-9-52-01-AM.jpg',
  'https://i.ibb.co/r4f0hVX/Whats-App-Image-2023-03-16-at-9-52-01-AM-1.jpg',
  'https://i.ibb.co/qYddJ3Z/Whats-App-Image-2023-03-16-at-9-52-02-AM.jpg',
  'https://i.ibb.co/qdMGFnY/Whats-App-Image-2023-03-16-at-9-52-02-AM-1.jpg',
  'https://i.ibb.co/m4Dwn5Y/Whats-App-Image-2023-03-16-at-9-52-03-AM.jpg',
  'https://i.ibb.co/tBzk7qB/Whats-App-Image-2023-03-16-at-9-52-03-AM-1.jpg',
  'https://i.ibb.co/SP7KPDy/Whats-App-Image-2023-03-16-at-9-52-04-AM.jpg',
  'https://i.ibb.co/SP7KPDy/Whats-App-Image-2023-03-16-at-9-52-04-AM.jpg',
  'https://i.ibb.co/NLnLPLz/Whats-App-Image-2023-03-16-at-9-52-04-AM-2.jpg',
  'https://i.ibb.co/cF39Tv8/Whats-App-Image-2023-03-16-at-9-52-05-AM.jpg',
  'https://i.ibb.co/d6pVC18/Whats-App-Image-2023-03-16-at-9-52-06-AM.jpg',
  'https://i.ibb.co/X8mVs4g/Whats-App-Image-2023-03-16-at-9-52-06-AM-1.jpg',
  'https://i.ibb.co/Pmw7sMX/Whats-App-Image-2023-03-16-at-9-52-07-AM.jpg',
  'https://i.ibb.co/hd7DRxL/Whats-App-Image-2023-03-16-at-9-52-07-AM-1.jpg',
  'https://i.ibb.co/Y8W3BhX/Whats-App-Image-2023-03-16-at-9-52-08-AM.jpg',
  'https://i.ibb.co/8cpQHDm/Whats-App-Image-2023-03-16-at-9-52-08-AM-1.jpg',
  'https://i.ibb.co/M8455VR/Whats-App-Image-2023-03-16-at-9-52-09-AM.jpg',
  'https://i.ibb.co/G7G0Gc8/Whats-App-Image-2023-03-16-at-9-52-09-AM-1.jpg',
  'https://i.ibb.co/fqc5Ymk/Whats-App-Image-2023-03-16-at-9-52-10-AM.jpg',
  'https://i.ibb.co/hd4K91r/Whats-App-Image-2023-03-16-at-9-52-10-AM-1.jpg',
  'https://i.ibb.co/kmqQmvB/Whats-App-Image-2023-03-25-at-9-55-50-AM.jpg',
  'https://i.ibb.co/nPSGsLx/Whats-App-Image-2023-03-25-at-9-55-51-AM.jpg',
  'https://i.ibb.co/PCyp5PD/Whats-App-Image-2023-03-25-at-9-55-51-AM-1.jpg',
  'https://i.ibb.co/frhpyh7/Whats-App-Image-2023-03-25-at-9-55-51-AM-2.jpg',
  'https://i.ibb.co/WW24XTC/Whats-App-Image-2023-03-25-at-9-55-52-AM.jpg',
  'https://i.ibb.co/SdGcSRh/Whats-App-Image-2023-03-25-at-9-55-52-AM-1.jpg',
  'https://i.ibb.co/s5yyFRc/Whats-App-Image-2023-03-25-at-9-55-53-AM.jpg',
  'https://i.ibb.co/r6sLhWh/Whats-App-Image-2023-03-25-at-9-55-53-AM-1.jpg',
  'https://i.ibb.co/c2jQjhp/Whats-App-Image-2023-03-25-at-9-55-54-AM.jpg',
  'https://i.ibb.co/k00x7Yb/Whats-App-Image-2023-03-25-at-9-55-54-AM-1.jpg',
  'https://i.ibb.co/m5D40Xm/Whats-App-Image-2023-03-25-at-9-55-55-AM.jpg',
  'https://i.ibb.co/87vy6Wb/Whats-App-Image-2023-03-25-at-9-55-55-AM-1.jpg',
  'https://i.ibb.co/hKQXsfB/Whats-App-Image-2023-03-25-at-9-55-56-AM.jpg',
  'https://i.ibb.co/WgcPvzq/Whats-App-Image-2023-03-25-at-9-55-56-AM-1.jpg',
  'https://i.ibb.co/GF6qjqB/Whats-App-Image-2023-03-25-at-9-55-57-AM.jpg',
  'https://i.ibb.co/8mZ291z/Whats-App-Image-2023-03-25-at-9-55-57-AM-1.jpg',
  'https://i.ibb.co/5RVH0hT/Whats-App-Image-2023-03-25-at-9-55-57-AM-2.jpg',
  'https://i.ibb.co/fvmXgmf/Whats-App-Image-2023-03-25-at-9-55-58-AM.jpg',
  'https://i.ibb.co/1ZgS8zW/Whats-App-Image-2023-03-25-at-9-55-58-AM-1.jpg',
  'https://i.ibb.co/V2g5y6w/Whats-App-Image-2023-03-25-at-9-57-17-AM.jpg',
  'https://i.ibb.co/4WgR7g8/Whats-App-Image-2023-03-25-at-9-57-18-AM.jpg',
  'https://i.ibb.co/8KPNxQM/Whats-App-Image-2023-03-25-at-9-57-18-AM-1.jpg',
  'https://i.ibb.co/9bkv9L2/Whats-App-Image-2023-03-25-at-9-57-19-AM.jpg',
  'https://i.ibb.co/wKgK4Dp/Whats-App-Image-2023-03-25-at-9-57-19-AM-1.jpg',
  'https://i.ibb.co/5Rk33WJ/Whats-App-Image-2023-03-25-at-9-57-20-AM.jpg',
  'https://i.ibb.co/0VZ6QmR/Whats-App-Image-2023-03-25-at-9-57-20-AM-1.jpg',
  'https://i.ibb.co/1XN6PLW/Whats-App-Image-2023-03-25-at-9-57-21-AM.jpg',
  'https://i.ibb.co/WKJqYLd/Whats-App-Image-2023-03-25-at-9-57-21-AM-1.jpg',
  'https://i.ibb.co/mtNKQ9y/Whats-App-Image-2023-03-25-at-9-57-22-AM.jpg',
  'https://i.ibb.co/tsPTVZF/Whats-App-Image-2023-03-25-at-9-57-22-AM-1.jpg',
  'https://i.ibb.co/q1nLX2b/Whats-App-Image-2023-03-25-at-9-57-23-AM.jpg',
  'https://i.ibb.co/jw5nvwh/Whats-App-Image-2023-03-25-at-9-57-23-AM-1.jpg',
  'https://i.ibb.co/JrKVzh5/Whats-App-Image-2023-03-25-at-9-57-24-AM.jpg',
  'https://i.ibb.co/mG5bvRm/Whats-App-Image-2023-03-25-at-9-57-25-AM.jpg',
  'https://i.ibb.co/V3Pwb3q/Whats-App-Image-2023-03-25-at-9-57-25-AM-1.jpg',
  'https://i.ibb.co/q7GfSgX/Whats-App-Image-2023-03-25-at-9-57-25-AM-2.jpg',
  'https://i.ibb.co/VxJb3Bw/Whats-App-Image-2023-03-25-at-9-57-26-AM.jpg',
  'https://i.ibb.co/DtnzP0c/Whats-App-Image-2023-03-25-at-9-57-26-AM-1.jpg',
  'https://i.ibb.co/tKMCHzX/Whats-App-Image-2023-03-25-at-9-57-27-AM.jpg',
  'https://i.ibb.co/KWZbKsP/Whats-App-Image-2023-03-25-at-9-57-27-AM-1.jpg',
  'https://i.ibb.co/42R4XKn/Whats-App-Image-2023-03-25-at-9-57-28-AM.jpg',
  'https://i.ibb.co/bKpG7jR/Whats-App-Image-2023-03-25-at-9-57-28-AM-1.jpg',
  'https://i.ibb.co/0FCHMND/Whats-App-Image-2023-03-25-at-9-57-28-AM-2.jpg',
  'https://i.ibb.co/Sv145yR/Whats-App-Image-2023-03-25-at-9-57-29-AM.jpg',
  'https://i.ibb.co/jfV15RQ/Whats-App-Image-2023-03-25-at-9-57-30-AM.jpg',
  'https://i.ibb.co/wgTYhk2/Whats-App-Image-2023-03-25-at-9-57-30-AM-1.jpg',
  'https://i.ibb.co/ZcmrBjd/Whats-App-Image-2023-03-25-at-9-57-31-AM.jpg',
  'https://i.ibb.co/ZcmrBjd/Whats-App-Image-2023-03-25-at-9-57-31-AM.jpg',
  'https://i.ibb.co/wSsSPfs/Whats-App-Image-2023-03-25-at-9-57-31-AM-2.jpg',
  'https://i.ibb.co/YDpZjtd/Whats-App-Image-2023-03-25-at-9-57-31-AM-3.jpg'
]

const c8500Images = [
  'https://i.ibb.co/jL13jbB/Whats-App-Image-2023-03-16-at-11-38-32-AM.jpg',
  'https://i.ibb.co/6mC8Jp3/Whats-App-Image-2023-03-16-at-11-38-32-AM-1.jpg',
  'https://i.ibb.co/FB0fDxb/Whats-App-Image-2023-03-17-at-11-13-50-AM.jpg',
  'https://i.ibb.co/gF521T2/Whats-App-Image-2023-03-17-at-11-13-51-AM.jpg',
  'https://i.ibb.co/MVK7Bpv/Whats-App-Image-2023-03-17-at-11-13-52-AM.jpg',
  'https://i.ibb.co/VN9wdDb/Whats-App-Image-2023-03-17-at-11-13-52-AM-1.jpg',
  'https://i.ibb.co/vcs9V9P/Whats-App-Image-2023-03-17-at-11-13-53-AM.jpg',
  'https://i.ibb.co/ZBYZW2M/Whats-App-Image-2023-03-17-at-11-13-53-AM-1.jpg',
  'https://i.ibb.co/Q6VwC8b/Whats-App-Image-2023-03-17-at-11-13-54-AM.jpg',
  'https://i.ibb.co/hWvkdtB/Whats-App-Image-2023-03-17-at-11-13-55-AM.jpg',
  'https://i.ibb.co/PGMXBQR/Whats-App-Image-2023-03-17-at-11-13-56-AM.jpg',
  'https://i.ibb.co/8zhL85X/Whats-App-Image-2023-03-17-at-11-13-56-AM-1.jpg',
  'https://i.ibb.co/LRd77Y5/Whats-App-Image-2023-03-17-at-11-13-57-AM.jpg',
  'https://i.ibb.co/7CvzQ35/Whats-App-Image-2023-03-17-at-11-13-57-AM-1.jpg',
  'https://i.ibb.co/phpHmJ0/Whats-App-Image-2023-03-17-at-11-13-58-AM.jpg',
  'https://i.ibb.co/4W67sFK/Whats-App-Image-2023-03-17-at-11-13-59-AM.jpg',
  'https://i.ibb.co/kBq6TgV/Whats-App-Image-2023-03-17-at-11-13-59-AM-1.jpg',
  'https://i.ibb.co/7J67CzM/Whats-App-Image-2023-03-17-at-11-14-00-AM.jpg',
  'https://i.ibb.co/kBdYcM4/Whats-App-Image-2023-03-17-at-11-14-01-AM.jpg',
  'https://i.ibb.co/4TxLLZZ/Whats-App-Image-2023-03-17-at-11-14-02-AM.jpg',
  'https://i.ibb.co/Ldr4Pyq/Whats-App-Image-2023-03-17-at-11-14-03-AM.jpg',
  'https://i.ibb.co/x67BvWp/Whats-App-Image-2023-03-17-at-11-14-03-AM-1.jpg',
  'https://i.ibb.co/QnFC98Z/Whats-App-Image-2023-03-17-at-11-14-04-AM.jpg',
  'https://i.ibb.co/7vpjbCB/Whats-App-Image-2023-03-17-at-11-14-04-AM-1.jpg',
  'https://i.ibb.co/cYC6bKc/Whats-App-Image-2023-03-17-at-11-14-05-AM.jpg',
  'https://i.ibb.co/ZL3z9Hy/Whats-App-Image-2023-03-17-at-11-14-05-AM-1.jpg',
  'https://i.ibb.co/6BcJ1HC/Whats-App-Image-2023-03-17-at-11-14-06-AM.jpg',
  'https://i.ibb.co/yW7XCqx/Whats-App-Image-2023-03-17-at-11-14-09-AM.jpg',
  'https://i.ibb.co/WFbFKDK/Whats-App-Image-2023-03-17-at-11-14-09-AM-1.jpg',
  'https://i.ibb.co/X3DYKK2/Whats-App-Image-2023-03-17-at-11-14-10-AM.jpg',
  'https://i.ibb.co/kxsDQpS/Whats-App-Image-2023-03-17-at-11-14-11-AM.jpg',
  'https://i.ibb.co/McMC1hw/Whats-App-Image-2023-03-17-at-11-14-11-AM-1.jpg',
  'https://i.ibb.co/n0tDVh7/Whats-App-Image-2023-03-17-at-11-14-12-AM.jpg',
  'https://i.ibb.co/jf1HKyx/Whats-App-Image-2023-03-17-at-11-14-13-AM.jpg',
  'https://i.ibb.co/2WsdzRN/Whats-App-Image-2023-03-17-at-11-14-13-AM-1.jpg',
  'https://i.ibb.co/ZN6bhZ9/Whats-App-Image-2023-03-17-at-11-14-14-AM.jpg',
  'https://i.ibb.co/YXqgp6d/Whats-App-Image-2023-03-17-at-11-14-15-AM.jpg',
  'https://i.ibb.co/HxrwFhp/Whats-App-Image-2023-03-17-at-11-14-15-AM-1.jpg',
  'https://i.ibb.co/7YqPmKv/Whats-App-Image-2023-03-17-at-11-14-16-AM.jpg',
  'https://i.ibb.co/x164RdG/Whats-App-Image-2023-03-17-at-11-14-16-AM-1.jpg',
  'https://i.ibb.co/Zmv3mKB/Whats-App-Image-2023-03-17-at-11-14-17-AM.jpg',
  'https://i.ibb.co/9TP2B6J/Whats-App-Image-2023-03-17-at-11-14-17-AM-1.jpg',
  'https://i.ibb.co/xs4HCWL/Whats-App-Image-2023-03-17-at-11-14-18-AM.jpg',
  'https://i.ibb.co/2sWb9gh/Whats-App-Image-2023-03-17-at-11-14-18-AM-1.jpg',
  'https://i.ibb.co/30cwCmB/Whats-App-Image-2023-03-17-at-11-14-19-AM.jpg',
  'https://i.ibb.co/CvmpGxV/Whats-App-Image-2023-03-17-at-11-14-19-AM-1.jpg',
  'https://i.ibb.co/WWrJkPF/Whats-App-Image-2023-03-17-at-11-14-20-AM.jpg',
  'https://i.ibb.co/x5Mwqnj/Whats-App-Image-2023-03-17-at-11-14-21-AM.jpg',
  'https://i.ibb.co/JmnVSdZ/Whats-App-Image-2023-03-18-at-9-34-09-AM.jpg',
  'https://i.ibb.co/RgDDCpZ/Whats-App-Image-2023-03-18-at-9-34-17-AM.jpg',
  'https://i.ibb.co/5G2KgW8/Whats-App-Image-2023-03-18-at-9-34-47-AM.jpg',
  'https://i.ibb.co/X8Wp39d/Whats-App-Image-2023-03-18-at-9-34-51-AM.jpg',
  'https://i.ibb.co/XLktb6H/Whats-App-Image-2023-03-18-at-9-34-54-AM.jpg',
  'https://i.ibb.co/h2hfY6W/Whats-App-Image-2023-03-18-at-9-35-11-AM.jpg',
  'https://i.ibb.co/y837cqj/Whats-App-Image-2023-03-18-at-9-35-16-AM.jpg',
  'https://i.ibb.co/3mKwvd7/Whats-App-Image-2023-03-18-at-9-35-19-AM.jpg',
  'https://i.ibb.co/JRq2K6W/Whats-App-Image-2023-03-18-at-9-35-20-AM.jpg',
  'https://i.ibb.co/4N0Cbjh/Whats-App-Image-2023-03-18-at-9-35-23-AM.jpg',
  'https://i.ibb.co/0XZmGVY/Whats-App-Image-2023-03-18-at-9-35-26-AM.jpg',
  'https://i.ibb.co/kg2b3Ph/Whats-App-Image-2023-03-18-at-9-35-27-AM.jpg',
  'https://i.ibb.co/xCPzDf4/Whats-App-Image-2023-03-18-at-9-35-29-AM.jpg',
  'https://i.ibb.co/v422ptb/Whats-App-Image-2023-03-18-at-9-35-35-AM.jpg',
  'https://i.ibb.co/qdtBm8g/Whats-App-Image-2023-03-18-at-9-35-36-AM.jpg',
  'https://i.ibb.co/0jfLsFj/Whats-App-Image-2023-03-18-at-9-35-37-AM.jpg',
  'https://i.ibb.co/DfFqtLj/Whats-App-Image-2023-03-18-at-9-35-40-AM.jpg',
  'https://i.ibb.co/CvW22K2/Whats-App-Image-2023-03-18-at-9-35-40-AM-1.jpg',
  'https://i.ibb.co/pJLG6Nb/Whats-App-Image-2023-03-18-at-9-35-41-AM.jpg',
  'https://i.ibb.co/2WdMs0R/Whats-App-Image-2023-03-18-at-9-35-41-AM-1.jpg',
  'https://i.ibb.co/DbTFVVn/Whats-App-Image-2023-03-18-at-9-35-42-AM.jpg',
  'https://i.ibb.co/0XGdkQS/Whats-App-Image-2023-03-18-at-9-35-43-AM.jpg'
]

const c9000Images = [
  'https://i.ibb.co/SRV5zZ2/Whats-App-Image-2023-03-20-at-10-30-53-AM.jpg',
  'https://i.ibb.co/TcFQ4T9/Whats-App-Image-2023-03-20-at-10-30-53-AM-1.jpg',
  'https://i.ibb.co/JpqCc9B/Whats-App-Image-2023-03-20-at-10-30-54-AM.jpg',
  'https://i.ibb.co/pdPmtX1/Whats-App-Image-2023-03-20-at-10-30-54-AM-1.jpg',
  'https://i.ibb.co/qjHzpy7/Whats-App-Image-2023-03-20-at-10-30-55-AM.jpg',
  'https://i.ibb.co/xsfMtWh/Whats-App-Image-2023-03-20-at-10-30-55-AM-1.jpg',
  'https://i.ibb.co/bRWG3DH/Whats-App-Image-2023-03-20-at-10-30-56-AM.jpg',
  'https://i.ibb.co/bbbBvC4/Whats-App-Image-2023-03-20-at-10-30-56-AM-1.jpg',
  'https://i.ibb.co/xDBpDBs/Whats-App-Image-2023-03-20-at-10-30-57-AM.jpg',
  'https://i.ibb.co/56f1K4S/Whats-App-Image-2023-03-20-at-10-30-58-AM.jpg',
  'https://i.ibb.co/QrzKN1B/Whats-App-Image-2023-03-20-at-10-30-58-AM-1.jpg',
  'https://i.ibb.co/kycDv8Y/Whats-App-Image-2023-03-20-at-10-30-59-AM.jpg',
  'https://i.ibb.co/9VCpPWy/Whats-App-Image-2023-03-20-at-10-30-59-AM-1.jpg',
  'https://i.ibb.co/1Jf3fQw/Whats-App-Image-2023-03-20-at-10-31-00-AM.jpg',
  'https://i.ibb.co/nbpm76V/Whats-App-Image-2023-03-20-at-10-31-01-AM.jpg',
  'https://i.ibb.co/4R2f2Dt/Whats-App-Image-2023-03-20-at-10-31-01-AM-1.jpg',
  'https://i.ibb.co/gZmsHm0/Whats-App-Image-2023-03-20-at-10-31-02-AM.jpg',
  'https://i.ibb.co/ZL5srCc/Whats-App-Image-2023-03-20-at-10-31-02-AM-1.jpg',
  'https://i.ibb.co/F5JM8t5/Whats-App-Image-2023-03-20-at-10-31-03-AM.jpg',
  'https://i.ibb.co/k4C5JPd/Whats-App-Image-2023-03-20-at-10-31-04-AM.jpg',
  'https://i.ibb.co/kHhNnQ1/Whats-App-Image-2023-03-20-at-10-31-04-AM-1.jpg',
  'https://i.ibb.co/z4t9f2b/Whats-App-Image-2023-03-20-at-10-31-05-AM.jpg',
  'https://i.ibb.co/N7VdQbL/Whats-App-Image-2023-03-20-at-10-31-05-AM-1.jpg',
  'https://i.ibb.co/MR1JxTJ/Whats-App-Image-2023-03-20-at-10-31-06-AM.jpg',
  'https://i.ibb.co/wd01PnD/Whats-App-Image-2023-03-20-at-10-31-07-AM.jpg',
  'https://i.ibb.co/51Gr8JG/Whats-App-Image-2023-03-20-at-10-31-07-AM-1.jpg',
  'https://i.ibb.co/2NvJ2mb/Whats-App-Image-2023-03-20-at-10-31-08-AM.jpg',
  'https://i.ibb.co/DYvJ1dj/Whats-App-Image-2023-03-20-at-10-31-09-AM.jpg',
  'https://i.ibb.co/QQFvVZG/Whats-App-Image-2023-03-20-at-10-31-10-AM.jpg',
  'https://i.ibb.co/mbxkmR9/Whats-App-Image-2023-03-20-at-10-31-10-AM-1.jpg',
  'https://i.ibb.co/km34V5m/Whats-App-Image-2023-03-20-at-10-31-11-AM.jpg',
  'https://i.ibb.co/0cRRZ0j/Whats-App-Image-2023-03-20-at-10-31-11-AM-1.jpg',
  'https://i.ibb.co/G54qmBR/Whats-App-Image-2023-03-20-at-10-31-12-AM.jpg',
  'https://i.ibb.co/0qw3m5Q/Whats-App-Image-2023-03-20-at-10-31-13-AM.jpg',
  'https://i.ibb.co/3TnKZrZ/Whats-App-Image-2023-03-20-at-10-31-13-AM-1.jpg',
  'https://i.ibb.co/8Mm69h5/Whats-App-Image-2023-03-20-at-10-31-14-AM.jpg',
  'https://i.ibb.co/pf4tzGs/Whats-App-Image-2023-03-20-at-10-31-14-AM-1.jpg',
  'https://i.ibb.co/xC94cBp/Whats-App-Image-2023-03-20-at-10-31-15-AM.jpg',
  'https://i.ibb.co/TPdzZCF/Whats-App-Image-2023-03-20-at-10-31-15-AM-1.jpg', 
  'https://i.ibb.co/1Rt36Vq/Whats-App-Image-2023-03-20-at-10-31-16-AM.jpg', 
  'https://i.ibb.co/19RFh4Y/Whats-App-Image-2023-03-20-at-10-31-16-AM-1.jpg', 
  'https://i.ibb.co/XZ7vB1L/Whats-App-Image-2023-03-20-at-10-31-17-AM.jpg', 
  'https://i.ibb.co/p0Sz1x8/Whats-App-Image-2023-03-20-at-10-31-18-AM.jpg', 
  'https://i.ibb.co/hfrfpb0/Whats-App-Image-2023-03-20-at-10-31-18-AM-1.jpg', 
  'https://i.ibb.co/K9SD1RW/Whats-App-Image-2023-03-20-at-10-31-19-AM.jpg', 
  'https://i.ibb.co/gdP8xWW/Whats-App-Image-2023-03-20-at-10-31-19-AM-1.jpg'
]

const c10000Images = [
  'https://i.ibb.co/dM67K5w/Whats-App-Image-2023-03-21-at-10-26-08-AM-1.jpg',
  'https://i.ibb.co/RjYF4dk/Whats-App-Image-2023-03-21-at-10-26-09-AM-2.jpg',
  'https://i.ibb.co/PcFTcjX/Whats-App-Image-2023-03-21-at-10-26-09-AM-3.jpg',
  'https://i.ibb.co/gS0Rc9D/Whats-App-Image-2023-03-21-at-10-26-10-AM-1.jpg',
  'https://i.ibb.co/tspjwqn/Whats-App-Image-2023-03-21-at-10-26-11-AM-1.jpg',
  'https://i.ibb.co/qkFmJzW/Whats-App-Image-2023-03-21-at-10-26-12-AM-1.jpg',
  'https://i.ibb.co/85hQv4j/Whats-App-Image-2023-03-21-at-10-26-12-AM-2.jpg',
  'https://i.ibb.co/4RRr0nT/Whats-App-Image-2023-03-21-at-10-26-13-AM.jpg',
  'https://i.ibb.co/2dZ1C86/Whats-App-Image-2023-03-21-at-10-26-14-AM.jpg',
  'https://i.ibb.co/wgXVD8K/Whats-App-Image-2023-03-21-at-10-26-14-AM-1.jpg',
  'https://i.ibb.co/4P2J8R2/Whats-App-Image-2023-03-21-at-10-26-15-AM.jpg',
  'https://i.ibb.co/HG6brVc/Whats-App-Image-2023-03-21-at-10-26-16-AM.jpg',
  'https://i.ibb.co/JCcdFd9/Whats-App-Image-2023-03-21-at-10-26-16-AM-1.jpg',
  'https://i.ibb.co/sCX2X9N/Whats-App-Image-2023-03-21-at-10-26-17-AM.jpg',
  'https://i.ibb.co/PGNHz9x/Whats-App-Image-2023-03-21-at-10-26-18-AM.jpg',
  'https://i.ibb.co/zrNkN19/Whats-App-Image-2023-03-21-at-10-26-19-AM.jpg',
  'https://i.ibb.co/Vw7fPcR/Whats-App-Image-2023-03-21-at-10-26-19-AM-1.jpg',
  'https://i.ibb.co/qRQ8t19/Whats-App-Image-2023-03-21-at-10-26-20-AM.jpg',
  'https://i.ibb.co/vwQm9s7/Whats-App-Image-2023-03-21-at-10-26-20-AM-1.jpg',
  'https://i.ibb.co/4J6y7LH/Whats-App-Image-2023-03-21-at-10-26-21-AM.jpg',
  'https://i.ibb.co/FDYSp8x/Whats-App-Image-2023-03-21-at-10-26-21-AM-1.jpg',
  'https://i.ibb.co/R0b2zsF/Whats-App-Image-2023-03-21-at-10-26-22-AM.jpg',
  'https://i.ibb.co/TBsTBfS/Whats-App-Image-2023-03-21-at-10-26-22-AM-1.jpg',
  'https://i.ibb.co/whx1X5n/Whats-App-Image-2023-03-21-at-10-26-23-AM.jpg',
  'https://i.ibb.co/Hhr19kY/Whats-App-Image-2023-03-21-at-10-26-23-AM-1.jpg',
  'https://i.ibb.co/c3Rh4NT/Whats-App-Image-2023-03-21-at-10-26-24-AM.jpg',
  'https://i.ibb.co/vdrDRbr/Whats-App-Image-2023-03-24-at-5-02-13-PM.jpg'
]

const c11000Images = [
  'https://i.ibb.co/RjyTd7Z/Whats-App-Image-2023-03-22-at-9-36-45-AM.jpg',
  'https://i.ibb.co/tZyKynT/Whats-App-Image-2023-03-22-at-9-36-58-AM.jpg',
  'https://i.ibb.co/FJZ810k/Whats-App-Image-2023-03-22-at-9-37-14-AM.jpg',
  'https://i.ibb.co/whh6LSv/Whats-App-Image-2023-03-22-at-9-37-17-AM.jpg',
  'https://i.ibb.co/mJ6hmS8/Whats-App-Image-2023-03-22-at-9-37-32-AM.jpg',
  'https://i.ibb.co/3MDqttF/Whats-App-Image-2023-03-22-at-9-37-34-AM.jpg',
  'https://i.ibb.co/RShqKy0/Whats-App-Image-2023-03-22-at-9-37-35-AM.jpg',
  'https://i.ibb.co/RNbTg4L/Whats-App-Image-2023-03-22-at-9-37-38-AM.jpg',
  'https://i.ibb.co/LNZ944t/Whats-App-Image-2023-03-22-at-9-37-39-AM.jpg',
  'https://i.ibb.co/M6Zd8Kp/Whats-App-Image-2023-03-22-at-9-37-41-AM.jpg',
  'https://i.ibb.co/K23BGp2/Whats-App-Image-2023-03-22-at-9-37-42-AM.jpg',
  'https://i.ibb.co/yfXXQzb/Whats-App-Image-2023-03-22-at-9-37-42-AM-1.jpg',
  'https://i.ibb.co/rsGFXCB/Whats-App-Image-2023-03-22-at-9-37-43-AM.jpg',
  'https://i.ibb.co/3dDvHzN/Whats-App-Image-2023-03-22-at-9-37-43-AM-1.jpg',
  'https://i.ibb.co/1zz1HpQ/Whats-App-Image-2023-03-22-at-9-37-44-AM.jpg',
  'https://i.ibb.co/zFGBkkV/Whats-App-Image-2023-03-22-at-9-37-44-AM-1.jpg',
  'https://i.ibb.co/MfGmKpV/Whats-App-Image-2023-03-22-at-9-37-45-AM.jpg'
];

const c12000Images = [
  'https://i.ibb.co/FJHqLSm/myImage1.jpg',
  'https://i.ibb.co/Y7qp384/myImage2.jpg',
  'https://i.ibb.co/dj50WD1/myImage3.jpg',
  'https://i.ibb.co/yBQHGm9/myImage4.jpg',
  'https://i.ibb.co/BcYCTmZ/myImage5.jpg',
  'https://i.ibb.co/c338MVw/myImage6.jpg',
  'https://i.ibb.co/2KRy3Hh/myImage7.jpg',
  'https://i.ibb.co/qdMRgZq/myImage8.jpg',
  'https://i.ibb.co/ZKGTHC7/myImage9.jpg',
  'https://i.ibb.co/k0f2TJm/my-Image10.jpg',
  'https://i.ibb.co/kgKxSFQ/my-Image11.jpg',
  'https://i.ibb.co/DKGMKgG/my-Image12.jpg',
  'https://i.ibb.co/dphbw9M/my-Image13.jpg',
  'https://i.ibb.co/BCnqCyW/my-Image14.jpg',
  'https://i.ibb.co/0yz9XPv/my-Image15.jpg',
  'https://i.ibb.co/KDQSZF5/my-Image16.jpg',
  'https://i.ibb.co/g9ZvpVx/my-Image17.jpg',
  'https://i.ibb.co/xhqfZLy/my-Image18.jpg',
  'https://i.ibb.co/VjvhX0b/my-Image19.jpg',
  'https://i.ibb.co/v1Nbzbp/my-Image20.jpg',
  'https://i.ibb.co/QDdry4Y/my-Image21.jpg',
  'https://i.ibb.co/5BbTTgt/my-Image22.jpg',
  'https://i.ibb.co/Nt4N28k/my-Image23.jpg',
  'https://i.ibb.co/Rbr0NHQ/my-Image24.jpg',
  'https://i.ibb.co/PYtZkP6/my-Image25.jpg',
  'https://i.ibb.co/0tr1MKk/my-Image26.jpg',
  'https://i.ibb.co/h9Dg6bL/my-Image27.jpg',
  'https://i.ibb.co/jMPW4zz/my-Image28.jpg',
  'https://i.ibb.co/hYkzKzh/my-Image29.jpg',
  'https://i.ibb.co/SBVBGq6/my-Image30.jpg',
  'https://i.ibb.co/br9CpjG/my-Image31.jpg',
  'https://i.ibb.co/wc7Bg9m/my-Image32.jpg',
  'https://i.ibb.co/wzk77Fr/my-Image33.jpg'
];

function isPresent(src) {
  for (let i = 0; i < addToCartList.length; ++i) {
    if (addToCartList[i].imgSrc === src) {
      return addToCartList[i].toBuy;
    }
  }
  return false;
}

function addToDom(list, addTo, insertCost, delCost, width, height) {
  addTo.innerHTML = '';
  addTo.style.width = '100%';
  addTo.style.height = 'auto';
  addTo.style.display = 'flex';
  addTo.style.flexWrap = 'wrap';
  addTo.style.alignItems = 'center';
  addTo.style.justifyContent = 'space-between';
  addTo.style.textAlign = 'center';

  for (let i = 0; i < list.length; ++i) {
    const div = document.createElement('div');
    div.style.marginBottom = '10px';
    div.style.marginTop = '10px';
    div.style.width = '16%';
    div.style.height = 'auto';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.backgroundColor = 'white';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'space-between';
    div.style.boxShadow = '0px 0px 5px white';

    const img = document.createElement('img');
    img.src = list[i];
    img.id = 'img';
    img.style.width = width;
    img.style.height = height;

    img.addEventListener('click', () => {
      const src = list[i];
      window.open(src, '_blank');
    });

    const costDiv = document.createElement('div');
    costDiv.style.width = '100%';
    costDiv.style.height = 'auto';
    costDiv.style.display = 'flex';
    // costDiv.style.justifyContent = 'space-evenly';

    const c1 = document.createElement('h2');
    c1.innerHTML = `₹${insertCost}`;
    c1.style.marginLeft = '10px';
    const c2 = document.createElement('span');
    c2.innerHTML = `₹${delCost}`;
    c2.style.marginTop = '10px';
    c2.style.textDecoration = 'line-through';

    const btns = document.createElement('div');
    btns.style.marginBottom = '10px';
    btns.style.width = '100%';
    btns.style.height = 'auto';
    btns.style.display = 'flex';
    btns.style.justifyContent = 'space-between';
    btns.style.alignItems = 'center';

    const b1 = document.createElement('button');
    b1.style.marginLeft = '10px';
    b1.setAttribute('class', 'btn btn-primary');
    b1.id = 'buyNow';
    b1.setAttribute('type', 'button');
    b1.textContent = 'Buy Now';

    b1.addEventListener('click', () => {
      imgSrc = list[i];
      imgInsertCost = insertCost;
    });

    const b2 = document.createElement('button');

    if (isPresent(list[i]) === false) {
      b2.style.marginRight = '10px';
      b2.setAttribute('class', 'btn btn-primary');
      b2.id = 'addToCart';
      b2.setAttribute('type', 'button');
      b2.textContent = 'Add To Cart';
    }

    else {
      b2.style.marginRight = '10px';
      b2.setAttribute('class', 'btn btn-danger');
      b2.id = 'addToCart';
      b2.setAttribute('type', 'button');
      b2.textContent = 'remove';
    }

    b2.addEventListener('click', () => {
      imgSrc = list[i];
      imgInsertCost = insertCost;
      imgDelCost = delCost;
    });

    btns.appendChild(b1);
    btns.appendChild(b2);

    costDiv.appendChild(c1);
    costDiv.appendChild(c2);

    div.appendChild(img);
    div.appendChild(costDiv);
    div.appendChild(btns);

    //media queries
    function sizeChange() {
      let size = window.outerWidth;
      if (size < 768) {
        // If the window width is less than 767px, stack elements vertically and center them
        addTo.style.flexDirection = 'column';
        addTo.style.justifyContent = 'center';
        addTo.style.alignItems = 'center';
        addTo.style.textAlign = 'center';
        div.style.width = '90%';
        div.style.height = 'auto';
        img.style.width = '100%';
        img.style.height = 'auto';
      }

      else if (size < 1024) {
        addTo.style.display = 'flex';
        addTo.style.flexWrap = 'wrap';
        addTo.style.flexDirection = 'row';
        addTo.style.justifyContent = 'space-between';
        addTo.style.alignItems = 'center';
        div.style.width = '32%';
        div.style.height = 'auto';
      }

      else if (size < 1440) {
        addTo.style.display = 'flex';
        addTo.style.flexWrap = 'wrap';
        addTo.style.flexDirection = 'row';
        addTo.style.justifyContent = 'space-between';
        addTo.style.alignItems = 'center';
        div.style.width = '24%';
        div.style.height = 'auto';
      }

      else {
        // If the window width is greater than or equal to 767px, display elements side by side and center them
        addTo.style.display = 'flex';
        addTo.style.flexWrap = 'wrap';
        addTo.style.flexDirection = 'row';
        addTo.style.justifyContent = 'space-between';
        addTo.style.alignItems = 'center';
        div.style.width = '16%';
        div.style.height = 'auto';
      }
    }

    window.addEventListener('resize', function (event) {
      sizeChange();
    });

    sizeChange();

    addTo.appendChild(div);
  }
}

function openWhatsApp(imageId, imgInsertCost) {
  var phoneNumber = '9030903058'; // Replace with your phone number
  // var imageSrc = document.getElementById(imageId).src;
  var imageSrc = imageId;
  var whatsappMessage = `Hi, I would like to buy this product which cost: ${imgInsertCost}. Please see the product here: `;
  var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(whatsappMessage) + encodeURIComponent('\n', '\n') + encodeURIComponent(imageSrc);
  window.open(whatsappUrl, '_blank');
}

function openWhatsAppList(imageIds) {
  var phoneNumber = '9030903058'; // Replace with your phone number
  var whatsappMessage = 'Hi, I would like to buy these products:\n';
  for (var i = 0; i < imageIds.length; i++) {
    if (imageIds[i].toBuy === false) continue;
    var imageSrc = imageIds[i].imgSrc;
    var cost = imageIds[i].imgInsertCost;
    whatsappMessage += '- ' + imageSrc + ' (Cost: ' + cost + ')\n';
  }
  var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(whatsappMessage);
  window.open(whatsappUrl, '_blank');
}

function isEmpty() {
  for (let i = 0; i < addToCartList.length; ++i) {
    if (addToCartList[i].toBuy === true) {
      return false;
    }
  }
  return true;
}

function check(src) {
  for (let i = 0; i < addToCartList.length; ++i) {
    if (addToCartList[i].imgSrc === src) {
      return true;
    }
  }
  return false;
}

function showNotification(text) {
  window.alert(text);
}

function renderCart() {
  const cart = document.querySelector('.modal-body');
  if (isEmpty() === true) {
    cart.innerHTML = '';
    cart.style.backgroundColor = 'black';
    const text = document.createElement('h1');
    text.innerHTML = 'Your Cart Is Empty Please Add Items...';
    text.style.color = 'white';
    cart.appendChild(text);
  }
  else {
    cart.innerHTML = '';
    cart.style.width = '100%';
    cart.style.height = 'auto';
    cart.style.display = 'flex';
    cart.style.flexDirection = 'column';
    cart.style.alignItems = 'center';
    cart.style.justifyContent = 'space-between';
    cart.style.textAlign = 'center';
    cart.style.backgroundColor = 'black';
    for (let i = 0; i < addToCartList.length; ++i) {
      if (addToCartList[i].toBuy === true) {
        const div = document.createElement('div');
        div.id = 'div';
        div.style.marginTop = '10px';
        div.style.marginBottom = '10px';
        div.style.width = '90%';
        div.style.height = 'auto';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.backgroundColor = 'white';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'space-between';
        div.style.boxShadow = '0px 0px 5px white';

        const img = document.createElement('img');
        img.src = addToCartList[i].imgSrc;
        img.id = 'img';
        img.style.width = '100%';
        img.style.height = '100%';

        img.addEventListener('click', function () {
          var imgSrc = addToCartList[i].imgSrc;
          window.open(imgSrc, '_blank');
        });


        const costDiv = document.createElement('div');
        costDiv.style.width = '100%';
        costDiv.style.height = 'auto';
        costDiv.style.display = 'flex';

        const c1 = document.createElement('h2');
        c1.innerHTML = `₹${addToCartList[i].imgInsertCost}`;
        c1.style.marginLeft = '10px';

        const c2 = document.createElement('span');
        c2.innerHTML = `₹${addToCartList[i].imgDelCost}`;
        c2.style.marginTop = '10px';
        c2.style.textDecoration = 'line-through';
        costDiv.appendChild(c1);
        costDiv.appendChild(c2);

        const btns = document.createElement('div');
        btns.style.marginTop = '10px';
        btns.style.marginBottom = '10px';
        btns.style.width = '100%';
        btns.style.height = 'auto';
        btns.style.display = 'flex';
        btns.style.justifyContent = 'space-between';
        btns.style.alignItems = 'center';

        const b1 = document.createElement('button');
        b1.style.marginLeft = '10px';
        b1.setAttribute('class', 'btn btn-primary');
        b1.id = 'buyNow';
        b1.setAttribute('type', 'button');
        b1.textContent = 'Buy Now';

        const b2 = document.createElement('button');
        b2.style.marginRight = '10px';
        b2.setAttribute('class', 'btn btn-danger');
        b2.id = 'remove';
        b2.setAttribute('type', 'button');
        b2.textContent = 'remove';

        // Update the addToCartList array and store it in local storage
        b2.addEventListener('click', () => {
          addToCartList[i].toBuy = false;
          showNotification('Your item removed from cart');
          localStorage.setItem('addToCartList', JSON.stringify(addToCartList));
          initialize();
          renderCart();
        });

        btns.appendChild(b1);
        btns.appendChild(b2);
        div.appendChild(img);
        div.appendChild(costDiv);
        div.appendChild(btns);

        cart.appendChild(div);

        localStorage.setItem('addToCartList', JSON.stringify(addToCartList));
      }
    }
  }
}
const submit = document.getElementById('submit');

function handleClickListner(e) {
  const target = e.target;

  if (target.id === 'arrow') {
    const element = document.querySelector('.seven');
    window.scroll({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }

  if (target.id === 'submit') {
    showNotification('Thanks for your feedback!');
  }

  if (target.id === 'buyNow') {
    openWhatsApp(imgSrc, imgInsertCost);
  }

  if (target.id === 'addToCart') {
    for (let i = 0; i < addToCartList.length; ++i) {
      if (addToCartList[i].imgSrc === imgSrc) {
        addToCartList[i].toBuy = !addToCartList[i].toBuy;
        if (addToCartList[i].toBuy === true) {
          showNotification('item added to bag!');
        }
        else {
          showNotification('item removed from bag');
        }
        localStorage.setItem('addToCartList', JSON.stringify(addToCartList));
        initialize();
        return;
      }
    }

    if (check(imgSrc) === false) {
      const item = {
        imgSrc: imgSrc,
        'imgInsertCost': imgInsertCost,
        'imgDelCost': imgDelCost,
        toBuy: true
      }
      addToCartList.push(item);
    }

    localStorage.setItem('cartItems', JSON.stringify(addToCartList));
    initialize();
    showNotification('item added to cart successfully!');
  }

  if (target.id === 'cartIcon1' || target.id === 'cartIcon2') {
    renderCart();
  }

  if (target.id === 'buyAll') {
    if (isEmpty() === true) {
      showNotification('No items available to buy!');
      return;
    }
    openWhatsAppList(addToCartList);
  }

}

document.addEventListener('click', handleClickListner);

// Get a reference to the dropdown menu and the target divs
var dropdownMenu = document.querySelector('.dropdown-menu');
var targetDivs = [
  document.querySelector('.seven'),
  document.querySelector('.eight'),
  document.querySelector('.nine'),
  document.querySelector('.ten'),
  document.querySelector('.eleven'),
  document.querySelector('.twelve'),

];
var navbarHeight = document.querySelector('.navbar').offsetHeight;

// Add an event listener to each dropdown link
dropdownMenu.addEventListener('click', function (event) {
  var priceRange = event.target.textContent;
  var scrollPos;

  switch (priceRange) {
    case 'Less than 7000':
      scrollPos = targetDivs[0].offsetTop - navbarHeight;
      break;
    case '7000-8000':
      scrollPos = targetDivs[1].offsetTop - navbarHeight;
      break;
    case '8000-9000':
      scrollPos = targetDivs[2].offsetTop - navbarHeight;
      break;
    case '9000-10000':
      scrollPos = targetDivs[3].offsetTop - navbarHeight;
      break;
    case '10000-11000':
      scrollPos = targetDivs[4].offsetTop - navbarHeight;
      break;
    case 'More than 11000':
      scrollPos = targetDivs[5].offsetTop - navbarHeight;
      break;
    default:
      return;
  }

  window.scrollTo({ top: scrollPos, behavior: 'smooth' });
});

const topButton = document.getElementById('arrow');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    topButton.classList.remove('hidden');
  } else {
    topButton.classList.add('hidden');
  }
});

//add styling to footer
const footer = document.querySelector('.footer-div3');

for (let i = 0; i < 24; ++i) {
  const div = document.createElement('div');
  div.style.width = '100%';
  div.style.height = `${i}px`;
  div.style.marginBottom = `${24 - i}px`;
  div.style.backgroundColor = 'black';
  footer.appendChild(div);
}

const footerLink = document.querySelector('.company-name');

  footerLink.addEventListener('click', function(event) {
    event.preventDefault(); // prevent default link behavior
    const footer = document.querySelector('#footer');
    footer.scrollIntoView({ behavior: 'smooth' }); // scroll to footer
  });

function initialize() {
  addToDom(c7000Images, c7000, 6999, 7999, '100%', '350px');
  addToDom(c8000Images, c8000, 7999, 8999, '100%', '350px');
  addToDom(c8500Images, c8500, 8499, 9499, '100%', '350px');
  addToDom(c9000Images, c9000, 8999, 9999, '100%', '350px');
  addToDom(c10000Images, c10000, 10999, 11999, '100%', '350px');
  addToDom(c12000Images, c12000, 11999, 12999, '100%', '350px');
}

initialize();

