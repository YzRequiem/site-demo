import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

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
        .transform((texte) => texte.replace(/<\/?[^>]+(>|$)/g, "")) // Supprimer les balises HTML
        .transform((texte) => texte.replace(/[(){}[\]<>%&|^!]/g, "")), // Supprimer les caractères potentiellement dangereux pour JavaScript
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
		console.log(form);

		if (!form.valid) {
			return fail(400, { form });
		}

		return { form };
	}
};
