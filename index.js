const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<html>
            <body>
               <h1>
                LoraWAN is a long range wireless area network that works on the 915 frequency. 
               The devices we are deploying listen to verify connections from other devices and sensors on the network. This IoT network of the Future allows us to have more data in real-time, therefore, giving us the super powers of Preventative solution formulas. Imagine your child out and in trouble, well they would need to use the phone and make a call. and so forth. But what if he or she could not get to the phone, or was not able to talk. Well, a panic button sensor, would be the perfect solution to that potential vulnerability. 
                 Anyone would know, that if this button is pressed, in real-time you will be alerted to make action and start implementing your strategy for a solution.
               </h1>
           </body>
          </html>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
