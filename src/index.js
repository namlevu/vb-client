import React from 'react';
import ReactDOM from 'react-dom';

import '../resources/scss/style.scss';

const element =
<div className="row">
  <div className="col">
    <div className="post-title">
      Thông tin về việc ABC không sao<br/>
      <span className="timing">2018/11/08</span>
    </div>
    <div className="post-content">
      Đêm ấy Đào về nhà. Rồi không nhớ chuyện gì để gõ vào đây nữa.
      Thế nên, gõ vào đây vài dòng. Để xem là trên màn hình sẽ hiển thị.
      Như thế.
    </div>
  </div>
  <div className="col">DEF</div>
</div>;
ReactDOM.render(element, document.getElementById('root'));
