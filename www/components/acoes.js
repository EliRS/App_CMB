$(document).on('keyup','#numeric',function(){
  $(this).val(this.value.replace(/\D/g, ''));
});

function sumiu(){
  document.getElementById('txtSexo').hidden = false;
}