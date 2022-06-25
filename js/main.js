
const btns = document.querySelectorAll('button');
const slider = document.querySelector('input#length');
const generate = btns[0]
const copy = btns[1]

const lorems = ['adipisci', 'agricolam', 'aliquam', 'amant', 'amet', 'aspernatur', 'assumenda', 'atque', 'autem', 'beatae', 'consectetur', 'corporis', 'corrupti', 'culpa', 'curabitur', 'delectus', 'dicta', 'dignissimos', 'distinctio', 'dolorem', 'dominam', 'elegendi', 'est', 'eveniet', 'excepturi', 'expedita', 'facere', 'felis', 'fera', 'fuga', 'illum', 'impedit', 'iusto', 'laborum', 'laudantium', 'libero', 'magnam', 'maiores', 'maximae', 'modi', 'mollitia', 'natus', 'nautae', 'nemo', 'nihil', 'nobis', 'nostrum', 'nullam', 'odit', 'omnis', 'pariatur', 'parva', 'paxum', 'perferendis', 'portat', 'praesentium', 'puella', 'pugnant', 'quibusdam', 'quidem', 'quod', 'quos', 'ratione', 'recusandae', 'reiciendis', 'repellendus', 'reprehenderit', 'repudiandae', 'rerum', 'sagitta', 'sapiente', 'sequi', 'sic', 'similique', 'silvam', 'suscipit', 'tempore', 'totam', 'tristique', 'turpis', 'ullam', 'vehicula', 'veniam', 'vero', 'vitae'];

const rocks = ['agate', 'amethyst', 'andesite', 'apatite', 'barite', 'basalt', 'calcite', 'chalcedony', 'chert', 'chrysoberyl', 'cinnabar', 'diamond', 'dolomite', 'emerald', 'epidote', 'feldspar', 'flint', 'fluorite', 'gabbro', 'garnet', 'gneiss', 'granite', 'gypsum', 'halite', 'hematite', 'jade', 'lazurite', 'limestone', 'malachite', 'marble', 'mica', 'molybdenite', 'obsidian', 'olivine', 'opal', 'orthoclase', 'pumice', 'pyrite', 'quartz', 'rhodochrosite', 'rhodonite', 'rhyolite', 'rubies', 'sandstone', 'sapphire', 'serpentinite', 'shale', 'slate', 'sodalite', 'sphalerite', 'spinel', 'talc', 'topaz', 'tourmaline', 'wulfenite', 'zircon'];

let words = ['', '', '', '', '', '', '', ''];

// when button is clicked, this will all run:
generate.addEventListener('click', function() {
    const sentences = Number(slider.value);
    let story = `Lorem gypsum dolor `;
    let index = 0;

    // unhide copy button
    copy.style.display = 'block';

    // loop
    for(i=0;i<sentences;i++) {
        if(i !== 0) {
            // any sentence after first needs a space, and new word
            let sentenceStart = capitalize(pickWord(rocks));
            story += ` ${sentenceStart}`;
        }

        // fill list of words
        words[0] = pickWord(lorems);

        for(n=1; n<8; n++) {
            words[n] = pickWord(lorems);
            // make sure the word is different from the previous
            while(words[n] == words[n-1]) {
                words[n] = pickWord(lorems);
            }
        }
    
        switch(Math.ceil(Math.random()*6)) {
            case 1:
                index = randomNumber(3);
                words[index] += ',';
                words[index + 1] += ' ' + pickWord(rocks);
                index += randomNumber(3) + 1;
                words[index] += ',';
                index = randomNumber(3) + 3;
                words[index] += ' ' + pickWord(rocks);
                break;
            case 2:
                index = randomNumber(4);
                words[index] += ' ' + pickWord(rocks);
                words[index + 1] += '. ';
                words[index + 2] = capitalize(words[index + 2]);
                words[index + 3] += ', ' + pickWord(rocks);
                if(index < 3) {
                    words[6] += ' ' + pickWord(rocks);
                }
                break;
            case 3:
                index = randomNumber(4);
                words[index] += ', ' + pickWord(rocks);
                words[index + 1] += '. ';
                words[index + 2] = capitalize(words[index + 2]) + ' ' + pickWord(rocks);
                words[index + 3] += ', ' + pickWord(rocks);
                if(index < 3) {
                    words[6] += ' ' + pickWord(rocks);
                }
                break;
            case 4:
                index = randomNumber(4);
                words[index] += ' ' + pickWord(rocks)
                words[index + 1] += '. ';
                words[index + 2] = capitalize(pickWord(rocks));
                break;
            case 5:
                index = randomNumber(5);
                words[index] += '! ';
                words[index + 1] = capitalize(words[index + 1]) + ' ' + pickWord(rocks) + ',';
                if(index < 4) {
                    words[6] += ' ' + pickWord(rocks)
                }
                break;
            case 6:
                index = randomNumber(4);
                words[index] += ' ' + pickWord(rocks);
                words[index + 1] += '? ';
                words[index + 2] = capitalize(pickWord(rocks));
                break;
        }
        //add the text
        story += ` ${words[0]} ${words[1]} ${words[2]} ${words[3]} ${words[4]} ${words[5]} ${words[6]}.`;
    }
    
    document.querySelector('p').innerText = story;
    
    generate.innerText = 'Change it';
    story =``
});


function capitalize(word) {
    const firstLetter = word.slice(0, 1);
    const rest = word.slice(1, word.length);
    return firstLetter.toUpperCase() + rest
}

function pickWord(array) {
    return array[randomNumber(array.length)];
}

function randomNumber(num) {
    return Math.floor(Math.random()*num);
}
