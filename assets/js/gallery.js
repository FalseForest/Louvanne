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
        description: 'part of a bedazzled heart universe'
    },
    {
        imgUrl: 'inktober_2024.JPG',
        title: 'Inktober day 11: snacks',
        description: `part of <a href="/Louvanne/projects/inktober.html">inktober 2024</a>\npart of the bedazzled heart universe`
    },
    {
        imgUrl: 'undead_knight.JPG',
        title: 'Undead Knight',
        description: 'A self indulgent persona insert,\nsort of a fictional self portrait as an undead knight since ive been obsessed with medieval\nfantasy lately.'
    },
    {
        imgUrl: 'self_portait.JPG',
        title: 'Self portrait',
        description: 'A self portrait where I showcase my love for gothic fantasy which is a very important genre in\nmy works. Centipedes also appear in some of my works as they are my alter ego, a kind of\nself insert or signature for some of my works when relevant. My birthmark is a source of light\nin this digital piece, i\'d like to imagine it gives me spiritual powers from time to time'
    },
    {
        imgUrl: 'DTIYS_entry_skqpart6k.JPG',
        title: 'DTIYS: skqpart6k',
        description: ''
    },
    {
        imgUrl: 'DTIYS_entry_nlx13k.JPG',
        title: 'DTIYS: nlx13k',
        description: ''
    },
    {
        imgUrl: 'brazillian_miku_trend.JPG',
        title: 'Brazilian Miku trend',
        description: 'My take on the Brazilian Miku trend that went around the globe this summer of 2024.'
    },
    {
        imgUrl: 'galasynth_participation.JPG',
        title: 'Participation for Galasynth',
        description: 'My entry for a yearly fanzine called Galasynth, where over 300 artist from around the world\nmake a digital magazine centered around fashion and the concept of Vocaloids which\noriginated from Barcelona and Japan.'
    },
    {
        imgUrl: 'birthday_art_miku.JPG',
        title: 'Birthday art Hatsune Miku',
        description: 'Something small for the infamous Vocaloids birthday and the release of her new figurine.'
    },
    {
        imgUrl: 'lolita_poster.JPG',
        title: 'Lolita; a bedazzled heart Poster',
        description: 'A potential poster for my story “Lolita; a bedazzled heart”\nYou can see my my main character Lolita staring up at the sky, and Lily the her friend\ntending to her wounds. i tried to convey the core values of the story: friendship, helping other\nand mysteries/puzzles. There\'s a small easter egg in there somewhere as well :)\n\npart of a bedazzled heart universe'
    },
    {
        imgUrl: 'miku_pride_month.JPG',
        title: 'Miku Ponytail trend X Pride Month',
        description: 'My take on the Miku ponytail trend in combination with pride month and awareness.'
    },
    {
        imgUrl: 'chibi_madoka.JPG',
        title: 'Chibi Madoka',
        description: 'A chibi version of Madoka from the show ‘puella magi madoka magica\’\nThese were intended to be made merch of: stickers and/or (acrylic) keychains'
    },
    {
        imgUrl: 'chibi_homura.JPG',
        title: 'Chibi Homura',
        description: 'A chibi version of Homura from the show ‘puella magi madoka magica\’\nThese were intended to be made merch of: stickers and/or (acrylic) keychains'
    },
    {
        imgUrl: 'DTIYS_entry_opingpingo.JPG',
        title: 'DTIYS: opingpingo',
        description: ''
    },
    {
        imgUrl: 'art_trade_touchstarved.JPG',
        title: '‘Touchstarved’ Art Trade',
        description: 'An art trade with another artist in which we drew each others original characters. I was told\nto draw their original character (right) with a fictional character Kuras from a rpg game called\n\‘touchstarved\’.'
    },
    {
        imgUrl: 'the_key_AOT.JPG',
        title: 'The key',
        description: 'A symbolic piece of fanart for the iconic show of “Attack on Titan”. I illustrated young Eren\nwith the key that will forever change his life and the future of humanity'
    },
    {
        imgUrl: 'Springtime_with_lolita.JPG',
        title: 'Springtime with Lolita',
        description: 'A fresh piece of art of my original character Lolita, but in a different color scheme to get into\nthe spring spirit <3\n\npart of a bedazzled heart universe'
    },
    {
        imgUrl: 'commision_touchstarved.JPG',
        title: 'Commision: Touchstarved',
        description: 'A commission for a dear friend that is obsessed with the new rpg game’ touchstarved’'
    },
    {
        imgUrl: 'DTIYS_entry_sodays10k.JPG',
        title: 'DTIYS: sodays10k',
        description: ''
    },
    {
        imgUrl: 'fall_of_wall_maria_AOT.JPG',
        title: 'Fall of Wall Maria',
        description: 'Art of the young trio from the show "Attack on Titan” the moment their wall collapsed\nand their lives changed forever.'
    }
]
const writings = [

]

const projects = [

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
    artModalText.innerHTML = artwork.description;
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
