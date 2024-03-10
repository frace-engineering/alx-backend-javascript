import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, uploadPhotoPromise])
    .then((results) => results.map(({ status, value, reason }) => ({
      status,
      value: status === 'fulfilled' ? value : `Error: ${reason.message}`,
    })));
}
