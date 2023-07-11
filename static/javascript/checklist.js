//close 버튼 누르면 모달 종료
function closeModal() {
    const modalContainer = document.getElementById("modalContainer");
    modalContainer.style.display = "none";
}

// 모달 열기 함수
function openModal() {
    const modalContainer = document.getElementById('modalContainer');
    modalContainer.style.display = 'flex';
    setTimeout(initializeModal, 0); // 모달이 열린 후에 초기화
}

document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.checkbox > .first_checkbox');
    let clicked = false;

    checkbox.addEventListener('click', function () {
        clicked = !clicked;

        if (clicked) {
            this.style.background = '#5377FF';
            //cnt올리기?
        } else {
            this.style.background = '#FFFFFF';
            //cnt내리기?
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.checkbox > .second_checkbox');
    let clicked = false;

    checkbox.addEventListener('click', function () {
        clicked = !clicked;

        if (clicked) {
            this.style.background = '#5377FF';
            //cnt올리기?
        } else {
            this.style.background = '#FFFFFF';
            //cnt내리기?
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.checkbox > .third_checkbox');
    let clicked = false;

    checkbox.addEventListener('click', function () {
        clicked = !clicked;

        if (clicked) {
            this.style.background = '#5377FF';
            //cnt올리기?
        } else {
            this.style.background = '#FFFFFF';
            //cnt내리기?
        }
    });
});

const items = document.querySelectorAll('.checkbox');

items.forEach(item => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('active')) {
            items.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

let clicked1 = false;
let clicked2 = false;
let clicked3 = false;
document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.modal > .checkboxContainer> #item1');


    checkbox.addEventListener('click', function () {
        clicked1 = !clicked1;

        if (clicked1 && !clicked2 && !clicked3) {
            this.style.background = '#5377FF';
            //cnt올리기?
        } else {
            this.style.background = '#FFFFFF';
            //cnt내리기?
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.modal > .checkboxContainer> #item2');

    checkbox.addEventListener('click', function () {
        clicked2 = !clicked2;

        if (!clicked1 && clicked2 && !clicked3) {
            this.style.background = '#5377FF';
            //cnt올리기?
        } else {
            this.style.background = '#FFFFFF';
            //cnt내리기?
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.modal > .checkboxContainer> #item3');

    checkbox.addEventListener('click', function () {
        clicked3 = !clicked3;

        if (!clicked1 && !clicked2 && clicked3) {
            this.style.background = '#5377FF';
            //cnt올리기?
        } else {
            this.style.background = '#FFFFFF';
            //cnt내리기?
        }
    });
});