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

  let mobile__button_search = document.getElementById('mobile__button_search')

  mobile__button_search.addEventListener('click', function (e) {
    let firstNavbar = document.getElementById('first__navbar')
    let searchMobileBlock = document.getElementById('search__mobile_block')
    let collapse = firstNavbar.querySelector('.navbar-collapse')
    if (collapse.classList.contains('show')) {
      document.getElementById('toggler').click()
    }

    searchMobileBlock.classList.toggle("show")
  })

});
