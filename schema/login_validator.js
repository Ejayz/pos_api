
const loginData = {
    schema: {
        body: {
            type: 'object',
            required: ['username',
                'password',
              ],
            username: { type: "string" },
            password: { type: "string" },
        }
    }
}
export default {
    loginData
}