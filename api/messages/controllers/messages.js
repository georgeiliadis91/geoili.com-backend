const { parseMultipartData, sanitizeEntity } = require('strapi-utils');



module.exports = {
	create: async (ctx) => {
		try {
			// console.log(strapi.plugins.email);
			// console.log('asdasd')
			console.log("Article.create")
			const {
				email
			} = ctx.request.body

			console.log("Article.create email", email)

			try {

				const sendMail = await strapi.plugins['email'].services.email.send({
					to: email,
					from: 'georgeiliadis@gmail.com',
					replyTo: 'george.iliadis.91@gmail.com',
					subject: 'George Iliadis',
					text: 'Your message has been received. Thank you for contacting me.',
					html: 'Your message has been received. Thank you for contacting me.',
				});
				console.log('sendMail', sendMail);
			} catch (error) {
				console.log(error)
			}



			console.log("Article.created the email");


			if (ctx.is('multipart')) {
				const { data, files } = parseMultipartData(ctx);
				entity = await strapi.services.messages.create(data, { files });
			} else {
				entity = await strapi.services.messages.create(ctx.request.body);
			}


			return sanitizeEntity(entity, { model: strapi.models.messages });

		} catch (e) {
			console.log(e);
		}

		// return 'success!';
	},
};