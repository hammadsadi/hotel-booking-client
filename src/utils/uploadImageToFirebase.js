import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../firebase/firebase.config";
export const uploadImageToFirebase = async (files) => {
  try {
    // Upload Image to Firebase
    const storage = getStorage(app);
    const uploadImageRef = await Promise.all(
      files?.map(async (file) => {
        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(storageRef, file);
        return storageRef;
      })
    );

    // Get URL
    const urls = await Promise.all(
      uploadImageRef.map(async (ref) => {
        const url = await getDownloadURL(ref);
        return url;
      })
    );
    return urls;
  } catch (error) {
    console.log(error.message);
  }
};
