!(function(i) {
  var c,
    e =
      '<svg><symbol id="icon-aim" viewBox="0 0 1024 1024"><path d="M952 474H829.8C812.5 327.6 696.4 211.5 550 194.2V72c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v122.2C327.6 211.5 211.5 327.6 194.2 474H72c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h122.2C211.5 696.4 327.6 812.5 474 829.8V952c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V829.8C696.4 812.5 812.5 696.4 829.8 550H952c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM512 756c-134.8 0-244-109.2-244-244s109.2-244 244-244 244 109.2 244 244-109.2 244-244 244z"  ></path><path d="M512 392c-32.1 0-62.1 12.4-84.8 35.2-22.7 22.7-35.2 52.7-35.2 84.8s12.5 62.1 35.2 84.8C449.9 619.4 480 632 512 632s62.1-12.5 84.8-35.2C619.4 574.1 632 544 632 512s-12.5-62.1-35.2-84.8C574.1 404.4 544.1 392 512 392z"  ></path></symbol><symbol id="icon-import" viewBox="0 0 1024 1024"><path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7z"  ></path><path d="M902 476H588v-76c0-6.7-7.8-10.5-13-6.3l-141.9 112c-4.1 3.2-4.1 9.4 0 12.6l141.9 112c5.3 4.2 13 0.4 13-6.3v-76h314c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M563.8 512l262.5-312.9c4.4-5.2 0.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9c-4.4 5.2-0.7 13.1 6.1 13.1h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"  ></path></symbol><symbol id="icon-export" viewBox="0 0 1024 1024"><path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7z"  ></path><path d="M906.9 505.7L765 393.7c-5.3-4.2-13-0.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112c4.1-3.2 4.1-9.4 0-12.6z"  ></path></symbol><symbol id="icon-setting" viewBox="0 0 1024 1024"><path d="M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56c10.1-8.6 13.8-22.6 9.3-35.2l-0.9-2.6c-18.1-50.5-44.9-96.9-79.7-137.9l-1.8-2.1c-8.6-10.1-22.5-13.9-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85c-2.4-13.1-12.7-23.3-25.8-25.7l-2.7-0.5c-52.1-9.4-106.9-9.4-159 0l-2.7 0.5c-13.1 2.4-23.4 12.6-25.8 25.7l-15.8 85.4c-35.9 13.6-69.2 32.9-99 57.4l-81.9-29.1c-12.5-4.4-26.5-0.7-35.1 9.5l-1.8 2.1c-34.8 41.1-61.6 87.5-79.7 137.9l-0.9 2.6c-4.5 12.5-0.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5c-10.1 8.6-13.8 22.6-9.3 35.2l0.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1c8.6 10.1 22.5 13.9 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4c2.4 13.1 12.7 23.3 25.8 25.7l2.7 0.5c26.1 4.7 52.8 7.1 79.5 7.1 26.7 0 53.5-2.4 79.5-7.1l2.7-0.5c13.1-2.4 23.4-12.6 25.8-25.7l15.7-85c36.2-13.6 69.7-32.9 99.7-57.6l81.3 28.9c12.5 4.4 26.5 0.7 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l0.9-2.6c4.5-12.3 0.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9c-11.3 26.1-25.6 50.7-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97c-28.1 3.2-56.8 3.2-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9z"  ></path><path d="M512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176z m79.2 255.2C570 602.3 541.9 614 512 614c-29.9 0-58-11.7-79.2-32.8C411.7 560 400 531.9 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8C612.3 444 624 472.1 624 502c0 29.9-11.7 58-32.8 79.2z"  ></path></symbol><symbol id="icon-chart" viewBox="0 0 1024 1024"><path d="M323.2 422.4c-16 0-32 16-32 32l0 256c0 16 16 32 32 32 19.2 0 32-16 32-32l0-256C355.2 435.2 342.4 422.4 323.2 422.4z"  ></path><path d="M483.2 294.4c-16 0-32 16-32 32l0 384c0 16 16 32 32 32 19.2 0 32-16 32-32l0-384C515.2 307.2 502.4 294.4 483.2 294.4z"  ></path><path d="M643.2 518.4c-16 0-32 16-32 32l0 160c0 16 16 32 32 32 19.2 0 32-16 32-32l0-160C675.2 531.2 662.4 518.4 643.2 518.4z"  ></path><path d="M803.2 358.4c-16 0-32 16-32 32l0 320c0 16 16 32 32 32 19.2 0 32-16 32-32l0-320C835.2 371.2 822.4 358.4 803.2 358.4z"  ></path><path d="M867.2 838.4l-672 0 0-672c0-19.2-12.8-32-32-32s-32 12.8-32 32l0 672c0 35.2 28.8 64 64 64l672 0c19.2 0 32-12.8 32-32S886.4 838.4 867.2 838.4z"  ></path></symbol><symbol id="icon-lock" viewBox="0 0 1024 1024"><path d="M810.666667 981.333333H213.333333c-72.533333 0-128-55.466667-128-128v-298.666666c0-72.533333 55.466667-128 128-128h597.333334c72.533333 0 128 55.466667 128 128v298.666666c0 72.533333-55.466667 128-128 128zM213.333333 512c-25.6 0-42.666667 17.066667-42.666666 42.666667v298.666666c0 25.6 17.066667 42.666667 42.666666 42.666667h597.333334c25.6 0 42.666667-17.066667 42.666666-42.666667v-298.666666c0-25.6-17.066667-42.666667-42.666666-42.666667H213.333333z"  ></path><path d="M725.333333 512c-25.6 0-42.666667-17.066667-42.666666-42.666667V298.666667c0-93.866667-76.8-170.666667-170.666667-170.666667S341.333333 204.8 341.333333 298.666667v170.666666c0 25.6-17.066667 42.666667-42.666666 42.666667s-42.666667-17.066667-42.666667-42.666667V298.666667c0-140.8 115.2-256 256-256s256 115.2 256 256v170.666666c0 25.6-17.066667 42.666667-42.666667 42.666667z"  ></path></symbol><symbol id="icon-paint-bucket" viewBox="0 0 1024 1024"><path d="M85.333333 535.466667v75.093333a64 64 0 0 0 18.773334 45.226667l264.106666 264.106666a64 64 0 0 0 45.226667 18.773334h32.426667a64 64 0 0 0 45.226666-18.773334l355.413334-355.413333a42.666667 42.666667 0 0 0 0-60.16l-411.733334-412.586667A21.76 21.76 0 0 0 419.413333 85.333333a21.333333 21.333333 0 0 0-14.933333 6.4l-30.293333 29.866667a21.76 21.76 0 0 0 0 30.293333l34.133333 34.133334-304.213333 304.213333A64 64 0 0 0 85.333333 535.466667z m384-288.853334L733.44 512H203.093333zM831.146667 682.666667h2.56a14.08 14.08 0 0 1 9.813333 4.266666c32 35.84 95.146667 103.253333 95.146667 145.066667a106.666667 106.666667 0 0 1-213.333334 0c0-42.666667 62.293333-108.8 94.72-144.213333a13.653333 13.653333 0 0 1 11.093334-5.12z"  ></path></symbol><symbol id="icon-safe" viewBox="0 0 1024 1024"><path d="M892.761 160.724v426.504c0 25.588-6.419 51.036-19.177 76.339-12.798 25.336-29.547 49.86-50.254 73.627-20.707 23.79-44.372 46.296-70.97 67.516-26.589 21.244-53.543 40.177-80.921 56.768-27.363 16.623-53.968 30.461-79.801 41.438-25.809 11.008-48.433 18.547-67.871 22.64l-9.203 1.53-8.43-1.53c-19.958-4.093-43.094-11.632-69.432-22.64-26.337-10.969-53.708-24.816-82.080-41.438-28.388-16.591-56.256-35.524-83.618-56.768-27.378-21.219-51.776-43.725-73.265-67.516-21.488-23.759-38.868-48.291-52.155-73.627-13.319-25.305-19.974-50.759-19.974-76.339v-426.504l31.455-4.629 352.892-65.97 359.784 65.97 23.017 4.629zM510.028 151.884l-4.211-0.844-302.89 51.476v269.101h307.102v-319.734zM815.434 471.634h-305.406v383.031c19.682-4.51 41.052-11.411 64.141-20.692 23.033-9.249 45.815-20.234 68.304-32.867 22.513-12.672 44.159-26.739 64.969-42.203 20.818-15.472 39.23-32.047 55.277-49.797 16.024-17.703 28.822-36.131 38.386-55.222 9.549-19.131 14.328-38.553 14.328-58.235v-124.015z"  ></path></symbol><symbol id="icon-partition" viewBox="0 0 1024 1024"><path d="M640.6 429.8h257.1c7.9 0 14.3-6.4 14.3-14.3V158.3c0-7.9-6.4-14.3-14.3-14.3H640.6c-7.9 0-14.3 6.4-14.3 14.3v92.9H490.6c-3.9 0-7.1 3.2-7.1 7.1v221.5h-85.7v-96.5c0-7.9-6.4-14.3-14.3-14.3H126.3c-7.9 0-14.3 6.4-14.3 14.3v257.2c0 7.9 6.4 14.3 14.3 14.3h257.1c7.9 0 14.3-6.4 14.3-14.3V544h85.7v221.5c0 3.9 3.2 7.1 7.1 7.1h135.7v92.9c0 7.9 6.4 14.3 14.3 14.3h257.1c7.9 0 14.3-6.4 14.3-14.3v-257c0-7.9-6.4-14.3-14.3-14.3h-257c-7.9 0-14.3 6.4-14.3 14.3v100h-78.6v-393h78.6v100c0 7.9 6.4 14.3 14.3 14.3z m53.5-217.9h150V362h-150V211.9zM329.9 587h-150V437h150v150z m364.2 75.1h150v150.1h-150V662.1z"  ></path></symbol><symbol id="icon-repeat" viewBox="0 0 1024 1024"><path d="M764.16 213.333333h-512l55.466667-55.04a42.666667 42.666667 0 0 0-60.586667-60.586666l-128 128a42.666667 42.666667 0 0 0 0 60.586666l128 128a42.666667 42.666667 0 0 0 60.586667 0 42.666667 42.666667 0 0 0 0-60.586666L252.16 298.666667h512a66.56 66.56 0 0 1 67.84 65.28V469.333333a42.666667 42.666667 0 0 0 85.333333 0V363.946667A151.893333 151.893333 0 0 0 764.16 213.333333zM776.96 609.706667a42.666667 42.666667 0 0 0-60.586667 60.586666l55.466667 55.04h-512a66.56 66.56 0 0 1-67.84-65.28V554.666667a42.666667 42.666667 0 0 0-85.333333 0v105.386666A151.893333 151.893333 0 0 0 259.84 810.666667h512l-55.466667 55.04a42.666667 42.666667 0 0 0 0 60.586666 42.666667 42.666667 0 0 0 60.586667 0l128-128a42.666667 42.666667 0 0 0 0-60.586666z"  ></path></symbol><symbol id="icon-tomato" viewBox="0 0 1024 1024"><path d="M529.066667 1024c-269.653333 0-512-204.8-512-426.666667 0-228.693333 276.48-392.533333 372.053333-409.6 10.24 0 17.066667 3.413333 20.48 13.653334 0 10.24-3.413333 17.066667-13.653333 20.48-85.333333 13.653333-344.746667 170.666667-344.746667 375.466666S279.893333 989.866667 529.066667 989.866667c238.933333 0 443.733333-180.906667 443.733333-392.533334 0-208.213333-201.386667-344.746667-310.613333-358.4-6.826667 0-13.653333-10.24-13.653334-20.48s10.24-13.653333 20.48-13.653333c119.466667 17.066667 337.92 163.84 337.92 392.533333 0 232.106667-218.453333 426.666667-477.866666 426.666667z" fill="" ></path><path d="M529.066667 955.733333c-228.693333 0-443.733333-174.08-443.733334-358.4 0-10.24 6.826667-17.066667 17.066667-17.066666s17.066667 6.826667 17.066667 17.066666c0 167.253333 197.973333 324.266667 409.6 324.266667 10.24 0 17.066667 6.826667 17.066666 17.066667s-6.826667 17.066667-17.066666 17.066666zM525.653333 409.6c-44.373333 0-61.44-75.093333-68.266666-119.466667-23.893333 3.413333-54.613333 20.48-75.093334 30.72-34.133333 17.066667-58.026667 30.72-71.68 13.653334-13.653333-13.653333-13.653333-44.373333-3.413333-68.266667 13.653333-34.133333 61.44-95.573333 218.453333-95.573333 143.36 0 187.733333 71.68 201.386667 102.4 10.24 23.893333 13.653333 51.2 0 64.853333-17.066667 17.066667-37.546667 3.413333-64.853333-13.653333-20.48-13.653333-44.373333-27.306667-68.266667-30.72-6.826667 40.96-23.893333 116.053333-68.266667 116.053333z m-51.2-153.6c10.24 0 17.066667 6.826667 17.066667 17.066667 0 47.786667 20.48 102.4 34.133333 102.4s34.133333-54.613333 34.133334-102.4c0-10.24 6.826667-17.066667 17.066666-17.066667 37.546667 0 75.093333 20.48 102.4 37.546667 6.826667 3.413333 17.066667 10.24 23.893334 13.653333 0-6.826667-3.413333-23.893333-17.066667-40.96-17.066667-20.48-58.026667-61.44-160.426667-61.44-126.293333 0-170.666667 40.96-184.32 64.853333-10.24 17.066667-10.24 30.72-10.24 37.546667 6.826667-3.413333 23.893333-10.24 34.133334-17.066667 30.72-13.653333 71.68-34.133333 109.226666-34.133333z" fill="" ></path><path d="M512 204.8c-10.24 0-17.066667-6.826667-17.066667-17.066667C494.933333 75.093333 590.506667 0 682.666667 0c10.24 0 17.066667 6.826667 17.066666 17.066667s-6.826667 17.066667-17.066666 17.066666c-75.093333 0-153.6 61.44-153.6 153.6 0 10.24-6.826667 17.066667-17.066667 17.066667z" fill="" ></path></symbol><symbol id="icon-add" viewBox="0 0 1024 1024"><path d="M948.313043 442.991304l-369.530435 0 0-369.530435c0-37.843478-31.165217-69.008696-69.008696-69.008696-37.843478 0-69.008696 31.165217-69.008696 69.008696l0 369.530435-369.530435 0c-37.843478 0-69.008696 31.165217-69.008696 69.008696 0 37.843478 31.165217 69.008696 69.008696 69.008696l369.530435 0 0 369.530435c0 37.843478 31.165217 69.008696 69.008696 69.008696 37.843478 0 69.008696-31.165217 69.008696-69.008696l0-369.530435 369.530435 0c37.843478 0 69.008696-31.165217 69.008696-69.008696C1017.321739 474.156522 988.382609 442.991304 948.313043 442.991304z"  ></path></symbol><symbol id="icon-box" viewBox="0 0 1024 1024"><path d="M776.144 96H229.504L64 322.72V912h880V322.72L776.144 96zM864 832H144V400h256v-80H164.208l105.792-144H464v224h80V176h191.632l105.808 144H608v80h256v432z"  ></path></symbol><symbol id="icon-more" viewBox="0 0 1024 1024"><path d="M426.666667 810.666667a85.333333 85.333333 0 1 1 170.666666 0 85.333333 85.333333 0 0 1-170.666666 0z m0-298.666667a85.333333 85.333333 0 1 1 170.666666 0 85.333333 85.333333 0 0 1-170.666666 0z m0-298.666667a85.333333 85.333333 0 1 1 170.666666 0 85.333333 85.333333 0 0 1-170.666666 0z"  ></path></symbol><symbol id="icon-user" viewBox="0 0 1024 1024"><path d="M858.5 763.6c-18.9-44.8-46.1-85-80.6-119.5-34.5-34.5-74.7-61.6-119.5-80.6-0.4-0.2-0.8-0.3-1.2-0.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-0.4 0.2-0.8 0.3-1.2 0.5-44.8 18.9-85 46-119.5 80.6-34.5 34.5-61.6 74.7-80.6 119.5C146.9 807.5 137 854 136 901.8c-0.1 4.5 3.5 8.2 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c0.1 4.4 3.6 7.8 8 7.8h60c4.5 0 8.1-3.7 8-8.2-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"  ></path></symbol><symbol id="icon-home" viewBox="0 0 1024 1024"><path d="M946.5 505L560.1 118.8l-25.9-25.9c-12.3-12.2-32.1-12.2-44.4 0L77.5 505c-12.3 12.3-18.9 28.6-18.8 46 0.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8 12.1-12.1 18.7-28.2 18.7-45.3 0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204z m217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"  ></path></symbol><symbol id="icon-time" viewBox="0 0 1024 1024"><path d="M945 412H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h256c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM811 548H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h122c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM477.3 322.5H434c-6.2 0-11.2 5-11.2 11.2v248c0 3.6 1.7 6.9 4.6 9l148.9 108.6c5 3.6 12 2.6 15.6-2.4l25.7-35.1v-0.1c3.6-5 2.5-12-2.5-15.6l-126.7-91.6V333.7c0.1-6.2-5-11.2-11.1-11.2z"  ></path><path d="M804.8 673.9H747c-5.6 0-10.9 2.9-13.9 7.7-12.7 20.1-27.5 38.7-44.5 55.7-29.3 29.3-63.4 52.3-101.3 68.3-39.3 16.6-81 25-124 25-43.1 0-84.8-8.4-124-25-37.9-16-72-39-101.3-68.3s-52.3-63.4-68.3-101.3c-16.6-39.2-25-80.9-25-124 0-43.1 8.4-84.7 25-124 16-37.9 39-72 68.3-101.3 29.3-29.3 63.4-52.3 101.3-68.3 39.2-16.6 81-25 124-25 43.1 0 84.8 8.4 124 25 37.9 16 72 39 101.3 68.3 17 17 31.8 35.6 44.5 55.7 3 4.8 8.3 7.7 13.9 7.7h57.8c6.9 0 11.3-7.2 8.2-13.3-65.2-129.7-197.4-214-345-215.7-216.1-2.7-395.6 174.2-396 390.1C71.6 727.5 246.9 903 463.2 903c149.5 0 283.9-84.6 349.8-215.8 3.1-6.1-1.4-13.3-8.2-13.3z"  ></path></symbol><symbol id="icon-report" viewBox="0 0 1024 1024"><path d="M312.1 591.5c3.1 3.1 8.2 3.1 11.3 0l101.8-101.8 86.1 86.2c3.1 3.1 8.2 3.1 11.3 0l226.3-226.5c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8c-3.1-3.1-8.2-3.1-11.3 0L517 485.3l-86.1-86.2c-3.1-3.1-8.2-3.1-11.3 0L275.3 543.4c-3.1 3.1-3.1 8.2 0 11.3l36.8 36.8z"  ></path><path d="M904 160H548V96c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H120c-17.7 0-32 14.3-32 32v520c0 17.7 14.3 32 32 32h356.4v32L311.6 884.1c-3.7 2.4-4.7 7.3-2.3 11l30.3 47.2v0.1c2.4 3.7 7.4 4.7 11.1 2.3L512 838.9l161.3 105.8c3.7 2.4 8.7 1.4 11.1-2.3v-0.1l30.3-47.2c2.4-3.7 1.3-8.6-2.3-11L548 776.3V744h356c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 512H160V232h704v440z"  ></path></symbol><symbol id="icon-calendar" viewBox="0 0 1024 1024"><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32z m-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"  ></path></symbol><symbol id="icon-cloud-sync" viewBox="0 0 1024 1024"><path d="M811.4 368.9C765.6 248 648.9 162 512.2 162S258.8 247.9 213 368.8C126.9 391.5 63.5 470.2 64 563.6 64.6 668 145.6 752.9 247.6 762c4.7 0.4 8.7-3.3 8.7-8v-60.4c0-4-3-7.4-7-7.9-27-3.4-52.5-15.2-72.1-34.5-24-23.5-37.2-55.1-37.2-88.6 0-28 9.1-54.4 26.2-76.4 16.7-21.4 40.2-36.9 66.1-43.7l37.9-10 13.9-36.7c8.6-22.8 20.6-44.2 35.7-63.5 14.9-19.2 32.6-36 52.4-50 41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.3c19.9 14 37.5 30.8 52.4 50 15.1 19.3 27.1 40.7 35.7 63.5l13.8 36.6 37.8 10c54.2 14.4 92.1 63.7 92.1 120 0 33.6-13.2 65.1-37.2 88.6-19.5 19.2-44.9 31.1-71.9 34.5-4 0.5-6.9 3.9-6.9 7.9V754c0 4.7 4.1 8.4 8.8 8 101.7-9.2 182.5-94 183.2-198.2 0.6-93.4-62.7-172.1-148.6-194.9z"  ></path><path d="M376.9 656.4c1.8-33.5 15.7-64.7 39.5-88.6 25.4-25.5 60-39.8 96-39.8 36.2 0 70.3 14.1 96 39.8 1.4 1.4 2.7 2.8 4.1 4.3l-25 19.6c-5.3 4.1-3.5 12.5 3 14.1l98.2 24c5 1.2 9.9-2.6 9.9-7.7l0.5-101.3c0-6.7-7.6-10.5-12.9-6.3L663 532.7c-36.6-42-90.4-68.6-150.5-68.6-107.4 0-195 85.1-199.4 191.7-0.2 4.5 3.4 8.3 8 8.3H369c4.2-0.1 7.7-3.4 7.9-7.7zM703 664h-47.9c-4.2 0-7.7 3.3-8 7.6-1.8 33.5-15.7 64.7-39.5 88.6-25.4 25.5-60 39.8-96 39.8-36.2 0-70.3-14.1-96-39.8-1.4-1.4-2.7-2.8-4.1-4.3l25-19.6c5.3-4.1 3.5-12.5-3-14.1l-98.2-24c-5-1.2-9.9 2.6-9.9 7.7l-0.4 101.4c0 6.7 7.6 10.5 12.9 6.3l23.2-18.2c36.6 42 90.4 68.6 150.5 68.6 107.4 0 195-85.1 199.4-191.7 0.2-4.5-3.4-8.3-8-8.3z"  ></path></symbol><symbol id="icon-menu" viewBox="0 0 1024 1024"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 784H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 472H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"  ></path></symbol></svg>',
    l = (c = document.getElementsByTagName('script'))[
      c.length - 1
    ].getAttribute('data-injectcss');
  if (l && !i.__iconfont__svg__cssinject__) {
    i.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      );
    } catch (c) {
      console && console.log(c);
    }
  }
  !(function(c) {
    if (document.addEventListener)
      if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState))
        setTimeout(c, 0);
      else {
        var l = function() {
          document.removeEventListener('DOMContentLoaded', l, !1), c();
        };
        document.addEventListener('DOMContentLoaded', l, !1);
      }
    else
      document.attachEvent &&
        ((h = c),
        (o = i.document),
        (a = !1),
        (e = function() {
          try {
            o.documentElement.doScroll('left');
          } catch (c) {
            return void setTimeout(e, 50);
          }
          t();
        })(),
        (o.onreadystatechange = function() {
          'complete' == o.readyState && ((o.onreadystatechange = null), t());
        }));
    function t() {
      a || ((a = !0), h());
    }
    var h, o, a, e;
  })(function() {
    var c, l, t, h, o, a;
    ((c = document.createElement('div')).innerHTML = e),
      (e = null),
      (l = c.getElementsByTagName('svg')[0]) &&
        (l.setAttribute('aria-hidden', 'true'),
        (l.style.position = 'absolute'),
        (l.style.width = 0),
        (l.style.height = 0),
        (l.style.overflow = 'hidden'),
        (t = l),
        (h = document.body).firstChild
          ? ((o = t), (a = h.firstChild).parentNode.insertBefore(o, a))
          : h.appendChild(t));
  });
})(window);
