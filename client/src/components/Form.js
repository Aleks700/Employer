import React, { useState, useContext } from 'react';
import UserContext from '../userContext/UserContext';
export default function Form() {


    const userContext = useContext(UserContext);
    const [forms, setForms] = useState(true);
    const PostForm = (e) => {
        e.preventDefault();
        console.log('console was clicked');
        const FLOOR = CABINET.slice(0, 1);
        console.log(FLOOR);
        const formBody = {
            DEPARTMENT: DEPARTMENT,
            NAME: NAME,
            POSITION: POSITION,
            CABINET: CABINET,
            IP: IP,
            ENTER_POINT: ENTER_POINT,
            DESCTOP: DESCTOP,
            MONITOR: MONITOR,
            PRINTER: PRINTER,
            FLOOR: FLOOR
        };
        console.log(formBody);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formBody)
        };
        console.log(requestOptions);
        setNAME('');
        setPOSITION('');
        setCABINET('');
        setIP('');
        setENTER_POINT('');
        setDESCTOP('');
        setMONITOR('');
        setPRINTER('');
        setDEPARTMENT('SKTB');
        fetch('http://10.0.15.226:8000/api', requestOptions);
        userContext.Reloaded();
    }


    const [NAME, setNAME] = useState('');
    const ChangeNAME = (event) => {
        setNAME(event.target.value);
    }
    const [POSITION, setPOSITION] = useState('');
    const ChangePOSITION = (event) => {
        setPOSITION(event.target.value);
    }
    const [CABINET, setCABINET] = useState('');
    const ChangeCABINET = (event) => {
        setCABINET(event.target.value);
    }
    const [IP, setIP] = useState('10.0.');
    const ChangeIP = (event) => {
        setIP(event.target.value);
    }
    const [ENTER_POINT, setENTER_POINT] = useState('');
    const ChangeENTER_POINT = (event) => {
        setENTER_POINT(event.target.value);
    }
    const [DESCTOP, setDESCTOP] = useState('0100');
    const ChangeDESCTOP = (event) => {
        setDESCTOP(event.target.value);
    }
    const [MONITOR, setMONITOR] = useState('0100');
    const ChangeMONITOR = (event) => {
        setMONITOR(event.target.value);
    }
    const [PRINTER, setPRINTER] = useState('');
    const ChangePRINTER = (event) => {
        setPRINTER(event.target.value);
    }
    const [DEPARTMENT, setDEPARTMENT] = useState('SKTB');
    const ChangeDEPARTMENT = (event) => {
        setDEPARTMENT(event.target.value);
        console.log(event.target.value);
    };


    return (
        <row>
            <div>
                <h1>???????????????? ????????????????????????</h1>
                <form className='ourForm main-form' >
                    <div class="form-group">
                        <label><p>??????</p></label>
                        <input type="text" name="NAME" value={NAME} className="form-control" onChange={(e) => { ChangeNAME(e) }}></input>
                    </div>
                    <div class="form-group">
                        <label><p>??????????????????</p></label>
                        <input type="text" name="POSITION" value={POSITION} className="form-control" onChange={(e) => { ChangePOSITION(e) }}></input></div>
                    <div class="form-group">
                        <label><p>??????????????</p></label>
                        <input type="text" name="CABINET" value={CABINET} className="form-control" onChange={(e) => { ChangeCABINET(e) }}></input>
                    </div>
                    <div class="form-group">
                        <label><p>IP</p></label>
                        <input type="text" name="IP" value={IP} className="form-control" onChange={(e) => { ChangeIP(e) }}></input>
                    </div>
                    <div class="form-group">
                        <label><p>??????????</p></label>
                        <input type="text" name="ENTER_POINT" value={ENTER_POINT} className="form-control" onChange={(e) => { ChangeENTER_POINT(e) }}></input>
                    </div>
                    <div class="form-group">
                        <label><p>?????????????????? ????????</p></label>
                        <input type="text" name="DESCTOP" value={DESCTOP} className="form-control" onChange={(e) => { ChangeDESCTOP(e) }}></input>
                    </div>
                    <div class="form-group">
                        <label><p>??????????????</p></label>
                        <input type="text" name="MONITOR" value={MONITOR} className="form-control" onChange={(e) => { ChangeMONITOR(e) }}></input>
                    </div>
                    <div class="form-group">
                        <label><p>??????????????</p></label>
                        <input type="text" name="PRINTER" value={PRINTER} className="form-control" onChange={(e) => { ChangePRINTER(e) }}></input>
                    </div>
                    <div class="form-group">
                        <label><p>????????????</p></label>
                        <select class="form-control" id="exampleFormControlSelect1" value={DEPARTMENT} onChange={(e) => { ChangeDEPARTMENT(e) }} >
                            <option value='SKTB' selected  >????????</option>
                            <option value='DZZ'  >??????</option>
                            <option value='SVSN' >????????</option>
                            <option value='SBIK' >????????</option>
                        </select>
                    </div>



                    <button class="btn btn-primary" onClick={(e) => { PostForm(e) }}>????????????????</button>
                    {/* <select classNames="form-control  form-control">
                    <option value='SKTB' >????????</option>
                    <option value='DZZ' selected>??????</option>
                    <option value='SVSN'>????????</option>
                    <option value='SBIK'>????????</option>
                </select> */}

                </form>
            </div>
        </row>
    )
}
