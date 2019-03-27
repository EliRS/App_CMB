$(document).on('keyup','#numeric',function(){
  $(this).val(this.value.replace(/\D/g, ''));
});

$(document).on('click','#igual',function(){
  var sexo = $('input[name=sexo]:checked').val();
  var taxa = parseFloat($('input[name=taxa]:checked').val());
  if($("#altura").val()==""||$('.idade').val()=="" || $('.peso').val()==""){
    $("#mss").text("Preencha todos os campos para continuar ");
  }else{
    var altura = parseFloat($("#altura").val());
    var idade = parseFloat($('.idade').val());
    var peso = parseFloat($('.peso').val());
    var mb;
    if(sexo == "F"){
      mb =  taxa * (655 + ((9.6 * peso )+ (1.8 * altura) - (4.7 * idade)));
    }else{
      mb =  taxa * (66 + ((13.7 * peso )+ (5 * altura) - (6.8 * idade)));
    }
    $("#mss").text("Quantidade Que o seu corpo Precisa em 24 é de " + mb);
  }
});
function sumiu(){
  document.getElementById('txtSexo').hidden = false;
}