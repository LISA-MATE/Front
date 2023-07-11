var isEditClicked=false;
window.addEventListener('load', function () {
    document.getElementById('uname').disabled = true;
    document.getElementById('EmailContainer').disabled = true;
    document.getElementById('explaintext').disabled = true;
});

//수정 버튼
function editClick() {
    isEditClicked = true;

    // 수정 버튼 숨기기
    var editButton = document.getElementById('edit');
    editButton.style.display = 'none';

    var nameInput = document.getElementById('uname');
    var emailInput = document.getElementById('EmailContainer');
    var explainInput = document.getElementById('explaintext');

    nameInput.style.textAlign = 'left';
    emailInput.style.textAlign = 'left';
    explainInput.style.textAlign = 'left';

    nameInput.disabled = false;
    emailInput.disabled = false;
    explainInput.disabled = false;
}

//사진 수정 버튼 누르면 실행
function rephotoButtonClickHandler() {
    if (!isEditClicked) {
        return; // 수정 버튼을 누르지 않은 경우 작동 안됨
    }
    openModal();
}

//수정 버튼 클릭 이벤트
var editButton = document.getElementById('edit');
editButton.onclick = function () {
    editClick();
};


//사진 수정 버튼 클릭 이벤트
var rephotoButton = document.getElementById('rephoto');
rephotoButton.onclick = function () {
    if (isEditClicked) {
        rephotoButtonClickHandler();
    }
};

//close 버튼 누르면 모달 종료
function closeModal() {
    const modalContainer = document.getElementById("modalContainer");
    modalContainer.style.display = "none";
}

// 모달 초기화 여부
var isModalInitialized = false;

// 모달 초기화 함수
function initializeModal() {
    if (isModalInitialized) {
        return;
    }

    //photo에 있는 사진의 background를 photoimage에 담아 초기 값 주기
    var mainPhotoBox = document.querySelector('.photo');
    var photoBox = document.querySelector('.photoImage');
    var photoBoxStyle = getComputedStyle(mainPhotoBox);

    photoBox.style.backgroundImage = photoBoxStyle.backgroundImage;
    photoBox.style.backgroundSize = photoBoxStyle.backgroundSize;
    photoBox.style.backgroundPosition = photoBoxStyle.backgroundPosition;
    photoBox.style.backgroundRepeat = photoBoxStyle.backgroundRepeat;

    isModalInitialized = true;
}

// 모달 열기 함수
function openModal() {
    const modalContainer = document.getElementById('modalContainer');
    modalContainer.style.display = 'flex';
    setTimeout(initializeModal, 0); // 모달이 열린 후에 초기화
}

//사진 업로드 이벤트 -> input
function handleFileUpload(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        var photoBox = document.querySelector('.photoImage');
        photoBox.style.backgroundImage = `url(${e.target.result})`;
        photoBox.style.backgroundSize = 'cover';
        photoBox.style.backgroundPosition = 'center';
        photoBox.style.backgroundRepeat = 'no-repeat';

        var modalContainer = document.querySelector('.modal-container');
        var closeButton = modalContainer.querySelector('#close');

        // 이전에 등록된 이벤트 리스너 제거
        closeButton.removeEventListener('click', closeModal);

        // 닫기 버튼을 누르면 modal에서 업로드한 사진을 photo에 넣어줌
        closeButton.addEventListener('click', function () {
            modalContainer.style.display = 'none';
            var mainPhotoBox = document.querySelector('.photo');
            mainPhotoBox.style.backgroundImage = `url(${e.target.result})`;
            mainPhotoBox.style.backgroundSize = 'cover';
            mainPhotoBox.style.backgroundPosition = 'center';
            mainPhotoBox.style.backgroundRepeat = 'no-repeat';
        });
    };
    reader.readAsDataURL(file);
}

//완료 버튼
function saveClick() {
    var nameInput = document.getElementById('uname');
    var emailInput = document.getElementById('EmailContainer');
    var explainInput = document.getElementById('explaintext');
    var imageInput = document.getElementById('photoInput');
    var userImage = document.getElementById('userImageText');

    emailInput.style.textAlign = 'right';
    explainInput.style.textAlign = 'right';

    // 비활성화 처리
    nameInput.disabled = true;
    emailInput.disabled = true;
    explainInput.disabled = true;

    var editButton = document.getElementById('edit');
    editButton.style.display = 'block';

    var nameText = document.getElementById('nameText');
    var emailText = document.getElementById('emailText');
    var explainText = document.getElementById('explainText');

    nameText.textContent = nameInput.value;
    emailText.textContent = emailInput.value;
    explainText.textContent = explainInput.value;

    if (imageInput.files.length > 0) {
        var reader = new FileReader();
        reader.onload = function (e) {
            userImage.style.backgroundImage = `url(${e.target.result})`;
            userImage.style.backgroundSize = 'cover';
            userImage.style.backgroundPosition = 'center';
            userImage.style.backgroundRepeat = 'no-repeat';
        };
        reader.readAsDataURL(imageInput.files[0]);
    }
}
