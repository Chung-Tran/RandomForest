'use client'
import React from 'react'
import styles from './menwatch.module.css'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'
import SingleProduct from '@/component/SingleProduct/singleProduct';
import img from '../../public/dong-ho-tissot-t41.1.183.34-nu-tu-dong-day-inox-600x600.jpg'


const MenWatch = () => {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h3>trang chủ / </h3>
          <h3> &nbsp; đồng hồ nam</h3>
        </div>
        <div className={styles.filter}>
          <p>Xem tất cả 8 kết quả</p>
          <select >
            <option value="a">Thứ tự mặc định</option>
            <option value="b">Thứ tự theo mức độ phổ biến</option>
            <option value="c">Thứ tự theo điểm đánh giá</option>
            <option value="d">Thứ tự theo sản phẩm mới</option>
            <option value="d">Thứ tự theo giá: thấp đến cao</option>
            <option value="d">Thứ tự theo giá: cao đến thấp</option>
          </select>
        </div>
      </div>

      <div className={styles.listproduct}>
        <div className={styles.category}>
          <div className={styles.titlecategory}>
            <h4>Danh mục sản phẩm</h4>
          </div>
          <div className={ `${isOpen ? styles.toogleopen : ''} ${styles.listcategory}`}>
            <ul >
              <li  className={styles.listmenu}>Đồng hồ nam</li>
              <li className={styles.listmenu}>Đồng hồ nữ</li>
              <li className={styles.listmenu}>Đồng hồ đôi</li>
              <li className={styles.listmenu }> Phụ kiện
                <button className={styles.toggle} onClick={()=>setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faCaretDown}  />
                </button>
                <ul className={`${isOpen ? styles.listdetail : ''} ${styles.menutoogle}`}>
                  <li>Dây Da Hirsch</li>
                  <li>Dây Da ZRC</li>
                  <li>Hộp Đồng Hồ</li>
                  <li>D.Vụ In Logo Lên Đồng Hồ</li>
                  <li>Khắc Laser Lên Đồng Hồ</li>
                </ul>
              </li>
            </ul>
          </div>

        </div>
        <div className={styles.product}>
          <SingleProduct src={img} />
        </div>
      </div>

    </div>
  )
}

export default MenWatch
