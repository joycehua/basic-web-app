export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrewid")) {
    return (
      "Joycehua"
    );
  }
  if (query.toLowerCase().includes("name")) {
    return (
      "Joyce"
    );
  }
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }
  const minusMatch = query.match(/What is (\d+) minus (\d+)/);
  if (minusMatch) {
    const x: number = parseInt(minusMatch[1]);
    const y: number = parseInt(minusMatch[2]);
    return (x-y).toString();
  }
  const largest = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (largest) {
    const x: number = parseInt(largest[1]);
    const y: number = parseInt(largest[2]);
    const z: number = parseInt(largest[3]);
    return (Math.max(x,y,z)).toString();
  }
  const multiplyMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multiplyMatch) {
    const x: number = parseInt(multiplyMatch[1]) * parseInt(multiplyMatch[2]);
    return (x).toString();
  }

  if (findPrimesInString(query)) {
    return findPrimesInString(query).join(",");
  }
  function isPrime(number: number): boolean {
    if (number <= 1) return false;
    if (number <= 3) return true;
    
    if (number % 2 === 0 || number % 3 === 0) return false;
    
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    
    return true;
  }
function findPrimesInString(inputString: string): number[] {
  const regex = /\d+/g;
  const matches = inputString.match(regex);
  const numbers: number[] = [];

  if (matches) {
    for (const match of matches) {
      const number = parseInt(match, 10);
      if (isPrime(number)) {
        numbers.push(number);
      }
    }
  }

  return numbers;
}
  function extractNumbersFromString(inputString: string): number[] {
    const regex = /\d+/g;
    const matches = inputString.match(regex);
    
    if (matches) {
      // Convert the matched strings to numbers
      const numbers = matches.map(match => parseInt(match, 10));
      return numbers;
    } else {
      return [];
    }
  }

  function isSquareAndCube(number: number): boolean {
    const squareRoot = Math.sqrt(number);
    const cubeRoot = Math.cbrt(number);
    
    return Number.isInteger(squareRoot) && Number.isInteger(cubeRoot);
  }
  
  function findSquareAndCubeNumbers(numbers: number[]): number[] {
    const squareAndCubeNumbers: number[] = [];
    
    for (const number of numbers) {
      if (isSquareAndCube(number)) {
        squareAndCubeNumbers.push(number);
      }
    }
    
    return squareAndCubeNumbers;
  }
  const cubeAndSquare = query.match(/a square and a cube/);
  if (cubeAndSquare) {
    const numbersToCheck = extractNumbersFromString(query);
    const result = findSquareAndCubeNumbers(numbersToCheck);
    return result.join(",");
  }

  


  return "";
}
