// import functions and grab DOM elements



const createPoll = document.getElementById('create-poll');
const voteA = document.getElementById('vote-a');
const voteB = document.getElementById('vote-b');
const closePoll = document.getElementById('close-poll');
// let state
let question = '';
let optionA = '';
let optionB = '';
let optionAVotes = '';
let optionBVotes = '';
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
    voteA.textContent = optionAVotes;
});

voteB.addEventListener('click', () => {
    optionBVotes++;
    voteB.textContent = optionBVotes;
});

closePoll.addEventListener('click', async () => {
    const data = {
        question,
        option_a: optionA,
        option_b: optionB,
        option_a_votes: optionAVotes,
        option_b_votes: optionBVotes,
    };
    const response = await createNewPoll(data);

});



function displayCurrentPoll() {
    const questionEl = document.getElementById('question');
    questionEl.textContent = '';
    const optionAEl = document.getElementById('option-a');
    optionAEl.textContent = optionA;
    const optionBEl = document.getElementById('optionB');
    optionBEl.textContent = optionB;
    voteA.textContent = optionAVotes;
    voteB.textContent = optionBVotes;
} 







// get user input
  // use user input to update state 
  // update DOM to reflect the new state
