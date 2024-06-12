import React from 'react';
import buildingLogo from '../../Logo-Khoa-Y-1.png';
import building3D from '../../phoi-canh-khoa-Y.jpg';

function BuildingInfo() {
    return (
<div className='panel-information row'>
              <div className='col-1'>
                <div className='building-logo'>
                    <img src={buildingLogo} alt="sss"/>
                </div>
              </div>
              <div className='col-4'>
                <p>Địa chỉ: Tòa nhà hành chính YA1, Đường Hải Thượng Lãn Ông, Khu Đô thị ĐHQG-HCM, P. Đông Hòa, TP. Dĩ An, Bình Dương</p>
                <p>Số ĐT: (028) 7102 1212</p>
                <p>Fb: 
                  <span>
                    <a href='https://www.facebook.com/Medvnu.Fanpage'  target="_blank" rel="noreferrer">https://www.facebook.com/Medvnu.Fanpage</a>
                  </span>
                </p>
              </div>
              <div className='col-4'>
                <p>Website: 
                  <span>
                    <a href='https://www.medvnu.edu.vn'  target="_blank" rel="noreferrer">https://www.medvnu.edu.vn</a>
                  </span>
                </p>
                <p>Loại công trình: Văn phòng</p>
                <p>Chức năng: Trường học - Bệnh viện</p>
                <p>Đơn vị trực thuộc: Đại học Quốc gia TP. HCM</p>
                <p>Quy mô: 20,64 ha</p>
              </div>
              <div className='col-3 building-3d'>
                <p>Tham quan dự án thực tế</p>
                <a href="https://visualsensegroup.com/virtual-tour/khoa-y" target="_blank" rel="noreferrer" >
                  <img src={building3D} alt="sss"/>
                </a>
                
              </div>
            </div>
    ) ;
}

export default BuildingInfo;