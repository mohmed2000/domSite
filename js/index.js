const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product Vision ',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

// write your code here
//start-header //
let a1 = document.querySelector('nav>a:nth-child(1)') ;
a1.textContent="home"
let a2 = document.querySelector('nav>a:nth-child(2)') ;
a2.textContent="about"
let a3 = document.querySelector('nav>a:nth-child(3)') ;
a3.textContent="gallery"
let a4 = document.querySelector('nav>a:nth-child(4)') ;
a4.textContent="team"
let a5 = document.querySelector('nav>a:nth-child(5)') ;
a5.textContent="FAQ"
let a6 = document.querySelector('nav>a:nth-child(6)') ;
a6.textContent="contact"

let Logoimg = document.getElementById("logo-img");
Logoimg.setAttribute("src","img/logo.png");

// start first section //

let catTxt= document.querySelector("h1");
catTxt.textContent="Dom Is Awesome"

let button1 = document.querySelector("button");
button1.textContent="Get Started";

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src","img/header-img.png");

// start second section //

//content
let h4_1 = document.querySelector(".text-content>h4");
h4_1.textContent="Features"

let p_1 = document.querySelector(".text-content>p");
p_1.textContent="Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
//img
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src","img/mid-page.jpg");

//content
let h4_2 = document.querySelector("div.top-content > div:nth-child(2) > h4");
h4_2.textContent="About"

let p_2 = document.querySelector(" div.top-content > div:nth-child(2) > p");
p_2.textContent="About is Suspendisse vel tempus odio elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//content
let h4_3 = document.querySelector("div.bottom-content > div:nth-child(1) > h4");
h4_3.textContent="Services"

let p_3 = document.querySelector(" div.bottom-content > div:nth-child(1) > p");
p_3.textContent="Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
//content
let h4_4 = document.querySelector("div.bottom-content > div:nth-child(2) > h4");
h4_4.textContent="Product"

let p_4 = document.querySelector(" div.bottom-content > div:nth-child(2) > p");
p_4.textContent="Product is Suspendisse vel tempus odio elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
//content
let h4_5 = document.querySelector("div.bottom-content > div:nth-child(3) > h4");
h4_5.textContent="Vision"

let p_5 = document.querySelector(" div.bottom-content > div:nth-child(3) > p");
p_5.textContent="Vision is Suspendisse vel tempus odio elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// start (3) contact section contact//

let h4_6 = document.querySelector("div > section.contact > h4");
h4_6.textContent="Contact"

let p_6 = document.querySelector(" div > section.contact > p");
p_6.textContent=` Contact : 00985544555 
                `
// start  footer section contact//
let footer = document.querySelector(" div > footer > p");
footer.textContent=` 'Copyright Great Idea! 2020'
                   `