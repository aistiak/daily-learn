var amqp = require('amqplib/callback_api');

// amqp.connect('amqp://localhost:5672', function(error0, connection) {
//     if (error0) {
//         throw error0;
//     }
//     connection.createChannel(function(error1, channel) {
//         if (error1) {
//             throw error1;
//         }

//         var queue = 'hello';
//         var msg = 'How are you';

//         channel.assertQueue(queue, {
//             durable: false
//         });
//         channel.sendToQueue(queue, Buffer.from(msg));

//         console.log(" [x] Sent %s", msg);
//     });
//     setTimeout(function() {
//         connection.close();
//         process.exit(0);
//     }, 500);
// });

const amqplib = require('amqplib');
// const amqpUrl =  'amqp://@localhost:5672' ;// process.env.AMQP_URL || 'amqp://localhost:5673';
const amqpUrl =  '52.221.254.141:5672' ;// process.env.AMQP_URL || 'amqp://localhost:5673';

(async () => {
  try {
    const connection = await amqplib.connect(amqpUrl, 'heartbeat=60');
    const channel = await connection.createChannel();
    console.log('Publishing');
    const exchange = 'user.signed_up';
    const queue = 'user.sign_up_email';
    const routingKey = 'sign_up_email';
    
    await channel.assertExchange(exchange, 'direct', {durable: true});
    await channel.assertQueue(queue, {durable: true});
    await channel.bindQueue(queue, exchange, routingKey);
    
    const msg = {'id': Math.floor(Math.random() * 1000), 'email': 'user@domail.com', name: 'firstname lastname'};
    await channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(msg)));
    console.log('Message published');
  } catch(e) {
    console.error('Error in publishing message', e);
  } finally {
    console.info('Closing channel and connection if available');
    await channel.close();
    await connection.close();
    console.info('Channel and connection closed');
  }
  process.exit(0);
})();