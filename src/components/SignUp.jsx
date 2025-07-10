import React, { useState } from 'react';

const SignUp = () => {


    //초기값 셋팅 - 아이디, 닉네임, 비밀번호, 비밀번호확인, 이메일, 전화번호, 생년월일
    const [ id, setId ] = React.useState("");
    const [ name, setName ] = React.useState("");
    const [ password, setPassword ] = React.useState("");
    const [ passwordConfirm, setPasswordConfirm ] = React.useState("");
    const [ email, setEmail ] = React.useState("");
    const [ phone, setPhone ] = React.useState("");
    const [ birth, setBirth ] = React.useState("");

    //오류메세지 상태 저장
    const [ idMessage, setIdMessage ] = useState("");
    const [ nameMessage, setNameMessage ] = useState("");
    const [ passwordMessage, setPasswordMessage ] = useState("");
    const [ passwordConfirmMessage, setPasswordConfirmMessage ] = useState("");
    const [ emailMessage, setEmailMessage ] = useState("");
    const [ phoneMessage, setPhoneMessage ] = useState("");
    const [ birthMessage, setBirthMessage ] = useState("");



    //유효성 검사
    const [ isId, setIsId ] = useState(false);
    const [ isname, setIsName ] = useState(false);
    const [ isPassword, setIsPassword ] = useState(false);
    const [ isPasswordConfirm, setIsPasswordConfirm ] = useState(false);
    const [ isEmail, setIsEmail ] = useState(false);
    const [ isPhone, setIsPhone ] = useState(false);
    const [ isBirth, setIsBirth ] = useState(false);

    //input 입력값에 따라 조건을 걸어준다(유효성 검사)
    //예를 들어 아이디 값을 입력했을때 그 값을 저장하고 -> currentId
    //value값을 변경 시켜준다. (상태값 변경) setId(currentId)
    //그리고 조건을 저장(정규식 사용) 

    //입력값이 조건에 해당하지않으면 message값을 변경, (유효하지않습니다.등의 에러메시지 출력), 유효 상태값을 false

    //조건에 해당하면 message 값을 변경(사용가능!), 유효 상태값을 true로 바꿔줌


    const onChangeId = (e) => {
        const currentId = e.target.value;
        setId(currentId);
        const idRegExp = /^[a-zA-z0-9]{4,12}$/;

        if(!idRegExp.test(currentId)) {
            setIdMessage("4-12사이 대소문자 또는 숫자만 입력해주세요!");
            setIsId(false);
        } else {
            setIdMessage("사용가능한 아이디입니다.");
            setIsId(true);
        }
    };

    const onChangeName = (e) => {
        const currentName = e.target.value;
        setName(currentName);


        if (currentName.lenth < 2 || currentName.length > 5) {
            setNameMessage("닉네임은 2글자 이상  5글자 이하로 입력해주세요!");
            setIsName(false);
        } else {
            setNameMessage("사용 가능한 닉네임입니다.");
            setIsName(true);
        }
    };

    const onChangePassword = (e) => {
        const currentPassword = e.target.value;
        setPassword(currentPassword);
        const passwordRegExp = 
        /^(?=.*[s-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

        if(!passwordRegExp.test(currentPassword)) {
            setPasswordMessage(
                "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
            );
            setIsPassword(false);
        } else {
            setPasswordMessage("안잔힌 비밀번호 입니다.")
            setIsPassword(true);
        }
    };

    const onChangePasswordConfirm = (e) => {
        const currentPasswordConfirm = e.target.value;
        setPasswordConfirm(currentPasswordConfirm);
        if (password !== currentPasswordConfirm) {
            setPasswordConfirmMessage("땡~! 비밀번호가 똑같지 않아요");
            setIsPasswordConfirm(false);
        } else {
            setPasswordConfirmMessage("똑같은 비밀번호를 입력했습니다.");
            setIsPasswordConfirm(true);
        }
    }

    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);
        const emailRegExp = 
        /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;



        if(!emailRegExp.test(currentEmail)) {
            setEmailMessage("이메일의 형식이 올바르지 않습니다.");
            setIsEmail(false);
        } else {
            setEmailMessage("사용 가능한 이메일입니다.");
            setIsEmail(true);
        }
    };


    const onChangePhone = (getNumber) => {
        const currentPhone = getNumber;
        setPhone(currentPhone);
        const phoneRegExp = /^010-?([0-9]{3,4})-?([0-9]{4}$)/;

        if(!phoneRegExp.test(currentPhone)) {
            setPhoneMessage("올바른 형식이 아닙니다!");
            setIsPhone(false);
        } else {
            setPhoneMessage("사용 가능한 번호입니다.");
            setIsPhone(true);
        }
    };

    const addHyphen = (e) => {
        const currentNumber = e.target.value;
        setPhone(currentNumber);
        if (currentNumber.length == 3 || currentNumber.length == 8) {
            setPhone(currentNumber + "-");
            onChangePhone(currentNumber + "-");
        } else {
            onChangePhone(currentNumber);
        }
    };

    const onChangeBirth = (e) => {
        const currentBirth = e.target.value;
        setBirth(currentBirth);
        setIsBirth(true);
    };

    return (
        <div className="form_box">
            <h3>Sign up</h3>

            <div className="form">
                <div className='form-el'>
                    <label htmlFor='id'>Id</label><br />
                    <input id='id' name='id' value={id} onChange={onChangeId} />
                    <p className='message'>{idMessage}</p>
                </div>
            </div>

            <div className="form-el">
                <label htmlFor='name'>Nick Name</label><br />
                <input id="name" name="name" value={name} onChange={onChangeName} />
                <p className='message'>{nameMessage}</p>
            </div>

            <div className="form-el">
                <label htmlFor="password">Password</label><br />
                <input id="password" name="password" value={password} onChange={onChangePassword} />
                <p className="message">{passwordMessage}</p>
            </div>

            <div className="form-el">
                <label htmlFor="passwordConfirm">password Confirm</label><br />
                <input id="passwordConfirm" name="passwordConfirm" value={passwordConfirm}
                onChange={onChangePasswordConfirm} />
                <p className="message">{passwordConfirmMessage}</p>
            </div>

            <div className="form-el">
                <label htmlFor="email">Email</label><br />
                <input id="email" name="email" value={email} onChange={onChangeEmail} />
                <p className="message">{emailMessage}</p>
            </div>

            <div className="form-el">
                <label htmlFor="birth">Birth</label><br />
                <input type="date" id="birth" name="birth" value={birth} onChange={onChangeBirth} />
                <p className="message">{birthMessage}</p>
            </div>
            <div className="btn_submit">
                <button type="submit"
                    disabled={
                        isPassword == true && isPasswordConfirm == true && isPhone == true && isBirth == true ? false : true
                    }
                >Submit</button>
            </div>
        </div>
    )
}

export default SignUp