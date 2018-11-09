import React from 'react';

import Sidebar from '../../components/Layout/Sidebar';

export default class Articles extends React.Component {
  render() {
    console.log("Articles render")
    var pathname = this.props.location.pathname;
    var search = this.props.location.search;
    console.log(pathname);
    if(pathname == "/posts") {
      return(
        <h1>this is posts page</h1>
      )
    }
    if(pathname == "/posts/new") {
      return(
        <h1>this is new post page</h1>
      )
    }
    return (
      <div className="container">
        <div className="row pt-2">
          <div className="col-md-8">
            <h3>Post</h3>
            <p>
            Xin chào bạn, người vô tình ghé ngang qua một góc nhỏ của tôi.<br/>
            Tôi là một kỹ sư CNTT sinh sống tại Nhật Bản,
            tôi yêu thích được chia sẻ với mọi người.<br/>
            Tôi có 11 năm làm việc trong lĩnh vực phần mềm, với nhiều vai trò khác nhau,
            như lập trình viên, trưởng nhóm, quản trị dự án, kỹ sư cầu nối.
            Tôi yêu thích những công nghệ mới và luôn dành thời gian để tự làm mới mình,
            bằng việc học như một niềm yêu thích.
            Tôi sẽ cố gắng ghi chép lại những gì tôi học được hàng ngày,
            biết đâu nó có ích cho một ai đó, cũng giống như tôi.<br/>
            Nếu bạn quan tâm hoặc có điều gì cần biết, hãy liên hệ tôi qua email nam@brse.work
            </p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
          </div>
          <Sidebar />
        </div>
      </div>
    )
  }

}
