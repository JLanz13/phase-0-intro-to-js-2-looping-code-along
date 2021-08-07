// Code your solutions in this file
const name = ['Lisa', "Kaitlin", "Jan", 'surprise']
const event = 'surprise'

function writeCards(name, event) {
    let sendCards = [];
    for (let i=0; i < name.length; i++) {
        sendCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
return sendCards;
}

function countDown(count = 10) {
    while (count >= 0) {
        console.log(count--);
    }
}