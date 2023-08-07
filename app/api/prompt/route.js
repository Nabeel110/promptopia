import Prompt from "@models/prompt"
import { connectToDB } from "@utils/database"

export const GET = async (req, res) => {
    try {
        await connectToDB()
        const prompts = await Prompt.find({}).populate('creator')
        if (prompts) {
            return new Response(JSON.stringify(prompts), { status: 200 })
        }
    } catch (error) {
        return new Response(`Failed to retrieve prompts with error ${error}`, { status: 500 });
    }
}