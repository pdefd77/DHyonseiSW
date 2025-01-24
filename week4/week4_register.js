function login() {
    const id = document.getElementById("idInput").value;
    const pw = document.getElementById("pwInput").value;

    if(id == '' || pw == '') {
        return;
    }

    const registerList = JSON.parse(localStorage.getItem('registerList'));

    if(registerList && id in registerList && registerList[id] == pw){
        alert("로그인 성공");
    }else{
        alert("아이디 혹은 비밀번호가 다릅니다.");
    }
}

function reset() {
    window.localStorage.removeItem('registerList');
}

/* */

function registerCheck() {
    const id = document.getElementById("idInput").value;
    const pw = document.getElementById("pwInput").value;
    const pw2 = document.getElementById("pw2Input").value;

    if(id == '' || pw == '' || pw2 == '') {
        return;
    }else if(pw != pw2) {
        alert("비밀번호 확인이 일치하지 않습니다.");
        return;
    }else if(!/^[A-Za-z0-9]{4,8}$/.test(pw) || !/[0-9]/.test(pw) || !/[A-Za-z]/.test(pw)) {
        alert("비밀번호 입력 양식이 다릅니다.");
        return;
    }

    const registerList = JSON.parse(localStorage.getItem('registerList'));

    if(registerList){
        if(id in registerList) {
            alert("중복된 아이디입니다.");
            return;
        }

        registerList[id] = pw;

        localStorage.setItem('registerList', JSON.stringify(registerList));
    }else{
        const newRegisterList = {};
        newRegisterList[id] = pw;
        
        localStorage.setItem('registerList', JSON.stringify(newRegisterList));
    }

    window.close();
}