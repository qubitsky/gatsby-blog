module.exports = {
  /** Site MetaData (Required all)*/
  title: `苍微のblog`,                           // (* Required)
  description: `苍微のblog是一位前端开发者的个人博客。面向互联网搬砖，记录知识、分享感悟！`, // (* Required)
  author: `qubitsky`,                         // (* Required)
  siteUrl: 'https://qubitsky.github.io',       // (* Required) 
    // ex.'https://qubitsky.github.io'
    // ex.'https://qubitsky.github.io/' << X, Do not enter "/" at the end.

  /** Header */
  profileImageFileName: 'profile.png', // include filename extension ex.'profile.jpg'
    // The Profile image file is located at path "./images/"
    // If the file does not exist, it is replaced by a random image.

  /** Home > Bio information*/
  comment: 'Jr. Web Front-end Developer. / javascript, react ...',
  name: '苍微 qubitsky',
  company: '',
  location: '中国 china',
  email: 'owlikesj@gmail.com',
  website: 'https://qubitsky.github.io',           // ex.'https://qubitsky.github.io'
  linkedin: '',                                     // ex.'https://www.linkedin.com/in/junho-baik-16073a19ab'
  facebook: '',                                     // ex.'https://www.facebook.com/zuck' or 'https://www.facebook.com/profile.php?id=000000000000000'
  instagram: 'https://www.instagram.com/qubitsky', // ex.'https://www.instagram.com/qubitsky'
  github: 'https://github.com/qubitsky',           // ex.'https://github.com/qubitsky'

  /** Post */
  enablePostOfContents: true,     // TableOfContents activation (Type of Value: Boolean. Not String)
  disqusShortname: 'qubitsky',   // comments (Disqus sort-name)
  enableSocialShare: true,        // Social share icon activation (Type of Value: Boolean. Not String)

  /** Optional */
  googleAnalytics: 'UA-103068178-3',                                  // Google Analytics TrackingID. ex.'UA-123456789-0'
  googleSearchConsole: 'w-K42k14_I4ApiQKuVPbCRVV-GxlrqWxYoqO94KMbKo', // content value in HTML tag of google search console ownership verification 
  googleAdsenseSlot: '5214956675',                                    // Google Adsense Slot. ex.'5214956675'
  googleAdsenseClient: 'ca-pub-5084259386637852',                     // Google Adsense Client. ex.'ca-pub-5001380215831339'
    // Please correct the adsense client number(ex.5001380215831339) in the './static/ads.txt' file.
};
