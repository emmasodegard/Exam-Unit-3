const fetch = require('node-fetch');
const ALCHEMY_API = 'https://alchemy-kd0l.onrender.com';
const playerEmail = 'emmasod@uia.no';

async function startPuzzle() {
  const startUrl = `${ALCHEMY_API}/start?player=${encodeURIComponent(playerEmail)}`;
  try {
    const response = await fetch(startUrl);
    const data = await response.json();
    console.log('Puzzle started:', data);
    return data;
  } catch (error) {
    console.error('Error starting puzzle:', error);
  }
}

async function getClue() {
  const clueUrl = `${ALCHEMY_API}/clue?player=${encodeURIComponent(playerEmail)}`;
  try {
    const response = await fetch(clueUrl);
    const clueHtml = await response.text();
    console.log('Clue HTML:', clueHtml);
    return clueHtml;
  } catch (error) {
    console.error('Error fetching clue:', error);
  }
}

async function submitAnswer(answer) {
  const answerUrl = `${ALCHEMY_API}/answer`;
  try {
    const response = await fetch(answerUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        player: playerEmail,
        answer: answer
      })
    });
    const data = await response.json();
    console.log('Answer response:', data);
    return data;
  } catch (error) {
    console.error('Error submitting answer:', error);
  }
}

async function main() {
  const puzzleData = await startPuzzle();

  const guessedAnswer = "SILVER";
  const answerData = await submitAnswer(guessedAnswer);  


  if (answerData && answerData.nextChallenge) {
    console.log('Next puzzle text:', answerData.nextChallenge);
  }
}

main();