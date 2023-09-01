import cloudinary from "cloudinary";
import './cloudinary'

export async function uploadImage(image: string, folder: string ): Promise<string> {
    const uploadResult = await cloudinary.v2.uploader.upload(image, {
        folder: folder
    })

    return uploadResult.secure_url
}