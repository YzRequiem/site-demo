import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from "@sveltejs/kit"

const newContactSchema = z.object({
    name: z.string().min(1).max(100),
    email: z.string().email().min(1).max(100),
    phone: z.string().min(1).max(15),
    message: z.string().min(1).max(1000),
});

export const load = async () => {
    const form = await superValidate( newContactSchema);
    return {
        form
    };
}

export const actions = {
    default: async (event) => {
        const form = await superValidate( event, newContactSchema);
        console.log(form);

        if (!form.valid) 
        {
            return fail(400, { form })
        }
        
        return {form}
        
    
    }
}



