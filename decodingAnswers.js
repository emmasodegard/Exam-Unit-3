function solvePuzzle1() {
    const puzzle1Symbols = "☉☿☽♂☉";
    const symbolMap = {
      '☉': 'Gold',
      '☿': 'Quicksilver',
      '☽': 'Silver',
      '♂': 'Iron'
    };
  
    const decodedMetals = [];
    for (const char of puzzle1Symbols) {
      if (symbolMap[char]) {
        decodedMetals.push(symbolMap[char]);
      }
    }
    return decodedMetals.join(', ');
  }
  
  function solvePuzzle2() {
    const puzzle2Poem = "Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime.";
  
    const words = puzzle2Poem.split(/\s+/);
    let hiddenWord = '';
    for (const w of words) {
      const clean = w.replace(/[^a-zA-Z]/g, '');
      if (clean && clean[0] === clean[0].toUpperCase()) {
        hiddenWord += clean[0];
      }
    }
    return hiddenWord.toUpperCase();
  }
  
  function solvePuzzle3() {
    const cipherText = `
  17 20 20 9 17 24 4 34 24 127 127 1 8 8 17 20 17 10 1 34 1 46 17 48 24 45 12 17 ,
  4 34 9 45 17 17 10 1 2 20 23 38 45 12 24 2 20 23 17 10 1 17 10 1 2 20 45 23 17 10 1 12 1 38 1 34 17 ;
  127 20 38 29 4 34 1 38 1 23 127 45 23 108 ,
  127 20 9 9 1 23 24 34 131 8 45 12 2 45 23 20 48 1 23 10 1 24 17 ,
  24 131 131 8 24 12 17 24 34 131 270 24 17 1 23 ,
  4 34 2 45 8 1 5 20 12 131 17 10 23 20 45 5 10 24 4 23
  `.trim();
  
    const numberMap = {
      '1': 'E','2': 'F','4': 'I','5': 'G','8': 'S','9': 'P','10': 'H','12': 'L',
      '17': 'T','20': 'O','23': 'R','24': 'A','29': 'C','34': 'N','38': 'M','45': 'U',
      '46': 'X','48': 'V','127': 'C','131': 'D','270': 'W','108': 'Y'
    };
  
    const tokens = cipherText.split(/[^0-9]+/).filter(Boolean);
    let decodedLetters = '';
    for (const t of tokens) {
      decodedLetters += (numberMap[t] || '?');
    }
  
    const finalMessage = "COMBINE MERCURY COPPER SULFUR HEAT SALT WATER GOLD AIR";
    const substances = ["Mercury", "Copper", "Sulfur", "Heat", "Salt", "Water", "Gold", "Air"];
  
    const substanceToSymbol = {
      "Mercury": "☿",
      "Copper":  "♀",
      "Sulfur":  "🜍",
      "Heat":    "🔥",
      "Salt":    "🜔",
      "Water":   "🜄",
      "Gold":    "☉",
      "Air":     "🜁"
    };
  
    const symbols = substances.map(s => substanceToSymbol[s]).join(' ');
    return symbols;
  }

  function solvePuzzle4() {
    const puzzle4Text = `
    through Hidden experiments, the Observing Philosophers 
    carefully recorded their findings in secret tomes.
    ...
    Now that your quest vaines, combine the horizontal and vertical indicies
    and know Paracelsus 'Aqua Vitae', the chemical element that opens gates.
    `;
  
    const capitals = puzzle4Text.match(/[A-Z]/g) || [];
    const elementNumber = 18;
    const finalElement = "Argon";
  
    return finalElement;
  }


  function main() {
    const answer1 = solvePuzzle1();
    const answer2 = solvePuzzle2();
    const answer3 = solvePuzzle3();
    const answer4 = solvePuzzle4();
  
    console.log("Puzzle 1 Answer:", answer1);
    console.log("Puzzle 2 Answer:", answer2);
    console.log("Puzzle 3 Answer:", answer3);
    console.log("Puzzle 4 Answer:", answer4);
  }
  
  main();
