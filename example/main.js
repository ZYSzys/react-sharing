import React from 'react';
import ReactDOM from 'react-dom';
import Sharing from '../src';

class App extends React.Component {
  render() {
    return (
      <div>
        <Sharing 
          sites={["qzone", "weibo", "google", "twitter", "qq", 
          "tencent", "wechat", "douban", "linkedin", "facebook"]}
          url = "ttps://github.com/ZYSzys/react-sharing"
          title = "react-sharing"
          description = "一键分享到微博、QQ空间、QQ好友、微信、腾讯微博、豆瓣、Facebook、Twitter、Linkedin、Google+ 的 react 组件"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));