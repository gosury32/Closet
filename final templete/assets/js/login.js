
function login(){
    var id = document.querySelector('#user_id');
    var pw = document.querySelector('#user_password');

    if(id.value == "" || pw.value =="") {
        alert("로그인을 할 수 없습니다.");
    }
    else{
        location.href='index.html';
    }
}


function back(){
    history.go(-1);
}

function create_id(){
    var new_id=document.querySelector('#new_id');
    var new_pw=document.querySelector('#new_pw');
    var email=document.querySelector('#email');

    if(new_id.value == ""){
        alert("아이디를 다시 입력해주세요.");
    }
    else{
        if ((new_pw.value).length < 10 || (new_pw.value).length>16){
            alert("비밀번호를 다시 입력해주세요.");
        }
        else{
            if(email=""){
                alert("이메일주소를 다시입력해주세요.");
            }
            else{
                location.href ='login.html';
            }
        }
    }
}