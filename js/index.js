$(function () {
    const $inputTelephon = $('.inputTelephon')
    const $inputMessage = $('.inputMessage')
    $('#callback-button').click(function () {
      $('.modal').addClass('modal_active')
    })

    $('.modal-close-button').click(function(){
        $(".modal").removeClass('modal_active')

  });

    $('.buttoncall').click(function(){
        $('.inputTelephon').val("")
        $('.inputMessage').val("")
    })

  })

  