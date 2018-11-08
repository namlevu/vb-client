import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

export default class About extends React.Component {
/* // TODO: Get about content from server
  constructor(props) {
    console.log("Home constructor called")
    super(props);
    this.state = {
        content: {}
    }
  }

  componentDidMount() {
    console.log("Home componentDidMount called")
    axios.get(`http://127.0.0.1:9009/v1/statics/about`)
      .then(res => {
        const content = res.data;
        this.setState({ content });
      })
  }
*/
  render() {
    console.log("about render")
    return (
      <div className="container">
        <div className="row pt-2">
          <div className="col-12">
            <h3>Tôi là ai và đây là đâu?</h3>
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
          </div>
        </div>
      </div>
    )
  }

}
