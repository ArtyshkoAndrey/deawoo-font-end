import 'bootstrap'
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

});
