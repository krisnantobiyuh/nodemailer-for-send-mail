const nodemailer = require('nodemailer');
nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
        host : 'smtp.ethereal.email',
        port : 587,
        secure : false,
        auth : {
            user: 'lvkm6knprvrpg35p@ethereal.email',
            pass: 'BTtqMNWFmtysREwNMU'
        }
    });

    let mailOptions = {
        from : '"Your friend " <kris@gmail.com>',
        to : 'pasttent@gmail.com',
        subjet : 'nodemailer',
        text : 'Hello Pasttent!',
        html : '<h2>Hello</h2> <h1>pasttent</h1>'
    };
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }

    console.log('Message sent : %s', info.messageId);
    console.log('Preview URL : %s', nodemailer.getTestMessageUrl(info));
})

})