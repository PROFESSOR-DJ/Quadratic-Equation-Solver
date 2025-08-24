document.addEventListener('DOMContentLoaded', () => {
            
            const inputA = document.getElementById('input-a');
            const inputB = document.getElementById('input-b');
            const inputC = document.getElementById('input-c');
            const solveButton = document.getElementById('solve-button');
            const resultText = document.getElementById('result-text');

            //here is the main implementation
            const solveQuadratic = () => {
                
                const a = parseFloat(inputA.value);
                const b = parseFloat(inputB.value);
                const c = parseFloat(inputC.value);

                //a = 0 means it's not a quadratic equation
                if (a === 0) {
                    resultText.innerHTML = `<span class="font-bold text-red-600">Error:</span> 'a' cannot be zero for a quadratic equation.`;
                    return;
                }
                
                
                const discriminant = b * b - 4 * a * c;

                let solution = '';



                //three possible cases based on the discriminant
                if (discriminant > 0) {
                    //two distinct & real roots
                    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                    solution = `Two distinct real roots: x<sub>1</sub> = ${root1.toFixed(4)} and x<sub>2</sub> = ${root2.toFixed(4)}`;
                }
                
                else if (discriminant === 0) {
                    //one real & repeated root
                    const root = -b / (2 * a);
                    solution = `One real root: x = ${root.toFixed(4)}`;
                } 
                
                
                else {
                    //complex roots
                    const realPart = (-b / (2 * a)).toFixed(4);
                    const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(4);
                    solution = `Two complex roots: x<sub>1</sub> = ${realPart} + ${imaginaryPart}i and x<sub>2</sub> = ${realPart} - ${imaginaryPart}i`;
                }

                resultText.innerHTML = solution;
            };

            
            solveButton.addEventListener('click', solveQuadratic);
        });