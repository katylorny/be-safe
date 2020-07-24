import $ from '../local_modules/jquery/dist/jquery.min'
import Swiper from "swiper"

$(document).ready(() => {
  // eslint-disable-next-line no-console
  console.log(`document ready`)
})

$(`.header__menu-open-button`).click(function () {
  $(`.header`).toggleClass(`header--menu-opened header--white`)
  $(`body`).toggleClass(`opened-menu`)
})

// закрытие попапа
$(`.popup__close-button`).click(function () {
  $(`.popup`).addClass(`popup--closed`)
  $(`body`).removeClass(`opened-popup`)
})

// при открытии попапа:
// добавить body класс .opened-popup
// убрать у попапа класс .popup--closed

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper(`.our-products`, {
  slidesPerView: `auto`,
  spaceBetween: 20,
  centeredSlides: true,
  pagination: {
    el: `.swiper-pagination`,
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
      centeredSlides: false,
    }
  }
})

const swiperClients = new Swiper(`.clients__wrapper`, {
  slidesPerView: `auto`,
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 640px
    768: {
      slidesPerView: 5,
      // spaceBetween: 40,
    }
  }
})

const swiperBreadcrumbs = new Swiper(`.products__sections`, {
  slidesPerView: `auto`,
  spaceBetween: 10,
  // centeredSlides: true,
  breakpoints: {
    // when window width is >= 640px
    768: {
      // slidesPerView: 5,
      // spaceBetween: 40,
    }
  }
})
