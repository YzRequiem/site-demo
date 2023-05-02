import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import Mailgun from 'mailgun.js';
import formData from 'form-data';
import { PRIVATE_MAILGUN_KEY } from '$env/static/private';
import { PRIVATE_DOMAIN_NAME } from '$env/static/private';

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: 'api', key: PRIVATE_MAILGUN_KEY });
const newContactSchema = z.object({
	name: z
		.string()
		.min(1, { message: ' Veuillez renseigner un nom' })
		.max(100)
		.trim()
		.regex(new RegExp("^[A-Za-z]+(?:[ -'][A-Za-z]+)*$")),
	email: z
		.string()
		.min(1, { message: ' Veuillez rentrer une adresse email' })
		.email({ message: 'Adresse mail invalide' })
		.max(100),
	phone: z
		.string()
		.min(1, { message: 'Veuillez renseigner un numéro de téléphone' })
		.max(15, { message: 'Renseignez un numéro de téléphone valide' })
		.trim()
		.regex(/^(\+33|0)\d{9}$/),
	message: z
		.string()
		.min(1, { message: 'Veuillez nous adresser un message' })
		.max(2000)
		.transform((texte) => texte.replace(/<\/?[^>]+(>|$)/g, '')) // Supprimer les balises HTML
		.transform((texte) => texte.replace(/[(){}[\]<>%&|^!]/g, '')) // Supprimer les caractères potentiellement dangereux pour JavaScript
});

export const load = async () => {
	const form = await superValidate(newContactSchema);
	return {
		form
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, newContactSchema);
		const messageData = {
			from: form.data.email,
			to: 'leo.sallier@silver-smok.com',
			subject: 'Application Contact',
			text:
				"Nom de L'expéditeur  : " +
				form.data.name +
				'\n' +
				'Message : ' +
				form.data.message +
				'\n' +
				'Numéro de téléphone : ' +
				form.data.phone
		};

		if (!form.valid) {
			return fail(400, { form });
		} else {
			form;
			await client.messages
				.create(PRIVATE_DOMAIN_NAME, messageData)
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}
};

// You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

// You can send up to 300 emails/day from this sandbox server.
// Next, you should add your own domain so you can send 10000 emails/month for free.
