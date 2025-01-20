import init, { calculet_tax } from "./pkg/wasmweb.js";

        async function run() {
            await init(); // Initialize the WebAssembly module

            function calculateTax() {
                const income = parseFloat(document.getElementById("income").value); // Get and parse income input
                const tax = calculet_tax(income); // Calculate tax using WebAssembly function
                document.getElementById("result").innerText = `Tax: $${tax.toFixed(2)}`; // Display the result
            }

            document.getElementById("calculateButton").addEventListener("click", calculateTax); // Add event listener to button
        }