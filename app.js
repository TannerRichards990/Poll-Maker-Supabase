// import functions and grab DOM elements
import { createNewPoll, getPolls } from './fetch-utils.js';
import { renderPoll } from './render.js';






const createPoll = document.getElementById('create-poll');
const voteA = document.getElementById('vote-a');
const voteB = document.getElementById('vote-b');
const subtractA = document.getElementById('subtract-vote-a');
const subtractB = document.getElementById('subtract-vote-b');
const closePoll = document.getElementById('close-poll');
// let state
let question = '';
let optionA = '';
let optionB = '';
let optionAVotes = 0;
let optionBVotes = 0;
// set event listeners 

createPoll.addEventListener ('submit', (e) => {
    e.preventDefault();
    const data = new FormData(createPoll);
    question = data.get ('question');
    optionA = data.get ('option-a');
    optionB = data.get ('option-b');
    createPoll.reset();

    displayCurrentPoll();
});

voteA.addEventListener('click', () => {
    optionAVotes++;
    voteA.textContent = `Vote A:${optionAVotes}`;
});

voteB.addEventListener('click', () => {
    optionBVotes++;
    voteB.textContent = `Vote B:${optionBVotes}`;
});

subtractA.addEventListener('click', () => {
    optionAVotes--;
    displayCurrentPoll(); 
});

subtractB.addEventListener('click', () => {
    optionBVotes--;
    displayCurrentPoll();
});

closePoll.addEventListener('click', async () => {
    const data = {
        question,
        option_a: optionA,
        option_b: optionB,
        option_a_votes: optionAVotes,
        option_b_votes: optionBVotes,
    };
    await createNewPoll(data);
    question = '';
    optionA = '';
    optionB = '';
    optionAVotes = 0;
    optionBVotes = 0;

    displayCurrentPoll();
    displayPolls();

});



function displayCurrentPoll() {
    const questionEl = document.getElementById('question');
    questionEl.textContent = question;
    const optionAEl = document.getElementById('option-a');
    optionAEl.textContent = optionA;
    const optionBEl = document.getElementById('option-b');
    optionBEl.textContent = optionB;
    voteA.textContent = `Vote A:${optionAVotes}`;
    voteB.textContent = `Vote B:${optionBVotes}`;
} 

async function displayPolls() {
    const pollList = document.getElementById('poll-list');
    pollList.textContent = '';
    const polls = await getPolls();
    for (let poll of polls) {
        const div = renderPoll(poll);
        pollList.append(div);
    }
}

displayPolls();

//netlify fix