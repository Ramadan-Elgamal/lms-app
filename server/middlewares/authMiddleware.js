import { clerkClient } from '@clerk/express'

export const protectEducator = async (req, res)=> {
    try {
        const userId = req.auth.useId
        const response = await clerkClient.users.getUser(userId)
        if(response.publicMetadata.role !==  'educator'){
            return res.json({message: 'Unauthorized'})
        }
        next()
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}