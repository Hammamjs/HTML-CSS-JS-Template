
let settings = document.querySelector('.settings-box'),
    toggleBox = document.querySelector('.settings-box .toggle') ,
    toggle = document.querySelector('.settings-box .toggle i') ;


    toggleBox.onclick = () => {
        if (!(toggleBox.classList.contains('open'))) {
            settings.style.left = '0';
            toggleBox.classList.add('open');
            toggle.classList.add('fa-spin');
        }else {
            settings.style.left = '-300px';
            toggleBox.classList.remove('open');
            toggle.classList.remove('fa-spin');
        }
    } 


    let spans = document.querySelectorAll('.colors-item span');

    if (localStorage.getItem('color')) {

        document.documentElement.style.setProperty('--main-color' , localStorage.getItem('color'));

        spans.forEach(el => el.classList.remove('active'));

        document.querySelector(`[data-color = '${localStorage.getItem('color')}']`).classList.add('active');

    }

    spans.forEach(span => {
        span.addEventListener('click', (span) => {
            removeActive(spans);
        document.body.style.setProperty('--main-color' , span.target.dataset.color);
        localStorage.setItem('color' , span.target.dataset.color);
        })
    });





let changeBackgroundoption = true ,
    change;



function changeBackground() {
    changeBackgroundoption = true;

    if(changeBackgroundoption === true){
let img = ['../imgs/01.jpg' , '../imgs/02.jpg' , '../imgs/03.png' , '../imgs/04.jpg' , '../imgs/05.jpg' , '../imgs/06.jpg' , '../imgs/07.jpg'],
    landing = document.querySelector('.landing');

    change = setInterval(() => {
    let randomNum = Math.floor(Math.random() * img.length);

    landing.style.backgroundImage = `url('${img[randomNum]}')`;

    console.log(randomNum)

}, 10000);

    }
}



let cancel = document.querySelector('nav .x');
let links = document.querySelector('nav ul');

cancel.onclick = () => {
    links.style.top = '-100%';
    links.style.transform = 'translateY(-50%)';
}

document.querySelector('nav .bars').onclick = () => {
    links.style.top = '0';
    links.style.transform = 'translateY(0)';
}

window.onkeyup = (e) => {
    if (e.key == "Escape") {
    links.style.top = '-100%';
    }
}



    let changeBGButtons = document.querySelectorAll('.random-background .buttons button');


    changeBGButtons.forEach (el => {
                removeActive(changeBGButtons);
        el.addEventListener('click' , (el) => {
            if(el.target.classList.contains('no')) {
                changeBackgroundoption = false;
                clearInterval(change);
                document.querySelector('.landing').style.backgroundImage = 'url("../imgs/01.jpg")'
                localStorage.setItem('changeBackground' , false)
            }else{
                changeBackgroundoption = true;
                changeBackground();
                localStorage.setItem('changeBackground' , true);
                
            }
        })
    })

    let backgroundLocalItem = localStorage.getItem('changeBackground');

    if (backgroundLocalItem !== '') {
        if (backgroundLocalItem === 'false') {
            changeBackgroundoption = false;
            clearInterval(change);
        }else {
            changeBackgroundoption = true;
            changeBackground();
        }
    }

    if (localStorage.getItem('changeBackground') === 'false') {
        document.querySelector('.no').classList.add('active');
        document.querySelector('.yes').classList.remove('active');
    }else {
        document.querySelector('.yes').classList.add('active');
    }



    let bulletsOption = document.querySelectorAll('.bullets-option .buttons button'),
        bullets = document.querySelector('.nav-bullets');

    bulletsOption.forEach(el => {
            removeActive(bulletsOption);
        
        el.addEventListener('click' , (e) => {
            if (e.target.dataset.option === 'yes') {
                bullets.style.display = 'block';
                localStorage.setItem('bullet' , 'block');
            }else {
                bullets.style.display = 'none';
                localStorage.setItem('bullet' , 'none');
            }
        })
    })


    let bulletsChossen = localStorage.getItem('bullet');
    
    if (bulletsChossen !== "") {
        if (bulletsChossen === 'none') {
        bullets.style.display = 'none';
        document.querySelector('.bullets-option .no').classList.add('active');
        document.querySelector('.bullets-option .yes').classList.remove('active');
        }else {
        bullets.style.display = 'block';
        document.querySelector('.bullets-option .yes').classList.add('active');
        }
    }

    document.querySelector('.reset-button').onclick = () => {
        localStorage.removeItem('color');
        localStorage.removeItem('changeBackground');
        localStorage.removeItem('bullet');
        window.location.reload();
    }












    let about = document.querySelector('.about'),
        skills = document.querySelectorAll('.progress span');

    let Gallery = document.querySelector('.gallery');
    let GalleryContainer = document.querySelector('.gallery .img-holder');



        window.onscroll = () => {
            if (window.scrollY >= about.offsetTop) {
                skills.forEach(skill => {
                    skill.style.width = skill.dataset.width;
                })
            }

            if (window.scrollY >= Gallery.offsetTop - 200) {
                GalleryContainer.style.left = '0'
            }
        }

        let imgArray = document.querySelectorAll('.img-holder img');



        imgArray.forEach(el => {
            el.addEventListener('click' , (img) => {
                let overlay = document.createElement('div');
                overlay.className = 'overlay';

                let popupContainer = document.createElement('div'),
                    popupImg = document.createElement('img');
                    popupImg.src = el.src;
                    popupContainer.className = 'pop-up';



                    let imgAlt = document.createElement('span'),
                        imgAltText = document.createTextNode(el.alt);

                    imgAlt.className = 'img-alt'
                    imgAlt.appendChild(imgAltText)

                        popupContainer.append(imgAlt);


                    popupContainer.appendChild(popupImg);
                    overlay.appendChild(popupContainer);


                    let closeButton = document.createElement('span'),
                        close = document.createTextNode("X");

                        closeButton.className = 'close-Button';
                        closeButton.appendChild(close);

                        popupContainer.appendChild(closeButton);

                        

                        closeButton.addEventListener('click' , () => {
                            document.querySelector('.overlay').remove();
                        })


                document.body.append(overlay)
            })
        });



        let allBullets = document.querySelectorAll('.nav-bullets .bullet');
        let allLinks = document.querySelectorAll('.landing a');






        function scrollTo(sections) {
        sections.forEach(section => {
            section.addEventListener('click' , (e) => {
                e.preventDefault();
                document.querySelector(e.target.dataset.section).scrollIntoView({
                    behavior : 'smooth',
                })
            })
        })
        }



        scrollTo(allBullets);
        scrollTo(allLinks);




        function removeActive(events) {
        events.forEach(ele => {
        ele.addEventListener('click', (e) => {
        events.forEach(e => e.classList.remove('active'));
        e.currentTarget.classList.add('active');
        })
    });
    }



