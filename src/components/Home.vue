<template>
<!-- create a nav bar for nft website in vue with links to: Twitter Discord 
Etherscan Opensea, Home Raffle, Bridge Game, Stake Docs -->
<html lang=""><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><title>StackedToadz</title><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><style data-href="https://fonts.googleapis.com/css2?family=VT323&amp;display=swap">@font-face {
      font-family: 'VT323';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/vt323/v12/pxiKyp0ihIEF2hsb.woff) format('woff')
    }

    @font-face {
      font-family: 'VT323';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/vt323/v12/pxiKyp0ihIEF2isQFJXUdVNFKPY.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB
    }

    @font-face {
      font-family: 'VT323';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/vt323/v12/pxiKyp0ihIEF2isRFJXUdVNFKPY.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF
    }

    @font-face {
      font-family: 'VT323';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/vt323/v12/pxiKyp0ihIEF2isfFJXUdVNF.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
    }</style><style id="_goober">@keyframes go2264125279 {
      from {
        transform: scale(0) rotate(45deg);
        opacity: 0;
      }

      to {
        transform: scale(1) rotate(45deg);
        opacity: 1;
      }
    }

    @keyframes go3020080000 {
      from {
        transform: scale(0);
        opacity: 0;
      }

      to {
        transform: scale(1);
        opacity: 1;
      }
    }

    @keyframes go463499852 {
      from {
        transform: scale(0) rotate(90deg);
        opacity: 0;
      }

      to {
        transform: scale(1) rotate(90deg);
        opacity: 1;
      }
    }

    @keyframes go1268368563 {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    @keyframes go1310225428 {
      from {
        transform: scale(0) rotate(45deg);
        opacity: 0;
      }

      to {
        transform: scale(1) rotate(45deg);
        opacity: 1;
      }
    }

    @keyframes go651618207 {
      0% {
        height: 0;
        width: 0;
        opacity: 0;
      }

      40% {
        height: 0;
        width: 6px;
        opacity: 1;
      }

      100% {
        opacity: 1;
        height: 10px;
      }
    }

    @keyframes go901347462 {
      from {
        transform: scale(0.6);
        opacity: 0.4;
      }

      to {
        transform: scale(1);
        opacity: 1;
      }
    }

    .go4109123758 {
      z-index: 9999;
    }

    .go4109123758>* {
      pointer-events: auto;
    }</style><script src="https://unpkg.com/web3@1.2.11/dist/web3.min.js"></script><script src="https://unpkg.com/web3modal@1.9.0/dist/index.js"></script><script src="https://unpkg.com/@metamask/detect-provider/dist/detect-provider.min.js"></script><script src="https://unpkg.com/@walletconnect/web3-provider@1.6.6/dist/umd/index.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script><link href="/css/app.ba1148b0.css" rel="preload" as="style"><link href="/js/app.694038e2.js" rel="preload" as="script"><link href="/js/chunk-vendors.580eaa53.js" rel="preload" as="script"><link href="/css/app.ba1148b0.css" rel="stylesheet"><style type="text/css">.toasted{padding:0 20px}.toasted.rounded{border-radius:24px}.toasted .primary,.toasted.toasted-primary{border-radius:2px;min-height:38px;line-height:1.1em;background-color:#353535;padding:6px 20px;font-size:15px;font-weight:300;color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.toasted .primary.success,.toasted.toasted-primary.success{background:#4caf50}.toasted .primary.error,.toasted.toasted-primary.error{background:#f44336}.toasted .primary.info,.toasted.toasted-primary.info{background:#3f51b5}.toasted .primary .action,.toasted.toasted-primary .action{color:#a1c2fa}.toasted.bubble{border-radius:30px;min-height:38px;line-height:1.1em;background-color:#ff7043;padding:0 20px;font-size:15px;font-weight:300;color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.toasted.bubble.success{background:#4caf50}.toasted.bubble.error{background:#f44336}.toasted.bubble.info{background:#3f51b5}.toasted.bubble .action{color:#8e2b0c}.toasted.outline{border-radius:30px;min-height:38px;line-height:1.1em;background-color:#fff;border:1px solid #676767;padding:0 20px;font-size:15px;color:#676767;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);font-weight:700}.toasted.outline.success{color:#4caf50;border-color:#4caf50}.toasted.outline.error{color:#f44336;border-color:#f44336}.toasted.outline.info{color:#3f51b5;border-color:#3f51b5}.toasted.outline .action{color:#607d8b}.toasted-container{position:fixed;z-index:10000}.toasted-container,.toasted-container.full-width{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.toasted-container.full-width{max-width:86%;width:100%}.toasted-container.full-width.fit-to-screen{min-width:100%}.toasted-container.full-width.fit-to-screen .toasted:first-child{margin-top:0}.toasted-container.full-width.fit-to-screen.top-right{top:0;right:0}.toasted-container.full-width.fit-to-screen.top-left{top:0;left:0}.toasted-container.full-width.fit-to-screen.top-center{top:0;left:0;-webkit-transform:translateX(0);transform:translateX(0)}.toasted-container.full-width.fit-to-screen.bottom-right{right:0;bottom:0}.toasted-container.full-width.fit-to-screen.bottom-left{left:0;bottom:0}.toasted-container.full-width.fit-to-screen.bottom-center{left:0;bottom:0;-webkit-transform:translateX(0);transform:translateX(0)}.toasted-container.top-right{top:10%;right:7%}.toasted-container.top-left{top:10%;left:7%}.toasted-container.top-center{top:10%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.toasted-container.bottom-right{right:5%;bottom:7%}.toasted-container.bottom-left{left:5%;bottom:7%}.toasted-container.bottom-center{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:7%}.toasted-container.bottom-left .toasted,.toasted-container.top-left .toasted{float:left}.toasted-container.bottom-right .toasted,.toasted-container.top-right .toasted{float:right}.toasted-container .toasted{top:35px;width:auto;clear:both;margin-top:10px;position:relative;max-width:100%;height:auto;word-break:normal;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;box-sizing:inherit}.toasted-container .toasted .fa,.toasted-container .toasted .fab,.toasted-container .toasted .far,.toasted-container .toasted .fas,.toasted-container .toasted .material-icons,.toasted-container .toasted .mdi{margin-right:.5rem;margin-left:-.4rem}.toasted-container .toasted .fa.after,.toasted-container .toasted .fab.after,.toasted-container .toasted .far.after,.toasted-container .toasted .fas.after,.toasted-container .toasted .material-icons.after,.toasted-container .toasted .mdi.after{margin-left:.5rem;margin-right:-.4rem}.toasted-container .toasted .action{text-decoration:none;font-size:.8rem;padding:8px;margin:5px -7px 5px 7px;border-radius:3px;text-transform:uppercase;letter-spacing:.03em;font-weight:600;cursor:pointer}.toasted-container .toasted .action.icon{padding:4px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.toasted-container .toasted .action.icon .fa,.toasted-container .toasted .action.icon .material-icons,.toasted-container .toasted .action.icon .mdi{margin-right:0;margin-left:4px}.toasted-container .toasted .action.icon:hover{text-decoration:none}.toasted-container .toasted .action:hover{text-decoration:underline}@media only screen and (max-width:600px){.toasted-container{min-width:100%}.toasted-container .toasted:first-child{margin-top:0}.toasted-container.top-right{top:0;right:0}.toasted-container.top-left{top:0;left:0}.toasted-container.top-center{top:0;left:0;-webkit-transform:translateX(0);transform:translateX(0)}.toasted-container.bottom-right{right:0;bottom:0}.toasted-container.bottom-left{left:0;bottom:0}.toasted-container.bottom-center{left:0;bottom:0;-webkit-transform:translateX(0);transform:translateX(0)}.toasted-container.bottom-center,.toasted-container.top-center{-ms-flex-align:stretch!important;align-items:stretch!important}.toasted-container.bottom-left .toasted,.toasted-container.bottom-right .toasted,.toasted-container.top-left .toasted,.toasted-container.top-right .toasted{float:none}.toasted-container .toasted{border-radius:0}}</style></head><body><div id="app"><div class="
        min-h-screen
        relative
        overflow-hidden
        bg-gradient-to-t
        from-blue-200
        to-blue-500
      "><div class="py-6 relative z-20"><div><nav class="
              max-w-max
              mx-auto
              justify-center
              border
              font-medium
              text-3xl
              p-1
              bg-blue-800
              text-gray-100
              rounded-md
              border-blue-300
              shadow-lg
              relative
              divide-x-[1px] divide-blue-300
              lg:flex
              z-20
            "><div class="flex mr-1 sm-hidden align-self-center"><a href="https://twitter.com/Stacked_Toadz" target="_blank" rel="noopener noreferrer" class="
                  text-white
                  hover:text-blue-200
                  sm:px-3 sm:py-2
                  px-2
                  py-1
                  flex
                  items-center
                  justify-center
                "><span class="sr-only">Twitter</span><svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="sm:h-8 sm:w-8 w-5 h-5"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a><a href="https://discord.gg/stackedtoadz" target="_blank" rel="noopener noreferrer" class="
                  text-white
                  hover:text-blue-200
                  sm:px-3 sm:py-2
                  px-2
                  py-1
                  flex
                  items-center
                  justify-center
                "><span class="sr-only">Discord</span><svg fill="currentColor" width="30pt" height="24pt" viewBox="0 0 30 24" aria-hidden="true" class="sm:h-8 sm:w-8 w-5 h-5"><g id="surface1"><path d="M 25.394531 2.136719 C 23.484375 1.230469 21.433594 0.5625 19.289062 0.179688 C 19.25 0.175781 19.210938 0.191406 19.191406 0.230469 C 18.929688 0.714844 18.636719 1.34375 18.429688 1.84375 C 16.125 1.484375 13.832031 1.484375 11.574219 1.84375 C 11.367188 1.335938 11.066406 0.714844 10.800781 0.230469 C 10.78125 0.195312 10.742188 0.175781 10.703125 0.179688 C 8.558594 0.5625 6.507812 1.230469 4.597656 2.136719 C 4.578125 2.144531 4.566406 2.15625 4.554688 2.171875 C 0.667969 8.171875 -0.398438 14.027344 0.125 19.808594 C 0.125 19.835938 0.140625 19.863281 0.164062 19.878906 C 2.730469 21.824219 5.214844 23.007812 7.652344 23.789062 C 7.691406 23.800781 7.734375 23.789062 7.757812 23.753906 C 8.335938 22.941406 8.851562 22.082031 9.292969 21.179688 C 9.316406 21.128906 9.292969 21.066406 9.238281 21.042969 C 8.425781 20.722656 7.648438 20.335938 6.898438 19.890625 C 6.839844 19.855469 6.835938 19.769531 6.890625 19.726562 C 7.046875 19.605469 7.203125 19.480469 7.355469 19.351562 C 7.382812 19.328125 7.421875 19.324219 7.453125 19.335938 C 12.363281 21.652344 17.675781 21.652344 22.527344 19.335938 C 22.5625 19.320312 22.597656 19.328125 22.625 19.351562 C 22.777344 19.476562 22.933594 19.605469 23.09375 19.726562 C 23.148438 19.769531 23.144531 19.855469 23.085938 19.890625 C 22.335938 20.34375 21.558594 20.722656 20.742188 21.042969 C 20.691406 21.0625 20.667969 21.128906 20.691406 21.179688 C 21.144531 22.082031 21.65625 22.941406 22.222656 23.753906 C 22.246094 23.789062 22.289062 23.800781 22.328125 23.789062 C 24.78125 23.007812 27.265625 21.824219 29.832031 19.878906 C 29.855469 19.863281 29.867188 19.835938 29.871094 19.808594 C 30.496094 13.125 28.824219 7.320312 25.433594 2.175781 C 25.425781 2.15625 25.414062 2.144531 25.394531 2.136719 Z M 10.023438 16.289062 C 8.546875 16.289062 7.328125 14.886719 7.328125 13.164062 C 7.328125 11.445312 8.523438 10.042969 10.023438 10.042969 C 11.539062 10.042969 12.746094 11.457031 12.722656 13.164062 C 12.722656 14.886719 11.527344 16.289062 10.023438 16.289062 Z M 19.992188 16.289062 C 18.515625 16.289062 17.296875 14.886719 17.296875 13.164062 C 17.296875 11.445312 18.492188 10.042969 19.992188 10.042969 C 21.507812 10.042969 22.714844 11.457031 22.691406 13.164062 C 22.691406 14.886719 21.507812 16.289062 19.992188 16.289062 Z M 19.992188 16.289062 "></path></g></svg></a><a href="https://etherscan.io/address/0x099A16F0414CB0Cc0555d5f1f8140166462D39Ff#writeContract" target="_blank" rel="noopener noreferrer" class="
                  text-white
                  hover:text-blue-200
                  sm:px-3 sm:py-2
                  px-2
                  py-1
                  flex
                  items-center
                  justify-center
                "><span class="sr-only">Etherscan</span><svg fill="currentColor" width="24pt" height="24pt" viewBox="0 0 24 24" aria-hidden="true" class="sm:h-8 sm:w-8 w-5 h-5"><g id="surface1"><path d="M 4.984375 10.9375 C 4.984375 10.679688 5.089844 10.429688 5.285156 10.246094 C 5.476562 10.066406 5.734375 9.960938 6.003906 9.964844 L 7.699219 9.96875 C 8.261719 9.96875 8.714844 10.40625 8.714844 10.945312 L 8.714844 17.078125 C 8.90625 17.023438 9.152344 16.96875 9.417969 16.90625 C 9.800781 16.820312 10.074219 16.492188 10.074219 16.117188 L 10.074219 8.507812 C 10.074219 7.96875 10.527344 7.53125 11.089844 7.53125 L 12.785156 7.53125 C 13.347656 7.53125 13.804688 7.96875 13.804688 8.507812 L 13.804688 15.570312 C 13.804688 15.570312 14.230469 15.40625 14.644531 15.238281 C 14.957031 15.109375 15.160156 14.816406 15.160156 14.488281 L 15.160156 6.066406 C 15.160156 5.53125 15.617188 5.09375 16.179688 5.09375 L 17.875 5.09375 C 18.4375 5.09375 18.894531 5.53125 18.894531 6.066406 L 18.894531 13 C 20.363281 11.980469 21.855469 10.75 23.035156 9.273438 C 23.386719 8.839844 23.484375 8.265625 23.296875 7.746094 C 21.65625 3.167969 17.191406 0.0664062 12.140625 0 C 5.492188 -0.0859375 0 5.117188 0 11.488281 C -0.0078125 13.503906 0.542969 15.484375 1.59375 17.234375 C 1.886719 17.722656 2.449219 18 3.039062 17.953125 C 3.359375 17.925781 3.757812 17.886719 4.234375 17.832031 C 4.660156 17.785156 4.984375 17.4375 4.984375 17.027344 L 4.984375 10.9375 "></path><path d="M 4.945312 20.777344 C 8.59375 23.316406 13.417969 23.683594 17.4375 21.722656 C 21.453125 19.761719 23.980469 15.808594 23.980469 11.488281 C 23.980469 11.222656 23.96875 10.960938 23.949219 10.699219 C 19.570312 16.960938 11.484375 19.886719 4.945312 20.777344 "></path></g></svg></a><a href="https://opensea.io/collection/stackedtoadz" target="_blank" rel="noopener noreferrer" class="
                  text-white
                  hover:text-blue-200
                  sm:px-3 sm:py-2
                  px-2
                  py-1
                  flex
                  items-center
                  justify-center
                "><span class="sr-only">Opensea</span><svg fill="currentColor" width="24pt" height="24pt" viewBox="0 0 24 24" aria-hidden="true" class="sm:h-8 sm:w-8 w-5 h-5"><g id="surface1"><path d="M 12 0 C 5.375 0 0 5.375 0 12 C 0 18.625 5.375 24 12 24 C 18.625 24 24 18.625 24 12 C 24 5.375 18.628906 0 12 0 Z M 5.921875 12.402344 L 5.972656 12.320312 L 9.09375 7.4375 C 9.140625 7.367188 9.246094 7.375 9.28125 7.453125 C 9.800781 8.621094 10.253906 10.074219 10.042969 10.980469 C 9.953125 11.351562 9.707031 11.855469 9.425781 12.320312 C 9.390625 12.390625 9.351562 12.457031 9.308594 12.519531 C 9.289062 12.550781 9.257812 12.566406 9.222656 12.566406 L 6.011719 12.566406 C 5.925781 12.566406 5.875 12.472656 5.921875 12.402344 Z M 19.832031 14.082031 C 19.832031 14.128906 19.808594 14.167969 19.769531 14.183594 C 19.527344 14.289062 18.699219 14.667969 18.355469 15.144531 C 17.476562 16.367188 16.808594 18.113281 15.308594 18.113281 L 9.054688 18.113281 C 6.835938 18.113281 5.039062 16.3125 5.039062 14.089844 L 5.039062 14.015625 C 5.039062 13.957031 5.089844 13.910156 5.148438 13.910156 L 8.632812 13.910156 C 8.703125 13.910156 8.753906 13.972656 8.746094 14.042969 C 8.722656 14.269531 8.765625 14.5 8.871094 14.710938 C 9.078125 15.132812 9.507812 15.394531 9.972656 15.394531 L 11.699219 15.394531 L 11.699219 14.046875 L 9.992188 14.046875 C 9.90625 14.046875 9.851562 13.945312 9.902344 13.875 C 9.921875 13.84375 9.941406 13.816406 9.964844 13.78125 C 10.125 13.554688 10.355469 13.199219 10.585938 12.792969 C 10.742188 12.519531 10.894531 12.226562 11.015625 11.933594 C 11.039062 11.878906 11.058594 11.824219 11.082031 11.773438 C 11.113281 11.679688 11.148438 11.589844 11.171875 11.503906 C 11.195312 11.429688 11.21875 11.351562 11.238281 11.28125 C 11.292969 11.03125 11.320312 10.765625 11.320312 10.492188 C 11.320312 10.386719 11.3125 10.273438 11.304688 10.167969 C 11.300781 10.046875 11.285156 9.929688 11.269531 9.8125 C 11.261719 9.710938 11.242188 9.605469 11.222656 9.5 C 11.195312 9.34375 11.164062 9.191406 11.125 9.035156 L 11.109375 8.972656 C 11.082031 8.867188 11.054688 8.765625 11.019531 8.65625 C 10.921875 8.320312 10.8125 7.992188 10.691406 7.683594 C 10.648438 7.5625 10.601562 7.445312 10.550781 7.328125 C 10.476562 7.152344 10.402344 6.992188 10.335938 6.839844 C 10.300781 6.769531 10.273438 6.707031 10.242188 6.644531 C 10.210938 6.570312 10.175781 6.5 10.140625 6.429688 C 10.117188 6.375 10.085938 6.328125 10.066406 6.277344 L 9.855469 5.890625 C 9.828125 5.835938 9.875 5.773438 9.933594 5.789062 L 11.253906 6.144531 L 11.257812 6.144531 C 11.261719 6.144531 11.261719 6.144531 11.261719 6.144531 L 11.4375 6.195312 L 11.628906 6.25 L 11.699219 6.269531 L 11.699219 5.488281 C 11.699219 5.105469 12 4.800781 12.375 4.800781 C 12.5625 4.800781 12.734375 4.875 12.855469 5 C 12.976562 5.125 13.054688 5.296875 13.054688 5.488281 L 13.054688 6.652344 L 13.195312 6.6875 C 13.203125 6.695312 13.21875 6.699219 13.226562 6.707031 C 13.261719 6.730469 13.308594 6.769531 13.371094 6.816406 C 13.421875 6.855469 13.476562 6.902344 13.539062 6.953125 C 13.664062 7.054688 13.820312 7.1875 13.984375 7.339844 C 14.027344 7.378906 14.070312 7.414062 14.113281 7.457031 C 14.324219 7.65625 14.566406 7.890625 14.796875 8.148438 C 14.859375 8.222656 14.921875 8.292969 14.988281 8.375 C 15.050781 8.453125 15.121094 8.53125 15.175781 8.605469 C 15.257812 8.710938 15.339844 8.816406 15.414062 8.929688 C 15.445312 8.984375 15.488281 9.039062 15.519531 9.089844 C 15.613281 9.234375 15.695312 9.378906 15.773438 9.527344 C 15.808594 9.59375 15.84375 9.667969 15.871094 9.738281 C 15.960938 9.9375 16.03125 10.136719 16.074219 10.335938 C 16.085938 10.378906 16.097656 10.425781 16.101562 10.46875 L 16.101562 10.476562 C 16.117188 10.535156 16.121094 10.597656 16.125 10.664062 C 16.144531 10.867188 16.136719 11.074219 16.09375 11.28125 C 16.074219 11.367188 16.046875 11.449219 16.019531 11.535156 C 15.988281 11.621094 15.960938 11.707031 15.921875 11.792969 C 15.847656 11.960938 15.761719 12.132812 15.65625 12.292969 C 15.625 12.351562 15.582031 12.414062 15.542969 12.476562 C 15.5 12.539062 15.457031 12.597656 15.417969 12.65625 C 15.363281 12.730469 15.304688 12.804688 15.246094 12.875 C 15.191406 12.949219 15.140625 13.019531 15.078125 13.085938 C 14.996094 13.183594 14.917969 13.273438 14.835938 13.363281 C 14.785156 13.421875 14.734375 13.480469 14.679688 13.535156 C 14.625 13.59375 14.570312 13.644531 14.523438 13.695312 C 14.4375 13.777344 14.371094 13.839844 14.3125 13.894531 L 14.175781 14.019531 C 14.15625 14.039062 14.132812 14.046875 14.105469 14.046875 L 13.054688 14.046875 L 13.054688 15.394531 L 14.375 15.394531 C 14.671875 15.394531 14.953125 15.289062 15.179688 15.097656 C 15.257812 15.027344 15.59375 14.734375 15.996094 14.292969 C 16.011719 14.277344 16.027344 14.269531 16.046875 14.261719 L 19.695312 13.207031 C 19.765625 13.1875 19.832031 13.238281 19.832031 13.308594 Z M 19.832031 14.082031 "></path></g></svg></a></div><div class="flex justify-center"><a href="/" class="
                  ml-1
                  block
                  sm:px-3 sm:py-2
                  px-2
                  py-1
                  rounded-lg
                  hover:bg-blue-900
                  hover:outline-none
                  hover:ring-1
                  hover:ring-white
                  sm:text-3xl
                  text-lg
                ">Home</a><a href="/raffle" class="
                  block
                  sm:px-3 sm:py-2
                  px-2
                  py-1
                  rounded-lg
                  hover:bg-blue-900
                  hover:outline-none
                  hover:ring-1
                  hover:ring-white
                  sm:text-3xl
                  text-lg
                ">Raffle</a><a href="/bridge" class="
                  block
                  sm:px-3 sm:py-2
                  px-2
                  py-1
                  rounded-lg
                  hover:bg-blue-900
                  hover:outline-none
                  hover:ring-1
                  hover:ring-white
                  sm:text-3xl
                  text-lg
                ">Bridge</a><a href="https://stack-game.stackedtoadz.com" target="_blank" class="
                  block
                  sm:px-3 sm:py-2
                  px-2
                  py-1
                  rounded-lg
                  hover:bg-blue-900
                  hover:outline-none
                  hover:ring-1
                  hover:ring-white
                  sm:text-3xl
                  text-lg
                ">Game</a><a href="/stake" class="
                  block
                  sm:px-3 sm:py-2
                  px-2
                  py-1
                  rounded-lg
                  hover:bg-blue-900
                  hover:outline-none
                  hover:ring-1
                  hover:ring-white
                  sm:text-3xl
                  text-lg
                ">Stake</a><a href="https://docs.stackedtoadz.com/" target="_blank" class="
                  block
                  sm:px-3 sm:py-2
                  px-2
                  py-1
                  rounded-lg
                  hover:bg-blue-900
                  hover:outline-none
                  hover:ring-1
                  hover:ring-white
                  sm:text-3xl
                  text-lg
                ">Docs</a></div></nav></div></div><button class="
          btn-connect
          text-2xl
          absolute
          right-6
          z-30
          top-6
          px-4
          py-2
          bg-blue-800
          text-white
          rounded-md
          border border-blue-300
          lg:block
        "> Connect wallet </button><div class="cloud1"></div><div class="cloud3"></div><div><main class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-8 z-50"><div class="
              flex flex-col
              items-center
              justify-center
              m-auto
              mt-24
              w-64
              sm:w-96
              xl:w-full
            "><div class="text-center space-y-1"><h1 class="text-5xl sm:text-7xl md:text-9xl text-white"> StackedToadz </h1><p class="text-gray-100 sm:text-2xl text-base"> Welcome to StackedToadz, the only place where you can make it to Toadhalla! </p></div><div class="text-center text-2xl sm:text-4xl mt-6 sm:mt-12 mb-2 text-green-700"> We have it all! NFT plays, crypto calls, raffles, giveaways, WL invites, play fun games and win free prizes, exclusive partnerships, a DAO, you name it! Come join this community ran project full of big brains, funny, loving, helpful, skilled Toadz and pick up a StackedToadz now and enjoy the ride with your new family! </div><div class="mt-6 space-y-4 text-center" style="z-index: 1;"><p class="text-3xl text-green-900 font-bold"> There exist 2999 StackedToadz and 1003 UnstackedToadz. Each of them unique. </p><p class="text-3xl text-green-900 font-bold"> Welcome to the swamp. </p><a href="https://opensea.io/collection/stackedtoadz" target="_blank" rel="noopener noreferrer" class="
                  text-xl
                  sm:text-4xl
                  border
                  sm:px-6 sm:py-3
                  px-4
                  py-2
                  bg-green-700
                  text-white
                  border-green-300
                  rounded-sm
                  hover:bg-green-700
                  shadow-lg
                  hover:shadow-none
                  focus:outline-none focus:ring-2 focus:ring-green-300
                  disabled:opacity-30 disabled:cursor-not-allowed
                  h-full
                  w-full
                  block
                  text-center
                ">OpenSea</a></div></div></main><div></div></div><div id="modal" style="display: none;"><div><div id="headlessui-dialog-118" role="dialog" aria-modal="true" aria-labelledby="headlessui-dialog-title-122" class="fixed z-10 inset-0 overflow-y-auto"><div class="
                flex
                items-end
                justify-center
                min-h-screen
                pt-4
                px-4
                pb-20
                text-center
                sm:block sm:p-0
              "><div id="headlessui-dialog-overlay-120" aria-hidden="true" class="
                  fixed
                  inset-0
                  bg-blue-300 bg-opacity-75
                  transition-opacity
                "></div><span aria-hidden="true" class="hidden sm:inline-block sm:align-middle sm:h-screen">&ZeroWidthSpace;</span><div class="
                  inline-block
                  align-bottom
                  bg-blue-700
                  rounded-lg
                  px-4
                  pt-5
                  pb-4
                  text-left
                  overflow-hidden
                  shadow-xl
                  transform
                  transition-all
                  sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6
                  undefined
                "><div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4"><button type="button" tabindex="0" class="
                      bg-transparent
                      rounded-md
                      text-blue-100
                      hover:text-blue-300
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-blue-500
                    "><span class="sr-only">Close</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"><h3 id="headlessui-dialog-title-122" class="leading-6 font-medium text-white text-lg sm:text-xl">  </h3><div class="mt-5 flex rounded-md shadow-sm"><input type="text" placeholder="Toad ID(z)" class="
                        focus:ring-blue-500 focus:border-blue-500
                        block
                        rounded
                        px-4
                        py-2
                        sm:text-sm
                        border-blue-400
                        w-full
                      "></div><p class="text-blue-200 text-lg mt-1"> You can input multiple IDz like so: 1,2,3,4 </p><p class="text-blue-200 text-sm"> If you don't remember the IDs, check your openSea profile or activity </p><button class="
                      w-full
                      bg-blue-800
                      text-blue-200
                      rounded-md
                      py-3
                      mt-4
                      hover:bg-blue-900
                      text-lg
                    ">  </button></div></div></div></div></div></div></div></div><script src="/js/chunk-vendors.580eaa53.js"></script><script src="/js/app.694038e2.js"></script><div id="__SJQpusg" role="status" aria-live="polite" aria-atomic="false"></div></body></html>

</template>

<style>
.navbar {
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 1px 0 rgba(0,0,0,.05);
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  display: inline-flex;
}
.navbar-inner {
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 5px 11px rgba(0,0,0,.18), 0 4px 15px rgba(0,0,0,.15);
  padding: 0 20px;
}
.navbar .brand {
  color: #777;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  padding: 14px 20px 10px;
  text-shadow: 0 1px 0 #fff;
}
.navbar .brand:hover {
  text-decoration: none;
}
.navbar .nav > li > a {
  background-color: transparent;
  border-radius: 0;
  color: #777;
  display: block;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  padding: 10px 20px;
  text-shadow: 0 1px 0 #fff;
}
.navbar .nav > li > a:hover,
.navbar .nav > li > a:focus {
  background-color: transparent;
  color: #333;
  text-decoration: none;
}
.navbar .nav > .active > a,
.navbar .nav > .active > a:hover,
.navbar .nav > .active > a:focus {
  background-color: transparent;
  color: #555;
  text-decoration: none;
}
.navbar .nav > li > .dropdown-menu:before {
  border-bottom: 7px solid transparent;
  border-left: 7px solid rgba(0,0,0,.2);
  border-top: 0;
  border-right: 0;
  content: '';
  display: inline-block;
  left: -7px;
  position: absolute;
  top: 10px;
}
.navbar .nav > li > .dropdown-menu:after {
  border-bottom: 6px solid transparent;
  border-left: 6px solid #fff;
  border-top: 0;
  border-right: 0;
  content: '';
  display: inline-block;
  left: -6px;
  position: absolute;
  top: 11px;
}
.navbar .nav > li > .dropdown-menu > li > a {
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  border-radius: 0;
  color: #777;
  display: block;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  padding: 10px 20px;
  text-shadow: 0 1px 0 #fff;
}

* *::before, *::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: #eceff1;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'DM Sans', system-ui, sans-serif;
  color: #263238;
}

.card {
  width: 22rem;
  max-width: 90%;
  border: solid 4px #fff;
  border-radius: 2rem;
  padding: 0.75rem;
  text-decoration: none;
  color: inherit;
  background: #eceff1;
  box-shadow: 0 16px 32px #cfd8dc;
  transition: all 400ms ease;
  flex-direction: row;
}
.card:hover {
  background: #fff;
}
.card__body {
  background: #fff;
  border-radius: 1.25rem;
  padding: 0.75rem;
}
.card__top {
  display: flex;
  font-weight: 500;
}
.card__owner, .card__creator {
  width: 50%;
  display: flex;
}
.card__owner {
  position: relative;
}
.card__owner::after {
  content: '';
  position: absolute;
  top: 0;
  right: -1px;
  width: 2px;
  height: 100%;
  border-radius: 2px;
  background: #eceff1;
}
.card__creator {
  flex-direction: row-reverse;
  text-align: right;
}
.card__avatar {
  width: 3rem;
  height: 3rem;
  background: #eceff1;
  border-radius: 100%;
  flex-shrink: 0;
}
.card__user {
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card__user__title {
  font-size: 0.75rem;
  color: #b0bec5;
}
.card__image {
  padding-top: 75%;
  position: relative;
  overflow: hidden;
  margin-top: 0.75rem;
  border-radius: 1rem;
  background: #eceff1;
  box-shadow: 0 16px 32px #eceff1;
}
.card__image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card__info {
  margin: 0.75rem;
  display: flex;
  justify-content: space-between;
}
.card__info p {
  margin: 0;
}
.card__footer {
  background: #fff;
  padding: 0.75rem;
  border-radius: 0.75rem 0.75rem 1.75rem 1.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card__btn {
  width: 48%;
  padding: 1rem;
  text-align: center;
  font-weight: 500;
  transition: all 200ms ease;
}
.card__btn--primary {
  background: #263238;
  color: #eceff1;
  border-radius: 0.5rem 0.5rem 1.25rem 0.5rem;
}
.card__btn--primary:hover {
  background: #304ffe;
}
.card__btn--secondary {
  border-radius: 0.5rem 0.5rem 0.5rem 1.25rem;
}
.card__btn--secondary:hover {
  background: #eceff1;
  color: #304ffe;
}
*{
	margin:0;
	padding:0;
}

body{
	font:15px/1.3 'Open Sans', sans-serif;
	color: #5e5b64;
	text-align:center;
}

a, a:visited {
	outline:none;
	color:#389dc1;
}

a:hover{
	text-decoration:none;
}

section, footer, header, aside, nav{
	display: block;
}

/*-------------------------
	The menu
--------------------------*/

nav{
	display:inline-block;
	margin:60px auto 45px;
	background-color:#5597b4;
	box-shadow:0 1px 1px #ccc;
	border-radius:2px;
}

nav a{
	display:inline-block;
	padding: 18px 30px;
	color:#fff !important;
	font-weight:bold;
	font-size:16px;
	text-decoration:none !important;
	line-height:1;
	text-transform: uppercase;
	background-color:transparent;

	-webkit-transition:background-color 0.25s;
	-moz-transition:background-color 0.25s;
	transition:background-color 0.25s;
}

nav a:first-child{
	border-radius:2px 0 0 2px;
}

nav a:last-child{
	border-radius:0 2px 2px 0;
}

.nav__twitter, .nav__discord, .nav__etherscan,
.nav__opensea, .nav__docs,
.nav__services, .nav__raffle,
.nav__docs, .nav__game{
	background-color:#e35885;
}

p{
	font-size:22px;
	font-weight:bold;
	color:#7d9098;
}

p b{
	color:#ffffff;
	display:inline-block;
	padding:5px 10px;
	background-color:#c4d7e0;
	border-radius:2px;
	text-transform:uppercase;
	font-size:18px;
}
</style>


