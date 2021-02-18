const config = {
  LINAOABAY: {
    AppVersion: '1.0.0',
    routerMode: true,
    acquirerId: 1,
    googleMap: {
      url: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDmuj5ysQdnHwqaz5N-HSf3WfmcPj_XiMU'
    },
    themes: {
      title: 'Bokboon',
      config: '/static/themes/theme.css',
      bg: {
        loginLG: '/static/images/background/bg-digipay-1400.jpg',
        loginSM: '/static/images/background/bg-digipay.jpg'
      },
      logo: {
        big: '/static/images/icon/Group 16.png',
        small: '/static/images/icon/Group 16.png',
        login: '/static/images/icon/Group 16.png',
        error: '/static/images/icon/Group 16.png'
      }
    }
  }
}

module.exports = config['LINAOABAY']
