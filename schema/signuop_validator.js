
const signupData = {
    schema: {
        body: {
            type: 'object',
            required: ['username',
                'password',
                'email',
                'store_name',
                'is_notification'],

            username: { type: "string" },
            password: { type: "string" },
            email: { type: "string" },
            store_name: { type: "string" },
         
            is_notification: { type: "string" },
           


        }
    }
}
export default {
    signupData
}