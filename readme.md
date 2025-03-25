# Exam Unit 3

## First Setup (Commit #1)
- I created a new folder named `Exam Unit 3`.
- I ran `git init` to start version control.
- I used `npm init -y` to create `package.json`.
- I installed `node-fetch` (version 2) to make HTTP requests.
- I committed these changes with the message: "initialize project with npm and git".

## Puzzle 1
I forgot to commit right after the first puzzle, but here is what happened:

- The puzzle gave me symbols: **☉☿☽♂☉**. 
- I discovered that each symbol stands for a metal in alchemy:
  - ☉ = Gold
  - ☿ = Quicksilver (the older name for Mercury)
  - ☽ = Silver
  - ♂ = Iron
  - ☉ = Gold (again)
- So the correct code was **["Gold", "Quicksilver", "Silver", "Iron", "Gold"]**.
- I used that as the answer, and the server said “Correct!” and gave me a new puzzle.

## Puzzle 2: Poem Puzzle
After the first puzzle, I received a poem:

> "Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime."

1. I quickly noticed the capital letters in the poem, and saw that it spelled out:
   - **S**till
   - **I**cy
   - **L**ethe
   - **V**eiling
   - **E**ldritch
   - **R**ime

   They form the word **SILVER**.
2. I also had a small bug in my code where I didn’t store the return value of `submitAnswer()` in a variable. This caused a “ReferenceError: answerData is not defined.” I fixed it by writing:
   ```js
   const answerData = await submitAnswer("SILVER");

## Puzzle 3: Decoding the Number Cipher and Finding the Symbols

- I took the large numeric sequence I got from the challenge and copied it into a text document.
- I systematically guessed letters for each number, testing out common words and letters until more and more of the decoded text made sense.
- Eventually, I uncovered the hidden message instructing me to combine eight alchemical substances:
  **Mercury, Copper, Sulfur, Heat, Salt, Water, Gold, Air.**
- Instead of forming a single word, I realized the puzzle wanted the **alchemical symbols** for these substances, and got the correct answer

## Puzzle 4: Elemental Matrix

- Received a puzzle with many alchemical symbols arranged in a matrix.
- Spent the most time on this puzzle because it was very difficult.
- Found a hidden message by focusing on capital letters, as learned from earlier puzzles.
- The hidden message pointed to a specific place in the symbol matrix.
- After careful checking, realized the puzzle was pointing to element number 18.
- Looked up the periodic table (Wikipedia page for Argon):
- Element 18 is Argon.
- Submitted the answer Argon, successfully solving the puzzle.

## decodingAnswers:
- Created a file that prints out the final answers for all puzzles in one go. This code performs the decryption logic.

When running this code, I get the final answers for:
- Puzzle 1: Decodes alchemical symbols (e.g., ☉, ☿, ☽, ♂) into their corresponding metals.
- Puzzle 2: Reads the capital letters in the poem and extracts the hidden word.
- Puzzle 3: Translates a numeric cipher into letters, then converts the resulting words (eight alchemical substances) into their symbolic forms.
- Puzzle 4: Interprets capital letters or other hidden clues to deduce that element #18 in the periodic table is Argon.
