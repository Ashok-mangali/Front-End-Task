function add() {
    var num1 = $("#num1").val();
    var num2 = $("#num2").val();
    var answer = parseInt(num1) + parseInt(num2);
    $("#total").val(answer);
  }
  