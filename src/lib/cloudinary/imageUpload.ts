import cloudinary from "cloudinary";
import './cloudinary'

export async function imageUpload(image: string ): Promise<string> {
    const uploadResult = await cloudinary.v2.uploader.upload(image, {
        folder: 'user-profile'
    })

    return uploadResult.secure_url
}