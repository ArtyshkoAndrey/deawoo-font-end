import 'bootstrap'
import * as noUiSlider from 'nouislider';

document.addEventListener('DOMContentLoaded', function(){

  // let inputSearch = document.getElementById('search')
  //
  // if (inputSearch) {
  //   inputSearch.addEventListener('keyup', function (e) {
  //     if(this.value === '') {
  //       this.style.textAlign = 'right'
  //     } else {
  //       this.style.textAlign = 'left'
  //     }
  //   })
  // }

  let mobileButtonSearch = document.getElementById('mobile__button_search')
  let firstNavbar = document.getElementById('first__navbar')
  let collapseFirstNavbar = firstNavbar.querySelector('#collapse__first_navbar')
  let searchMobileBlock = document.getElementById('search__mobile_block')

  mobileButtonSearch.addEventListener('click', function (e) {
    if (collapseFirstNavbar.classList.contains('show')) {
      document.getElementById('toggler').click()
    }

    searchMobileBlock.classList.toggle("show")
  })

  collapseFirstNavbar.addEventListener('show.bs.collapse', function () {
    if (searchMobileBlock.classList.contains('show')) {
      searchMobileBlock.classList.toggle("show")
    }
    document.body.style.overflowY = 'hidden'
  })

  collapseFirstNavbar.addEventListener('hidden.bs.collapse', function () {
    document.body.style.overflowY = 'auto'

  })

  let filterOptions = document.getElementsByClassName('filter__options')

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

  let sliders = document.getElementsByClassName('slider')

  Array.from(sliders).forEach(function (slider) {
    let sections = slider.querySelectorAll('.section');
    let slides = slider.querySelectorAll('img');



    sections.forEach(section => {
      section.addEventListener('mouseenter', function (e) {

        let lastIndicator = Array.from(sections).find(e => {
          return e.querySelectorAll('.indicator')[0].classList.contains('indicator_full')
        })
        console.log(lastIndicator)

        lastIndicator.querySelectorAll('.indicator')[0].classList.remove('indicator_full');
        this.querySelectorAll('.indicator')[0].classList.add('indicator_full');
        changeSlide(e.target, slides);
      });
    })
  })


  function changeSlide(section, slides) {
    slides.forEach(slide => {
      if (section.dataset.id === slide.dataset.id)
        slide.classList.remove('opacity-0');
      else
        slide.classList.add('opacity-0');
    })
  }



});
