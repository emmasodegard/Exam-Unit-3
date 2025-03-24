# Exam Unit 3

## First Setup (Commit #1)
- I created a new folder named `Exam Unit 3`.
- I ran `git init` to start version control.
- I used `npm init -y` to create `package.json`.
- I installed `node-fetch` (version 2) to make HTTP requests.
- I committed these changes with the message: "initialize project with npm and git".

## Solving Puzzle #1 (Forgot to Commit)
I forgot to commit right after the first puzzle, but here is what happened:

- The puzzle gave me symbols: **☉☿☽♂☉**. 
- I discovered that each symbol stands for a metal in alchemy:
  - ☉ = Gold
  - ☿ = Quicksilver (the older name for Mercury)
  - ☽ = Silver
  - ♂ = Iron
  - ☉ = Gold (again)
- So the correct code was **"Gold Quicksilver Silver Iron Gold"**.
- I used that as the answer, and the server said “Correct!” and gave me a new puzzle.

## Commit #2 (Poem Puzzle)
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
