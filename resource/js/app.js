/*
 * Copyright (c) 2021.
 * This code is the property of the Fulliton developer.
 * Write all questions and suggestions on the Vkontakte social network https://vk.com/fulliton
 */

import 'bootstrap'
import * as noUiSlider from 'nouislider';

/*
 * If the page is loaded - Start
 */
document.addEventListener('DOMContentLoaded', function(){
    /*
   * mobileButtonSearch   - button to open mobile search
   * firstNavbar          - first menu n header
   * collapseFirstNavbar  - dropdown block
   * searchMobileBlock    - block with mobile search
   * filterOptions        - filtering blocks with slider
   * sliders              - sections for switching photos
   * scrollPosition       - positioning, IOS fix
   */
  let mobileButtonSearch = document.getElementById('mobile__button_search')
  let firstNavbar = document.getElementById('first__navbar')
  let collapseFirstNavbar = firstNavbar.querySelector('#collapse__first_navbar')
  let searchMobileBlock = document.getElementById('search__mobile_block')
  let filterOptions  = document.getElementsByClassName('filter__options')
  let sliders = document.getElementsByClassName('slider')
  let scrollPosition;

  /*
   * Listener if you have opened mobile search
   */
  mobileButtonSearch.addEventListener('click', function (e) {
    if (collapseFirstNavbar.classList.contains('show')) {
      document.getElementById('toggler').click()
    }
    searchMobileBlock.classList.toggle("show")
  })

  /*
   * Listener if the menu is open, for mobile phones
   */
  collapseFirstNavbar.addEventListener('show.bs.collapse', function () {
    if (searchMobileBlock.classList.contains('show')) {
      searchMobileBlock.classList.toggle("show")
    }
    document.body.style.overflowY = 'hidden'
    scrollPosition = window.pageYOffset;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
  })

  /*
   * Listener if the menu is closed, for mobile phones
   */
  collapseFirstNavbar.addEventListener('hidden.bs.collapse', function () {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
  })

  /*
   * Auto close menu if screen is desktop
   */
  window.addEventListener('resize', function(event) {
    let height = event.target.innerHeight
    let width = event.target.innerWidth

    if (width >= 992) {
      if (collapseFirstNavbar.classList.contains('show')) {
        document.getElementById('toggler').click()
      }
    }

    // if (width <= 768) {
    //   let a = document.querySelectorAll('footer a[data-toggle="collapse"]')
    //   a.dataset.bsToggle = "collapse"
    // } else {
    //   let a = document.querySelectorAll('footer a[data-toggle="collapse"]')
    //   a.dataset.bsToggle = ""
    // }
  }, true);

  /*
   * Initializing Filters
   */
  if (filterOptions) {
    Array.from(filterOptions).forEach(filter => {
      console.log(filter.dataset)
      let uiMin = Number(filter.dataset.uiMin)
      let uiMax = Number(filter.dataset.uiMax)
      let range = filter.querySelector('.range')

      let startInput = filter.querySelector('input.start__range')
      let endInput = filter.querySelector('input.end__range')

      console.log(startInput, endInput)

      noUiSlider.create(range, {
        range: {
          'min': uiMin,
          'max': uiMax
        },
        step: 1,
        start: [uiMin, uiMax],
        connect: true,
        orientation: 'horizontal',
      })

      range.noUiSlider.on('update', ( values, handle ) => {
        let value = Number(values[handle]);
        if ( handle ) {
          endInput.value= Number(value)
        } else {
          startInput.value = Number(value)
        }
      })

      startInput.addEventListener('change', function () {
        range.noUiSlider.set([this.value, null]);
      });

      endInput.addEventListener('change', function () {
        range.noUiSlider.set([null, this.value]);
      });

    })
  }

  /*
   * Initialization of sliders
   */
  if (sliders) {
    Array.from(sliders).forEach(function (slider) {
      let sections = slider.querySelectorAll('.section');
      let imgInSlider = slider.querySelectorAll('img');

      sections.forEach(section => {
        section.addEventListener('mouseenter', function (e) {

          let lastIndicator = Array.from(sections).find(e => {
            return e.querySelectorAll('.indicator')[0].classList.contains('indicator_full')
          })
          console.log(lastIndicator)

          lastIndicator.querySelectorAll('.indicator')[0].classList.remove('indicator_full');
          this.querySelectorAll('.indicator')[0].classList.add('indicator_full');
          changeSlide(e.target, imgInSlider);
        });
      })
    })
  }

  /*
   * toggle sliders in sliders of item
   */
  function changeSlide(section, imgInSlider) {
    imgInSlider.forEach(slide => {
      if (section.dataset.id === slide.dataset.id)
        slide.classList.remove('opacity-0');
      else
        slide.classList.add('opacity-0');
    })
  }
});
