import React, {useEffect, useState} from 'react';
import {link, useNavigate} from "react-router-dom";
import axios from 'axios';
import styles from '../styles/MyInfo.module.css';
import classNames from 'classnames';

const MyInfo = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('홍길동');
  const [nickname, setNickname] = useState('');
  const [birth_day, setBirthday] = useState('');
  const [address, setAddress] = useState('');

  const [broadcasts, setBroadcasts] = useState([]);
  const [payments, setPayments] = useState([]);
  const [deliverys, setDeliverys] = useState([]);

  const [hideSubmitButton, setHideSubmitButton] = useState(true);
  const [hideEditButton, setHideEditButton] = useState(false);
  const [hideInput, setHideInput] = useState(true);
  const [hideInputValue, setHideInputValue] = useState(true);

  useEffect(() => {
    const getBroadcasts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/user/broadcast');
        console.log(response.data);
        setBroadcasts(response.data.data);
      } catch (error) {
        console.error('Error fetching broadcasts:', error);
      }
    };

    // login 붙이고 다시 수정 예정.
    // 현재는 구동하면 에러가 나는 것이 당연하니 놀라지 마시길.
    // 수정 예정일: 24.7.29 이전까지
    const getPayments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/user/1/payment');
        console.log(response.data);
        setPayments(response.data.data);
      } catch (error) {
        console.error('Error fetching broadcasts:', error);
      }
    };

    const getDelivery = async () => {
      try {
        const response = await axios.get('http://localhost:8080/user/delivery');
        console.log(response.data);
        setDeliverys(response.data.data);
      } catch (error) {
        console.error('Error fetching broadcasts:', error);
      }
    };

    getBroadcasts();
    getPayments();
    getDelivery();
  }, []);


  const handlerUsernameInputChange = (event) => {
    setNickname(event.target.value);
  }

  const handlerBirthdateInputChange = (event) => {
    setBirthday(event.target.value);
  }

  const handleAddressInputChange = (event) => {
    setAddress(event.target.value);
  };

  const sendProfileInfo = async () => {
    try {
      const response = await axios.put('http://localhost:8080/user', {
        nickname,
        birth_day,
        address
      });
      console.log("Server Response: ", response.data);
      setHideSubmitButton(true);
      setHideEditButton(false);
      setHideInputValue(false);
      setHideInput(true);

      console.log(response.data.data);

      setNickname(response.data.data.nick_name);
      setName(response.data.data.name);
      setBirthday(response.data.data.birth_day);
      setAddress(response.data.data.address);
    } catch (error) {
      console.error("프로필 수정 오류: ", error);
    }
  }

  const handleEditClick = () => {
    setHideSubmitButton(false);
    setHideInput(false);
    setHideEditButton(true);
    setHideInputValue(true);
  }

  const handleBroadcastHistoryClick = () => {
    navigate('/broadcastHistory');
  }

  const handlePaymentHistoryClick = () => {
    navigate('/paymentHistory');
  }

  const handleDeliveryHistoryClick = () => {
    navigate('/deliveryHistory');
  }

  return (
    <div className={styles.myinfoContainer}>
      <div className={styles.infoContainer}>
        <div className={styles.nameBox}>
          <h1>{name}</h1>
          <button className={classNames({[styles.hide]: hideEditButton})}
                  onClick={handleEditClick}>Edit</button>
        </div>
        <div className={styles.infoBox}>
          <h3>닉네임</h3>
          <input type="text" className={classNames({[styles.hide]: hideInput})} value={nickname} onChange={handlerUsernameInputChange}/>
          <span className={classNames({[styles.hide]: hideInputValue})}>{nickname}</span>
        </div>
        <div className={styles.infoBox}>
          <h3>생년월일</h3>
          <input type="date" value={birth_day}
                 className={classNames({[styles.hide]: hideInput})}
                 onChange={handlerBirthdateInputChange}/>
          <span className={classNames({[styles.hide]: hideInputValue})}>{birth_day}</span>
        </div>
        <div className={styles.infoBox}>
          <h3>주소<br />(기본 배송지)</h3>
          <input type="text" value={address} className={classNames({[styles.hide]: hideInput})} onChange={handleAddressInputChange}/>
          <span className={classNames({[styles.hide]: hideInputValue})}>{address}</span>
        </div>
        <button className={classNames(styles.infoBtn, { [styles.hide]: hideSubmitButton })} onClick={sendProfileInfo}>확인</button>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actContainer}>
        <div className={styles.actBox}>
          <div className={styles.actName}>
            <span>방송 내역</span>
            <button onClick={handleBroadcastHistoryClick}>더보기</button>
          </div>
          <div className={styles.actContentContainer}>
            {
              broadcasts.map((content, index) => (
                  <div className={styles.actContent} key={index}>
                    <span className={styles.actContentState}>{content.status}</span>
                    <span
                        className={styles.actContentTitle}>{content.title}</span>
                    <span>상품명: {content.product_name}</span>
                    <span
                        className={styles.actContentTime}>{content.air_time.replace('T', ' ')}</span>
                  </div>
              ))
            }
          </div>
        </div>
        <div className={styles.actBox}>
          <div className={styles.actName}>
            <span>주문 내역</span>
            <button onClick={handlePaymentHistoryClick}>더보기</button>
          </div>
          <div className={styles.actContentContainer}>
            {
              payments.map((content, index) => (
                  <div className={styles.orderContent} key={index}>
                    <span className={styles.orderContentName}>content.product_name</span>
                    <span>{content.product_quantity} 개</span>
                    <span>{content.amount} 원</span>
                    <span>{content.paymentMethod}</span>
                    <span className={styles.orderContentTime}>{content.createAt.replace('T', ' ')}</span>
                  </div>
              ))
            }
            <div className={styles.orderContent}>
              <span className={styles.orderContentName}>선산 곱창</span>
              <span>6 개</span>
              <span>60000 원</span>
              <span>카카오페이</span>
              <span className={styles.orderContentTime}>2024/06/23</span>
            </div>
            <div className={styles.orderContent}>
              <span className={styles.orderContentName}>선산 곱창</span>
              <span>6 개</span>
              <span>60000 원</span>
              <span>카카오페이</span>
              <span className={styles.orderContentTime}>2024/06/23</span>
            </div>
          </div>
        </div>
        <div className={styles.actBox}>
          <div className={styles.actName}>
            <span>배송 정보</span>
            <button onClick={handleDeliveryHistoryClick}>더보기</button>
          </div>
          <div className={styles.actContentContainer}>
            {
              deliverys.map((content, index) => (
                  <div className={styles.deliveryContent} key={index}>
                    <span className={styles.deliveryState}>{content.order_status}</span>
                    <span>{content.product_name}</span>
                    <span>{content.address}</span>
                  </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;