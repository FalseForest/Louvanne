window.addEventListener('load', () => {
    getElements();
    addEventListeners();
    displayArtGallery();

    fillArtGallery();
    fillWritingGallery();
    fillProjectGallery();
});

let artGallery;
let writingGallery;
let projectGallery;

let artGalleryButton;
let projectGalleryButton;
let writingGalleryButton;

let artModal;
let artModalImage;
let artModalTitle;
let artModalText;

let currentModalIndex;
const artworks = [
    {
        imgUrl: 'Ivy_in_her_prime.JPG',
        title: 'Ivy in her prime',
        description: 'description'
    },
    {
        imgUrl: 'inktober_2024.JPG',
        title: 'Inktober 2024',
        description: 'description 2'
    },
    {
        imgUrl: 'undead_knight.JPG',
        title: 'Undead Knight',
        description: 'description 2'
    },
    {
        imgUrl: 'self_portait.JPG',
        title: 'Self portrait',
        description: 'description 2'
    },
    {
        imgUrl: 'DTIYS_entry_skqpart6k.JPG',
        title: 'DTIYS: skqpart6k',
        description: 'description 2'
    },
    {
        imgUrl: 'DTIYS_entry_nlx13k.JPG',
        title: 'DTIYS: nlx13k',
        description: 'description 2'
    },
    {
        imgUrl: 'brazillian_miku_trend.JPG',
        title: 'Brazillian Hatsune Miku',
        description: 'description 2'
    },
    {
        imgUrl: 'galasynth_participation.JPG',
        title: 'Galasynth participation',
        description: 'description 2'
    },
    {
        imgUrl: 'birthday_art_miku.JPG',
        title: 'Birthday art Hatsune Miku',
        description: 'description 2'
    },
    {
        imgUrl: 'lolita_poster.JPG',
        title: 'Lolita: A bedazzled heart',
        description: 'description 2'
    },
    {
        imgUrl: 'miku_pride_month.JPG',
        title: 'Hatsune Miku pride month',
        description: 'description 2'
    },
    {
        imgUrl: 'chibi_madoka.JPG',
        title: 'Chibi Madoka',
        description: 'description 2'
    },
    {
        imgUrl: 'chibi_homura.JPG',
        title: 'Chibi Homura',
        description: 'description 2'
    },
    {
        imgUrl: 'DTIYS_entry_opingpingo.JPG',
        title: 'DTIYS: opingpingo',
        description: 'description 2'
    },
    {
        imgUrl: 'art_trade_touchstarved.JPG',
        title: 'Art trade Touchstarved',
        description: 'description 2'
    },
    {
        imgUrl: 'the_key_AOT.JPG',
        title: 'The key from Attack on Titan',
        description: 'description 2'
    },
    {
        imgUrl: 'Springtime_with_lolita.JPG',
        title: 'Springtime with Lolita',
        description: 'description 2'
    },
    {
        imgUrl: 'commision_touchstarved.JPG',
        title: 'Commision: Touchstarved',
        description: 'description 2'
    },
    {
        imgUrl: 'DTIYS_entry_sodays10k.JPG',
        title: 'DTIYS: sodays10k',
        description: 'description 2'
    },
    {
        imgUrl: 'fall_of_wall_maria_AOT.JPG',
        title: 'Fall of wall Maria from Attack on Titan 2024',
        description: 'description 2'
    }
]
const writings = [
    {
        imgUrl: '',
        title: '1',
        description: 'description'
    },
    {
        imgUrl: '',
        title: '2',
        description: 'description 2'
    }
]

const projects = [
    {
        imgUrl: '',
        title: '1',
        description: 'description'
    },
    {
        imgUrl: '',
        title: '2',
        description: 'description 2'
    }
]


function addEventListeners() {
    artGalleryButton.addEventListener('click', () => {
        displayArtGallery();
    })
    writingGalleryButton.addEventListener('click', () => {
        displayWritingGallery();
    })
    projectGalleryButton.addEventListener('click', () => {
        displayProjectGallery();
    })
}

function displayArtGallery() {
    if (!artGallery.classList.contains('active')) {
        artGallery.classList.add('active');
        artGalleryButton.classList.add('active');   
    }
    if (writingGallery.classList.contains('active')) {
        writingGallery.classList.remove('active')
        writingGalleryButton.classList.remove('active')
    }
    if (projectGallery.classList.contains('active')) {
        projectGallery.classList.remove('active')
        projectGalleryButton.classList.remove('active')
    }
}

function displayWritingGallery() {
    if (artGallery.classList.contains('active')) {
        artGallery.classList.remove('active');
        artGalleryButton.classList.remove('active');
    }
    if (!writingGallery.classList.contains('active')) {
        writingGallery.classList.add('active')
        writingGalleryButton.classList.add('active')
    }
    if (projectGallery.classList.contains('active')) {
        projectGallery.classList.remove('active')
        projectGalleryButton.classList.remove('active')
    }
}

function displayProjectGallery() {
    if (artGallery.classList.contains('active')) {
        artGallery.classList.remove('active');
        artGalleryButton.classList.remove('active');
    }
    if (writingGallery.classList.contains('active')) {
        writingGallery.classList.remove('active')
        writingGalleryButton.classList.remove('active')
    }
    if (!projectGallery.classList.contains('active')) {
        projectGallery.classList.add('active')
        projectGalleryButton.classList.add('active')
    }
}

function getElements() {
    artGallery = document.getElementById('art-gallery');
    writingGallery = document.getElementById('writing-gallery');
    projectGallery = document.getElementById('project-gallery')

    artGalleryButton = document.getElementById('art-gallery-button');
    writingGalleryButton = document.getElementById('writing-gallery-button');
    projectGalleryButton = document.getElementById('project-gallery-button');

    artModal = document.getElementById('art-modal');
    artModalImage = document.getElementById('art-modal-image');
    artModalTitle = document.getElementById('art-modal-title');
    artModalText = document.getElementById('art-modal-text');
}

function fillArtGallery() {
    artworks.forEach(artwork => {
        let artItem = document.createElement('div');
        artItem.classList.add('art-item');
        const url = 'url(assets/artworks/' + artwork.imgUrl + ')';
        artItem.style.backgroundImage=url;
        artGallery.appendChild(artItem);
        artItem.addEventListener('click', () => {
            openArtModal(artworks.findIndex(a => a === artwork));
        })
    })
}

function fillWritingGallery() {
    writings.forEach(writing => {
        let writingItem = document.createElement('div');
        writingItem.classList.add('art-item');
        const url = 'url(assets/writings/' + writing.imgUrl + ')';
        writingItem.style.backgroundImage=url;
        writingGallery.appendChild(writingItem);
    })
}

function fillProjectGallery() {
    projects.forEach(project => {
        let projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        const url = 'url(assets/projects/' + project.imgUrl + ')';
        projectItem.style.backgroundImage=url;
        projectGallery.appendChild(projectItem);
    })
}

function openArtModal(index) {
    currentModalIndex = index;

    if (!artModal.classList.contains('active')) {
        artModal.classList.add('active');
    }
    const artwork = artworks[index];
    artModalImage.src = 'assets/artworks/' + artwork.imgUrl;
    artModalTitle.innerText = artwork.title;
    artModalText.innerText = artwork.description;
}

function closeModal() {
    if (artModal.classList.contains('active')) {
        artModal.classList.remove('active');
    }
}

function nextModal() {
    if (currentModalIndex < artworks.length - 1) {
        currentModalIndex++;
        openArtModal(currentModalIndex);
    } else {
        closeModal();
    }
}

function previousModal() {
    if (currentModalIndex > 0) {
        currentModalIndex--;
        openArtModal(currentModalIndex);
    } else {
        closeModal();
    }
}
