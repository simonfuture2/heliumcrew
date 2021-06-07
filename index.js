const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
curl --location --request GET 'https://explorer.helium.foundation/api/stats'
Date: Wed, 11 Sep 2019 19:27:51 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 137
Connection: keep-alive
cache-control: max-age=0, private, must-revalidate
server: Cowboy
strict-transport-security: max-age=31536000
x-request-id: FcN48OpTfVsmd7wAAfaR

app.get('/', (req, res) => {
  res.send('<html>
            <body>
           {
  "data": {
    "block_time": {
      "24h": 66.09640397857689,
      "30d": 87.42491905018888,
      "7d": 67.80948643193541
    },
    "token_supply": {
      "total": 229059930555864
    }
  }
}
               <p>
                <h1>LoraWAN</h1> is a long range wireless area network that works on the 915 frequency. 
               The devices we are deploying listen to verify connections from other devices and sensors on the network. This IoT network of the Future allows us to have more data in real-time, therefore, giving us the super powers of Preventative solution formulas. Imagine your child out and in trouble, well they would need to use the phone and make a call. and so forth. But what if he or she could not get to the phone, or was not able to talk. Well, a panic button sensor, would be the perfect solution to that potential vulnerability. 
                 Anyone would know, that if this button is pressed, in real-time you will be alerted to make action and start implementing your strategy for a solution.
               </p>
           </body>
          </html>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
