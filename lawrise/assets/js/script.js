(function(_0xb1e5x1) {
  'use strict';

  function _0xb1e5x2() {
    var _0xb1e5x3 = _0xb1e5x1('.navigation-holder');
    var _0xb1e5x4 = _0xb1e5x1('.navbar-header .open-btn');
    var _0xb1e5x5 = _0xb1e5x1('.navigation-holder .close-navbar');
    var _0xb1e5x6 = _0xb1e5x1('.page-wrapper');
    _0xb1e5x4['on']('click', function() {
      if (!_0xb1e5x3['hasClass']('slideInn')) {
        _0xb1e5x3['addClass']('slideInn');
        _0xb1e5x6['addClass']('body-overlay')
      };
      return false
    });
    _0xb1e5x5['on']('click', function() {
      if (_0xb1e5x3['hasClass']('slideInn')) {
        _0xb1e5x3['removeClass']('slideInn')
      };
      _0xb1e5x6['removeClass']('body-overlay');
      return false
    })
  }
  _0xb1e5x2();

  function _0xb1e5x7() {
    var _0xb1e5x8 = window['innerWidth'];
    var _0xb1e5x9 = _0xb1e5x1('#navbar > ul');
    if (_0xb1e5x8 <= 991) {
      _0xb1e5x9['addClass']('small-nav')
    } else {
      _0xb1e5x9['removeClass']('small-nav')
    }
  }
  _0xb1e5x7();

  function _0xb1e5xa() {
    var _0xb1e5x8 = window['innerWidth'];
    var _0xb1e5x9 = _0xb1e5x1('.navigation-holder');
    var _0xb1e5xb = _0xb1e5x1('.navigation-holder > .small-nav');
    var _0xb1e5xc = _0xb1e5xb['find']('.sub-menu');
    var _0xb1e5xd = _0xb1e5xb['find']('.mega-menu');
    var _0xb1e5xe = _0xb1e5xb['find']('.menu-item-has-children > a');
    if (_0xb1e5x8 <= 991) {
      _0xb1e5xc['hide']();
      _0xb1e5xd['hide']();
      _0xb1e5xe['on']('click', function(_0xb1e5xf) {
        var _0xb1e5x10 = _0xb1e5x1(this);
        _0xb1e5x10['siblings']()['slideToggle']();
        _0xb1e5xf['preventDefault']();
        _0xb1e5xf['stopImmediatePropagation']()
      })
    } else {
      if (_0xb1e5x8 > 991) {
        _0xb1e5x9['find']('.sub-menu')['show']();
        _0xb1e5x9['find']('.mega-menu')['show']()
      }
    }
  }
  _0xb1e5xa();

  function _0xb1e5x11() {
    if (_0xb1e5x1('.parallax')['length']) {
      _0xb1e5x1('.parallax')['each'](function() {
        var _0xb1e5x12 = _0xb1e5x1(this)['position']()['top'];
        var _0xb1e5x13 = _0xb1e5x12 - _0xb1e5x1(window)['scrollTop']();
        var _0xb1e5x14 = -(_0xb1e5x13 / 5);
        var _0xb1e5x15 = _0xb1e5x14 + 'px';
        var _0xb1e5x16 = _0xb1e5x1(this)['data']('bg-image');
        _0xb1e5x1(this)['css']({
          backgroundImage: 'url(' + _0xb1e5x16 + ')',
          backgroundPosition: '50%' + _0xb1e5x15,
          backgroundSize: 'cover'
        })
      })
    }
  }
  var _0xb1e5x17 = [];
  jQuery('.swiper-slide')['each'](function(_0xb1e5x18) {
    _0xb1e5x17['push'](jQuery(this)['find']('.slide-inner')['attr']('data-text'))
  });
  var _0xb1e5x19 = 0.5;
  var _0xb1e5x1a = {
    loop: true,
    speed: 1000,
    parallax: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false
    },
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    on: {
      progress: function() {
        var _0xb1e5x1b = this;
        for (var _0xb1e5x1c = 0; _0xb1e5x1c < _0xb1e5x1b['slides']['length']; _0xb1e5x1c++) {
          var _0xb1e5x1d = _0xb1e5x1b['slides'][_0xb1e5x1c]['progress'];
          var _0xb1e5x1e = _0xb1e5x1b['width'] * _0xb1e5x19;
          var _0xb1e5x1f = _0xb1e5x1d * _0xb1e5x1e;
          _0xb1e5x1b['slides'][_0xb1e5x1c]['querySelector']('.slide-inner')['style']['transform'] = 'translate3d(' + _0xb1e5x1f + 'px, 0, 0)'
        }
      },
      touchStart: function() {
        var _0xb1e5x1b = this;
        for (var _0xb1e5x1c = 0; _0xb1e5x1c < _0xb1e5x1b['slides']['length']; _0xb1e5x1c++) {
          _0xb1e5x1b['slides'][_0xb1e5x1c]['style']['transition'] = ''
        }
      },
      setTransition: function(_0xb1e5x20) {
        var _0xb1e5x1b = this;
        for (var _0xb1e5x1c = 0; _0xb1e5x1c < _0xb1e5x1b['slides']['length']; _0xb1e5x1c++) {
          _0xb1e5x1b['slides'][_0xb1e5x1c]['style']['transition'] = _0xb1e5x20 + 'ms';
          _0xb1e5x1b['slides'][_0xb1e5x1c]['querySelector']('.slide-inner')['style']['transition'] = _0xb1e5x20 + 'ms'
        }
      }
    }
  };
  var _0xb1e5x1b = new Swiper('.swiper-container', _0xb1e5x1a);
  _0xb1e5x1('.swiper-pagination')['wrapInner']('<div class=\'container\'><div class=\'inner\'></div></div>');
  var _0xb1e5x21 = _0xb1e5x1('.slide-bg-image');
  _0xb1e5x21['each'](function(_0xb1e5x22) {
    if (_0xb1e5x1(this)['attr']('data-background')) {
      _0xb1e5x1(this)['css']('background-image', 'url(' + _0xb1e5x1(this)['data']('background') + ')')
    }
  });
  var _0xb1e5x23 = _0xb1e5x1('.data-bg-image');
  _0xb1e5x23['each'](function() {
    if (_0xb1e5x1(this)['attr']('data-background')) {
      _0xb1e5x1(this)['css']('background-image', 'url(' + _0xb1e5x1(this)['data']('background') + ')');
      _0xb1e5x1(this)['css']('background-size', 'cover');
      _0xb1e5x1(this)['css']('background-position', 'center center')
    }
  });

  function _0xb1e5x24() {
    if (_0xb1e5x1('.preloader')['length']) {
      _0xb1e5x1('.preloader')['delay'](100)['fadeOut'](500, function() {
        _0xb1e5x25['init']()
      })
    }
  }
  var _0xb1e5x25 = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
  });
  if (_0xb1e5x1('.fancybox')['length']) {
    _0xb1e5x1('.fancybox')['fancybox']({
      openEffect: 'elastic',
      closeEffect: 'elastic',
      wrapCSS: 'project-fancybox-title-style'
    })
  };
  if (_0xb1e5x1('.video-btn')['length']) {
    _0xb1e5x1('.video-btn')['on']('click', function() {
      _0xb1e5x1['fancybox']({
        href: this['href'],
        type: _0xb1e5x1(this)['data']('type'),
        '\x74\x69\x74\x6C\x65': this['title'],
        helpers: {
          title: {
            type: 'inside'
          },
          media: {}
        },
        beforeShow: function() {
          _0xb1e5x1('.fancybox-wrap')['addClass']('gallery-fancybox')
        }
      });
      return false
    })
  };
  if (_0xb1e5x1('.popup-gallery')['length']) {
    _0xb1e5x1('.popup-gallery')['magnificPopup']({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out',
        opener: function(_0xb1e5x26) {
          return _0xb1e5x26['is']('img') ? _0xb1e5x26 : _0xb1e5x26['find']('img')
        }
      }
    })
  };

  function _0xb1e5x27() {
    if (_0xb1e5x1('.sortable-gallery .gallery-filters')['length']) {
      var _0xb1e5x28 = _0xb1e5x1('.gallery-container');
      _0xb1e5x28['isotope']({
        filter: '*',
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      _0xb1e5x1('.gallery-filters li a')['on']('click', function() {
        _0xb1e5x1('.gallery-filters li .current')['removeClass']('current');
        _0xb1e5x1(this)['addClass']('current');
        var _0xb1e5x29 = _0xb1e5x1(this)['attr']('data-filter');
        _0xb1e5x28['isotope']({
          filter: _0xb1e5x29,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        });
        return false
      })
    }
  }
  _0xb1e5x27();

  function _0xb1e5x2a() {
    if (_0xb1e5x1('.masonry-gallery')['length']) {
      var _0xb1e5x2b = _0xb1e5x1('.masonry-gallery')['masonry']({
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        percentPosition: true
      });
      _0xb1e5x2b['imagesLoaded']()['progress'](function() {
        _0xb1e5x2b['masonry']('layout')
      })
    }
  }

  function _0xb1e5x2c(_0xb1e5x2d, _0xb1e5x2e) {
    _0xb1e5x2d['addClass']('original')['clone']()['insertAfter'](_0xb1e5x2d)['addClass'](_0xb1e5x2e)['removeClass']('original')
  }
  if (_0xb1e5x1('.site-header .navigation')['length']) {
    _0xb1e5x2c(_0xb1e5x1('.site-header .navigation'), 'sticky-header')
  };
  var _0xb1e5x2f = '';

  function _0xb1e5x30(_0xb1e5x31, _0xb1e5x32) {
    var _0xb1e5x33 = _0xb1e5x1(window)['scrollTop']();
    var _0xb1e5x34 = _0xb1e5x1('.site-header .navigation');
    if (_0xb1e5x1(window)['scrollTop']() > 1000) {
      if (_0xb1e5x33 > _0xb1e5x2f) {
        _0xb1e5x31['removeClass'](_0xb1e5x32)
      } else {
        _0xb1e5x31['addClass'](_0xb1e5x32)
      }
    } else {
      _0xb1e5x31['removeClass'](_0xb1e5x32)
    };
    _0xb1e5x2f = _0xb1e5x33
  }
  if (_0xb1e5x1('.header-search-form-wrapper')['length']) {
    var _0xb1e5x35 = _0xb1e5x1('.search-toggle-btn');
    var _0xb1e5x36 = _0xb1e5x1('.search-toggle-btn i');
    var _0xb1e5x37 = _0xb1e5x1('.header-search-form');
    var _0xb1e5x6 = _0xb1e5x1('body');
    _0xb1e5x35['on']('click', function(_0xb1e5xf) {
      _0xb1e5x37['toggleClass']('header-search-content-toggle');
      _0xb1e5x36['toggleClass']('fi flaticon-search ti-close');
      _0xb1e5xf['stopPropagation']()
    });
    _0xb1e5x6['on']('click', function() {
      _0xb1e5x37['removeClass']('header-search-content-toggle');
      _0xb1e5x36['removeClass']('ti-close');
      _0xb1e5x36['addClass']('fi flaticon-search')
    })['find'](_0xb1e5x37)['on']('click', function(_0xb1e5xf) {
      _0xb1e5xf['stopPropagation']()
    })
  };
  if (_0xb1e5x1('.mini-cart')['length']) {
    var _0xb1e5x38 = _0xb1e5x1('.cart-toggle-btn');
    var _0xb1e5x39 = _0xb1e5x1('.mini-cart-content');
    var _0xb1e5x6 = _0xb1e5x1('body');
    _0xb1e5x38['on']('click', function(_0xb1e5xf) {
      _0xb1e5x39['toggleClass']('mini-cart-content-toggle');
      _0xb1e5xf['stopPropagation']()
    });
    _0xb1e5x6['on']('click', function() {
      _0xb1e5x39['removeClass']('mini-cart-content-toggle')
    })['find'](_0xb1e5x39)['on']('click', function(_0xb1e5xf) {
      _0xb1e5xf['stopPropagation']()
    })
  };
  if (_0xb1e5x1('.causes-slider')['length']) {
    _0xb1e5x1('.causes-slider')['owlCarousel']({
      center: true,
      loop: true,
      dots: false,
      responsive: {
        1300: {
          items: 4,
          margin: 20
        },
        992: {
          margin: 0,
          items: 3
        },
        500: {
          items: 2
        },
        300: {
          items: 1,
          dots: true
        }
      }
    })
  };

  function _0xb1e5x3a() {
    if (_0xb1e5x1('.progress-bar')['length']) {
      var _0xb1e5x3b = _0xb1e5x1('.progress-bar');
      _0xb1e5x3b['appear']();
      _0xb1e5x1(document['body'])['on']('appear', '.progress-bar', function() {
        var _0xb1e5x3c = _0xb1e5x1(this);
        if (!_0xb1e5x3c['hasClass']('appeared')) {
          var _0xb1e5x3d = _0xb1e5x3c['data']('percent');
          _0xb1e5x3c['css']('width', _0xb1e5x3d + '%')['addClass']('appeared')['append']('<span>' + _0xb1e5x3d + '%' + '</span>')
        }
      })
    }
  }
  _0xb1e5x3a();

  function _0xb1e5x3e(_0xb1e5x3f, _0xb1e5x40) {
    var _0xb1e5x41 = _0xb1e5x3f,
      _0xb1e5x42 = _0xb1e5x40,
      _0xb1e5x43 = _0xb1e5x3f['innerHeight'](),
      _0xb1e5x44 = _0xb1e5x40['innerHeight']();
    if (_0xb1e5x43 > _0xb1e5x44) {
      _0xb1e5x42['css']({
        "\x68\x65\x69\x67\x68\x74": _0xb1e5x43 + 1 + 'px'
      })
    } else {
      _0xb1e5x41['css']({
        "\x68\x65\x69\x67\x68\x74": _0xb1e5x44 + 1 + 'px'
      })
    }
  }
  if (_0xb1e5x1('.events-slider')['length']) {
    var _0xb1e5x1c = ('.events-slider-nav .slider-prev'),
      _0xb1e5x45 = ('.events-slider-nav .slider-next');
    _0xb1e5x1('.events-slider')['slick']({
      prevArrow: _0xb1e5x1c,
      nextArrow: _0xb1e5x45,
      adaptiveHeight: !0,
      slidesToShow: 3,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }]
    })
  };
  if (_0xb1e5x1('.partners-slider')['length']) {
    _0xb1e5x1('.partners-slider')['owlCarousel']({
      autoplay: true,
      smartSpeed: 300,
      margin: 30,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      responsive: {
        0: {
          items: 2
        },
        550: {
          items: 3
        },
        992: {
          items: 4
        },
        1200: {
          items: 5
        }
      }
    })
  };
  if (_0xb1e5x1('.odometer')['length']) {
    _0xb1e5x1('.odometer')['appear']();
    _0xb1e5x1(document['body'])['on']('appear', '.odometer', function(_0xb1e5xf) {
      var _0xb1e5x46 = _0xb1e5x1('.odometer');
      _0xb1e5x46['each'](function() {
        var _0xb1e5x47 = _0xb1e5x1(this)['attr']('data-count');
        _0xb1e5x1(this)['html'](_0xb1e5x47)
      })
    })
  };
  _0xb1e5x1('.campain-slider')['slick']({
    vertical: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    verticalSwiping: true,
    loop: true,
    nextArrow: '<button><i class="fi flaticon-down-arrow-1"></i></button>',
    prevArrow: '<button><i class="fi flaticon-down-arrow-1"></i></button>'
  });
  if (_0xb1e5x1('.testimonials-slider')['length']) {
    _0xb1e5x1('.testimonials-slider')['owlCarousel']({
      items: 1,
      autoplay: false,
      smartSpeed: 300,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      nav: true,
      navText: ['<i class="fi flaticon-back"></i>', '<i class="fi flaticon-next"></i>']
    })
  };
  if (_0xb1e5x1('.testimonials-slider-s2')['length']) {
    _0xb1e5x1('.testimonials-slider-s2')['owlCarousel']({
      autoplay: false,
      smartSpeed: 300,
      loop: true,
      autoplayHoverPause: true,
      margin: 30,
      dots: false,
      nav: true,
      navText: ['<i class="fi flaticon-back"></i>', '<i class="fi flaticon-next"></i>'],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        }
      }
    })
  };
  if (_0xb1e5x1('.give-form')['length']) {
    console['log']('Ha ha ha');
    var _0xb1e5x48 = _0xb1e5x1('.give-text-input');
    var _0xb1e5x49 = _0xb1e5x1('.give-final-total-amount');
    var _0xb1e5x4a = _0xb1e5x1('.give-donation-level-btn');
    _0xb1e5x4a['each'](function() {
      var _0xb1e5x10 = _0xb1e5x1(this);
      var _0xb1e5x4b = _0xb1e5x10['attr']('value');
      _0xb1e5x10['on']('click', function() {
        _0xb1e5x48['attr']('value', _0xb1e5x4b);
        _0xb1e5x49['attr']('data-total', _0xb1e5x4b);
        _0xb1e5x49['text'](_0xb1e5x4b);
        console['log'](_0xb1e5x4b)
      })
    })
  };
  if (_0xb1e5x1('.post-slider' ['length'])) {
    _0xb1e5x1('.post-slider')['owlCarousel']({
      mouseDrag: false,
      smartSpeed: 500,
      margin: 30,
      loop: true,
      nav: true,
      navText: ['<i class="fi flaticon-back"></i>', '<i class="fi flaticon-next"></i>'],
      dots: false,
      items: 1
    })
  };
  if (_0xb1e5x1('.shop-single-slider')['length']) {
    _0xb1e5x1('.slider-for')['slick']({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    _0xb1e5x1('.slider-nav')['slick']({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      focusOnSelect: true,
      prevArrow: '<i class="nav-btn nav-btn-lt ti-arrow-left"></i>',
      nextArrow: '<i class="nav-btn nav-btn-rt ti-arrow-right"></i>',
      responsive: [{
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
      }, {
        breakpoint: 400,
        settings: {
          slidesToShow: 2
        }
      }]
    })
  };
  if (_0xb1e5x1('input[name=\'product-count\']')['length']) {
    _0xb1e5x1('input[name=\'product-count\']').TouchSpin({
      verticalbuttons: true
    })
  };
  if (_0xb1e5x1('#scroll')['length']) {
    _0xb1e5x1('#scroll')['on']('click', function(_0xb1e5xf) {
      _0xb1e5xf['preventDefault']();
      _0xb1e5x1('html,body')['animate']({
        scrollTop: _0xb1e5x1(this['hash'])['offset']()['top']
      }, 1000, 'easeInOutExpo');
      return false
    })
  };
  if (_0xb1e5x1('#contact-form-main')['length']) {
    _0xb1e5x1('#contact-form-main')['validate']({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        email: 'required',
        phone: 'required',
        subject: {
          required: true
        }
      },
      messages: {
        name: 'Please enter your name',
        email: 'Please enter your email address',
        phone: 'Please enter your phone number',
        subject: 'Please select your contact subject'
      },
      submitHandler: function(_0xb1e5x4c) {
        _0xb1e5x1['ajax']({
          type: 'POST',
          url: 'mail-contact.php',
          data: _0xb1e5x1(_0xb1e5x4c)['serialize'](),
          success: function() {
            _0xb1e5x1('#loader')['hide']();
            _0xb1e5x1('#success')['slideDown']('slow');
            setTimeout(function() {
              _0xb1e5x1('#success')['slideUp']('slow')
            }, 3000);
            _0xb1e5x4c['reset']()
          },
          error: function() {
            _0xb1e5x1('#loader')['hide']();
            _0xb1e5x1('#error')['slideDown']('slow');
            setTimeout(function() {
              _0xb1e5x1('#error')['slideUp']('slow')
            }, 3000)
          }
        });
        return false
      }
    })
  };
  _0xb1e5x1('body')['append']('<a href=\'#\' class=\'back-to-top\'><i class=\'ti-arrow-circle-up\'></i></a>');

  function _0xb1e5x4d() {
    var _0xb1e5x4e = 1000;
    if (_0xb1e5x1(window)['scrollTop']() > _0xb1e5x4e) {
      _0xb1e5x1('a.back-to-top')['addClass']('animate-b-t-t')
    } else {
      _0xb1e5x1('a.back-to-top')['removeClass']('animate-b-t-t')
    }
  }
  _0xb1e5x1('.back-to-top')['on']('click', function() {
    _0xb1e5x1('html,body')['animate']({
      scrollTop: 0
    }, 700);
    return false
  });
  _0xb1e5x1(window)['on']('load', function() {
    _0xb1e5x24();
    if (_0xb1e5x1('.about-section')['length']) {
      _0xb1e5x3e(_0xb1e5x1('.about-section .left-col'), _0xb1e5x1('.about-section .right-col'))
    };
    if (_0xb1e5x1('.campain-section')['length']) {
      _0xb1e5x3e(_0xb1e5x1('.campain-section .left-col'), _0xb1e5x1('.campain-section .right-col'))
    };
    _0xb1e5x2();
    _0xb1e5xa()
  });
  _0xb1e5x1(window)['on']('scroll', function() {
    if (_0xb1e5x1('.site-header')['length']) {
      _0xb1e5x30(_0xb1e5x1('.site-header .navigation'), 'sticky-on')
    };
    _0xb1e5x4d()
  });
  _0xb1e5x1(window)['on']('resize', function() {
    _0xb1e5x7();
    if (_0xb1e5x1('.about-section')['length']) {
      _0xb1e5x3e(_0xb1e5x1('.about-section .left-col'), _0xb1e5x1('.about-section .right-col'))
    };
    if (_0xb1e5x1('.campain-section')['length']) {
      _0xb1e5x3e(_0xb1e5x1('.campain-section .left-col'), _0xb1e5x1('.campain-section .right-col'))
    };
    clearTimeout(_0xb1e5x1['data'](this, 'resizeTimer'));
    _0xb1e5x1['data'](this, 'resizeTimer', setTimeout(function() {
      _0xb1e5xa()
    }, 200))
  })
})(window['jQuery'])