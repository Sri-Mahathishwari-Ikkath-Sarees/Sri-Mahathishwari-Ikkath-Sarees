const c7000 = document.querySelector('.seven');
const c8000 = document.querySelector('.eight');
const c12000 = document.querySelector('.twelve');
let imgSrc;
let imgInsertCost;
let imgDelCost;
// Retrieve the addToCartList array from local storage or initialize it to an empty array
let addToCartList = JSON.parse(localStorage.getItem('addToCartList')) || [];
const c7000Images = [
  'https://i.ibb.co/PzHDjcT/loom-my-Image1.jpg',
  'https://i.ibb.co/T1ynmdh/loom-my-Image2.jpg',
  'https://i.ibb.co/HYHKp0D/loom-my-Image3.jpg',
  'https://i.ibb.co/KyNRjw0/loom-my-Image4.jpg',
  'https://i.ibb.co/Sn80PhD/loom-my-Image5.jpg',
  'https://i.ibb.co/MfyR76Q/loom-my-Image6.jpg',
  'https://i.ibb.co/MfWs6jJ/loom-my-Image7.jpg',
  'https://i.ibb.co/PFmZtxM/loom-my-Image8.jpg',
  'https://i.ibb.co/qmw2J0b/loom-my-Image9.jpg',
  'https://i.ibb.co/TYx6H8v/loom-my-Image10.jpg',
  'https://i.ibb.co/c1WgZHT/loom-my-Image11.jpg',
  'https://i.ibb.co/kcKNN04/loom-my-Image12.jpg',
  'https://i.ibb.co/ChkjkGS/loom-my-Image13.jpg',
  'https://i.ibb.co/dj2Tk7n/loom-my-Image14.jpg',
  'https://i.ibb.co/MsY0CMS/loom-my-Image15.jpg',
  'https://i.ibb.co/G2kd9dd/loom-my-Image16.jpg',
  'https://i.ibb.co/fHpx78M/loom-my-Image17.jpg',
  'https://i.ibb.co/b15pQZ9/loom-my-Image18.jpg',
  'https://i.ibb.co/cTVxxDT/loom-my-Image19.jpg',
  'https://i.ibb.co/DRk7kS6/loom-my-Image20.jpg',
  'https://i.ibb.co/zFRZxB0/loom-my-Image21.jpg',
  'https://i.ibb.co/t3ZQMY0/loom-my-Image22.jpg',
  'https://i.ibb.co/h8T16yW/loom-my-Image23.jpg',
  'https://i.ibb.co/XsxqdH2/Whats-App-Image-2023-03-14-at-6-11-32-PM.jpg',
  'https://i.ibb.co/nDKrdLv/Whats-App-Image-2023-03-14-at-6-11-33-PM.jpg',
  'https://i.ibb.co/VxgMH6z/Whats-App-Image-2023-03-14-at-6-11-34-PM.jpg',
  'https://i.ibb.co/W28SBCQ/Whats-App-Image-2023-03-14-at-6-11-35-PM.jpg',
  'https://i.ibb.co/7pXXWsC/Whats-App-Image-2023-03-14-at-6-11-36-PM.jpg',
  'https://i.ibb.co/0CJgwxN/Whats-App-Image-2023-03-14-at-6-11-37-PM.jpg',
  'https://i.ibb.co/p3hryN0/Whats-App-Image-2023-03-14-at-6-11-39-PM.jpg',
  'https://i.ibb.co/mycmPDm/Whats-App-Image-2023-03-14-at-6-11-40-PM-1.jpg',
  'https://i.ibb.co/d7RQFBn/Whats-App-Image-2023-03-14-at-6-11-41-PM.jpg',
  'https://i.ibb.co/5MjnpJV/Whats-App-Image-2023-03-23-at-10-20-06-AM.jpg',
  'https://i.ibb.co/vZv7j90/Whats-App-Image-2023-03-14-at-6-11-42-PM.jpg',
  'https://i.ibb.co/yX85nrw/Whats-App-Image-2023-03-23-at-10-20-09-AM.jpg',
  'https://i.ibb.co/1RHX68F/Whats-App-Image-2023-03-14-at-6-11-43-PM.jpg'
]

const c12000Images = [
    'https://i.ibb.co/FJHqLSm/myImage1.jpg',
    'https://i.ibb.co/Y7qp384/myImage2.jpg',
    'https://i.ibb.co/dj50WD1/myImage3.jpg',
    'https://i.ibb.co/yBQHGm9/myImage4.jpg',
    'https://i.ibb.co/BcYCTmZ/myImage5.jpg',
    'https://i.ibb.co/c338MVw/myImage6.jpg',
    'https://i.ibb.co/2KRy3Hh/myImage7.jpg',
    'https://i.ibb.co/qdMRgZq/myImage8.jpg',
    'https://i.ibb.co/ZKGTHC7/myImage9.jpg',
    'https://i.ibb.co/k0f2TJm/my-Image10.jpg',
    'https://i.ibb.co/kgKxSFQ/my-Image11.jpg',
    'https://i.ibb.co/DKGMKgG/my-Image12.jpg',
    'https://i.ibb.co/dphbw9M/my-Image13.jpg',
    'https://i.ibb.co/BCnqCyW/my-Image14.jpg',
    'https://i.ibb.co/0yz9XPv/my-Image15.jpg',
    'https://i.ibb.co/KDQSZF5/my-Image16.jpg',
    'https://i.ibb.co/g9ZvpVx/my-Image17.jpg',
    'https://i.ibb.co/xhqfZLy/my-Image18.jpg',
    'https://i.ibb.co/VjvhX0b/my-Image19.jpg',
    'https://i.ibb.co/v1Nbzbp/my-Image20.jpg',
    'https://i.ibb.co/QDdry4Y/my-Image21.jpg',
    'https://i.ibb.co/5BbTTgt/my-Image22.jpg',
    'https://i.ibb.co/Nt4N28k/my-Image23.jpg',
    'https://i.ibb.co/Rbr0NHQ/my-Image24.jpg',
    'https://i.ibb.co/PYtZkP6/my-Image25.jpg',
    'https://i.ibb.co/0tr1MKk/my-Image26.jpg',
    'https://i.ibb.co/h9Dg6bL/my-Image27.jpg',
    'https://i.ibb.co/jMPW4zz/my-Image28.jpg',
    'https://i.ibb.co/hYkzKzh/my-Image29.jpg',
    'https://i.ibb.co/SBVBGq6/my-Image30.jpg',
    'https://i.ibb.co/br9CpjG/my-Image31.jpg',
    'https://i.ibb.co/wc7Bg9m/my-Image32.jpg',
    'https://i.ibb.co/wzk77Fr/my-Image33.jpg'
  ];  

const c8000Images = [
  "https://i.ibb.co/j8Qc8wJ/Whats-App-Image-2023-03-16-at-9-51-59-AM.jpg",
  "https://i.ibb.co/28y4C3n/Whats-App-Image-2023-03-16-at-9-51-58-AM.jpg",
  "https://i.ibb.co/wY41jNH/Whats-App-Image-2023-03-16-at-9-51-59-AM-1.jpg",
  "https://i.ibb.co/pvnnwfg/Whats-App-Image-2023-03-16-at-9-51-59-AM-2.jpg",
  "https://i.ibb.co/XYkQkDW/Whats-App-Image-2023-03-16-at-9-52-00-AM.jpg",
  "https://i.ibb.co/GkJFcbv/Whats-App-Image-2023-03-16-at-9-52-00-AM-1.jpg",
  "https://i.ibb.co/10hqmB2/Whats-App-Image-2023-03-16-at-9-52-01-AM.jpg",
  "https://i.ibb.co/qrN6L0x/Whats-App-Image-2023-03-16-at-9-52-01-AM-1.jpg",
  "https://i.ibb.co/N2vWbPv/Whats-App-Image-2023-03-16-at-9-52-02-AM.jpg",
  "https://i.ibb.co/v3TnKgq/Whats-App-Image-2023-03-16-at-9-52-02-AM-1.jpg",
  "https://i.ibb.co/2cz45tC/Whats-App-Image-2023-03-16-at-9-52-03-AM.jpg",
  "https://i.ibb.co/CnR1B5J/Whats-App-Image-2023-03-16-at-9-52-03-AM-1.jpg",
  "https://i.ibb.co/Fbm5jwz/Whats-App-Image-2023-03-16-at-9-52-04-AM.jpg",
  "https://i.ibb.co/0B9zWQ7/Whats-App-Image-2023-03-16-at-9-52-04-AM-1.jpg",
  "https://i.ibb.co/kmdcC7x/Whats-App-Image-2023-03-16-at-9-52-04-AM-2.jpg",
  "https://i.ibb.co/cLf7cG8/Whats-App-Image-2023-03-16-at-9-52-05-AM.jpg",
  "https://i.ibb.co/8jSdLTW/Whats-App-Image-2023-03-16-at-9-52-05-AM-1.jpg",
  "https://i.ibb.co/TK8qXz0/Whats-App-Image-2023-03-16-at-9-52-06-AM.jpg"
]    

function isPresent(src){
  for(let i = 0;i < addToCartList.length;++i){
    if(addToCartList[i].imgSrc === src){
      return addToCartList[i].toBuy;
    }
  }
  return false;
}

function addToDom(list,addTo,insertCost,delCost,width,height){
    addTo.innerHTML = '';
    addTo.style.width = '100%';
    addTo.style.height = 'auto';
    addTo.style.display = 'flex';
    addTo.style.flexWrap = 'wrap';
    addTo.style.alignItems = 'center';
    addTo.style.justifyContent = 'space-between';
    addTo.style.textAlign = 'center';

    for(let i = 0;i < list.length;++i){
        const div = document.createElement('div');
        div.style.marginBottom = '10px';
        div.style.marginTop = '10px';
        div.style.width = '16%';
        div.style.height = 'auto';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.backgroundColor = 'white';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'space-between';

        const img = document.createElement('img');
        img.src = list[i];
        img.id = 'img';
        img.style.width = width;
        img.style.height = height;

        img.addEventListener('click',()=>{
            const src = list[i];
            window.open(src,'_blank');
        });

        const costDiv = document.createElement('div');
        costDiv.style.width = '100%';
        costDiv.style.height = 'auto';
        costDiv.style.display = 'flex';
        // costDiv.style.justifyContent = 'space-evenly';

        const c1 = document.createElement('h2');
        c1.innerHTML = `₹${insertCost}`;
        c1.style.marginLeft = '10px';
        const c2 = document.createElement('span');
        c2.innerHTML = `₹${delCost}`;
        c2.style.marginTop = '10px';
        c2.style.textDecoration = 'line-through';

        const btns = document.createElement('div');
        btns.style.marginBottom = '10px';
        btns.style.width = '100%';
        btns.style.height = 'auto';
        btns.style.display = 'flex';
        btns.style.justifyContent = 'space-between';
        btns.style.alignItems = 'center';

        const b1 = document.createElement('button');
        b1.style.marginLeft = '10px';
        b1.setAttribute('class', 'btn btn-primary');
        b1.id = 'buyNow';
        b1.setAttribute('type', 'button');
        b1.textContent = 'Buy Now';

        b1.addEventListener('click',()=>{
            imgSrc = list[i];
            imgInsertCost = insertCost;
        });

        const b2 = document.createElement('button');

        if(isPresent(list[i]) === false){
          b2.style.marginRight = '10px';
          b2.setAttribute('class', 'btn btn-primary');
          b2.id = 'addToCart';
          b2.setAttribute('type', 'button');
          b2.textContent = 'Add To Cart';
        }

        else{
          b2.style.marginRight = '10px';
          b2.setAttribute('class', 'btn btn-danger');
          b2.id = 'addToCart';
          b2.setAttribute('type', 'button');
          b2.textContent = 'remove';
        }

        b2.addEventListener('click',()=>{
          imgSrc = list[i];
          imgInsertCost = insertCost;
          imgDelCost = delCost;
        });

        btns.appendChild(b1);
        btns.appendChild(b2);

        costDiv.appendChild(c1);
        costDiv.appendChild(c2);
        
        div.appendChild(img);
        div.appendChild(costDiv);
        div.appendChild(btns);

        //media queries
        function sizeChange(){
            let size = window.outerWidth;
            if(size < 768){
                // If the window width is less than 767px, stack elements vertically and center them
                addTo.style.flexDirection = 'column';
                addTo.style.justifyContent = 'center';
                addTo.style.alignItems = 'center';
                addTo.style.textAlign = 'center';
                div.style.width = '90%';
                div.style.height = 'auto';
                img.style.width = '100%';
                img.style.height = 'auto';
            }

            else if(size < 1024){
                addTo.style.display = 'flex';
                addTo.style.flexWrap = 'wrap';
                addTo.style.flexDirection = 'row';
                addTo.style.justifyContent = 'space-between';
                addTo.style.alignItems = 'center';
                div.style.width = '32%';
                div.style.height = 'auto';
            }

            else if(size < 1440){
              addTo.style.display = 'flex';
              addTo.style.flexWrap = 'wrap';
              addTo.style.flexDirection = 'row';
              addTo.style.justifyContent = 'space-between';
              addTo.style.alignItems = 'center';
              div.style.width = '24%';
              div.style.height = 'auto';
          }
            
            else{
                // If the window width is greater than or equal to 767px, display elements side by side and center them
                addTo.style.display = 'flex';
                addTo.style.flexWrap = 'wrap';
                addTo.style.flexDirection = 'row';
                addTo.style.justifyContent = 'space-between';
                addTo.style.alignItems = 'center';
                div.style.width = '16%';
                div.style.height = 'auto';
            }
        }

        window.addEventListener('resize',function(event){
            sizeChange();
        });

        sizeChange();
        
        addTo.appendChild(div);
    }
}

function openWhatsApp(imageId,imgInsertCost) {
    var phoneNumber = '9848963748'; // Replace with your phone number
    // var imageSrc = document.getElementById(imageId).src;
    var imageSrc = imageId;
    var whatsappMessage = `Hi, I would like to buy this product which cost: ${imgInsertCost}. Please see the product here: `;
    var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(whatsappMessage) + encodeURIComponent('\n') + encodeURIComponent(imageSrc);
    window.open(whatsappUrl, '_blank');
}

function openWhatsAppList(imageIds) {
    var phoneNumber = '9848963748'; // Replace with your phone number
    var whatsappMessage = 'Hi, I would like to buy these products:\n';
    for (var i = 0; i < imageIds.length; i++) {
      if(imageIds[i].toBuy === false) continue;
      var imageSrc = imageIds[i].imgSrc;
      var cost = imageIds[i].imgInsertCost;
      whatsappMessage += '- ' + imageSrc + ' (Cost: ' + cost + ')\n';
    }
    var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(whatsappMessage);
    window.open(whatsappUrl, '_blank');
} 
  
function isEmpty(){
    for(let i = 0;i < addToCartList.length;++i){
        if(addToCartList[i].toBuy === true){
            return false;
        }
    }
    return true;
}

function check(src){
  for(let i = 0;i < addToCartList.length;++i){
    if(addToCartList[i].imgSrc === src){
      return true;
    }
  }
  return false;
}

function showNotification(text){
    window.alert(text);
}

function renderCart(){
    const cart = document.querySelector('.modal-body');
    if(isEmpty() === true){
        cart.innerHTML = '';
        cart.style.backgroundColor = 'black';
        const text = document.createElement('h1');
        text.innerHTML = 'Your Cart Is Empty Please Add Items...';
        text.style.color = 'white';
        cart.appendChild(text);
    }
    else{
        cart.innerHTML = '';
        for(let i = 0;i < addToCartList.length;++i){
            if(addToCartList[i].toBuy === true){
                cart.style.width = '100%';
                cart.style.height = 'auto';
                cart.style.display = 'flex';
                cart.style.flexDirection = 'column';
                cart.style.alignItems = 'center';
                cart.style.justifyContent = 'space-between';
                cart.style.textAlign = 'center';
                cart.style.backgroundColor = 'black';

                const div = document.createElement('div');
                div.id = 'div';
                div.style.marginTop = '10px';
                div.style.marginBottom = '10px';
                div.style.width = '90%';
                div.style.height = 'auto';
                div.style.display = 'flex';
                div.style.flexDirection = 'column';
                div.style.backgroundColor = 'white';
                div.style.alignItems = 'center';
                div.style.justifyContent = 'space-between';

                const img = document.createElement('img');
                img.src = addToCartList[i].imgSrc;
                img.id = 'img';
                img.style.width = '100%';
                img.style.height = '100%';

                img.addEventListener('click', function() {
                    var imgSrc = addToCartList[i].imgSrc;
                    window.open(imgSrc, '_blank');
                });
                  

                const costDiv = document.createElement('div');
                costDiv.style.width = '100%';
                costDiv.style.height = 'auto';
                costDiv.style.display = 'flex';

                const c1 = document.createElement('h2');
                c1.innerHTML = `₹${addToCartList[i].imgInsertCost}`;
                c1.style.marginLeft = '10px';

                const c2 = document.createElement('span');
                c2.innerHTML = `₹${addToCartList[i].imgDelCost}`;
                c2.style.marginTop = '10px';
                c2.style.textDecoration = 'line-through';
                costDiv.appendChild(c1);
                costDiv.appendChild(c2);

                const btns = document.createElement('div');
                btns.style.marginTop = '10px';
                btns.style.marginBottom = '10px';
                btns.style.width = '100%';
                btns.style.height = 'auto';
                btns.style.display = 'flex';
                btns.style.justifyContent = 'space-between';
                btns.style.alignItems = 'center';

                const b1 = document.createElement('button');
                b1.style.marginLeft = '10px';
                b1.setAttribute('class', 'btn btn-primary');
                b1.id = 'buyNow';
                b1.setAttribute('type', 'button');
                b1.textContent = 'Buy Now';

                const b2 = document.createElement('button');
                b2.style.marginRight = '10px';
                b2.setAttribute('class', 'btn btn-danger');
                b2.id = 'remove';
                b2.setAttribute('type', 'button');
                b2.textContent = 'remove';                 

                // Update the addToCartList array and store it in local storage
                b2.addEventListener('click',() => {
                  addToCartList[i].toBuy = false;
                  showNotification('Your item removed from cart');
                  localStorage.setItem('addToCartList', JSON.stringify(addToCartList));
                  initialize();
                  renderCart();
                });

                btns.appendChild(b1);
                btns.appendChild(b2);
                div.appendChild(img);
                div.appendChild(costDiv);
                div.appendChild(btns);
            
                cart.appendChild(div);

                localStorage.setItem('addToCartList', JSON.stringify(addToCartList));
            }
        }
    }
}

function handleClickListner(e){
    const target = e.target;

    if(target.id === 'arrow1' || target.className === 'arrow2'){
      const element = document.querySelector('.seven');
      window.scroll({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }

    if(target.id === 'buyNow'){
        openWhatsApp(imgSrc,imgInsertCost);
    }

    if(target.id === 'addToCart'){
        for(let i = 0;i < addToCartList.length;++i){
          if(addToCartList[i].imgSrc === imgSrc){
            addToCartList[i].toBuy = !addToCartList[i].toBuy;
            if(addToCartList[i].toBuy === true){
              showNotification('item added to bag!');
            }
            else{
              showNotification('item removed from bag');
            }
            localStorage.setItem('addToCartList', JSON.stringify(addToCartList));
            initialize();
            return;
          }
        }

        if(check(imgSrc) === false){
          const item = {
            imgSrc : imgSrc,
            'imgInsertCost' : imgInsertCost,
            'imgDelCost' : imgDelCost,
            toBuy : true
          }
          addToCartList.push(item);
        } 

        localStorage.setItem('cartItems', JSON.stringify(addToCartList));
        initialize();
        showNotification('item added to cart successfully!');
    }

    if(target.id === 'cartIcon1' || target.id === 'cartIcon2'){
        renderCart();
    }

    if(target.id === 'buyAll'){
        if(isEmpty() === true){
            showNotification('No items available to buy!');
            return;
        }
        openWhatsAppList(addToCartList);
    }

}

document.addEventListener('click',handleClickListner);

// Get a reference to the dropdown menu and the target divs
var dropdownMenu = document.querySelector('.dropdown-menu');
var targetDivs = [
  document.querySelector('.seven'),
  document.querySelector('.eight'),
  document.querySelector('.nine'),
  document.querySelector('.ten'),
  document.querySelector('.eleven'),
  document.querySelector('.twelve'),

];
var navbarHeight = document.querySelector('.navbar').offsetHeight;

// Add an event listener to each dropdown link
dropdownMenu.addEventListener('click', function(event) {
  var priceRange = event.target.textContent;
  var scrollPos;

  switch (priceRange) {
    case 'Less than 7000':
      scrollPos = targetDivs[0].offsetTop - navbarHeight;
      break;
    case '7000-8000':
      scrollPos = targetDivs[1].offsetTop - navbarHeight;
      break;
    case '8000-9000':
      scrollPos = targetDivs[2].offsetTop - navbarHeight;
      break;
    case '9000-10000':
      scrollPos = targetDivs[3].offsetTop - navbarHeight;
      break;
    case '10000-11000':
      scrollPos = targetDivs[4].offsetTop - navbarHeight;
      break;
    case 'More than 11000':
      scrollPos = targetDivs[5].offsetTop - navbarHeight;
      break;
    default:
      return;
  }

  window.scrollTo({ top: scrollPos, behavior: 'smooth' });
});

const topButton = document.getElementById('arrow1');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    topButton.classList.remove('hidden');
  } else {
    topButton.classList.add('hidden');
  }
});

function initialize(){
  addToDom(c7000Images,c7000,6999,7999,'100%','350px');
  addToDom(c8000Images,c8000,7999,8999,'100%','350px');
  addToDom(c12000Images,c12000,11999,12999,'100%','350px');
}

initialize();

