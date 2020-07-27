function mycheckfunc() {
    var coffee = document.forms[0];
    var txt = "";
    var i;
    for (i = 0; i < coffee.length; i++) {
        if (coffee[i].checked) {
            txt = txt + coffee[i].value + " ";
        }

    }
    return document.getElementById("p8").innerHTML = txt; //P8


}

function myfirstgen() {
    var rates = document.getElementsByName('gender');
    var rate_value;
    for (var i = 0; i < rates.length; i++) {
        if (rates[i].checked) {
            rate_value = rates[i].value;
        }
    }

    return document.getElementById('p9').innerHTML = rate_value;
}

function testVariable() {
    debugger

    var strText = document.getElementById("txtName").value;
    var strText1 = document.getElementById("txtlname").value;
    var address = document.getElementById("address").value;
    var Email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("birthday").value;
    var year = document.getElementById("year").value;

    var mycheck = mycheckfunc();
    var x = myfirstgen();
    var gen = document.getElementById("gender").value;
    document.getElementById("p1").innerHTML = strText; //p4
    document.getElementById("p2").innerHTML = strText1; //p5
    document.getElementById("p3").innerHTML = address; //p6
    document.getElementById("p4").innerHTML = Email; //p4
    document.getElementById("p5").innerHTML = phone; //p5
    document.getElementById("p6").innerHTML = dob; //p6
    document.getElementById("p7").innerHTML = year; //p7


    window.location.href = "#myform";




    document.getElementById("myform").reset();

}