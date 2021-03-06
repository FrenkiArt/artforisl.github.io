document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
  var preloader = document.getElementById("preloader");
  preloader.style.opacity = 0;
  preloader.style.visibility = "hidden";
  preloader.style.position = "absolute";
  
  /* наши попапы */
  var overlay = document.querySelector("#overlay");
  var popup = document.querySelectorAll(".popup");

  overlay.addEventListener("click", function (e) {
    if (e.target.classList.contains("overlay")) {
      closePopup();
    }
  }, {passive: true});

  var triger_inner_popup_top = document.querySelector(".triger_inner_popup_top");
  var inner_top_popup = document.querySelector(".inner_top_popup");

  triger_inner_popup_top.addEventListener("click", function () {
    overlay.classList.add("visible");
    inner_top_popup.classList.add("visible");
  }, {passive: true});

  document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("popup_close")) {
      closePopup();
    }
  }, {passive: true});

  var closePopup = function () {
    overlay.classList.remove("visible");
    for (i = 0; i < popup.length; i++) {
      popup[i].classList.remove("visible");
    }
    document.body.style.overflow = "auto";
  };

  var openPopup = function () {
    document.body.style.overflow = "hidden";
    overlay.classList.add("visible");
  };

  var form_header = document.getElementById("form_header");
  form_header.addEventListener("submit", function (e) {
    e.target.closest(".popup_content").classList.add("hidden");
    e.target.closest(".popup_content").nextElementSibling.classList.add("visible");
  }, {passive: true});
  var form_case = document.getElementById("form_case");
  form_case.addEventListener("submit", function (e) {
    e.target.closest(".popup_content").classList.add("hidden");
    e.target.closest(".popup_content").nextElementSibling.classList.add("visible");
  }, {passive: true});
  var form_contacts = document.getElementById("form_contacts");
  form_contacts.addEventListener("submit", function (e) {
    e.target.closest(".popup_content").classList.add("hidden");
    e.target.closest(".popup_content").nextElementSibling.classList.add("visible");
  }, {passive: true});
  var form_send_order = document.getElementById("form_send_order");
  form_send_order.addEventListener("submit", function (e) {
    e.target.closest(".popup_content").classList.add("hidden");
    e.target.closest(".popup_content").nextElementSibling.classList.add("visible");
  }, {passive: true});
  var form_send_question = document.getElementById("form_send_question");
  form_send_question.addEventListener("submit", function (e) {
    e.target.closest(".popup_content").classList.add("hidden");
    e.target.closest(".popup_content").nextElementSibling.classList.add("visible");
  }, {passive: true});



  var footer_btn_order = document.getElementById("footer_btn_order");
  var popup_send_order = document.querySelector(".popup_send_order");
  var send_question = document.getElementById("send_question");
  var popup_send_question = document.querySelector(".popup_send_question");
  var popup_cases = document.querySelector(".popup_cases");

  footer_btn_order.addEventListener("click", function () {
    openPopup();
    popup_send_order.classList.add("visible");
  }, {passive: true});

  send_question.addEventListener("click", function () {
    openPopup();
    popup_send_question.classList.add("visible");
  }, {passive: true});

  var btn_watch_presentation = document.querySelectorAll(".btn_watch_presentation");
  for (i = 0; i < btn_watch_presentation.length; i++) {
    btn_watch_presentation[i].addEventListener("click", function (e) {
      openPopup();
      popup_cases.classList.add("visible");
      for (h = 0; h < btn_watch_presentation.length; h++) {
        var currentNumber = h;
        currentNumber = parseInt(currentNumber);
        if (btn_watch_presentation[h] === e.target) {
          /* alert("Карточка номер "+ currentNumber); */
          swiperCaseSlider.slideTo(currentNumber);
        }
      }
    }, {passive: true});
  }



  /* вызываем слайдеры */

  var swiperStandart = new Swiper('.swiper-standart', {
    initialSlide: 0,
    speed: 700,
    spaceBetween: 0,
    slidesPerView: 1,
    loop: false,
    grabCursor: true,
    /* centeredSlides: true, */
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function (number) {
        switch (number) {
          case 1:
            myNum = '01';
            break;
          case 2:
            myNum = '02';
            break;
          case 3:
            myNum = '03';
            break;
          case 4:
            myNum = '04';
            break;
          case 5:
            myNum = '05';
            break;
          case 6:
            myNum = '06';
            break;
          case 7:
            myNum = '07';
            break;
          case 8:
            myNum = '08';
            break;
          case 9:
            myNum = '09';
            break;
          default:
            myNum = number;
        }
        return myNum;
      },
      formatFractionTotal: function (number) {
        switch (number) {
          case 1:
            myNum = '01';
            break;
          case 2:
            myNum = '02';
            break;
          case 3:
            myNum = '03';
            break;
          case 4:
            myNum = '04';
            break;
          case 5:
            myNum = '05';
            break;
          case 6:
            myNum = '06';
            break;
          case 7:
            myNum = '07';
            break;
          case 8:
            myNum = '08';
            break;
          case 9:
            myNum = '09';
            break;
          default:
            myNum = number;
        }
        return myNum;
      },


    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1024: {

      },
      768: {

      },
    }
  });
  var swiperCaseSlider = new Swiper('.case_slider', {
    initialSlide: 0,
    speed: 700,
    spaceBetween: 0,
    slidesPerView: 1,
    loop: false,
    grabCursor: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1024: {

      },
      768: {
        spaceBetween: 50,
      },
    }
  });
  var main_slider = new Swiper('.main_slider', {
    initialSlide: 0,
    speed: 700,
    spaceBetween: 0,
    slidesPerView: 1,
    loop: false,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function (number) {
        switch (number) {
          case 1:
            myNum = '01';
            break;
          case 2:
            myNum = '02';
            break;
          case 3:
            myNum = '03';
            break;
          case 4:
            myNum = '04';
            break;
          case 5:
            myNum = '05';
            break;
          case 6:
            myNum = '06';
            break;
          case 7:
            myNum = '07';
            break;
          case 8:
            myNum = '08';
            break;
          case 9:
            myNum = '09';
            break;
          default:
            myNum = number;
        }
        return myNum;
      },
      formatFractionTotal: function (number) {
        switch (number) {
          case 1:
            myNum = '01';
            break;
          case 2:
            myNum = '02';
            break;
          case 3:
            myNum = '03';
            break;
          case 4:
            myNum = '04';
            break;
          case 5:
            myNum = '05';
            break;
          case 6:
            myNum = '06';
            break;
          case 7:
            myNum = '07';
            break;
          case 8:
            myNum = '08';
            break;
          case 9:
            myNum = '09';
            break;
          default:
            myNum = number;
        }
        return myNum;
      },


    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1024: {

      },
      768: {

      },
    }
  });
  var share_exp = new Swiper('.share_exp_slider', {
    initialSlide: 0,
    speed: 700,
    spaceBetween: 0,
    slidesPerView: 3,
    loop: false,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function (number) {
        switch (number) {
          case 1:
            myNum = '01';
            break;
          case 2:
            myNum = '02';
            break;
          case 3:
            myNum = '03';
            break;
          case 4:
            myNum = '04';
            break;
          case 5:
            myNum = '05';
            break;
          case 6:
            myNum = '06';
            break;
          case 7:
            myNum = '07';
            break;
          case 8:
            myNum = '08';
            break;
          case 9:
            myNum = '09';
            break;
          default:
            myNum = number;
        }
        return myNum;
      },
      formatFractionTotal: function (number) {
        switch (number) {
          case 1:
            myNum = '01';
            break;
          case 2:
            myNum = '02';
            break;
          case 3:
            myNum = '03';
            break;
          case 4:
            myNum = '04';
            break;
          case 5:
            myNum = '05';
            break;
          case 6:
            myNum = '06';
            break;
          case 7:
            myNum = '07';
            break;
          case 8:
            myNum = '08';
            break;
          case 9:
            myNum = '09';
            break;
          default:
            myNum = number;
        }
        return myNum;
      },


    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 1,
      },
    }
  });
  
  


  /* js для аккардеона и табера */

  var acc_block = document.querySelectorAll(".acc_block");
  for (i = 0; i < acc_block.length; i++) {
    acc_block[i].addEventListener("click", function () {
      for (x = 0; x < acc_block.length; x++) {
        acc_block[x].classList.remove("active");
      }
      this.classList.add("active");
    }, {passive: true});
  }

  var acc_tab = document.querySelectorAll(".acc_tab");
  var acc_conditions = document.querySelector(".acc_conditions");
  var acc_risks = document.querySelector(".acc_risks");
  var acc_guarantee = document.querySelector(".acc_guarantee");

  for (i = 0; i < acc_tab.length; i++) {

    acc_tab[i].addEventListener("click", function () {
      for (i = 0; i < acc_tab.length; i++) {
        acc_tab[i].classList.remove("active");
      }
      this.classList.add("active");
      if (this.classList.contains("js_acc_conditions_tab")) {
        acc_conditions.style.display = "block";
        acc_risks.style.display = "none";
        acc_guarantee.style.display = "none";
      }
      if (this.classList.contains("js_acc_risks_tab")) {
        acc_conditions.style.display = "none";
        acc_risks.style.display = "block";
        acc_guarantee.style.display = "none";
      }
      if (this.classList.contains("js_acc_guarantee_tab")) {
        acc_conditions.style.display = "none";
        acc_risks.style.display = "none";
        acc_guarantee.style.display = "block";
      }
    }, {passive: true});

  }
  /* конец для аккардеона и табера */

  /* для табера Мыслим масштабно */
  var js_labels_title = document.querySelectorAll(".js_labels_title");
  var labels_imgs = document.querySelectorAll(".labels_imgs");

  for (i = 0; i < js_labels_title.length; i++) {
    js_labels_title[i].addEventListener("mouseover", function () {
      js_labels_title.forEach(function (el) {
        el.classList.remove("active");
      });

      this.classList.add("active");

      for (i = 0; i < js_labels_title.length; i++) {
        if (js_labels_title[i].classList.contains("active")) {
          labels_imgs.forEach(function (el) {
            el.classList.remove("active");
          });
          labels_imgs[i].classList.add("active");
        }
      }
    }, {passive: true});
  }
  /* конец для табера Мыслим масштабно */

  /* для табера our_expertise */

  var js_title_expertise = document.querySelectorAll(".js_title_expertise");
  var js_taber_content_expertise = document.querySelectorAll(".js_taber_content_expertise");

  for (i = 0; i < js_title_expertise.length; i++) {
    js_title_expertise[i].addEventListener("mouseover", function () {
      js_title_expertise.forEach(function (el) {
        el.classList.remove("active");
      });
      this.classList.add("active");

      for (i = 0; i < js_title_expertise.length; i++) {
        if (js_title_expertise[i].classList.contains("active")) {
          js_taber_content_expertise.forEach(function (el) {
            el.classList.remove("active");
          });
          js_taber_content_expertise[i].classList.add("active");
        }
      }
    }, {passive: true});
  }
  /* конец для табера our_expertise */

  /* плавный скролл по ссылке */

  var goTo = document.querySelectorAll(".go_to");
  for (i = 0; i < goTo.length; i++) {
    var element = goTo[i];
    element.addEventListener("click", function (e) {
      e.preventDefault();
      var scrollEl = e.currentTarget.getAttribute("href");
      if (scrollEl.length != 0) {
        try {
          var ourTarget = document.querySelector(scrollEl);
          window.scrollTo({
            top: ourTarget.offsetTop,
            behavior: "smooth"
          });
        } catch (error) {
          console.error(error + " проставьте верные id на которые ведёт ссылка");
        }

      }
    });
  }
  /* конец плавный скролл по ссылке */

  /* для кнопки "показать ещё" */
  var show_more = document.querySelectorAll(".show_more");
  for (var i = 0; i < show_more.length; i++) {
    show_more[i].addEventListener("click", function (e) {
      e.preventDefault();
      e.target.closest(".content").classList.add("more");
    });
  }
  /* конец для кнопки "показать ещё" */

  /* события для навигации в мобильном меню */
  var nav_circle = document.querySelector(".nav_circle");
  var navigationUl = document.querySelector(".navigation_ul");

  nav_circle.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("active")) {
      e.currentTarget.classList.remove("active");
      navigationUl.classList.remove("nav_action");
    } else {
      e.currentTarget.classList.add("active");
      navigationUl.classList.add("nav_action");
    }
  }, {passive: true});

  /* скрипты в зависимости от размера экрана */

  if (window.matchMedia("(min-width: 769px)").matches) {} else {
    /* the viewport is less than 769px pixels wide */
    /* для навигации для мобильников */
    navigationUl.addEventListener("click", function () {
      navigationUl.classList.remove("nav_action");
      nav_circle.classList.remove("active");
    }, {passive: true});
    /* перемещение блок write_us */
    var write_us = document.querySelector("#write_us");
    var answers = document.querySelector("#answers");
    answers.children[0].appendChild(write_us);

    /* слайдеры для мобильников */
    

  }

  /* для появления кнопки скролла вверх */

  var scroll_top = document.getElementById("scroll_top");
  var scrollHeightDocument = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  window.addEventListener("scroll", function () {
    /* console.log(window.pageYOffset/scrollHeightDocument); */
    if (window.pageYOffset > 1500) {
      scroll_top.classList.add("visible");
    } else {
      scroll_top.classList.remove("visible");
    }
    if (window.pageYOffset / scrollHeightDocument > 0.82) {
      scroll_top.classList.add("bottom");
    } else {
      scroll_top.classList.remove("bottom");
    }


  },{passive: true});


  /* Плавное появление элементов на странице */

  var js_anime = document.querySelectorAll(".js_anime");
  var custom_io = document.querySelectorAll(".custom_io");

  window.addEventListener("scroll", function () {
    for_js_anime();
    funcCustomIO();
  }, 
  {passive: true}
  );

  function for_js_anime() {
    for (i = 0; i < js_anime.length; i++) {
      if (js_anime[i].offsetTop + js_anime[i].offsetHeight / 2 < window.pageYOffset + window.innerHeight) {
        js_anime[i].classList.add("animated");
      } else {
        js_anime[i].classList.remove("animated");
      }
    }
  }

  var funcCustomIO = function() {
    for (var i = 0; i < custom_io.length; i++) {
      if (custom_io[i].offsetTop / 2 < window.pageYOffset + window.innerHeight) {
        custom_io[i].classList.add("show_img");
      } else {
      }
    }
  };

  /* слайдер основные направления */
  var our_expertise_slider = new Swiper('.our_expertise_slider', {
    /* initialSlide: 0,
    spaceBetween: 0,
    slidesPerView: 0, */
    speed: 700,
    slidesPerColumnFill: 'row',
    slidesPerColumn: 3,
    spaceBetween: 4,
    slidesPerView: 2,
    slidesPerGroup: 6,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function (number) {
        switch (number) {
          case 1:
            myNum = '01';
            break;
          case 2:
            myNum = '02';
            break;
          case 3:
            myNum = '03';
            break;
          case 4:
            myNum = '04';
            break;
          case 5:
            myNum = '05';
            break;
          case 6:
            myNum = '06';
            break;
          case 7:
            myNum = '07';
            break;
          case 8:
            myNum = '08';
            break;
          case 9:
            myNum = '09';
            break;
          default:
            myNum = number;
        }
        return myNum;
      },
      formatFractionTotal: function (number) {
        switch (number) {
          case 1:
            myNum = '01';
            break;
          case 2:
            myNum = '02';
            break;
          case 3:
            myNum = '03';
            break;
          case 4:
            myNum = '04';
            break;
          case 5:
            myNum = '05';
            break;
          case 6:
            myNum = '06';
            break;
          case 7:
            myNum = '07';
            break;
          case 8:
            myNum = '08';
            break;
          case 9:
            myNum = '09';
            break;
          default:
            myNum = number;
        }
        return myNum;
      },


    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1024: {
        
      },
      768: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 0,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
      },
    }
  }); 

  /* маска для телефона */

  var inputPhone = document.querySelectorAll(".input_phone");
  for (i = 0; i < inputPhone.length; i++) {
    var cleave = new Cleave(inputPhone[i], {
      phone: true,
      /* prefix: '+7',*/
      delimiter: '-',
      phoneRegionCode: 'RU'
    });
  }
  /* конец маски для телефона */
  
  for_js_anime();
  

  var io = new IntersectionObserver(
    entries => {
      console.log(entries);
    },
    {
      /* Using default options. Details below */
    }
  );
  // Start observing an element
  io.observe(element);
  
  // Stop observing an element
  // io.unobserve(element);
  
  // Disable entire IntersectionObserver
  // io.disconnect();
  
  

});