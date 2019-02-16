import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import QRCode from 'qrcode.react';
import './share.scss';

const propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  sites: PropTypes.array,
};

function getMetaContentByName(name) {
  return (document.getElementsByName(name)[0] || 0).content;
}

const defaultProps = {
  url: location.href,
  origin: location.origin,
  title:
    getMetaContentByName('title') ||
    getMetaContentByName('Title') ||
    document.title,
  description:
    getMetaContentByName('description') ||
    getMetaContentByName('Description') ||
    '',
  summary:
    getMetaContentByName('description') ||
    getMetaContentByName('Description') ||
    '',
  image: (document.images[0] || 0).src || '',
  site:
    getMetaContentByName('site') ||
    getMetaContentByName('Site') ||
    document.title,
  source:
    getMetaContentByName('site') ||
    getMetaContentByName('Site') ||
    document.title,
  sites: [
    'qzone',
    'weibo',
    'google',
    'twitter',
    'qq',
    'tencent',
    'wechat',
    'douban',
    'linkedin',
    'facebook',
  ],
  wechatQrcodeTitle: '微信扫一扫: 分享',
  wechatQrcodeHelper: '',
};

class ShareButtons extends React.Component {
  render() {
    const sites = this.props.sites;
    const url = this.props.url;
    const wechatQrcodeTitle = this.props.wechatQrcodeTitle;
    const wechatQrcodeHelper = this.props.wechatQrcodeHelper;

    const title = encodeURIComponent(this.props.title);
    const description = encodeURIComponent(this.props.description);
    const image = encodeURIComponent(this.props.image);
    const site = encodeURIComponent(this.props.site);
    const origin = encodeURIComponent(this.props.origin);

    const summary = description;
    const source = site;

    const templates = {
      qzone: `http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&title=${title}&desc=${description}&summary=${summary}&site=${source}`,
      qq: `http://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}&source=${source}&desc=${description}`,
      tencent: `http://share.v.t.qq.com/index.php?c=share&a=index&title=${title}&url=${url}&pic=${image}`,
      weibo: `http://service.weibo.com/share/share.php?url=${url}&title=${title}&pic=${image}`,
      wechat: `javascript:`,
      douban: `http://shuo.douban.com/!service/share?href=${url}&name=${title}&text=${description}&image=${image}&starid=0&aid=0&style=11`,
      diandian: `http://www.diandian.com/share?lo=${url}&ti=${title}&type=link`,
      linkedin: `http://www.linkedin.com/shareArticle?mini=true&ro=true&title=${title}&url=${url}&summary=${summary}&source=${source}&armin=armin`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${title}&url=${url}&via=${origin}`,
      google: `https://plus.google.com/share?url=${url}`,
    };

    const html = _.map(sites, function(site, i) {
      if (site === 'wechat') {
        const doc = (
          <div key={i} className="wechat-qrcode">
            <h4>{wechatQrcodeTitle}</h4>
            <div className="qrcode">
              <QRCode value={url} size={100} />
            </div>
            <div className="help">
              <p>{wechatQrcodeHelper}</p>
            </div>
          </div>
        );
        return (
          <a
            key={i}
            className="social-share-icon icon-wechat"
            target="_blank"
            href="javascript:"
          >
            {doc}
          </a>
        );
      } else {
        const className = `icon-${site} social-share-icon`;
        return (
          <a
            key={i}
            className={className}
            href={templates[site]}
            target="_blank"
          />
        );
      }
    });
    return <div className="social-share">{html}</div>;
  }
}

ShareButtons.propTypes = propTypes;
ShareButtons.defaultProps = defaultProps;

export default ShareButtons;
