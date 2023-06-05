function extraLongFactorials(n) {
    // Write your code here
 
let fact =  BigInt(1);
for (let i = 1; i <= n; i++) {
    fact *= BigInt(i);
      
    }
   console.log(String(fact));
}
