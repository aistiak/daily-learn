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

//         channel.assertQueue(queue, {
//             durable: false
//         });

//         console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

//         channel.consume(queue, function(msg) {
//             console.log(" [x] Received %s", msg.content.toString());
//         }, {
//             noAck: true
//         });
//     });
// });


const amqplib = require('amqplib');
// const amqpUrl = process.env.AMQP_URL || 'amqp://localhost:5672';
const amqpUrl =  'amqp://52.221.254.141:5672';

async function processMessage(msg) {
  console.log(msg.content.toString(), 'Call email API here');
  //call your email service here to send the email
}

(async () => {
    const connection = await amqplib.connect(amqpUrl, "heartbeat=60");
    const channel = await connection.createChannel();
    channel.prefetch(10);
    const queue = 'user.sign_up_email';
    process.once('SIGINT', async () => { 
      console.log('got sigint, closing connection');
      await channel.close();
      await connection.close(); 
      process.exit(0);
    });

    await channel.assertQueue(queue, {durable: true});
    await channel.consume(queue, async (msg) => {
      console.log('processing messages');      
      await processMessage(msg);
      await channel.ack(msg);
    }, 
    {
      noAck: false,
      consumerTag: 'email_consumer'
    });
    console.log(" [*] Waiting for messages. To exit press CTRL+C");
})();