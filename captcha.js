const images = ['bike4.jpeg', 'bike3.jpeg', 'car1.jpeg', 'bike2.jpeg', 'bike1.jpeg', 'car1.jpeg'];
    const imageContainer = document.getElementById('imageContainer');
    let selectedImages = [];
    let verifyBtnClicked = 0;
    
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    function renderImages() {
      imageContainer.innerHTML = '';
      shuffle(images);
      images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.classList.add(`img${index + 1}`);
        img.onclick = () => selectImage(image, img);
        imageContainer.appendChild(img);
      });
    }

    function selectImage(image, imgElement) {
      if (selectedImages.length < 2 && !verifyBtnClicked) {
        selectedImages.push({ image, element: imgElement });
        imgElement.classList.add('selected');
        if (selectedImages.length === 2) {
          document.getElementById('verify').classList.remove('hidden');
        }
      } else {
        document.getElementById('para').innerText = 'select two images.';
        document.getElementById('para').classList.add('red');
      }
    }

    function verify() {
      verifyBtnClicked = true;
      setTimeout(() => {
        if (selectedImages[0].image === selectedImages[1].image) {
          document.getElementById('para').innerText = 'Congrats! you are Human';
          document.getElementById('para').classList.add('yellow');
        } else {
          document.getElementById('para').innerText = 'Error! You have selected the Different images.';
          document.getElementById('para').classList.add('red');
        }
        document.getElementById('verify').classList.add('hidden');
        document.getElementById('para').classList.remove('hidden');
      },500);
    }

    function reset() {
      selectedImages.forEach(({ element }) => {
        element.classList.remove('selected');
      });
      selectedImages = [];
      verifyButtonClicked = false;
      document.getElementById('verify').classList.add('hidden');
      document.getElementById('reset').classList.add('hidden');
      document.getElementById('para').classList.add('hidden');
      document.getElementById('para').classList.remove('red');
    }

    renderImages();