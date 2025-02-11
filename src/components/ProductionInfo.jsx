import React from 'react';
import styles from '../styles/ProductionInfo.module.css';

const ProductionInfo = ({ product }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>상품 정보</h2>
            <div className={styles.content}>
                <div className={styles.infoRow}>
                    <label>상품 이름:</label>
                    <span>{product.name}</span>
                </div>
                <div className={styles.infoRow}>
                    <label>상품 가격:</label>
                    <span>{product.price}</span>
                </div>
                <div className={styles.infoRow}>
                    <label>재고 수량:</label>
                    <span>{product.quantity}</span>
                </div>
                <div className={styles.infoRow}>
                    <label>광고 문구:</label>
                    <span>{product.introduction}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductionInfo;
